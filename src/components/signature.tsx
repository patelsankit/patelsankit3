/*!
 * Sankit Parasiya — Portfolio
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Unauthorised copying or redistribution of this code or design is not permitted.
 */
"use client";

import { useEffect } from "react";
import { profile } from "@/data/profile";

/** Minimum selection length before a credit line is appended to copied text. */
const CREDIT_MIN_CHARS = 120;

/**
 * Author signature: prints a styled credit in the browser console and appends
 * a source line when larger passages of page text are copied.
 */
export function Signature() {
  useEffect(() => {
    console.log(
      `%c${profile.name}%c\nDesigned & built by ${profile.name} · ${profile.url}\n© 2026 — all rights reserved. Like what you see? Let's talk: ${profile.url}/#contact`,
      "font: 700 22px/1.4 system-ui, sans-serif; color: #7c9cff;",
      "font: 13px/1.6 ui-monospace, monospace; color: inherit;",
    );

    const onCopy = (e: ClipboardEvent) => {
      const text = window.getSelection()?.toString() ?? "";
      if (text.length < CREDIT_MIN_CHARS || !e.clipboardData) return;
      const credit = `\n\n— Source: ${profile.name}, ${profile.url}`;
      e.clipboardData.setData("text/plain", text + credit);
      e.preventDefault();
    };

    document.addEventListener("copy", onCopy);
    return () => document.removeEventListener("copy", onCopy);
  }, []);

  return null;
}
