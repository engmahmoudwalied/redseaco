import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/pdf/logo.png";
import highwayCover from "@/assets/pdf/highway-cover.jpg";
import siteAerial from "@/assets/pdf/site-aerial.jpg";
import rollerPaving from "@/assets/pdf/roller-paving.jpg";
import works1 from "@/assets/pdf/works-1.jpg";
import strengthening from "@/assets/pdf/strengthening.jpg";
import teamWorks from "@/assets/pdf/team-works.jpg";
import columnRepair from "@/assets/pdf/column-repair.jpg";
import ceiling1 from "@/assets/pdf/ceiling-1.jpg";
import shotcrete from "@/assets/pdf/shotcrete.jpg";
import desertRoad from "@/assets/pdf/desert-road.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Red Sea for Roads Company — Road Contractor, Hurghada" },
      {
        name: "description",
        content:
          "Red Sea for Roads Company: road and asphalt works, insulation, drying, supply and strengthening works across the Red Sea Governorate. Established 2022, more than 20 years of experience.",
      },
      {
        property: "og:title",
        content: "Red Sea for Roads Company — Road Contractor, Hurghada",
      },
      {
        property: "og:description",
        content:
          "Road and asphalt works, insulation, drying, supply and strengthening works across the Red Sea Governorate.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "201000597912";
const WHATSAPP_DISPLAY = "0100 059 7912";

const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com", icon: FacebookIcon },
  { name: "Instagram", href: "https://www.instagram.com", icon: InstagramIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: LinkedInIcon },
  { name: "YouTube", href: "https://www.youtube.com", icon: YouTubeIcon },
  { name: "TikTok", href: "https://www.tiktok.com", icon: TikTokIcon },
];

