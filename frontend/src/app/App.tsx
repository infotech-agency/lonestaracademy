import { useState, useEffect } from "react";
import { motion } from "motion/react";

import { Navigation } from "./components/Navigation";
import { CourseCard } from "./components/CourseCard";
import { EnquiryModal } from "./components/EnquiryModal";
import { Footer } from "./components/Footer";
import { TrustSection } from "./components/TrustSection";
import { KeyFeatures } from "./components/KeyFeatures";
import { AdditionalFeatures } from "./components/AdditionalFeatures";
import { ExpertRecommendedCourses } from "./components/ExpertRecommendedCourses";
import { SuccessStories } from "./components/SuccessStories";
import { PlacedStudents } from "./components/PlacedStudents";
import { IndustryExperts } from "./components/IndustryExperts";
import { InterviewQuestions } from "./components/InterviewQuestions";
import { OurBranches } from "./components/OurBranches";
import { FloatingButtons } from "./components/FloatingButtons";

import Hero from "./components/ui/Hero";
import WhyChooseUsSection from "./components/ui/WhyChooseUsSection";
import Faq from "./components/ui/Faq";
import Swiper from "./components/ui/Swiper";
import TrainingProcess from "./components/ui/TrainingProcess";
import Banners from "./components/ui/Banners";
import LoneStarBanner from "./components/ui/LoneStarBanner";
import New from "./components/ui/New";
import About from "./components/ui/About";
import CertificateSection from "./components/ui/CertificateSection";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/baseUrl";

