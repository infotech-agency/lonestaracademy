import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const banners = [
  "/xgddsfsdf.png",
  "/2 banner.png",
  "/3 banner .png",
  "/4 banner .png",
  "/5 banner.png",
];

type FormData = {
  name: string;
  phone: string;
  email: string;
  course: string;
};

export default function HeroBannerSlider() {
  const [active, setActive] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    console.log("Lead Form Data:", formData);
    alert("Thank you! We will contact you soon.");

    setShowForm(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "",
    });
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <div className="relative w-full overflow-hidden">
          <div className="relative h-[170px] w-full overflow-hidden sm:h-[250px] md:h-[320px] lg:h-[420px] xl:h-[500px]">
            {banners.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  active === index ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
              >
                <div
                  className="absolute inset-0 scale-110 bg-cover bg-center blur-lg"
                  style={{ backgroundImage: `url(${img})` }}
                />

                <div className="absolute inset-0 bg-white/20" />

                <img
                  src={img}
                  alt={`Banner ${index + 1}`}
                  onClick={() => setShowForm(true)}
                  className="relative z-10 h-full w-full cursor-pointer object-contain"
                />
              </div>
            ))}

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-md transition hover:bg-black/60 sm:flex"
            >
              <ChevronLeft size={26} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-md transition hover:bg-black/60 sm:flex"
            >
              <ChevronRight size={26} />
            </button>

            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-4">
              {banners.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === index ? "w-8 bg-orange-500" : "w-2 bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
            >
              <X size={20} />
            </button>

            <h2 className="mb-2 text-xl font-bold text-gray-900">
              Get Course Details
            </h2>

            <p className="mb-5 text-sm text-gray-600">
              Fill your details and our counselor will contact you soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
              />

              <input
                type="tel"
                required
                maxLength={10}
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value.replace(/\D/g, ""),
                  })
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
              />

              <input
                type="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
              />

              <select
                required
                value={formData.course}
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
              >
                <option value="">Select Course</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Data Science">Data Science</option>
                <option value="Business Analytics">Business Analytics</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Cloud Computing">Cloud Computing</option>
              </select>

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Submit Details
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
