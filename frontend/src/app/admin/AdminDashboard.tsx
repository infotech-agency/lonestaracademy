
// import { useEffect, useRef, useState, type ChangeEvent } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { BASE_URL } from "../../../utils/baseUrl";
// import {
//   Plus,
//   Edit2,
//   Trash2,
//   LogOut,
//   BookOpen,
//   Upload,
//   X,
//   Save,
//   Search,
//   Star,
//   ToggleLeft,
//   ToggleRight,
//   LayoutDashboard,
//   GraduationCap,
//   Settings,
//   Menu,
//   ChevronRight,
//   FileText,
//   CalendarDays,
//   User,
//   BriefcaseBusiness,
//   Building2,
//   Trophy,
//   Grid3x3,
//   ClipboardList,
// } from "lucide-react";

// const API = BASE_URL;

// // ─── Interfaces ───────────────────────────────────────────────────────────────

// interface FAQ {
//   question: string;
//   answer: string;
// }

// interface SEO {
//   title: string;
//   description: string;
//   keywords: string;
//   ogTitle: string;
//   ogDescription: string;
// }

// interface Tile {
//   id?: string;
//   _id?: string;
//   courseName: string;
//   description: string;
//   price: string;
//   image: string | null;
// }

// interface Course {
//   id?: string;
//   _id?: string;
//   name: string;
//   slug: string;
//   price: string;
//   duration: string;
//   description: string;
//   category: string;
//   image: string | null;
//   featured: boolean;
//   faqs: FAQ[];
//   seo: SEO;
// }

// interface Blog {
//   id?: string;
//   _id?: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   content: string;
//   category: string;
//   author: string;
//   image: string | null;
//   featured: boolean;
//   publishedAt: string;
//   seo: SEO;
// }

// interface Placement {
//   id?: string;
//   _id?: string;
//   studentName: string;
//   studentImage: string | null;
//   companyName: string;
//   companyLogo: string | null;
//   role: string;
//   isFeatured: boolean;
//   order: number;
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
//   idProof: { public_id: string; secure_url: string };
//   photo: { public_id: string; secure_url: string };
//   createdAt: { $date: string } | string;
//   updatedAt: { $date: string } | string;
//   __v?: number;
// }

// type Section = "dashboard" | "courses" | "blogs" | "placements" | "tiles" | "admissions";
// type Tab = "basic" | "seo" | "faqs";
// type SEOKey = keyof SEO;

// // ─── Helpers ──────────────────────────────────────────────────────────────────

// const createEmptySEO = (): SEO => ({
//   title: "",
//   description: "",
//   keywords: "",
//   ogTitle: "",
//   ogDescription: "",
// });

// const createEmptyCourse = (): Omit<Course, "id"> => ({
//   name: "",
//   slug: "",
//   price: "",
//   duration: "",
//   description: "",
//   category: "Analytics",
//   image: null,
//   featured: false,
//   faqs: [],
//   seo: createEmptySEO(),
// });

// const createEmptyBlog = (): Omit<Blog, "id"> => ({
//   title: "",
//   slug: "",
//   excerpt: "",
//   content: "",
//   category: "General",
//   author: "",
//   image: null,
//   featured: false,
//   publishedAt: "",
//   seo: createEmptySEO(),
// });

// const createEmptyPlacement = (): Omit<Placement, "id"> => ({
//   studentName: "",
//   studentImage: null,
//   companyName: "",
//   companyLogo: null,
//   role: "",
//   isFeatured: false,
//   order: 0,
// });

// const createEmptyTile = (): Omit<Tile, "id"> => ({
//   courseName: "",
//   description: "",
//   price: "",
//   image: null,
// });

// function getInitials(name: string) {
//   return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
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

// // ─── Admission Drawer ─────────────────────────────────────────────────────────

// function AdmissionDrawer({
//   admission,
//   onClose,
// }: {
//   admission: Admission;
//   onClose: () => void;
// }) {
//   const [imgError, setImgError] = useState(false);

//   return (
//     <div className="fixed inset-0 z-[60] flex">
//       <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={onClose} />
//       <div className="w-full max-w-lg bg-white h-full overflow-y-auto shadow-2xl flex flex-col">
//         {/* Header */}
//         <div className="sticky top-0 bg-white z-10 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
//           <h2 className="text-slate-800 font-semibold text-base">Admission Detail</h2>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-500 transition"
//           >
//             <X size={16} />
//           </button>
//         </div>

//         <div className="p-6 flex flex-col gap-6">
//           {/* Profile */}
//           <div className="flex items-center gap-4">
//             {!imgError ? (
//               <img
//                 src={admission.photo?.secure_url}
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
//               <p className="text-slate-900 font-semibold text-lg leading-tight">{admission.name}</p>
//               <p className="text-slate-500 text-sm">{admission.email}</p>
//               <p className="text-slate-400 text-xs mt-0.5">Applied {formatDate(admission.createdAt)}</p>
//             </div>
//           </div>

//           {/* Info Grid */}
//           <div className="grid grid-cols-2 gap-3">
//             {[
//               { label: "Phone", value: admission.phone },
//               { label: "Branch", value: admission.branch },
//               { label: "Course", value: admission.course },
//               { label: "Country", value: admission.country },
//               { label: "Date of Birth", value: formatDOB(admission.dob), full: true },
//               { label: "Address", value: admission.address, full: true },
//             ].map((item) => (
//               <div
//                 key={item.label}
//                 className={`bg-slate-50 rounded-xl p-3 ${item.full ? "col-span-2" : ""}`}
//               >
//                 <p className="text-slate-400 text-xs mb-0.5">{item.label}</p>
//                 <p className="text-slate-800 text-sm font-medium">{item.value}</p>
//               </div>
//             ))}
//           </div>

//           {/* Message */}
//           {admission.message && (
//             <div className="bg-slate-50 rounded-xl p-3">
//               <p className="text-slate-400 text-xs mb-1">Message</p>
//               <p className="text-slate-700 text-sm leading-relaxed">{admission.message}</p>
//             </div>
//           )}

//           {/* ID Proof */}
//           <div>
//             <p className="text-slate-500 text-xs font-medium mb-2 uppercase tracking-wide">ID Proof</p>
//             <a
//               href={admission.idProof?.secure_url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block overflow-hidden rounded-xl border border-slate-200 hover:border-indigo-300 transition"
//             >
//               <img
//                 src={admission.idProof?.secure_url}
//                 alt="ID Proof"
//                 className="w-full max-h-48 object-cover"
//                 onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
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

// // ─── Admissions Section ───────────────────────────────────────────────────────

// function AdmissionsSection() {
//   const [admissions, setAdmissions] = useState<Admission[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [search, setSearch] = useState("");
//   const [courseFilter, setCourseFilter] = useState("All");
//   const [selected, setSelected] = useState<Admission | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const PER_PAGE = 10;

//   useEffect(() => {
//     fetch(`${API}/api/admission`)
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
//   const paginated = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

//   const todayCount = admissions.filter(
//     (a) =>
//       new Date(typeof a.createdAt === "string" ? a.createdAt : a.createdAt.$date).toDateString() ===
//       new Date().toDateString()
//   ).length;

//   return (
//     <>
//       {/* Stats */}
//       {!loading && !error && (
//         <div className="mb-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
//           {[
//             { label: "Total Applications", value: admissions.length, color: "from-indigo-500/10 to-indigo-100 text-indigo-700 border-indigo-200" },
//             { label: "Pending Review", value: admissions.length, color: "from-amber-500/10 to-amber-100 text-amber-700 border-amber-200" },
//             { label: "Courses Applied", value: courses.length - 1, color: "from-emerald-500/10 to-emerald-100 text-emerald-700 border-emerald-200" },
//             { label: "Today's Entries", value: todayCount, color: "from-rose-500/10 to-rose-100 text-rose-700 border-rose-200" },
//           ].map((s) => (
//             <div key={s.label} className={`rounded-3xl border bg-gradient-to-br ${s.color} p-5 shadow-sm`}>
//               <p className="text-3xl font-bold mb-1">{s.value}</p>
//               <p className="text-sm font-medium opacity-90">{s.label}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Filters */}
//       <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
//         <div className="relative flex-1 max-w-sm">
//           <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
//           <input
//             type="text"
//             placeholder="Search by name, email, course, phone…"
//             value={search}
//             onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
//             className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
//           />
//         </div>
//         <div className="flex gap-2 flex-wrap">
//           {courses.map((c) => (
//             <button
//               key={c}
//               onClick={() => { setCourseFilter(c); setCurrentPage(1); }}
//               className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
//                 courseFilter === c
//                   ? "bg-indigo-600 text-white border-indigo-600"
//                   : "bg-white text-slate-500 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
//               }`}
//             >
//               {c}
//             </button>
//           ))}
//           {(search || courseFilter !== "All") && (
//             <button
//               onClick={() => { setSearch(""); setCourseFilter("All"); }}
//               className="text-xs text-slate-400 hover:text-slate-600 underline px-1"
//             >
//               Clear
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
//         <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4 flex items-center justify-between">
//           <div>
//             <h3 className="text-lg font-bold text-slate-900">Applications List</h3>
//             <p className="text-sm text-slate-500">Click any row to view full details</p>
//           </div>
//           <span className="text-xs bg-indigo-50 text-indigo-600 border border-indigo-200 px-3 py-1.5 rounded-full font-medium">
//             {admissions.length} total
//           </span>
//         </div>

//         {loading ? (
//           <div className="space-y-4 p-8">
//             {[...Array(5)].map((_, i) => (
//               <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />
//             ))}
//           </div>
//         ) : error ? (
//           <div className="flex flex-col items-center justify-center py-20 gap-2 text-center px-6">
//             <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-400 text-2xl mb-1">⚠</div>
//             <p className="text-slate-700 font-medium">Failed to load admissions</p>
//             <p className="text-slate-400 text-sm">
//               Could not reach{" "}
//               <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">{API}/api/admissions</code>
//             </p>
//             <p className="text-red-400 text-xs mt-1">{error}</p>
//           </div>
//         ) : paginated.length === 0 ? (
//           <div className="flex flex-col items-center justify-center py-20 gap-2">
//             <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
//               <ClipboardList size={28} className="text-slate-400" />
//             </div>
//             <p className="text-lg font-semibold text-slate-700">No applications found</p>
//             {(search || courseFilter !== "All") && (
//               <p className="text-sm text-slate-400">Try adjusting your filters</p>
//             )}
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[800px]">
//               <thead className="bg-slate-50/80">
//                 <tr>
//                   {["Applicant", "Course", "Branch", "Phone", "Applied", "Status", ""].map((h) => (
//                     <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
//                       {h}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100">
//                 {paginated.map((admission, i) => (
//                   <AdmissionTableRow
//                     key={admission._id ?? i}
//                     admission={admission}
//                     onClick={() => setSelected(admission)}
//                   />
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Pagination */}
//         {!loading && !error && filtered.length > PER_PAGE && (
//           <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100">
//             <p className="text-xs text-slate-400">
//               Showing {(currentPage - 1) * PER_PAGE + 1}–{Math.min(currentPage * PER_PAGE, filtered.length)} of {filtered.length}
//             </p>
//             <div className="flex gap-1">
//               <button
//                 onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
//               >
//                 ← Prev
//               </button>
//               {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                 const page = i + 1;
//                 return (
//                   <button
//                     key={page}
//                     onClick={() => setCurrentPage(page)}
//                     className={`w-8 h-8 rounded-lg text-xs border transition ${
//                       currentPage === page
//                         ? "bg-indigo-600 text-white border-indigo-600"
//                         : "border-slate-200 text-slate-500 hover:bg-slate-50"
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 );
//               })}
//               <button
//                 onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
//               >
//                 Next →
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Drawer */}
//       {selected && (
//         <AdmissionDrawer admission={selected} onClose={() => setSelected(null)} />
//       )}
//     </>
//   );
// }

// // ─── Admission Table Row ──────────────────────────────────────────────────────

// function AdmissionTableRow({
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
//       className="group cursor-pointer transition hover:bg-indigo-50/40"
//     >
//       <td className="px-5 py-4">
//         <div className="flex items-center gap-3">
//           {!imgError ? (
//             <img
//               src={admission.photo?.secure_url}
//               alt={admission.name}
//               className="w-10 h-10 rounded-2xl object-cover border border-slate-200 shrink-0"
//               onError={() => setImgError(true)}
//             />
//           ) : (
//             <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm shrink-0">
//               {getInitials(admission.name)}
//             </div>
//           )}
//           <div>
//             <p className="font-semibold text-slate-900 text-sm">{admission.name}</p>
//             <p className="text-slate-400 text-xs">{admission.email}</p>
//           </div>
//         </div>
//       </td>
//       <td className="px-5 py-4">
//         <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
//           {admission.course}
//         </span>
//       </td>
//       <td className="px-5 py-4 text-sm text-slate-600">{admission.branch}</td>
//       <td className="px-5 py-4 text-sm text-slate-600">{admission.phone}</td>
//       <td className="px-5 py-4 text-sm text-slate-400">{formatDate(admission.createdAt)}</td>
//       <td className="px-5 py-4">
//         <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
//           Pending
//         </span>
//       </td>
//       <td className="px-5 py-4">
//         <span className="text-indigo-500 text-sm opacity-0 group-hover:opacity-100 transition font-medium">
//           View →
//         </span>
//       </td>
//     </tr>
//   );
// }

// // ─── Main AdminDashboard ──────────────────────────────────────────────────────

// export default function AdminDashboard({
//   token,
//   onLogout,
// }: {
//   token: string;
//   onLogout: () => void;
// }) {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [placements, setPlacements] = useState<Placement[]>([]);
//   const [tiles, setTiles] = useState<Tile[]>([]);

//   const [loadingCourses, setLoadingCourses] = useState(true);
//   const [loadingBlogs, setLoadingBlogs] = useState(true);
//   const [loadingPlacements, setLoadingPlacements] = useState(true);
//   const [loadingTiles, setLoadingTiles] = useState(true);

//   const [search, setSearch] = useState("");
//   const [section, setSection] = useState<Section>("dashboard");
//   const [activeTab, setActiveTab] = useState<Tab>("basic");
//   const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

//   const [courseModal, setCourseModal] = useState<{ open: boolean; editing: Course | null }>({ open: false, editing: null });
//   const [blogModal, setBlogModal] = useState<{ open: boolean; editing: Blog | null }>({ open: false, editing: null });
//   const [placementModal, setPlacementModal] = useState<{ open: boolean; editing: Placement | null }>({ open: false, editing: null });
//   const [tileModal, setTileModal] = useState<{ open: boolean; editing: Tile | null }>({ open: false, editing: null });

//   const [courseForm, setCourseForm] = useState<Omit<Course, "id">>(createEmptyCourse());
//   const [blogForm, setBlogForm] = useState<Omit<Blog, "id">>(createEmptyBlog());
//   const [placementForm, setPlacementForm] = useState<Omit<Placement, "id">>(createEmptyPlacement());
//   const [tileForm, setTileForm] = useState<Omit<Tile, "id">>(createEmptyTile());

//   const [courseImageFile, setCourseImageFile] = useState<File | null>(null);
//   const [blogImageFile, setBlogImageFile] = useState<File | null>(null);
//   const [placementStudentImageFile, setPlacementStudentImageFile] = useState<File | null>(null);
//   const [placementCompanyLogoFile, setPlacementCompanyLogoFile] = useState<File | null>(null);
//   const [tileImageFile, setTileImageFile] = useState<File | null>(null);

//   const [coursePreviewUrl, setCoursePreviewUrl] = useState<string | null>(null);
//   const [blogPreviewUrl, setBlogPreviewUrl] = useState<string | null>(null);
//   const [placementStudentPreviewUrl, setPlacementStudentPreviewUrl] = useState<string | null>(null);
//   const [placementCompanyPreviewUrl, setPlacementCompanyPreviewUrl] = useState<string | null>(null);
//   const [tilePreviewUrl, setTilePreviewUrl] = useState<string | null>(null);

