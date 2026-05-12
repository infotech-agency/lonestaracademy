import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
  Phone,
  Menu,
  ChevronDown,
  X,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  phone: string;
  branch: string;
  course: string;
};

const branches = ["New Delhi", "Noida", "Gurgaon"];

const courses = [
  "Business Analytics",
  "Data Analytics",
  "Data Science",
  "Digital Marketing",
  "Cloud Computing",
];

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  branch: "",
  course: "",
};

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const menuItems = [
    {
      label: "Courses",
      submenu: [
        { label: "Business Analytics", href: "/about2" },
        { label: "Data Analytics", href: "/about3" },
        { label: "Data Science", href: "/about4" },
        { label: "Digital Marketing", href: "/about5" },
        { label: "Cloud Computing", href: "/about6" },
        { label: "Financial Modelling", href: "/about7" },
        { label: "All Courses", href: "/courses" },
      ],
    },
    { label: "About Us", href: "/about" },
    { label: "Our Placement", href: "/team" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
        { label: "Contact Us", href: "/contact" },

  ];

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown((prev) => (prev === label ? null : label));
  };

  const openAdmissionModal = () => {
    setIsAdmissionOpen(true);
    setMobileMenuOpen(false);
  };

  const closeAdmissionModal = () => {
    setIsAdmissionOpen(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return false;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email.");
      return false;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!emailValid) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    if (!formData.branch) {
      alert("Please select a branch.");
      return false;
    }

    if (!formData.course) {
      alert("Please select a course.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          name: formData.name,
          email: formData.email,
          phone: `+91 ${formData.phone}`,
          branch: formData.branch,
          course: formData.course,
        },
        "YOUR_PUBLIC_KEY"
      );

      alert("Your enquiry has been submitted successfully.");
      setFormData(initialFormData);
      closeAdmissionModal();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong while sending the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center justify-center gap-2 text-xs sm:justify-start sm:text-sm">
              <Phone size={14} />
              <a
                href="tel:9711709644"
                className="transition-colors hover:text-blue-200"
              >
                For Enquiry: 9711709644
              </a>
            </div>

            <div className="hidden items-center justify-center gap-3 sm:flex sm:justify-end sm:gap-4">
              {[
                {
                  href: "https://www.facebook.com/people/Lone-Star-Academy/100087175243517/",
                  Icon: Facebook,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/lonestaracademy_india?igshid=MDE2OWE1N2Q%3D",
                  Icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/company/lonestaracademy-in/?viewAsMember=true",
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-1.5 transition-all hover:scale-105 hover:bg-white/20"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4">
          <div className="flex min-h-[72px] items-center justify-between gap-4 py-3">
            <div className="flex items-center gap-6 lg:gap-12">
              <Link to="/" className="flex shrink-0 items-center">
                <img
                  src="/logo.jpeg"
                  alt="Lone Star Academy"
                  className="h-10 w-auto object-contain sm:h-11 md:h-22"
                />
              </Link>

              <div className="hidden items-center gap-6 lg:flex xl:gap-8">
                {menuItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() =>
                      item.submenu && setActiveDropdown(item.label)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.submenu ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveDropdown((prev) =>
                              prev === item.label ? null : item.label
                            )
                          }
                          className={`flex items-center gap-2 transition-all ${
                            item.label === "Courses"
                              ? "rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:from-orange-600 hover:to-orange-700 hover:shadow-lg"
                              : "text-sm font-medium text-gray-800 hover:text-blue-600 xl:text-base"
                          }`}
                        >
                          {item.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 top-full z-50 mt-3 min-w-[240px] rounded-xl border border-gray-100 bg-white py-2 shadow-xl"
                            >
                              {item.submenu.map((sub) => (
                                <Link
                                  key={sub.label}
                                  to={sub.href}
                                  className={`block px-4 py-2.5 text-sm transition-colors hover:bg-blue-50 hover:text-blue-600 ${
                                    sub.label === "All Courses"
                                      ? "border-t border-gray-100 font-semibold text-orange-600"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href || "/"}
                        className="flex items-center gap-1 text-sm font-medium text-gray-800 transition-colors hover:text-blue-600 xl:text-base"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={openAdmissionModal}
                className="hidden rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-lg sm:inline-flex lg:px-5"
              >
                Admission Form
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg p-2 text-gray-800 transition hover:bg-gray-100 lg:hidden"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-gray-200 bg-white lg:hidden"
            >
              <div className="mx-auto max-w-7xl px-4 py-4">
                <div className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <div
                      key={item.label}
                      className="overflow-hidden rounded-lg border border-gray-100"
                    >
                      {item.submenu ? (
                        <>
                          <button
                            type="button"
                            onClick={() => toggleMobileDropdown(item.label)}
                            className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium ${
                              item.label === "Courses"
                                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                                : "text-gray-800"
                            }`}
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              size={18}
                              className={`transition-transform ${
                                mobileDropdown === item.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {mobileDropdown === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden border-t border-gray-100 bg-gray-50"
                              >
                                {item.submenu.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    to={sub.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-4 py-3 text-sm transition-colors hover:bg-blue-50 hover:text-blue-600 ${
                                      sub.label === "All Courses"
                                        ? "font-semibold text-orange-600"
                                        : "text-gray-600"
                                    }`}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.href || "/"}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={openAdmissionModal}
                    className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:from-orange-600 hover:to-orange-700"
                  >
                    Quick Enquiry
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isAdmissionOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4 py-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAdmissionModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-[560px] overflow-y-auto rounded-[30px] border-t-4 border-orange-500 bg-white px-6 pb-8 pt-7 shadow-2xl sm:px-10"
            >
              <button
                type="button"
                onClick={closeAdmissionModal}
                className="absolute right-5 top-5 text-gray-400 transition hover:text-gray-700"
                aria-label="Close"
              >
                <X size={28} />
              </button>

              <h2 className="mb-8 text-center text-2xl font-bold text-[#1E3A8A] sm:text-3xl">
                Course Enquiry
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-gray-300 px-0 py-3 text-base text-gray-800 outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-0"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-gray-300 px-0 py-3 text-base text-gray-800 outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-0"
                  />
                </div>

                <div className="grid grid-cols-[90px_1fr] gap-3 sm:grid-cols-[110px_1fr]">
                  <div className="border-b border-gray-300 py-3 text-lg text-gray-800">
                    +91
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-gray-300 px-0 py-3 text-base text-gray-800 outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-0"
                  />
                </div>

                <div>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-gray-300 bg-white px-0 py-3 text-base text-gray-800 outline-none focus:border-orange-500 focus:ring-0"
                  >
                    <option value="">Select Branch</option>
                    {branches.map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-gray-300 bg-white px-0 py-3 text-base text-gray-800 outline-none focus:border-orange-500 focus:ring-0"
                  >
                    <option value="">Select Course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-5 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-w-[180px] items-center justify-center rounded-xl bg-orange-600 px-8 py-3.5 text-lg font-semibold text-white shadow-md transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}