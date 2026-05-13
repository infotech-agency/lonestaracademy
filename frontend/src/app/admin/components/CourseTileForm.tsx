import { useState } from "react";
import axios from "axios";

const API_URL = "https://lonestaracademy.in/api/course-tiles";
// Local testing:
// const API_URL = "http://localhost:3001/api/course-tiles";

interface Props {
  onSuccess?: () => void;
}

export default function CourseTileForm({ onSuccess }: Props) {
  const [formData, setFormData] = useState({
    courseName: "",
    description: "",
    price: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();
      data.append("courseName", formData.courseName);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("image", image);

      await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Course tile created successfully!");

      setFormData({
        courseName: "",
        description: "",
        price: "",
      });
      setImage(null);

      if (onSuccess) onSuccess();
    } catch (error: any) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Course Tile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="courseName"
          placeholder="Course Name"
          value={formData.courseName}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          {loading ? "Uploading..." : "Create Course Tile"}
        </button>
      </form>
    </div>
  );
}