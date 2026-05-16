import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";

type Branch = {
  name: string;
  address: string;
  mapLink: string;
  phone: string;
};

export function OurBranches() {
  const branches: Branch[] = [
  
    {
      name: "Gurgaon",
      address: "Coming Soon",
      mapLink: "#",
      phone: "9345045466",
    },
      {
      name: "Delhi",
      address: "B-1/1, 2nd Floor, Janakpuri, Delhi - 110058",
      mapLink: "https://maps.app.goo.gl/sWC4GBJrTr9K4zTq6",
      phone: "9345045466",
    },
    {
      name: "Noida",
      address: "Coming Soon",
      mapLink: "#",
      phone: "9345045466",
    },
  ];

  return (
<section className="bg-blue-900 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Our Branches
        </motion.h2>

        {/* CENTERED GRID */}
        <div className="flex justify-center">
          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {branch.name}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {branch.address}
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-blue-600 px-4 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50"
                  >
                    <MapPin size={16} />
                    Get Directions
                  </a>

                  <a
                    href={`tel:${branch.phone}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-green-600 px-4 py-3 text-sm font-medium text-green-600 hover:bg-green-50"
                  >
                    <Phone size={16} />
                    Call Us
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}