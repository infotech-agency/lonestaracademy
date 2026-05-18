// pages/AdmissionPage.tsx
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Upload, X, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { BASE_URL } from "../../../utils/baseUrl";

type FormData = {
  name: string;
  email: string;
  phone: string;
  branch: string;
  course: string;
  dob: string;
  address: string;
  country: string;
  message: string;
};

const branches = ["New Delhi", "Noida", "Gurgaon"];

const courses = [
  "Business Analytics",
  "Data Analytics",
  "Data Science",
  "Digital Marketing",
  "Cloud Computing",
  "Financial Modelling",
];

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  branch: "",
  course: "",
  dob: "",
  address: "",
  country: "",
  message: "",
};

export default function AdmissionPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [idProof, setIdProof] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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

    // if (!formData.branch) {
    //   alert("Please select a branch.");
    //   return false;
    // }

    if (!formData.course) {
      alert("Please select a course.");
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIdProof(null);
    setPhoto(null);
  };

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!validateForm()) return;

  //   try {
  //     setIsSubmitting(true);

  //     await emailjs.send(
  //       "service_zhc3cgb",
  //       "template_v5ztv1g",
  //       {
  //         name: formData.name,
  //         email: formData.email,
  //         phone: `+91 ${formData.phone}`,
  //         branch: formData.branch,
  //         course: formData.course,
  //         dob: formData.dob || "Not provided",
  //         address: formData.address || "Not provided",
  //         country: formData.country || "Not provided",
  //         message: formData.message || "No message",
  //       },
  //       "n7XPQ7McCeA3-ALs9"
  //     );

  //     setSubmitSuccess(true);
  //     resetForm();
      
  //     // Scroll to top to show success message
  //     window.scrollTo({ top: 0, behavior: "smooth" });
      
  //     // Hide success message after 5 seconds
  //     setTimeout(() => setSubmitSuccess(false), 5000);
  //   } catch (error) {
  //     console.error("EmailJS Error:", error);
  //     alert("Something went wrong while sending the form. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // 1. Remove this import
// import emailjs from "@emailjs/browser";

// 2. Replace ONLY the handleSubmit function with this:

// const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   if (!validateForm()) return;

//   try {
//     setIsSubmitting(true);

//     // Create multipart form data
//     const payload = new FormData();

//     // Append text fields
//     payload.append("name", formData.name);
//     payload.append("email", formData.email);
//     payload.append("phone", formData.phone);
//     payload.append("branch", formData.branch);
//     payload.append("course", formData.course);
//     payload.append("dob", formData.dob);
//     payload.append("address", formData.address);
//     payload.append("country", formData.country);
//     payload.append("message", formData.message);

//     // Append files
//     if (idProof) {
//       payload.append("idProof", idProof);
//     }

//     if (photo) {
//       payload.append("photo", photo);
//     }

//     // Send to backend API
//     const response = await fetch(
//       // "https://api.lonestaracademy.in/api/admission", // change if needed
//       "http://localhost:3001/api/admission",
//       {
//         method: "POST",
//         body: payload,
//       }
//     );

//     const result = await response.json();

//     if (!response.ok) {
//       throw new Error(result.message || "Submission failed");
//     }

//     // Success
//     setSubmitSuccess(true);
//     resetForm();

//     // Scroll to top
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });

//     // Hide success message after 5 sec
//     setTimeout(() => {
//       setSubmitSuccess(false);
//     }, 5000);
//   } catch (error: any) {
//     console.error("Admission Form Error:", error);
//     alert(error.message || "Something went wrong. Please try again.");
//   } finally {
//     setIsSubmitting(false);
//   }
// };
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    setIsSubmitting(true);

    // Create multipart form data
    const payload = new FormData();

    // Append text fields
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("course", formData.course);
    payload.append("dob", formData.dob);
    payload.append("address", formData.address);
    payload.append("message", formData.message);

    // Append files
    if (idProof) {
      payload.append("idProof", idProof);
    }

    if (photo) {
      payload.append("photo", photo);
    }

    // Send to backend API
    const response = await fetch(
      // "https://api.lonestaracademy.in/api/admission", // change if needed
      // "http://localhost:3001/api/admission",
      `${BASE_URL}/api/admission`,
      {
        method: "POST",
        body: payload,
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Submission failed");
    }

    // Success
    setSubmitSuccess(true);
    resetForm();

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Hide success message after 5 sec
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  } catch (error: any) {
    console.error("Admission Form Error:", error);
    alert(error.message || "Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          {/* Success Message */}
          {submitSuccess && (
            <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800 shadow-sm">
              <CheckCircle size={24} className="text-green-500" />
              <div>
                <h4 className="font-semibold">Application Submitted Successfully!</h4>
                <p className="text-sm">Our admission team will contact you soon.</p>
              </div>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="ml-auto text-green-600 hover:text-green-800"
              >
                <X size={20} />
              </button>
            </div>
          )}

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#1E3A8A] sm:text-4xl md:text-5xl">
              Admission Form
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:text-lg">
              Fill the form below to start your learning journey with Lone Star Academy
            </p>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange-500"></div>
          </div>

          {/* Form Card */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
            <div className="border-b border-orange-500 bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-5 sm:px-10">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Student Application
              </h2>
              <p className="mt-1 text-sm text-blue-200">
                Please fill all the required fields (*)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-10">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-600">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Date of Birth */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  {/* Country */}
                  {/* <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      placeholder="India"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                  </div> */}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Branch */}
                  {/* <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Preferred Branch <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                    >
                      <option value="">Select Branch</option>
                      {branches.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div> */}

                  {/* Course */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Interested Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                    >
                      <option value="">Select Course</option>
                      {courses.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Your complete address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* File Uploads */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* ID Proof */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Upload ID Proof
                    </label>
                    <div className="flex items-center gap-3">
                      <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                        <Upload size={18} />
                        Choose File
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => setIdProof(e.target.files?.[0] ?? null)}
                        />
                      </label>
                      <span className="truncate text-sm text-gray-500">
                        {idProof?.name || "No file chosen"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-400">
                      Aadhar Card, PAN Card, or Passport
                    </p>
                  </div>

                  {/* Photo */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Upload Photo
                    </label>
                    <div className="flex items-center gap-3">
                      <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                        <Upload size={18} />
                        Choose File
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
                        />
                      </label>
                      <span className="truncate text-sm text-gray-500">
                        {photo?.name || "No file chosen"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-400">
                      Recent passport size photo
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    placeholder="Any additional information you'd like to share..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-md transition hover:from-orange-600 hover:to-orange-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[250px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>

                <p className="text-center text-xs text-gray-400">
                  By submitting this form, you agree to our terms and conditions.
                  Our team will contact you within 24 hours.
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Need help? Call us at{" "}
              <a href="tel:9711709644" className="font-semibold text-blue-600 hover:underline">
                9711709644
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}