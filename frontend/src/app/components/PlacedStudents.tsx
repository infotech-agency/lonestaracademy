import { motion } from "motion/react";

type PlacementCard = {
  id: number;
  name: string;
  profile: string;
  company: string;
  domain: string;
  image: string;
  gender: "male" | "female";
};

type HiringCompany = {
  name: string;
  domain: string;
};

function CompanyLogo({
  company,
  getFallbackLogo,
}: {
  company: HiringCompany;
  getFallbackLogo: (company: string) => string;
}) {
  return (
    <div className="flex h-24 items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={`https://logo.clearbit.com/${company.domain}`}
        alt={company.name}
        className="max-h-12 w-auto object-contain"
        onError={(e) => {
          e.currentTarget.src = getFallbackLogo(company.name);
        }}
      />
    </div>
  );
}

export function PlacedStudents() {
  const placements: PlacementCard[] = [
    {
      id: 1,
      name: "Roshan Kumar",
      profile: "Power BI Developer",
      company: "Accenture",
      domain: "accenture.com",
      image: "/B.jpg",
      gender: "male",
    },
    {
      id: 2,
      name: "Muskan Kumari",
      profile: "RPA Developer",
      company: "Capgemini",
      domain: "capgemini.com",
      image: "/g.jpg",
      gender: "female",
    },
    {
      id: 3,
      name: "Poonam",
      profile: "Data Scientist",
      company: "Deloitte",
      domain: "deloitte.com",
      image: "/g2.jpg",
      gender: "female",
    },
    {
      id: 4,
      name: "Reetika Kumari",
      profile: "Data Analyst",
      company: "Infosys",
      domain: "infosys.com",
      image: "/G3.jpg",
      gender: "female",
    },
    {
      id: 5,
      name: "Kamal Kumar",
      profile: "Business Analyst",
      company: "Wipro",
      domain: "wipro.com",
      image: "/B2.jpg",
      gender: "male",
    },
    {
      id: 6,
      name: "Kishan Kumar",
      profile: "Operation Analyst",
      company: "HCL",
      domain: "hcltech.com",
      image: "/B4.jpg",
      gender: "male",
    },
    {
      id: 7,
      name: "Kundan Kumar",
      profile: "MIS Executive",
      company: "Cognizant",
      domain: "cognizant.com",
      image: "/B9.jpg",
      gender: "male",
    },
    {
      id: 8,
      name: "Aman Kumar",
      profile: "Python Developer",
      company: "IBM",
      domain: "ibm.com",
      image: "/B8.jpg",
      gender: "male",
    },
  ];

  const hiringCompanies: HiringCompany[] = [
    { name: "Accenture", domain: "accenture.com" },
    { name: "Capgemini", domain: "capgemini.com" },
    { name: "Deloitte", domain: "deloitte.com" },
    { name: "Infosys", domain: "infosys.com" },
    { name: "Wipro", domain: "wipro.com" },
    { name: "HCL", domain: "hcltech.com" },
    { name: "Cognizant", domain: "cognizant.com" },
    { name: "TCS", domain: "tcs.com" },
    { name: "IBM", domain: "ibm.com" },
    { name: "EY", domain: "ey.com" },
    { name: "KPMG", domain: "kpmg.com" },
    { name: "Tech Mahindra", domain: "techmahindra.com" },
  ];

  const getFallbackLogo = (company: string) => {
    const fallbackLogos: Record<string, string> = {
      Accenture: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
      Deloitte: "https://static.cdnlogo.com/logos/d/78/deloitte.svg",
      Infosys: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
      Wipro:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
      HCL: "https://upload.wikimedia.org/wikipedia/commons/9/90/HCLTech.svg",
      IBM: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      EY: "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg",
      Capgemini:
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
      Cognizant:
        "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg",
      TCS: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
      KPMG: "https://upload.wikimedia.org/wikipedia/commons/2/2d/KPMG_logo.svg",
      "Tech Mahindra":
        "https://upload.wikimedia.org/wikipedia/commons/7/7f/Tech_Mahindra_New_Logo.svg",
    };

    return (
      fallbackLogos[company] ||
      `https://via.placeholder.com/220x90?text=${encodeURIComponent(company)}`
    );
  };

  const getStudentFallbackImage = (gender: "male" | "female") => {
    return gender === "female"
      ? "/students/fallback-girl.jpg"
      : "/students/fallback-boy.jpg";
  };

  return (
    <>
      <section className="overflow-hidden bg-gradient-to-b from-[#f8f9fb] to-[#eef4ff] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-[#0b3a82] sm:text-4xl lg:text-5xl">
              Our Placements
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#35558f] sm:text-base">
              Our students are placed in top MNC companies with high-paying job roles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {placements.map((student, index) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group"
              >
                <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl border border-[#b8caea] bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-white to-orange-50/0 opacity-0 transition-all duration-500 group-hover:from-blue-50/80 group-hover:to-orange-50/70 group-hover:opacity-100" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-4 flex items-center gap-3">
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        src={student.image}
                        alt={student.name}
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-blue-100 shadow-md"
                        onError={(e) => {
                          e.currentTarget.src = getStudentFallbackImage(student.gender);
                        }}
                      />

                      <div>
                        <h3 className="text-base font-bold text-gray-800 sm:text-lg">
                          {student.name}
                        </h3>
                        <p className="text-xs text-gray-500">Lone Star Academy Student</p>
                      </div>
                    </div>

                    <div className="flex flex-1 items-center justify-center py-6">
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.3 }}
                        src={`https://logo.clearbit.com/${student.domain}`}
                        alt={student.company}
                        className="max-h-[75px] max-w-[80%] w-auto object-contain drop-shadow-sm transition-all duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = getFallbackLogo(student.company);
                        }}
                      />
                    </div>

                    <p className="mb-4 text-center text-sm font-medium text-slate-500 opacity-80 transition-all duration-500 group-hover:text-[#0b3a82]">
                      {student.company}
                    </p>

                    <div className="relative mt-auto">
                      <div
                        className="absolute left-0 top-2 h-10 w-10 bg-[#163ecf] shadow-md"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 55% 100%, 0 100%)",
                        }}
                      />
                      <div
                        className="absolute left-1 top-4 h-10 w-10 bg-[#ff9100] shadow-md"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 55% 100%, 0 100%)",
                        }}
                      />

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative ml-4 flex items-center justify-between border-b border-orange-300 bg-white px-4 py-3 shadow-md"
                      >
                        <div>
                          <p className="text-[13px] text-gray-700">Selected as a</p>
                          <h4 className="text-[18px] font-extrabold uppercase italic leading-tight text-black">
                            {student.profile}
                          </h4>
                        </div>

                        <img
                          src="/logo (3).png"
                          alt="Lone Star Academy"
                          className="ml-3 h-11 w-28 rounded-full border border-slate-200 bg-white object-contain p-1 shadow-sm"
                        />
                      </motion.div>
                    </div>
                  </div>

                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-100/50 blur-2xl transition-all duration-500 group-hover:bg-blue-200/70" />
                  <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-orange-100/50 blur-2xl transition-all duration-500 group-hover:bg-orange-200/70" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hiring companies section
          <div className="mt-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-center text-2xl font-bold text-[#0b3a82] sm:text-3xl"
            >
              Hiring Companies
            </motion.h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {hiringCompanies.map((company) => (
                <CompanyLogo
                  key={company.name}
                  company={company}
                  getFallbackLogo={getFallbackLogo}
                />
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}