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

const radar = [
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

const insights = [
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

const projects = [
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#193318]">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <img src={logo} alt="AEES logo" className="w-44" />

          <nav className="hidden gap-9 text-xs font-black uppercase tracking-[0.22em] text-neutral-700 md:flex">
            <a href="#about" className="hover:text-[#4a8f1d]">
              About AEES
            </a>

            <a href="#services" className="hover:text-[#4a8f1d]">
              Services
            </a>

            <a href="#contact" className="hover:text-[#4a8f1d]">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-neutral-200 bg-white px-8 py-24 md:py-32">
        <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
          <div
            className="absolute right-[2%] top-[-26%] h-[1680px] w-[360px] animate-[boltMove_6s_ease-in-out_infinite]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,196,0,0.56) 0%, rgba(241,161,0,0.26) 100%)",
              clipPath:
                "polygon(48% 0%, 100% 0%, 64% 38%, 96% 38%, 26% 100%, 40% 56%, 0% 56%, 34% 20%, 10% 20%)",
            }}
          />

          <div
            className="absolute left-[-30%] top-[-42%] h-[2800px] w-[760px] origin-bottom-right animate-[leafSweep_8s_ease-in-out_infinite_alternate]"
            style={{
              background:
                "linear-gradient(180deg, rgba(122,184,32,0.42) 0%, rgba(47,125,30,0.16) 100%)",
              clipPath: "ellipse(34% 48% at 50% 50%)",
            }}
          />

          <div
            className="absolute left-[10%] top-[-26%] h-[2400px] w-[560px] origin-bottom-right animate-[leafSweep_10s_ease-in-out_infinite_alternate]"
            style={{
              animationDelay: "1.6s",
              background:
                "linear-gradient(180deg, rgba(151,198,45,0.26) 0%, rgba(47,125,30,0.10) 100%)",
              clipPath: "ellipse(30% 46% at 50% 50%)",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/72 to-white/10" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#4a8f1d]">
              Applied Energy & Environmental Solutions
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#193318] md:text-7xl">
              Your partner in energy compliance & assurance.
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-8 text-neutral-600">
              Helping utilities and energy companies operate effectively,
              reduce risk, and stay aligned with regulatory change.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#about"
                className="bg-[#2f7d1e] px-7 py-4 text-sm font-black uppercase tracking-wider text-white"
              >
                Get To Know Us
              </a>

              <a
                href="#services"
                className="border border-neutral-300 bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-[#193318]"
              >
                What We Do
              </a>
            </div>
          </div>

          <div className="relative p-8">
            <img src={logo} alt="AEES logo" className="w-full" />
          </div>
        </div>
      </section>

      <section id="about" className="px-8 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div className="text-sm font-black uppercase tracking-[0.28em] text-[#4a8f1d]">
            About AEES
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] text-[#193318]">
              Audit, compliance, and advisory services for complex energy environments.
            </h2>

            <div className="space-y-5 text-base leading-7 text-neutral-600">
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
    </main>
  );
}
