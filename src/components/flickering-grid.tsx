/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
"use client";

import { useEffect, useRef } from "react";

type FlickeringGridProps = {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  maxOpacity?: number;
};

/**
 * Canvas field of tiny squares that randomly flicker. Colour comes from the
 * `--grid` CSS variable (space-separated RGB) so it follows the theme.
 * Pauses offscreen and renders a single static frame for reduced motion.
 */
export function FlickeringGrid({
  className,
  squareSize = 3,
  gridGap = 3,
  flickerChance = 0.3,
  maxOpacity = 0.22,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cell = squareSize + gridGap;
    let cols = 0;
    let rows = 0;
    let opacities = new Float32Array(0);
    let frame = 0;
    let last = 0;
    let visible = true;

    const color = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--grid").trim() || "0 0 0";

    const setup = () => {
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      cols = Math.ceil(width / cell);
      rows = Math.ceil(height / cell);
      opacities = new Float32Array(cols * rows).map(() => Math.random() * maxOpacity);
    };

    const draw = () => {
      const rgb = color().split(/\s+/).join(",");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const o = opacities[i * rows + j];
          if (o < 0.02) continue;
          ctx.fillStyle = `rgba(${rgb},${o})`;
          ctx.fillRect(i * cell * dpr, j * cell * dpr, squareSize * dpr, squareSize * dpr);
        }
      }
    };

    // Re-roll a share of squares every ~45ms for a lively "sparkle".
    const tick = (t: number) => {
      if (!visible) return;
      if (t - last > 45) {
        last = t;
        for (let k = 0; k < opacities.length; k++) {
          if (Math.random() < flickerChance) opacities[k] = Math.random() * maxOpacity;
        }
        draw();
      }
      frame = requestAnimationFrame(tick);
    };

    setup();
    draw();

    const ro = new ResizeObserver(() => {
      setup();
      draw();
    });
    ro.observe(parent);

    // Redraw on theme change so the colour updates even when paused.
    const mo = new MutationObserver(draw);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduce) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(frame);
      }
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      mo.disconnect();
      io.disconnect();
    };
  }, [squareSize, gridGap, flickerChance, maxOpacity]);

  return (
    <div className={className} aria-hidden>
      <canvas ref={canvasRef} className="pointer-events-none block" />
    </div>
  );
}
