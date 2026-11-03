"use client";
import { useEffect, useState } from "react";
import Header from "@/components/ui/Header";
import Behaviors from "@/components/effects/Behaviors";
import Interactions from "@/components/effects/Interactions";
import CurtainDriver from "@/components/effects/CurtainDriver";

/** Header scroll state; footer arrives as server-rendered markup. */
export default function Shell({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let last = scrollY,
      queued = false;
    const run = () => {
      const y = scrollY;
      setScrolled(y > 8);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 220);
        last = y;
      }
      queued = false;
    };
    const on = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(run);
      }
    };
    const show = () => setHidden(false);
    run();
    addEventListener("scroll", on, { passive: true });
    const h = document.getElementById("site-header");
    h?.addEventListener("focusin", show);
    return () => {
      removeEventListener("scroll", on);
      h?.removeEventListener("focusin", show);
    };
  }, []);
  return (
    <>
      <CurtainDriver />
      <Behaviors />
      <Interactions />
      <Header scrolled={scrolled} hidden={hidden} />
      {children}
      {footer}
    </>
  );
}
