import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle,
  Users,
  Briefcase,
  Star,
  Phone,
  Download,
  ArrowRight,
  LineChart,
  Database,
  Brain,
  Award,
} from "lucide-react";

export default function BusinessAnalyticsPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.35),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-2 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 ring-1 ring-white/20">
              Advanced Certification Program
            </span>

            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Business Analytics Course in Delhi
            </h1>

            <p className="mt-5 max-w-xl text-lg text-blue-100">
              Learn Excel, SQL, Power BI, Python, Statistics, Business
              Intelligence and AI tools with practical projects and placement
              support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:9711709644"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-blue-950 shadow-lg transition hover:bg-blue-50"
              >
                <Phone size={18} /> Call Now
              </a>

              <button className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-400">
                <Download size={18} /> Download Brochure
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white/10 p-5 shadow-2xl ring-1 ring-white/20"
          >
            <img
              src="/businessanlytics.jpg"
              alt="Business Analytics Course"
              className="h-[320px] w-full rounded-2xl object-cover md:h-[430px]"
            />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-10 md:grid-cols-4">
        {[
          ["20,000+", "Learners Trained"],
          ["50+", "Hiring Partners"],
          ["9.6/10", "Average Rating"],
          ["12,000+", "Learners Placed"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-center"
          >
            <h3 className="text-2xl font-extrabold text-blue-950">{value}</h3>
            <p className="mt-1 text-sm font-medium text-slate-600">{label}</p>
          </div>
        ))}
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">
              Why Choose Our Business Analytics Program?
            </h2>
            <p className="mt-3 text-slate-600">
              Job-ready training with real business case studies.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <BarChart3 />,
                title: "Power BI & Dashboards",
                text: "Create interactive dashboards and business reports.",
              },
              {
                icon: <Database />,
                title: "Excel, SQL & Data Handling",
                text: "Master data cleaning, querying and analysis skills.",
              },
              {
                icon: <Brain />,
                title: "AI for Business Decisions",
                text: "Use analytics and AI tools for smarter decision-making.",
              },
              {
                icon: <LineChart />,
                title: "Business Forecasting",
                text: "Learn statistics, trends and predictive analysis.",
              },
              {
                icon: <Briefcase />,
                title: "Real Projects",
                text: "Work on practical business case studies and reports.",
              },
              {
                icon: <Award />,
                title: "Certification & Placement",
                text: "Get certified with placement assistance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-900">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Business Analytics Curriculum
          </h2>
          <p className="mt-3 text-slate-600">
            Complete roadmap from basics to advanced analytics.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              tier: "Tier 1",
              title: "Analytics Foundation",
              points: ["Advanced Excel", "Business Statistics", "SQL Basics", "Data Cleaning"],
            },
            {
              tier: "Tier 2",
              title: "BI & Visualization",
              points: ["Power BI", "Dashboard Design", "Data Modelling", "Business Reports"],
            },
            {
              tier: "Tier 3",
              title: "AI & Career Readiness",
              points: ["Python Analytics", "Predictive Analytics", "Capstone Project", "Interview Preparation"],
            },
          ].map((block) => (
            <div
              key={block.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="rounded-full bg-blue-950 px-4 py-1 text-sm font-bold text-white">
                {block.tier}
              </span>
              <h3 className="mt-5 text-2xl font-extrabold">{block.title}</h3>

              <ul className="mt-5 space-y-3">
                {block.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="text-blue-700" size={18} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <Star className="mx-auto mb-4 text-yellow-300" size={36} />
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Start Your Business Analytics Career Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Join Lone Star Academy and learn the skills companies are hiring for.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:9711709644"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-blue-950"
            >
              Call 9711709644
            </a>

            <button className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3 font-bold text-white">
              Apply Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}