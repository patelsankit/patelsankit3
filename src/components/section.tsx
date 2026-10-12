/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
import type { ReactNode } from "react";
import { BlurFade } from "./blur-fade";

/** Section wrapper with the hairline-rule heading used across the page. */
export function Section({
  id,
  title,
  index,
  children,
  className = "",
}: {
  id: string;
  title: string;
  /** Two-digit marker shown in mono before the title, e.g. "02". */
  index: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={className}>
      <BlurFade className="mb-6 flex items-center gap-3">
        <span className="font-mono text-[12.5px] text-accent tabular-nums">{index}</span>
        <h2 id={`${id}-title`} className="text-[15px] font-medium tracking-tight">
          {title}
        </h2>
        <span
          aria-hidden
          className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent"
        />
      </BlurFade>
      {children}
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-8 items-center rounded-md border border-foreground/25 px-2.5 font-mono text-[13.5px] tracking-tight text-muted-foreground uppercase">
      {children}
    </span>
  );
}
