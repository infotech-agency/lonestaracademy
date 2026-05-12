import { motion } from "framer-motion";

const companyLogos = [
  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
  {
    name: "Deloitte",
    logo: " https://static.cdnlogo.com/logos/d/78/deloitte.svg",
  },
//   {
//     name: "Standard Chartered",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Standard_Chartered_%282021%29.svg",
//   },
  {
    name: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Cognizant",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg",
  },
  {
    name: "Wipro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
  },
  {
    name: "Capgemini",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
  },
];

export default function CompanyLogoSlider() {
  const logos = [...companyLogos, ...companyLogos];

  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
          Partnering with the world's leading companies
        </h2>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-28" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-28" />

          <motion.div
            className="flex w-max items-center gap-10 md:gap-14"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {logos.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex h-20 min-w-[140px] items-center justify-center sm:min-w-[170px] md:min-w-[200px]"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/120x40?text=Logo";
                  }}
                  className="max-h-12 w-auto max-w-[150px] object-contain transition duration-300 hover:scale-110 sm:max-h-14 md:max-h-16"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}