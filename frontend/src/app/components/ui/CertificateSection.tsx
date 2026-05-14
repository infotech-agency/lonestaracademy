import { Award, ShieldCheck, Download, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Course Completion Certificate",
    subtitle: "Lone Star Academy",
    student: "Student Name",
    course: "Data Analytics Professional Program",
    certId: "LSA-CERT-2026-001",
  },
  {
    title: "Professional Excellence Certificate",
    subtitle: "Lone Star Academy",
    student: "Student Name",
    course: "Digital Marketing Mastery Program",
    certId: "LSA-CERT-2026-002",
  },
];

export default function CertificateSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-5 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
            <Award size={18} />
            Online Certificates
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Get Certified by Lone Star Academy
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Professionally designed certificates for students after successful
            course completion and achievement.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.certId}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-6 sm:p-8">
                <div className="absolute inset-4 rounded-[1.2rem] border-2 border-blue-200" />
                <div className="absolute inset-7 rounded-2xl border border-blue-100" />

                <div className="relative z-10">
                  <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <div className="flex items-center gap-3">
                      <img
                        src="/logo (3).png"
                        alt="Lone Star Academy Logo"
                        className="h-14 w-auto object-contain sm:h-16"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {certificate.subtitle}
                        </h3>
                        <p className="text-sm text-slate-500">
                          Authorized Online Certificate
                        </p>
                      </div>
                    </div>

                    {/* <div className="rounded-full bg-blue-600 p-3 text-white shadow-lg">
                      <ShieldCheck size={28} />
                    </div> */}
                  </div>

                  <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
                      Certificate of
                    </p>

                    <h3 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                      {certificate.title}
                    </h3>

                    <p className="mt-6 text-sm text-slate-500">
                      This certificate is proudly presented to
                    </p>

                    <h4 className="mt-3 border-b-2 border-slate-300 pb-2 text-2xl font-bold text-slate-900 sm:text-4xl">
                      {certificate.student}
                    </h4>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                      For successfully completing the{" "}
                      <span className="font-bold text-blue-700">
                        {certificate.course}
                      </span>{" "}
                      with dedication, performance, and professional learning
                      standards.
                    </p>
                  </div>

                  <div className="mt-10 grid gap-5 border-t border-slate-200 pt-6 sm:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase text-slate-400">
                        Certificate ID
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-800">
                        {certificate.certId}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase text-slate-400">Date</p>
                      <p className="mt-1 text-sm font-bold text-slate-800">
                        28 April 2026
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase text-slate-400">
                        Signature
                      </p>
                      <p className="mt-1 font-serif text-lg font-bold text-slate-800">
                        Director
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-600" />
                      Verified
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-600" />
                      Online Certificate
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-600" />
                      Career Ready
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-50 bg-orange-600 px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-orange-600"
          >
             Apply Now 
          </a>
        </div>
      </div>
    </section>
  );
}