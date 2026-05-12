import { motion } from "framer-motion";
import {
  Megaphone,
  Search,
  Globe,
  CheckCircle,
  Star,
  Users,
  Briefcase,
  Award,
  Phone,
  ArrowRight,
  BarChart3,
  Instagram,
} from "lucide-react";

export default function DigitalMarketingPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.35),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-2 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 ring-1 ring-white/20">
              Advanced Certification Program
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Digital Marketing Course in Delhi
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-blue-100">
              Learn SEO, Google Ads, Social Media Marketing, Meta Ads, Content
              Marketing and Performance Marketing with live projects and
              placement support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-600">
                Apply Now
              </button>

              <a
                href="tel:9711709644"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/Digitalmarketing.jpg"
              alt="Digital Marketing"
              className="h-[320px] w-full rounded-3xl object-cover shadow-2xl md:h-[500px]"
            />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-12 md:grid-cols-4">
        {[
          ["20,000+", "Learners Trained"],
          ["50+", "Hiring Partners"],
          ["12,000+", "Students Placed"],
          ["9.6/10", "Average Rating"],
        ].map(([number, label]) => (
          <div
            key={label}
            className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center"
          >
            <h3 className="text-3xl font-extrabold text-blue-950">
              {number}
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-600">
              {label}
            </p>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">
              Why Choose Digital Marketing?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-slate-600">
              Master modern digital marketing strategies with practical training
              and live campaigns.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Search />,
                title: "SEO Training",
                text: "Learn On-Page, Off-Page and Technical SEO.",
              },
              {
                icon: <Megaphone />,
                title: "Google Ads",
                text: "Run high-converting search and display ads.",
              },
              {
                icon: <Instagram />,
                title: "Social Media Marketing",
                text: "Master Instagram, Facebook and LinkedIn marketing.",
              },
              {
                icon: <BarChart3 />,
                title: "Performance Marketing",
                text: "Learn lead generation and ROI-focused campaigns.",
              },
              {
                icon: <Globe />,
                title: "Website & Branding",
                text: "Build online presence and digital branding skills.",
              },
              {
                icon: <Award />,
                title: "Certification & Placement",
                text: "Get industry certification with placement support.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
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
        <div className="text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Course Curriculum
          </h2>

          <p className="mt-4 text-slate-600">
            Complete roadmap from basics to advanced digital marketing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Foundation",
              topics: [
                "Digital Marketing Basics",
                "Website Planning",
                "Content Marketing",
                "Branding",
              ],
            },
            {
              title: "Marketing Channels",
              topics: [
                "SEO",
                "Google Ads",
                "Social Media Marketing",
                "Email Marketing",
              ],
            },
            {
              title: "Advanced Marketing",
              topics: [
                "Performance Marketing",
                "Analytics & Tracking",
                "Live Campaigns",
                "Interview Preparation",
              ],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-blue-950">
                {item.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {item.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <CheckCircle
                      size={18}
                      className="text-orange-500"
                    />
                    {topic}
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
          <Star className="mx-auto text-yellow-300" size={40} />

          <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">
            Become a Digital Marketing Expert
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Join Lone Star Academy and build your career in SEO, Ads, Social
            Media and Performance Marketing.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-600">
              Enroll Now
            </button>

            <button className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white transition hover:bg-white/20">
              Download Brochure
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}