//   const [savingCourse, setSavingCourse] = useState(false);
//   const [savingBlog, setSavingBlog] = useState(false);
//   const [savingPlacement, setSavingPlacement] = useState(false);
//   const [savingTile, setSavingTile] = useState(false);

//   const [deleteState, setDeleteState] = useState<{ type: "course" | "blog" | "placement" | "tile" | null; id: string | null }>({ type: null, id: null });

//   const courseFileRef = useRef<HTMLInputElement | null>(null);
//   const blogFileRef = useRef<HTMLInputElement | null>(null);
//   const placementStudentFileRef = useRef<HTMLInputElement | null>(null);
//   const placementCompanyFileRef = useRef<HTMLInputElement | null>(null);
//   const tileFileRef = useRef<HTMLInputElement | null>(null);

//   const authHeaders = { Authorization: `Bearer ${token}` };

//   const getImageUrl = (image: string | null) => {
//     if (!image) return "";
//     if (image.startsWith("http")) return image;
//     return `${API}${image}`;
//   };

//   const slugify = (text: string) =>
//     text.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");

//   const loadCourses = async () => {
//     setLoadingCourses(true);
//     try {
//       const res = await fetch(`${API}/api/courses`);
//       const data = await res.json();
//       const coursesData = Array.isArray(data) ? data : [];
//       setCourses(coursesData.map((c: any) => ({ ...c, faqs: c.faqs || [] })));
//     } catch { setCourses([]); } finally { setLoadingCourses(false); }
//   };

//   const loadBlogs = async () => {
//     setLoadingBlogs(true);
//     try {
//       const res = await fetch(`${API}/api/blogs`);
//       const data = await res.json();
//       setBlogs(Array.isArray(data) ? data : []);
//     } catch { setBlogs([]); } finally { setLoadingBlogs(false); }
//   };

//   const loadPlacements = async () => {
//     setLoadingPlacements(true);
//     try {
//       const res = await fetch(`${API}/api/placements`);
//       const d = await res.json();
//       setPlacements(d.success && Array.isArray(d.data) ? d.data : Array.isArray(d) ? d : []);
//     } catch { setPlacements([]); } finally { setLoadingPlacements(false); }
//   };

//   const loadTiles = async () => {
//     setLoadingTiles(true);
//     try {
//       const res = await fetch(`${API}/api/tiles`);
//       const d = await res.json();
//       setTiles(d.success && Array.isArray(d.data) ? d.data : Array.isArray(d) ? d : []);
//     } catch { setTiles([]); } finally { setLoadingTiles(false); }
//   };

//   useEffect(() => {
//     loadCourses();
//     loadBlogs();
//     loadPlacements();
//     loadTiles();
//   }, []);

//   // ── Course handlers ──
//   const openAddCourse = () => { setCourseForm(createEmptyCourse()); setCourseImageFile(null); setCoursePreviewUrl(null); setActiveTab("basic"); setCourseModal({ open: true, editing: null }); };
//   const openEditCourse = (course: Course) => {
//     setCourseForm({ name: course.name || "", slug: course.slug || "", price: course.price || "", duration: course.duration || "", description: course.description || "", category: course.category || "Analytics", image: course.image || null, featured: Boolean(course.featured), faqs: course.faqs || [], seo: course.seo || createEmptySEO() });
//     setCourseImageFile(null); setCoursePreviewUrl(course.image ? getImageUrl(course.image) : null); setActiveTab("basic"); setCourseModal({ open: true, editing: course });
//   };
//   const closeCourseModal = () => { setCourseModal({ open: false, editing: null }); setCourseImageFile(null); setCoursePreviewUrl(null); };
//   const handleCourseImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file || !file.type.startsWith("image/")) return;
//     setCourseImageFile(file); setCoursePreviewUrl(URL.createObjectURL(file));
//   };
//   const handleSaveCourse = async () => {
//     if (!courseForm.name.trim()) { alert("Course name is required"); return; }
//     setSavingCourse(true);
//     try {
//       const fd = new FormData();
//       fd.append("name", courseForm.name.trim()); fd.append("slug", courseForm.slug.trim()); fd.append("price", courseForm.price || ""); fd.append("duration", courseForm.duration || ""); fd.append("description", courseForm.description || ""); fd.append("category", courseForm.category || "Analytics"); fd.append("featured", String(courseForm.featured)); fd.append("faqs", JSON.stringify(courseForm.faqs || [])); fd.append("seo", JSON.stringify(courseForm.seo || createEmptySEO()));
//       if (courseImageFile) fd.append("image", courseImageFile);
//       const url = courseModal.editing ? `${API}/api/courses/${courseModal.editing._id || courseModal.editing.id}` : `${API}/api/courses`;
//       const res = await fetch(url, { method: courseModal.editing ? "PUT" : "POST", headers: authHeaders, body: fd });
//       const data = await res.json().catch(() => null);
//       if (!res.ok) { alert(data?.message || "Error saving course"); return; }
//       closeCourseModal(); await loadCourses();
//     } catch { alert("Backend/API error."); } finally { setSavingCourse(false); }
//   };

//   // ── Blog handlers ──
//   const openAddBlog = () => { setBlogForm({ ...createEmptyBlog(), publishedAt: new Date().toISOString().slice(0, 10) }); setBlogImageFile(null); setBlogPreviewUrl(null); setActiveTab("basic"); setBlogModal({ open: true, editing: null }); };
//   const openEditBlog = (blog: Blog) => {
//     setBlogForm({ title: blog.title || "", slug: blog.slug || "", excerpt: blog.excerpt || "", content: blog.content || "", category: blog.category || "General", author: blog.author || "", image: blog.image || null, featured: Boolean(blog.featured), publishedAt: blog.publishedAt ? blog.publishedAt.slice(0, 10) : "", seo: blog.seo || createEmptySEO() });
//     setBlogImageFile(null); setBlogPreviewUrl(blog.image ? getImageUrl(blog.image) : null); setActiveTab("basic"); setBlogModal({ open: true, editing: blog });
//   };
//   const closeBlogModal = () => { setBlogModal({ open: false, editing: null }); setBlogImageFile(null); setBlogPreviewUrl(null); };
//   const handleBlogImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file || !file.type.startsWith("image/")) return;
//     setBlogImageFile(file); setBlogPreviewUrl(URL.createObjectURL(file));
//   };
//   const handleSaveBlog = async () => {
//     if (!blogForm.title.trim() || !blogForm.content.trim()) { alert("Blog title and content are required"); return; }
//     setSavingBlog(true);
//     try {
//       const fd = new FormData();
//       fd.append("title", blogForm.title.trim()); fd.append("slug", blogForm.slug || slugify(blogForm.title)); fd.append("excerpt", blogForm.excerpt || ""); fd.append("content", blogForm.content || ""); fd.append("category", blogForm.category || "General"); fd.append("author", blogForm.author || "Admin"); fd.append("featured", String(blogForm.featured)); fd.append("publishedAt", blogForm.publishedAt || ""); fd.append("seo", JSON.stringify(blogForm.seo || createEmptySEO()));
//       if (blogImageFile) fd.append("image", blogImageFile);
//       const url = blogModal.editing ? `${API}/api/blogs/${blogModal.editing._id || blogModal.editing.id}` : `${API}/api/blogs`;
//       const res = await fetch(url, { method: blogModal.editing ? "PUT" : "POST", headers: authHeaders, body: fd });
//       const data = await res.json().catch(() => null);
//       if (!res.ok) { alert(data?.message || "Error saving blog"); return; }
//       closeBlogModal(); await loadBlogs();
//     } catch { alert("Backend/API error."); } finally { setSavingBlog(false); }
//   };

//   // ── Placement handlers ──
//   const openAddPlacement = () => { setPlacementForm(createEmptyPlacement()); setPlacementStudentImageFile(null); setPlacementCompanyLogoFile(null); setPlacementStudentPreviewUrl(null); setPlacementCompanyPreviewUrl(null); setPlacementModal({ open: true, editing: null }); };
//   const openEditPlacement = (p: Placement) => {
//     setPlacementForm({ studentName: p.studentName || "", studentImage: p.studentImage || null, companyName: p.companyName || "", companyLogo: p.companyLogo || null, role: p.role || "", isFeatured: Boolean(p.isFeatured), order: p.order || 0 });
//     setPlacementStudentImageFile(null); setPlacementCompanyLogoFile(null); setPlacementStudentPreviewUrl(p.studentImage ? getImageUrl(p.studentImage) : null); setPlacementCompanyPreviewUrl(p.companyLogo ? getImageUrl(p.companyLogo) : null); setPlacementModal({ open: true, editing: p });
//   };
//   const closePlacementModal = () => { setPlacementModal({ open: false, editing: null }); setPlacementStudentImageFile(null); setPlacementCompanyLogoFile(null); setPlacementStudentPreviewUrl(null); setPlacementCompanyPreviewUrl(null); };
//   const handleSavePlacement = async () => {
//     if (!placementForm.studentName?.trim()) { alert("Student name is required"); return; }
//     if (!placementForm.companyName?.trim()) { alert("Company name is required"); return; }
//     if (!placementModal.editing && !placementStudentImageFile) { alert("Student image is required"); return; }
//     setSavingPlacement(true);
//     try {
//       const fd = new FormData();
//       fd.append("studentName", placementForm.studentName.trim()); fd.append("companyName", placementForm.companyName.trim()); fd.append("role", placementForm.role?.trim() || ""); fd.append("isFeatured", String(placementForm.isFeatured)); fd.append("order", String(placementForm.order || 0));
//       if (placementStudentImageFile) fd.append("studentImage", placementStudentImageFile);
//       if (placementCompanyLogoFile) fd.append("companyLogo", placementCompanyLogoFile);
//       const url = placementModal.editing ? `${API}/api/placements/${placementModal.editing._id || placementModal.editing.id}` : `${API}/api/placements`;
//       const res = await fetch(url, { method: placementModal.editing ? "PUT" : "POST", headers: authHeaders, body: fd });
//       const d = await res.json();
//       if (!res.ok) { alert(d?.message || "Error saving placement"); return; }
//       closePlacementModal(); await loadPlacements();
//     } catch { alert("Error saving placement."); } finally { setSavingPlacement(false); }
//   };

//   // ── Tile handlers ──
//   const openAddTile = () => { setTileForm(createEmptyTile()); setTileImageFile(null); setTilePreviewUrl(null); setTileModal({ open: true, editing: null }); };
//   const openEditTile = (tile: Tile) => {
//     setTileForm({ courseName: tile.courseName || "", description: tile.description || "", price: tile.price || "", image: tile.image || null });
//     setTileImageFile(null); setTilePreviewUrl(tile.image ? getImageUrl(tile.image) : null); setTileModal({ open: true, editing: tile });
//   };
//   const closeTileModal = () => { setTileModal({ open: false, editing: null }); setTileImageFile(null); setTilePreviewUrl(null); };
//   const handleSaveTile = async () => {
//     if (!tileForm.courseName.trim() || !tileForm.price.trim() || !tileForm.description.trim()) { alert("All fields are required"); return; }
//     if (!tileModal.editing && !tileImageFile) { alert("Course image is required"); return; }
//     setSavingTile(true);
//     try {
//       const fd = new FormData();
//       fd.append("courseName", tileForm.courseName.trim()); fd.append("description", tileForm.description.trim()); fd.append("price", tileForm.price.trim());
//       if (tileImageFile) fd.append("image", tileImageFile);
//       const url = tileModal.editing ? `${API}/api/tiles/${tileModal.editing._id || tileModal.editing.id}` : `${API}/api/tiles`;
//       const res = await fetch(url, { method: tileModal.editing ? "PUT" : "POST", headers: { Authorization: `Bearer ${token}` }, body: fd });
//       const d = await res.json();
//       if (!res.ok) { alert(d?.message || "Error saving tile"); return; }
//       closeTileModal(); await loadTiles();
//     } catch { alert("Error saving tile"); } finally { setSavingTile(false); }
//   };

//   const handleDelete = async () => {
//     if (!deleteState.id || !deleteState.type) return;
//     try {
//       const endpointMap = { course: `${API}/api/courses/${deleteState.id}`, blog: `${API}/api/blogs/${deleteState.id}`, placement: `${API}/api/placements/${deleteState.id}`, tile: `${API}/api/tiles/${deleteState.id}` };
//       const res = await fetch(endpointMap[deleteState.type], { method: "DELETE", headers: authHeaders });
//       if (!res.ok) { const d = await res.json().catch(() => null); alert(d?.message || "Delete failed"); return; }
//       if (deleteState.type === "course") await loadCourses();
//       else if (deleteState.type === "blog") await loadBlogs();
//       else if (deleteState.type === "placement") await loadPlacements();
//       else await loadTiles();
//     } catch { alert("Delete failed."); } finally { setDeleteState({ type: null, id: null }); }
//   };

//   const filteredCourses = courses.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
//   const filteredBlogs = blogs.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));
//   const filteredPlacements = placements.filter((p) => p.studentName.toLowerCase().includes(search.toLowerCase()));
//   const filteredTiles = tiles.filter((t) => t.courseName.toLowerCase().includes(search.toLowerCase()));

//   const sidebarLinks = [
//     { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
//     { key: "courses", label: "Courses", icon: GraduationCap },
//     { key: "blogs", label: "Blogs", icon: FileText },
//     { key: "placements", label: "Placements", icon: BriefcaseBusiness },
//     { key: "tiles", label: "Tiles", icon: Grid3x3 },
//     { key: "admissions", label: "Admissions", icon: ClipboardList },
//     { key: "settings", label: "Settings", icon: Settings },
//   ] as const;

//   const statCards = [
//     { label: "Total Courses", value: courses.length, icon: <BookOpen size={18} />, color: "from-blue-500/10 to-blue-100 text-blue-700 border-blue-200" },
//     { label: "Total Blogs", value: blogs.length, icon: <FileText size={18} />, color: "from-indigo-500/10 to-indigo-100 text-indigo-700 border-indigo-200" },
//     { label: "Total Placements", value: placements.length, icon: <Trophy size={18} />, color: "from-emerald-500/10 to-emerald-100 text-emerald-700 border-emerald-200" },
//     { label: "Active Tiles", value: tiles.filter((t) => t.courseName).length, icon: <Grid3x3 size={18} />, color: "from-purple-500/10 to-purple-100 text-purple-700 border-purple-200" },
//   ];

//   const seoFields: { key: SEOKey; label: string; placeholder: string }[] = [
//     { key: "title", label: "Page Title", placeholder: "SEO page title" },
//     { key: "description", label: "Meta Description", placeholder: "Meta description" },
//     { key: "keywords", label: "Meta Keywords", placeholder: "course, training, delhi" },
//     { key: "ogTitle", label: "Open Graph Title", placeholder: "Social share title" },
//     { key: "ogDescription", label: "Open Graph Description", placeholder: "Social share description" },
//   ];

//   const sectionTitle: Record<Section, string> = {
//     dashboard: "Dashboard Overview",
//     courses: "Courses Management",
//     blogs: "Blogs Management",
//     placements: "Placements Management",
//     tiles: "Tiles Management",
//     admissions: "Admissions",
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">
//       <div className="flex min-h-screen">
//         {/* ── Desktop Sidebar ── */}
//         <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white/80 shadow-sm backdrop-blur-xl lg:flex">
//           <div className="border-b border-slate-100 px-6 py-6">
//             <div className="flex items-center gap-3">
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
//                 <BookOpen size={22} className="text-white" />
//               </div>
//               <div>
//                 <h1 className="text-lg font-bold text-slate-900">Lone Star Admin</h1>
//                 <p className="text-sm text-slate-500">Complete Management Panel</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex-1 px-4 py-6">
//             <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Main Menu</p>
//             <div className="space-y-1">
//               {sidebarLinks.map((item) => {
//                 const Icon = item.icon;
//                 const isActive = section === item.key;
//                 return (
//                   <button
//                     key={item.key}
//                     onClick={() => { if (item.key !== "settings") setSection(item.key as Section); }}
//                     className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${
//                       isActive
//                         ? item.key === "admissions"
//                           ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg"
//                           : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
//                         : "text-slate-600 hover:bg-slate-100"
//                     }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       <Icon size={18} />
//                       <span>{item.label}</span>
//                     </div>
//                     <ChevronRight size={16} className={isActive ? "text-white" : "text-slate-400"} />
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="border-t border-slate-100 p-4">
//             <button onClick={onLogout} className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100">
//               <LogOut size={16} /> Logout
//             </button>
//           </div>
//         </aside>

