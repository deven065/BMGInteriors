"use client";
import { useEffect } from "react";

export default function SmoothAnimations() {
  useEffect(() => {
    /* ── 1. Scroll Reveal ───────────────────────────────────────── */
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? 0);
            setTimeout(() => el.classList.add("is-visible"), delay);
            revealIo.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => revealIo.observe(el));

    /* Auto-stagger children of [data-stagger] */
    document.querySelectorAll("[data-stagger]").forEach((parent) => {
      Array.from(parent.children).forEach((child, i) => {
        const el = child as HTMLElement;
        if (!el.dataset.reveal) el.setAttribute("data-reveal", "up");
        el.dataset.delay = String(i * 100);
        revealIo.observe(el);
      });
    });

    /* ── 2. Count-up numbers ──────────────────────────────────── */
    const countIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.count ?? "0");
          const suffix = el.dataset.suffix ?? "";
          const prefix = el.dataset.prefix ?? "";
          const dur = 2000;
          const startTime = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - startTime) / dur, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            const val = Number.isInteger(target)
              ? Math.round(ease * target)
              : (ease * target).toFixed(1);
            el.textContent = prefix + val + suffix;
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          countIo.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => countIo.observe(el));

    /* ── 3. Gold cursor glow (desktop only) ───────────────────── */
    const isTouch = window.matchMedia("(hover: none)").matches;
    let glow: HTMLDivElement | null = null;
    let raf: number | null = null;
    if (!isTouch) {
      glow = document.createElement("div");
      glow.className = "cursor-glow";
      document.body.appendChild(glow);
      let mx = 0, my = 0, gx = 0, gy = 0;
      const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
      window.addEventListener("mousemove", onMove);
      const loop = () => {
        gx += (mx - gx) * 0.09;
        gy += (my - gy) * 0.09;
        if (glow) glow.style.transform = `translate(${gx - 200}px, ${gy - 200}px)`;
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      return () => {
        revealIo.disconnect(); countIo.disconnect();
        window.removeEventListener("mousemove", onMove);
        if (raf) cancelAnimationFrame(raf);
        if (glow) glow.remove();
      };
    }
    return () => { revealIo.disconnect(); countIo.disconnect(); };
  }, []);

  return null;
}
