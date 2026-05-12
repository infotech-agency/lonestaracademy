import { motion } from "motion/react";
import {
  BriefcaseBusiness,
  FileText,
  Linkedin,
  Mic,
  Users,
  Handshake,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export function PlacementSupportSection() {
  const supportItems = [
    {
      icon: FileText,
      title: "Resume Designing",
      desc: "Create a professional resume that highlights your skills and projects.",
    },
    {
      icon: Linkedin,
      title: "LinkedIn Profile Optimization",
      desc: "Build a strong LinkedIn profile to attract recruiters and companies.",
    },
    {
      icon: Mic,
      title: "Mock Interviews",
      desc: "Practice real interview questions with expert feedback.",
    },
    {
      icon: Users,
      title: "Soft Skills Training",
      desc: "Improve communication, confidence, and presentation skills.",
    },
    {
      icon: Handshake,
      title: "Job Referrals",
      desc: "Get placement support and referrals through hiring connections.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Career Counselling",
      desc: "Get guidance to choose the right career path in data and digital skills.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-16 sm:py-20 lg:py-24">
      <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
              <CheckCircle size={16} />
              Career Growth Support
            </p>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Placement & Career Support for{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Lone Star Academy Students
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              We help students become job-ready with practical career support,
              interview preparation, resume building, LinkedIn optimization, and
              placement guidance.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:9345045466"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-orange-600"
              >
                Free Career Counselling
                <ArrowRight size={18} />
              </a>

              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Explore Courses
              </a>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {supportItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-2xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-200 transition group-hover:scale-110">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}