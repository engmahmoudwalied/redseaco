import { createFileRoute } from "@tanstack/react-router";

import heroRoad from "@/assets/hero-road.jpg";
import siteWorks from "@/assets/site-works.jpg";
import resortRoad from "@/assets/resort-road.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Red Sea for Roads — Road & Infrastructure Contractor, Hurghada" },
      {
        name: "description",
        content:
          "Red Sea for Roads: asphalt, road works, insulation, dewatering, supply and strengthening across Hurghada, Safaga, El Gouna, Soma Bay, El Quseir and Marsa Alam.",
      },
      {
        property: "og:title",
        content: "Red Sea for Roads — Road & Infrastructure Contractor",
      },
      {
        property: "og:description",
        content:
          "20+ years of engineering experience delivering road networks and infrastructure across the Red Sea Governorate.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Company", href: "#company" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Quality", href: "#quality" },
  { label: "Team", href: "#team" },
];

const STATS = [
  { value: "2022", label: "Established" },
  { value: "20+", label: "Years of experience" },
  { value: "50+", label: "Engineers & technicians" },
  { value: "ISO", label: "9001 quality system" },
];

const SERVICES = [
  {
    no: "01",
    title: "Road & asphalt works",
    body: "Excavation, grading, base layers, paving, traffic signage and road marking.",
  },
  {
    no: "02",
    title: "Insulation works",
    body: "Tank and sewage-pit waterproofing with Osmoseal and cement-based systems.",
  },
  {
    no: "03",
    title: "Dewatering & drying",
    body: "Dewatering, excavation and soil replacement for building foundations.",
  },
  {
    no: "04",
    title: "Strengthening & restoration",
    body: "Carbon fibre strengthening, shotcrete restoration and concrete repair.",
  },
  {
    no: "05",
    title: "Supply works",
    body: "Coarse and fine sand, aggregates and base-layer materials supply.",
  },
  {
    no: "06",
    title: "Landscape & hardscape",
    body: "Interlock tiles, curb stones, grading and resort landscape works.",
  },
];

const PROJECTS = [
  { no: "01", name: "Porto Fino Resort", scope: "Internal & external roads, rocky excavation, asphalt, signage", loc: "Marsa Alam" },
  { no: "02", name: "El Gouna", scope: "Internal road works", loc: "Hurghada" },
  { no: "03", name: "Dana Beach", scope: "Road works", loc: "Hurghada" },
  { no: "04", name: "Albatros Palace", scope: "Tank works + Osmoseal & cement insulation", loc: "Hurghada" },
  { no: "05", name: "Titanic Pearl", scope: "Carbon fibre strengthening works", loc: "Hurghada" },
  { no: "06", name: "Remvara", scope: "Shotcrete restoration, waterproofing, dewatering, concrete repair", loc: "Hurghada" },
  { no: "07", name: "Jungle Aqua Park 3", scope: "Cement insulation works for tanks", loc: "Hurghada" },
  { no: "08", name: "Maraya Mall", scope: "Road grading, landscape, interlock tiles, curb stone", loc: "El Gouna" },
  { no: "09", name: "Redcon", scope: "Supply of coarse and fine sand", loc: "Soma Bay" },
  { no: "10", name: "Aqua Vista Hotel", scope: "Road works", loc: "Hurghada" },
  { no: "11", name: "Balady Hotel", scope: "Excavation and backfilling works", loc: "Marsa Alam" },
  { no: "12", name: "Italian Hotel School", scope: "Road works", loc: "Hurghada" },
];

const KPIS = [
  { value: "<2", unit: "%", label: "Rework rate" },
  { value: "100", unit: "%", label: "Material compliance" },
  { value: "95", unit: "%", label: "On-time delivery" },
  { value: "90", unit: "%", label: "Excellent client rating" },
];

const VALUES = [
  { title: "Integrity", body: "Honesty and transparency with clients, partners and employees." },
  { title: "Quality", body: "The highest standards in every project we undertake." },
  { title: "Innovation", body: "New technologies and methods to improve efficiency." },
  { title: "Sustainability", body: "Eco-friendly practices that limit environmental impact." },
  { title: "Collaboration", body: "Strong relationships with clients, stakeholders and communities." },
  { title: "Safety", body: "Protecting our workers and the communities we serve." },
];

