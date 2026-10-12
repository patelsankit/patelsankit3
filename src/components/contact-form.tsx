/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/data/profile";
import { CheckIcon, SendIcon } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-lg border bg-background px-3 py-2.5 text-[15px] outline-none transition-[border-color,box-shadow] placeholder:text-muted-foreground/70 focus:border-ring focus:ring-4 focus:ring-accent-soft";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: contact.web3formsKey,
          subject: `Portfolio enquiry from ${data.name}`,
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (!json.success) throw new Error("Rejected");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 text-left">
      {/* Honeypot for bots; Web3Forms drops submissions that fill it. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5 text-[13.5px] font-medium">
          Name
          <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className="grid gap-1.5 text-[13.5px] font-medium">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={field}
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-[13.5px] font-medium">
        Message
        <textarea
          name="message"
          required
          rows={4}
          maxLength={2000}
          placeholder="Tell me about the role or project…"
          className={`${field} resize-none`}
        />
      </label>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p aria-live="polite" className="text-[13.5px] text-muted-foreground">
          {status === "sent" && (
            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <CheckIcon width={14} height={14} /> Thanks — I&apos;ll get back to you soon.
            </span>
          )}
          {status === "error" && (
            <span className="text-red-600 dark:text-red-400">
              Couldn&apos;t send that. Please email me at {contact.email}.
            </span>
          )}
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-full bg-foreground px-5 text-[15px] font-medium text-background transition-all duration-200 ease-out hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <SendIcon width={14} height={14} />
        </button>
      </div>
    </form>
  );
}
