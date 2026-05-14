// // app/components/ShortTermCourses.tsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { ArrowRight } from "lucide-react";
// import { BASE_URL } from "../../../utils/baseUrl";

// // const API_URL = "http://localhost:3001/api/tiles";
// const PAYMENT_URL = "https://forms.eduqfix.com/lsaof/add";

// interface Course {
//   _id: string;
//   courseName: string;
//   description: string;
//   price: string;
//   image: string;
// }

// export default function ShortTermCourses() {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/api/tiles`);
//         const data = await res.json();

//         if (data.success) {
//           setCourses(data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   if (loading) {
//     return (
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-lg font-medium text-gray-600">
//             Loading short term courses...
//           </p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
//             Short Term Courses
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Upgrade Your Skills with Industry-Focused Courses
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Learn practical tools and technologies through our short-term
//             professional courses designed for working professionals and students.
//           </p>
//         </div>

//         {/* Courses Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {courses.map((course) => (
//             <div
//               key={course._id}
//               className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100"
//             >
//               {/* Course Image */}
//               <div className="h-52 overflow-hidden">
//                 <img
//                   src={course.image}
//                   alt={course.courseName}
//                   className="w-full h-full object-cover hover:scale-105 transition duration-500"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
//                   {course.courseName}
//                 </h3>

//                 <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                   {course.description}
//                 </p>

//                 <div className="flex items-center justify-between mb-5">
//                   <span className="text-2xl font-bold text-blue-600">
//                     ₹{course.price}
//                   </span>
//                 </div>

//                 {/* Pay Now Button */}
//                 <a
//                   href={PAYMENT_URL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
//                 >
//                   Pay Now
//                   <ArrowRight size={18} />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// app/components/ShortTermCourses.tsx
"use client";

import React, { useEffect, useState } from "react";
import { 
  ArrowRight, 
  Database, 
  Code2, 
  Cloud, 
  Brain, 
  BarChart3, 
  PenTool,
  Smartphone,
  Shield,
  Server,
  Palette,
  Rocket
} from "lucide-react";
import { BASE_URL } from "../../../utils/baseUrl";

// const API_URL = "http://localhost:3001/api/tiles";
const PAYMENT_URL = "https://forms.eduqfix.com/lsaof/add";

interface Course {
  _id: string;
  courseName: string;
  description: string;
  price: string;
  image: string;
  label?: string;
  category?: string; // Add category field
}

// Category configuration with icons and colors
const categoryConfig: Record<string, { 
  icon: any; 
  color: string; 
  bgColor: string;
  label: string;
}> = {
  "SQL": { 
    icon: Database, 
    color: "text-blue-600", 
    bgColor: "bg-blue-100",
    label: "SQL"
  },
  "Database": { 
    icon: Database, 
    color: "text-blue-600", 
    bgColor: "bg-blue-100",
    label: "Database"
  },
  "Development": { 
    icon: Code2, 
    color: "text-purple-600", 
    bgColor: "bg-purple-100",
    label: "Development"
  },
  "Cloud": { 
    icon: Cloud, 
    color: "text-cyan-600", 
    bgColor: "bg-cyan-100",
    label: "Cloud Computing"
  },
  "AI/ML": { 
    icon: Brain, 
    color: "text-indigo-600", 
    bgColor: "bg-indigo-100",
    label: "AI/ML"
  },
  "Data Analytics": { 
    icon: BarChart3, 
    color: "text-green-600", 
    bgColor: "bg-green-100",
    label: "Data Analytics"
  },
  "Design": { 
    icon: PenTool, 
    color: "text-pink-600", 
    bgColor: "bg-pink-100",
    label: "Design"
  },
  "Mobile": { 
    icon: Smartphone, 
    color: "text-orange-600", 
    bgColor: "bg-orange-100",
    label: "Mobile Dev"
  },
  "Security": { 
    icon: Shield, 
    color: "text-red-600", 
    bgColor: "bg-red-100",
    label: "Cyber Security"
  },
  "DevOps": { 
    icon: Server, 
    color: "text-slate-600", 
    bgColor: "bg-slate-100",
    label: "DevOps"
  },
  "Frontend": { 
    icon: Palette, 
    color: "text-teal-600", 
    bgColor: "bg-teal-100",
    label: "Frontend Dev"
  },
  "Backend": { 
    icon: Server, 
    color: "text-emerald-600", 
    bgColor: "bg-emerald-100",
    label: "Backend Dev"
  },
};

