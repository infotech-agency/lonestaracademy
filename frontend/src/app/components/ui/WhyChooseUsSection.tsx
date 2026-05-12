import React from "react";
import { Briefcase, Laptop, UserCheck, BookOpenCheck } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Learn from Industry Experts",
    description:
      "Our instructors have firsthand industry experience to guide you through real challenges, practical solutions, and job-ready skills that matter in today’s competitive market.",
  },
  {
    icon: Briefcase,
    title: "Training with Placement Focused Institute",
    description:
      "With strong placement support and a trusted reputation in data science and digital marketing, we are known among learners as one of the best digital marketing institutes in Delhi and a reliable choice for data science training with hiring support.",
  },
  {
    icon: BookOpenCheck,
    title: "Hands-On Learning Style",
    description:
      "Live projects, case studies, practical assignments, and industry tools help students build real experience, making learning more effective for both data science and digital marketing careers.",
  },
  {
    icon: Laptop,
    title: "Flexible Learning Options",
    description:
      "We offer classroom and online programs, including business analytics online courses, data analytics courses online, and cloud computing online courses, so you can learn in the mode that suits you best.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 sm:py-20 lg:py-24">
      
      {/* Decorative Blurs */}
      <div className="pointer-events-none absolute left-[-100px] top-10 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] top-24 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            
            {/* NORMAL TEXT (FIXED) */}
           <p className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-blue-600 uppercase">
  Why Choose Us
</p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Build your career with practical training and real opportunities
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Learn from expert trainers, gain hands-on experience, and build
              career-ready skills through practical programs designed for real
              industry opportunities.
            </p>
          </div>

          {/* Features (2 Left + 2 Right) */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}