import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";

type City = {
  name: string;
};

type Course = {
  name: string;
  image: string;
  rating: number;
  reviews: number;
  trending: boolean;
  description: string;
};

const fallbackImage =
  "/images/courses/fallback.jpg";

export function ExpertRecommendedCourses() {
  const [selectedCity, setSelectedCity] = useState("New Delhi");

  const cities: City[] = [
    { name: "New Delhi" },
    { name: "Gurgaon" },
    { name: "Noida" },
  ];

  const courses: Course[] = [
    {
      name: "Business Analytics",
      image: "/businessanlytics.jpg",
      rating: 5,
      reviews: 5789,
      trending: true,
      description:
        "Learn business reporting, dashboards, Excel, SQL, and decision-making skills with practical industry projects.",
    },
    {
      name: "Data Analytics",
      image: "/dataanalytics.jpg",
      rating: 5,
      reviews: 4897,
      trending: true,
      description:
        "Master analytics tools, visualization, reporting, and real-world datasets for strong career growth.",
    },
    {
      name: "Data Science",
      image: "/datascience.jpg",
      rating: 5,
      reviews: 5508,
      trending: true,
      description:
        "Build in-demand skills in Python, machine learning, statistics, and real project implementation.",
    },
    {
      name: "Digital Marketing",
      image: "/Digitalmarketing.jpg",
      rating: 5,
      reviews: 4523,
      trending: true,
      description:
        "Gain practical expertise in SEO, social media, paid ads, content marketing, and lead generation.",
    },
    {
      name: "Cloud Computing",
      image: "/cloudcomputing.jpg",
      rating: 5,
      reviews: 4120,
      trending: true,
      description:
        "Understand cloud platforms, deployment, security, and infrastructure concepts with practical learning.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-72 flex-shrink-0"
          >
            <div className="sticky top-24">
              <span className="mb-3 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-600">
                Lone Star Academy
              </span>

              <h2 className="mb-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                <span className="text-blue-600">Expert-Recommended Courses</span>{" "}
                for Your Career Growth
              </h2>

              <p className="mb-6 text-sm leading-6 text-gray-600 sm:text-base">
                Explore industry-focused programs designed by expert trainers to
                help students build practical skills and job-ready confidence.
              </p>

              <div className="space-y-3">
                {cities.map((city) => (
                  <button
                    key={city.name}
                    onClick={() => setSelectedCity(city.name)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium transition-all duration-300 ${
                      selectedCity === city.name
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{city.name}</span>
                    {selectedCity === city.name && (
                      <span className="ml-auto text-lg">→</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-700 sm:text-base">
                <MapPin size={20} className="text-blue-600" />
                <span className="font-medium">
                  Showing courses in {selectedCity}
                </span>
              </div>

              <div className="flex gap-2">
                <button className="rounded-xl border border-gray-300 bg-white p-2 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                  <ChevronLeft size={20} />
                </button>
                <button className="rounded-xl border border-gray-300 bg-white p-2 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {courses.map((course, index) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative">
                    {course.trending && (
                      <div className="absolute left-3 top-3 z-10 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white shadow">
                        Trending
                      </div>
                    )}

                    <div className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600 shadow backdrop-blur">
                      Bestseller
                    </div>

                    <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                      <img
                        src={course.image}
                        alt={course.name}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = fallbackImage;
                        }}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-semibold text-white drop-shadow sm:text-xl">
                          {course.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-1">
                      {[...Array(course.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="fill-yellow-400 text-yellow-400"
                          size={16}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        {course.reviews.toLocaleString()} Ratings
                      </span>
                    </div>

                    <p className="mb-5 text-sm leading-6 text-gray-600">
                      {course.description}
                    </p>

                    {/* <button className="flex w-full items-center justify-center rounded-xl bg-blue-50 px-4 py-3 font-medium text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                      View Course →
                    </button> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}