import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Search, IndianRupee, ArrowRight, BookOpen } from "lucide-react";
import { BASE_URL } from "../../../utils/baseUrl";
import ShortTermCourses from "../components/ShortTermCourses";

const API_BASE = BASE_URL;
// const API_BASE = "https://slategrey-worm-160018.hostingersite.com";


interface Course {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  category: string;
  image: string | null;
  featured: boolean;
  paymentLink?: string;
}

const categoryColors: Record<string, string> = {
  Analytics: "bg-blue-100 text-blue-700",
  "AI/ML": "bg-purple-100 text-purple-700",
  Marketing: "bg-green-100 text-green-700",
  Cloud: "bg-orange-100 text-orange-700",
  Excel: "bg-emerald-100 text-emerald-700",
  Database: "bg-amber-100 text-amber-700",
  Programming: "bg-cyan-100 text-cyan-700",
  Visualization: "bg-pink-100 text-pink-700",
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/courses`)
      .then((r) => r.json())
      .then((data) => {
        setCourses(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setCourses([]);
        setLoading(false);
      });
  }, []);

  const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];

  const filtered = courses.filter(
    (c) =>
      (category === "All" || c.category === category) &&
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  const isMainCourse = (course: Course) => true;

  const courseSlugMap: Record<string, string> = {
    "Business Analytics": "about2",
    "Data Analytics": "about3",
    "Data Science": "about4",
    "Digital Marketing": "about5",
    "Cloud Computing": "about6",
    "Financial Modeling": "about7",
  };

  return (
    <>
      <Navigation />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F4D] via-[#12397A] to-[#1D4ED8] py-20 text-white">
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            Explore Our <span className="text-orange-400">Professional Courses</span>
          </motion.h1>

          <p className="mx-auto mb-8 max-w-3xl text-base text-blue-100 md:text-lg">
            Learn job-ready tools like Excel, Python, SQL, Tableau, SAS, AI, Machine Learning,
            Big Data and more with practical training.
          </p>

          <div className="relative mx-auto max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="w-full rounded-2xl bg-white py-3 pl-12 pr-4 text-gray-900 shadow-xl outline-none transition focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Explore Short Term & Professional Certification Courses
            </h2>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  category === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-[370px] animate-pulse rounded-3xl bg-gray-200" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((course, i) => (
                <motion.div
                  key={`${course.id}-${course.name}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-52 overflow-hidden">
                    {course.image ? (
                      <img
                        src={course.image}
                        alt={course.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                        <BookOpen size={50} className="text-white/70" />
                      </div>
                    )}

                    {course.featured && (
                      <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                        Featured
                      </span>
                    )}

                    <span
                      className={`absolute bottom-3 left-3 rounded-full px-4 py-1 text-xs font-semibold ${
                        categoryColors[course.category] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {course.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="mb-3 min-h-[56px] text-lg font-bold leading-snug text-[#002B5B]">
                      {course.name}
                    </h3>

                    <p className="mb-5 line-clamp-2 text-sm leading-6 text-slate-600">
                      {course.description}
                    </p>

                    <div className="border-t border-slate-200 pt-4">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="flex items-center gap-1 text-sm text-slate-600">
                          <IndianRupee size={15} />
                          {course.price.replace("₹", "")}
                        </span>

                        <a
                          href={course.paymentLink || "https://forms.eduqfix.com/lsaof/add"}
                          className="font-semibold text-blue-600 transition hover:text-blue-800"
                        >
                          Pay Now
                        </a>
                      </div>

                      {isMainCourse(course) && (
                        <Link
                          // to={`/courses/${course._id || course.id}`}
                          to={`/${course?.slug}`}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
                        >
                          View Details <ArrowRight size={16} />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section>
        <ShortTermCourses/>
      </section>
      <Footer />
    </>
  );
}
// import { useState } from "react";
// import { motion } from "motion/react";
// import { Link } from "react-router-dom";

// type CourseCardProps = {
//   _id?: string;
//   id?: string;
//   slug?: string;
//   name: string;
//   price: string;
//   duration: string;
//   image: string;
// };

// export default function CourseCard({
//   _id,
//   id,
//   slug,
//   name,
//   price,
//   duration,
//   image,
// }: CourseCardProps) {
//   const [isFlipped, setIsFlipped] = useState(false);

//   // Prefer SEO slug, fallback to MongoDB _id for backward compatibility
//   const identifier = slug || _id || id;

//   return (
//     <Link
//       // Root-level slug URL:
//       // /business-analytics-course-delhi
//       // Fallback:
//       // /6a0404409522cb10bdef1e3b
//       to={`/${identifier}`}
//       className="relative block w-full h-[320px] perspective-[1000px] cursor-pointer"
//       onMouseEnter={() => setIsFlipped(true)}
//       onMouseLeave={() => setIsFlipped(false)}
//     >
//       <motion.div
//         className="relative w-full h-full preserve-3d"
//         animate={{ rotateY: isFlipped ? 180 : 0 }}
//         transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
//       >
//         {/* Front */}
//         <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-blue-100">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover rounded-2xl"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
//             <h3 className="text-white text-lg font-semibold p-4">{name}</h3>
//           </div>
//         </div>

//         {/* Back */}
//         <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-3 p-6 text-white rotate-y-180">
//           <h3 className="text-center font-semibold text-lg">{name}</h3>
//           <div className="w-12 h-px bg-white/30"></div>
//           <p className="text-2xl font-bold">{price}</p>
//           <p className="text-sm opacity-90">{duration}</p>
//           <button className="mt-2 px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
//             Enroll Now
//           </button>
//         </div>
//       </motion.div>
//     </Link>
//   );
// }
