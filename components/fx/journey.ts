import poses from "./poses.json";
import { PAW } from "./pawtrail";

type Part = [string | null, string | null, string];
const P = poses as unknown as Record<string, { parts: Record<string, Part> }>;
const NUM = /-?\d+(?:\.\d+)?/g;
const rnd = <T,>(a: T[], not?: T) => { const b = a.filter((x) => x !== not); return b[Math.floor(Math.random() * b.length)]; };
const smooth = (t: number) => { t = Math.min(1, Math.max(0, t)); return t * t * (3 - 2 * t); };
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function mix(a: string, b: string, t: number) {
  const na = a.match(NUM), nb = b.match(NUM);
  if (!na || !nb || na.length !== nb.length || a.replace(NUM, "#") !== b.replace(NUM, "#")) return t < 0.5 ? a : b;
  let i = 0;
  return b.replace(NUM, () => { const v = lerp(+na[i], +nb[i], t); i++; return String(+v.toFixed(3)); });
}

/** Scroll-following mascot: holds at each stop, walks between stops, reacts to clicks, idles. */
export function startJourney(main: HTMLElement): () => void {
  const actor = main.querySelector<HTMLElement>(".pup-actor");
  const body = actor?.firstElementChild as HTMLElement | undefined;
  const svg = body?.querySelector("svg");
  const layer = actor?.parentElement;
  const stops = [...document.querySelectorAll<HTMLElement>(".pup-stop")].filter((s) => s.getClientRects().length);
  if (!actor || !body || !svg || !layer || stops.length < 1 || matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  const part = new Map<string, SVGElement>();
  svg.querySelectorAll<SVGElement>("[data-p]").forEach((e) => part.set(e.dataset.p!, e));
  const bubbleAt = actor.querySelector<HTMLElement>(".pup-bubble-at");
  const bubble = actor.querySelector<HTMLElement>(".pup-bubble");
  const prints = [...document.querySelectorAll<HTMLElement>(".pup-prints")].pop();
  const printEls: SVGSVGElement[] = [];
  if (prints) {
    prints.replaceChildren();
    for (let i = 0; i < 10; i++) {
      const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      s.setAttribute("viewBox", "0 0 64 64");
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", PAW);
      s.append(p); prints.append(s); printEls.push(s);
    }
  }
  let printI = 0;

  // ---- pose state (tweened) ----
  const written = new Map<string, string>();
  const put = (n: string, k: "transform" | "opacity", v: string | null) => {
    const el = part.get(n); if (!el) return;
    const key = n + k;
    if (v === null) { if (written.has(key)) { el.removeAttribute(k); written.delete(key); } return; }
    if (written.get(key) !== v) { el.setAttribute(k, v); written.set(key, v); }
  };
  let from: Record<string, Part> = {}, to: Record<string, Part> = {}, curKey = "", tweenT0 = 0;
  const cur: Record<string, [string | null, string | null]> = {};
  const setPose = (key: string, now: number) => {
    if (key === curKey || !P[key]) return;
    from = {}; for (const [n, v] of Object.entries(to)) from[n] = [cur[n]?.[0] ?? v[0], cur[n]?.[1] ?? v[1], ""];
    to = P[key].parts; curKey = key; tweenT0 = now;
    if (!Object.keys(from).length) from = JSON.parse(JSON.stringify(to));
  };

  // ---- timed effects ----
  let ov: Record<string, { tr?: string; op?: string }> = {};
  let hopAmp = 0, hopT0 = -1, hopDur = 0.5;
  let cock = 0, cockTo = 0;
  let woofUntil = 0, loveUntil = 0, sneezeAt = 0;
  let bubbleUntil = 0;
  const say = (text: string, now: number, secs = 1.4) => { if (!bubble) return; bubble.textContent = text; bubble.dataset.show = "true"; bubbleUntil = now + secs; };
  const hop = (amp: number, now: number, dur = 0.5) => { hopAmp = amp; hopT0 = now; hopDur = dur; };
  const hearts = (x: number, y: number) => {
    for (let i = 0; i < 5; i++) {
      const h = document.createElement("span");
      h.className = "pup-heart"; h.textContent = "♥"; h.style.left = `${x}px`; h.style.top = `${y}px`;
      layer.append(h);
      const dx = (Math.random() - 0.5) * 90, dy = -70 - 60 * Math.random();
      h.animate([{ transform: "translate(-50%,0) scale(.4)", opacity: 0 }, { opacity: 1, offset: 0.2 }, { transform: `translate(calc(-50% + ${dx.toFixed(0)}px),${dy.toFixed(0)}px) scale(1.1)`, opacity: 0 }], { duration: 1150 + 110 * i, delay: 80 * i, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }).finished.then(() => h.remove(), () => h.remove());
    }
  };

  // ---- frame loop ----
  let t = performance.now() / 1000, lastY = scrollY, lastScroll = t, facing = 1, facingTo = 1, phase = 0, nextBlink = t + 2, blinkAt = -9;
  let pos = { x: 0, y: 0, s: 1 }, last = { x: NaN, y: NaN }, walked = 0, still = 0, lastPrintAt = 0, idleSaid = 0;
  let lastReact = "", introDone = false;
  const small = () => matchMedia("(max-width: 767px)").matches;
  const info = (el: HTMLElement, rect = el.getBoundingClientRect()) => {
    const k = rect.width / 300;
    const s = el.dataset.act === "basket" || small() ? k : 1.12 * k;
    const p = el.dataset.pose === "peek" ? { x: 150, y: 159 } : { x: 150, y: 228 };
    return { x: rect.left + p.x * (k - s), y: rect.top + p.y * (k - s), s, k, rect };
  };
  const clampY = (y: number, s: number) => {
    const hdr = (document.getElementById("site-header")?.offsetHeight ?? 76) + 8;
    return Math.min(Math.max(y, hdr), innerHeight - 240 * s * 0.95);
  };

  type Stop = { key: string; face: number; held: boolean; passed: boolean; d: number; score: number; pos: () => { x: number; y: number; s: number }; edge: (at: number) => { x: number; y: number; s: number } };
  const scenes = [...document.querySelectorAll<HTMLElement>("#main [data-pup-scene]")].filter((sc) => !sc.contains(stops[0]));
  const build = (vh: number, lo: number, hi: number, mid: number): Stop[] => {
    const dom: Stop[] = stops.map((el) => {
      const r = el.getBoundingClientRect(), c = (r.top + r.bottom) / 2, a = info(el, r);
      const at = (y: number) => ({ x: a.x, y: clampY(y - r.height / 2 + (a.y - r.top), a.s), s: a.s });
      return { key: el.className.split(" ").pop()!, face: el.dataset.facing === "left" ? -1 : 1, held: c > lo && c < hi, passed: c <= lo, d: c <= lo ? lo - c : Math.max(0, c - hi), score: Math.abs(c - mid), pos: () => ({ x: a.x, y: a.y, s: a.s }), edge: at };
    });
    if (!small()) return dom;
    const lane: Stop[] = scenes.map((sc, i) => {
      const r = sc.getBoundingClientRect(), left = i % 2 === 0, s = Math.min(0.62, Math.max(0.5, innerWidth / 650));
      const bar = document.querySelector("[data-whatsapp-bar]");
      const floor = bar?.getClientRects().length ? bar.getBoundingClientRect().top : vh - 6;
      // calibrated against the original: visible edge sits 10px in from the screen side
      const p = { x: left ? 10 - 137 * s : document.documentElement.clientWidth - 10 - 163 * s, y: floor - 159 * s, s };
      return { key: "tp-hero__teddy", face: left ? 1 : -1, held: r.top <= mid && r.bottom > mid, passed: r.bottom <= mid, d: r.bottom <= mid ? mid - r.bottom : Math.max(0, r.top - mid), score: 1e6, pos: () => p, edge: () => p };
    });
    return [...lane, ...dom];
  };

  document.documentElement.dataset.pup = small() ? "lane" : "live";
  let raf = 0;
  const frame = () => {
    const now = performance.now() / 1000, dt = Math.min(0.05, now - t); t = now;
    const sy = scrollY, vel = sy - lastY; lastY = sy;
    if (Math.abs(vel) > 0.5) { lastScroll = now; idleSaid = 0; }
    const vh = innerHeight, lo = vh * 0.1, hi = vh * 0.9, mid = vh * 0.55;

    // stops: real ones (home) or, on other pages, edge-peeks per scene ending at the basket
    const list = build(vh, lo, hi, mid);
    let act = -1, best = Infinity;
    list.forEach((st, i) => { if (st.held && st.score < best) { best = st.score; act = i; } });
    let key = "", walking = false, tx = 0, ty = 0, ts = 1, faceDir = facingTo;
    if (act >= 0) {
      const a = list[act].pos();
      tx = a.x; ty = a.y; ts = a.s; key = list[act].key; faceDir = list[act].face;
      walking = key === "tp-meet__teddy" && now - lastScroll < 0.25;
    } else {
      let pi = -1, ni = -1;
      list.forEach((st, i) => { if (st.passed) pi = i; else if (ni < 0) ni = i; });
      if (pi < 0 && ni < 0) pi = ni = 0;
      const PA = list[pi < 0 ? ni : pi], PB = list[ni < 0 ? pi : ni];
      const A = PA.edge(lo), B = PB.edge(hi);
      const dPrev = pi < 0 ? 0 : PA.d, dNext = ni < 0 ? 0 : PB.d;
      const u = pi < 0 ? 0 : ni < 0 ? 1 : dPrev / Math.max(1, dPrev + dNext), e = smooth(u);
      const dx = B.x - A.x, bow = Math.sin(Math.PI * e) * Math.min(60, Math.abs(dx) * 0.2) * (dx >= 0 ? 1 : -1);
      tx = lerp(A.x, B.x, e) + bow; ty = lerp(A.y, B.y, e); ts = lerp(A.s, B.s, smooth(u / 0.65));
      key = "tp-meet__teddy"; walking = true;
      faceDir = Math.abs(dx) > 8 ? (dx > 0 ? 1 : -1) : facingTo;
    }
    facingTo = faceDir; facing += (facingTo - facing) * (1 - Math.exp(-dt / 0.07));
    if (Math.abs(facing - facingTo) < 0.01) facing = facingTo;

    // distance walked → stride phase + footprints
    const moved = Number.isNaN(last.x) ? 0 : Math.hypot(tx - last.x, ty - last.y);
    last = { x: tx, y: ty };
    still = moved > 0.25 || Math.abs(vel) > 0.5 ? 0 : still + dt;
    if (walking) phase += (moved + Math.abs(vel) * 0.35) / (34 * ts) * Math.PI;
    if (walking && act < 0) {
      walked += moved;
      if (walked > 34 * ts && now - lastPrintAt > 0.08 && prints) {
        walked = 0; lastPrintAt = now;
        const odd = printI & 1, l = odd ? 186 : 110, el = printEls[printI++ % printEls.length];
        const px = tx + (facing > 0 ? l : 300 - l) * ts, py = ty + 226 * ts + (odd ? -4 : 4) * ts;
        const rc = prints.getBoundingClientRect(), w = 14 * Math.max(0.75, 1.5 * ts);
        const ang = Math.atan2(ty - (pos.y || ty), tx - (pos.x || tx)) + Math.PI / 2;
        el.style.transform = `translate(${(px - rc.left - w / 2).toFixed(1)}px, ${(py - rc.top - w / 2).toFixed(1)}px) rotate(${ang.toFixed(3)}rad)`;
        el.style.width = el.style.height = `${w.toFixed(1)}px`;
        el.animate([{ opacity: 0 }, { opacity: 0.45, offset: 0.08 }, { opacity: 0.45, offset: 0.5 }, { opacity: 0 }], { duration: 2600, easing: "ease-out" });
      }
    }
    if (act < 0 && still > 2.6 && now > idleSaid) { say("coming?", now); idleSaid = now + 8; }

    // idle behaviours at a stop
    if (act >= 0 && now - lastScroll > 9 && now > idleSaid) {
      idleSaid = now + 12;
      if (Math.random() < 0.55) { say("hm?", now, 1.8); cockTo = -14; setTimeout(() => (cockTo = 12), 800); setTimeout(() => (cockTo = 0), 1600); }
      else { hop(0.5, now, 0.4); }
    }
    if (!introDone && now - (performance.timeOrigin ? 0 : 0) >= 0 && act === 0 && sy < 50 && stops[0].dataset.act === "peekaboo") {
      introDone = true; setTimeout(() => say("peekaboo!", performance.now() / 1000, 1.6), 700);
    }

    // pose tween
    setPose(key, now);
    const k = smooth((now - tweenT0) / 0.28);
    for (const n of Object.keys(to)) {
      const tp = to[n], fp = from[n] ?? tp;
      const tr = tp[0] === null ? null : fp[0] === null ? tp[0] : mix(fp[0], tp[0], k);
      const op = tp[1] === null ? null : fp[1] === null ? tp[1] : String(+lerp(+fp[1], +tp[1], k).toFixed(3));
      cur[n] = [tr, op];
    }

    // overrides: walk legs, blink, wag, cock, speech states
    ov = {};
    if (walking) {
      const a = 20 * Math.sin(phase);
      const leg = (n: string, x: number, y: number, d: number) => (ov[n] = { tr: `translate(${x} ${y}) rotate(${d.toFixed(2)})` });
      leg("bf", 94, 192, a); leg("fn", 186, 194, a); leg("ff", 168, 192, -a); leg("bn", 110, 194, -a);
      ov.body = { tr: `translate(0 ${(-Math.abs(Math.sin(phase)) * 2).toFixed(2)}) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)` };
    }
    if (now > nextBlink && key !== "tp-hero__teddy") { blinkAt = now; nextBlink = now + 2.2 + 3.8 * Math.random(); }
    if (now - blinkAt < 0.15) { ov.open = { op: "0" }; ov.shut = { op: "1" }; }
    const tailBase = cur.tail?.[0]?.match(NUM);
    if (tailBase && !walking) ov.tail = { tr: `rotate(${(+tailBase[0] + 9 * Math.sin(now * 7)).toFixed(2)} 84 150)` };
    cock += (cockTo - cock) * (1 - Math.exp(-dt / 0.1));
    const hd = (ov.head?.tr ?? cur.head?.[0]);
    if (hd && Math.abs(cock) > 0.05) ov.head = { tr: hd.replace(/rotate\((-?[\d.]+)/, (_, v) => `rotate(${(+v + cock).toFixed(2)}`) };
    if (now < woofUntil) { ov.mouth = { op: "1" }; ov.open = { op: "0" }; }
    if (now < loveUntil) { ov.happy = { op: "1" }; ov.open = { op: "0" }; ov.tongue = { op: "1" }; }
    for (const n of part.keys()) {
      const o = ov[n], c = cur[n];
      put(n, "transform", o?.tr ?? c?.[0] ?? null);
      put(n, "opacity", o?.op ?? c?.[1] ?? null);
    }
    // root: facing + hop
    let hy = 0;
    if (hopT0 >= 0) { const u = (now - hopT0) / hopDur; if (u >= 1) hopT0 = -1; else hy = -hopAmp * 38 * Math.sin(Math.PI * u); }
    if (sneezeAt && now > sneezeAt) { sneezeAt = 0; cockTo = 10; hop(0.35, now, 0.3); say("achoo!", now, 1.3); setTimeout(() => (cockTo = 0), 700); }
    put("root", "transform", `translate(0.0 ${hy.toFixed(1)}) translate(150 0) scale(${(Math.abs(facing) < 0.02 ? 0.02 : facing).toFixed(3)} 1) translate(-150 0)`);

    // place
    pos = { x: tx, y: ty, s: ts };
    actor.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0px)`;
    body.style.transform = `scale(${ts.toFixed(4)})`;
    actor.dataset.holding = String(act >= 0);
    if (bubble && bubble.dataset.show === "true" && now > bubbleUntil) bubble.dataset.show = "false";
    if (bubbleAt) bubbleAt.style.transform = `translate(${((facing > 0 ? 214 : 86) * ts).toFixed(1)}px, ${(30 * ts).toFixed(1)}px)`;
    raf = requestAnimationFrame(frame);
  };
  raf = requestAnimationFrame(frame);

  // click / pet reactions
  const onClick = () => {
    const now = performance.now() / 1000;
    lastScroll = now;
    const r = rnd(["jump", "woof", "love", "sneeze"], lastReact); lastReact = r;
    if (r === "jump") { hop(1.35, now, 0.55); say(rnd(["wheee!", "boing!", "yip!"]), now); setTimeout(() => hop(0.7, performance.now() / 1000, 0.4), 520); }
    else if (r === "woof") { woofUntil = now + 0.3; say("woof!", now); setTimeout(() => (woofUntil = performance.now() / 1000 + 0.3, say("woof woof!", performance.now() / 1000)), 420); }
    else if (r === "love") { loveUntil = now + 1.9; hop(0.5, now, 0.4); const rc = body.getBoundingClientRect(); hearts(rc.left + (facing > 0 ? 212 : 88) * pos.s, rc.top + 40 * pos.s); say("I like you!", now, 1.5); }
    else { cockTo = -8; sneezeAt = now + 0.32; }
  };
  actor.addEventListener("click", onClick);

  return () => { cancelAnimationFrame(raf); actor.removeEventListener("click", onClick); delete document.documentElement.dataset.pup; };
}

/** Hero lineup: pups take turns ducking and popping up, name tag shows briefly. */
export function startLineup(): () => void {
  const list = document.querySelector<HTMLElement>("ul.tp-lineup:not(.tp-lineup--tags)");
  if (!list || matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  const pups = [...list.querySelectorAll<HTMLElement>(".tp-lineup__pup")];
  const ghosts = [...document.querySelectorAll<HTMLElement>(".tp-lineup--tags .tp-lineup__ghost")];
  const timers: ReturnType<typeof setTimeout>[] = [];
  const hero = list.closest<HTMLElement>("[data-pup-scene]");
  let visible = true, quietUntil = 0, i = -1;
  const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.35 });
  io.observe(list);
  const bump = () => (quietUntil = performance.now() + 1200);
  addEventListener("scroll", bump, { passive: true });
  const delays = [1900, 2500, 1700, 2300, 2000, 2800, 1800];
  let n = 0, stop = false;
  const later = (f: () => void, ms: number) => timers.push(setTimeout(f, ms));
  const step = () => {
    if (stop) return;
    if (document.hidden || !visible || performance.now() < quietUntil || hero?.dataset.here === "false") return later(step, 900);
    let j = Math.floor(Math.random() * pups.length); if (j === i) j = (j + 1) % pups.length; i = j;
    pups[j].dataset.state = "duck";
    later(() => { pups[j].dataset.state = "pop"; ghosts[j]?.setAttribute("data-tag", "show"); later(() => ghosts[j]?.removeAttribute("data-tag"), 1800); later(() => pups[j].removeAttribute("data-state"), 700); }, 360);
    later(step, delays[n++ % delays.length]);
  };
  later(step, 2800);
  return () => { stop = true; timers.forEach(clearTimeout); io.disconnect(); removeEventListener("scroll", bump); };
}

/** Standalone buddies (self-portrait etc.): tilt + "hm?" now and then, and react when clicked. */
export function startBuddies(): () => void {
  const roaming = !!document.documentElement.dataset.pup;
  const buddies = [...document.querySelectorAll<HTMLElement>(".pup-buddy")].filter((b) => (roaming ? !b.closest(".pup-stop") : true) && b.querySelector(".pup-bubble"));
  const timers: ReturnType<typeof setTimeout>[] = [];
  const cleanups: (() => void)[] = [];
  const later = (f: () => void, ms: number) => timers.push(setTimeout(f, ms));
  buddies.forEach((b, bi) => {
    const svg = b.querySelector("svg")!;
    const el = (n: string) => svg.querySelector<SVGElement>(`[data-p="${n}"]`);
    const head = el("head"), root = el("root");
    const bub = b.querySelector<HTMLElement>(".pup-bubble")!;
    const baseHead = head?.getAttribute("transform") ?? "", baseRoot = root?.getAttribute("transform") || "translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)";
    const rot = (d: number) => head?.setAttribute("transform", baseHead.replace(/rotate\((-?[\d.]+)/, (_, v) => `rotate(${(+v + d).toFixed(1)}`));
    let hideT: ReturnType<typeof setTimeout>;
    const say = (text: string, ms = 1400) => { bub.textContent = text; bub.dataset.show = "true"; clearTimeout(hideT); hideT = setTimeout(() => (bub.dataset.show = "false"), ms); };
    const hop = (amp: number, dur = 450) => {
      const t0 = performance.now();
      const f = () => {
        const u = (performance.now() - t0) / dur;
        const y = u >= 1 ? 0 : -amp * 30 * Math.sin(Math.PI * u);
        root?.setAttribute("transform", baseRoot.replace(/^translate\(([-\d.]+) [-\d.]+\)/, `translate($1 ${y.toFixed(1)})`));
        if (u < 1) requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    };
    const flip = (names: Record<string, string>, ms: number) => {
      const prev: Record<string, string | null> = {};
      for (const [n, v] of Object.entries(names)) { prev[n] = el(n)?.getAttribute("opacity") ?? null; el(n)?.setAttribute("opacity", v); }
      later(() => { for (const [n, v] of Object.entries(prev)) { if (v === null) el(n)?.removeAttribute("opacity"); else el(n)?.setAttribute("opacity", v); } }, ms);
    };
    const hearts = () => {
      const w = b.clientWidth;
      for (let i = 0; i < 5; i++) {
        const h = document.createElement("span");
        h.className = "pup-heart"; h.textContent = "♥"; h.style.left = `${w * 0.55}px`; h.style.top = `${w * 0.1}px`;
        b.append(h);
        const dx = (Math.random() - 0.5) * 80, dy = -60 - 50 * Math.random();
        h.animate([{ transform: "translate(-50%,0) scale(.4)", opacity: 0 }, { opacity: 1, offset: 0.2 }, { transform: `translate(calc(-50% + ${dx.toFixed(0)}px),${dy.toFixed(0)}px) scale(1.1)`, opacity: 0 }], { duration: 1150 + 110 * i, delay: 80 * i, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }).finished.then(() => h.remove(), () => h.remove());
      }
    };
    let last = "";
    const onClick = () => {
      const r = [...["jump", "woof", "love", "sneeze"]].filter((x) => x !== last); const pick = r[Math.floor(Math.random() * r.length)]; last = pick;
      if (pick === "jump") { hop(1.3); say(["wheee!", "boing!", "yip!"][Math.floor(Math.random() * 3)]); later(() => hop(0.7, 380), 480); }
      else if (pick === "woof") { flip({ mouth: "1", open: "0" }, 280); say("woof!"); later(() => { flip({ mouth: "1", open: "0" }, 280); say("woof woof!"); }, 420); }
      else if (pick === "love") { flip({ happy: "1", open: "0", tongue: "1" }, 1800); hop(0.5, 400); hearts(); say("I like you!", 1500); }
      else { rot(-8); later(() => { rot(10); hop(0.35, 300); say("achoo!"); }, 320); later(() => rot(0), 1000); }
    };
    svg.addEventListener("click", onClick);
    cleanups.push(() => svg.removeEventListener("click", onClick));
    const run = () => {
      say("hm?", 1800);
      rot(-14); later(() => rot(12), 800); later(() => rot(0), 1600);
      later(run, 7000 + Math.random() * 5000);
    };
    later(run, 1500 + bi * 900);
  });
  return () => { timers.forEach(clearTimeout); cleanups.forEach((f) => f()); };
}
