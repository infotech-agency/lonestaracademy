import { Award, ShieldCheck, Download, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import img1 from "/certificate.jpeg";
import img2 from "/certificate2.jpeg";
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
    
       
        <div className="flex justify-center gap-20">
          <img className="w-[40%]" src={img1} alt="" />
          <img  className="w-[40%]" src={img2} alt="" />
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