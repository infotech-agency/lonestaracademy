import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Linkedin,
  Mic,
  Users,
  Handshake,
} from "lucide-react";

export default function PlacementCareerSection() {
  const items = [
    { icon: FileText, title: "Resume Designing" },
    { icon: Linkedin, title: "LinkedIn Profile Optimization" },
    { icon: Mic, title: "Mock Interviews" },
    { icon: Users, title: "Soft Skills Training" },
    { icon: Handshake, title: "Job Referrals & Placement Support" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-400/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-1 shadow-2xl">
          <div className="grid gap-8 rounded-[1.8rem] bg-white/95 p-5 sm:p-8 lg:grid-cols-2 lg:p-10">
            
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[1.5rem]"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Placement and career support"
                className="h-[280px] w-full object-cover sm:h-[380px] lg:h-full"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur">
                <p className="text-sm font-semibold text-blue-600">
                  Lone Star Academy
                </p>
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Learn. Prepare. Get Placed.
                </h3>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
               
              <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Placement & Career Support
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                We guide students with practical career preparation, interview
                confidence, professional profile building, and placement support.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {items.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-lg"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                        <Icon size={21} />
                      </div>

                      <p className="text-sm font-semibold leading-snug text-slate-800 sm:text-base">
                        {item.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8">
                <a
                  href="tel:9345045466"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600 sm:w-auto"
                >
                  Free Career Counselling
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}