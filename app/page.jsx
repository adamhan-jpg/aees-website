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
];

const projectExperience = [
  "Battery Energy Storage Systems (BESS)",
  "Renewable Energy Development",
  "Combined Cycle Gas Turbine Plants",
  "Environmental Health & Safety (EHS)",
  "Internal Audit & Risk Analytics",
  "Wildfire Mitigation & Preparedness",
  "Hazardous Waste Management",
  "Asbestos & Environmental Compliance",
  "BESS LTSA & Availability",
  "Executive & Bonus Compensation Auditing",
  "Compressor Station Emissions",
  "Physical Security & CSOC",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#193318]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <img src={logo} alt="AEES logo" className="w-44" />

          <nav className="hidden gap-9 text-xs font-black uppercase tracking-[0.22em] text-neutral-700 md:flex">
            <a href="#about" className="hover:text-[#4a8f1d]">
              About
            </a>

            <a href="#services" className="hover:text-[#4a8f1d]">
              Services
            </a>

            <a href="#contact" className="hover:text-[#4a8f1d]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-white px-8 py-24 md:py-32">
        {/* RIGHT SIDE ANIMATION */}
        <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
          {/* LIGHTNING */}
          <div
            className="absolute right-[2%] top-[-26%] h-[1680px] w-[360px] animate-[boltMove_6s_ease-in-out_infinite]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,196,0,0.56) 0%, rgba(241,161,0,0.26) 100%)",
              clipPath:
                "polygon(48% 0%, 100% 0%, 64% 38%, 96% 38%, 26% 100%, 40% 56%, 0% 56%, 34% 20%, 10% 20%)",
            }}
          />

          {/* MAIN LEAF */}
          <div
            className="absolute left-[-30%] top-[-42%] h-[2800px] w-[760px] origin-bottom-right animate-[leafSweep_8s_ease-in-out_infinite_alternate]"
            style={{
              background:
                "linear-gradient(180deg, rgba(122,184,32,0.62) 0%, rgba(47,125,30,0.26) 100%)",
              clipPath: "ellipse(34% 48% at 50% 50%)",
            }}
          />

          {/* SECONDARY LEAF */}
          <div
            className="absolute left-[10%] top-[-26%] h-[2400px] w-[560px] origin-bottom-right animate-[leafSweep_10s_ease-in-out_infinite_alternate]"
            style={{
              animationDelay: "1.6s",
              background:
                "linear-gradient(180deg, rgba(151,198,45,0.40) 0%, rgba(47,125,30,0.18) 100%)",
              clipPath: "ellipse(30% 46% at 50% 50%)",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/58 to-white/0" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#4a8f1d]">
              Applied Energy & Environmental Solutions
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#193318] md:text-7xl">
              Utility & Infrastructure Risk Intelligence
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-8 text-neutral-600">
              Helping utilities and energy companies operate effectively,
              reduce risk, and stay aligned with regulatory change.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#2f7d1e] px-7 py-4 text-sm font-black uppercase tracking-wider text-white"
              >
                Let’s Discuss How to Derisk Your Next Project
              </a>
            </div>
          </div>

          <div className="relative p-8">
            <img src={logo} alt="AEES logo" className="w-full" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#4a8f1d]">
              About AEES
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#193318]">
              Audit, compliance, and advisory services for complex energy
              environments.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-neutral-600">
            <p>
              Founded in 2013, AEES provides audit, compliance, and operational
              advisory services to energy, utility, and government entities.
            </p>

            <p>
              AEES brings practical expertise in internal audit, operational
              controls, environmental compliance, infrastructure systems, and
              risk management.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-neutral-50 px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#4a8f1d]">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#193318]">
            Clarity, assurance, and operational control.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-white p-8 shadow-sm ring-1 ring-neutral-200"
              >
                <div className="mb-6 h-1 w-16 bg-gradient-to-r from-[#2f7d1e] to-[#f5a400]" />

                <h3 className="text-2xl font-black text-[#193318]">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-neutral-600">
                  {service.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY INSIGHTS */}
      <section className="border-y border-[#d9e6d1] bg-[#f4f8f1] px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#4a8f1d]">
            Industry Insights
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-[#193318]">
            Operational intelligence across energy infrastructure.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {industryInsights.map((item) => (
              <article
                key={item.title}
                className="bg-white p-7 shadow-sm ring-1 ring-neutral-200"
              >
                <div className="mb-6 h-1 w-16 bg-gradient-to-r from-[#2f7d1e] to-[#f5a400]" />

                <h3 className="text-xl font-black text-[#193318]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT EXPERIENCE */}
      <section className="bg-white px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#4a8f1d]">
            Project Experience
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-[#193318]">
            Expertise in utility and infrastructure operations.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {projectExperience.map((item) => (
              <div
                key={item}
                className="border border-neutral-200 bg-neutral-50 px-6 py-5 font-bold text-[#193318]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#193318] px-8 py-20 text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f5a400]">
              Contact
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-[-0.055em]">
              Let’s discuss how to derisk your next project.
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-50/75">
              Reach out to discuss infrastructure, environmental, operational,
              or risk intelligence support.
            </p>
          </div>

          <form
            action="https://formspree.io/f/mojbrdav"
            method="POST"
            className="grid gap-5 bg-white p-8 text-[#193318]"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border border-neutral-300 px-4 py-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border border-neutral-300 px-4 py-3"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Tell us about your project..."
              required
              className="border border-neutral-300 px-4 py-3"
            />

            <button
              type="submit"
              className="bg-[#2f7d1e] px-6 py-4 font-black uppercase tracking-wider text-white"
            >
              Start the Conversation
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-white px-8 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">
          <img src={logo} alt="AEES logo" className="w-36" />

          <p className="text-sm text-neutral-500">
            © 2026 Applied Energy & Environmental Solutions
          </p>
        </div>
      </footer>
    </main>
  );
}
```
