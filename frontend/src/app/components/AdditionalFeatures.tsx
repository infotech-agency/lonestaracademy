import { motion } from "motion/react";
import { DollarSign, BookOpen, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export function AdditionalFeatures() {
  const features = [
    {
      icon: <DollarSign size={40} />,
      title: "Affordable Fees",
      description: "High-quality courses available at a low budget.",
    },
    {
      icon: <BookOpen size={40} />,
      title: "Flexible Learning",
      description: "Choose online/classroom trainings, and learning pace.",
    },
    {
      icon: <Trophy size={40} />,
      title: "Placement Assistance",
      description: "Access 3000+ companies for career opportunities.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-2xl"
          >
            <div className="flex-1">
              <p className="text-lg mb-2">
                Upskill at <span className="text-blue-600 font-bold">Lone Star Academy</span> and Get Your{" "}
                <span className="text-orange-500 font-bold">Dream Job in 60 days!</span>
              </p>
            </div>
            {/* <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
                alt="Students"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div> */}
            <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
             <a
  href="tel:+919711709644"
  className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
>
  📞 +91 9711709644
</a>          <Link to="/contact">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                Request A Call Back
              </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
