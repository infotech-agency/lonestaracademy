import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    branch: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill all required fields");
      return;
    }

    if (formData.phone.replace(/\D/g, "").length < 10) {
      alert("Enter valid phone number");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_zhc3cgb", // YOUR SERVICE ID
        "template_v5ztv1g", // YOUR TEMPLATE ID
        {
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          branch: formData.branch,
          course: formData.course,
        },
        "n7XPQ7McCeA3-ALs9" // YOUR PUBLIC KEY
      );

      alert("✅ Enquiry Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        branch: "",
        course: "",
      });

      onClose();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-50 p-8 border-t-4 border-orange-500"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-gray-400 hover:text-blue-600 transition"
            >
              <X size={24} />
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">
              Course Enquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 text-zinc-900">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Name*"
                className="w-full text-zinc-900  py-3 border-b border-gray-300 focus:border-orange-500 outline-none transition"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email*"
                className="w-full py-3 border-b text-zinc-900 border-gray-300 focus:border-orange-500 outline-none transition"
              />

              {/* Phone */}
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-24 py-3 border-b border-gray-300 focus:border-orange-500 outline-none"
                >
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone Number*"
                  className="flex-1 py-3 border-b border-gray-300 focus:border-orange-500 outline-none"
                />
              </div>
 

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full py-3 border-b border-gray-300 focus:border-orange-500 outline-none"
              >
                <option value="">Select Course</option>
                <option>Business Analytics</option>
                <option>Data Analytics</option>
                <option>Data Science</option>
                <option>Digital Marketing</option>
                <option>Cloud Computing</option>
              </select>

              {/* Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-12 py-3 bg-orange-600   text-white rounded-lg hover:opacity-90 transition font-medium shadow-lg"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}