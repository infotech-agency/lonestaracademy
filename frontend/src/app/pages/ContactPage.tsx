import { motion } from "motion/react";
import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  // };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_76lx81o",
      "template_wsxcl6y",
      // import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        course: form.course,
        message: form.message || "No message provided",
      },
      "n7XPQ7McCeA3-ALs9"
    );

    setSubmitted(true);

    // Reset form after successful submission
    setForm({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send enquiry. Please try again.");
  }
};

  return (
    <>
      <title>Contact Us | Lone Star Academy Delhi</title>
      <meta
        name="description"
        content="Contact Lone Star Academy for course enquiries, admissions, and career counseling. Call 9711709644 or visit our Delhi branches."
      />

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            Get in <span className="text-orange-400">Touch</span>
          </motion.h1>
          <p className="text-lg text-blue-100">
            We're here to help you start your career journey
          </p>
        </div>
      </section>
 <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <div className="mb-10 text-center">
              <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Contact <span className="text-blue-700">Lone Star Academy</span>
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
                Ready to take the next step in your career? Contact Lone Star Academy
                today to learn more about our expert-led Data Analysis Courses,
                Machine Learning Courses, and Digital Marketing programs.
              </p>
            </div>

            {/* <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm md:p-10">
              <p className="mb-5 text-base leading-8 text-gray-700">
                Whether you're interested in earning a Data Analysis Professional
                Certificate, mastering Big Data, or exploring AI Courses, our team is
                here to guide you. We offer personalized counseling to help you choose
                the right path—be it the best data science course in Delhi, a data
                analyst course in Gurgaon, or a business analytics course in Delhi.
              </p>

              <p className="mb-5 text-base leading-8 text-gray-700">
                Our curriculum includes hands-on training in Data Visualization,
                Predictive Analytics, Statistical Analysis, Deep Learning, Data
                Cleaning, and Data Engineering, along with tools like SQL Server,
                Power BI, and MS Excel.
              </p>

              <p className="mb-5 text-base leading-8 text-gray-700">
                From Data Warehousing and Data Integration to Hadoop Courses, Data
                Privacy Courses, and Data Ethics Courses, we cover everything you need
                to succeed.
              </p>

              <p className="text-base leading-8 text-gray-700">
                Reach out to us for details on our Data Analysis Courses &
                Certification, upcoming batches, placement support, and how to enroll
                in the data analytics with Python course or the best data science
                course in Noida or Gurgaon. Let’s build your future together—get in
                touch now!
              </p>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Contact Information
              </h2>

              {[
                {
                  icon: Phone,
                  color: "bg-orange-500",
                  title: "Phone",
                  lines: ["+91 9711709644"],
                },
                {
                  icon: Mail,
                  color: "bg-blue-500",
                  title: "Email",
                  lines: ["info@lonestaracademy.in", "admissions@lonestaracademy.in"],
                },
                {
                  icon: MapPin,
                  color: "bg-red-500",
                  title: "Head Office",
                  lines: ["B-1/1, 2nd Floor, Janakpuri,", "New Delhi - 110058"],
                },
              ].map(({ icon: Icon, color, title, lines }) => (
                <div key={title} className="mb-8 flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${color}`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">{title}</h3>
                    {lines.map((line) => (
                      <p key={line} className="text-gray-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Google Map */}
              <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.857349405921!2d77.08707867550086!3d28.63403717566397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05eeb79b3ec1%3A0x931c2ffc5cbebd62!2sLone%20Star%20Academy%20%7C%20Data%20Science%20%7C%20Data%20Analytics%20%7C%20Business%20Analytics%20%7C%20Cloud%20Computing%20%7C%20Digital%20Marketing%20Institute!5e0!3m2!1sen!2sin!4v1777977956628!5m2!1sen!2sin"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="h-64 w-full rounded-2xl md:h-80"
/>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="rounded-3xl bg-white p-8 shadow-xl">
                {submitted ? (
                  <div className="py-12 text-center">
                    <CheckCircle size={64} className="mx-auto mb-4 text-green-500" />
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Our team will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-xl bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="mb-6 text-2xl font-bold text-gray-900">
                      Enquiry Now
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4 text-zinc-900">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-sm font-medium text-gray-700">
                            Full Name *
                          </label>
                          <input
                            required
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                          />
                        </div>

                        <div>
                          <label className="mb-1 block text-sm font-medium text-gray-700">
                            Phone *
                          </label>
                          <input
                            required
                            value={form.phone}
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Course Interested In
                        </label>
                        <select
                          value={form.course}
                          onChange={(e) =>
                            setForm({ ...form, course: e.target.value })
                          }
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a Course</option>
                          {[
                            "Business Analytics",
                            "Data Analytics",
                            "Data Science",
                            "Digital Marketing",
                            "Cloud Computing",
                          ].map((course) => (
                            <option key={course} value={course}>
                              {course}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                          }
                          className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Tell us about your goals..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3.5 font-semibold text-white transition-all hover:from-blue-700 hover:to-blue-800"
                      >
                        <Send size={18} />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Added Contact Content Section */}
     
      <Footer />
    </>
  );
}
// import { useState, useEffect } from "react";
// import { motion } from "motion/react";
// import { Link } from "react-router-dom";
// import { Navigation } from "../components/Navigation";
// import { Footer } from "../components/Footer";
// import { Search, IndianRupee, ArrowRight, BookOpen } from "lucide-react";
// import { BASE_URL } from "../../../utils/baseUrl";

// const API_BASE = BASE_URL;
// // const API_BASE = "https://slategrey-worm-160018.hostingersite.com";


// interface Course {
//   id: string;
//   _id?: string;
//   slug?: string;
//   name: string;
//   price: string;
//   duration: string;
//   description: string;
//   category: string;
//   image: string | null;
//   featured: boolean;
//   paymentLink?: string;
// }

// const categoryColors: Record<string, string> = {
//   Analytics: "bg-blue-100 text-blue-700",
//   "AI/ML": "bg-purple-100 text-purple-700",
//   Marketing: "bg-green-100 text-green-700",
//   Cloud: "bg-orange-100 text-orange-700",
//   Excel: "bg-emerald-100 text-emerald-700",
//   Database: "bg-amber-100 text-amber-700",
//   Programming: "bg-cyan-100 text-cyan-700",
//   Visualization: "bg-pink-100 text-pink-700",
// };

// export default function CoursesPage() {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${API_BASE}/api/courses`)
//       .then((r) => r.json())
//       .then((data) => {
//         setCourses(Array.isArray(data) ? data : []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Fetch error:", err);
//         setCourses([]);
//         setLoading(false);
//       });
//   }, []);

//   const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];

//   const filtered = courses.filter(
//     (c) =>
//       (category === "All" || c.category === category) &&
//       c.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const isMainCourse = (course: Course) => true;

//   const courseSlugMap: Record<string, string> = {
//     "Business Analytics": "about2",
//     "Data Analytics": "about3",
//     "Data Science": "about4",
//     "Digital Marketing": "about5",
//     "Cloud Computing": "about6",
//     "Financial Modeling": "about7",
//   };

//   return (
//     <>
//       <Navigation />

//       <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F4D] via-[#12397A] to-[#1D4ED8] py-20 text-white">
//         <div className="container relative mx-auto px-4 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 28 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl"
//           >
//             Explore Our <span className="text-orange-400">Professional Courses</span>
//           </motion.h1>

//           <p className="mx-auto mb-8 max-w-3xl text-base text-blue-100 md:text-lg">
//             Learn job-ready tools like Excel, Python, SQL, Tableau, SAS, AI, Machine Learning,
//             Big Data and more with practical training.
//           </p>

//           <div className="relative mx-auto max-w-xl">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search courses..."
//               className="w-full rounded-2xl bg-white py-3 pl-12 pr-4 text-gray-900 shadow-xl outline-none transition focus:ring-2 focus:ring-orange-400"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
//               Explore Short Term & Professional Certification Courses
//             </h2>
//           </div>

//           <div className="mb-10 flex flex-wrap justify-center gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setCategory(cat)}
//                 className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
//                   category === cat
//                     ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
//                     : "border border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-600"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {loading ? (
//             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//               {[...Array(8)].map((_, i) => (
//                 <div key={i} className="h-[370px] animate-pulse rounded-3xl bg-gray-200" />
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//               {filtered.map((course, i) => (
//                 <motion.div
//                   key={`${course.id}-${course.name}`}
//                   initial={{ opacity: 0, y: 24 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.04 }}
//                   className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//                 >
//                   <div className="relative h-52 overflow-hidden">
//                     {course.image ? (
//                       <img
//                         src={course.image}
//                         alt={course.name}
//                         className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
//                       />
//                     ) : (
//                       <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
//                         <BookOpen size={50} className="text-white/70" />
//                       </div>
//                     )}

//                     {course.featured && (
//                       <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
//                         Featured
//                       </span>
//                     )}

//                     <span
//                       className={`absolute bottom-3 left-3 rounded-full px-4 py-1 text-xs font-semibold ${
//                         categoryColors[course.category] || "bg-gray-100 text-gray-700"
//                       }`}
//                     >
//                       {course.category}
//                     </span>
//                   </div>

//                   <div className="p-5">
//                     <h3 className="mb-3 min-h-[56px] text-lg font-bold leading-snug text-[#002B5B]">
//                       {course.name}
//                     </h3>

//                     <p className="mb-5 line-clamp-2 text-sm leading-6 text-slate-600">
//                       {course.description}
//                     </p>

//                     <div className="border-t border-slate-200 pt-4">
//                       <div className="mb-4 flex items-center justify-between">
//                         <span className="flex items-center gap-1 text-sm text-slate-600">
//                           <IndianRupee size={15} />
//                           {course.price.replace("₹", "")}
//                         </span>

//                         <a
//                           href={course.paymentLink || "https://forms.eduqfix.com/lsaof/add"}
//                           className="font-semibold text-blue-600 transition hover:text-blue-800"
//                         >
//                           Pay Now
//                         </a>
//                       </div>

//                       {isMainCourse(course) && (
//                         <Link
//                           to={`/courses/${course.slug || course._id || course.id}`}
//                           className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
//                         >
//                           View Details <ArrowRight size={16} />
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }