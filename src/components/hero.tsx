/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
import Image from "next/image";
import { profile, socials, stats } from "@/data/profile";
import { BlurFade, BlurFadeText } from "./blur-fade";
import { ArrowUpRightIcon, FileIcon, GitHubOutlineIcon } from "./icons";

const github = socials.find((s) => s.icon === "github")!;

export function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="space-y-8">
      <div className="flex items-end justify-between gap-6">
        <BlurFade immediate offset={-6}>
          <div className="relative size-24 sm:size-28">
            <Image
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              width={224}
              height={224}
              preload
              className="size-full rounded-full border object-cover shadow-lg ring-4 ring-muted"
            />
            {/* Pulsing status dot */}
            <span
              aria-hidden
              className="absolute right-1 bottom-1 grid size-5 place-items-center rounded-full bg-background sm:right-1.5 sm:bottom-1.5"
            >
              <span className="relative flex size-3.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-3.5 rounded-full bg-emerald-500" />
              </span>
            </span>
          </div>
        </BlurFade>
        <BlurFade immediate delay={0.3} offset={-6}>
          <p className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-[13.5px] text-muted-foreground backdrop-blur">
            <span aria-hidden className="size-2 animate-pulse rounded-full bg-emerald-500" />
            {profile.location}
          </p>
        </BlurFade>
      </div>

      <div className="space-y-4">
        <h1 className="text-[2.15rem] leading-[1.05] font-semibold tracking-[-0.035em] sm:text-5xl">
          <BlurFadeText text={`Hi, I'm ${profile.firstName}`} />
          <span className="mt-1 block text-muted-foreground">
            <BlurFadeText text="I build interfaces that" delay={0.35} />{" "}
            <BlurFadeText
              text="feel finished."
              delay={1}
              className="font-serif font-normal tracking-normal text-foreground italic"
            />
          </span>
        </h1>
        <BlurFade immediate delay={0.6}>
          <p className="max-w-[44rem] text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            <span className="font-medium text-foreground">{profile.role}</span> with 5+ years of
            experience designing and developing scalable SaaS and business applications with{" "}
            <strong className="font-medium text-foreground">React</strong>,{" "}
            <strong className="font-medium text-foreground">Next.js</strong> and{" "}
            <strong className="font-medium text-foreground">TypeScript</strong>. A strong
            problem-solver focused on clean architecture, performance and maintainability — from
            pixel-perfect UI to production-ready code.
          </p>
        </BlurFade>
      </div>

      <BlurFade immediate delay={0.75} className="flex flex-wrap items-center gap-2.5">
        <a
          href={github.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2.5 rounded-full bg-foreground px-5 text-base font-medium text-background shadow-xs transition-all hover:opacity-90 hover:shadow-md"
        >
          <GitHubOutlineIcon className="size-[18px]" />
          <span>Follow on GitHub</span>
          <ArrowUpRightIcon className="size-4 opacity-70" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-full border bg-background/80 px-5 text-base font-medium text-foreground transition-colors hover:bg-muted"
        >
          <FileIcon className="size-[18px] text-muted-foreground" />
          <span>Resume</span>
          <ArrowUpRightIcon className="size-4 opacity-70" />
          <span className="sr-only"> (PDF, opens in a new tab)</span>
        </a>
        <a
          href="#contact"
          className="inline-flex h-10 items-center rounded-full border border-border/70 px-4 text-base font-medium text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
        >
          Let&apos;s talk
        </a>
      </BlurFade>

      <BlurFade immediate delay={0.9}>
        <dl className="grid grid-cols-3 divide-x overflow-hidden rounded-xl border bg-card/60">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1 px-3 py-3.5 sm:px-5">
              <dt className="text-[12.5px] leading-tight text-muted-foreground sm:text-[13.5px]">{s.label}</dt>
              <dd className="font-mono text-xl font-medium tracking-tight tabular-nums sm:text-2xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </BlurFade>
    </section>
  );
}
