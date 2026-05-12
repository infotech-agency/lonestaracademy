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

export default function PlacementSupportSection() {
  const supportItems = [
    { icon: FileText, title: "Resume Designing" },
    { icon: Linkedin, title: "LinkedIn Optimization" },
    { icon: Mic, title: "Mock Interviews" },
    { icon: Users, title: "Soft Skills Training" },
    { icon: Handshake, title: "Job Referrals" },
    { icon: BriefcaseBusiness, title: "Career Counselling" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-16 sm:py-20 lg:py-24">
      
      {/* Background Blur */}
      <div className="pointer-events-none absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 to-orange-400/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
              
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Placement support and career guidance"
                loading="lazy"
                className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[420px]"
              />

              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/60 p-5 text-white backdrop-blur-md">
                <p className="text-sm text-cyan-300 font-semibold">
                  Lone Star Academy
                </p>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Placement & Career Support
                </h3>
              </div>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
              <CheckCircle size={16} />
              Career Growth Support
            </p>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Become Job-Ready with{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Expert Placement Guidance
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              We help Lone Star Academy students prepare for interviews,
              build strong resumes, optimize LinkedIn profiles, and connect
              with real career opportunities.
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {supportItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-200">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-sm font-semibold sm:text-base">
                      {item.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>

            {/* BUTTONS */}
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
        </div>
      </div>
    </section>
  );
}