//         {/* ── Mobile Sidebar ── */}
//         <AnimatePresence>
//           {mobileSidebarOpen && (
//             <>
//               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileSidebarOpen(false)} className="fixed inset-0 z-40 bg-black/40 lg:hidden" />
//               <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} transition={{ type: "spring", damping: 24, stiffness: 220 }} className="fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-white shadow-2xl lg:hidden">
//                 <div className="flex items-center justify-between border-b px-5 py-5">
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600"><BookOpen size={20} className="text-white" /></div>
//                     <div><h2 className="font-bold text-slate-900">Lone Star Admin</h2><p className="text-xs text-slate-500">Complete Panel</p></div>
//                   </div>
//                   <button onClick={() => setMobileSidebarOpen(false)} className="rounded-xl p-2 hover:bg-slate-100"><X size={20} /></button>
//                 </div>
//                 <div className="flex-1 space-y-1 px-4 py-6">
//                   {sidebarLinks.map((item) => {
//                     const Icon = item.icon;
//                     const isActive = section === item.key;
//                     return (
//                       <button key={item.key} onClick={() => { if (item.key !== "settings") { setSection(item.key as Section); setMobileSidebarOpen(false); } }}
//                         className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100"}`}>
//                         <Icon size={18} /> {item.label}
//                       </button>
//                     );
//                   })}
//                 </div>
//                 <div className="border-t p-4">
//                   <button onClick={onLogout} className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600"><LogOut size={16} /> Logout</button>
//                 </div>
//               </motion.aside>
//             </>
//           )}
//         </AnimatePresence>

//         {/* ── Main Content ── */}
//         <div className="flex-1 min-w-0">
//           <header className="sticky top-0 z-30 border-b border-white/20 bg-white/80 shadow-sm backdrop-blur-xl">
//             <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//               <div className="flex items-center gap-3">
//                 <button onClick={() => setMobileSidebarOpen(true)} className="rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm lg:hidden"><Menu size={20} /></button>
//                 <div>
//                   <h2 className="text-lg font-bold text-slate-900">{sectionTitle[section]}</h2>
//                   <p className="text-sm text-slate-500">Manage your content smoothly</p>
//                 </div>
//               </div>
//               {section !== "admissions" && (
//                 <button
//                   onClick={() => setSection("admissions")}
//                   className="hidden sm:flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100 transition"
//                 >
//                   <ClipboardList size={14} />
//                   Admissions
//                 </button>
//               )}
//             </div>
//           </header>

//           <main className="px-4 py-6 sm:px-6 lg:px-8">

//             {/* ── Admissions Section ── */}
//             {section === "admissions" && <AdmissionsSection />}

//             {/* ── Dashboard ── */}
//             {section === "dashboard" && (
//               <>
//                 <div className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-6 text-white shadow-xl">
//                   <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//                     <div>
//                       <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-blue-200">Admin Dashboard</p>
//                       <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Manage everything in one smart panel</h2>
//                       <p className="mt-2 max-w-2xl text-sm text-blue-100 md:text-base">Add courses, publish blogs, manage placements, configure tiles, upload images, and handle SEO fields from the same dashboard.</p>
//                     </div>
//                     <div className="flex flex-wrap gap-3">
//                       <button onClick={openAddCourse} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02]"><Plus size={18} /> Add Course</button>
//                       <button onClick={openAddBlog} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"><Plus size={18} /> Add Blog</button>
//                       <button onClick={openAddPlacement} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"><Plus size={18} /> Add Placement</button>
//                       <button onClick={openAddTile} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-purple-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"><Plus size={18} /> Add Tile</button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mb-8 grid grid-cols-2 gap-4 xl:grid-cols-4">
//                   {statCards.map((stat) => (
//                     <div key={stat.label} className={`rounded-3xl border bg-gradient-to-br ${stat.color} p-5 shadow-sm`}>
//                       <div className="mb-4 flex items-center justify-between"><div className="rounded-2xl bg-white/80 p-3 shadow-sm">{stat.icon}</div><span className="text-3xl font-bold">{stat.value}</span></div>
//                       <p className="text-sm font-medium opacity-90">{stat.label}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="grid gap-6 xl:grid-cols-4">
//                   {[
//                     { title: "Recent Courses", items: courses.slice(0, 5), icon: <BookOpen size={18} className="text-blue-600" />, bg: "bg-blue-50", sub: (c: any) => c.category },
//                     { title: "Recent Blogs", items: blogs.slice(0, 5), icon: <FileText size={18} className="text-indigo-600" />, bg: "bg-indigo-50", sub: (b: any) => `${b.category} • ${b.author || "Admin"}` },
//                     { title: "Recent Placements", items: placements.slice(0, 5), icon: <User size={18} className="text-emerald-600" />, bg: "bg-emerald-50", sub: (p: any) => `${p.companyName} • ${p.role}` },
//                     { title: "Active Tiles", items: tiles.filter((t) => t.courseName).slice(0, 5), icon: <Grid3x3 size={18} className="text-purple-600" />, bg: "bg-purple-50", sub: (t: any) => t.price },
//                   ].map((col) => (
//                     <div key={col.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
//                       <h3 className="mb-4 text-lg font-bold text-slate-900">{col.title}</h3>
//                       <div className="space-y-4">
//                         {col.items.map((item: any) => (
//                           <div key={item._id || item.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3">
//                             <div className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl ${col.bg}`}>
//                               {item.image || item.studentImage ? <img src={getImageUrl(item.image || item.studentImage)} className="h-full w-full object-cover" alt="" /> : col.icon}
//                             </div>
//                             <div className="min-w-0 flex-1">
//                               <p className="truncate font-semibold text-slate-900">{item.name || item.title || item.studentName || item.courseName}</p>
//                               <p className="text-xs text-slate-500">{col.sub(item)}</p>
//                             </div>
//                           </div>
//                         ))}
//                         {col.items.length === 0 && <p className="text-sm text-slate-500">No items available.</p>}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}

//             {/* ── Search bar (non-dashboard, non-admissions) ── */}
//             {section !== "dashboard" && section !== "admissions" && (
//               <div className="mb-6 flex flex-col gap-4 md:flex-row">
//                 <div className="relative flex-1">
//                   <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
//                   <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={`Search ${section}...`} className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" />
//                 </div>
//                 {section === "courses" && <button onClick={openAddCourse} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Course</button>}
//                 {section === "blogs" && <button onClick={openAddBlog} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Blog</button>}
//                 {section === "placements" && <button onClick={openAddPlacement} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Placement</button>}
//                 {section === "tiles" && <button onClick={openAddTile} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Tile</button>}
//               </div>
//             )}

//             {/* ── Courses Table ── */}
//             {section === "courses" && (
//               <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
//                 <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4"><h3 className="text-lg font-bold text-slate-900">Courses List</h3><p className="text-sm text-slate-500">View and manage all available courses</p></div>
//                 {loadingCourses ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
//                   <div className="overflow-x-auto">
//                     <table className="w-full min-w-[900px]">
//                       <thead className="bg-slate-50/80"><tr>{["Course", "Category", "Price", "Duration", "Featured", "FAQs Count", "Actions"].map((h) => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
//                       <tbody className="divide-y divide-slate-100">
//                         {filteredCourses.map((course) => (
//                           <tr key={course.id} className="transition hover:bg-blue-50/40">
//                             <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 shadow-sm">{course.image ? <img src={getImageUrl(course.image)} className="h-full w-full object-cover" alt={course.name} /> : <BookOpen size={18} className="text-blue-600" />}</div><p className="font-semibold text-slate-900">{course.name}</p></div></td>
//                             <td className="px-5 py-4"><span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{course.category}</span></td>
//                             <td className="px-5 py-4 text-sm font-semibold text-slate-700">{course.price || "—"}</td>
//                             <td className="px-5 py-4 text-sm text-slate-600">{course.duration || "—"}</td>
//                             <td className="px-5 py-4">{course.featured ? <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700"><Star size={14} className="fill-yellow-400 text-yellow-500" /> Featured</div> : <span className="text-sm text-slate-300">—</span>}</td>
//                             <td className="px-5 py-4"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{course.faqs?.length || 0} FAQs</span></td>
//                             <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditCourse(course)} className="rounded-xl border border-blue-100 bg-blue-50 p-2.5 text-blue-600"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "course", id: course._id || course.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500"><Trash2 size={15} /></button></div></td>
//                           </tr>
//                         ))}
//                         {filteredCourses.length === 0 && <tr><td colSpan={7} className="px-6 py-16 text-center"><p className="text-lg font-semibold text-slate-700">No courses found</p></td></tr>}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* ── Blogs Table ── */}
//             {section === "blogs" && (
//               <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
//                 <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4"><h3 className="text-lg font-bold text-slate-900">Blogs List</h3></div>
//                 {loadingBlogs ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
//                   <div className="overflow-x-auto">
//                     <table className="w-full min-w-[1100px]">
//                       <thead className="bg-slate-50/80"><tr>{["Blog", "Category", "Author", "Published", "Featured", "Actions"].map((h) => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
//                       <tbody className="divide-y divide-slate-100">
//                         {filteredBlogs.map((blog) => (
//                           <tr key={blog.id} className="transition hover:bg-indigo-50/40">
//                             <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-sm">{blog.image ? <img src={getImageUrl(blog.image)} className="h-full w-full object-cover" alt={blog.title} /> : <FileText size={18} className="text-indigo-600" />}</div><p className="font-semibold text-slate-900">{blog.title}</p></div></td>
//                             <td className="px-5 py-4"><span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">{blog.category}</span></td>
//                             <td className="px-5 py-4 text-sm text-slate-700">{blog.author || "Admin"}</td>
//                             <td className="px-5 py-4 text-sm text-slate-600">{blog.publishedAt || "—"}</td>
//                             <td className="px-5 py-4">{blog.featured ? <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700"><Star size={14} className="fill-yellow-400 text-yellow-500" /> Featured</div> : <span className="text-sm text-slate-300">—</span>}</td>
//                             <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditBlog(blog)} className="rounded-xl border border-indigo-100 bg-indigo-50 p-2.5 text-indigo-600"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "blog", id: blog._id || blog.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500"><Trash2 size={15} /></button></div></td>
//                           </tr>
//                         ))}
//                         {filteredBlogs.length === 0 && <tr><td colSpan={6} className="px-6 py-16 text-center"><p className="text-lg font-semibold text-slate-700">No blogs found</p></td></tr>}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* ── Placements Table ── */}
//             {section === "placements" && (
//               <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
//                 <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4"><h3 className="text-lg font-bold text-slate-900">Placements List</h3></div>
//                 {loadingPlacements ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
//                   <div className="overflow-x-auto">
//                     <table className="w-full min-w-[1000px]">
//                       <thead className="bg-slate-50/80"><tr>{["Student", "Company", "Role", "Featured", "Order", "Actions"].map((h) => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
//                       <tbody className="divide-y divide-slate-100">
//                         {filteredPlacements.map((p) => (
//                           <tr key={p.id} className="transition hover:bg-emerald-50/40">
//                             <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 shadow-sm">{p.studentImage ? <img src={getImageUrl(p.studentImage)} className="h-full w-full object-cover" alt={p.studentName} /> : <User size={18} className="text-emerald-600" />}</div><p className="font-semibold text-slate-900">{p.studentName}</p></div></td>
//                             <td className="px-5 py-4"><div className="flex items-center gap-2">{p.companyLogo && <img src={getImageUrl(p.companyLogo)} className="h-6 w-6 rounded object-contain" alt={p.companyName} />}<span className="font-medium text-slate-700">{p.companyName}</span></div></td>
//                             <td className="px-5 py-4 text-sm text-slate-600">{p.role || "—"}</td>
//                             <td className="px-5 py-4">{p.isFeatured ? <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700"><Star size={14} className="fill-yellow-400 text-yellow-500" /> Featured</div> : <span className="text-sm text-slate-300">—</span>}</td>
//                             <td className="px-5 py-4 text-sm text-slate-600">{p.order || 0}</td>
//                             <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditPlacement(p)} className="rounded-xl border border-emerald-100 bg-emerald-50 p-2.5 text-emerald-600"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "placement", id: p._id || p.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500"><Trash2 size={15} /></button></div></td>
//                           </tr>
//                         ))}
//                         {filteredPlacements.length === 0 && <tr><td colSpan={6} className="px-6 py-16 text-center"><p className="text-lg font-semibold text-slate-700">No placements found</p></td></tr>}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* ── Tiles Table ── */}
//             {section === "tiles" && (
//               <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
//                 <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4 flex justify-between items-center">
//                   <div><h3 className="text-lg font-bold text-slate-900">Course Tiles List</h3><p className="text-sm text-slate-500">View and manage all course tiles displayed on website</p></div>
//                   <button onClick={openAddTile} className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg"><Plus size={16} /> Add Course Tile</button>
//                 </div>
//                 {loadingTiles ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
//                   <div className="overflow-x-auto">
//                     <table className="w-full min-w-[900px]">
//                       <thead className="bg-slate-50/80"><tr>{["Course", "Description", "Price", "Image", "Actions"].map((h) => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
//                       <tbody className="divide-y divide-slate-100">
//                         {filteredTiles.map((tile) => (
//                           <tr key={tile.id} className="transition hover:bg-orange-50/40">
//                             <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 shadow-sm">{tile.image ? <img src={getImageUrl(tile.image)} className="h-full w-full object-cover" alt={tile.courseName} /> : <BookOpen size={18} className="text-orange-600" />}</div><p className="font-semibold text-slate-900">{tile.courseName}</p></div></td>
//                             <td className="px-5 py-4 text-sm text-slate-600 max-w-[300px]"><div className="truncate">{tile.description || "—"}</div></td>
//                             <td className="px-5 py-4"><span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">{tile.price || "—"}</span></td>
//                             <td className="px-5 py-4">{tile.image ? <span className="text-xs text-green-600">✓ Uploaded</span> : <span className="text-xs text-red-500">No image</span>}</td>
//                             <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditTile(tile)} className="rounded-xl border border-orange-100 bg-orange-50 p-2.5 text-orange-600 transition hover:bg-orange-100"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "tile", id: tile._id || tile.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500 transition hover:bg-red-100"><Trash2 size={15} /></button></div></td>
//                           </tr>
//                         ))}
//                         {filteredTiles.length === 0 && <tr><td colSpan={5} className="px-6 py-16 text-center"><p className="text-lg font-semibold text-slate-700">No tiles found</p></td></tr>}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>
//             )}
//           </main>
//         </div>
//       </div>

