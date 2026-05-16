// import { useState, useEffect } from "react";
// import { Navigation } from "../components/Navigation";
// import { Footer } from "../components/Footer";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../../../utils/baseUrl";

// interface Blog {
//   _id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   image: string;
//   category: string;
// }

// export default function BlogPage() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${BASE_URL}/api/blogs`)
//     // fetch("https://slategrey-worm-160018.hostingersite.com/api/blogs")
//       .then((res) => res.json())
//       .then((data) => {
//         setBlogs(Array.isArray(data) ? data : []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching blogs:", err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <>
//       <Navigation />
//       <section className="min-h-screen bg-gray-50 py-16">
//         <div className="mx-auto max-w-7xl px-4">
//           <h1 className="text-4xl font-bold text-gray-900">Our Blog</h1>
//           <p className="mt-4 text-lg text-gray-600">
//             Read the latest blogs, career tips, course updates, and industry insights from Lone Star Academy.
//           </p>

//           <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {loading ? (
//               [1, 2, 3].map((i) => (
//                 <div key={i} className="h-80 animate-pulse rounded-2xl bg-gray-200" />
//               ))
//             ) : blogs.length > 0 ? (
//               blogs.map((blog) => (
//                 <div
//                   key={blog._id}
//                   className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg"
//                 >
//                   <img
//                     src={blog.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"}
//                     alt={blog.title}
//                     className="h-48 w-full rounded-xl object-cover"
//                   />
//                   <div className="mt-4">
//                     <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
//                       {blog.category}
//                     </span>
//                   </div>
//                   <h2 className="mt-2 text-xl font-semibold text-gray-900">
//                     {blog.title}
//                   </h2>
//                   <p className="mt-2 line-clamp-2 text-sm text-gray-600">
//                     {blog.excerpt}
//                   </p>
//                   <Link
//                     to={`/blog/${blog.slug}`}
//                     className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-500 col-span-full">No blogs found.</p>
//             )}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }
// BlogPage.tsx (updated)
import { useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../utils/baseUrl";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navigation />
      <section className="min-h-screen bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-bold text-gray-900">Our Blog</h1>
          <p className="mt-4 text-lg text-gray-600">
            Read the latest blogs, career tips, course updates, and industry insights from Lone Star Academy.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              [1, 2, 3].map((i) => (
                <div key={i} className="h-80 animate-pulse rounded-2xl bg-gray-200" />
              ))
            ) : blogs.length > 0 ? (
              blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
                >
                  <img
                    src={blog.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"}
                    alt={blog.title}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                      {blog.category}
                    </span>
                    <h2 className="mt-3 text-xl font-semibold text-gray-900 line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                    >
                      Read More
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No blogs found.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}