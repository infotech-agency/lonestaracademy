import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import {
  Users,
  Award,
  Target,
  Heart,
  CheckCircle,
  Star,
  Briefcase,
  BookOpen,
  GraduationCap,
  Building2,
  Sparkles,
  MonitorPlay,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Students Trained" },
  { icon: Award, value: "10+", label: "Years of Excellence" },
  { icon: Briefcase, value: "100+", label: "Hiring Partners" },
  { icon: BookOpen, value: "20+", label: "Career-Focused Courses" },
];

const highlights = [
  "Founded in 2013 by a USA-based Data Scientist",
  "Proud member of the National Career Service (Ministry of Labour & Employment)",
  "Microsoft & IBM certified trainers",
  "Project-based practical learning with real-world applications",
  "Placement guidance with resume, interview, and job support",
  "Online + offline learning formats with recordings and revision support",
];

const courses = [
  "Data Science",
  "Business Analytics",
  "Digital Marketing",
  "Machine Learning",
  "Artificial Intelligence",
  "Deep Learning",
  "Big Data & Hadoop",
  "SQL Server",
  "Power BI",
  "Advanced Excel",
  "Python",
  "Data Visualization",
];

const features = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    desc: "Learn from Microsoft & IBM certified trainers with 10+ to 15+ years of hands-on analytics and technology experience.",
  },
  {
    icon: Building2,
    title: "Industry-Based Curriculum",
    desc: "Courses are designed around real business needs so students gain practical, job-ready skills from day one.",
  },
  {
    icon: MonitorPlay,
    title: "Practical Learning",
    desc: "Work on live assignments, capstone projects, and real-world datasets to build confidence and implementation skills.",
  },
  {
    icon: TrendingUp,
    title: "Placement Support",
    desc: "Get complete career assistance including resume building, interview preparation, job application support, and referrals.",
  },
];

const values = [
  "Student-first learning approach",
  "Equal learning opportunities for everyone",
  "Balanced theory + practical implementation",
  "Continuous curriculum upgrades as per industry trends",
  "Long-term support for students and working professionals",
];

const companies = [
  "Accenture",
  "American Express",
  "Capgemini",
  "Bank of America",
  "British Telecom",
  "WNS",
  "Orange",
  "Cognizant",
  "TCS",
  "Amazon",
  "McKinsey",
];

