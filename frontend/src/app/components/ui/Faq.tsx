import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is Lone Star Academy suitable for freshers?",
    answer:
      "Absolutely. Our courses are specially designed for freshers, graduates, working professionals, and career switchers who want to build strong industry skills from the ground up.",
  },
  {
    question: "Are the trainers at Lone Star Academy industry professionals?",
    answer:
      "Yes, all trainers at Lone Star Academy are experienced industry experts with practical knowledge in data science, digital marketing, analytics, and cloud technologies.",
  },
  {
    question: "Does Lone Star Academy provide placement assistance after course completion?",
    answer:
      "Yes, Lone Star Academy offers complete placement support including resume building, mock interviews, career counseling, and job assistance with reputed companies across Delhi NCR and other major cities.",
  },
  {
    question: "Do you provide classroom and offline training in Delhi?",
    answer:
      "Yes, we offer both classroom and offline training, making us a preferred best offline digital marketing institute in Delhi and a trusted data science institute in Delhi.",
  },
  {
    question: "What is the duration of the courses at Lone Star Academy?",
    answer:
      "The duration depends on the course selected. Most professional certification programs range from 2 months to 6 months, depending on the learning format and specialization.",
  },
  {
    question: "Can working professionals join the courses?",
    answer:
      "Yes, our programs are ideal for working professionals who want to upgrade their skills in data science, business analytics, digital marketing, or cloud computing.",
  },
   
  {
    question: "How can I enroll in Lone Star Academy?",
    answer:
      "You can enroll by contacting Lone Star Academy through the website, calling the admissions team, or visiting the institute directly for counseling and batch details.",
  },
  {
    question: "Does the institute provide live project training?",
    answer:
      "Yes, every course includes live project training, case studies, and practical assignments to help students gain real-world experience.",
  },
  {
    question: "Do you provide demo classes before enrollment?",
    answer:
      "Yes, demo sessions and career counseling are available so students can understand the course structure and teaching methodology before joining.",
  },
  {
    question: "Which courses are most popular at Lone Star Academy?",
    answer:
      "Our most popular courses include Data Science Course, Digital Marketing Course, Business Analyst Course, Data Analytics Courses, and Cloud Computing Courses.",
  },
  {
    question: "Which job profiles can I get after these courses?",
    answer:
      "You can explore job roles such as Data Analyst, Business Analyst, Digital Marketer, Cloud Engineer, and other career opportunities depending on your course and skills.",
  },
  {
    question: "Are certifications provided after completing the course?",
    answer:
      "Yes, students receive industry-recognized certifications after successful completion of the program, which helps improve job opportunities.",
  },
  {
    question: "Where is your centre located?",
    answer:
      "We are the best digital marketing training institute in Janakpuri, New Delhi.",
  },
  {
    question: "Why Lone Star Academy?",
    answer:
      "Because we provide hands-on training, expert mentorship, and placement assistance, making us a reliable data science institute in Delhi and digital marketing institute in Delhi.",
  },
];

export default function FAQSplit() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftFAQs = faqs.slice(0, 7);
  const rightFAQs = faqs.slice(7, 15);

  const renderFAQ = (
    item: { question: string; answer: string },
    globalIndex: number
  ) => {
    const isOpen = openIndex === globalIndex;

    return (
      <div
        key={globalIndex}
        className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
        >
          <span className="text-sm font-semibold leading-6 text-gray-800 md:text-base">
            {item.question}
          </span>

          <ChevronDown
            className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-blue-600" : "text-gray-500"
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 text-sm leading-7 text-gray-600 md:px-6 md:text-[15px]">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          {/* <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            FAQ Section
          </span> */}
          <h2 className="mt-4 text-3xl font-bold text-blue-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Find answers to the most common questions about our courses,
            trainers, placements, certifications, and learning options.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-200 to-transparent" />

          <div className="space-y-4">
            {leftFAQs.map((item, index) => renderFAQ(item, index))}
          </div>

          <div className="space-y-4">
            {rightFAQs.map((item, index) => renderFAQ(item, index + 8))}
          </div>
        </div>
      </div>
    </section>
  );
}