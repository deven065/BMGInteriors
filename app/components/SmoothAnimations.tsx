"use client";
import { useEffect } from "react";

export default function SmoothAnimations() {
  useEffect(() => {
    // ── 1. Scroll Reveal ────────────────────────────────────────────────
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? 0);
            setTimeout(() => el.classList.add("is-visible"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    // Observe explicit [data-reveal] elements
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    // Auto-stagger children of [data-stagger] containers
    document.querySelectorAll("[data-stagger]").forEach((parent) => {
      Array.from(parent.children).forEach((child, i) => {
        const el = child as HTMLElement;
        if (!el.dataset.reveal) el.setAttribute("data-reveal", "up");
        el.dataset.delay = String(i * 110);
        io.observe(el);
      });
    });

    // ── 2. Count-up numbers ─────────────────────────────────────────────
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
            const elapsed = Math.min((now - startTime) / dur, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - elapsed, 3);
            const val = Number.isInteger(target)
              ? Math.round(ease * target)
              : (ease * target).toFixed(1);
            el.textContent = prefix + val + suffix;
            if (elapsed < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          countIo.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      countIo.observe(el);
    });

    // ── 3. Gold cursor glow ──────────────────────────────────────────────
    // Only on non-touch devices
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    let raf: number | null = null;
    let glow: HTMLDivElement | null = null;

    if (!isTouchDevice) {
      glow = document.createElement("div");
      glow.className = "cursor-glow";
      document.body.appendChild(glow);

      let mx = 0, my = 0, gx = 0, gy = 0;
      const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
      window.addEventListener("mousemove", onMove);

      const loop = () => {
        gx += (mx - gx) * 0.1;
        gy += (my - gy) * 0.1;
        if (glow) glow.style.transform = `translate(${gx - 200}px, ${gy - 200}px)`;
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        io.disconnect();
        countIo.disconnect();
        window.removeEventListener("mousemove", onMove);
        if (raf) cancelAnimationFrame(raf);
        if (glow) glow.remove();
      };
    }

    return () => {
      io.disconnect();
      countIo.disconnect();
    };
  }, []);

  return null;
}
