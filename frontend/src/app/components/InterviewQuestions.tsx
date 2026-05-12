import { motion } from "motion/react";

export function InterviewQuestions() {
  const questions = [
    "Data Analytics Interview Questions",
    "Business Analytics Interview Questions",
    "Data Science Interview Questions",
    "Digital Marketing Interview Questions",
    "Python Interview Questions",
    "Cloud Computing Interview Questions",
    "SQL Interview Questions",
    "Power BI Interview Questions",
    "Excel Interview Questions",
    "SEO Interview Questions",
    "Google Ads Interview Questions",
    "AWS Interview Questions",
    "Data Science Interview Questions",
    "Machine Learning Interview Questions",
    "Big Data Interview Questions",
    "DevOps Interview Questions",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Interview Questions
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {questions.map((question, index) => (
            <motion.a
              key={question}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all text-gray-700 font-medium text-sm"
            >
              {question}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Read More
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
