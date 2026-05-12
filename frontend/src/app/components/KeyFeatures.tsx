import { motion } from "motion/react";
import { Award, Wrench, GraduationCap } from "lucide-react";

export function KeyFeatures() {
  const features = [
    {
      icon: <Award size={60} />,
      title: "Expert Trainers",
      description: "Learn from industry professionals with hands-on experience.",
    },
    {
      icon: <Wrench size={60} />,
      title: "Real-Time Projects",
      description: "Gain practical exposure by working on live projects.",
    },
    {
      icon: <GraduationCap size={60} />,
      title: "Certification",
      description: "Get certified from Lone Star Academy and become job-ready.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Key Features</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Lone Star Academy empowers individuals with industry-relevant skills through expert-led
            training, transforming careers with hands-on experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm mb-6 group-hover:bg-white/20 transition-all"
              >
                <div className="text-white">{feature.icon}</div>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-blue-100 text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
