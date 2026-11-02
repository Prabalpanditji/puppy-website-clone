"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { startJourney, startLineup, startBuddies } from "./journey";
import { startPawTrail } from "./pawtrail";

const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const set = (e: HTMLElement, k: string, v: string | false) => (v === false ? e.removeAttribute(`data-${k}`) : e.dataset[k] !== v && (e.dataset[k] = v));

/** Scroll-driven state the original page applies from JS: reveals, scene focus, chat steps, pinned door hall, mascot. */
export default function Behaviors() {
  const path = usePathname();
  useEffect(() => {
    const off: (() => void)[] = [];
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = () => matchMedia("(min-width: 1024px)").matches;

    // reveal
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).dataset.revealed = "true"; io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    $$("[data-reveal]").forEach((e) => io.observe(e));
    off.push(() => io.disconnect());

    // chat steps
    const steps = $$("ol.tp-chat__steps > li");
    const groups = $$(".tp-msg-group");
    const typing = document.querySelector<HTMLElement>(".tp-typing");
    const status = document.querySelector<HTMLElement>(".tp-phone__status");
    let cur = -1, timer: ReturnType<typeof setTimeout> | undefined;
    const paintChat = (typingNow: boolean) => {
      const k = desktop() && !reduced ? cur : steps.length - 1;
      steps.forEach((s, i) => { set(s, "done", i < k ? "true" : false); set(s, "active", i === k ? "true" : false); });
      groups.forEach((g, i) => set(g, "show", i < k || (i === k && !typingNow) ? "true" : "false"));
      if (typing) set(typing, "show", typingNow ? "true" : "false");
      if (status) status.textContent = typingNow ? "typing…" : "online";
    };
    if (steps.length) {
      paintChat(false);
      if (desktop() && !reduced) {
        const sio = new IntersectionObserver(
          (es) => es.forEach((e) => {
            if (!e.isIntersecting) return;
            const k = steps.indexOf(e.target as HTMLElement);
            if (k <= cur) return;
            cur = k; paintChat(true); clearTimeout(timer);
            timer = setTimeout(() => paintChat(false), 750);
          }),
          { rootMargin: "-28% 0px -62% 0px" },
        );
        steps.forEach((s) => sio.observe(s));
        off.push(() => { sio.disconnect(); clearTimeout(timer); });
      }
    }

    // meet hall (pinned horizontal walk)
    const range = document.querySelector<HTMLElement>(".tp-meet [data-pin-range]");
    const track = document.querySelector<HTMLElement>(".tp-meet__track");
    const hall = document.querySelector<HTMLElement>(".tp-meet__hall");
    const meet = document.querySelector<HTMLElement>(".tp-meet");
    let layoutMeet = () => {};
    let paintMeet = () => {};
    if (range && track && hall && meet) {
      let travel = 0, pinned = false, x = 0, target = 0;
      layoutMeet = () => {
        pinned = desktop() && !reduced;
        track.style.transform = "";
        if (pinned) {
          const stage = hall.parentElement!;
          const head = stage.querySelector<HTMLElement>(".tp-meet__head");
          const plate = Math.max(64, ...$$(".tp-door__plate", track).map((p) => p.offsetHeight));
          const floor = hall.querySelector<HTMLElement>(".tp-meet__floor")?.offsetHeight ?? 0;
          const w = Math.max(128, Math.min(256, 0.15 * innerWidth, (stage.clientHeight - (head ? head.offsetTop + head.offsetHeight : 0) - floor - plate - 40) / 1.3));
          hall.style.setProperty("--door-w", `${w.toFixed(0)}px`);
        } else hall.style.removeProperty("--door-w");
        travel = pinned ? Math.max(0, track.scrollWidth - innerWidth) : 0;
        range.style.height = pinned ? `calc(100vh + ${Math.round(0.8 * travel)}px)` : "";
        range.style.setProperty("--pinned", pinned ? "1" : "0");
        if (pinned) meet.dataset.pinned = "true"; else meet.removeAttribute("data-pinned");
        $$(".tp-door", track).forEach((d, i, all) => (d.dataset.open = pinned && i < all.length - 1 ? "false" : "true"));
        target = x = pinned ? -travel * progress() : 0;
        apply();
      };
      const progress = () => {
        const r = range.getBoundingClientRect();
        const span = r.height - innerHeight;
        return span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
      };
      const apply = () => {
        hall.style.setProperty("--floor-x", `${x.toFixed(1)}px`);
        if (!pinned) return;
        track.style.transform = `translateX(${x}px)`;
        const edge = 0.36 * innerWidth;
        $$(".tp-door", track).forEach((d, i, all) => { if (i < all.length - 1) d.dataset.open = String(d.offsetLeft + x < edge); });
      };
      paintMeet = () => { target = pinned ? -travel * progress() : 0; };
      layoutMeet();
      const ro = new ResizeObserver(layoutMeet);
      ro.observe(track);
      addEventListener("resize", layoutMeet);
      off.push(() => { ro.disconnect(); removeEventListener("resize", layoutMeet); });
      // light smoothing like the original spring
      let raf = 0;
      const tick = () => { x += (target - x) * 0.2; if (Math.abs(target - x) < 0.1) x = target; apply(); raf = requestAnimationFrame(tick); };
      raf = requestAnimationFrame(tick);
      off.push(() => cancelAnimationFrame(raf));
    }

    // scene focus
    const scenes = $$("[data-pup-scene]");
    const seen = new Set<Element>();
    const onScroll = () => {
      const vh = innerHeight;
      scenes.forEach((sc) => {
        const r = sc.getBoundingClientRect();
        const here = r.top <= vh * 0.5 && r.bottom > vh * 0.5;
        if (r.top < vh) seen.add(sc);
        set(sc as HTMLElement, "here", String(here));
        set(sc as HTMLElement, "visited", String(seen.has(sc)));
      });
      paintMeet();
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    const t = setTimeout(onScroll, 300);
    off.push(() => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); clearTimeout(t); });

    // mascot, hero lineup, idle buddies, cursor paw trail
    const main = document.getElementById("main");
    if (main) off.push(startJourney(main), startLineup(), startBuddies());
    off.push(startPawTrail());

    return () => off.forEach((f) => f());
  }, [path]);
  return null;
}