// Function to determine category based on course name
const getCourseCategory = (courseName: string): string => {
  const name = courseName.toLowerCase();
  
  // AI/ML Courses
  if (name.includes("ai") || name.includes("machine learning") || name.includes("deep learning") || 
      name.includes("artificial intelligence") || name.includes("ml") || name.includes("nlp") ||
      name.includes("chatgpt") || name.includes("llm")) {
    return "AI/ML";
  }
  
  // Cloud Courses
  if (name.includes("cloud") || name.includes("aws") || name.includes("azure") || 
      name.includes("gcp") || name.includes("google cloud")) {
    return "Cloud";
  }
  
  // SQL & Database Courses
  if (name.includes("sql") || name.includes("database") || name.includes("mysql") || 
      name.includes("postgresql") || name.includes("mongodb") || name.includes("nosql") ||
      name.includes("oracle") || name.includes("pl/sql")) {
    return "SQL";
  }
  
  // Development Courses
  if (name.includes("development") || name.includes("full stack") || name.includes("web dev") ||
      name.includes("mern") || name.includes("mean") || name.includes("java") || 
      name.includes("python") || name.includes("javascript") || name.includes("react") ||
      name.includes("node") || name.includes("angular") || name.includes("vue")) {
    return "Development";
  }
  
  // Frontend Specific
  if (name.includes("frontend") || name.includes("front end") || name.includes("ui/ux") ||
      name.includes("html") || name.includes("css")) {
    return "Frontend";
  }
  
  // Backend Specific
  if (name.includes("backend") || name.includes("back end") || name.includes("api") ||
      name.includes("rest") || name.includes("microservices")) {
    return "Backend";
  }
  
  // DevOps
  if (name.includes("devops") || name.includes("docker") || name.includes("kubernetes") ||
      name.includes("jenkins") || name.includes("ci/cd") || name.includes("git")) {
    return "DevOps";
  }
  
  // Data Analytics
  if (name.includes("data analytics") || name.includes("business intelligence") || 
      name.includes("power bi") || name.includes("tableau") || name.includes("excel analytics")) {
    return "Data Analytics";
  }
  
  // Security
  if (name.includes("security") || name.includes("cyber") || name.includes("ethical hacking") ||
      name.includes("penetration testing")) {
    return "Security";
  }
  
  // Mobile Development
  if (name.includes("android") || name.includes("ios") || name.includes("react native") ||
      name.includes("flutter") || name.includes("mobile app")) {
    return "Mobile";
  }
  
  // Design
  if (name.includes("design") || name.includes("graphic") || name.includes("ui") || 
      name.includes("ux") || name.includes("figma") || name.includes("photoshop") ||
      name.includes("illustrator")) {
    return "Design";
  }
  
  // Default
  return "Development";
};

export default function ShortTermCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/tiles`);
        const data = await res.json();

        if (data.success) {
          // Add categories to courses
          const coursesWithCategories = data.data.map((course: Course) => {
            const category = getCourseCategory(course.courseName);
            return { ...course, category };
          });
          setCourses(coursesWithCategories);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Get unique categories for filter
  const categories = ["All", ...new Set(courses.map(course => course.category))];
  
  // Filter courses by selected category
  const filteredCourses = selectedCategory === "All" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Loading courses...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            Short Term Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upgrade Your Skills with Industry-Focused Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn practical tools and technologies through our short-term
            professional courses designed for working professionals and students.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const config = categoryConfig[category];
            const Icon = config?.icon || Rocket;
            const isActive = selectedCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? `${config?.bgColor || 'bg-blue-100'} ${config?.color || 'text-blue-600'} shadow-md scale-105`
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon size={18} />
                <span>{category === "All" ? "All Courses" : config?.label || category}</span>
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => {
            const category = course.category || "Development";
            const config = categoryConfig[category] || categoryConfig["Development"];
            const Icon = config.icon;

            return (
              <div
                key={course._id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 relative group"
              >
                {/* Category Label/Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${config.bgColor} shadow-sm backdrop-blur-sm`}>
                    <Icon size={14} className={config.color} />
                    <span className={`text-xs font-bold ${config.color}`}>
                      {config.label}
                    </span>
                  </div>
                </div>

                {/* Course Image */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={course.image}
                    alt={course.courseName}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {course.courseName}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">
                        ₹{course.price}
                      </span>
                      {parseInt(course.price) < 15000 && parseInt(course.price) > 5000 && (
                        <span className="ml-2 text-xs text-gray-400 line-through">
                          ₹{parseInt(course.price) + 3000}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pay Now Button */}
                  <a
                    href={PAYMENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition transform hover:scale-[1.02]"
                  >
                    Enroll Now
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}