const TEAM = [
  { name: "Eng. Mamdouh El-Sayed", role: "Chairman" },
  { name: "Eng. Ehab El-Mohamady", role: "Chief Executive Officer" },
  { name: "Mr. Ahmed Sanousi", role: "Chief Financial Officer" },
];

const SCOPE = [
  "Ras Ghareb",
  "Hurghada",
  "Sahl Hasheesh",
  "Safaga",
  "Soma Bay",
  "El Quseir",
  "Marsa Alam",
];

function SectionHead({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <span className="eyebrow text-accent">{tag}</span>
        <h2 className="mt-2 font-display text-3xl leading-none tracking-wide sm:text-5xl">
          {title}
        </h2>
      </div>
      <span className="hidden h-2 w-24 shrink-0 hatch opacity-70 sm:block" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="block size-3 bg-primary" />
            <span className="font-display text-base tracking-[0.14em] sm:text-lg">
              RED SEA <span className="text-primary">FOR ROADS</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="eyebrow text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-sm bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <img
          src={heroRoad}
          alt="Asphalt highway curving along the Red Sea coast at golden hour"
          width={1920}
          height={1280}
          className="h-[78svh] min-h-[520px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/25" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-10">
            <span className="eyebrow text-primary">
              Heavy civil · Red Sea Governorate
            </span>
            <h1 className="rise mt-4 max-w-[22ch] font-display text-[13vw] leading-[0.9] tracking-wide text-cream sm:text-7xl lg:text-8xl">
              WE LAY THE LINE, COAST TO COAST.
            </h1>
            <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-sand sm:text-base">
              Road construction, asphalt, insulation and strengthening works
              delivered to specification across the Red Sea coast — from Ras
              Ghareb to Marsa Alam.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                View our works
              </a>
              <a
                href="#services"
                className="rounded-sm border border-border px-5 py-3 text-sm font-medium text-cream transition-colors hover:border-primary hover:text-primary"
              >
                Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {STATS.map((s) => (
            <div key={s.label} className="px-5 py-6">
              <div className="font-display text-4xl leading-none tabular-nums text-primary sm:text-5xl">
                {s.value}
              </div>
              <div className="eyebrow mt-2 text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANY */}
      <section id="company" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <SectionHead tag="(a) — The company" title="VISION & MISSION" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-5">
              <span className="eyebrow text-accent">Vision</span>
              <p className="mt-3 text-sm leading-relaxed text-sand sm:text-base">
                To lead in developing innovative and sustainable engineering
                solutions for road networks by integrating modern technology
                with environmental preservation — building smart cities and safe
                roads that support national economic growth, and transforming
                geographical challenges into vital routes that connect
                communities.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <span className="eyebrow text-accent">Mission</span>
              <p className="mt-3 text-sm leading-relaxed text-sand sm:text-base">
                To deliver outstanding engineering and construction services in
                the roads sector, relying on the expertise of our technical team
                and the latest global technologies — executing every project
                with precision, strict timelines and maximum safety for road
                users.
              </p>
            </div>
            <div>
              <span className="eyebrow text-muted-foreground">
                Geographical scope of work
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {SCOPE.map((c) => (
                  <span
                    key={c}
                    className="rounded-sm border border-border px-3 py-1.5 text-xs text-cream"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <figure className="relative">
            <img
              src={siteWorks}
              alt="Asphalt paver and roller laying a new road in the Egyptian desert"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full rounded-sm object-cover shadow-panel"
            />
            <figcaption className="eyebrow absolute bottom-3 left-3 bg-background/80 px-2.5 py-1.5 text-cream backdrop-blur">
              Paving works · Red Sea corridor
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <SectionHead tag="(b) — Medium-sized contracting company" title="SERVICES" />
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.no} className="group bg-surface p-6 transition-colors hover:bg-card">
                <span className="font-mono text-xs text-primary">{s.no}</span>
                <h3 className="mt-3 font-display text-xl tracking-wide text-cream">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <SectionHead tag="(c) — Work experience" title="PROJECT INDEX" />
        <div className="grid grid-cols-[2rem_1fr] gap-3 border-b border-border pb-2 sm:grid-cols-[2.5rem_1fr_auto]">
          <span className="eyebrow text-muted-foreground">No.</span>
          <span className="eyebrow text-muted-foreground">Project & scope</span>
          <span className="eyebrow hidden text-muted-foreground sm:block">
            Location
          </span>
        </div>
        <ul className="divide-y divide-border">
          {PROJECTS.map((p) => (
            <li
              key={p.no}
              className="grid grid-cols-[2rem_1fr] items-baseline gap-3 py-4 transition-colors hover:bg-surface sm:grid-cols-[2.5rem_1fr_auto]"
            >
              <span className="font-mono text-xs text-primary">{p.no}</span>
              <div>
                <div className="font-display text-lg tracking-wide text-cream">
                  {p.name}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{p.scope}</div>
                <span className="eyebrow mt-1 block text-accent sm:hidden">
                  {p.loc}
                </span>
              </div>
              <span className="eyebrow hidden justify-self-end text-accent sm:block">
                {p.loc}
              </span>
            </li>
          ))}
        </ul>

        <figure className="mt-12">
          <img
            src={resortRoad}
            alt="Resort internal roadway with interlock paving, curb stones and fresh road markings"
            width={1280}
            height={960}
            loading="lazy"
            className="h-[280px] w-full rounded-sm object-cover sm:h-[420px]"
          />
          <figcaption className="eyebrow mt-3 text-muted-foreground">
            Interlock paving, curb stone and marking works — resort roads,
            Hurghada
          </figcaption>
        </figure>
      </section>

      {/* QUALITY */}
      <section id="quality" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <SectionHead tag="(d) — Quality policy & objectives" title="QUALITY METRICS" />
          <div className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
            {KPIS.map((k) => (
              <div key={k.label} className="bg-surface p-5 sm:p-6">
                <div className="font-display text-5xl leading-none tabular-nums text-cream sm:text-6xl">
                  {k.value}
                  <span className="text-primary">{k.unit}</span>
                </div>
                <div className="mt-3 h-1 w-full road-rule" />
                <div className="eyebrow mt-3 text-muted-foreground">{k.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-surface p-6">
                <h3 className="font-display text-lg tracking-wide text-primary">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-[70ch] text-sm leading-relaxed text-sand">
            Quality in our company is not merely a procedural requirement; it is
            a work culture embraced by every individual — monitored through
            monthly performance reports and management review meetings under the
            ISO 9001 quality management system.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <SectionHead tag="(e) — Organizational structure" title="LEADERSHIP" />
        <ul className="grid gap-px bg-border sm:grid-cols-3">
          {TEAM.map((t) => (
            <li key={t.name} className="bg-background p-6">
              <span className="block size-2.5 bg-primary" />
              <div className="mt-4 font-display text-xl tracking-wide text-cream">
                {t.name}
              </div>
              <div className="eyebrow mt-2 text-accent">{t.role}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <span className="eyebrow text-accent">(f) — Contact</span>
              <h2 className="mt-3 max-w-[20ch] font-display text-4xl leading-none tracking-wide text-cream sm:text-6xl">
                LET&apos;S BUILD THE NEXT ROUTE.
              </h2>
              <a
                href="mailto:Info@redsearoads-eg.com"
                className="mt-7 inline-flex items-center gap-3 rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Info@redsearoads-eg.com
                <span aria-hidden>→</span>
              </a>
            </div>
            <dl className="divide-y divide-border text-sm">
              <div className="flex justify-between gap-6 py-3">
                <dt className="eyebrow text-muted-foreground">Head office</dt>
                <dd className="text-right text-cream">
                  10 Al-Wahda Street, Al-Manshya, Hurghada, Red Sea Governorate,
                  Egypt
                </dd>
              </div>
              <div className="flex justify-between gap-6 py-3">
                <dt className="eyebrow text-muted-foreground">Website</dt>
                <dd className="text-right text-cream">www.redsearoads-eg.com</dd>
              </div>
              <div className="flex justify-between gap-6 py-3">
                <dt className="eyebrow text-muted-foreground">Established</dt>
                <dd className="text-right text-cream">2022</dd>
              </div>
              <div className="flex justify-between gap-6 py-3">
                <dt className="eyebrow text-muted-foreground">Classification</dt>
                <dd className="text-right text-cream">
                  Medium-sized contracting company · ISO 9001
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-12 h-2 w-full road-rule opacity-70" />
          <p className="eyebrow mt-6 text-muted-foreground">
            © {new Date().getFullYear()} Red Sea for Roads — All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