//       {/* ── Course Modal ── */}
//       <AnimatePresence>
//         {courseModal.open && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
//             <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
//               <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{courseModal.editing ? "Edit Course" : "Add New Course"}</h2><p className="text-sm text-slate-500">Update course details and SEO settings</p></div><button onClick={closeCourseModal} className="rounded-xl p-2 text-slate-500"><X size={20} /></button></div>
//               <div className="flex gap-2 border-b border-slate-100 bg-white px-6 pt-4">{(["basic", "faqs", "seo"] as const).map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-t-2xl px-5 py-3 text-sm font-semibold capitalize transition ${activeTab === tab ? "bg-blue-600 text-white shadow-md" : "text-slate-500 hover:bg-slate-100"}`}>{tab === "seo" ? "SEO & Meta Tags" : tab === "faqs" ? "FAQs" : "Basic Info"}</button>))}</div>
//               <div className="p-6">
//                 {activeTab === "basic" && (
//                   <div className="space-y-5">
//                     <div className="grid gap-4 sm:grid-cols-2">
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Course Name *</label><input value={courseForm.name} onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Custom Slug</label><input value={courseForm.slug} onChange={(e) => setCourseForm({ ...courseForm, slug: e.target.value })} placeholder="e.g. data-science-delhi" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Category</label><select value={courseForm.category} onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"><option>Analytics</option><option>AI/ML</option><option>Marketing</option><option>Cloud</option><option>Development</option><option>Design</option></select></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Price</label><input value={courseForm.price} onChange={(e) => setCourseForm({ ...courseForm, price: e.target.value })} placeholder="e.g. ₹35,000" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Duration</label><input value={courseForm.duration} onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })} placeholder="e.g. 60 Days" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
//                     </div>
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Description</label><textarea rows={4} value={courseForm.description} onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
//                     <div><label className="mb-2 block text-sm font-semibold text-slate-700">Course Image</label><div onClick={() => courseFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-blue-400 hover:bg-blue-50">{coursePreviewUrl ? <img src={coursePreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-blue-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload course image</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={courseFileRef} type="file" accept="image/*" onChange={handleCourseImageChange} className="hidden" /></div>
//                     <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><button type="button" onClick={() => setCourseForm({ ...courseForm, featured: !courseForm.featured })} className="flex items-center gap-3 text-sm font-semibold text-slate-700">{courseForm.featured ? <ToggleRight size={28} className="text-blue-600" /> : <ToggleLeft size={28} className="text-slate-400" />}<span>{courseForm.featured ? "Featured Course" : "Not Featured"}</span></button></div>
//                   </div>
//                 )}
//                 {activeTab === "faqs" && (
//                   <div className="space-y-4">
//                     <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">Add frequently asked questions that will appear on the course page.</div>
//                     {courseForm?.faqs?.map((faq, index) => (
//                       <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
//                         <div className="flex items-center justify-between"><span className="text-sm font-semibold text-slate-600">FAQ #{index + 1}</span><button type="button" onClick={() => setCourseForm({ ...courseForm, faqs: courseForm.faqs.filter((_, i) => i !== index) })} className="rounded-xl bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 hover:bg-red-100 transition">Delete</button></div>
//                         <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Question</label><input value={faq.question} onChange={(e) => { const u = [...courseForm.faqs]; u[index] = { ...u[index], question: e.target.value }; setCourseForm({ ...courseForm, faqs: u }); }} placeholder="e.g. Is this course beginner friendly?" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
//                         <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Answer</label><textarea rows={3} value={faq.answer} onChange={(e) => { const u = [...courseForm.faqs]; u[index] = { ...u[index], answer: e.target.value }; setCourseForm({ ...courseForm, faqs: u }); }} placeholder="Write a clear, helpful answer..." className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
//                       </div>
//                     ))}
//                     <button type="button" onClick={() => setCourseForm({ ...courseForm, faqs: [...courseForm.faqs, { question: "", answer: "" }] })} className="w-full rounded-2xl border-2 border-dashed border-blue-300 bg-white py-4 text-sm font-semibold text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition">+ Add FAQ</button>
//                   </div>
//                 )}
//                 {activeTab === "seo" && (
//                   <div className="space-y-4">
//                     <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">SEO fields help your course pages rank better on Google.</div>
//                     {seoFields.map(({ key, label, placeholder }) => (<div key={key}><label className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>{key.toLowerCase().includes("description") ? <textarea rows={3} value={courseForm.seo[key]} onChange={(e) => setCourseForm({ ...courseForm, seo: { ...courseForm.seo, [key]: e.target.value } })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" placeholder={placeholder} /> : <input value={courseForm.seo[key]} onChange={(e) => setCourseForm({ ...courseForm, seo: { ...courseForm.seo, [key]: e.target.value } })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" placeholder={placeholder} />}</div>))}
//                   </div>
//                 )}
//               </div>
//               <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closeCourseModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleSaveCourse} disabled={savingCourse || !courseForm.name.trim()} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg disabled:opacity-50"><Save size={16} />{savingCourse ? "Saving..." : courseModal.editing ? "Update Course" : "Add Course"}</button></div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ── Blog Modal ── */}
//       <AnimatePresence>
//         {blogModal.open && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
//             <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
//               <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-indigo-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{blogModal.editing ? "Edit Blog" : "Add New Blog"}</h2></div><button onClick={closeBlogModal} className="rounded-xl p-2 text-slate-500"><X size={20} /></button></div>
//               <div className="flex gap-2 border-b border-slate-100 bg-white px-6 pt-4">{(["basic", "seo"] as const).map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-t-2xl px-5 py-3 text-sm font-semibold capitalize transition ${activeTab === tab ? "bg-indigo-600 text-white shadow-md" : "text-slate-500 hover:bg-slate-100"}`}>{tab === "seo" ? "SEO & Meta Tags" : "Basic Info"}</button>))}</div>
//               <div className="p-6">
//                 {activeTab === "basic" && (
//                   <div className="space-y-5">
//                     <div className="grid gap-4 sm:grid-cols-2">
//                       <div className="sm:col-span-2"><label className="mb-1.5 block text-sm font-semibold text-slate-700">Blog Title *</label><input value={blogForm.title} onChange={(e) => { const v = e.target.value; setBlogForm({ ...blogForm, title: v, slug: blogModal.editing ? blogForm.slug : slugify(v) }); }} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Slug *</label><input value={blogForm.slug} onChange={(e) => setBlogForm({ ...blogForm, slug: slugify(e.target.value) })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Category</label><select value={blogForm.category} onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"><option>General</option><option>Data Science</option><option>Data Analytics</option><option>Business Analytics</option><option>Digital Marketing</option><option>Cloud Computing</option><option>Career Tips</option></select></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Author</label><div className="relative"><User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={blogForm.author} onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })} placeholder="Admin" className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Publish Date</label><div className="relative"><CalendarDays size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input type="date" value={blogForm.publishedAt} onChange={(e) => setBlogForm({ ...blogForm, publishedAt: e.target.value })} className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div></div>
//                     </div>
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Short Excerpt</label><textarea rows={3} value={blogForm.excerpt} onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Blog Content *</label><textarea rows={10} value={blogForm.content} onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
//                     <div><label className="mb-2 block text-sm font-semibold text-slate-700">Blog Image</label><div onClick={() => blogFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-indigo-400 hover:bg-indigo-50">{blogPreviewUrl ? <img src={blogPreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-indigo-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload blog image</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={blogFileRef} type="file" accept="image/*" onChange={handleBlogImageChange} className="hidden" /></div>
//                     <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><button type="button" onClick={() => setBlogForm({ ...blogForm, featured: !blogForm.featured })} className="flex items-center gap-3 text-sm font-semibold text-slate-700">{blogForm.featured ? <ToggleRight size={28} className="text-indigo-600" /> : <ToggleLeft size={28} className="text-slate-400" />}<span>{blogForm.featured ? "Featured Blog" : "Not Featured"}</span></button></div>
//                   </div>
//                 )}
//                 {activeTab === "seo" && (
//                   <div className="space-y-4">
//                     <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-700">SEO fields help your blog pages rank better on Google.</div>
//                     {seoFields.map(({ key, label, placeholder }) => (<div key={key}><label className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>{key.toLowerCase().includes("description") ? <textarea rows={3} value={blogForm.seo[key]} onChange={(e) => setBlogForm({ ...blogForm, seo: { ...blogForm.seo, [key]: e.target.value } })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" placeholder={placeholder} /> : <input value={blogForm.seo[key]} onChange={(e) => setBlogForm({ ...blogForm, seo: { ...blogForm.seo, [key]: e.target.value } })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" placeholder={placeholder} />}</div>))}
//                   </div>
//                 )}
//               </div>
//               <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closeBlogModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleSaveBlog} disabled={savingBlog || !blogForm.title.trim() || !blogForm.content.trim()} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-semibold text-white shadow-lg disabled:opacity-50"><Save size={16} />{savingBlog ? "Saving..." : blogModal.editing ? "Update Blog" : "Add Blog"}</button></div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ── Placement Modal ── */}
//       <AnimatePresence>
//         {placementModal.open && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
//             <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
//               <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-emerald-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{placementModal.editing ? "Edit Placement" : "Add New Placement"}</h2></div><button onClick={closePlacementModal} className="rounded-xl p-2 text-slate-500"><X size={20} /></button></div>
//               <div className="p-6 space-y-5">
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Student Name *</label><div className="relative"><User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={placementForm.studentName} onChange={(e) => setPlacementForm({ ...placementForm, studentName: e.target.value })} placeholder="e.g. John Doe" className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div></div>
//                   <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Company Name *</label><div className="relative"><Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={placementForm.companyName} onChange={(e) => setPlacementForm({ ...placementForm, companyName: e.target.value })} placeholder="e.g. Google, Amazon" className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div></div>
//                   <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Role / Position</label><input value={placementForm.role} onChange={(e) => setPlacementForm({ ...placementForm, role: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div>
//                   <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Display Order</label><input type="number" value={placementForm.order} onChange={(e) => setPlacementForm({ ...placementForm, order: parseInt(e.target.value) || 0 })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div>
//                 </div>
//                 <div><label className="mb-2 block text-sm font-semibold text-slate-700">Student Image *</label><div onClick={() => placementStudentFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-emerald-400 hover:bg-emerald-50">{placementStudentPreviewUrl ? <img src={placementStudentPreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Student" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-emerald-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload student image</p></div></div><input ref={placementStudentFileRef} type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f && f.type.startsWith("image/")) { setPlacementStudentImageFile(f); setPlacementStudentPreviewUrl(URL.createObjectURL(f)); } }} className="hidden" /></div>
//                 <div><label className="mb-2 block text-sm font-semibold text-slate-700">Company Logo (Optional)</label><div onClick={() => placementCompanyFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-emerald-400 hover:bg-emerald-50">{placementCompanyPreviewUrl ? <img src={placementCompanyPreviewUrl} className="h-24 w-24 rounded-2xl object-contain bg-white p-2 shadow-sm" alt="Logo" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Building2 size={28} className="text-slate-400 group-hover:text-emerald-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload company logo</p></div></div><input ref={placementCompanyFileRef} type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f && f.type.startsWith("image/")) { setPlacementCompanyLogoFile(f); setPlacementCompanyPreviewUrl(URL.createObjectURL(f)); } }} className="hidden" /></div>
//                 <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><button type="button" onClick={() => setPlacementForm({ ...placementForm, isFeatured: !placementForm.isFeatured })} className="flex items-center gap-3 text-sm font-semibold text-slate-700">{placementForm.isFeatured ? <ToggleRight size={28} className="text-emerald-600" /> : <ToggleLeft size={28} className="text-slate-400" />}<span>{placementForm.isFeatured ? "Featured Placement" : "Not Featured"}</span></button></div>
//               </div>
//               <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closePlacementModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleSavePlacement} disabled={savingPlacement || !placementForm.studentName.trim() || !placementForm.companyName.trim() || (!placementStudentImageFile && !placementModal.editing)} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 font-semibold text-white shadow-lg disabled:opacity-50"><Save size={16} />{savingPlacement ? "Saving..." : placementModal.editing ? "Update Placement" : "Add Placement"}</button></div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ── Tile Modal ── */}
//       <AnimatePresence>
//         {tileModal.open && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
//             <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
//               <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-orange-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{tileModal.editing ? "Edit Course Tile" : "Add New Course Tile"}</h2></div><button onClick={closeTileModal} className="rounded-xl p-2 text-slate-500 transition hover:bg-white hover:text-slate-800"><X size={20} /></button></div>
//               <div className="p-6 space-y-5">
//                 <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Course Name *</label><input value={tileForm.courseName} onChange={(e) => setTileForm({ ...tileForm, courseName: e.target.value })} placeholder="e.g. Data Science Course" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100" /></div>
//                 <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Price *</label><input value={tileForm.price} onChange={(e) => setTileForm({ ...tileForm, price: e.target.value })} placeholder="e.g. ₹35,000 or Free" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100" /></div>
//                 <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Description *</label><textarea rows={4} value={tileForm.description} onChange={(e) => setTileForm({ ...tileForm, description: e.target.value })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100" /></div>
//                 <div><label className="mb-2 block text-sm font-semibold text-slate-700">Course Image *</label><div onClick={() => tileFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-orange-400 hover:bg-orange-50">{tilePreviewUrl ? <img src={tilePreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-orange-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload course image</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={tileFileRef} type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f && f.type.startsWith("image/")) { setTileImageFile(f); setTilePreviewUrl(URL.createObjectURL(f)); } }} className="hidden" /></div>
//               </div>
//               <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closeTileModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition hover:bg-slate-100">Cancel</button><button onClick={handleSaveTile} disabled={savingTile || !tileForm.courseName.trim() || !tileForm.price.trim() || (!tileImageFile && !tileModal.editing)} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"><Save size={16} />{savingTile ? "Saving..." : tileModal.editing ? "Update Course Tile" : "Add Course Tile"}</button></div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ── Delete Modal ── */}
//       <AnimatePresence>
//         {deleteState.id && deleteState.type && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
//             <motion.div initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }} className="w-full max-w-sm rounded-[28px] bg-white p-6 shadow-2xl">
//               <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100"><Trash2 size={24} className="text-red-500" /></div>
//               <h3 className="text-center text-xl font-bold text-slate-900">Delete {deleteState.type === "course" ? "Course" : deleteState.type === "blog" ? "Blog" : deleteState.type === "placement" ? "Placement" : "Tile"}?</h3>
//               <p className="mt-2 text-center text-sm text-slate-500">This action cannot be undone. The selected item will be removed permanently.</p>
//               <div className="mt-6 flex gap-3"><button onClick={() => setDeleteState({ type: null, id: null })} className="flex-1 rounded-2xl border border-slate-300 py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleDelete} className="flex-1 rounded-2xl bg-red-600 py-3 font-semibold text-white">Delete</button></div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BASE_URL } from "../../../utils/baseUrl";
import {
  Plus,
  Edit2,
  Trash2,
  LogOut,
  BookOpen,
  Upload,
  X,
  Save,
  Search,
  Star,
  ToggleLeft,
  ToggleRight,
  LayoutDashboard,
  GraduationCap,
  Settings,
  Menu,
  ChevronRight,
  FileText,
  CalendarDays,
  User,
  BriefcaseBusiness,
  Building2,
  Trophy,
  Grid3x3,
  ClipboardList,
  MessageCircle,
  Youtube,
  Eye,
} from "lucide-react";

const API = BASE_URL;

// ─── Interfaces ───────────────────────────────────────────────────────────────

interface FAQ {
  question: string;
  answer: string;
}

interface SEO {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
}

interface Tile {
  id?: string;
  _id?: string;
  courseName: string;
  description: string;
  price: string;
  image: string | null;
}

interface Course {
  id?: string;
  _id?: string;
  name: string;
  slug: string;
  price: string;
  duration: string;
  description: string;
  category: string;
  image: string | null;
  featured: boolean;
  faqs: FAQ[];
  seo: SEO;
}

interface Blog {
  id?: string;
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  image: string | null;
  featured: boolean;
  publishedAt: string;
  seo: SEO;
}

interface Placement {
  id?: string;
  _id?: string;
  studentName: string;
  studentImage: string | null;
  companyName: string;
  companyLogo: string | null;
  role: string;
  isFeatured: boolean;
  order: number;
}

interface Testimonial {
  id?: string;
  _id?: string;
  title: string;
  description: string;
  youtubeUrl: string;
  isActive: boolean;
  sortOrder: number;
  createdAt?: string;
  updatedAt?: string;
}

interface Admission {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  branch: string;
  course: string;
  dob: string;
  address: string;
  country: string;
  message: string;
  idProof: { public_id: string; secure_url: string };
  photo: { public_id: string; secure_url: string };
  createdAt: { $date: string } | string;
  updatedAt: { $date: string } | string;
  __v?: number;
}

type Section = "dashboard" | "courses" | "blogs" | "placements" | "tiles" | "admissions" | "testimonials";
type Tab = "basic" | "seo" | "faqs";
type SEOKey = keyof SEO;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const createEmptySEO = (): SEO => ({
  title: "",
  description: "",
  keywords: "",
  ogTitle: "",
  ogDescription: "",
});

