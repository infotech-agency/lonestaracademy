import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function LoneStarAcademyBanner() {
  return (
    <section className="bg-white px-3 py-6 sm:px-5 lg:px-8">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700 px-5 py-8 sm:px-10 md:px-14 lg:px-20 lg:py-14">
        {/* Background Shapes */}
        <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-white/15" />
        <div className="absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-white/15" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/15" />
        <div className="absolute right-20 top-16 hidden h-64 w-64 rounded-full bg-yellow-400/90 lg:block" />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl font-extrabold leading-[1.35] text-black sm:text-4xl lg:text-5xl">
              <span className="box-decoration-clone  px-3 py-1">
                Transform your future with Lone Star Academy’s industry-ready
                upskilling.
              </span>
            </h2>

            <div className="mt-7">
              <a
                href="tel:9345045466"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-base font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-900"
              >
                Enquiry Now
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[560px] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Students learning at Lone Star Academy"
                loading="lazy"
                className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[380px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
                <p className="text-xs font-semibold text-blue-600">
                  Lone Star Academy
                </p>
                <p className="text-sm font-bold text-slate-900">
                  Learn. Up Skills. Get Placed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}