import { motion } from "framer-motion";

const steps = [
  { title: "Join Free Demo Class", desc: "Experience our training with a no-cost demo session before enrolling." },
  { title: "Learn from Expert Trainers", desc: "Get trained by industry professionals with real-world experience." },
  { title: "Work on Live Projects", desc: "Gain practical knowledge by working on real-time projects." },
  { title: "Resume & Interview Preparation", desc: "Build a strong resume and crack interviews with expert guidance." },
  { title: "Placement Drives", desc: "Participate in placement drives with our hiring partners." },
  { title: "Start Your Career", desc: "Launch your career in Data Science & Analytics with confidence." },
];

export default function TrainingProcess() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-black py-8 text-white">
      <div className="mb-5 px-4 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Our Training Process</h2>
        <p className="mx-auto mt-1 max-w-xl text-xs text-gray-400 md:text-sm">
          Follow our structured learning journey designed to make you job-ready.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl px-4">
        <div className="absolute left-1/2 top-0 hidden h-full w-[2px] bg-gradient-to-b from-blue-500 to-transparent md:block" />

        <div className="space-y-3">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col items-center md:flex-row ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="rounded-lg border border-white/10 bg-white/10 p-3 shadow-md backdrop-blur-xl transition-all duration-300 hover:scale-[1.01]">
                    <div className="mb-1.5 flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-sm font-semibold md:text-base">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-xs leading-snug text-gray-300">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="hidden w-7 items-center justify-center md:flex">
                  <div className="h-2.5 w-2.5 rounded-full border-2 border-slate-900 bg-blue-500"></div>
                </div>

                <div className="hidden w-1/2 md:block"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}