/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useId, useState } from "react";
import { work, type Job } from "@/data/profile";
import { BlurFade } from "./blur-fade";
import { ChevronIcon } from "./icons";
import { Tag } from "./section";

export function OrgLogo({ src, name, fill }: { src?: string; name: string; fill?: boolean }) {
  return (
    <span className="relative z-10 grid size-10 flex-none place-items-center overflow-hidden rounded-full border bg-white shadow-sm ring-2 ring-background">
      {src ? (
        <Image src={src} alt="" width={64} height={64} className={fill ? "size-full" : "size-7 object-contain"} />
      ) : (
        <span className="font-mono text-[13.5px] font-semibold text-neutral-800">
          {name
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("")}
        </span>
      )}
    </span>
  );
}

function JobRow({ job, open, onToggle }: { job: Job; open: boolean; onToggle: () => void }) {
  const reduce = useReducedMotion();
  const id = useId();

  return (
    <div className="relative">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="group flex w-full cursor-pointer items-center gap-3 rounded-lg text-left"
        >
          <OrgLogo src={job.logo} name={job.company} fill={job.logoFill} />
          <span className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="flex items-center gap-2 leading-none font-medium">
              <span className="truncate sm:whitespace-normal">{job.company}</span>
              {job.current && (
                <span className="relative inline-flex size-2 flex-none" aria-label="Current role">
                  <span className="animate-pulse-ring absolute inset-0 rounded-full bg-emerald-500" />
                  <span className="relative size-2 rounded-full bg-emerald-500" />
                </span>
              )}
              <ChevronIcon
                width={14}
                height={14}
                className={`flex-none text-muted-foreground opacity-60 transition-all sm:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 ${open ? "rotate-180 opacity-100" : ""}`}
              />
            </span>
            <span className="truncate text-[15px] text-muted-foreground">{job.role}</span>
            <span className="font-mono text-[12.5px] text-muted-foreground tabular-nums sm:hidden">
              {job.start} – {job.end}
            </span>
          </span>
          <span className="hidden flex-none text-right font-mono text-[12.5px] text-muted-foreground tabular-nums sm:block">
            {job.start} – {job.end}
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            role="region"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pt-3 pl-[52px] text-[15px]">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {job.summary}
                {job.location && <span className="text-muted-foreground/70"> · {job.location}</span>}
              </p>
              <div className="flex flex-wrap gap-1">
                {job.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ExperienceList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="relative grid gap-6">
      <span aria-hidden className="absolute top-5 bottom-5 left-5 w-px bg-border" />
      {work.map((job, i) => (
        <BlurFade key={job.company} delay={0.05 * i}>
          <JobRow job={job} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
        </BlurFade>
      ))}
    </div>
  );
}
