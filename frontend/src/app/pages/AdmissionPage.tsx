import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    course: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: digits });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formData,
      "YOUR_PUBLIC_KEY"
    );

    alert("Form submitted successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-blue-900">
          Admission Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Name" onChange={handleChange} className="w-full border p-3 rounded" />
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-3 rounded" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full border p-3 rounded" />

          <select name="branch" onChange={handleChange} className="w-full border p-3 rounded">
            <option value="">Select Branch</option>
            <option>New Delhi</option>
            <option>Noida</option>
            <option>Gurgaon</option>
          </select>

          <select name="course" onChange={handleChange} className="w-full border p-3 rounded">
            <option value="">Select Course</option>
            <option>Business Analytics</option>
            <option>Data Analytics</option>
            <option>Data Science</option>
            <option>Digital Marketing</option>
            <option>Cloud Computing</option>
          </select>

          <button className="w-full bg-orange-600 text-white py-3 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}