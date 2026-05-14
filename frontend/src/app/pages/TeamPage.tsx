import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { PlacedStudents } from "../components/PlacedStudents";
import {
  Briefcase,
  Building2,
  TrendingUp,
  Award,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

type HiringCompany = {
  name: string;
  domain: string;
};

const hiringCompanies: HiringCompany[] = [
  { name: "Accenture", domain: "accenture.com" },
  { name: "Capgemini", domain: "capgemini.com" },
  { name: "Amazon", domain: "amazon.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "Infosys", domain: "infosys.com" },
  { name: "TCS", domain: "tcs.com" },
  { name: "HCL", domain: "hcltech.com" },
  { name: "IBM", domain: "ibm.com" },
  { name: "Hexaware", domain: "hexaware.com" },
  { name: "Zoho", domain: "zoho.com" },
  { name: "HP", domain: "hp.com" },
  { name: "Virtusa", domain: "virtusa.com" },
  { name: "Dell", domain: "dell.com" },
  { name: "Cognizant", domain: "cognizant.com" },
  { name: "Tech Mahindra", domain: "techmahindra.com" },
  { name: "Verizon", domain: "verizon.com" },
  { name: "NTT Data", domain: "nttdata.com" },
  { name: "Cisco", domain: "cisco.com" },
  { name: "Oracle", domain: "oracle.com" },
  { name: "PayPal", domain: "paypal.com" },
  { name: "Volvo", domain: "volvogroup.com" },
  { name: "Chargebee", domain: "chargebee.com" },
  { name: "Freshworks", domain: "freshworks.com" },
  { name: "Sutherland", domain: "sutherlandglobal.com" },
];

function CompanyLogo({
  company,
  className = "",
}: {
  company: HiringCompany;
  className?: string;
}) {
  const logoUrl = `https://www.google.com/s2/favicons?sz=128&domain_url=${company.domain}`;

  return (
    <div
      className={`group rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl ${className}`}
    >
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-blue-50 ring-1 ring-blue-100">
          <img
            src={logoUrl}
            alt={company.name}
            className="h-10 w-10 object-contain"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const fallback = target.nextElementSibling as HTMLDivElement | null;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <div
            style={{ display: "none" }}
            className="h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white"
          >
            {company.name.slice(0, 2).toUpperCase()}
          </div>
        </div>

        <h3 className="text-sm font-semibold text-gray-800 sm:text-[15px]">
          {company.name}
        </h3>
      </div>
    </div>
  );
}

export default function PlacementPage() {
  return (
    <>
      <title>Our Placements | Lone Star Academy</title>
      <meta
        name="description"
        content="Explore Lone Star Academy placements, hiring partners, student success stories, and career opportunities with top companies across India."
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-orange-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
                <BadgeCheck className="mr-2 h-4 w-4 text-orange-400" />
                Trusted Career Training Institute
              </span>

              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Our <span className="text-orange-400">Placement</span> Success
              </h1>

              <p className="max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                Lone Star Academy helps students build industry-ready skills and
                get placed in leading companies across Data Science, Data
                Analytics, Business Analytics, Digital Marketing, Cloud, and
                Software domains.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-600"
                >
                  Start Your Career
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="/courses"
                  className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Explore Courses
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {[
                { icon: Briefcase, value: "3000+", label: "Hiring Partners" },
                { icon: Award, value: "1000+", label: "Students Placed" },
                { icon: TrendingUp, value: "95%", label: "Placement Support" },
                { icon: Building2, value: "Top MNCs", label: "Recruiters" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur"
                >
                  <item.icon className="mx-auto mb-3 h-8 w-8 text-orange-400" />
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="mt-1 text-sm text-blue-100">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    {/* Hiring Companies */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Top <span className="text-blue-600">Hiring Companies</span> of
              Lone Star Academy
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
              Our students get opportunities with reputed startups, enterprises,
              and global brands across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {hiringCompanies.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <CompanyLogo company={company} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-semibold text-gray-900 sm:text-4xl">
              &amp; <span className="text-blue-600">3,000+</span> Partner Companies
            </p>
          </div>
        </div>
      </section>

      {/* Placement Highlights */}
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
          {[
            {
              title: "Industry-Focused Training",
              desc: "Practical learning with real-world projects and tools.",
            },
            {
              title: "Mock Interviews",
              desc: "Interview preparation with resume and communication support.",
            },
            {
              title: "Placement Assistance",
              desc: "Dedicated guidance for job applications and recruiter connects.",
            },
            {
              title: "Career Mentorship",
              desc: "Expert-led roadmap support for fresher and working professionals.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-6 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <PlacedStudents />

  
      {/* Added 1st component here */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Start Your Journey Towards a Successful Career
          </motion.h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
            Join Lone Star Academy and gain the right skills, project exposure,
            career mentorship, and placement support to grow in today’s
            competitive job market.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/admission-form"
              className="inline-flex items-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-600"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href="/contact-us"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
            >
              Talk to Counselor
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}