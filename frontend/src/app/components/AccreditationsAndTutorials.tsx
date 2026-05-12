import { motion } from "motion/react";

export function AccreditationsAndTutorials() {
  const accreditations = [
    { name: "ISO", logo: "🏆" },
    { name: "ISTQB", logo: "✓" },
    { name: "British Council", logo: "🇬🇧" },
    { name: "Pearson VUE", logo: "📚" },
    { name: "Oracle", logo: "⭕" },
    { name: "Microsoft", logo: "⊞" },
  ];

  const tutorials = [
    "Python Tutorial",
    "Java Tutorial",
    "Data Science Tutorial",
    "Ethical Hacking Tutorial",
    "AWS Tutorial",
    "Full Stack Tutorial",
    "DevOps Tutorial",
    "Salesforce Tutorial",
    "Selenium Tutorial",
    "Angular Tutorial",
    "Software Testing Tutorial",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Accreditations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {accreditations.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all group"
              >
                <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">
                  {item.logo}
                </div>
                <p className="text-sm font-semibold text-gray-700 text-center">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tutorials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Tutorials</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tutorials.map((tutorial, index) => (
              <motion.a
                key={tutorial}
                href="#"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all text-gray-700 font-medium"
              >
                {tutorial}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
