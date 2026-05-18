// import { useState, useEffect } from "react";

// interface IdProof {
//   public_id: string;
//   secure_url: string;
// }

// interface Photo {
//   public_id: string;
//   secure_url: string;
// }

// interface Admission {
//   _id?: string;
//   name: string;
//   email: string;
//   phone: string;
//   branch: string;
//   course: string;
//   dob: string;
//   address: string;
//   country: string;
//   message: string;
//   idProof: IdProof;
//   photo: Photo;
//   createdAt: { $date: string } | string;
//   updatedAt: { $date: string } | string;
//   __v?: number;
// }

// function getInitials(name: string) {
//   return name
//     .split(" ")
//     .map((n) => n[0])
//     .join("")
//     .toUpperCase()
//     .slice(0, 2);
// }

// function formatDate(date: { $date: string } | string) {
//   const raw = typeof date === "string" ? date : date.$date;
//   return new Date(raw).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function formatDOB(dob: string) {
//   return new Date(dob).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });
// }

// // ─── Drawer / Detail Panel ───────────────────────────────────────────────────

// function AdmissionDrawer({
//   admission,
//   onClose,
// }: {
//   admission: Admission;
//   onClose: () => void;
// }) {
//   const [imgError, setImgError] = useState(false);

//   return (
//     <div className="fixed inset-0 z-50 flex">
//       {/* Backdrop */}
//       <div
//         className="flex-1 bg-black/40 backdrop-blur-sm"
//         onClick={onClose}
//       />
//       {/* Panel */}
//       <div className="w-full max-w-lg bg-white h-full overflow-y-auto shadow-2xl flex flex-col">
//         {/* Header */}
//         <div className="sticky top-0 bg-white z-10 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
//           <h2 className="text-slate-800 font-semibold text-base">
//             Admission Detail
//           </h2>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-500 transition"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="p-6 flex flex-col gap-6">
//           {/* Profile section */}
//           <div className="flex items-center gap-4">
//             {!imgError ? (
//               <img
//                 src={admission.photo.secure_url}
//                 alt={admission.name}
//                 className="w-16 h-16 rounded-xl object-cover border border-slate-200"
//                 onError={() => setImgError(true)}
//               />
//             ) : (
//               <div className="w-16 h-16 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xl">
//                 {getInitials(admission.name)}
//               </div>
//             )}
//             <div>
//               <p className="text-slate-900 font-semibold text-lg leading-tight">
//                 {admission.name}
//               </p>
//               <p className="text-slate-500 text-sm">{admission.email}</p>
//               <p className="text-slate-400 text-xs mt-0.5">
//                 Applied {formatDate(admission.createdAt)}
//               </p>
//             </div>
//           </div>

//           {/* Info Grid */}
//           <div className="grid grid-cols-2 gap-3">
//             {[
//               { label: "Phone", value: admission.phone },
//               { label: "Branch", value: admission.branch },
//               { label: "Course", value: admission.course },
//               { label: "Country", value: admission.country },
//               {
//                 label: "Date of Birth",
//                 value: formatDOB(admission.dob),
//                 full: true,
//               },
//               { label: "Address", value: admission.address, full: true },
//             ].map((item) => (
//               <div
//                 key={item.label}
//                 className={`bg-slate-50 rounded-xl p-3 ${item.full ? "col-span-2" : ""}`}
//               >
//                 <p className="text-slate-400 text-xs mb-0.5">{item.label}</p>
//                 <p className="text-slate-800 text-sm font-medium">
//                   {item.value}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Message */}
//           {admission.message && (
//             <div className="bg-slate-50 rounded-xl p-3">
//               <p className="text-slate-400 text-xs mb-1">Message</p>
//               <p className="text-slate-700 text-sm leading-relaxed">
//                 {admission.message}
//               </p>
//             </div>
//           )}

//           {/* ID Proof */}
//           <div>
//             <p className="text-slate-500 text-xs font-medium mb-2 uppercase tracking-wide">
//               ID Proof
//             </p>
//             <a
//               href={admission.idProof.secure_url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block overflow-hidden rounded-xl border border-slate-200 hover:border-indigo-300 transition"
//             >
//               <img
//                 src={admission.idProof.secure_url}
//                 alt="ID Proof"
//                 className="w-full max-h-48 object-cover"
//                 onError={(e) => {
//                   (e.target as HTMLImageElement).style.display = "none";
//                 }}
//               />
//               <div className="px-3 py-2 bg-slate-50 text-xs text-indigo-600 font-medium">
//                 View full ID →
//               </div>
//             </a>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Row Card ────────────────────────────────────────────────────────────────

