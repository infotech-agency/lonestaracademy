import { motion } from "motion/react";
import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Contact <span className="text-blue-700">Lone Star Academy</span>
              </h2>
              <p className="mx-auto max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
                Ready to take the next step in your career? Contact Lone Star Academy
                today to learn more about our expert-led Data Analysis Courses,
                Machine Learning Courses, and Digital Marketing programs.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm md:p-10">
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
            </div>
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

                    <form onSubmit={handleSubmit} className="space-y-4">
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