const createEmptyCourse = (): Omit<Course, "id"> => ({
  name: "",
  slug: "",
  price: "",
  duration: "",
  description: "",
  category: "Analytics",
  image: null,
  featured: false,
  faqs: [],
  seo: createEmptySEO(),
});

const createEmptyBlog = (): Omit<Blog, "id"> => ({
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "General",
  author: "",
  image: null,
  featured: false,
  publishedAt: "",
  seo: createEmptySEO(),
});

const createEmptyPlacement = (): Omit<Placement, "id"> => ({
  studentName: "",
  studentImage: null,
  companyName: "",
  companyLogo: null,
  role: "",
  isFeatured: false,
  order: 0,
});

const createEmptyTile = (): Omit<Tile, "id"> => ({
  courseName: "",
  description: "",
  price: "",
  image: null,
});

const createEmptyTestimonial = (): Omit<Testimonial, "id"> => ({
  title: "",
  description: "",
  youtubeUrl: "",
  isActive: true,
  sortOrder: 0,
});

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
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

// Helper to extract YouTube embed URL
// function getYouTubeEmbedUrl(url: string) {
//   if (!url) return "";
//   const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
//   const match = url.match(regExp);
//   return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : url;
// }
// Helper to extract YouTube embed URL - YEH FIXED VERSION HAI
function getYouTubeEmbedUrl(url: string) {
  if (!url) return "";
  
  // Agar already embed URL hai to wahi return karo
  if (url.includes("/embed/")) return url;
  
  // YouTube shorts handle karna
  if (url.includes("/shorts/")) {
    const shortsId = url.split("/shorts/")[1]?.split("?")[0]?.split("/")[0];
    if (shortsId) return `https://www.youtube.com/embed/${shortsId}`;
  }
  
  // Regular YouTube URLs handle karna
  let videoId = "";
  
  // Case 1: youtu.be/xxxxx
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0]?.split("&")[0] || "";
  }
  // Case 2: youtube.com/watch?v=xxxxx
  else if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    videoId = urlParams.get("v") || "";
  }
  // Case 3: youtube.com/embed/xxxxx
  else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("/embed/")[1]?.split("?")[0] || "";
  }
  // Case 4: youtube.com/v/xxxxx
  else if (url.includes("youtube.com/v/")) {
    videoId = url.split("/v/")[1]?.split("?")[0] || "";
  }
  
  // Agar videoId mil gaya to embed URL banao, nahi to original URL return karo
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}
// ─── Admission Drawer ─────────────────────────────────────────────────────────