// function AdmissionRow({
//   admission,
//   onClick,
// }: {
//   admission: Admission;
//   onClick: () => void;
// }) {
//   const [imgError, setImgError] = useState(false);

//   return (
//     <tr
//       onClick={onClick}
//       className="group cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
//     >
//       <td className="px-4 py-3">
//         <div className="flex items-center gap-3">
//           {!imgError ? (
//             <img
//               src={admission.photo.secure_url}
//               alt={admission.name}
//               className="w-9 h-9 rounded-lg object-cover border border-slate-200 shrink-0"
//               onError={() => setImgError(true)}
//             />
//           ) : (
//             <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm shrink-0">
//               {getInitials(admission.name)}
//             </div>
//           )}
//           <div>
//             <p className="text-slate-800 font-medium text-sm leading-tight">
//               {admission.name}
//             </p>
//             <p className="text-slate-400 text-xs">{admission.email}</p>
//           </div>
//         </div>
//       </td>
//       <td className="px-4 py-3 text-slate-600 text-sm">{admission.course}</td>
//       <td className="px-4 py-3 text-slate-500 text-sm">{admission.branch}</td>
//       <td className="px-4 py-3 text-slate-500 text-sm">{admission.phone}</td>
//       <td className="px-4 py-3 text-slate-400 text-sm">
//         {formatDate(admission.createdAt)}
//       </td>
//       <td className="px-4 py-3">
//         <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
//           Pending
//         </span>
//       </td>
//       <td className="px-4 py-3">
//         <span className="text-indigo-500 text-sm opacity-0 group-hover:opacity-100 transition font-medium">
//           View →
//         </span>
//       </td>
//     </tr>
//   );
// }

// // ─── Stats Card ──────────────────────────────────────────────────────────────

// function StatCard({
//   label,
//   value,
//   sub,
//   color,
// }: {
//   label: string;
//   value: number | string;
//   sub?: string;
//   color: string;
// }) {
//   return (
//     <div className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col gap-1 shadow-sm">
//       <div className={`w-8 h-8 rounded-lg ${color} mb-1`} />
//       <p className="text-2xl font-bold text-slate-800">{value}</p>
//       <p className="text-slate-500 text-sm">{label}</p>
//       {sub && <p className="text-xs text-slate-400">{sub}</p>}
//     </div>
//   );
// }

// // ─── Main Page ────────────────────────────────────────────────────────────────

// export default function AdmissionsPage() {
//   const [admissions, setAdmissions] = useState<Admission[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [search, setSearch] = useState("");
//   const [courseFilter, setCourseFilter] = useState("All");
//   const [selected, setSelected] = useState<Admission | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const PER_PAGE = 10;
//     console.log(admissions);
//   useEffect(() => {
//     fetch("http://localhost:3001/api/admission")
//       .then((r) => {
//         if (!r.ok) throw new Error(`HTTP ${r.status}`);
//         return r.json();
//       })
//       .then((data) => {
//         setAdmissions(Array.isArray(data) ? data : data.data ?? []);
//         setLoading(false);
//       })
//       .catch((e) => {
//         setError(e.message);
//         setLoading(false);
//       });
//   }, []);

//   // Derived
//   const courses = ["All", ...Array.from(new Set(admissions.map((a) => a.course)))];

//   const filtered = admissions.filter((a) => {
//     const q = search.toLowerCase();
//     const matchSearch =
//       !q ||
//       a.name.toLowerCase().includes(q) ||
//       a.email.toLowerCase().includes(q) ||
//       a.course.toLowerCase().includes(q) ||
//       a.branch.toLowerCase().includes(q) ||
//       a.phone.includes(q);
//     const matchCourse = courseFilter === "All" || a.course === courseFilter;
//     return matchSearch && matchCourse;
//   });

//   const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
//   const paginated = filtered.slice(
//     (currentPage - 1) * PER_PAGE,
//     currentPage * PER_PAGE
//   );

//   const handleSearch = (v: string) => {
//     setSearch(v);
//     setCurrentPage(1);
//   };

