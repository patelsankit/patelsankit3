/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useState } from "react";

/** Show the button once the visitor has scrolled this far (px). */
const SHOW_AFTER = 480;

/** Floating bottom-right button with a ring that fills as the page scrolls. */
export function BackToTop() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > SHOW_AFTER));

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("main")?.focus({ preventScroll: true });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="group fixed right-4 bottom-[5.25rem] z-50 grid size-11 cursor-pointer place-items-center rounded-full border bg-card/80 text-foreground/85 shadow-[0_8px_30px_-8px_rgb(0_0_0/0.25)] backdrop-blur-xl transition-colors hover:border-foreground/25 hover:text-foreground sm:right-6 sm:bottom-6 sm:size-14"
        >
          {/* Scroll-progress ring */}
          <svg aria-hidden viewBox="0 0 48 48" className="absolute inset-0 size-full -rotate-90">
            <circle cx="24" cy="24" r="22.5" fill="none" stroke="var(--border)" strokeWidth="1.5" />
            <motion.circle
              cx="24"
              cy="24"
              r="22.5"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
          </svg>
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.9}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5 transition-transform duration-200 group-hover:-translate-y-0.5 sm:size-6"
          >
            <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
