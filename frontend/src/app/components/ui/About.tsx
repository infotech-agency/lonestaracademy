import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle,
  Users,
  Award,
  Briefcase,
  BookOpen,
} from "lucide-react";

export default function AboutIntroSection() {
  const features = [
    "Hands-on practical training",
    "Live projects & case studies",
    "Industry certified trainers",
    "Career & placement guidance",
  ];

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Students Trained",
    },
    {
      icon: Award,
      value: "10+",
      label: "Years of Excellence",
    },
    {
      icon: Briefcase,
      value: "100+",
      label: "Hiring Partners",
    },
    {
      icon: BookOpen,
      value: "20+",
      label: "Career-Focused Courses",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-50/70 via-white to-cyan-50/60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             

            <h2 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              About{" "}
              <span className="text-blue-700">
                Lone Star Academy
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-9 text-slate-700">
              Lone Star Academy is a leading training institute in India for{" "}
              <span className="font-bold text-blue-700">Data Science</span>,{" "}
              <span className="font-bold text-blue-700">
                Digital Marketing
              </span>
              , and{" "}
              <span className="font-bold text-blue-700">
                Business Analytics
              </span>
              . We empower students and working professionals with practical,
              job-oriented learning designed for real industry success.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white px-5 py-4 text-slate-900 shadow-md"
                >
                  <CheckCircle size={22} className="shrink-0 text-blue-700" />
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-2xl"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-3xl border border-blue-100 bg-blue-50/70 p-7"
                >
                  <Icon size={34} className="mb-7 text-blue-700" />
                  <h3 className="text-4xl font-extrabold text-slate-950">
                    {value}
                  </h3>
                  <p className="mt-2 text-base text-slate-700">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-100 p-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                Our Promise
              </p>
              <p className="mt-5 text-base leading-8 text-slate-700">
                We combine expert mentorship, industry-based curriculum,
                practical implementation, and strong placement assistance to
                help learners become truly industry ready.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}