//   const handleCourse = (v: string) => {
//     setCourseFilter(v);
//     setCurrentPage(1);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       {/* Topbar */}
//       <header className="sticky top-0 z-30 bg-white border-b border-slate-100 px-6 py-3 flex items-center justify-between shadow-sm">
//         <div>
//           <h1 className="text-slate-900 font-bold text-xl tracking-tight">
//             Admissions
//           </h1>
//           <p className="text-slate-400 text-xs">Lonestar Academy — Admin Panel</p>
//         </div>
//         <div className="flex items-center gap-3">
//           <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
//             {admissions.length} total records
//           </span>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6">
//         {/* Stats Row */}
//         {!loading && !error && (
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//             <StatCard
//               label="Total Applications"
//               value={admissions.length}
//               color="bg-indigo-100"
//             />
//             <StatCard
//               label="Pending Review"
//               value={admissions.length}
//               sub="Awaiting action"
//               color="bg-amber-100"
//             />
//             <StatCard
//               label="Courses Offered"
//               value={courses.length - 1}
//               color="bg-emerald-100"
//             />
//             <StatCard
//               label="Today's Entries"
//               value={
//                 admissions.filter(
//                   (a) =>
//                     new Date(
//                       typeof a.createdAt === "string"
//                         ? a.createdAt
//                         : a.createdAt.$date
//                     ).toDateString() === new Date().toDateString()
//                 ).length
//               }
//               color="bg-rose-100"
//             />
//           </div>
//         )}

//         {/* Filters */}
//         <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
//           <input
//             type="text"
//             placeholder="Search by name, email, course, phone…"
//             value={search}
//             onChange={(e) => handleSearch(e.target.value)}
//             className="w-full sm:w-80 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
//           />
//           <div className="flex gap-2 flex-wrap">
//             {courses.map((c) => (
//               <button
//                 key={c}
//                 onClick={() => handleCourse(c)}
//                 className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
//                   courseFilter === c
//                     ? "bg-indigo-600 text-white border-indigo-600"
//                     : "bg-white text-slate-500 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
//                 }`}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>
//           {(search || courseFilter !== "All") && (
//             <button
//               onClick={() => {
//                 setSearch("");
//                 setCourseFilter("All");
//               }}
//               className="text-xs text-slate-400 hover:text-slate-600 underline"
//             >
//               Clear filters
//             </button>
//           )}
//         </div>

//         {/* Table */}
//         <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
//           {loading ? (
//             <div className="flex flex-col items-center justify-center py-20 gap-3">
//               <div className="w-8 h-8 rounded-full border-2 border-indigo-200 border-t-indigo-600 animate-spin" />
//               <p className="text-slate-400 text-sm">Loading admissions…</p>
//             </div>
//           ) : error ? (
//             <div className="flex flex-col items-center justify-center py-20 gap-2 text-center px-6">
//               <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-400 text-2xl mb-1">
//                 ⚠
//               </div>
//               <p className="text-slate-700 font-medium">Failed to load data</p>
//               <p className="text-slate-400 text-sm">
//                 Could not reach{" "}
//                 <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">
//                   localhost:3001
//                 </code>
//                 . Make sure your server is running.
//               </p>
//               <p className="text-red-400 text-xs">{error}</p>
//             </div>
//           ) : paginated.length === 0 ? (
//             <div className="flex flex-col items-center justify-center py-20 gap-2">
//               <p className="text-slate-400 text-sm">No admissions found</p>
//               {(search || courseFilter !== "All") && (
//                 <p className="text-slate-300 text-xs">
//                   Try adjusting your filters
//                 </p>
//               )}
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-slate-50 border-b border-slate-100">
//                     {[
//                       "Applicant",
//                       "Course",
//                       "Branch",
//                       "Phone",
//                       "Applied",
//                       "Status",
//                       "",
//                     ].map((h) => (
//                       <th
//                         key={h}
//                         className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider"
//                       >
//                         {h}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {paginated.map((admission, i) => (
//                     <AdmissionRow
//                       key={admission._id ?? i}
//                       admission={admission}
//                       onClick={() => setSelected(admission)}
//                     />
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {/* Pagination */}
//           {!loading && !error && filtered.length > PER_PAGE && (
//             <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
//               <p className="text-xs text-slate-400">
//                 Showing {(currentPage - 1) * PER_PAGE + 1}–
//                 {Math.min(currentPage * PER_PAGE, filtered.length)} of{" "}
//                 {filtered.length}
//               </p>
//               <div className="flex gap-1">
//                 <button
//                   onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                   disabled={currentPage === 1}
//                   className="px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
//                 >
//                   ← Prev
//                 </button>
//                 {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                   const page = i + 1;
//                   return (
//                     <button
//                       key={page}
//                       onClick={() => setCurrentPage(page)}
//                       className={`w-8 h-8 rounded-lg text-xs border transition ${
//                         currentPage === page
//                           ? "bg-indigo-600 text-white border-indigo-600"
//                           : "border-slate-200 text-slate-500 hover:bg-slate-50"
//                       }`}
//                     >
//                       {page}
//                     </button>
//                   );
//                 })}
//                 <button
//                   onClick={() =>
//                     setCurrentPage((p) => Math.min(totalPages, p + 1))
//                   }
//                   disabled={currentPage === totalPages}
//                   className="px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
//                 >
//                   Next →
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Drawer */}
//       {selected && (
//         <AdmissionDrawer
//           admission={selected}
//           onClose={() => setSelected(null)}
//         />
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../utils/baseUrl";

