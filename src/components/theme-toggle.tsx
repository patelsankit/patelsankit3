/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
"use client";

import { useEffect, type MouseEvent } from "react";
import { toggleTheme } from "@/lib/theme";
import { MoonIcon, SunIcon } from "./icons";

/** Dock button: the ripple grows from the click point (or the button's centre for keyboard). */
export function ThemeToggle({ className }: { className?: string }) {
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.detail === 0) {
      const r = e.currentTarget.getBoundingClientRect();
      toggleTheme(r.left + r.width / 2, r.top + r.height / 2);
    } else {
      toggleTheme(e.clientX, e.clientY);
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle colour theme"
      aria-keyshortcuts="d"
      className={`cursor-pointer ${className}`}
    >
      <SunIcon width="48%" height="48%" className="hidden dark:block" />
      <MoonIcon width="48%" height="48%" className="dark:hidden" />
    </button>
  );
}

/** Global "D" shortcut, ignored while typing or with modifier keys held. */
export function ThemeHotkey() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target;
      if (
        t instanceof HTMLElement &&
        (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName))
      )
        return;
      if (e.key.toLowerCase() === "d") {
        e.preventDefault();
        toggleTheme();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return null;
}
