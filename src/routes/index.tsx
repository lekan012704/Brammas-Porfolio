import { createFileRoute } from "@tanstack/react-router";
import {
  AirVent,
  ArrowRight,
  BadgeCheck,
  Clock,
  Gauge,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Refrigerator,
  ShieldCheck,
  Snowflake,
  Tag,
  Wrench,
  Zap,
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { ContactFab } from "@/components/ContactFab";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactForm } from "@/components/ContactForm";
import { FindUsSection } from "@/components/FindUsSection";
import { directionsHref, mailHref, site, telHref, waHref } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} | AC, Cold Room & Refrigeration` },
      {
        name: "description",
        content:
          "Installation, repair and servicing of air conditioning, cold rooms and refrigeration for homes and businesses. 24/7 callouts, quote before work.",
      },
      { property: "og:title", content: site.name },
      {
        property: "og:description",
        content:
          "Cooling and refrigeration specialists — fast response, honest pricing, work that lasts.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Snowflake,
    title: "Cooling System Installation",
    tag: "Install",
    body: "Full installation of cooling systems for new builds or renovations — sized and fitted correctly the first time.",
  },
  {
    icon: AirVent,
    title: "AC Repair & Servicing",
    tag: "Repair",
    body: "Diagnostics and repair for split units, package units and central AC — plus routine servicing to prevent breakdowns.",
  },
  {
    icon: Gauge,
    title: "Gas Refill & Leak Detection",
    tag: "Maintenance",
    body: "Refrigerant top-ups and leak checks to bring underperforming units back to full cooling power.",
  },
  {
    icon: Refrigerator,
    title: "Cold Room & Freezer Setup",
    tag: "Install",
    body: "Walk-in cold rooms and freezer installation for shops, restaurants and cold storage businesses.",
  },
  {
    icon: Wrench,
    title: "Refrigeration Repair",
    tag: "Repair",
    body: "Repair for fridges, freezers and commercial refrigeration equipment, with same-week callouts.",
  },
  {
    icon: Zap,
    title: "System Consultation",
    tag: "Advisory",
    body: "Not sure what you need? We assess the space and recommend the right cooling setup for your budget.",
  },
];

const stats = [
  { num: "24/7", label: "Emergency callouts" },
  { num: "100%", label: "Diagnostics before repair" },
  { num: "All", label: "Brands serviced" },
  { num: "Local", label: "Same-week response" },
];

const why = [
  {
    icon: Tag,
    title: "Straight pricing",
    body: "You get a clear quote before any work starts — no surprise charges after the job.",
  },
  {
    icon: Zap,
    title: "Fast response",
    body: "Most callouts are handled within the same week, with emergency slots available.",
  },
  {
    icon: ShieldCheck,
    title: "Skilled technicians",
    body: "Trained hands on every job — installation, repair, or servicing.",
  },
  {
    icon: BadgeCheck,
    title: "Work that lasts",
    body: "We fix the root cause, not just the symptom, so problems don't come back in a month.",
  },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Find us", href: "#find-us" },
  { label: "Contact", href: "#contact" },
];

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-mono text-sm text-primary">{num}</span>
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />

      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <nav className="section-shell flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Snowflake className="size-5" />
            </span>
            <span className="font-display text-base font-bold">{site.name}</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="cool-veil border-b border-border">
          <div className="section-shell grid items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent px-4 py-1.5 font-mono text-[0.7rem] tracking-[0.14em] text-accent-foreground uppercase">
                <Snowflake className="size-3.5" />
                Cooling &amp; Refrigeration Specialists
              </span>
              <h1 className="mt-6 max-w-[16ch] text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-6xl">
                We keep your <span className="text-primary">air, rooms &amp; systems</span> running
                cold when it matters.
              </h1>
              <p className="mt-6 max-w-[48ch] text-base text-muted-foreground">
                {site.name} installs, repairs and maintains air conditioning, cooling and
                refrigeration systems for homes and businesses — fast response, honest pricing,
                work that lasts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
                >
                  Request a Quote <ArrowRight className="size-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  See Our Services
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4 text-primary" /> 24/7 emergency callouts
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="size-4 text-primary" /> All brands serviced
                </span>
                <span className="inline-flex items-center gap-2">
                  <Tag className="size-4 text-primary" /> Quote before work
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-lift">
              <div className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase">
                <Gauge className="size-4 text-primary" /> Typical service result
              </div>
              <div className="relative mt-5 h-2.5 overflow-hidden rounded-full bg-gradient-to-r from-warm to-primary">
                <span className="animate-cool-down absolute inset-y-0 left-0 w-[3%] bg-card/85" />
              </div>
              <div className="mt-4 flex items-baseline justify-between font-mono">
                <div>
                  <div className="text-2xl font-medium text-warm">32°C</div>
                  <div className="text-xs text-faint">on arrival</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-medium text-primary">18°C</div>
                  <div className="text-xs text-faint">job done</div>
                </div>
              </div>
              <p className="mt-6 border-t border-dashed border-border pt-5 text-sm text-muted-foreground">
                Every callout starts with a proper diagnosis — we measure, then fix, then confirm
                the room actually holds temperature.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-border py-16 lg:py-20">
          <div className="section-shell">
            <SectionHead num="01" title="What We Do" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, body, tag }) => (
                <article
                  key={title}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                  <span className="mt-4 inline-block rounded-full border border-border px-3 py-1 font-mono text-[0.62rem] tracking-[0.1em] text-faint uppercase">
                    {tag}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-border bg-secondary/60 py-16 lg:py-20">
          <div className="section-shell">
            <SectionHead num="02" title={`About ${site.name}`} />
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {site.name} installs, repairs and maintains cooling systems — from a single AC
                  unit in a bedroom to a full cold-room setup for a commercial kitchen. We show up
                  on time, diagnose the actual problem, and fix it right the first time.
                </p>
                <p>
                  Every job is handled by technicians who treat your space like their own — no
                  shortcuts, no guesswork, no upsell for parts you don't need.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                  >
                    <div className="font-mono text-2xl font-medium text-primary">{stat.num}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="border-b border-border py-16 lg:py-20">
          <div className="section-shell">
            <SectionHead num="03" title="Why Choose Us" />
            <div className="grid gap-5 sm:grid-cols-2">
              {why.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-warm/15 text-warm-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FindUsSection />

        <section id="contact" className="py-16 lg:py-20">
          <div className="section-shell">
            <SectionHead num="05" title="Get In Touch" />
            <p className="-mt-6 mb-10 max-w-[52ch] text-muted-foreground">
              Send your details and we'll come back with a quote — or reach us directly on the
              numbers below.
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <ul className="divide-y divide-border">
                  {[
                    { icon: Phone, k: "Phone", v: site.phone, href: telHref },
                    { icon: MessageCircle, k: "WhatsApp", v: site.whatsapp, href: waHref },
                    { icon: Mail, k: "Email", v: site.email, href: mailHref },
                    { icon: MapPin, k: "Address", v: site.address },
                    { icon: Clock, k: "Hours", v: site.hours },
                  ].map(({ icon: Icon, k, v, href }) => (
                    <li key={k} className="flex items-start gap-4 py-4">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <div className="font-mono text-[0.66rem] tracking-[0.12em] text-muted-foreground uppercase">
                          {k}
                        </div>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="text-[0.95rem] font-medium transition-colors hover:text-primary"
                          >
                            {v}
                          </a>
                        ) : (
                          <div className="text-[0.95rem] font-medium">{v}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border pt-8 pb-24 md:pb-8">
        <div className="section-shell flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Snowflake className="size-4" />
            </span>
            <span className="font-display text-sm font-bold">{site.name}</span>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2.5 border-t border-border bg-background/95 px-4 py-2.5 backdrop-blur-md md:hidden">
        <a
          href={telHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
        >
          <Phone className="size-4 shrink-0" />
          Call
        </a>
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Navigation className="size-4 shrink-0" />
          Directions
        </a>
      </div>

      <ContactFab />
    </div>
  );
}
