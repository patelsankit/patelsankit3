/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
"use client";

import { motion } from "motion/react";
import { Fragment, type ReactNode } from "react";

type BlurFadeProps = {
  children: ReactNode;
  className?: string;
  /** Seconds. Use small increments (e.g. 0.04 * index) for staggers. */
  delay?: number;
  /** Vertical travel in px; negative values drop in from above. */
  offset?: number;
  blur?: number;
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean;
  as?: "div" | "li" | "span";
};

/**
 * Fade + un-blur + slight rise as content enters the viewport.
 * Reduced motion is handled in CSS (`[data-reveal]`) so server and client markup match.
 */
export function BlurFade({
  children,
  className,
  delay = 0,
  offset = 8,
  blur = 6,
  immediate = false,
  as = "div",
}: BlurFadeProps) {
  const Component = motion[as];
  const hidden = { opacity: 0, filter: `blur(${blur}px)`, y: offset };
  const visible = { opacity: 1, filter: "blur(0px)", y: 0 };

  return (
    <Component
      data-reveal
      className={className}
      initial={hidden}
      {...(immediate
        ? { animate: visible }
        : { whileInView: visible, viewport: { once: true, margin: "-40px" } })}
      transition={{ duration: 0.5, delay: 0.04 + delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </Component>
  );
}

/** Reveals a line of text one character at a time. */
export function BlurFadeText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  const offsets = words.map((_, w) => words.slice(0, w).join("").length);

  return (
    <span className={className} aria-label={text}>
      {words.map((word, w) => (
        <Fragment key={w}>
          {w > 0 && " "}
          {/* Words stay unbreakable so wrapping never splits one mid-way. */}
          <span aria-hidden className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, c) => (
              <motion.span
                key={c}
                data-reveal
                className="inline-block"
                initial={{ opacity: 0, filter: "blur(8px)", y: -8 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.45, delay: delay + (offsets[w] + c) * 0.03, ease: "easeOut" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </Fragment>
      ))}
    </span>
  );
}
