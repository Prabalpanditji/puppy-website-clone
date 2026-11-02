export const PAW = "M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z";

/** Mouse-only paw trail on the fixed canvas (same spacing, fade and colour as the original). */
export function startPawTrail(): () => void {
  const cv = document.querySelector<HTMLCanvasElement>("body > canvas[aria-hidden]");
  if (!cv || matchMedia("(prefers-reduced-motion: reduce)").matches || !matchMedia("(hover: hover) and (pointer: fine)").matches) return () => {};
  const ctx = cv.getContext("2d")!;
  const path = new Path2D(PAW);
  const prints: { x: number; y: number; angle: number; born: number }[] = [];
  let dpr = 1, raf = 0, running = false, lx = NaN, ly = NaN, dist = 0, side = 1;
  const size = () => { dpr = Math.min(devicePixelRatio || 1, 2); cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; };
  size();
  const draw = (now: number) => {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cv.width, cv.height);
    for (let i = prints.length - 1; i >= 0; i--) {
      const p = prints[i], age = now - p.born;
      if (age > 1000) { prints.splice(i, 1); continue; }
      const f = age < 600 ? 1 : 1 - (age - 600) / 400;
      ctx.globalAlpha = 0.42 * f * f;
      ctx.setTransform(0.27 * dpr, 0, 0, 0.27 * dpr, p.x * dpr, p.y * dpr);
      ctx.rotate(p.angle);
      ctx.translate(-32, -34);
      ctx.fillStyle = "#c2622b";
      ctx.fill(path);
    }
    if (prints.length) raf = requestAnimationFrame(draw); else running = false;
  };
  const move = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    if (Number.isNaN(lx)) { lx = e.clientX; ly = e.clientY; return; }
    const dx = e.clientX - lx, dy = e.clientY - ly;
    dist += Math.hypot(dx, dy);
    if (dist >= 46) {
      dist = 0;
      const a = Math.atan2(dy, dx) + Math.PI / 2;
      side = -side;
      const o = 7 * side;
      prints.push({ x: e.clientX + Math.cos(a) * o + 14, y: e.clientY + Math.sin(a) * o + 16, angle: a, born: performance.now() });
      if (prints.length > 14) prints.shift();
      if (!running) { running = true; raf = requestAnimationFrame(draw); }
    }
    lx = e.clientX; ly = e.clientY;
  };
  addEventListener("pointermove", move, { passive: true });
  addEventListener("resize", size);
  return () => { removeEventListener("pointermove", move); removeEventListener("resize", size); cancelAnimationFrame(raf); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, cv.width, cv.height); };
}
