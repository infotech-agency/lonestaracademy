// import { useState } from "react";
// import { motion } from "motion/react";
// import { Link } from "react-router-dom";

// type CourseCardProps = {
//   _id?: string;
//   id?: string;
//   name: string;
//   price: string;
//   duration: string;
//   image: string;
// };

// export function CourseCard({
//   _id,
//   id,
//   name,
//   price,
//   duration,
//   image,
// }: CourseCardProps) {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const courseId = _id || id;

//   return (
//     <Link
//       to={`/courses/${courseId}`}
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

import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

type CourseCardProps = {
  _id?: string;
  id?: string;
  slug?: string;
  name: string;
  price: string;
  duration: string;
  image: string;
};

export function CourseCard({
  _id,
  id,
  slug,
  name,
  price,
  duration,
  image,
}: CourseCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Prefer SEO slug, fallback to MongoDB _id for backward compatibility
  const identifier = slug || _id || id;

  return (
    <Link
      // Root-level slug URL:
      // /business-analytics-course-delhi
      // Fallback:
      // /6a0404409522cb10bdef1e3b
      to={`/${identifier}`}
      className="relative block w-full h-[320px] perspective-[1000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-blue-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
            <h3 className="text-white text-lg font-semibold p-4">{name}</h3>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-3 p-6 text-white rotate-y-180">
          <h3 className="text-center font-semibold text-lg">{name}</h3>
          <div className="w-12 h-px bg-white/30"></div>
          <p className="text-2xl font-bold">{price}</p>
          <p className="text-sm opacity-90">{duration}</p>
          <button className="mt-2 px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
            Enroll Now
          </button>
        </div>
      </motion.div>
    </Link>
  );
}