"use client";

const logo = "/aees-logo.png";

const services = [
  {
    title: "Compliance Advisory",
    body: "Expert guidance to help energy and utility organizations stay ahead of changing state and federal requirements.",
  },
  {
    title: "Audit & Assurance",
    body: "Independent evaluations of operational and compliance frameworks, internal controls, and audit readiness.",
  },
  {
    title: "Operational Systems & Controls",
    body: "Policies, procedures, systems, and controls that sustain compliance and strengthen operational performance.",
  },
];

const regulatoryRadar = [
  {
    title: "Battery Energy Storage Systems — GO 167-C Compliance",
    body: "Support for BESS owners developing operation, maintenance, emergency, and inspection-ready compliance programs.",
  },
  {
    title: "Community Solar Programs",
    body: "Audits and advisory support for billing accuracy, interconnection, program transparency, and regulatory alignment.",
  },
  {
    title: "Environmental, Health & Safety in Renewables",
    body: "Compliance reviews for hazardous waste, EHS reporting, field controls, and renewable project operations.",
  },
];

const industryInsights = [
  {
    title: "BESS Availability & Reliability",
    body: "Availability depends on controls, alarms, dispatch readiness, maintenance execution, and operational discipline — not simply reported uptime.",
  },
  {
    title: "GO 167-C Readiness",
    body: "Battery storage operators are facing expanding expectations around inspection readiness, maintenance evidence, emergency planning, and operational controls.",
  },
  {
    title: "Renewable Asset Risk",
    body: "Operational and compliance risks increasingly emerge from complex vendor ecosystems, fragmented responsibilities, and rapidly scaling infrastructure portfolios.",
  },
  {
    title: "Operational Intelligence",
    body: "Technical data, maintenance records, alarms, inspections, and incident trends can provide leading insight into asset reliability and execution risk.",
  },
];

const projectExperience = [
  {
    title: "Environmental & Hazardous Waste Management",
    body: "EHS audit support involving hazardous waste handling, demolition waste, abatement workflows, manifests, contractor oversight, and environmental documentation.",
  },
  {
    title: "Asbestos & Abatement Controls",
    body: "EHS project reviews involving asbestos surveys, abatement sequencing, site controls, disposal documentation, and contractor compliance.",
  },
  {
    title: "Wildfire Mitigation & Preparedness",
    body: "Utility audit and advisory support related to wildfire preparedness, mitigation controls, field readiness, governance, and supporting evidence.",
  },
  {
    title: "BESS LTSA & Availability",
    body: "Review of long-term service agreement performance, vendor response, availability claims, corrective actions, and evidence supporting asset reliability.",
  },
  {
    title: "BESS EHS & Compliance",
    body: "Support for battery storage operating procedures, emergency readiness, inspection evidence, environmental controls, and GO 167-C readiness.",
  },
  {
    title: "Executive & Bonus Compensation Auditing",
    body: "F&O audit support for incentive compensation, executive pay processes, governance controls, approval workflows, and supporting documentation.",
  },
  {
    title: "Combined Cycle Gas Turbine Plants",
    body: "Operational, environmental, compliance, and control reviews involving generation facilities, emissions systems, maintenance programs, and supporting infrastructure.",
  },
  {
    title: "Compressor Station Emissions",
    body: "Audit support related to permitting, emissions monitoring, source testing, reporting, notifications, and emissions-data systems.",
  },
  {
    title: "Gas Transmission & Storage Operations",
    body: "Reviews involving gas transmission facilities, storage operations, compressor stations, valve sites, and related operational controls.",
  },
  {
    title: "Physical Security & CSOC",
    body: "Security program reviews covering centralized monitoring, alarms, surveillance, remote sites, response protocols, and facility controls.",
  },
  {
    title: "Contractor & Field Controls",
    body: "Assessments of contractor oversight, field execution, safety interfaces, access controls, and work-management documentation.",
  },
  {
    title: "Systems, Data & Evidence",
    body: "Use of operational systems and records including work orders, emissions data, compliance logs, dashboards, and audit evidence repositories.",
  },
];

