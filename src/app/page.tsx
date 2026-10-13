/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
import { About } from "@/components/about";
import { BackToTop } from "@/components/back-to-top";
import { BlurFade } from "@/components/blur-fade";
import { ClientWork } from "@/components/client-work";
import { Contact, Footer } from "@/components/contact";
import { Dock } from "@/components/dock";
import { ExperienceList, OrgLogo } from "@/components/experience";
import { FlickeringGrid } from "@/components/flickering-grid";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Section } from "@/components/section";
import { Skills } from "@/components/skills";
import { contact, education, profile, socials } from "@/data/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: profile.url,
  image: `${profile.url}${profile.avatar}`,
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressCountry: "IN" },
  alumniOf: education.school,
  sameAs: socials.map((s) => s.href),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>

      <FlickeringGrid className="pointer-events-none absolute inset-x-0 top-0 z-0 h-44 overflow-hidden [mask-image:linear-gradient(to_bottom,black_30%,transparent)] sm:h-56" />

      <main id="main" tabIndex={-1} className="relative z-10 outline-none mx-auto max-w-4xl px-4 pt-14 pb-36 sm:px-6 sm:pt-24">
        <div className="flex flex-col gap-16 sm:gap-20">
          <Hero />
          <About />


          <Skills />

          <Section id="work" title="Work experience" index="03">
            <ExperienceList />
            <div className="mt-10">
              <BlurFade>
                <h3 className="mb-4 font-mono text-[12.5px] tracking-wide text-muted-foreground uppercase">
                  Education
                </h3>
              </BlurFade>
              <BlurFade className="flex items-center gap-3">
                <OrgLogo name="Government Engineering" />
                <div className="min-w-0 flex-1">
                  <p className="leading-tight font-medium">{education.school}</p>
                  <p className="text-[15px] text-muted-foreground">
                    {education.degree} · {education.note}
                  </p>
                </div>
                <span className="flex-none font-mono text-[12.5px] text-muted-foreground tabular-nums">
                  {education.start} – {education.end}
                </span>
              </BlurFade>
            </div>
          </Section>
          <ClientWork />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>

      <Dock />
      <BackToTop />
    </>
  );
}
