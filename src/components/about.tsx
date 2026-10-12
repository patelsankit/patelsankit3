/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
import { about, principles } from "@/data/profile";
import { BlurFade } from "./blur-fade";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" title="About" index="01">
      <BlurFade className="max-w-3xl space-y-4 text-pretty leading-relaxed text-muted-foreground sm:text-[1.05rem]">
        {about.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </BlurFade>
      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        {principles.map((p, i) => (
          <BlurFade as="li" key={p.title} delay={0.06 * i} className="rounded-xl border bg-card/60 p-4">
            <p className="text-[15px] font-medium">{p.title}</p>
            <p className="mt-1 text-[14.5px] leading-snug text-muted-foreground">{p.body}</p>
          </BlurFade>
        ))}
      </ul>
    </Section>
  );
}
