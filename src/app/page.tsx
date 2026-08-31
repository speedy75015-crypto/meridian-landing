import { DepartureBoard } from "@/components/departure-board";

/* ─── SVG icons ─────────────────────────────────────────────────────────── */

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M6 9l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Globe({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M9 1.5C9 1.5 6 5 6 9s3 7.5 3 7.5M9 1.5C9 1.5 12 5 12 9s-3 7.5-3 7.5M1.5 9h15"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Bolt({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10.5 2L4 10h5.5L7.5 16L14 8H8.5L10.5 2Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Nav ───────────────���────────────────────────────────────────────────── */

function Nav() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-edge bg-ground/90 backdrop-blur-sm">
      <span className="font-display text-xl font-bold tracking-[0.18em] text-cream uppercase">
        Meridian
      </span>
      <a
        href="#access"
        className="flex items-center gap-2 px-4 py-2 bg-alert text-cream font-display text-sm font-semibold tracking-[0.06em] uppercase transition-colors hover:bg-[#c83232] focus-visible:ring-1 focus-visible:ring-alert focus-visible:ring-offset-1 focus-visible:ring-offset-ground"
      >
        Request access <ArrowRight />
      </a>
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */

function BoardingPass() {
  return (
    <section className="flex flex-col h-full bg-panel border-r border-edge p-6 lg:p-8">
      {/* Pass label */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-display text-[10px] tracking-[0.28em] text-cream-muted uppercase">
          Boarding Pass
        </span>
        <span className="font-mono text-[10px] text-cream-muted">
          {/* synthetic label visible to screen readers */}
          <span className="sr-only">Synthetic demo data</span>
          ✦ SYNTHETIC
        </span>
      </div>

      {/* Wordmark */}
      <div className="mb-6">
        <h1 className="font-display text-5xl lg:text-6xl font-bold tracking-[0.16em] text-cream uppercase leading-none">
          Meridian
        </h1>
        <p className="mt-1 font-mono text-[11px] text-cream-muted tracking-wider">
          Release Intelligence Platform
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 border-t border-dashed border-edge" />
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="5" stroke="#252530" strokeWidth="1" />
          <circle cx="6" cy="6" r="2" fill="#252530" />
        </svg>
        <div className="flex-1 border-t border-dashed border-edge" />
      </div>

      {/* Flight details grid */}
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
        {[
          { label: "Release", value: "v2.4.1" },
          { label: "Origin", value: "main" },
          { label: "Destination", value: "PRODUCTION" },
          { label: "Gate", value: "SFO-3" },
          { label: "Departure", value: "14:23 UTC" },
          { label: "Class", value: "PLATFORM" },
        ].map(({ label, value }) => (
          <div key={label}>
            <dt className="font-mono text-[10px] tracking-[0.15em] text-cream-muted uppercase mb-0.5">
              {label}
            </dt>
            <dd className="font-mono text-sm text-cream">{value}</dd>
          </div>
        ))}
      </dl>

      {/* Dashed separator */}
      <div className="border-t border-dashed border-edge mb-6" />

      {/* Barcode-style block (decorative) */}
      <div className="flex gap-px mb-6" aria-hidden="true">
        {Array.from({ length: 42 }).map((_, i) => (
          <div
            key={i}
            className="bg-cream-muted opacity-30"
            style={{
              width: i % 3 === 0 ? "3px" : "1.5px",
              height: "28px",
            }}
          />
        ))}
        <span className="ml-3 font-mono text-[10px] text-cream-muted self-end pb-0.5 tracking-wider">
          MRD-241-SFO
        </span>
      </div>

      {/* Metrics strip */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { value: "99.8%", label: "Success rate" },
          { value: "14s", label: "Avg. deploy" },
          { value: "0", label: "Regressions" },
        ].map(({ value, label }) => (
          <div key={label} className="border border-edge p-3">
            <div className="font-mono text-xl font-semibold text-cream tabular-nums leading-none mb-1">
              {value}
            </div>
            <div className="font-mono text-[10px] text-cream-muted tracking-wide">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* CTA */}
      <a
        href="#access"
        className="flex items-center justify-between w-full px-5 py-4 bg-alert text-cream group transition-colors hover:bg-[#c83232]"
      >
        <span className="font-display text-sm font-semibold tracking-[0.08em] uppercase">
          Request early access
        </span>
        <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </section>
  );
}

/* ─── Hero wrapper ───────────────────────────────────────────────────────── */

function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100dvh-57px)]">
      <BoardingPass />
      <section className="bg-ground flex flex-col">
        <DepartureBoard />
      </section>
    </div>
  );
}

/* ─── Pillars ────────────────────────────────────────────────────────────── */