const NAV = [
  { label: "Profile", href: "#profile" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Core Values", href: "#values" },
  { label: "Classification", href: "#classification" },
  { label: "Projects", href: "#projects" },
  { label: "Quality", href: "#quality" },
  { label: "Work Team", href: "#team" },
];

const PROFILE = [
  { label: "Year of Establishment", value: "2022" },
  {
    label: "Head Office",
    value:
      "10 Al-Wahda Street, Al-Manshya, Hurghada, Red Sea Governorate, Egypt",
  },
  {
    label: "Geographical Scope of Work",
    value:
      "Red Sea Governorate (Ras Ghareb – Hurghada – Sahl Hasheesh – Safaga – Soma Bay – El Quseir – Marsa Alam)",
  },
  { label: "Years of Experience", value: "More than 20 years of experience" },
];

const VALUES = [
  {
    no: "1",
    title: "Integrity",
    body: "We operate with honesty and transparency, building trust with our clients, partners, and employees.",
  },
  {
    no: "2",
    title: "Quality",
    body: "Commitment to excellence is at the heart of our work. We maintain the highest standards in every project we undertake.",
  },
  {
    no: "3",
    title: "Innovation",
    body: "We embrace new technologies and methodologies to continuously improve our services and enhance efficiency.",
  },
  {
    no: "4",
    title: "Sustainability",
    body: "We prioritize eco-friendly practices and work to minimize our environmental impact while promoting sustainable development.",
  },
  {
    no: "5",
    title: "Collaboration",
    body: "Building strong relationships with our clients, stakeholders, and communities is fundamental to our success.",
  },
  {
    no: "6",
    title: "Safety",
    body: "We uphold the highest safety standards to protect our workers and the communities we serve.",
  },
];

const SERVICES = [
  "Road and asphalt works",
  "Insulation works",
  "Drying works",
  "Supply works",
  "Strengthening works",
];

const PROJECTS = [
  {
    name: "Porto Fino Resort",
    loc: "Marsa Alam",
    items: ["Internal and external road works"],
  },
  { name: "Dana Beach", loc: "Hurghada", items: ["Road works"] },
  { name: "El Gouna", loc: "Hurghada", items: ["Internal road works"] },
  { name: "Neverland", loc: "Hurghada", items: ["Road works"] },
  { name: "Italian Hotel School", loc: "Hurghada", items: ["Road works"] },
  {
    name: "Albatros Palace",
    loc: "Hurghada",
    items: [
      "Tank works + insulation with Osmoseal materials + cement insulation",
    ],
  },
  {
    name: "Jungle Aqua Park 3",
    loc: "Hurghada",
    items: ["Cement insulation works for tanks"],
  },
  {
    name: "Titanic Pearl",
    loc: "Hurghada",
    items: ["Carbon fiber strengthening works"],
  },
  {
    name: "Redcon",
    loc: "Soma Bay",
    items: ["Supply works of coarse sand and fine sand"],
  },
  {
    name: "Remvara",
    loc: "Hurghada",
    items: [
      "Restoration and strengthening works using shotcrete",
      "Internal and external waterproofing works for the sewage pit",
      "Dewatering, excavation, and soil replacement works for the Health Club building",
      "Concrete repair",
    ],
  },
  {
    name: "Porto Fino Resort",
    loc: "Marsa Alam",
    items: [
      "Excavation works in rocky soil",
      "Asphalt work",
      "Traffic signage and marking",
    ],
  },
  { name: "Aqua Vista Hotel", loc: "Hurghada", items: ["Road works"] },
  {
    name: "Balady Hotel",
    loc: "Marsa Alam",
    items: ["Excavation and Backfilling Works"],
  },
  {
    name: "Maraya Mall",
    loc: "El Gouna",
    items: [
      "Road Grading Works",
      "Land scape work",
      "Interlock tiles",
      "Curb stone work",
    ],
  },
];

const QUALITY_PRINCIPLES = [
  {
    title: "Compliance with Technical Specifications",
    body: "Full adherence to approved engineering drawings and national and international standards, ensuring accurate laboratory testing of materials such as asphalt, concrete, and soil.",
  },
  {
    title: "Continuous Improvement",
    body: "Ongoing development of operational processes by adopting the latest technologies and equipment in road construction and paving, while continuously updating work systems in accordance with the ISO 9001 Quality Management System.",
  },
  {
    title: "Human Resources Competence",
    body: "Investing in the training and development of engineers and technicians to ensure tasks are executed with the highest level of professionalism, while promoting a strong sense of responsibility toward quality outcomes.",
  },
  {
    title: "Customer and Partner Satisfaction",
    body: "Prioritizing client expectations by adhering to project timelines and delivering solutions that are precise, cost-effective, and high in quality.",
  },
  {
    title: "Safety and Environment",
    body: "Integrating occupational and traffic safety standards within the quality management system to protect workers and road users, while minimizing the environmental impact of construction activities.",
  },
  {
    title: "Monitoring and Auditing",
    body: "Implementing effective internal and field supervision throughout all project stages, from commencement to final handover, to ensure proper execution and compliance with technical requirements.",
  },
];

const OBJECTIVES = [
  {
    no: "1",
    title: "Technical and Operational Excellence",
    points: [
      {
        head: "Zero Technical Errors",
        body: "Reducing rework rates to the lowest possible level (less than 2%) through strict monitoring during early execution stages.",
      },
      {
        head: "Material Compliance",
        body: "Ensuring 100% compliance of all supplied materials (bitumen, aggregates, base layers) with approved technical specifications through periodic laboratory testing.",
      },
    ],
  },
  {
    no: "2",
    title: "Schedule Commitment",
    points: [
      {
        head: "Delivery Efficiency",
        body: "Completing 95% of road projects on or before the contractual deadline while maintaining quality standards without compromise.",
      },
      {
        head: "Rapid Response",
        body: "Addressing any technical observations raised by consultants or clients within a maximum timeframe of 48–72 hours.",
      },
    ],
  },
  {
    no: "3",
    title: "Safety and Sustainability",
    points: [
      {
        head: "Site Safety",
        body: "Achieving an accident-free record with no major incidents through strict application of occupational and traffic safety protocols.",
      },
      {
        head: "Extended Service Life",
        body: "Executing paving and periodic maintenance works in a manner that ensures optimal road performance throughout its designed service life.",
      },
    ],
  },
  {
    no: "4",
    title: "Development and Training",
    points: [
      {
        head: "Competency Enhancement",
        body: "Implementing specialized training programs for at least 80% of engineers and technicians in modern paving technologies and quality management systems.",
      },
      {
        head: "Equipment Upgrading",
        body: "Periodic maintenance and upgrading of 100% of the heavy equipment fleet to ensure execution accuracy and minimize unexpected breakdowns.",
      },
    ],
  },
  {
    no: "5",
    title: "Customer Satisfaction",
    points: [
      {
        head: "Satisfaction Index",
        body: "Achieving an “Excellent” rating from supervising authorities and clients in at least 90% of executed projects.",
      },
    ],
  },
];

const TEAM = [
  { role: "Chairman", name: "Eng. Mamdouh El-Sayed" },
  { role: "Chief Executive Officer | CEO", name: "Eng. Ehab El-Mohamady" },
  { role: "Chief Financial Officer | CFO", name: "Mr. Ahmed Sanousi" },
];

const GALLERY = [
  { src: siteAerial, alt: "Aerial view of the company's road works site", w: 1583, h: 1117 },
  { src: rollerPaving, alt: "Road roller compacting a new asphalt layer", w: 1269, h: 886 },
  { src: works1, alt: "Company works on site", w: 962, h: 1098 },
  { src: strengthening, alt: "Structural strengthening works with shotcrete", w: 1379, h: 1653 },
  { src: teamWorks, alt: "Excavation works with a hydraulic excavator", w: 640, h: 853 },
  { src: columnRepair, alt: "Concrete column repair and reinforcement works", w: 1196, h: 1590 },
  { src: ceiling1, alt: "Ceiling restoration works", w: 676, h: 921 },
  { src: shotcrete, alt: "Shotcrete restoration and strengthening works", w: 1597, h: 900 },
];

function SectionHead({ title, kicker }: { title: string; kicker?: string }) {
  return (
    <header className="mb-8">
      {kicker ? (
        <span className="eyebrow text-accent">{kicker}</span>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      <span className="mt-4 block h-0.5 w-16 red-rule" />
    </header>
  );
}

function Index() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center">
            <img
              src={logo}
              alt="Red Sea For Roads Company logo"
              width={1584}
              height={672}
              className="h-9 w-auto sm:h-10"
            />
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
        </div>
      </header>

      {/* COVER */}
      <section id="top" className="relative">
        <img
          src={highwayCover}
          alt="Highway with fresh asphalt and lane markings"
          width={2338}
          height={1653}
          className="h-[70svh] min-h-[440px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/55 via-primary/25 to-primary-deep/80" />
        <div className="absolute inset-x-0 top-0 flex flex-col items-center px-5 pt-10 text-center">
          <img
            src={logo}
            alt="Red Sea For Roads Company"
            width={1584}
            height={672}
            className="rise w-[min(78%,420px)]"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 px-5 pb-8 text-center">
          <p className="eyebrow text-primary-foreground/80">
            Year of Establishment
          </p>
          <p className="mt-1 text-4xl font-semibold text-primary-foreground sm:text-5xl">
            2022
          </p>
        </div>
      </section>

      {/* PROFILE */}
      <section id="profile" className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <SectionHead kicker="Company profile" title="Company Data" />
        <dl className="grid gap-px overflow-hidden rounded-lg bg-border shadow-card sm:grid-cols-2">
          {PROFILE.map((p) => (
            <div key={p.label} className="bg-card p-6">
              <dt className="eyebrow text-accent">{p.label}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-foreground sm:text-base">
                {p.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* VISION & MISSION */}
      <section id="vision" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <SectionHead kicker="Direction" title="Company Vision & Mission" />
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
            <div className="space-y-8">
              <article className="border-l-4 border-primary pl-5">
                <h3 className="text-lg font-semibold text-primary">
                  Company Vision
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  To lead in developing innovative and sustainable engineering
                  solutions for road networks by integrating modern technology
                  with environmental preservation. We aim to leave a distinctive
                  mark in building smart cities and safe roads that support
                  national economic growth and meet the aspirations of future
                  generations, through a commitment to operational excellence
                  and transforming geographical challenges into vital routes
                  that efficiently connect communities.
                </p>
              </article>
              <article className="border-l-4 border-accent pl-5">
                <h3 className="text-lg font-semibold text-primary">
                  Company Mission
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Our mission is to deliver outstanding engineering and
                  construction services in the roads sector, relying on the
                  expertise of our technical team and the latest global
                  technologies. We are committed to executing our projects with
                  the highest level of precision and strict timelines, while
                  ensuring maximum safety for road users and providing added
                  value to our partners.
                </p>
              </article>
            </div>
            <figure className="overflow-hidden rounded-lg shadow-panel">
              <img
                src={rollerPaving}
                alt="Road roller compacting a new asphalt layer on site"
                width={1269}
                height={886}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section id="values" className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <SectionHead kicker="How we work" title="Core Values" />
        <div className="grid gap-px overflow-hidden rounded-lg bg-border shadow-card sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <article key={v.no} className="bg-card p-6">
              <span className="inline-flex size-8 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                {v.no}
              </span>
              <h3 className="mt-4 text-base font-semibold text-primary">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CLASSIFICATION & SERVICES */}
      <section id="classification" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <SectionHead
            kicker="Company Classification"
            title="Medium-Sized Contracting Company"
          />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <h3 className="eyebrow text-accent">Services Provided</h3>
              <ul className="mt-4 divide-y divide-border">
                {SERVICES.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-baseline gap-4 py-3 text-sm sm:text-base"
                  >
                    <span className="text-xs font-semibold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="overflow-hidden rounded-lg shadow-panel">
              <img
                src={siteAerial}
                alt="Aerial view of a road works site"
                width={1583}
                height={1117}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <SectionHead
          kicker="Work Experience"
          title="Previous Projects"
        />
        <ul className="grid gap-px overflow-hidden rounded-lg bg-border shadow-card sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <li key={`${p.name}-${i}`} className="bg-card p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-primary">
                  {p.name}
                </h3>
                <span className="eyebrow shrink-0 text-accent">{p.loc}</span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {p.items.map((it) => (
                  <li
                    key={it}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* PROJECT PHOTOS FROM THE PROFILE */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {GALLERY.map((g) => (
            <figure
              key={g.alt}
              className="overflow-hidden rounded-lg bg-muted shadow-card"
            >
              <img
                src={g.src}
                alt={g.alt}
                width={g.w}
                height={g.h}
                loading="lazy"
                className="h-40 w-full object-cover sm:h-48"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* QUALITY POLICY */}
      <section id="quality" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <SectionHead kicker="Quality Policy" title="Our Quality Commitment" />
          <p className="max-w-[80ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
            Red Sea for Roads Company is fully committed to applying the highest
            quality standards across all road construction and infrastructure
            works, based on our firm belief that quality is the cornerstone of
            sustainable infrastructure and community safety. Our quality policy
            is based on the following principles:
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg bg-border shadow-card sm:grid-cols-2 lg:grid-cols-3">
            {QUALITY_PRINCIPLES.map((q) => (
              <article key={q.title} className="bg-card p-6">
                <h3 className="text-base font-semibold text-primary">
                  {q.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {q.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-[80ch] border-l-4 border-accent pl-5 text-sm leading-relaxed text-foreground sm:text-base">
            Quality within our company is not merely a procedural requirement;
            it is a work culture embraced by every individual to ensure the
            construction of safe, efficient, and sustainable road networks that
            support development and align with the company’s long-term
            objectives.
          </p>
        </div>
      </section>

      {/* QUALITY OBJECTIVES */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <SectionHead kicker="Quality Objectives" title="Phased Objectives" />
        <p className="max-w-[80ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
          Red Sea for Roads Company has established a set of phased objectives
          to ensure the effective implementation of its quality policy and to
          achieve operational excellence in road projects:
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
          <ol className="space-y-8">
            {OBJECTIVES.map((o) => (
              <li key={o.no} className="flex gap-4">
                <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                  {o.no}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-primary">
                    {o.title}
                  </h3>
                  <dl className="mt-3 space-y-3">
                    {o.points.map((p) => (
                      <div key={p.head}>
                        <dt className="text-sm font-semibold text-accent">
                          {p.head}
                        </dt>
                        <dd className="text-sm leading-relaxed text-muted-foreground">
                          {p.body}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            ))}
          </ol>
          <aside className="h-fit rounded-lg bg-secondary p-6 shadow-card">
            <h3 className="eyebrow text-accent">Administrative Note</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              These objectives are monitored and measured through monthly
              performance reports and management review meetings to ensure
              continuous improvement and to address any deviations from the
              approved quality standards.
            </p>
          </aside>
        </div>
      </section>

      {/* WORK TEAM */}
      <section id="team" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <SectionHead kicker="Work Team" title="Organizational Structure" />
          <ul className="grid gap-px overflow-hidden rounded-lg bg-border shadow-card sm:grid-cols-3">
            {TEAM.map((t) => (
              <li key={t.name} className="bg-card p-6">
                <span className="block h-0.5 w-10 red-rule" />
                <p className="mt-4 text-sm text-muted-foreground">{t.role}</p>
                <p className="mt-1 text-lg font-semibold text-primary">
                  {t.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-px overflow-hidden rounded-lg bg-border shadow-card sm:grid-cols-2">
            <div className="bg-card p-8 text-center">
              <p className="text-sm text-muted-foreground">
                Number of Engineers
              </p>
              <p className="mt-2 text-5xl font-semibold text-primary">50+</p>
            </div>
            <div className="bg-card p-8 text-center">
              <p className="text-sm text-muted-foreground">
                Number of Technicians and Workers
              </p>
              <p className="mt-2 text-5xl font-semibold text-primary">5</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="relative">
        <img
          src={desertRoad}
          alt="Open road heading into the horizon"
          width={768}
          height={543}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-deep/90" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <img
            src={logo}
            alt="Red Sea For Roads Company"
            width={1584}
            height={672}
            loading="lazy"
            className="h-12 w-auto rounded-md bg-primary-foreground/95 px-3 py-2 sm:h-14"
          />
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div className="space-y-3">
              <a
                href="https://www.redsearoads-eg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base tracking-wide text-primary-foreground underline decoration-primary-foreground/40 underline-offset-4 transition-opacity hover:opacity-80 sm:text-lg"
              >
                www.redsearoads-eg.com
              </a>
              <a
                href="mailto:Info@redsearoads-eg.com"
                className="block text-base tracking-wide text-primary-foreground underline decoration-primary-foreground/40 underline-offset-4 transition-opacity hover:opacity-80 sm:text-lg"
              >
                Info@redsearoads-eg.com
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </div>
            <div>
              <h3 className="eyebrow text-primary-foreground/70">
                Follow us
              </h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {SOCIALS.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      title={s.name}
                      className="inline-flex size-11 items-center justify-center rounded-md bg-primary-foreground/10 text-primary-foreground ring-1 ring-primary-foreground/25 transition-colors hover:bg-primary-foreground hover:text-primary"
                    >
                      <s.icon className="size-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 text-xs text-primary-foreground/60">
            Red Sea For Roads Company — 10 Al-Wahda Street, Al-Manshya,
            Hurghada, Red Sea Governorate, Egypt
          </p>
        </div>

        {/* floating WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-panel transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="size-7" />
        </a>
      </footer>
    </div>
  );
}

/* ---------- icons ---------- */

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.12-.41-2.14-1.32-.79-.71-1.32-1.58-1.47-1.88-.15-.3-.02-.46.13-.61.15-.15.35-.4.5-.6.15-.2.2-.35.3-.55.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.32 5.07 4.53.71.29 1.26.46 1.69.59.72.22 1.37.19 1.89.12.58-.09 1.79-.73 2.04-1.44.25-.71.25-1.31.17-1.44-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a8.16 8.16 0 0 1-1.25-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.26 8.21Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.77l-.44 2.91h-2.33V22c4.78-.76 8.45-4.92 8.45-9.94Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.96.24 2.65.51.71.28 1.31.65 1.9 1.24.6.6.97 1.19 1.25 1.9.27.69.46 1.48.51 2.65.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.96-.51 2.65a5.1 5.1 0 0 1-1.25 1.9c-.59.6-1.19.97-1.9 1.25-.69.27-1.48.46-2.65.51-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.96-.24-2.65-.51a5.12 5.12 0 0 1-1.9-1.25 5.1 5.1 0 0 1-1.24-1.9c-.27-.69-.46-1.48-.51-2.65C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.96.51-2.65.28-.71.65-1.3 1.24-1.9a5.12 5.12 0 0 1 1.9-1.24c.69-.27 1.48-.46 2.65-.51C8.42 2.17 8.8 2.16 12 2.16Zm0 1.8c-3.14 0-3.49.01-4.72.07-.94.04-1.45.2-1.79.33-.45.18-.77.39-1.11.72-.33.34-.54.66-.72 1.11-.13.34-.29.85-.33 1.79-.06 1.23-.07 1.58-.07 4.72s.01 3.49.07 4.72c.04.94.2 1.45.33 1.79.18.45.39.77.72 1.11.34.33.66.54 1.11.72.34.13.85.29 1.79.33 1.23.06 1.58.07 4.72.07s3.49-.01 4.72-.07c.94-.04 1.45-.2 1.79-.33.45-.18.77-.39 1.11-.72.33-.34.54-.66.72-1.11.13-.34.29-.85.33-1.79.06-1.23.07-1.58.07-4.72s-.01-3.49-.07-4.72c-.04-.94-.2-1.45-.33-1.79a2.98 2.98 0 0 0-.72-1.11 2.98 2.98 0 0 0-1.11-.72c-.34-.13-.85-.29-1.79-.33-1.23-.06-1.58-.07-4.72-.07Zm0 3.06a4.98 4.98 0 1 1 0 9.96 4.98 4.98 0 0 1 0-9.96Zm0 8.21a3.23 3.23 0 1 0 0-6.46 3.23 3.23 0 0 0 0 6.46Zm6.34-8.41a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M16.6 5.82A5.9 5.9 0 0 1 15.1 2h-3.2v13.4a2.65 2.65 0 1 1-1.9-2.55V9.6a5.85 5.85 0 1 0 5.1 5.8V9.19a8.9 8.9 0 0 0 4.9 1.48V7.47a5.86 5.86 0 0 1-3.4-1.65Z" />
    </svg>
  );
}
