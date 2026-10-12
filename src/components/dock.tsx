/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { contact, profile, socials } from "@/data/profile";
import { FileIcon, HomeIcon, MailIcon, socialIcons } from "./icons";
import { ThemeHotkey, ThemeToggle } from "./theme-toggle";

/** Seconds after load before the dock rises in; items then pop in one by one. */
const DOCK_DELAY = 1.2;
const ITEM_STAGGER = 0.06;

/** Item size in px: roomy on desktop, compact on phones so all items fit. */
const SIZES = { desktop: { base: 56, max: 72 }, mobile: { base: 40, max: 40 } };

function useDockSize() {
  const [size, setSize] = useState(SIZES.desktop);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setSize(mq.matches ? SIZES.desktop : SIZES.mobile);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return size;
}

function DockItem({
  mouseX,
  label,
  size: { base, max },
  index,
  children,
}: {
  mouseX: MotionValue<number>;
  label: ReactNode;
  size: { base: number; max: number };
  index: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const distance = useTransform(mouseX, (x) => {
    const r = ref.current?.getBoundingClientRect();
    return r ? x - r.left - r.width / 2 : Infinity;
  });
  const size = useSpring(useTransform(distance, [-150, 0, 150], [base, max, base]), {
    mass: 0.1,
    stiffness: 170,
    damping: 14,
  });

  return (
    <motion.div
      ref={ref}
      style={reduce ? { width: base, height: base } : { width: size, height: size }}
      className="group relative grid flex-none place-items-center"
    >
      <motion.span
        data-reveal
        className="grid size-full"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: DOCK_DELAY + 0.15 + index * ITEM_STAGGER,
          type: "spring",
          stiffness: 380,
          damping: 22,
        }}
      >
        {children}
      </motion.span>
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-foreground px-2 py-1 text-[12.5px] font-medium whitespace-nowrap text-background opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100"
      >
        {label}
      </span>
    </motion.div>
  );
}

const itemClass =
  "grid size-full place-items-center rounded-full border bg-background/50 text-foreground/85 transition-colors hover:border-foreground/25 hover:bg-muted hover:text-foreground";

export function Dock() {
  const mouseX = useMotionValue(Infinity);
  const size = useDockSize();

  const links = [
    { label: "Home", href: "#hero", icon: HomeIcon },
    { label: "Résumé", href: profile.resume, icon: FileIcon, external: true },
    { label: "Email", href: `mailto:${contact.email}`, icon: MailIcon },
  ];

  return (
    <nav
      aria-label="Quick links"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:bottom-6"
    >
      <motion.div
        data-reveal
        initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: DOCK_DELAY, type: "spring", stiffness: 220, damping: 24 }}
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto flex items-end gap-1.5 rounded-2xl border bg-card/80 p-1.5 shadow-[0_8px_30px_-8px_rgb(0_0_0/0.25)] backdrop-blur-xl sm:gap-2.5 sm:p-2.5"
      >
        {links.map(({ label, href, icon: Icon, external }, i) => (
          <DockItem key={label} mouseX={mouseX} label={label} size={size} index={i}>
            <a
              href={href}
              aria-label={label}
              className={itemClass}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon width="48%" height="48%" />
            </a>
          </DockItem>
        ))}
        <span aria-hidden className="mb-2 h-6 w-px self-end bg-border sm:mb-3 sm:h-8" />
        {socials.map((s, i) => {
          const Icon = socialIcons[s.icon];
          return (
            <DockItem key={s.name} mouseX={mouseX} label={s.name} size={size} index={links.length + i}>
              <a href={s.href} aria-label={s.name} target="_blank" rel="noopener noreferrer" className={itemClass}>
                <Icon width="46%" height="46%" />
              </a>
            </DockItem>
          );
        })}
        <span aria-hidden className="mb-2 h-6 w-px self-end bg-border sm:mb-3 sm:h-8" />
        <DockItem
          mouseX={mouseX}
          size={size}
          index={links.length + socials.length}
          label={
            <>
              Theme
              <kbd className="ml-1.5 rounded border border-background/30 px-1 font-mono text-[11px]">D</kbd>
            </>
          }
        >
          <ThemeToggle className={itemClass} />
        </DockItem>
        <ThemeHotkey />
      </motion.div>
    </nav>
  );
}