function AdmissionDrawer({
  admission,
  onClose,
}: {
  admission: Admission;
  onClose: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="fixed inset-0 z-[60] flex">
      <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="w-full max-w-lg bg-white h-full overflow-y-auto shadow-2xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
          <h2 className="text-slate-800 font-semibold text-base">Admission Detail</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-500 transition"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-6">
          {/* Profile */}
          <div className="flex items-center gap-4">
            {!imgError ? (
              <img
                src={admission.photo?.secure_url}
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
              <p className="text-slate-900 font-semibold text-lg leading-tight">{admission.name}</p>
              <p className="text-slate-500 text-sm">{admission.email}</p>
              <p className="text-slate-400 text-xs mt-0.5">Applied {formatDate(admission.createdAt)}</p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Phone", value: admission.phone },
              { label: "Branch", value: admission.branch },
              { label: "Course", value: admission.course },
              { label: "Country", value: admission.country },
              { label: "Date of Birth", value: formatDOB(admission.dob), full: true },
              { label: "Address", value: admission.address, full: true },
            ].map((item) => (
              <div
                key={item.label}
                className={`bg-slate-50 rounded-xl p-3 ${item.full ? "col-span-2" : ""}`}
              >
                <p className="text-slate-400 text-xs mb-0.5">{item.label}</p>
                <p className="text-slate-800 text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Message */}
          {admission.message && (
            <div className="bg-slate-50 rounded-xl p-3">
              <p className="text-slate-400 text-xs mb-1">Message</p>
              <p className="text-slate-700 text-sm leading-relaxed">{admission.message}</p>
            </div>
          )}

          {/* ID Proof */}
          <div>
            <p className="text-slate-500 text-xs font-medium mb-2 uppercase tracking-wide">ID Proof</p>
            <a
              href={admission.idProof?.secure_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl border border-slate-200 hover:border-indigo-300 transition"
            >
              <img
                src={admission.idProof?.secure_url}
                alt="ID Proof"
                className="w-full max-h-48 object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
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

// ─── Admissions Section ───────────────────────────────────────────────────────

function AdmissionsSection() {
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [selected, setSelected] = useState<Admission | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const PER_PAGE = 10;

  useEffect(() => {
    fetch(`${API}/api/admission`)
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

  const courses = ["All", ...Array.from(new Set(admissions.map((a) => a.course)))];

  const filtered = admissions.filter((a) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      a.name.toLowerCase().includes(q) ||
      a.email.toLowerCase().includes(q) ||
      a.course.toLowerCase().includes(q) ||
      a.branch.toLowerCase().includes(q) ||
      a.phone.includes(q);
    const matchCourse = courseFilter === "All" || a.course === courseFilter;
    return matchSearch && matchCourse;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const todayCount = admissions.filter(
    (a) =>
      new Date(typeof a.createdAt === "string" ? a.createdAt : a.createdAt.$date).toDateString() ===
      new Date().toDateString()
  ).length;

  return (
    <>
      {/* Stats */}
      {!loading && !error && (
        <div className="mb-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
          {[
            { label: "Total Applications", value: admissions.length, color: "from-indigo-500/10 to-indigo-100 text-indigo-700 border-indigo-200" },
            { label: "Pending Review", value: admissions.length, color: "from-amber-500/10 to-amber-100 text-amber-700 border-amber-200" },
            { label: "Courses Applied", value: courses.length - 1, color: "from-emerald-500/10 to-emerald-100 text-emerald-700 border-emerald-200" },
            { label: "Today's Entries", value: todayCount, color: "from-rose-500/10 to-rose-100 text-rose-700 border-rose-200" },
          ].map((s) => (
            <div key={s.label} className={`rounded-3xl border bg-gradient-to-br ${s.color} p-5 shadow-sm`}>
              <p className="text-3xl font-bold mb-1">{s.value}</p>
              <p className="text-sm font-medium opacity-90">{s.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Filters */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-sm">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, email, course, phone…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {courses.map((c) => (
            <button
              key={c}
              onClick={() => { setCourseFilter(c); setCurrentPage(1); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                courseFilter === c
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-slate-500 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {c}
            </button>
          ))}
          {(search || courseFilter !== "All") && (
            <button
              onClick={() => { setSearch(""); setCourseFilter("All"); }}
              className="text-xs text-slate-400 hover:text-slate-600 underline px-1"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
        <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Applications List</h3>
            <p className="text-sm text-slate-500">Click any row to view full details</p>
          </div>
          <span className="text-xs bg-indigo-50 text-indigo-600 border border-indigo-200 px-3 py-1.5 rounded-full font-medium">
            {admissions.length} total
          </span>
        </div>

        {loading ? (
          <div className="space-y-4 p-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 gap-2 text-center px-6">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-400 text-2xl mb-1">⚠</div>
            <p className="text-slate-700 font-medium">Failed to load admissions</p>
            <p className="text-slate-400 text-sm">
              Could not reach{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">{API}/api/admissions</code>
            </p>
            <p className="text-red-400 text-xs mt-1">{error}</p>
          </div>
        ) : paginated.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-2">
            <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
              <ClipboardList size={28} className="text-slate-400" />
            </div>
            <p className="text-lg font-semibold text-slate-700">No applications found</p>
            {(search || courseFilter !== "All") && (
              <p className="text-sm text-slate-400">Try adjusting your filters</p>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-slate-50/80">
                <tr>
                  {["Applicant", "Course", "Branch", "Phone", "Applied", "Status", ""].map((h) => (
                    <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paginated.map((admission, i) => (
                  <AdmissionTableRow
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
          <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100">
            <p className="text-xs text-slate-400">
              Showing {(currentPage - 1) * PER_PAGE + 1}–{Math.min(currentPage * PER_PAGE, filtered.length)} of {filtered.length}
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
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Drawer */}
      {selected && (
        <AdmissionDrawer admission={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

// ─── Admission Table Row ──────────────────────────────────────────────────────

function AdmissionTableRow({
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
      className="group cursor-pointer transition hover:bg-indigo-50/40"
    >
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          {!imgError ? (
            <img
              src={admission.photo?.secure_url}
              alt={admission.name}
              className="w-10 h-10 rounded-2xl object-cover border border-slate-200 shrink-0"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm shrink-0">
              {getInitials(admission.name)}
            </div>
          )}
          <div>
            <p className="font-semibold text-slate-900 text-sm">{admission.name}</p>
            <p className="text-slate-400 text-xs">{admission.email}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-4">
        <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          {admission.course}
        </span>
      </td>
      <td className="px-5 py-4 text-sm text-slate-600">{admission.branch}</td>
      <td className="px-5 py-4 text-sm text-slate-600">{admission.phone}</td>
      <td className="px-5 py-4 text-sm text-slate-400">{formatDate(admission.createdAt)}</td>
      <td className="px-5 py-4">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
          Pending
        </span>
      </td>
      <td className="px-5 py-4">
        <span className="text-indigo-500 text-sm opacity-0 group-hover:opacity-100 transition font-medium">
          View →
        </span>
      </td>
    </tr>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────

function TestimonialsSection({
  token,
  testimonials,
  setTestimonials,
  loading,
  setLoading,
}: {
  token: string;
  testimonials: Testimonial[];
  setTestimonials: (t: Testimonial[]) => void;
  loading: boolean;
  setLoading: (l: boolean) => void;
}) {
  const [search, setSearch] = useState("");
  const [testimonialModal, setTestimonialModal] = useState<{ open: boolean; editing: Testimonial | null }>({ open: false, editing: null });
  const [testimonialForm, setTestimonialForm] = useState<Omit<Testimonial, "id">>(createEmptyTestimonial());
  const [savingTestimonial, setSavingTestimonial] = useState(false);
  const [deleteState, setDeleteState] = useState<{ type: "testimonial" | null; id: string | null }>({ type: null, id: null });

  const authHeaders = { Authorization: `Bearer ${token}` };

  const loadTestimonials = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/testimonials`);
      const data = await res.json();
      console.log("testimonial",data);
      setTestimonials(Array.isArray(data) ? data : data.data ?? []);
    } catch (error) {
      console.error("Error loading testimonials:", error);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const openAddTestimonial = () => {
    setTestimonialForm(createEmptyTestimonial());
    setTestimonialModal({ open: true, editing: null });
  };

  const openEditTestimonial = (testimonial: Testimonial) => {
    setTestimonialForm({
      title: testimonial.title || "",
      description: testimonial.description || "",
      youtubeUrl: testimonial.youtubeUrl || "",
      isActive: testimonial.isActive ?? true,
      sortOrder: testimonial.sortOrder ?? 0,
    });
    setTestimonialModal({ open: true, editing: testimonial });
  };

  const closeTestimonialModal = () => {
    setTestimonialModal({ open: false, editing: null });
  };

  const handleSaveTestimonial = async () => {
    if (!testimonialForm.title.trim()) {
      alert("Title is required");
      return;
    }
    if (!testimonialForm.description.trim()) {
      alert("Description is required");
      return;
    }
    if (!testimonialForm.youtubeUrl.trim()) {
      alert("YouTube URL is required");
      return;
    }

    setSavingTestimonial(true);
    try {
      const url = testimonialModal.editing
        ? `${API}/api/testimonials/${testimonialModal.editing._id || testimonialModal.editing.id}`
        : `${API}/api/testimonials`;

      const res = await fetch(url, {
        method: testimonialModal.editing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          ...authHeaders,
        },
        body: JSON.stringify(testimonialForm),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data?.message || "Error saving testimonial");
        return;
      }

      closeTestimonialModal();
      await loadTestimonials();
    } catch (error) {
      alert("Backend/API error.");
    } finally {
      setSavingTestimonial(false);
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    try {
      const res = await fetch(`${API}/api/testimonials/${id}`, {
        method: "DELETE",
        headers: authHeaders,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        alert(data?.message || "Delete failed");
        return;
      }
      await loadTestimonials();
    } catch (error) {
      alert("Delete failed.");
    } finally {
      setDeleteState({ type: null, id: null });
    }
  };

  const filteredTestimonials = testimonials.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Stats */}
      <div className="mb-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
        {[
          { label: "Total Testimonials", value: testimonials.length, color: "from-pink-500/10 to-pink-100 text-pink-700 border-pink-200", icon: <MessageCircle size={18} /> },
          { label: "Active", value: testimonials.filter((t) => t.isActive).length, color: "from-green-500/10 to-green-100 text-green-700 border-green-200", icon: <Eye size={18} /> },
          { label: "Inactive", value: testimonials.filter((t) => !t.isActive).length, color: "from-yellow-500/10 to-yellow-100 text-yellow-700 border-yellow-200", icon: <Eye size={18} /> },
          { label: "Avg. Sort Order", value: Math.round(testimonials.reduce((acc, t) => acc + (t.sortOrder || 0), 0) / (testimonials.length || 1)), color: "from-purple-500/10 to-purple-100 text-purple-700 border-purple-200", icon: <Star size={18} /> },
        ].map((s) => (
          <div key={s.label} className={`rounded-3xl border bg-gradient-to-br ${s.color} p-5 shadow-sm`}>
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-2xl bg-white/80 p-3 shadow-sm">{s.icon}</div>
              <span className="text-3xl font-bold">{s.value}</span>
            </div>
            <p className="text-sm font-medium opacity-90">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Search and Add */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search testimonials..."
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
          />
        </div>
        <button
          onClick={openAddTestimonial}
          className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 px-6 text-sm font-semibold text-white shadow-lg"
        >
          <Plus size={18} /> Add Testimonial
        </button>
      </div>

      {/* Testimonials Grid */}
      <div className="rounded-3xl border border-slate-200 bg-white/90 shadow-xl overflow-hidden">
        <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4">
          <h3 className="text-lg font-bold text-slate-900">Testimonials List</h3>
          <p className="text-sm text-slate-500">Manage video testimonials from your students</p>
        </div>

        {loading ? (
          <div className="space-y-4 p-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 animate-pulse rounded-2xl bg-slate-100" />
            ))}
          </div>
        ) : filteredTestimonials.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-2">
            <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
              <MessageCircle size={28} className="text-slate-400" />
            </div>
            <p className="text-lg font-semibold text-slate-700">No testimonials found</p>
            <p className="text-sm text-slate-400">Click "Add Testimonial" to create your first video testimonial</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial._id || testimonial.id}
                className="flex flex-col md:flex-row gap-4 p-6 transition hover:bg-pink-50/30"
              >
                {/* YouTube Preview */}
                <div className="md:w-64 flex-shrink-0">
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video">
                    <iframe
                      src={getYouTubeEmbedUrl(testimonial.youtubeUrl)}
                      title={testimonial.title}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 text-lg">{testimonial.title}</h4>
                      <p className="text-slate-600 text-sm mt-2 line-clamp-3">{testimonial.description}</p>
                      <div className="flex flex-wrap gap-3 mt-3">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${testimonial.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                          {testimonial.isActive ? "Active" : "Inactive"}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
                          Sort Order: {testimonial.sortOrder || 0}
                        </span>
                        <a
                          href={testimonial.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700 hover:bg-red-200 transition"
                        >
                          <Youtube size={12} /> Watch on YouTube
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditTestimonial(testimonial)}
                        className="rounded-xl border border-pink-100 bg-pink-50 p-2.5 text-pink-600 transition hover:bg-pink-100"
                      >
                        <Edit2 size={15} />
                      </button>
                      <button
                        onClick={() => setDeleteState({ type: "testimonial", id: testimonial._id || testimonial.id || null })}
                        className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500 transition hover:bg-red-100"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Testimonial Modal */}
      <AnimatePresence>
        {testimonialModal.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.96, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              className="my-8 w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-pink-50 px-6 py-5">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {testimonialModal.editing ? "Edit Testimonial" : "Add New Testimonial"}
                  </h2>
                  <p className="text-sm text-slate-500">Share student success stories via YouTube</p>
                </div>
                <button onClick={closeTestimonialModal} className="rounded-xl p-2 text-slate-500 transition hover:bg-white">
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">Title *</label>
                  <input
                    value={testimonialForm.title}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, title: e.target.value })}
                    placeholder="e.g., John's Data Science Journey"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">Description *</label>
                  <textarea
                    rows={4}
                    value={testimonialForm.description}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, description: e.target.value })}
                    placeholder="Describe the student's experience and success story..."
                    className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">YouTube URL *</label>
                  <div className="relative">
                    <Youtube size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />
                    <input
                      value={testimonialForm.youtubeUrl}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, youtubeUrl: e.target.value })}
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 pl-11 text-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-400">Accepts YouTube and youtu.be URLs</p>
                </div>

                {testimonialForm.youtubeUrl && (
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-700 mb-2">Preview:</p>
                    <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-video max-w-md">
                      <iframe
                        src={getYouTubeEmbedUrl(testimonialForm.youtubeUrl)}
                        title="Preview"
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">Sort Order</label>
                    <input
                      type="number"
                      value={testimonialForm.sortOrder}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, sortOrder: parseInt(e.target.value) || 0 })}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                    />
                    <p className="mt-1 text-xs text-slate-400">Lower numbers appear first</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <button
                      type="button"
                      onClick={() => setTestimonialForm({ ...testimonialForm, isActive: !testimonialForm.isActive })}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                    >
                      {testimonialForm.isActive ? (
                        <ToggleRight size={28} className="text-pink-600" />
                      ) : (
                        <ToggleLeft size={28} className="text-slate-400" />
                      )}
                      <span>{testimonialForm.isActive ? "Active (Visible on site)" : "Inactive (Hidden)"}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5">
                <button
                  onClick={closeTestimonialModal}
                  className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveTestimonial}
                  disabled={savingTestimonial || !testimonialForm.title.trim() || !testimonialForm.description.trim() || !testimonialForm.youtubeUrl.trim()}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Save size={16} />
                  {savingTestimonial ? "Saving..." : testimonialModal.editing ? "Update Testimonial" : "Add Testimonial"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteState.id && deleteState.type === "testimonial" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              className="w-full max-w-sm rounded-[28px] bg-white p-6 shadow-2xl"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                <Trash2 size={24} className="text-red-500" />
              </div>
              <h3 className="text-center text-xl font-bold text-slate-900">Delete Testimonial?</h3>
              <p className="mt-2 text-center text-sm text-slate-500">
                This action cannot be undone. The testimonial will be removed permanently.
              </p>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setDeleteState({ type: null, id: null })}
                  className="flex-1 rounded-2xl border border-slate-300 py-3 font-semibold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteTestimonial(deleteState.id!)}
                  className="flex-1 rounded-2xl bg-red-600 py-3 font-semibold text-white"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Main AdminDashboard ──────────────────────────────────────────────────────

export default function AdminDashboard({
  token,
  onLogout,
}: {
  token: string;
  onLogout: () => void;
}) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [placements, setPlacements] = useState<Placement[]>([]);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [loadingPlacements, setLoadingPlacements] = useState(true);
  const [loadingTiles, setLoadingTiles] = useState(true);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  const [search, setSearch] = useState("");
  const [section, setSection] = useState<Section>("dashboard");
  const [activeTab, setActiveTab] = useState<Tab>("basic");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [courseModal, setCourseModal] = useState<{ open: boolean; editing: Course | null }>({ open: false, editing: null });
  const [blogModal, setBlogModal] = useState<{ open: boolean; editing: Blog | null }>({ open: false, editing: null });
  const [placementModal, setPlacementModal] = useState<{ open: boolean; editing: Placement | null }>({ open: false, editing: null });
  const [tileModal, setTileModal] = useState<{ open: boolean; editing: Tile | null }>({ open: false, editing: null });

  const [courseForm, setCourseForm] = useState<Omit<Course, "id">>(createEmptyCourse());
  const [blogForm, setBlogForm] = useState<Omit<Blog, "id">>(createEmptyBlog());
  const [placementForm, setPlacementForm] = useState<Omit<Placement, "id">>(createEmptyPlacement());
  const [tileForm, setTileForm] = useState<Omit<Tile, "id">>(createEmptyTile());

  const [courseImageFile, setCourseImageFile] = useState<File | null>(null);
  const [blogImageFile, setBlogImageFile] = useState<File | null>(null);
  const [placementStudentImageFile, setPlacementStudentImageFile] = useState<File | null>(null);
  const [placementCompanyLogoFile, setPlacementCompanyLogoFile] = useState<File | null>(null);
  const [tileImageFile, setTileImageFile] = useState<File | null>(null);

  const [coursePreviewUrl, setCoursePreviewUrl] = useState<string | null>(null);
  const [blogPreviewUrl, setBlogPreviewUrl] = useState<string | null>(null);
  const [placementStudentPreviewUrl, setPlacementStudentPreviewUrl] = useState<string | null>(null);
  const [placementCompanyPreviewUrl, setPlacementCompanyPreviewUrl] = useState<string | null>(null);
  const [tilePreviewUrl, setTilePreviewUrl] = useState<string | null>(null);

  const [savingCourse, setSavingCourse] = useState(false);
  const [savingBlog, setSavingBlog] = useState(false);
  const [savingPlacement, setSavingPlacement] = useState(false);
  const [savingTile, setSavingTile] = useState(false);

  const [deleteState, setDeleteState] = useState<{ type: "course" | "blog" | "placement" | "tile" | null; id: string | null }>({ type: null, id: null });

  const courseFileRef = useRef<HTMLInputElement | null>(null);
  const blogFileRef = useRef<HTMLInputElement | null>(null);
  const placementStudentFileRef = useRef<HTMLInputElement | null>(null);
  const placementCompanyFileRef = useRef<HTMLInputElement | null>(null);
  const tileFileRef = useRef<HTMLInputElement | null>(null);

  const authHeaders = { Authorization: `Bearer ${token}` };

  const getImageUrl = (image: string | null) => {
    if (!image) return "";
    if (image.startsWith("http")) return image;
    return `${API}${image}`;
  };

  const slugify = (text: string) =>
    text.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");

  const loadCourses = async () => {
    setLoadingCourses(true);
    try {
      const res = await fetch(`${API}/api/courses`);
      const data = await res.json();
      const coursesData = Array.isArray(data) ? data : [];
      setCourses(coursesData.map((c: any) => ({ ...c, faqs: c.faqs || [] })));
    } catch { setCourses([]); } finally { setLoadingCourses(false); }
  };

  const loadBlogs = async () => {
    setLoadingBlogs(true);
    try {
      const res = await fetch(`${API}/api/blogs`);
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch { setBlogs([]); } finally { setLoadingBlogs(false); }
  };

  const loadPlacements = async () => {
    setLoadingPlacements(true);
    try {
      const res = await fetch(`${API}/api/placements`);
      const d = await res.json();
      setPlacements(d.success && Array.isArray(d.data) ? d.data : Array.isArray(d) ? d : []);
    } catch { setPlacements([]); } finally { setLoadingPlacements(false); }
  };

  const loadTiles = async () => {
    setLoadingTiles(true);
    try {
      const res = await fetch(`${API}/api/tiles`);
      const d = await res.json();
      setTiles(d.success && Array.isArray(d.data) ? d.data : Array.isArray(d) ? d : []);
    } catch { setTiles([]); } finally { setLoadingTiles(false); }
  };

  useEffect(() => {
    loadCourses();
    loadBlogs();
    loadPlacements();
    loadTiles();
  }, []);

  // ── Course handlers ──
  const openAddCourse = () => { setCourseForm(createEmptyCourse()); setCourseImageFile(null); setCoursePreviewUrl(null); setActiveTab("basic"); setCourseModal({ open: true, editing: null }); };
  const openEditCourse = (course: Course) => {
    setCourseForm({ name: course.name || "", slug: course.slug || "", price: course.price || "", duration: course.duration || "", description: course.description || "", category: course.category || "Analytics", image: course.image || null, featured: Boolean(course.featured), faqs: course.faqs || [], seo: course.seo || createEmptySEO() });
    setCourseImageFile(null); setCoursePreviewUrl(course.image ? getImageUrl(course.image) : null); setActiveTab("basic"); setCourseModal({ open: true, editing: course });
  };
  const closeCourseModal = () => { setCourseModal({ open: false, editing: null }); setCourseImageFile(null); setCoursePreviewUrl(null); };
  const handleCourseImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    setCourseImageFile(file); setCoursePreviewUrl(URL.createObjectURL(file));
  };
  const handleSaveCourse = async () => {
    if (!courseForm.name.trim()) { alert("Course name is required"); return; }
    setSavingCourse(true);
    try {
      const fd = new FormData();
      fd.append("name", courseForm.name.trim()); fd.append("slug", courseForm.slug.trim()); fd.append("price", courseForm.price || ""); fd.append("duration", courseForm.duration || ""); fd.append("description", courseForm.description || ""); fd.append("category", courseForm.category || "Analytics"); fd.append("featured", String(courseForm.featured)); fd.append("faqs", JSON.stringify(courseForm.faqs || [])); fd.append("seo", JSON.stringify(courseForm.seo || createEmptySEO()));
      if (courseImageFile) fd.append("image", courseImageFile);
      const url = courseModal.editing ? `${API}/api/courses/${courseModal.editing._id || courseModal.editing.id}` : `${API}/api/courses`;
      const res = await fetch(url, { method: courseModal.editing ? "PUT" : "POST", headers: authHeaders, body: fd });
      const data = await res.json().catch(() => null);
      if (!res.ok) { alert(data?.message || "Error saving course"); return; }
      closeCourseModal(); await loadCourses();
    } catch { alert("Backend/API error."); } finally { setSavingCourse(false); }
  };

  // ── Blog handlers ──
  const openAddBlog = () => { setBlogForm({ ...createEmptyBlog(), publishedAt: new Date().toISOString().slice(0, 10) }); setBlogImageFile(null); setBlogPreviewUrl(null); setActiveTab("basic"); setBlogModal({ open: true, editing: null }); };
  const openEditBlog = (blog: Blog) => {
    setBlogForm({ title: blog.title || "", slug: blog.slug || "", excerpt: blog.excerpt || "", content: blog.content || "", category: blog.category || "General", author: blog.author || "", image: blog.image || null, featured: Boolean(blog.featured), publishedAt: blog.publishedAt ? blog.publishedAt.slice(0, 10) : "", seo: blog.seo || createEmptySEO() });
    setBlogImageFile(null); setBlogPreviewUrl(blog.image ? getImageUrl(blog.image) : null); setActiveTab("basic"); setBlogModal({ open: true, editing: blog });
  };
  const closeBlogModal = () => { setBlogModal({ open: false, editing: null }); setBlogImageFile(null); setBlogPreviewUrl(null); };
  const handleBlogImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    setBlogImageFile(file); setBlogPreviewUrl(URL.createObjectURL(file));
  };
  const handleSaveBlog = async () => {
    if (!blogForm.title.trim() || !blogForm.content.trim()) { alert("Blog title and content are required"); return; }
    setSavingBlog(true);
    try {
      const fd = new FormData();
      fd.append("title", blogForm.title.trim()); fd.append("slug", blogForm.slug || slugify(blogForm.title)); fd.append("excerpt", blogForm.excerpt || ""); fd.append("content", blogForm.content || ""); fd.append("category", blogForm.category || "General"); fd.append("author", blogForm.author || "Admin"); fd.append("featured", String(blogForm.featured)); fd.append("publishedAt", blogForm.publishedAt || ""); fd.append("seo", JSON.stringify(blogForm.seo || createEmptySEO()));
      if (blogImageFile) fd.append("image", blogImageFile);
      const url = blogModal.editing ? `${API}/api/blogs/${blogModal.editing._id || blogModal.editing.id}` : `${API}/api/blogs`;
      const res = await fetch(url, { method: blogModal.editing ? "PUT" : "POST", headers: authHeaders, body: fd });
      const data = await res.json().catch(() => null);
      if (!res.ok) { alert(data?.message || "Error saving blog"); return; }
      closeBlogModal(); await loadBlogs();
    } catch { alert("Backend/API error."); } finally { setSavingBlog(false); }
  };

  // ── Placement handlers ──
  const openAddPlacement = () => { setPlacementForm(createEmptyPlacement()); setPlacementStudentImageFile(null); setPlacementCompanyLogoFile(null); setPlacementStudentPreviewUrl(null); setPlacementCompanyPreviewUrl(null); setPlacementModal({ open: true, editing: null }); };
  const openEditPlacement = (p: Placement) => {
    setPlacementForm({ studentName: p.studentName || "", studentImage: p.studentImage || null, companyName: p.companyName || "", companyLogo: p.companyLogo || null, role: p.role || "", isFeatured: Boolean(p.isFeatured), order: p.order || 0 });
    setPlacementStudentImageFile(null); setPlacementCompanyLogoFile(null); setPlacementStudentPreviewUrl(p.studentImage ? getImageUrl(p.studentImage) : null); setPlacementCompanyPreviewUrl(p.companyLogo ? getImageUrl(p.companyLogo) : null); setPlacementModal({ open: true, editing: p });
  };
  const closePlacementModal = () => { setPlacementModal({ open: false, editing: null }); setPlacementStudentImageFile(null); setPlacementCompanyLogoFile(null); setPlacementStudentPreviewUrl(null); setPlacementCompanyPreviewUrl(null); };
  const handleSavePlacement = async () => {
    if (!placementForm.studentName?.trim()) { alert("Student name is required"); return; }
    if (!placementForm.companyName?.trim()) { alert("Company name is required"); return; }
    if (!placementModal.editing && !placementStudentImageFile) { alert("Student image is required"); return; }
    setSavingPlacement(true);
    try {
      const fd = new FormData();
      fd.append("studentName", placementForm.studentName.trim()); fd.append("companyName", placementForm.companyName.trim()); fd.append("role", placementForm.role?.trim() || ""); fd.append("isFeatured", String(placementForm.isFeatured)); fd.append("order", String(placementForm.order || 0));
      if (placementStudentImageFile) fd.append("studentImage", placementStudentImageFile);
      if (placementCompanyLogoFile) fd.append("companyLogo", placementCompanyLogoFile);
      const url = placementModal.editing ? `${API}/api/placements/${placementModal.editing._id || placementModal.editing.id}` : `${API}/api/placements`;
      const res = await fetch(url, { method: placementModal.editing ? "PUT" : "POST", headers: authHeaders, body: fd });
      const d = await res.json();
      if (!res.ok) { alert(d?.message || "Error saving placement"); return; }
      closePlacementModal(); await loadPlacements();
    } catch { alert("Error saving placement."); } finally { setSavingPlacement(false); }
  };

  // ── Tile handlers ──
  const openAddTile = () => { setTileForm(createEmptyTile()); setTileImageFile(null); setTilePreviewUrl(null); setTileModal({ open: true, editing: null }); };
  const openEditTile = (tile: Tile) => {
    setTileForm({ courseName: tile.courseName || "", description: tile.description || "", price: tile.price || "", image: tile.image || null });
    setTileImageFile(null); setTilePreviewUrl(tile.image ? getImageUrl(tile.image) : null); setTileModal({ open: true, editing: tile });
  };
  const closeTileModal = () => { setTileModal({ open: false, editing: null }); setTileImageFile(null); setTilePreviewUrl(null); };
  const handleSaveTile = async () => {
    if (!tileForm.courseName.trim() || !tileForm.price.trim() || !tileForm.description.trim()) { alert("All fields are required"); return; }
    if (!tileModal.editing && !tileImageFile) { alert("Course image is required"); return; }
    setSavingTile(true);
    try {
      const fd = new FormData();
      fd.append("courseName", tileForm.courseName.trim()); fd.append("description", tileForm.description.trim()); fd.append("price", tileForm.price.trim());
      if (tileImageFile) fd.append("image", tileImageFile);
      const url = tileModal.editing ? `${API}/api/tiles/${tileModal.editing._id || tileModal.editing.id}` : `${API}/api/tiles`;
      const res = await fetch(url, { method: tileModal.editing ? "PUT" : "POST", headers: { Authorization: `Bearer ${token}` }, body: fd });
      const d = await res.json();
      if (!res.ok) { alert(d?.message || "Error saving tile"); return; }
      closeTileModal(); await loadTiles();
    } catch { alert("Error saving tile"); } finally { setSavingTile(false); }
  };

  const handleDelete = async () => {
    if (!deleteState.id || !deleteState.type) return;
    try {
      const endpointMap = { course: `${API}/api/courses/${deleteState.id}`, blog: `${API}/api/blogs/${deleteState.id}`, placement: `${API}/api/placements/${deleteState.id}`, tile: `${API}/api/tiles/${deleteState.id}` };
      const res = await fetch(endpointMap[deleteState.type], { method: "DELETE", headers: authHeaders });
      if (!res.ok) { const d = await res.json().catch(() => null); alert(d?.message || "Delete failed"); return; }
      if (deleteState.type === "course") await loadCourses();
      else if (deleteState.type === "blog") await loadBlogs();
      else if (deleteState.type === "placement") await loadPlacements();
      else await loadTiles();
    } catch { alert("Delete failed."); } finally { setDeleteState({ type: null, id: null }); }
  };

  const filteredCourses = courses.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
  const filteredBlogs = blogs.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));
  const filteredPlacements = placements.filter((p) => p.studentName.toLowerCase().includes(search.toLowerCase()));
  const filteredTiles = tiles.filter((t) => t.courseName.toLowerCase().includes(search.toLowerCase()));

  const sidebarLinks = [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { key: "courses", label: "Courses", icon: GraduationCap },
    { key: "blogs", label: "Blogs", icon: FileText },
    { key: "placements", label: "Placements", icon: BriefcaseBusiness },
    { key: "tiles", label: "Tiles", icon: Grid3x3 },
    { key: "testimonials", label: "Testimonials", icon: MessageCircle },
    { key: "admissions", label: "Admissions", icon: ClipboardList },
    { key: "settings", label: "Settings", icon: Settings },
  ] as const;

  const statCards = [
    { label: "Total Courses", value: courses.length, icon: <BookOpen size={18} />, color: "from-blue-500/10 to-blue-100 text-blue-700 border-blue-200" },
    { label: "Total Blogs", value: blogs.length, icon: <FileText size={18} />, color: "from-indigo-500/10 to-indigo-100 text-indigo-700 border-indigo-200" },
    { label: "Total Placements", value: placements.length, icon: <Trophy size={18} />, color: "from-emerald-500/10 to-emerald-100 text-emerald-700 border-emerald-200" },
    { label: "Testimonials", value: testimonials.length, icon: <MessageCircle size={18} />, color: "from-pink-500/10 to-pink-100 text-pink-700 border-pink-200" },
    { label: "Active Tiles", value: tiles.filter((t) => t.courseName).length, icon: <Grid3x3 size={18} />, color: "from-purple-500/10 to-purple-100 text-purple-700 border-purple-200" },
  ];

  const seoFields: { key: SEOKey; label: string; placeholder: string }[] = [
    { key: "title", label: "Page Title", placeholder: "SEO page title" },
    { key: "description", label: "Meta Description", placeholder: "Meta description" },
    { key: "keywords", label: "Meta Keywords", placeholder: "course, training, delhi" },
    { key: "ogTitle", label: "Open Graph Title", placeholder: "Social share title" },
    { key: "ogDescription", label: "Open Graph Description", placeholder: "Social share description" },
  ];

  const sectionTitle: Record<Section, string> = {
    dashboard: "Dashboard Overview",
    courses: "Courses Management",
    blogs: "Blogs Management",
    placements: "Placements Management",
    tiles: "Tiles Management",
    testimonials: "Testimonials Management",
    admissions: "Admissions",
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        {/* ── Desktop Sidebar ── */}
        <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white/80 shadow-sm backdrop-blur-xl lg:flex">
          <div className="border-b border-slate-100 px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
                <BookOpen size={22} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900">Lone Star Admin</h1>
                <p className="text-sm text-slate-500">Complete Management Panel</p>
              </div>
            </div>
          </div>
          <div className="flex-1 px-4 py-6">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Main Menu</p>
            <div className="space-y-1">
              {sidebarLinks.map((item) => {
                const Icon = item.icon;
                const isActive = section === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => { if (item.key !== "settings") setSection(item.key as Section); }}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? item.key === "admissions"
                          ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg"
                          : item.key === "testimonials"
                          ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight size={16} className={isActive ? "text-white" : "text-slate-400"} />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="border-t border-slate-100 p-4">
            <button onClick={onLogout} className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </aside>

        {/* ── Mobile Sidebar ── */}
        <AnimatePresence>
          {mobileSidebarOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileSidebarOpen(false)} className="fixed inset-0 z-40 bg-black/40 lg:hidden" />
              <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} transition={{ type: "spring", damping: 24, stiffness: 220 }} className="fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-white shadow-2xl lg:hidden">
                <div className="flex items-center justify-between border-b px-5 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600"><BookOpen size={20} className="text-white" /></div>
                    <div><h2 className="font-bold text-slate-900">Lone Star Admin</h2><p className="text-xs text-slate-500">Complete Panel</p></div>
                  </div>
                  <button onClick={() => setMobileSidebarOpen(false)} className="rounded-xl p-2 hover:bg-slate-100"><X size={20} /></button>
                </div>
                <div className="flex-1 space-y-1 px-4 py-6">
                  {sidebarLinks.map((item) => {
                    const Icon = item.icon;
                    const isActive = section === item.key;
                    return (
                      <button key={item.key} onClick={() => { if (item.key !== "settings") { setSection(item.key as Section); setMobileSidebarOpen(false); } }}
                        className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100"}`}>
                        <Icon size={18} /> {item.label}
                      </button>
                    );
                  })}
                </div>
                <div className="border-t p-4">
                  <button onClick={onLogout} className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600"><LogOut size={16} /> Logout</button>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* ── Main Content ── */}
        <div className="flex-1 min-w-0">
          <header className="sticky top-0 z-30 border-b border-white/20 bg-white/80 shadow-sm backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button onClick={() => setMobileSidebarOpen(true)} className="rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm lg:hidden"><Menu size={20} /></button>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">{sectionTitle[section]}</h2>
                  <p className="text-sm text-slate-500">Manage your content smoothly</p>
                </div>
              </div>
              {section !== "admissions" && section !== "testimonials" && (
                <button
                  onClick={() => setSection("admissions")}
                  className="hidden sm:flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100 transition"
                >
                  <ClipboardList size={14} />
                  Admissions
                </button>
              )}
            </div>
          </header>

          <main className="px-4 py-6 sm:px-6 lg:px-8">

            {/* ── Admissions Section ── */}
            {section === "admissions" && <AdmissionsSection />}

            {/* ── Testimonials Section ── */}
            {section === "testimonials" && (
              <TestimonialsSection
                token={token}
                testimonials={testimonials}
                setTestimonials={setTestimonials}
                loading={loadingTestimonials}
                setLoading={setLoadingTestimonials}
              />
            )}

            {/* ── Dashboard ── */}
            {section === "dashboard" && (
              <>
                <div className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-6 text-white shadow-xl">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-blue-200">Admin Dashboard</p>
                      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Manage everything in one smart panel</h2>
                      <p className="mt-2 max-w-2xl text-sm text-blue-100 md:text-base">Add courses, publish blogs, manage placements, configure tiles, upload images, and handle SEO fields from the same dashboard.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button onClick={openAddCourse} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02]"><Plus size={18} /> Add Course</button>
                      <button onClick={openAddBlog} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"><Plus size={18} /> Add Blog</button>
                      <button onClick={openAddPlacement} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"><Plus size={18} /> Add Placement</button>
                      <button onClick={openAddTile} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-purple-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"><Plus size={18} /> Add Tile</button>
                    </div>
                  </div>
                </div>
                <div className="mb-8 grid grid-cols-2 gap-4 xl:grid-cols-5">
                  {statCards.map((stat) => (
                    <div key={stat.label} className={`rounded-3xl border bg-gradient-to-br ${stat.color} p-5 shadow-sm`}>
                      <div className="mb-4 flex items-center justify-between"><div className="rounded-2xl bg-white/80 p-3 shadow-sm">{stat.icon}</div><span className="text-3xl font-bold">{stat.value}</span></div>
                      <p className="text-sm font-medium opacity-90">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-6 xl:grid-cols-4">
                  {[
                    { title: "Recent Courses", items: courses.slice(0, 5), icon: <BookOpen size={18} className="text-blue-600" />, bg: "bg-blue-50", sub: (c: any) => c.category },
                    { title: "Recent Blogs", items: blogs.slice(0, 5), icon: <FileText size={18} className="text-indigo-600" />, bg: "bg-indigo-50", sub: (b: any) => `${b.category} • ${b.author || "Admin"}` },
                    { title: "Recent Placements", items: placements.slice(0, 5), icon: <User size={18} className="text-emerald-600" />, bg: "bg-emerald-50", sub: (p: any) => `${p.companyName} • ${p.role}` },
                    { title: "Recent Testimonials", items: testimonials.slice(0, 5), icon: <MessageCircle size={18} className="text-pink-600" />, bg: "bg-pink-50", sub: (t: any) => t.isActive ? "Active" : "Inactive" },
                    { title: "Active Tiles", items: tiles.filter((t) => t.courseName).slice(0, 5), icon: <Grid3x3 size={18} className="text-purple-600" />, bg: "bg-purple-50", sub: (t: any) => t.price },
                  ].map((col) => (
                    <div key={col.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                      <h3 className="mb-4 text-lg font-bold text-slate-900">{col.title}</h3>
                      <div className="space-y-4">
                        {col.items.map((item: any) => (
                          <div key={item._id || item.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3">
                            <div className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl ${col.bg}`}>
                              {item.image || item.studentImage ? <img src={getImageUrl(item.image || item.studentImage)} className="h-full w-full object-cover" alt="" /> : col.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="truncate font-semibold text-slate-900">{item.name || item.title || item.studentName || item.courseName}</p>
                              <p className="text-xs text-slate-500">{col.sub(item)}</p>
                            </div>
                          </div>
                        ))}
                        {col.items.length === 0 && <p className="text-sm text-slate-500">No items available.</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ── Search bar (non-dashboard, non-admissions, non-testimonials) ── */}
            {section !== "dashboard" && section !== "admissions" && section !== "testimonials" && (
              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={`Search ${section}...`} className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" />
                </div>
                {section === "courses" && <button onClick={openAddCourse} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Course</button>}
                {section === "blogs" && <button onClick={openAddBlog} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Blog</button>}
                {section === "placements" && <button onClick={openAddPlacement} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Placement</button>}
                {section === "tiles" && <button onClick={openAddTile} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Tile</button>}
              </div>
            )}

            {/* ── Courses Table ── */}
            {section === "courses" && (
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
                <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4"><h3 className="text-lg font-bold text-slate-900">Courses List</h3><p className="text-sm text-slate-500">View and manage all available courses</p></div>
                {loadingCourses ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px]">
                      <thead className="bg-slate-50/80"><tr>{["Course", "Category", "Price", "Duration", "Featured", "FAQs Count", "Actions"].map((h) => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredCourses.map((course) => (
                          <tr key={course.id} className="transition hover:bg-blue-50/40">
                            <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 shadow-sm">{course.image ? <img src={getImageUrl(course.image)} className="h-full w-full object-cover" alt={course.name} /> : <BookOpen size={18} className="text-blue-600" />}</div><p className="font-semibold text-slate-900">{course.name}</p></div></td>
                            <td className="px-5 py-4"><span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{course.category}</span></td>
                            <td className="px-5 py-4 text-sm font-semibold text-slate-700">{course.price || "—"}</td>
                            <td className="px-5 py-4 text-sm text-slate-600">{course.duration || "—"}</td>
                            <td className="px-5 py-4">{course.featured ? <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700"><Star size={14} className="fill-yellow-400 text-yellow-500" /> Featured</div> : <span className="text-sm text-slate-300">—</span>}</td>
                            <td className="px-5 py-4"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{course.faqs?.length || 0} FAQs</span></td>
                            <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditCourse(course)} className="rounded-xl border border-blue-100 bg-blue-50 p-2.5 text-blue-600"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "course", id: course._id || course.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500"><Trash2 size={15} /></button></div></td>
                          </tr>
                        ))}
                        {filteredCourses.length === 0 && <tr><td colSpan={7} className="px-6 py-16 text-center"><p className="text-lg font-semibold text-slate-700">No courses found</p></td></tr>}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* ── Blogs Table ── */}
            {section === "blogs" && (
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
                <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4"><h3 className="text-lg font-bold text-slate-900">Blogs List</h3></div>
                {loadingBlogs ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[1100px]">
                      <thead className="bg-slate-50/80"><tr>{["Blog", "Category", "Author", "Published", "Featured", "Actions"].map((h) => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredBlogs.map((blog) => (
                          <tr key={blog.id} className="transition hover:bg-indigo-50/40">
                            <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-sm">{blog.image ? <img src={getImageUrl(blog.image)} className="h-full w-full object-cover" alt={blog.title} /> : <FileText size={18} className="text-indigo-600" />}</div><p className="font-semibold text-slate-900">{blog.title}</p></div></td>
                            <td className="px-5 py-4"><span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">{blog.category}</span></td>
                            <td className="px-5 py-4 text-sm text-slate-700">{blog.author || "Admin"}</td>
                            <td className="px-5 py-4 text-sm text-slate-600">{blog.publishedAt || "—"}</td>
                            <td className="px-5 py-4">{blog.featured ? <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700"><Star size={14} className="fill-yellow-400 text-yellow-500" /> Featured</div> : <span className="text-sm text-slate-300">—</span>}</td>
                            <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditBlog(blog)} className="rounded-xl border border-indigo-100 bg-indigo-50 p-2.5 text-indigo-600"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "blog", id: blog._id || blog.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500"><Trash2 size={15} /></button></div></td>
                          </tr>
                        ))}
                        {filteredBlogs.length === 0 && <tr><td colSpan={6} className="px-6 py-16 text-center"><p className="text-lg font-semibold text-slate-700">No blogs found</p></td></tr>}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* ── Placements Table ── */}
            {section === "placements" && (
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
                <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4"><h3 className="text-lg font-bold text-slate-900">Placements List</h3></div>
                {loadingPlacements ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[1000px]">
                      <thead className="bg-slate-50/80"><tr>{["Student", "Company", "Role", "Featured", "Order", "Actions"].map((h) => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredPlacements.map((p) => (
                          <tr key={p.id} className="transition hover:bg-emerald-50/40">
                            <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 shadow-sm">{p.studentImage ? <img src={getImageUrl(p.studentImage)} className="h-full w-full object-cover" alt={p.studentName} /> : <User size={18} className="text-emerald-600" />}</div><p className="font-semibold text-slate-900">{p.studentName}</p></div></td>
                            <td className="px-5 py-4"><div className="flex items-center gap-2">{p.companyLogo && <img src={getImageUrl(p.companyLogo)} className="h-6 w-6 rounded object-contain" alt={p.companyName} />}<span className="font-medium text-slate-700">{p.companyName}</span></div></td>
                            <td className="px-5 py-4 text-sm text-slate-600">{p.role || "—"}</td>
                            <td className="px-5 py-4">{p.isFeatured ? <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700"><Star size={14} className="fill-yellow-400 text-yellow-500" /> Featured</div> : <span className="text-sm text-slate-300">—</span>}</td>
                            <td className="px-5 py-4 text-sm text-slate-600">{p.order || 0}</td>
                            <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditPlacement(p)} className="rounded-xl border border-emerald-100 bg-emerald-50 p-2.5 text-emerald-600"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "placement", id: p._id || p.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500"><Trash2 size={15} /></button></div></td>
                          </tr>
                        ))}
                        {filteredPlacements.length === 0 && <tr><td colSpan={6} className="px-6 py-16 text-center"><p className="text-lg font-semibold text-slate-700">No placements found</p></td></tr>}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* ── Tiles Table ── */}
            {section === "tiles" && (
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
                <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4 flex justify-between items-center">
                  <div><h3 className="text-lg font-bold text-slate-900">Course Tiles List</h3><p className="text-sm text-slate-500">View and manage all course tiles displayed on website</p></div>
                  <button onClick={openAddTile} className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg"><Plus size={16} /> Add Course Tile</button>
                </div>
                {loadingTiles ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px]">
                      <thead className="bg-slate-50/80"><tr>{["Course", "Description", "Price", "Image", "Actions"].map((h) => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredTiles.map((tile) => (
                          <tr key={tile.id} className="transition hover:bg-orange-50/40">
                            <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 shadow-sm">{tile.image ? <img src={getImageUrl(tile.image)} className="h-full w-full object-cover" alt={tile.courseName} /> : <BookOpen size={18} className="text-orange-600" />}</div><p className="font-semibold text-slate-900">{tile.courseName}</p></div></td>
                            <td className="px-5 py-4 text-sm text-slate-600 max-w-[300px]"><div className="truncate">{tile.description || "—"}</div></td>
                            <td className="px-5 py-4"><span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">{tile.price || "—"}</span></td>
                            <td className="px-5 py-4">{tile.image ? <span className="text-xs text-green-600">✓ Uploaded</span> : <span className="text-xs text-red-500">No image</span>}</td>
                            <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditTile(tile)} className="rounded-xl border border-orange-100 bg-orange-50 p-2.5 text-orange-600 transition hover:bg-orange-100"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "tile", id: tile._id || tile.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500 transition hover:bg-red-100"><Trash2 size={15} /></button></div></td>
                          </tr>
                        ))}
                        {filteredTiles.length === 0 && <tr><td colSpan={5} className="px-6 py-16 text-center"><p className="text-lg font-semibold text-slate-700">No tiles found</p></td></tr>}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ── Course Modal ── */}
      <AnimatePresence>
        {courseModal.open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{courseModal.editing ? "Edit Course" : "Add New Course"}</h2><p className="text-sm text-slate-500">Update course details and SEO settings</p></div><button onClick={closeCourseModal} className="rounded-xl p-2 text-slate-500"><X size={20} /></button></div>
              <div className="flex gap-2 border-b border-slate-100 bg-white px-6 pt-4">{(["basic", "faqs", "seo"] as const).map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-t-2xl px-5 py-3 text-sm font-semibold capitalize transition ${activeTab === tab ? "bg-blue-600 text-white shadow-md" : "text-slate-500 hover:bg-slate-100"}`}>{tab === "seo" ? "SEO & Meta Tags" : tab === "faqs" ? "FAQs" : "Basic Info"}</button>))}</div>
              <div className="p-6">
                {activeTab === "basic" && (
                  <div className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Course Name *</label><input value={courseForm.name} onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Custom Slug</label><input value={courseForm.slug} onChange={(e) => setCourseForm({ ...courseForm, slug: e.target.value })} placeholder="e.g. data-science-delhi" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Category</label><select value={courseForm.category} onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"><option>Analytics</option><option>AI/ML</option><option>Marketing</option><option>Cloud</option><option>Development</option><option>Design</option></select></div>
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Price</label><input value={courseForm.price} onChange={(e) => setCourseForm({ ...courseForm, price: e.target.value })} placeholder="e.g. ₹35,000" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Duration</label><input value={courseForm.duration} onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })} placeholder="e.g. 60 Days" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
                    </div>
                    <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Description</label><textarea rows={4} value={courseForm.description} onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
                    <div><label className="mb-2 block text-sm font-semibold text-slate-700">Course Image</label><div onClick={() => courseFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-blue-400 hover:bg-blue-50">{coursePreviewUrl ? <img src={coursePreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-blue-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload course image</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={courseFileRef} type="file" accept="image/*" onChange={handleCourseImageChange} className="hidden" /></div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><button type="button" onClick={() => setCourseForm({ ...courseForm, featured: !courseForm.featured })} className="flex items-center gap-3 text-sm font-semibold text-slate-700">{courseForm.featured ? <ToggleRight size={28} className="text-blue-600" /> : <ToggleLeft size={28} className="text-slate-400" />}<span>{courseForm.featured ? "Featured Course" : "Not Featured"}</span></button></div>
                  </div>
                )}
                {activeTab === "faqs" && (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">Add frequently asked questions that will appear on the course page.</div>
                    {courseForm?.faqs?.map((faq, index) => (
                      <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                        <div className="flex items-center justify-between"><span className="text-sm font-semibold text-slate-600">FAQ #{index + 1}</span><button type="button" onClick={() => setCourseForm({ ...courseForm, faqs: courseForm.faqs.filter((_, i) => i !== index) })} className="rounded-xl bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 hover:bg-red-100 transition">Delete</button></div>
                        <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Question</label><input value={faq.question} onChange={(e) => { const u = [...courseForm.faqs]; u[index] = { ...u[index], question: e.target.value }; setCourseForm({ ...courseForm, faqs: u }); }} placeholder="e.g. Is this course beginner friendly?" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
                        <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Answer</label><textarea rows={3} value={faq.answer} onChange={(e) => { const u = [...courseForm.faqs]; u[index] = { ...u[index], answer: e.target.value }; setCourseForm({ ...courseForm, faqs: u }); }} placeholder="Write a clear, helpful answer..." className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
                      </div>
                    ))}
                    <button type="button" onClick={() => setCourseForm({ ...courseForm, faqs: [...courseForm.faqs, { question: "", answer: "" }] })} className="w-full rounded-2xl border-2 border-dashed border-blue-300 bg-white py-4 text-sm font-semibold text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition">+ Add FAQ</button>
                  </div>
                )}
                {activeTab === "seo" && (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">SEO fields help your course pages rank better on Google.</div>
                    {seoFields.map(({ key, label, placeholder }) => (<div key={key}><label className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>{key.toLowerCase().includes("description") ? <textarea rows={3} value={courseForm.seo[key]} onChange={(e) => setCourseForm({ ...courseForm, seo: { ...courseForm.seo, [key]: e.target.value } })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" placeholder={placeholder} /> : <input value={courseForm.seo[key]} onChange={(e) => setCourseForm({ ...courseForm, seo: { ...courseForm.seo, [key]: e.target.value } })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" placeholder={placeholder} />}</div>))}
                  </div>
                )}
              </div>
              <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closeCourseModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleSaveCourse} disabled={savingCourse || !courseForm.name.trim()} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg disabled:opacity-50"><Save size={16} />{savingCourse ? "Saving..." : courseModal.editing ? "Update Course" : "Add Course"}</button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Blog Modal ── */}
      <AnimatePresence>
        {blogModal.open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-indigo-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{blogModal.editing ? "Edit Blog" : "Add New Blog"}</h2></div><button onClick={closeBlogModal} className="rounded-xl p-2 text-slate-500"><X size={20} /></button></div>
              <div className="flex gap-2 border-b border-slate-100 bg-white px-6 pt-4">{(["basic", "seo"] as const).map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-t-2xl px-5 py-3 text-sm font-semibold capitalize transition ${activeTab === tab ? "bg-indigo-600 text-white shadow-md" : "text-slate-500 hover:bg-slate-100"}`}>{tab === "seo" ? "SEO & Meta Tags" : "Basic Info"}</button>))}</div>
              <div className="p-6">
                {activeTab === "basic" && (
                  <div className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2"><label className="mb-1.5 block text-sm font-semibold text-slate-700">Blog Title *</label><input value={blogForm.title} onChange={(e) => { const v = e.target.value; setBlogForm({ ...blogForm, title: v, slug: blogModal.editing ? blogForm.slug : slugify(v) }); }} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Slug *</label><input value={blogForm.slug} onChange={(e) => setBlogForm({ ...blogForm, slug: slugify(e.target.value) })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Category</label><select value={blogForm.category} onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"><option>General</option><option>Data Science</option><option>Data Analytics</option><option>Business Analytics</option><option>Digital Marketing</option><option>Cloud Computing</option><option>Career Tips</option></select></div>
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Author</label><div className="relative"><User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={blogForm.author} onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })} placeholder="Admin" className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div></div>
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Publish Date</label><div className="relative"><CalendarDays size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input type="date" value={blogForm.publishedAt} onChange={(e) => setBlogForm({ ...blogForm, publishedAt: e.target.value })} className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div></div>
                    </div>
                    <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Short Excerpt</label><textarea rows={3} value={blogForm.excerpt} onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
                    <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Blog Content *</label><textarea rows={10} value={blogForm.content} onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
                    <div><label className="mb-2 block text-sm font-semibold text-slate-700">Blog Image</label><div onClick={() => blogFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-indigo-400 hover:bg-indigo-50">{blogPreviewUrl ? <img src={blogPreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-indigo-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload blog image</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={blogFileRef} type="file" accept="image/*" onChange={handleBlogImageChange} className="hidden" /></div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><button type="button" onClick={() => setBlogForm({ ...blogForm, featured: !blogForm.featured })} className="flex items-center gap-3 text-sm font-semibold text-slate-700">{blogForm.featured ? <ToggleRight size={28} className="text-indigo-600" /> : <ToggleLeft size={28} className="text-slate-400" />}<span>{blogForm.featured ? "Featured Blog" : "Not Featured"}</span></button></div>
                  </div>
                )}
                {activeTab === "seo" && (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-700">SEO fields help your blog pages rank better on Google.</div>
                    {seoFields.map(({ key, label, placeholder }) => (<div key={key}><label className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>{key.toLowerCase().includes("description") ? <textarea rows={3} value={blogForm.seo[key]} onChange={(e) => setBlogForm({ ...blogForm, seo: { ...blogForm.seo, [key]: e.target.value } })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" placeholder={placeholder} /> : <input value={blogForm.seo[key]} onChange={(e) => setBlogForm({ ...blogForm, seo: { ...blogForm.seo, [key]: e.target.value } })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" placeholder={placeholder} />}</div>))}
                  </div>
                )}
              </div>
              <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closeBlogModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleSaveBlog} disabled={savingBlog || !blogForm.title.trim() || !blogForm.content.trim()} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-semibold text-white shadow-lg disabled:opacity-50"><Save size={16} />{savingBlog ? "Saving..." : blogModal.editing ? "Update Blog" : "Add Blog"}</button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Placement Modal ── */}
      <AnimatePresence>
        {placementModal.open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-emerald-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{placementModal.editing ? "Edit Placement" : "Add New Placement"}</h2></div><button onClick={closePlacementModal} className="rounded-xl p-2 text-slate-500"><X size={20} /></button></div>
              <div className="p-6 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Student Name *</label><div className="relative"><User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={placementForm.studentName} onChange={(e) => setPlacementForm({ ...placementForm, studentName: e.target.value })} placeholder="e.g. John Doe" className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div></div>
                  <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Company Name *</label><div className="relative"><Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={placementForm.companyName} onChange={(e) => setPlacementForm({ ...placementForm, companyName: e.target.value })} placeholder="e.g. Google, Amazon" className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div></div>
                  <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Role / Position</label><input value={placementForm.role} onChange={(e) => setPlacementForm({ ...placementForm, role: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div>
                  <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Display Order</label><input type="number" value={placementForm.order} onChange={(e) => setPlacementForm({ ...placementForm, order: parseInt(e.target.value) || 0 })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div>
                </div>
                <div><label className="mb-2 block text-sm font-semibold text-slate-700">Student Image *</label><div onClick={() => placementStudentFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-emerald-400 hover:bg-emerald-50">{placementStudentPreviewUrl ? <img src={placementStudentPreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Student" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-emerald-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload student image</p></div></div><input ref={placementStudentFileRef} type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f && f.type.startsWith("image/")) { setPlacementStudentImageFile(f); setPlacementStudentPreviewUrl(URL.createObjectURL(f)); } }} className="hidden" /></div>
                <div><label className="mb-2 block text-sm font-semibold text-slate-700">Company Logo (Optional)</label><div onClick={() => placementCompanyFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-emerald-400 hover:bg-emerald-50">{placementCompanyPreviewUrl ? <img src={placementCompanyPreviewUrl} className="h-24 w-24 rounded-2xl object-contain bg-white p-2 shadow-sm" alt="Logo" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Building2 size={28} className="text-slate-400 group-hover:text-emerald-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload company logo</p></div></div><input ref={placementCompanyFileRef} type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f && f.type.startsWith("image/")) { setPlacementCompanyLogoFile(f); setPlacementCompanyPreviewUrl(URL.createObjectURL(f)); } }} className="hidden" /></div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><button type="button" onClick={() => setPlacementForm({ ...placementForm, isFeatured: !placementForm.isFeatured })} className="flex items-center gap-3 text-sm font-semibold text-slate-700">{placementForm.isFeatured ? <ToggleRight size={28} className="text-emerald-600" /> : <ToggleLeft size={28} className="text-slate-400" />}<span>{placementForm.isFeatured ? "Featured Placement" : "Not Featured"}</span></button></div>
              </div>
              <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closePlacementModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleSavePlacement} disabled={savingPlacement || !placementForm.studentName.trim() || !placementForm.companyName.trim() || (!placementStudentImageFile && !placementModal.editing)} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 font-semibold text-white shadow-lg disabled:opacity-50"><Save size={16} />{savingPlacement ? "Saving..." : placementModal.editing ? "Update Placement" : "Add Placement"}</button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Tile Modal ── */}
      <AnimatePresence>
        {tileModal.open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-orange-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{tileModal.editing ? "Edit Course Tile" : "Add New Course Tile"}</h2></div><button onClick={closeTileModal} className="rounded-xl p-2 text-slate-500 transition hover:bg-white hover:text-slate-800"><X size={20} /></button></div>
              <div className="p-6 space-y-5">
                <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Course Name *</label><input value={tileForm.courseName} onChange={(e) => setTileForm({ ...tileForm, courseName: e.target.value })} placeholder="e.g. Data Science Course" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100" /></div>
                <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Price *</label><input value={tileForm.price} onChange={(e) => setTileForm({ ...tileForm, price: e.target.value })} placeholder="e.g. ₹35,000 or Free" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100" /></div>
                <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Description *</label><textarea rows={4} value={tileForm.description} onChange={(e) => setTileForm({ ...tileForm, description: e.target.value })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100" /></div>
                <div><label className="mb-2 block text-sm font-semibold text-slate-700">Course Image *</label><div onClick={() => tileFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-orange-400 hover:bg-orange-50">{tilePreviewUrl ? <img src={tilePreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-orange-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload course image</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={tileFileRef} type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f && f.type.startsWith("image/")) { setTileImageFile(f); setTilePreviewUrl(URL.createObjectURL(f)); } }} className="hidden" /></div>
              </div>
              <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closeTileModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition hover:bg-slate-100">Cancel</button><button onClick={handleSaveTile} disabled={savingTile || !tileForm.courseName.trim() || !tileForm.price.trim() || (!tileImageFile && !tileModal.editing)} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"><Save size={16} />{savingTile ? "Saving..." : tileModal.editing ? "Update Course Tile" : "Add Course Tile"}</button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Delete Modal ── */}
      <AnimatePresence>
        {deleteState.id && deleteState.type && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }} className="w-full max-w-sm rounded-[28px] bg-white p-6 shadow-2xl">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100"><Trash2 size={24} className="text-red-500" /></div>
              <h3 className="text-center text-xl font-bold text-slate-900">Delete {deleteState.type === "course" ? "Course" : deleteState.type === "blog" ? "Blog" : deleteState.type === "placement" ? "Placement" : "Tile"}?</h3>
              <p className="mt-2 text-center text-sm text-slate-500">This action cannot be undone. The selected item will be removed permanently.</p>
              <div className="mt-6 flex gap-3"><button onClick={() => setDeleteState({ type: null, id: null })} className="flex-1 rounded-2xl border border-slate-300 py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleDelete} className="flex-1 rounded-2xl bg-red-600 py-3 font-semibold text-white">Delete</button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}