const trustItems = [
  "50+ projects with major utilities",
  "Over two decades of audit, operational, and compliance advisory experience",
  "Trusted by utilities, energy infrastructure providers, government agencies, and renewable developers",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#143519]">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
          <a href="#top" aria-label="AEES home">
            <img src={logo} alt="AEES logo" className="w-40 md:w-48" />
          </a>

          <nav className="hidden gap-12 text-xs font-black uppercase tracking-[0.34em] text-neutral-800 md:flex">
            <a href="#about" className="hover:text-[#3d8c22]">
              About AEES
            </a>
            <a href="#services" className="hover:text-[#3d8c22]">
              Services
            </a>
            <a href="#contact" className="hover:text-[#3d8c22]">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative border-b border-neutral-200 bg-white px-8 py-24 md:py-32">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden md:block">
          <div
            className="absolute right-[2%] top-[-26%] h-[1680px] w-[360px] animate-[boltMove_6s_ease-in-out_infinite] bg-[linear-gradient(180deg,rgba(255,196,0,0.42)_0%,rgba(241,161,0,0.16)_100%)]"
            style={{
              clipPath:
                "polygon(48% 0%, 100% 0%, 64% 38%, 96% 38%, 26% 100%, 40% 56%, 0% 56%, 34% 20%, 10% 20%)",
            }}
          />

          <div
            className="absolute left-[-30%] top-[-42%] h-[2800px] w-[760px] origin-bottom-right animate-[leafSweep_8s_ease-in-out_infinite_alternate] bg-[linear-gradient(180deg,rgba(122,184,32,0.42)_0%,rgba(47,125,30,0.16)_100%)]"
            style={{
              clipPath: "ellipse(34% 48% at 50% 50%)",
            }}
          />

          <div
            className="absolute left-[10%] top-[-26%] h-[2400px] w-[560px] origin-bottom-right animate-[leafSweep_10s_ease-in-out_infinite_alternate] bg-[linear-gradient(180deg,rgba(151,198,45,0.26)_0%,rgba(47,125,30,0.10)_100%)]"
            style={{
              animationDelay: "1.6s",
              clipPath: "ellipse(30% 46% at 50% 50%)",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/72 to-white/10" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-8 text-sm font-black uppercase tracking-[0.42em] text-[#3d8c22]">
              Applied Energy & Environmental Solutions
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#143519] md:text-7xl">
              Your partner in energy compliance & assurance.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-neutral-600">
              Helping utilities and energy companies operate effectively, reduce risk, and stay aligned with regulatory change.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href="#about" className="bg-[#2f7d1e] px-7 py-4 text-sm font-black uppercase tracking-wider text-white">
                Get To Know Us
              </a>

              <a href="#services" className="border border-neutral-300 bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-[#143519]">
                What We Do
              </a>
            </div>
          </div>

          <div className="relative p-8">
            <div className="absolute -inset-6 -z-10 bg-[linear-gradient(135deg,rgba(47,125,30,0.08),rgba(245,164,0,0.12))]" />
            <img src={logo} alt="AEES logo" className="w-full" />
          </div>
        </div>
      </section>

      <section id="about" className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div className="text-sm font-black uppercase tracking-[0.42em] text-[#3d8c22]">
            About AEES
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] text-[#143519] md:text-5xl">
              Audit, compliance, and advisory services for complex energy environments.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-neutral-600">
              <p>
                Founded in 2013, AEES provides audit, compliance, and operational advisory services to energy, utility, and government entities.
              </p>
              <p>
                From large investor-owned utilities to government entities and renewable energy developers, AEES brings practical expertise in internal audit, risk management, regulatory compliance, and project advisory services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-neutral-50 px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.42em] text-[#3d8c22]">
            Services
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-[#143519] md:text-5xl">
            Clarity, assurance, and control.
          </h2>

          <div className="mt-14 grid gap-px bg-neutral-200 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="bg-white p-8">
                <div className="mb-8 h-1 w-20 bg-gradient-to-r from-[#2f7d1e] to-[#f5a400]" />
                <h3 className="text-2xl font-black leading-tight text-[#143519]">
                  {service.title}
                </h3>
                <p className="mt-5 leading-7 text-neutral-600">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.42em] text-[#3d8c22]">
            On Our Regulatory Radar
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.045em] text-[#143519] md:text-5xl">
            Your compliance challenges, our expertise.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {regulatoryRadar.map((item) => (
              <article key={item.title} className="border-l-4 border-[#f5a400] bg-white p-7 shadow-sm ring-1 ring-neutral-200">
                <h3 className="text-xl font-black leading-tight text-[#143519]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#143519] px-8 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.42em] text-[#f5a400]">
              Case Study
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] md:text-5xl">
              Supporting utilities in meeting GO 167-C BESS requirements.
            </h2>
          </div>

          <p className="text-lg leading-8 text-green-50/80">
            AEES helps utilities and energy operators translate regulatory requirements into practical audit-ready plans, controls, procedures, and supporting evidence.
          </p>
        </div>
      </section>

      <section className="border-y border-[#d9e6d1] bg-[#f4f8f1] px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.42em] text-[#3d8c22]">
              Industry Insights
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-[#143519] md:text-5xl">
              Emerging risks, compliance trends, and operational intelligence across energy infrastructure.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              AEES monitors evolving operational, regulatory, and technical issues affecting utilities, renewable energy developers, and energy infrastructure operators.
            </p>
          </div>

          <div className="grid gap-px bg-neutral-200 md:grid-cols-2">
            {industryInsights.map((item) => (
              <article key={item.title} className="bg-white p-7">
                <div className="mb-6 h-1 w-16 bg-gradient-to-r from-[#2f7d1e] to-[#f5a400]" />
                <h3 className="text-xl font-black text-[#143519]">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.42em] text-[#3d8c22]">
            Project Experience
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.045em] text-[#143519] md:text-5xl">
            Expertise in utility and infrastructure operations.
          </h2>

          <div className="mt-14 grid gap-px bg-neutral-200 md:grid-cols-3">
            {projectExperience.map((item) => (
              <article key={item.title} className="bg-white p-7">
                <div className="mb-6 h-1 w-16 bg-gradient-to-r from-[#2f7d1e] to-[#f5a400]" />
                <h3 className="text-xl font-black text-[#143519]">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.42em] text-[#3d8c22]">
              A Partner You Can Trust
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-[#143519] md:text-5xl">
              Trusted advisors to energy and utility companies for over a decade.
            </h2>
          </div>

          <ul className="grid gap-px bg-neutral-200">
            {trustItems.map((item) => (
              <li key={item} className="bg-white p-6 text-lg font-bold text-[#143519]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-[#143519] px-8 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.42em] text-[#f5a400]">
              Contact
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight tracking-[-0.055em]">
              Let’s discuss how to derisk your next project.
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-50/75">
              Share a few details and AEES will follow up to discuss audit, compliance, operational advisory, or project support needs.
            </p>
          </div>

          <form
            action="https://formspree.io/f/mojbrdav"
            method="POST"
            className="grid gap-5 bg-white p-8 text-[#143519]"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold">
                First name
                <input name="firstName" required className="border border-neutral-300 px-4 py-3" />
              </label>

              <label className="grid gap-2 text-sm font-bold">
                Last name
                <input name="lastName" required className="border border-neutral-300 px-4 py-3" />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold">
              Email
              <input name="email" type="email" required className="border border-neutral-300 px-4 py-3" />
            </label>

            <label className="grid gap-2 text-sm font-bold">
              Phone
              <input name="phone" className="border border-neutral-300 px-4 py-3" />
            </label>

            <label className="grid gap-2 text-sm font-bold">
              Company Name
              <input name="company" className="border border-neutral-300 px-4 py-3" />
            </label>

            <label className="grid gap-2 text-sm font-bold">
              How can we help you?
              <textarea name="message" rows={5} required className="border border-neutral-300 px-4 py-3" />
            </label>

            <button type="submit" className="bg-[#2f7d1e] px-6 py-4 font-black uppercase tracking-wider text-white transition hover:bg-[#256617]">
              Start the Conversation
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white px-8 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">
          <img src={logo} alt="AEES logo" className="w-36" />
          <p className="text-sm text-neutral-500">
            © 2026 by Applied Energy & Environmental Solutions, LLC
          </p>
        </div>
      </footer>
    </main>
  );
}
