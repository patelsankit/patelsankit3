/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
import { contact, profile, socials } from "@/data/profile";
import { BlurFade } from "./blur-fade";
import { ContactForm } from "./contact-form";
import { ArrowUpRightIcon, MailIcon, PhoneIcon, socialIcons } from "./icons";
import { Section } from "./section";

export function Contact() {
  const channels = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: MailIcon },
    { label: "Phone", value: contact.phone, href: contact.phoneHref, icon: PhoneIcon },
  ];

  return (
    <Section id="contact" title="Contact" index="06">
      <BlurFade className="overflow-hidden rounded-2xl border bg-card">
        <div className="relative p-5 sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-56 w-3/4 rounded-full bg-accent/15 blur-3xl"
          />
          <h3 className="relative text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-4xl">
            Let&apos;s build something{" "}
            <span className="font-serif font-normal tracking-normal italic">worth using.</span>
          </h3>
          <p className="relative mt-3 max-w-md text-pretty text-[15px] text-muted-foreground sm:text-base">
            Hiring for a frontend role, or need a polished UI shipped? Send a note and I&apos;ll get
            back to you.
          </p>

          <ul className="relative mt-6 grid gap-2 sm:grid-cols-2">
            {channels.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center gap-3 rounded-xl border bg-background/60 p-3 transition-colors hover:border-foreground/20 hover:bg-muted/60"
                >
                  <span className="grid size-9 flex-none place-items-center rounded-lg bg-muted text-foreground/80">
                    <Icon width={16} height={16} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12.5px] text-muted-foreground">{label}</span>
                    <span className="block truncate text-[15px] font-medium">{value}</span>
                  </span>
                  <ArrowUpRightIcon
                    width={14}
                    height={14}
                    className="ml-auto flex-none text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t bg-muted/30 p-5 sm:p-8">
          <ContactForm />
        </div>
      </BlurFade>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 border-t pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
      <div>
        <p className="text-[15px] font-medium">{profile.name}</p>
        <p className="text-[13.5px] text-muted-foreground">
          {profile.role} · {profile.location}
        </p>
        <p className="mt-1 text-[12.5px] text-muted-foreground/80">
          © 2026 {profile.name}. Designed &amp; built by {profile.firstName}. All rights reserved.
        </p>
      </div>
      <ul className="flex items-center gap-1">
        {socials.map((s) => {
          const Icon = socialIcons[s.icon];
          return (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.name} (${s.handle})`}
                className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon width={16} height={16} />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
