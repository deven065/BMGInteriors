"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmoothAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    /* Small delay so the incoming page's DOM is fully painted */
    let revealIo: IntersectionObserver;
    let countIo: IntersectionObserver;

    const init = setTimeout(() => {
      /* ── 1. Scroll Reveal ─────────────────────────────────────── */
      const showEl = (el: HTMLElement) => {
        const delay = Number(el.dataset.delay ?? 0);
        setTimeout(() => el.classList.add("is-visible"), delay);
      };

      revealIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              showEl(entry.target as HTMLElement);
              revealIo.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -48px 0px" }
      );

      /* Stagger children: add data-reveal + staggered delay */
      document.querySelectorAll("[data-stagger]").forEach((parent) => {
        Array.from(parent.children).forEach((child, i) => {
          const el = child as HTMLElement;
          if (!el.dataset.reveal) el.setAttribute("data-reveal", "up");
          el.dataset.delay = String(i * 100);
        });
      });

      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          showEl(el);
        } else {
          revealIo.observe(el);
        }
      });

      /* ── 2. Count-up numbers ────────────────────────────────── */
      countIo = new IntersectionObserver(
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
    }, 80);

    return () => {
      clearTimeout(init);
      revealIo?.disconnect();
      countIo?.disconnect();
    };
  }, [pathname]);

  /* ── 3. Gold cursor glow — runs once, body-level ───────────── */
  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);
    let mx = 0, my = 0, gx = 0, gy = 0;
    let raf: number;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);
    const loop = () => {
      gx += (mx - gx) * 0.09;
      gy += (my - gy) * 0.09;
      glow.style.transform = `translate(${gx - 200}px, ${gy - 200}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      glow.remove();
    };
  }, []);

  return null;
}
