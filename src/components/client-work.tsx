/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
import Image from "next/image";
import { caseStudies, flagship } from "@/data/profile";
import { BlurFade } from "./blur-fade";
import { ArrowUpRightIcon, CheckIcon } from "./icons";
import { Section, Tag } from "./section";
import { Spotlight } from "./spotlight";

/** The four precious metals GoldBank trades, as periodic-table tiles. */
const metals = [
  { sym: "Au", name: "Gold", n: 79, tint: "from-amber-300/40 to-amber-500/10" },
  { sym: "Ag", name: "Silver", n: 47, tint: "from-slate-300/50 to-slate-400/10" },
  { sym: "Pt", name: "Platinum", n: 78, tint: "from-zinc-200/50 to-zinc-400/10" },
  { sym: "Pd", name: "Palladium", n: 46, tint: "from-stone-300/50 to-stone-400/10" },
];

function Flagship() {
  return (
    <article className="relative overflow-hidden rounded-2xl border bg-card">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-20 size-72 rounded-full bg-amber-400/15 blur-3xl dark:bg-amber-300/10"
      />
      <div className="relative grid gap-6 p-5 sm:grid-cols-[1fr_auto] sm:p-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-foreground px-2 py-0.5 font-mono text-[12px] tracking-wide text-background uppercase">
              Flagship
            </span>
            <span className="font-mono text-[12px] tracking-wide text-muted-foreground uppercase">
              {flagship.kind}
            </span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">{flagship.title}</h3>
          <p className="mt-2 text-pretty text-[15px] leading-relaxed text-muted-foreground">
            {flagship.summary}
          </p>
          {flagship.href && (
            <a
              href={flagship.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-4 text-[14.5px] font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Visit {new URL(flagship.href).hostname}
              <ArrowUpRightIcon
                width={14}
                height={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
        <ul
          aria-label="Metals traded on the platform"
          className="grid grid-cols-4 gap-2 self-start sm:grid-cols-2"
        >
          {metals.map((m) => (
            <li
              key={m.sym}
              className={`relative grid aspect-square w-full place-items-center rounded-lg border bg-gradient-to-br sm:w-[4.25rem] ${m.tint}`}
            >
              <span className="absolute top-1 left-1.5 font-mono text-[11px] text-muted-foreground">{m.n}</span>
              <span className="text-lg font-semibold tracking-tight">{m.sym}</span>
              <span className="sr-only">{m.name}</span>
            </li>
          ))}
        </ul>
      </div>
      {flagship.image && flagship.href && (
        <div className="relative px-5 sm:px-6">
          <Spotlight className="overflow-hidden rounded-t-xl border border-b-0 bg-muted/60">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="size-2 rounded-full bg-foreground/15" />
              <span className="size-2 rounded-full bg-foreground/15" />
              <span className="size-2 rounded-full bg-foreground/15" />
              <span className="ml-2 truncate font-mono text-[12px] text-muted-foreground">
                {new URL(flagship.href).hostname}
              </span>
            </div>
            <a
              href={flagship.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden
              className="relative block aspect-[16/9] overflow-hidden bg-neutral-950"
            >
              <Image
                src={flagship.image}
                alt=""
                fill
                sizes="(min-width: 896px) 800px, 100vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover/spot:scale-[1.02]"
              />
            </a>
          </Spotlight>
        </div>
      )}
      <div className="relative grid gap-4 border-t bg-muted/30 p-5 sm:p-6">
        <ul className="grid gap-2 text-[15px]">
          {flagship.contributions.map((c) => (
            <li key={c} className="flex gap-2.5 text-pretty">
              <CheckIcon width={15} height={15} className="mt-0.5 flex-none text-accent" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1">
          {flagship.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ClientWork() {
  return (
    <Section id="client-work" title="Client & product work" index="04">
      <BlurFade>
        <p className="-mt-2 mb-6 text-pretty text-[15px] text-muted-foreground">
          Production applications built with teams for clients. Most are private, so here&apos;s what
          they do and what I owned.
        </p>
      </BlurFade>
      <BlurFade>
        <Flagship />
      </BlurFade>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {caseStudies.map((c, i) => (
          <BlurFade
            as="li"
            key={c.title}
            delay={0.04 * (i % 2)}
            className="flex flex-col gap-3 rounded-xl border bg-card/60 p-4 transition-colors hover:bg-card"
          >
            <div>
              <p className="font-mono text-[12px] tracking-wide text-muted-foreground uppercase">{c.kind}</p>
              <h3 className="mt-1 font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-1.5 text-pretty text-[14.5px] leading-relaxed text-muted-foreground">{c.summary}</p>
            </div>
            <ul className="grid flex-1 content-start gap-1.5 text-[14.5px]">
              {c.contributions.map((line) => (
                <li key={line} className="flex gap-2 text-pretty">
                  <span aria-hidden className="mt-[0.55em] size-1 flex-none rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1">
              {c.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </BlurFade>
        ))}
      </ul>
    </Section>
  );
}