function CourseDetails() {
 const { slug } = useParams();

 return <div>Course: {slug}</div>;
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/courses`);
        // const res = await fetch("https://slategrey-worm-160018.hostingersite.com/api/courses");
        const data = await res.json();
        if (Array.isArray(data)) {
          // Show only top 6 courses on home page
          setCourses(data.slice(0, 6));
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Banners />
      <Hero />
      <Swiper />

      <section className="relative overflow-hidden bg-blue-900 py-16 text-white md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-medium leading-snug md:text-4xl"
          >
            Build Your Future With <br />
            Lone Star Academy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-5 max-w-3xl text-sm text-white/90 md:text-base"
          >
            We provide industry-focused training programs designed to help you
            gain real-world skills, achieve career growth, and secure
            high-paying jobs.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "10,000+",
                text: "Students successfully trained across multiple domains",
              },
              {
                value: "100+",
                text: "Industry expert trainers with real-world experience",
              },
              {
                value: "90%+",
                text: "Placement success rate with career support",
              },
              {
                value: "50+",
                text: "Professional courses designed for job-ready skills",
              },
            ].map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative px-4"
              >
                {index !== 0 && (
                  <span className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/30 lg:block" />
                )}

                <p className="text-3xl font-medium md:text-4xl">
                  {item.value}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-white/90 md:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-xl bg-orange-500 px-8 py-3 text-sm font-medium transition hover:bg-orange-600 md:text-base"
            >
              Free Career Counselling
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center sm:mb-12 lg:mb-16"
          >
            <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Top <span className="text-blue-600">Trending Courses</span> at
              Lone Star Academy
            </h2>

            <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
              Hover on any course to see pricing details
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {loading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="h-64 animate-pulse rounded-3xl bg-gray-200" />
              ))
            ) : (
              courses.map((course, index) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="h-full"
                >
                  <CourseCard {...course} />
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      <AdditionalFeatures />
      <About />
      <TrainingProcess />
      <TrustSection />
      <KeyFeatures />
      <IndustryExperts />
      <ExpertRecommendedCourses />
      <SuccessStories />
      <WhyChooseUsSection />
      <PlacedStudents />
      <New />
      <CertificateSection />

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-10">
                <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    Data Science Courses – Make Your Career Future-Proof
                  </h3>
                  <h4 className="mt-3 text-lg font-semibold text-blue-700">
                    Top Data Science Institute in Delhi
                  </h4>
                  <p className="mt-4 leading-8 text-gray-600">
                    As a leading data science training institute in Delhi, Lone
                    Star Academy offers comprehensive training in AI, machine
                    learning, analytics, and data-driven decision-making.
                  </p>
                  <p className="mt-4 leading-8 text-gray-600">
                    We also provide a data science course online with placement
                    support, making learning accessible and career-focused.
                  </p>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    Digital Marketing Courses – Dominate the Digital World
                  </h3>
                  <h4 className="mt-3 text-lg font-semibold text-blue-700">
                    Best Digital Marketing Institute in Delhi
                  </h4>
                  <p className="mt-4 leading-8 text-gray-600">
                    Lone Star Academy offers practical, job-oriented, and
                    application-based digital marketing training with placement
                    support.
                  </p>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    Business Analyst Course in Delhi – Take Data-Driven
                    Decisions
                  </h3>
                  <h4 className="mt-3 text-lg font-semibold text-blue-700">
                    Become a Qualified Business Analyst
                  </h4>
                  <p className="mt-4 leading-8 text-gray-600">
                    Our business analyst training in Delhi helps learners
                    connect business goals with meaningful data insights.
                  </p>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    Data Analytics Training in Delhi – Convert Data into
                    Insights
                  </h3>
                  <h4 className="mt-3 text-lg font-semibold text-blue-700">
                    Learn Data Analytics from Professionals
                  </h4>
                  <p className="mt-4 leading-8 text-gray-600">
                    Our data analytics training in Delhi helps learners
                    understand, manage, and interpret complex data effectively.
                  </p>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    Cloud Computing Courses in Delhi – Build Scalable Solutions
                  </h3>
                  <h4 className="mt-3 text-lg font-semibold text-blue-700">
                    Master Cloud Technologies
                  </h4>
                  <p className="mt-4 leading-8 text-gray-600">
                    Our cloud computing training in Delhi makes learners
                    industry-ready with practical cloud knowledge.
                  </p>
                </div>

                <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    Online Learning Programs – Learn Anytime, Anywhere
                  </h3>

                  <ul className="mt-5 grid gap-3 text-gray-700 md:grid-cols-2">
                    {[
                      "Business Analytics Online Course",
                      "Data Analytics Courses Online",
                      "Data Science Course Online with Placement",
                      "Best Online Digital Marketing Courses",
                      "Cloud Computing Online Courses",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-xl bg-white px-4 py-3 shadow-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 shadow-lg sm:p-8 lg:p-10">
                  <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
                  <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />

                  <div className="relative">
                    <h3 className="text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
                      Career Opportunities After Training
                    </h3>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                      Choosing the right training institute can open up multiple
                      career opportunities across technology, analytics, and
                      digital domains.
                    </p>

                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                      {[
                        {
                          title: "Data & Analytics Careers",
                          bg: "bg-blue-50",
                          dot: "bg-blue-500",
                          jobs: [
                            "Data Analyst",
                            "Business Analyst",
                            "Data Scientist",
                            "Machine Learning Engineer",
                          ],
                        },
                        {
                          title: "Digital Marketing Careers",
                          bg: "bg-orange-50",
                          dot: "bg-orange-500",
                          jobs: [
                            "SEO Specialist",
                            "PPC Expert",
                            "Social Media Manager",
                          ],
                        },
                        {
                          title: "Cloud Computing Careers",
                          bg: "bg-purple-50",
                          dot: "bg-purple-500",
                          jobs: [
                            "Cloud Engineer",
                            "DevOps Engineer",
                            "Cloud Architect",
                          ],
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className={`rounded-3xl border border-slate-200 ${item.bg} p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                        >
                          <h4 className="text-lg font-bold text-slate-900">
                            {item.title}
                          </h4>

                          <ul className="mt-4 space-y-3">
                            {item.jobs.map((job) => (
                              <li
                                key={job}
                                className="flex items-start gap-2 text-sm text-slate-600"
                              >
                                <span
                                  className={`mt-1.5 h-2 w-2 rounded-full ${item.dot}`}
                                />
                                {job}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-lg">
                  <h3 className="text-2xl font-bold md:text-3xl">
                    Your Success Starts Here at Lone Star Academy
                  </h3>
                  <p className="mt-4 text-base leading-8 text-blue-50 md:text-lg">
                    If you are searching for a trusted data science institute in
                    Delhi, a leading digital marketing institute in Delhi, or
                    career-focused programs like business analyst training, data
                    analytics courses, and cloud computing training, Lone Star
                    Academy is the right place to begin.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <InterviewQuestions />
      <OurBranches />
      <Faq />
      <LoneStarBanner />
      <Footer />
      <FloatingButtons />

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}