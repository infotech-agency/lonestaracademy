import React from "react";
import { ArrowRight, Play, Users, Award, Briefcase } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[80px] h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute right-[-100px] bottom-[-40px] h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        
        {/* Left Side Image */}
        <div className="relative order-1 flex justify-center lg:order-1">
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
            {/* Decorative card */}
            <div className="absolute -left-4 top-10 hidden rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Top Rated Institute</p>
<p className="text-lg text-slate-700">
  <span className="font-bold text-slate-900">Industry Focused</span> training designed for real-world skills.
</p>                </div>
              </div>
            </div>

            {/* Main image box */}
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-cyan-100 via-white to-blue-100 p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-[24px] bg-white">
                <img
                  src="/ssssss.png"
                  alt="Student learning"
                  className="h-[360px] w-full object-cover sm:h-[430px] md:h-[500px] lg:h-[560px]"
                />
              </div>
            </div>

            {/* Bottom stats */}
            <div className="absolute -bottom-4 right-2 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur sm:right-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Trusted by Students</p>
<p className="text-xl font-bold text-slate-900">
  15,000+
</p>                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="order-2 text-center lg:order-2 lg:text-left">
          {/* <span className="inline-flex items-center rounded-full border border-cyan-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            Transform Your Career With Practical Learning
          </span> */}

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
         Delhi's Best{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Data Science & Digital Marketing

            </span>{" "}
Institute.          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
        Lone Star Academy, a proud member of the National Career Service (Ministry of Labour & Employment), was established in 2013 by a USA-based data scientist.
          </p>

          {/* Feature points */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Briefcase className="mx-auto mb-3 h-6 w-6 text-cyan-700 lg:mx-0" />
              <h3 className="font-semibold text-slate-900">Job Ready Skills</h3>
              <p className="mt-1 text-sm text-slate-600">Practical and career-focused modules.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Award className="mx-auto mb-3 h-6 w-6 text-cyan-700 lg:mx-0" />
              <h3 className="font-semibold text-slate-900">Expert Mentors</h3>
              <p className="mt-1 text-sm text-slate-600">Learn from experienced industry trainers.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Users className="mx-auto mb-3 h-6 w-6 text-cyan-700 lg:mx-0" />
              <h3 className="font-semibold text-slate-900">Strong Community</h3>
              <p className="mt-1 text-sm text-slate-600">Grow with a network of future professionals.</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <a
              href="courses"
              className="inline-flex items-center justify-center rounded-full bg-blue-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Explore Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            {/* <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-blue-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-cyan-700"
            >
              <Play className="mr-2 h-4 w-4" />
              Learn More
            </a> */}
          </div>

          {/* Bottom stats */}
        
        </div>
      </div>
    </section>
  );
};

export default HeroSection;