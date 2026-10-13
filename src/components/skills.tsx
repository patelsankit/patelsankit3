/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
import type { CSSProperties } from "react";
import { skillGroups } from "@/data/profile";
import { BlurFade } from "./blur-fade";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" title="Skills & tools" index="02">
      <div className="grid gap-5">
        {skillGroups.map((group, g) => (
          <div key={group.label} className="grid gap-2.5 sm:grid-cols-[10rem_1fr] sm:gap-4">
            <BlurFade delay={0.05 * g}>
              <h3 className="pt-1.5 font-mono text-[12.5px] tracking-wide text-muted-foreground uppercase">
                {group.label}
              </h3>
            </BlurFade>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <BlurFade as="li" key={skill.name} delay={0.05 * g + 0.025 * i}>
                  <span
                    className="group inline-flex h-9 items-center gap-2 rounded-lg border bg-card/70 px-2.5 text-[14.5px] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground/20"
                    style={
                      {
                        "--icon": `url(/skills/${skill.icon}.svg)`,
                        "--brand": skill.color === "currentColor" ? "var(--foreground)" : skill.color,
                      } as CSSProperties
                    }
                  >
                    <span
                      aria-hidden
                      className="skill-icon size-3.5 text-muted-foreground group-hover:[--icon-color:var(--brand)]"
                    />
                    {skill.name}
                  </span>
                </BlurFade>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