interface IdProof {
  public_id: string;
  secure_url: string;
}

interface Photo {
  public_id: string;
  secure_url: string;
}

interface Admission {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  dob: string;
  address: string;
  message: string;
  idProof: IdProof;
  photo: Photo;
  createdAt: { $date: string } | string;
  updatedAt: { $date: string } | string;
  __v?: number;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function formatDate(date: { $date: string } | string) {
  const raw = typeof date === "string" ? date : date.$date;
  return new Date(raw).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatDOB(dob: string) {
  return new Date(dob).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// ─── Drawer / Detail Panel ───────────────────────────────────────────────────

function AdmissionDrawer({
  admission,
  onClose,
}: {
  admission: Admission;
  onClose: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="flex-1 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Panel */}
      <div className="w-full max-w-lg bg-white h-full overflow-y-auto shadow-2xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
          <h2 className="text-slate-800 font-semibold text-base">
            Admission Detail
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-500 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6 flex flex-col gap-6">
          {/* Profile section */}
          <div className="flex items-center gap-4">
            {!imgError ? (
              <img
                src={admission.photo.secure_url}
                alt={admission.name}
                className="w-16 h-16 rounded-xl object-cover border border-slate-200"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-16 h-16 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xl">
                {getInitials(admission.name)}
              </div>
            )}
            <div>
              <p className="text-slate-900 font-semibold text-lg leading-tight">
                {admission.name}
              </p>
              <p className="text-slate-500 text-sm">{admission.email}</p>
              <p className="text-slate-400 text-xs mt-0.5">
                Applied {formatDate(admission.createdAt)}
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Phone", value: admission.phone },
              { label: "Course", value: admission.course },
              {
                label: "Date of Birth",
                value: formatDOB(admission.dob),
                full: true,
              },
              { label: "Address", value: admission.address, full: true },
            ].map((item) => (
              <div
                key={item.label}
                className={`bg-slate-50 rounded-xl p-3 ${item.full ? "col-span-2" : ""}`}
              >
                <p className="text-slate-400 text-xs mb-0.5">{item.label}</p>
                <p className="text-slate-800 text-sm font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Message */}
          {admission.message && (
            <div className="bg-slate-50 rounded-xl p-3">
              <p className="text-slate-400 text-xs mb-1">Message</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                {admission.message}
              </p>
            </div>
          )}

          {/* ID Proof */}
          <div>
            <p className="text-slate-500 text-xs font-medium mb-2 uppercase tracking-wide">
              ID Proof
            </p>
            <a
              href={admission.idProof.secure_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl border border-slate-200 hover:border-indigo-300 transition"
            >
              <img
                src={admission.idProof.secure_url}
                alt="ID Proof"
                className="w-full max-h-48 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="px-3 py-2 bg-slate-50 text-xs text-indigo-600 font-medium">
                View full ID →
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Row Card ────────────────────────────────────────────────────────────────

function AdmissionRow({
  admission,
  onClick,
}: {
  admission: Admission;
  onClick: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <tr
      onClick={onClick}
      className="group cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
    >
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          {!imgError ? (
            <img
              src={admission.photo.secure_url}
              alt={admission.name}
              className="w-9 h-9 rounded-lg object-cover border border-slate-200 shrink-0"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm shrink-0">
              {getInitials(admission.name)}
            </div>
          )}
          <div>
            <p className="text-slate-800 font-medium text-sm leading-tight">
              {admission.name}
            </p>
            <p className="text-slate-400 text-xs">{admission.email}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-slate-600 text-sm">{admission.course}</td>
      <td className="px-4 py-3 text-slate-500 text-sm">{admission.phone}</td>
      <td className="px-4 py-3 text-slate-400 text-sm">
        {formatDate(admission.createdAt)}
      </td>
      <td className="px-4 py-3">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
          Pending
        </span>
      </td>
      <td className="px-4 py-3">
        <span className="text-indigo-500 text-sm opacity-0 group-hover:opacity-100 transition font-medium">
          View →
        </span>
      </td>
    </tr>
  );
}

// ─── Stats Card ──────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: number | string;
  sub?: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col gap-1 shadow-sm">
      <div className={`w-8 h-8 rounded-lg ${color} mb-1`} />
      <p className="text-2xl font-bold text-slate-800">{value}</p>
      <p className="text-slate-500 text-sm">{label}</p>
      {sub && <p className="text-xs text-slate-400">{sub}</p>}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AdmissionsPage() {
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [selected, setSelected] = useState<Admission | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const PER_PAGE = 10;
  
  useEffect(() => {
    // fetch("http://localhost:3001/api/admissions")
    fetch(`${BASE_URL}/api/admissions`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        setAdmissions(Array.isArray(data) ? data : data.data ?? []);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  // Derived
  const courses = ["All", ...Array.from(new Set(admissions.map((a) => a.course)))];

  const filtered = admissions.filter((a) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      a.name.toLowerCase().includes(q) ||
      a.email.toLowerCase().includes(q) ||
      a.course.toLowerCase().includes(q) ||
      a.phone.includes(q);
    const matchCourse = courseFilter === "All" || a.course === courseFilter;
    return matchSearch && matchCourse;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  const handleSearch = (v: string) => {
    setSearch(v);
    setCurrentPage(1);
  };

  const handleCourse = (v: string) => {
    setCourseFilter(v);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Topbar */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-100 px-6 py-3 flex items-center justify-between shadow-sm">
        <div>
          <h1 className="text-slate-900 font-bold text-xl tracking-tight">
            Admissions
          </h1>
          <p className="text-slate-400 text-xs">Lonestar Academy — Admin Panel</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
            {admissions.length} total records
          </span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6">
        {/* Stats Row */}
        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCard
              label="Total Applications"
              value={admissions.length}
              color="bg-indigo-100"
            />
            <StatCard
              label="Pending Review"
              value={admissions.length}
              sub="Awaiting action"
              color="bg-amber-100"
            />
            <StatCard
              label="Courses Offered"
              value={courses.length - 1}
              color="bg-emerald-100"
            />
            <StatCard
              label="Today's Entries"
              value={
                admissions.filter(
                  (a) =>
                    new Date(
                      typeof a.createdAt === "string"
                        ? a.createdAt
                        : a.createdAt.$date
                    ).toDateString() === new Date().toDateString()
                ).length
              }
              color="bg-rose-100"
            />
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <input
            type="text"
            placeholder="Search by name, email, course, phone…"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full sm:w-80 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          />
          <div className="flex gap-2 flex-wrap">
            {courses.map((c) => (
              <button
                key={c}
                onClick={() => handleCourse(c)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                  courseFilter === c
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-500 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          {(search || courseFilter !== "All") && (
            <button
              onClick={() => {
                setSearch("");
                setCourseFilter("All");
              }}
              className="text-xs text-slate-400 hover:text-slate-600 underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-indigo-200 border-t-indigo-600 animate-spin" />
              <p className="text-slate-400 text-sm">Loading admissions…</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 gap-2 text-center px-6">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-400 text-2xl mb-1">
                ⚠
              </div>
              <p className="text-slate-700 font-medium">Failed to load data</p>
              <p className="text-slate-400 text-sm">
                Could not reach{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">
                  localhost:3001
                </code>
                . Make sure your server is running.
              </p>
              <p className="text-red-400 text-xs">{error}</p>
            </div>
          ) : paginated.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-2">
              <p className="text-slate-400 text-sm">No admissions found</p>
              {(search || courseFilter !== "All") && (
                <p className="text-slate-300 text-xs">
                  Try adjusting your filters
                </p>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    {["Applicant", "Course", "Phone", "Applied", "Status", ""].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((admission, i) => (
                    <AdmissionRow
                      key={admission._id ?? i}
                      admission={admission}
                      onClick={() => setSelected(admission)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {!loading && !error && filtered.length > PER_PAGE && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
              <p className="text-xs text-slate-400">
                Showing {(currentPage - 1) * PER_PAGE + 1}–
                {Math.min(currentPage * PER_PAGE, filtered.length)} of{" "}
                {filtered.length}
              </p>
              <div className="flex gap-1">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  ← Prev
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-lg text-xs border transition ${
                        currentPage === page
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "border-slate-200 text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  Next →
                </button>
              </div>
              gusiadjkgfvjh
            </div>
          )}
        </div>
      </main>

      {/* Drawer */}
      {selected && (
        <AdmissionDrawer
          admission={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}