/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
import Image from "next/image";
import { projects, type Project } from "@/data/profile";
import { BlurFade } from "./blur-fade";
import { ArrowUpRightIcon, LockIcon } from "./icons";
import { Section, Tag } from "./section";
import { Spotlight } from "./spotlight";

function hostname(href?: string) {
  if (!href) return "private build";
  return new URL(href).hostname.replace(/^www\./, "");
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { title, href } = project;

  return (
    <Spotlight className="flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition-all duration-300 ease-out will-change-transform group-hover/card:-translate-y-1 group-hover/card:border-foreground/20 group-hover/card:shadow-[0_12px_32px_-12px_rgb(0_0_0/0.18)]">
      {/* Browser-chrome frame around the real screenshot */}
      <div className="border-b bg-muted/60">
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="ml-2 truncate font-mono text-[12px] text-muted-foreground">
            {hostname(href)}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(min-width: 896px) 432px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover/spot:scale-[1.035]"
            preload={index < 2}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[12px] tracking-wide text-muted-foreground uppercase">
              {project.category}
            </p>
            <h3 className="mt-1 font-semibold tracking-tight">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="after:absolute after:inset-0 after:z-30 focus-visible:outline-none"
                >
                  {title}
                  <span className="sr-only"> — open live site in a new tab</span>
                </a>
              ) : (
                title
              )}
            </h3>
          </div>
          {href ? (
            <span className="grid size-7 flex-none place-items-center rounded-full border text-muted-foreground transition-colors group-hover/spot:border-foreground group-hover/spot:bg-foreground group-hover/spot:text-background group-has-[a:focus-visible]/spot:ring-2 group-has-[a:focus-visible]/spot:ring-ring">
              <ArrowUpRightIcon width={14} height={14} />
            </span>
          ) : (
            <span className="inline-flex flex-none items-center gap-1 rounded-full border px-2 py-0.5 text-[12px] text-muted-foreground">
              <LockIcon width={11} height={11} />
              {project.note}
            </span>
          )}
        </div>
        <p className="flex-1 text-pretty text-[14.5px] leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </Spotlight>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Selected projects" index="05">
      <BlurFade>
        <p className="-mt-2 mb-6 text-pretty text-[15px] text-muted-foreground">
          Live sites and products I&apos;ve designed and built — mostly with Next.js and Tailwind CSS.
        </p>
      </BlurFade>
      <ul className="grid grid-cols-1 gap-4 sm:auto-rows-fr sm:grid-cols-2">
        {projects.map((p, i) => (
          <BlurFade as="li" key={p.title} delay={0.04 * (i % 2)} className="group/card h-full">
            <ProjectCard project={p} index={i} />
          </BlurFade>
        ))}
      </ul>
    </Section>
  );
}