const PILLARS = [
  {
    gate: "01",
    icon: CheckCircle,
    heading: "Deploy with confidence",
    body: "Meridian runs automated impact analysis before every push — correlating code changes with downstream metrics so your team ships knowing what will change, and what won't.",
  },
  {
    gate: "02",
    icon: Globe,
    heading: "Align every stakeholder",
    body: "Developers, product managers, and leadership read the same release manifest in real time. No more post-mortems spent reconstructing who knew what, and when.",
  },
  {
    gate: "03",
    icon: Bolt,
    heading: "Close the loop faster",
    body: "When a deploy changes a business metric, Meridian surfaces the signal in seconds. Mean time to insight drops. Mean time to recovery follows.",
  },
];

function Pillars() {
  return (
    <section className="border-t border-edge">
      {/* Section header */}
      <div className="px-6 lg:px-12 py-12 lg:py-16 border-b border-edge">
        <p className="font-mono text-[11px] tracking-[0.2em] text-cream-muted uppercase mb-4">
          Why Meridian
        </p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-[0.04em] text-cream uppercase leading-tight max-w-2xl">
          Your team ships together
        </h2>
        <p className="mt-4 text-base text-cream-dim leading-relaxed max-w-xl">
          Meridian surfaces the intent, impact, and outcome of every release to
          every stakeholder — in real time. No dashboards to build. No meetings
          to reconstruct what happened.
        </p>
      </div>

      {/* Pillar rows */}
      <div className="divide-y divide-edge">
        {PILLARS.map(({ gate, icon: Icon, heading, body }) => (
          <div
            key={gate}
            className="grid grid-cols-1 lg:grid-cols-[120px_1fr] items-start gap-0 px-6 lg:px-12 py-10 lg:py-12 group"
          >
            {/* Gate number */}
            <div className="flex items-center gap-4 lg:flex-col lg:items-start mb-6 lg:mb-0">
              <span className="font-display text-5xl font-bold text-cream-muted leading-none select-none group-hover:text-cream transition-colors duration-300">
                {gate}
              </span>
              <Icon className="text-alert" />
            </div>

            {/* Content */}
            <div className="lg:border-l lg:border-edge lg:pl-10">
              <h3 className="font-display text-2xl font-semibold tracking-[0.06em] text-cream uppercase mb-3">
                {heading}
              </h3>
              <p className="text-cream-dim leading-relaxed max-w-prose">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Access CTA ─────────────────────────────────────────────────────────── */

function Access() {
  return (
    <section
      id="access"
      className="border-t border-edge px-6 lg:px-12 py-16 lg:py-24"
      style={{ background: "linear-gradient(180deg, #1a1a28 0%, #0f0f11 100%)" }}
    >
      <div className="max-w-xl">
        <p className="font-mono text-[11px] tracking-[0.2em] text-cream-muted uppercase mb-4">
          Early access
        </p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-[0.04em] text-cream uppercase leading-tight mb-4">
          Join the teams shipping smarter
        </h2>
        <p className="text-cream-dim mb-8">
          {/* synthetic data, clearly labelled */}
          Meridian is in private beta.{" "}
          <span className="text-cream-muted text-sm font-mono">
            [147 teams on waitlist — synthetic]
          </span>
        </p>

        {/* Email form */}
        <form
          className="flex flex-col sm:flex-row gap-0 border border-edge"
          aria-label="Request early access"
        >
          <label htmlFor="email" className="sr-only">
            Work email
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@company.com"
            autoComplete="email"
            className="flex-1 px-5 py-4 bg-ground text-cream font-mono text-sm placeholder:text-cream-muted border-b sm:border-b-0 sm:border-r border-edge focus:outline-none focus-visible:ring-inset focus-visible:ring-1 focus-visible:ring-alert"
          />
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-alert text-cream font-display text-sm font-semibold tracking-[0.08em] uppercase transition-colors hover:bg-[#c83232] whitespace-nowrap"
          >
            Request access <ArrowRight />
          </button>
        </form>

        <p className="mt-4 font-mono text-[11px] text-cream-muted">
          No spam. No sales call required. We&apos;ll reach out when your seat is ready.
        </p>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-edge px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <span className="font-display text-lg font-bold tracking-[0.18em] text-cream-muted uppercase">
        Meridian
      </span>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <span className="font-mono text-xs text-cream-muted">
          © 2025 Meridian Inc.{" "}
          <span className="text-[10px]">[synthetic — replace with real entity]</span>
        </span>
        <a
          href="#"
          className="font-mono text-xs text-cream-muted hover:text-cream transition-colors underline underline-offset-2"
        >
          Privacy
        </a>
        <a
          href="#"
          className="font-mono text-xs text-cream-muted hover:text-cream transition-colors underline underline-offset-2"
        >
          Terms
        </a>
      </div>
    </footer>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Access />
      </main>
      <Footer />
    </>
  );
}
