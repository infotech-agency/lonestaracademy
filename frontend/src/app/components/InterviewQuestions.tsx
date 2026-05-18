// import { motion } from "motion/react";

// export function InterviewQuestions() {
//   const questions = [
//     "Data Analytics Interview Questions",
//     "Business Analytics Interview Questions",
//     "Data Science Interview Questions",
//     "Digital Marketing Interview Questions",
//     "Python Interview Questions",
//     "Cloud Computing Interview Questions",
//     "SQL Interview Questions",
//     "Power BI Interview Questions",
//     "Excel Interview Questions",
//     "SEO Interview Questions",
//     "Google Ads Interview Questions",
//     "AWS Interview Questions",
//     "Data Science Interview Questions",
//     "Machine Learning Interview Questions",
//     "Big Data Interview Questions",
//     "DevOps Interview Questions",
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-center mb-12"
//         >
//           Interview Questions
//         </motion.h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           {questions.map((question, index) => (
//             <motion.a
//               key={question}
//               href="#"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.03 }}
//               className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all text-gray-700 font-medium text-sm"
//             >
//               {question}
//             </motion.a>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           {/* <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
//             Read More
//           </button> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

// Helper function to generate top 10 questions based on the topic
const getTopQuestions = (topic: string): string[] => {
  // This is a dynamic generator. In a real app, you might fetch this from an API or a larger database.
  const baseQuestions = [
    `What is the most important concept in ${topic} for a beginner?`,
    `Explain the difference between various tools/techniques used in ${topic}.`,
    `Describe a challenging project you have worked on using ${topic}.`,
    `How do you stay updated with the latest trends in ${topic}?`,
    `What are the common mistakes to avoid in ${topic}?`,
    `How would you explain a complex ${topic} idea to a non-technical stakeholder?`,
    `What is your favorite resource for learning ${topic}?`,
    `How do you measure success in a ${topic} role?`,
    `Describe a time you had to use ${topic} to solve a critical business problem.`,
    `Where do you see the field of ${topic} heading in the next 5 years?`,
  ];

  // For a more tailored experience, we can map specific topics to specific questions.
  const specificQuestions: Record<string, string[]> = {
    "Data Analytics Interview Questions": [
      "What is the difference between descriptive, diagnostic, predictive, and prescriptive analytics?",
      "Explain the data analysis process (CRISP-DM or similar).",
      "How do you handle missing or duplicate data in a dataset?",
      "What is the difference between a bar chart and a histogram?",
      "Explain the concept of correlation vs. causation with an example.",
      "What are some common pitfalls in data visualization?",
      "How do you use SQL to perform data cleaning?",
      "Describe a time you used data to influence a business decision.",
      "What is the difference between INNER JOIN and LEFT JOIN?",
      "How do you explain a complex data finding to a non-technical audience?",
    ],
    "Python Interview Questions": [
      "What is the difference between a list and a tuple in Python?",
      "Explain how Python handles memory management.",
      "What are decorators and how are they used?",
      "How does exception handling work in Python?",
      "What is the Global Interpreter Lock (GIL)?",
      "Explain the difference between `@staticmethod` and `@classmethod`.",
      "How do you manage packages and environments in Python?",
      "What are list comprehensions and why are they useful?",
      "Describe the differences between Django and Flask.",
      "How does Python handle type hinting and duck typing?",
    ],
    "SQL Interview Questions": [
      "What is the difference between `WHERE` and `HAVING` clauses?",
      "Explain the different types of JOINs (INNER, LEFT, RIGHT, FULL).",
      "What is a primary key and a foreign key?",
      "How do you avoid SQL injection?",
      "What are window functions? Provide an example using `ROW_NUMBER()`.",
      "Explain the difference between `UNION` and `UNION ALL`.",
      "What is database normalization? Explain the normal forms.",
      "How do you optimize a slow-running query?",
      "What is the difference between `DELETE`, `TRUNCATE`, and `DROP`?",
      "Explain ACID properties in the context of a database.",
    ],
    // Add more specific mappings here for other topics as needed
  };

  // Return specific questions if available for the topic, otherwise generate base questions.
  if (specificQuestions[topic]) {
    return specificQuestions[topic];
  }
  return baseQuestions.map((q) => q.replace(topic, topic.split(" ")[0])); // Simple replacement for generic topics
};

export function InterviewQuestions() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [modalQuestions, setModalQuestions] = useState<string[]>([]);

  const handleChipClick = (topic: string) => {
    const questions = getTopQuestions(topic);
    setModalQuestions(questions);
    setSelectedTopic(topic);
  };

  const closeModal = () => {
    setSelectedTopic(null);
    setModalQuestions([]);
  };

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
    "Machine Learning Interview Questions",
    "Big Data Interview Questions",
    "DevOps Interview Questions",
  ];

  // Remove duplicate "Data Science Interview Questions" from the original list if needed, but keeping as is for now.

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
            <motion.button
              key={question}
              onClick={() => handleChipClick(question)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all text-gray-700 font-medium text-sm cursor-pointer"
            >
              {question}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Optional: "Read More" button if needed */}
        </motion.div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedTopic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">
                  Top 10 {selectedTopic}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {modalQuestions.map((question, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-semibold">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700">{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 rounded-b-2xl">
                <button
                  onClick={closeModal}
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}