import {
  BarChart3,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle2,
  Clock3,
  DollarSign,
  FileSpreadsheet,
  GraduationCap,
  LineChart,
  Phone,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

export default function FinancialModellingPage() {
  const highlights = [
    {
      icon: FileSpreadsheet,
      title: "Advanced Excel",
      desc: "Master formulas, dashboards, pivots, automation & financial reports.",
    },
    {
      icon: Calculator,
      title: "Financial Analysis",
      desc: "Learn ratio analysis, forecasting, budgeting & business planning.",
    },
    {
      icon: TrendingUp,
      title: "DCF Valuation",
      desc: "Build real-world valuation and investment banking models.",
    },
    {
      icon: BarChart3,
      title: "Financial Dashboards",
      desc: "Create visually powerful business intelligence dashboards.",
    },
    {
      icon: Briefcase,
      title: "Investment Banking",
      desc: "Understand mergers, acquisitions & equity research basics.",
    },
    {
      icon: Building2,
      title: "Real Projects",
      desc: "Work on practical case studies and corporate assignments.",
    },
  ];

  const curriculum = [
    {
      title: "Module 1",
      topics: [
        "Excel Fundamentals",
        "Advanced Excel",
        "Pivot Tables",
        "Conditional Formatting",
        "Financial Functions",
      ],
    },
    {
      title: "Module 2",
      topics: [
        "Financial Statements",
        "Balance Sheet Analysis",
        "Cash Flow Statements",
        "Ratio Analysis",
        "Forecasting",
      ],
    },
    {
      title: "Module 3",
      topics: [
        "DCF Modelling",
        "Valuation Techniques",
        "Budgeting Models",
        "Scenario Analysis",
        "Investment Banking Basics",
      ],
    },
  ];

  const stats = [
    {
      number: "20,000+",
      label: "Students Trained",
    },
    {
      number: "50+",
      label: "Hiring Partners",
    },
    {
      number: "700+",
      label: "Learning Hours",
    },
    {
      number: "9.6/10",
      label: "Average Rating",
    },
  ];

  const careers = [
    "Financial Analyst",
    "Investment Banking Analyst",
    "Business Analyst",
    "Equity Research Analyst",
    "Budget Analyst",
    "Corporate Finance Executive",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 px-6 py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[url('/finance-bg.jpg')] bg-cover bg-center opacity-10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium">
              Advanced Certification Program
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Financial Modelling Course in Delhi
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Learn Financial Modelling, DCF Valuation, Forecasting,
              Investment Banking Concepts, Financial Analysis, Budgeting &
              Excel with live projects and industry-focused training.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#enquiry"
                className="rounded-2xl bg-white px-7 py-4 font-semibold text-blue-900 transition hover:scale-105"
              >
                Download Brochure
              </a>

              <a
                href="tel:9711709644"
                className="flex items-center gap-2 rounded-2xl border border-white/30 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {[
                "Placement Support",
                "Live Projects",
                "Industry Mentors",
                "Certification",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div
            id="enquiry"
            className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl"
          >
            <h2 className="text-3xl font-bold">
              Get Free Career Counselling
            </h2>

            <p className="mt-2 text-slate-600">
              Fill your details and our expert will contact you shortly.
            </p>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-blue-600"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-900 px-6 py-4 font-semibold text-white transition hover:bg-blue-800"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white p-8 text-center shadow-sm"
            >
              <h3 className="text-4xl font-extrabold text-blue-900">
                {item.number}
              </h3>
              <p className="mt-3 text-lg text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-900">
              Program Highlights
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              What You Will Learn
            </h2>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <item.icon className="h-8 w-8 text-blue-900" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full bg-white/10 px-5 py-2 text-sm">
              Industry Curriculum
            </span>

            <h2 className="mt-5 text-4xl font-bold">
              Financial Modelling Syllabus
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {curriculum.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <div className="mt-6 space-y-4">
                  {item.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-900">
                Career Opportunities
              </span>

              <h2 className="mt-5 text-4xl font-bold text-slate-900">
                Career Roles After This Course
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Build a successful career in finance, investment banking,
                consulting, and corporate analytics with high-demand financial
                modelling skills.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {careers.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 p-5"
                  >
                    <DollarSign className="h-6 w-6 text-blue-900" />
                    <span className="font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-950 to-slate-900 p-10 text-white">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-10 w-10" />

                <div>
                  <h3 className="text-3xl font-bold">
                    Placement Assistance
                  </h3>
                  <p className="mt-2 text-blue-100">
                    Get interview preparation, resume building & placement support.
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                {[
                  "Resume Building Sessions",
                  "Mock Interviews",
                  "Live Projects",
                  "Industry Certifications",
                  "Corporate Mentorship",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-green-400" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-900">
              Student Reviews
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              What Our Students Say
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="mt-6 leading-8 text-slate-600">
                  Excellent training experience with practical financial
                  modelling projects and supportive mentors.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-900">
                    S
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Student Name
                    </h4>

                    <p className="text-slate-500">
                      Financial Analyst
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Start Your Financial Modelling Journey Today
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Join Lone Star Academy and become industry-ready with practical
            finance and valuation skills.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#enquiry"
              className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-900"
            >
              Apply Now
            </a>

            <a
              href="tel:9711709644"
              className="rounded-2xl border border-white/30 px-8 py-4 font-semibold"
            >
              Talk to Advisor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}