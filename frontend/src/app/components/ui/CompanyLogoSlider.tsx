import { motion } from "motion/react";

type Company = {
  name: string;
  slug: string;
  website: string;
};

const companies: Company[] = [
  { name: "Google", slug: "google", website: "https://www.google.com" },
  { name: "Paytm", slug: "paytm", website: "https://paytm.com" },
  { name: "HCL", slug: "hcl", website: "https://www.hcltech.com" },
  { name: "Airtel", slug: "airtel", website: "https://www.airtel.in" },
  { name: "Dell", slug: "dell", website: "https://www.dell.com" },
//   { name: "Amdocs", slug: "amdocs", website: "https://www.amdocs.com" },
//   { name: "Genpact", slug: "genpact", website: "https://www.genpact.com" },
//   { name: "Indiabulls", slug: "indiabulls", website: "https://www.indiabulls.com" },
  { name: "Wipro", slug: "wipro", website: "https://www.wipro.com" },
  { name: "Infosys", slug: "infosys", website: "https://www.infosys.com" },
//   { name: "TCS", slug: "tataconsultancyservices", website: "https://www.tcs.com" },
  { name: "Accenture", slug: "accenture", website: "https://www.accenture.com" },
];

function LogoCard({ company }: { company: Company }) {
  const logoUrl = `https://cdn.simpleicons.org/${company.slug}`;

  return (
    <a
      href={company.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-24 min-w-[170px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:h-28 sm:min-w-[190px]"
      aria-label={company.name}
    >
      <img
        src={logoUrl}
        alt={company.name}
        className="max-h-10 w-auto object-contain opacity-90 transition duration-300 group-hover:opacity-100 sm:max-h-12"
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = "none";
          const fallback = img.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "flex";
        }}
      />

      <div
        style={{ display: "none" }}
        className="items-center justify-center text-center text-base font-semibold tracking-wide text-slate-700"
      >
        {company.name}
      </div>
    </a>
  );
}

export function CompanyLogoSlider() {
  const loopCompanies = [...companies, ...companies];

  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Top <span className="text-blue-600">Hiring Companies</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            Our students get opportunities with leading companies across
            technology, analytics, cloud, and digital marketing roles.
          </p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

          <div className="overflow-hidden">
            <div className="flex w-max animate-company-slider gap-4 sm:gap-6">
              {loopCompanies.map((company, index) => (
                <LogoCard key={`${company.name}-${index}`} company={company} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes company-slider {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-company-slider {
          animation: company-slider 30s linear infinite;
        }

        .animate-company-slider:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}