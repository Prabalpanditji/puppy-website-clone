"use client";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
/** ms into the intro's "rest" animation (Infinity once it finished) */
const introAge = () => {
  const a = document
    .querySelector(".tp-curtain")
    ?.getAnimations()
    .find((x) => (x as CSSAnimation).animationName === "tp-curtain-rest");
  return a && a.playState !== "finished" && typeof a.currentTime === "number"
    ? a.currentTime
    : Infinity;
};

/** Page-transition curtain: plays on first load, covers on internal link clicks, lifts once the new route renders. */
export default function CurtainDriver() {
  const router = useRouter();
  const path = usePathname();
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const target = useRef<string | null>(null);
  const covered = useRef(0);
  const prev = useRef(path);
  const focusMain = useRef(false);
  const lift = useRef(() => {});

  useEffect(() => {
    const el = document.querySelector<HTMLElement>(".tp-curtain")!;
    const html = document.documentElement;
    const set = (s: string) => {
      el.dataset.state = s;
      if (s === "idle") delete html.dataset.curtain;
      else html.dataset.curtain = s;
    };
    const clear = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    const later = (f: () => void, ms: number) =>
      timers.current.push(setTimeout(f, ms));
    const doLift = () => {
      if (el.dataset.state === "idle" || el.dataset.state === "lifting") return;
      clear();
      target.current = null;
      set("lifting");
      dispatchEvent(new Event("tp:arrived"));
      if (focusMain.current) {
        focusMain.current = false;
        document.getElementById("main")?.focus({ preventScroll: true });
      }
      later(() => set("idle"), 460);
    };
    const go = (href: string) => {
      const u = new URL(href, location.href);
      if (u.pathname === location.pathname && u.search === location.search) {
        target.current = null;
        scrollTo({ top: 0, behavior: "instant" });
        later(doLift, 120);
        return;
      }
      router.push(u.pathname + u.search + u.hash);
      later(doLift, 6000);
    };
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;
      const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>(
        "a[href]"
      );
      if (
        !a ||
        (a.target && a.target !== "_self") ||
        a.hasAttribute("download") ||
        a.dataset.noCurtain !== undefined
      )
        return;
      const u = new URL(a.href, location.href);
      if (
        u.origin !== location.origin ||
        /^\/(admin|api|media|_next|o)(\/|$)/.test(u.pathname)
      )
        return;
      if (
        u.pathname === location.pathname &&
        (u.hash || u.search !== location.search)
      )
        return;
      if (reduced()) return;
      e.preventDefault();
      e.stopPropagation();
      focusMain.current = e.detail === 0;
      router.prefetch(u.pathname + u.search);
      dispatchEvent(new Event("tp:navigate"));
      target.current = u.href;
      const s = el.dataset.state;
      if (s === "covered" || s === "snap") return go(u.href);
      if (s === "covering") return;
      clear();
      if (s === "intro" && introAge() < 1080) {
        set("covered");
        covered.current = performance.now();
        go(u.href);
      } else {
        set("covering");
        later(() => {
          set("covered");
          covered.current = performance.now();
          if (target.current) go(target.current);
        }, 300);
      }
    };
    const onPop = () => {
      if (reduced() || location.pathname === prev.current) return;
      clear();
      set("snap");
      covered.current = performance.now();
      later(doLift, 1400);
    };
    const onShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        clear();
        set("idle");
      }
    };

    if (el.dataset.state === "intro") {
      const age = introAge();
      later(
        () => dispatchEvent(new Event("tp:arrived")),
        Math.max(0, 560 - age)
      );
      later(
        () => {
          if (el.dataset.state === "intro") set("idle");
        },
        Math.max(0, 1080 - age)
      );
    }
    if (reduced()) set("idle");
    addEventListener("click", onClick, true);
    addEventListener("popstate", onPop);
    addEventListener("pageshow", onShow);
    lift.current = doLift;
    return () => {
      clear();
      delete html.dataset.curtain;
      removeEventListener("click", onClick, true);
      removeEventListener("popstate", onPop);
      removeEventListener("pageshow", onShow);
    };
  }, [router]);

  useEffect(() => {
    if (path === prev.current) return;
    prev.current = path;
    const s = document.querySelector<HTMLElement>(".tp-curtain")?.dataset.state;
    if (s !== "covered" && s !== "snap" && s !== "covering") return;
    const wait =
      s === "covering"
        ? 340
        : Math.max(0, 140 - (performance.now() - covered.current));
    const id = setTimeout(
      () => requestAnimationFrame(() => lift.current()),
      wait
    );
    return () => clearTimeout(id);
  }, [path]);

  return null;
}