export default function AboutPage() {
  return (
    <>
      <title>About Us | Lone Star Academy</title>
      <meta
        name="description"
        content="Learn about Lone Star Academy - a leading institute for Data Science, Digital Marketing, and Business Analytics with expert trainers, practical learning, and strong placement support."
      />

      <Navigation />

      <main className="bg-white text-[#0F172A]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#DBEAFE] blur-3xl opacity-70" />
            <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#E0F2FE] blur-3xl opacity-70" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-4 py-2 text-sm font-medium text-[#2146C7]">
                  <Sparkles size={16} className="text-[#2146C7]" />
                  Committed to Your Success Since 2013
                </div>

                <h1 className="text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
                  About{" "}
                  <span className="text-[#2146C7]">
                    Lone Star Academy
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg">
                  Lone Star Academy is a leading training institute in India for{" "}
                  <span className="font-semibold text-[#2146C7]">Data Science</span>,{" "}
                  <span className="font-semibold text-[#2146C7]">Digital Marketing</span>, and{" "}
                  <span className="font-semibold text-[#2146C7]">Business Analytics</span>.
                  We empower students and working professionals with practical,
                  job-oriented learning designed for real industry success.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Hands-on practical training",
                    "Live projects & case studies",
                    "Industry certified trainers",
                    "Career & placement guidance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-[#DBEAFE] bg-white px-4 py-3 shadow-sm"
                    >
                      <CheckCircle size={18} className="shrink-0 text-[#2146C7]" />
                      <span className="text-sm text-[#334155]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                <div className="rounded-3xl border border-[#DBEAFE] bg-white p-5 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map(({ icon: Icon, value, label }) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-[#DBEAFE] bg-[#EFF6FF] p-5"
                      >
                        <Icon size={28} className="mb-3 text-[#2146C7]" />
                        <div className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
                          {value}
                        </div>
                        <p className="mt-1 text-sm text-[#475569]">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-[#DBEAFE] bg-gradient-to-r from-[#EFF6FF] to-[#E0F2FE] p-5">
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#2146C7]">
                      Our Promise
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#475569]">
                      We combine expert mentorship, industry-based curriculum,
                      practical implementation, and strong placement assistance
                      to help learners become truly industry ready.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#2146C7]">
                <Heart size={16} />
                Our Story
              </div>

              <h2 className="text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">
                Building Careers Through Practical,
                <span className="text-[#2146C7]"> Industry-Focused Education</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-[#475569]">
                Founded in 2013 by a USA-based Data Scientist, Lone Star Academy
                was created with a clear mission: to bridge the gap between
                academic learning and industry expectations. We provide advanced
                courses in Data Science, Business Analytics, Digital Marketing,
                AI, ML, Big Data, Python, SQL Server, Power BI, and more.
              </p>

              <p className="mt-4 text-base leading-8 text-[#475569]">
                Our programs are carefully designed for learners from diverse
                backgrounds. Whether you are starting your career, upgrading
                your skills, or planning a transition into analytics and digital
                domains, our practical approach helps you gain confidence,
                clarity, and job-ready experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-[#DBEAFE] bg-[#EFF6FF] p-6 shadow-sm sm:p-8"
            >
              <h3 className="text-2xl font-bold text-[#0F172A]">
                Why Students Trust Us
              </h3>

              <div className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <BadgeCheck size={20} className="mt-1 shrink-0 text-[#2146C7]" />
                    <p className="text-sm leading-7 text-[#334155] sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="bg-[#F8FAFC] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2146C7]">
                What Makes Us Different
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                Learning That Prepares You for Real Careers
              </h2>
              <p className="mt-4 text-base leading-8 text-[#475569]">
                We focus on industry relevance, expert training, and practical
                implementation so students don’t just learn concepts — they know
                how to apply them confidently.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-3xl border border-[#DBEAFE] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2146C7] text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#0F172A]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#475569]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses + methodology */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#DBEAFE] bg-[#EFF6FF] p-7 sm:p-8"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#2146C7] shadow-sm">
                <BookOpen size={16} />
                Courses at a Glance
              </div>

              <h2 className="text-3xl font-bold text-[#0F172A]">
                Programs Designed for Modern Careers
              </h2>
              <p className="mt-4 text-base leading-8 text-[#475569]">
                We deliver high-quality training in analytics, technology, and
                digital domains with updated modules aligned to present and
                upcoming industry trends.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {courses.map((course) => (
                  <div
                    key={course}
                    className="rounded-2xl border border-white bg-white px-4 py-3 text-sm text-[#334155] shadow-sm"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#DBEAFE] bg-white p-7 shadow-sm sm:p-8"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#2146C7]">
                <Target size={16} />
                Teaching Methodology
              </div>

              <h2 className="text-3xl font-bold text-[#0F172A]">
                Practical Learning with Personal Attention
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Small batch sizes for focused mentoring",
                  "Hands-on assignments on real-life business datasets",
                  "Capstone projects and implementation-based learning",
                  "Equal emphasis on theory and practical execution",
                  "Free learning resources during the course",
                  "Support for beginners as well as working professionals",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-1 shrink-0 text-[#2146C7]" />
                    <p className="text-sm leading-7 text-[#334155] sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Placement support */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-medium text-[#2146C7]">
                  <Briefcase size={16} className="text-[#2146C7]" />
                  Placement Guidance
                </div>

                <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
                  We Don’t Just Train You.
                  <span className="text-[#2146C7]"> We Help You Get Hired.</span>
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-[#475569]">
                  Our strong placement ecosystem supports students throughout
                  their career journey. From resume building and interview
                  preparation to job application support and CV referrals, we
                  provide continuous guidance that improves employability and
                  confidence.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Resume building assistance",
                    "Mock interviews & preparation",
                    "Continuous placement support",
                    "Strong recruiter network",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#DBEAFE] bg-white px-4 py-4 text-sm text-[#334155] shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border border-[#DBEAFE] bg-[#EFF6FF] p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  Students Placed In Leading Companies
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#475569]">
                  Our learners have secured opportunities across top companies
                  and leading brands in multiple industries.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {companies.map((company) => (
                    <span
                      key={company}
                      className="rounded-full border border-white bg-white px-4 py-2 text-sm text-[#334155] shadow-sm"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values + Learning format */}
        <section className="bg-[#F8FAFC] py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#DBEAFE] sm:p-8"
            >
              <h2 className="text-3xl font-bold text-[#0F172A]">Our Commitment</h2>
              <p className="mt-4 text-base leading-8 text-[#475569]">
                We are committed to delivering the best education with excellent
                career opportunities for both students and working
                professionals. Our support extends beyond the classroom through
                real-time trainer support, capstone projects, and long-term
                guidance.
              </p>

              <div className="mt-6 space-y-4">
                {values.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Star size={18} className="mt-1 shrink-0 text-[#2146C7]" />
                    <p className="text-sm leading-7 text-[#334155] sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-3xl border border-[#DBEAFE] bg-[#EFF6FF] p-7 shadow-sm sm:p-8"
            >
              <h2 className="text-3xl font-bold text-[#0F172A]">Flexible Learning Format</h2>
              <p className="mt-4 text-base leading-8 text-[#475569]">
                Students can choose the learning style that fits them best while
                continuing to receive strong academic and technical support.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Interactive live online classes",
                  "Offline classroom sessions",
                  "Recorded classes for revision",
                  "12 months learning access",
                  "Query support & doubt resolution",
                  "Repeat course for free",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white bg-white px-4 py-4 text-sm text-[#334155] shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-[#DBEAFE] bg-[#EFF6FF] px-6 py-12 shadow-sm sm:px-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2146C7]">
                Lone Star Academy
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                Your Launchpad for a Successful Career
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#475569]">
                Whether you want to master Data Science, Business Analytics, or
                Digital Marketing, we are here to help you learn, grow, and
                succeed with confidence.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="rounded-2xl bg-[#2146C7] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1839B7]"
                >
                  Contact Us
                </a>
                <a
                  href="/contact"
                  className="rounded-2xl border border-[#2146C7] bg-white px-6 py-3 text-sm font-semibold text-[#2146C7] transition hover:bg-[#DBEAFE]"
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}