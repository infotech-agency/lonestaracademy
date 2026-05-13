



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
//   Grid3x3
// } from "lucide-react";

// const API = BASE_URL;

// interface SEO {
//   title: string;
//   description: string;
//   keywords: string;
//   ogTitle: string;
//   ogDescription: string;
// }

// // interface Tile {
// //   id?: string;
// //   _id?: string;
// //   title: string;
// //   description: string;
// //   icon: string;
// //   link: string;
// //   color: string;
// //   order: number;
// //   isActive: boolean;
// //   image: string | null;
// // }
// interface Tile {
//   id?: string;
//   _id?: string;
//   courseName: string;  // Changed from 'title'
//   description: string;
//   price: string;       // Added price field
//   image: string | null;
// }
// interface Course {
//   id?: string;
//   _id?: string;
//   name: string;
//   price: string;
//   duration: string;
//   description: string;
//   category: string;
//   image: string | null;
//   featured: boolean;
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

// type Section = "dashboard" | "courses" | "blogs" | "placements" | "tiles";
// type Tab = "basic" | "seo";
// type SEOKey = keyof SEO;

// const createEmptySEO = (): SEO => ({
//   title: "",
//   description: "",
//   keywords: "",
//   ogTitle: "",
//   ogDescription: "",
// });

// const createEmptyCourse = (): Omit<Course, "id"> => ({
//   name: "",
//   price: "",
//   duration: "",
//   description: "",
//   category: "Analytics",
//   image: null,
//   featured: false,
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

// // const createEmptyTile = (): Omit<Tile, "id"> => ({
// //   title: "",
// //   description: "",
// //   icon: "Grid3x3",
// //   link: "",
// //   color: "from-purple-500 to-purple-600",
// //   order: 0,
// //   isActive: true,
// //   image: null,
// // });
// const createEmptyTile = (): Omit<Tile, "id"> => ({
//   courseName: "",
//   description: "",
//   price: "",
//   image: null,
// });
// export default function AdminDashboard({
//   token,
//   onLogout,
// }: {
//   token: string;
//   onLogout: () => void;
// }) {
//   // States
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

//   // Modal states
//   const [courseModal, setCourseModal] = useState<{ open: boolean; editing: Course | null }>({ open: false, editing: null });
//   const [blogModal, setBlogModal] = useState<{ open: boolean; editing: Blog | null }>({ open: false, editing: null });
//   const [placementModal, setPlacementModal] = useState<{ open: boolean; editing: Placement | null }>({ open: false, editing: null });
//   const [tileModal, setTileModal] = useState<{ open: boolean; editing: Tile | null }>({ open: false, editing: null });

//   // Form states
//   // const [courseForm, setCourseForm] = useState<Omit<Course, "id">>(createEmptyCourse());
//   const [courseForm, setCourseForm] = useState({
//   name: "", category: "Analytics", price: "", duration: "",
//   description: "", featured: false,
//   faqs: [],  // ← yeh add karo
//   seo: { title: "", description: "", keywords: "", ogTitle: "", ogDescription: "" }
// });
//   const [blogForm, setBlogForm] = useState<Omit<Blog, "id">>(createEmptyBlog());
//   const [placementForm, setPlacementForm] = useState<Omit<Placement, "id">>(createEmptyPlacement());
//   const [tileForm, setTileForm] = useState<Omit<Tile, "id">>(createEmptyTile());

//   // File states
//   const [courseImageFile, setCourseImageFile] = useState<File | null>(null);
//   const [blogImageFile, setBlogImageFile] = useState<File | null>(null);
//   const [placementStudentImageFile, setPlacementStudentImageFile] = useState<File | null>(null);
//   const [placementCompanyLogoFile, setPlacementCompanyLogoFile] = useState<File | null>(null);
//   const [tileImageFile, setTileImageFile] = useState<File | null>(null);

//   // Preview URLs
//   const [coursePreviewUrl, setCoursePreviewUrl] = useState<string | null>(null);
//   const [blogPreviewUrl, setBlogPreviewUrl] = useState<string | null>(null);
//   const [placementStudentPreviewUrl, setPlacementStudentPreviewUrl] = useState<string | null>(null);
//   const [placementCompanyPreviewUrl, setPlacementCompanyPreviewUrl] = useState<string | null>(null);
//   const [tilePreviewUrl, setTilePreviewUrl] = useState<string | null>(null);

//   // Saving states
//   const [savingCourse, setSavingCourse] = useState(false);
//   const [savingBlog, setSavingBlog] = useState(false);
//   const [savingPlacement, setSavingPlacement] = useState(false);
//   const [savingTile, setSavingTile] = useState(false);

//   const [deleteState, setDeleteState] = useState<{ type: "course" | "blog" | "placement" | "tile" | null; id: string | null }>({
//     type: null,
//     id: null,
//   });

//   // Refs
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

//   // Load functions
//   const loadCourses = async () => {
//     setLoadingCourses(true);
//     try {
//       const res = await fetch(`${API}/api/courses`);
//       const data = await res.json();
//       setCourses(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error("Load courses error:", error);
//       setCourses([]);
//     } finally {
//       setLoadingCourses(false);
//     }
//   };

//   const loadBlogs = async () => {
//     setLoadingBlogs(true);
//     try {
//       const res = await fetch(`${API}/api/blogs`);
//       const data = await res.json();
//       setBlogs(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error("Load blogs error:", error);
//       setBlogs([]);
//     } finally {
//       setLoadingBlogs(false);
//     }
//   };

//   const loadPlacements = async () => {
//     setLoadingPlacements(true);
//     try {
//       const res = await fetch(`${API}/api/placements`);
//       const responseData = await res.json();
//       if (responseData.success && Array.isArray(responseData.data)) {
//         setPlacements(responseData.data);
//       } else if (Array.isArray(responseData)) {
//         setPlacements(responseData);
//       } else {
//         setPlacements([]);
//       }
//     } catch (error) {
//       console.error("Load placements error:", error);
//       setPlacements([]);
//     } finally {
//       setLoadingPlacements(false);
//     }
//   };

//   // const loadTiles = async () => {
//   //   setLoadingTiles(true);
//   //   try {
//   //     const res = await fetch(`${API}/api/tiles`);
//   //     const responseData = await res.json();
//   //     if (responseData.success && Array.isArray(responseData.data)) {
//   //       setTiles(responseData.data);
//   //     } else if (Array.isArray(responseData)) {
//   //       setTiles(responseData);
//   //     } else {
//   //       setTiles([]);
//   //     }
//   //   } catch (error) {
//   //     console.error("Load tiles error:", error);
//   //     setTiles([]);
//   //   } finally {
//   //     setLoadingTiles(false);
//   //   }
//   // };
//   const loadTiles = async () => {
//   setLoadingTiles(true);
//   try {
//     const res = await fetch(`${API}/api/tiles`); // Note: course-tiles, not tiles
//     const responseData = await res.json();
//     console.log("Tiles response:", responseData);
    
//     if (responseData.success && Array.isArray(responseData.data)) {
//       setTiles(responseData.data);
//     } else if (Array.isArray(responseData)) {
//       setTiles(responseData);
//     } else {
//       setTiles([]);
//     }
//   } catch (error) {
//     console.error("Load tiles error:", error);
//     setTiles([]);
//   } finally {
//     setLoadingTiles(false);
//   }
// };
//   useEffect(() => {
//     loadCourses();
//     loadBlogs();
//     loadPlacements();
//     loadTiles();
//   }, []);

//   // Course functions
//   const openAddCourse = () => {
//     setCourseForm(createEmptyCourse());
//     setCourseImageFile(null);
//     setCoursePreviewUrl(null);
//     setActiveTab("basic");
//     setCourseModal({ open: true, editing: null });
//   };

//   const openEditCourse = (course: Course) => {
//     setCourseForm({
//       name: course.name || "",
//       price: course.price || "",
//       duration: course.duration || "",
//       description: course.description || "",
//       category: course.category || "Analytics",
//       image: course.image || null,
//       featured: Boolean(course.featured),
//       seo: course.seo || createEmptySEO(),
//     });
//     setCourseImageFile(null);
//     setCoursePreviewUrl(course.image ? getImageUrl(course.image) : null);
//     setActiveTab("basic");
//     setCourseModal({ open: true, editing: course });
//   };

//   const closeCourseModal = () => {
//     setCourseModal({ open: false, editing: null });
//     setCourseImageFile(null);
//     setCoursePreviewUrl(null);
//   };

//   const handleCourseImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     if (!file.type.startsWith("image/")) {
//       alert("Please select a valid image file");
//       return;
//     }
//     setCourseImageFile(file);
//     setCoursePreviewUrl(URL.createObjectURL(file));
//   };

//   const handleSaveCourse = async () => {
//     if (!courseForm.name.trim()) {
//       alert("Course name is required");
//       return;
//     }
//     setSavingCourse(true);
//     try {
//       const fd = new FormData();
//       fd.append("name", courseForm.name.trim());
//       fd.append("price", courseForm.price || "");
//       fd.append("duration", courseForm.duration || "");
//       fd.append("description", courseForm.description || "");
//       fd.append("category", courseForm.category || "Analytics");
//       fd.append("featured", String(courseForm.featured));
//       fd.append("seo", JSON.stringify(courseForm.seo || createEmptySEO()));
//       if (courseImageFile) fd.append("image", courseImageFile);
//       const url = courseModal.editing ? `${API}/api/courses/${courseModal.editing._id || courseModal.editing.id}` : `${API}/api/courses`;
//       const method = courseModal.editing ? "PUT" : "POST";
//       const res = await fetch(url, { method, headers: authHeaders, body: fd });
//       const data = await res.json().catch(() => null);
//       if (!res.ok) {
//         console.error("Course save error:", data);
//         alert(data?.message || data?.error || "Error saving course");
//         return;
//       }
//       closeCourseModal();
//       await loadCourses();
//     } catch (error) {
//       console.error("Course save failed:", error);
//       alert("Backend/API error.");
//     } finally {
//       setSavingCourse(false);
//     }
//   };

//   // Blog functions
//   const openAddBlog = () => {
//     setBlogForm({ ...createEmptyBlog(), publishedAt: new Date().toISOString().slice(0, 10) });
//     setBlogImageFile(null);
//     setBlogPreviewUrl(null);
//     setActiveTab("basic");
//     setBlogModal({ open: true, editing: null });
//   };

//   const openEditBlog = (blog: Blog) => {
//     setBlogForm({
//       title: blog.title || "",
//       slug: blog.slug || "",
//       excerpt: blog.excerpt || "",
//       content: blog.content || "",
//       category: blog.category || "General",
//       author: blog.author || "",
//       image: blog.image || null,
//       featured: Boolean(blog.featured),
//       publishedAt: blog.publishedAt ? blog.publishedAt.slice(0, 10) : "",
//       seo: blog.seo || createEmptySEO(),
//     });
//     setBlogImageFile(null);
//     setBlogPreviewUrl(blog.image ? getImageUrl(blog.image) : null);
//     setActiveTab("basic");
//     setBlogModal({ open: true, editing: blog });
//   };

//   const closeBlogModal = () => {
//     setBlogModal({ open: false, editing: null });
//     setBlogImageFile(null);
//     setBlogPreviewUrl(null);
//   };

//   const handleBlogImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     if (!file.type.startsWith("image/")) {
//       alert("Please select a valid image file");
//       return;
//     }
//     setBlogImageFile(file);
//     setBlogPreviewUrl(URL.createObjectURL(file));
//   };

//   const handleSaveBlog = async () => {
//     if (!blogForm.title.trim() || !blogForm.content.trim()) {
//       alert("Blog title and content are required");
//       return;
//     }
//     setSavingBlog(true);
//     try {
//       const fd = new FormData();
//       fd.append("title", blogForm.title.trim());
//       fd.append("slug", blogForm.slug || slugify(blogForm.title));
//       fd.append("excerpt", blogForm.excerpt || "");
//       fd.append("content", blogForm.content || "");
//       fd.append("category", blogForm.category || "General");
//       fd.append("author", blogForm.author || "Admin");
//       fd.append("featured", String(blogForm.featured));
//       fd.append("publishedAt", blogForm.publishedAt || "");
//       fd.append("seo", JSON.stringify(blogForm.seo || createEmptySEO()));
//       if (blogImageFile) fd.append("image", blogImageFile);
//       const url = blogModal.editing ? `${API}/api/blogs/${blogModal.editing._id || blogModal.editing.id}` : `${API}/api/blogs`;
//       const method = blogModal.editing ? "PUT" : "POST";
//       const res = await fetch(url, { method, headers: authHeaders, body: fd });
//       const data = await res.json().catch(() => null);
//       if (!res.ok) {
//         console.error("Blog save error:", data);
//         alert(data?.message || data?.error || "Error saving blog");
//         return;
//       }
//       closeBlogModal();
//       await loadBlogs();
//     } catch (error) {
//       console.error("Blog save failed:", error);
//       alert("Backend/API error.");
//     } finally {
//       setSavingBlog(false);
//     }
//   };

//   // Placement functions
//   const openAddPlacement = () => {
//     setPlacementForm(createEmptyPlacement());
//     setPlacementStudentImageFile(null);
//     setPlacementCompanyLogoFile(null);
//     setPlacementStudentPreviewUrl(null);
//     setPlacementCompanyPreviewUrl(null);
//     setPlacementModal({ open: true, editing: null });
//   };

//   const openEditPlacement = (placement: Placement) => {
//     setPlacementForm({
//       studentName: placement.studentName || "",
//       studentImage: placement.studentImage || null,
//       companyName: placement.companyName || "",
//       companyLogo: placement.companyLogo || null,
//       role: placement.role || "",
//       isFeatured: Boolean(placement.isFeatured),
//       order: placement.order || 0,
//     });
//     setPlacementStudentImageFile(null);
//     setPlacementCompanyLogoFile(null);
//     setPlacementStudentPreviewUrl(placement.studentImage ? getImageUrl(placement.studentImage) : null);
//     setPlacementCompanyPreviewUrl(placement.companyLogo ? getImageUrl(placement.companyLogo) : null);
//     setPlacementModal({ open: true, editing: placement });
//   };

//   const closePlacementModal = () => {
//     setPlacementModal({ open: false, editing: null });
//     setPlacementStudentImageFile(null);
//     setPlacementCompanyLogoFile(null);
//     setPlacementStudentPreviewUrl(null);
//     setPlacementCompanyPreviewUrl(null);
//   };

//   const handlePlacementStudentImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     if (!file.type.startsWith("image/")) {
//       alert("Please select a valid image file");
//       return;
//     }
//     setPlacementStudentImageFile(file);
//     setPlacementStudentPreviewUrl(URL.createObjectURL(file));
//   };

//   const handlePlacementCompanyLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     if (!file.type.startsWith("image/")) {
//       alert("Please select a valid image file");
//       return;
//     }
//     setPlacementCompanyLogoFile(file);
//     setPlacementCompanyPreviewUrl(URL.createObjectURL(file));
//   };

//   const handleSavePlacement = async () => {
//     if (!placementForm.studentName?.trim()) {
//       alert("Student name is required");
//       return;
//     }
//     if (!placementForm.companyName?.trim()) {
//       alert("Company name is required");
//       return;
//     }
//     if (!placementModal.editing && !placementStudentImageFile) {
//       alert("Student image is required");
//       return;
//     }
//     setSavingPlacement(true);
//     try {
//       const formData = new FormData();
//       formData.append('studentName', placementForm.studentName.trim());
//       formData.append('companyName', placementForm.companyName.trim());
//       formData.append('role', placementForm.role?.trim() || '');
//       formData.append('isFeatured', String(placementForm.isFeatured));
//       formData.append('order', String(placementForm.order || 0));
//       if (placementStudentImageFile) formData.append('studentImage', placementStudentImageFile);
//       if (placementCompanyLogoFile) formData.append('companyLogo', placementCompanyLogoFile);
//       const url = placementModal.editing ? `${API}/api/placements/${placementModal.editing._id || placementModal.editing.id}` : `${API}/api/placements`;
//       const method = placementModal.editing ? "PUT" : "POST";
//       const res = await fetch(url, { method, headers: authHeaders, body: formData });
//       const responseData = await res.json();
//       if (!res.ok) {
//         console.error("Placement save error:", responseData);
//         alert(responseData?.message || "Error saving placement");
//         return;
//       }
//       alert(`Placement ${placementModal.editing ? "updated" : "added"} successfully!`);
//       closePlacementModal();
//       await loadPlacements();
//     } catch (error) {
//       console.error("Placement save failed:", error);
//       alert("Error saving placement.");
//     } finally {
//       setSavingPlacement(false);
//     }
//   };

//   // Tile functions
//   const openAddTile = () => {
//     setTileForm(createEmptyTile());
//     setTileImageFile(null);
//     setTilePreviewUrl(null);
//     setTileModal({ open: true, editing: null });
//   };

//   const openEditTile = (tile: Tile) => {
//     setTileForm({
//       title: tile.title || "",
//       description: tile.description || "",
//       icon: tile.icon || "Grid3x3",
//       link: tile.link || "",
//       color: tile.color || "from-purple-500 to-purple-600",
//       order: tile.order || 0,
//       isActive: tile.isActive !== false,
//       image: tile.image || null,
//     });
//     setTileImageFile(null);
//     setTilePreviewUrl(tile.image ? getImageUrl(tile.image) : null);
//     setTileModal({ open: true, editing: tile });
//   };

//   const closeTileModal = () => {
//     setTileModal({ open: false, editing: null });
//     setTileImageFile(null);
//     setTilePreviewUrl(null);
//   };

//   const handleTileImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     if (!file.type.startsWith("image/")) {
//       alert("Please select a valid image file");
//       return;
//     }
//     setTileImageFile(file);
//     setTilePreviewUrl(URL.createObjectURL(file));
//   };

//   // const handleSaveTile = async () => {
//   //   if (!tileForm.title.trim()) {
//   //     alert("Tile title is required");
//   //     return;
//   //   }
//   //   setSavingTile(true);
//   //   try {
//   //     const formData = new FormData();
//   //     formData.append('title', tileForm.title.trim());
//   //     formData.append('description', tileForm.description.trim());
//   //     formData.append('icon', tileForm.icon);
//   //     formData.append('link', tileForm.link);
//   //     formData.append('color', tileForm.color);
//   //     formData.append('order', String(tileForm.order));
//   //     formData.append('isActive', String(tileForm.isActive));
//   //     if (tileImageFile) formData.append('image', tileImageFile);
//   //     const url = tileModal.editing ? `${API}/api/tiles/${tileModal.editing._id || tileModal.editing.id}` : `${API}/api/tiles`;
//   //     const method = tileModal.editing ? "PUT" : "POST";
//   //     const res = await fetch(url, { method, headers: authHeaders, body: formData });
//   //     const responseData = await res.json();
//   //     if (!res.ok) {
//   //       console.error("Tile save error:", responseData);
//   //       alert(responseData?.message || "Error saving tile");
//   //       return;
//   //     }
//   //     alert(`Tile ${tileModal.editing ? "updated" : "added"} successfully!`);
//   //     closeTileModal();
//   //     await loadTiles();
//   //   } catch (error) {
//   //     console.error("Tile save failed:", error);
//   //     alert("Error saving tile");
//   //   } finally {
//   //     setSavingTile(false);
//   //   }
//   // };

//   // Delete function

//   const handleSaveTile = async () => {
//   if (!tileForm.courseName.trim()) {
//     alert("Course name is required");
//     return;
//   }
//   if (!tileForm.price.trim()) {
//     alert("Price is required");
//     return;
//   }
//   if (!tileForm.description.trim()) {
//     alert("Description is required");
//     return;
//   }
//   if (!tileModal.editing && !tileImageFile) {
//     alert("Course image is required");
//     return;
//   }

//   setSavingTile(true);

//   try {
//     const formData = new FormData();
//     formData.append('courseName', tileForm.courseName.trim());
//     formData.append('description', tileForm.description.trim());
//     formData.append('price', tileForm.price.trim());
    
//     if (tileImageFile) {
//       formData.append('image', tileImageFile);
//     }

//     const url = tileModal.editing
//       ? `${API}/api/tiles/${tileModal.editing._id || tileModal.editing.id}`
//       : `${API}/api/tiles`;

//     const method = tileModal.editing ? "PUT" : "POST";

//     const res = await fetch(url, {
//       method: method,
//       headers: {
//         'Authorization': `Bearer ${token}`,
//       },
//       body: formData,
//     });

//     const responseData = await res.json();

//     if (!res.ok) {
//       console.error("Tile save error:", responseData);
//       alert(responseData?.message || "Error saving course tile");
//       return;
//     }

//     alert(`Course tile ${tileModal.editing ? "updated" : "added"} successfully!`);
//     closeTileModal();
//     await loadTiles();
    
//   } catch (error) {
//     console.error("Tile save failed:", error);
//     alert("Error saving course tile");
//   } finally {
//     setSavingTile(false);
//   }
// };
  
//   const handleDelete = async () => {
//     if (!deleteState.id || !deleteState.type) return;
//     try {
//       let endpoint = "";
//       if (deleteState.type === "course") endpoint = `${API}/api/courses/${deleteState.id}`;
//       else if (deleteState.type === "blog") endpoint = `${API}/api/blogs/${deleteState.id}`;
//       else if (deleteState.type === "placement") endpoint = `${API}/api/placements/${deleteState.id}`;
//       else endpoint = `${API}/api/tiles/${deleteState.id}`;
//       const res = await fetch(endpoint, { method: "DELETE", headers: authHeaders });
//       if (!res.ok) {
//         const data = await res.json().catch(() => null);
//         alert(data?.message || data?.error || "Delete failed");
//         return;
//       }
//       if (deleteState.type === "course") await loadCourses();
//       else if (deleteState.type === "blog") await loadBlogs();
//       else if (deleteState.type === "placement") await loadPlacements();
//       else await loadTiles();
//     } catch (error) {
//       console.error("Delete failed:", error);
//       alert("Delete failed.");
//     } finally {
//       setDeleteState({ type: null, id: null });
//     }
//   };

//   // Filter functions
//   const filteredCourses = courses.filter((course) => course.name.toLowerCase().includes(search.toLowerCase()));
//   const filteredBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()));
//   const filteredPlacements = placements.filter((placement) => placement.studentName.toLowerCase().includes(search.toLowerCase()));
//   const filteredTiles = tiles.filter((tile) => tile.courseName.toLowerCase().includes(search.toLowerCase()));

//   const sidebarLinks = [
//     { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
//     { key: "courses", label: "Courses", icon: GraduationCap },
//     { key: "blogs", label: "Blogs", icon: FileText },
//     { key: "placements", label: "Placements", icon: BriefcaseBusiness },
//     { key: "tiles", label: "Tiles", icon: Grid3x3 },
//     { key: "settings", label: "Settings", icon: Settings },
//   ] as const;

//   const statCards = [
//     { label: "Total Courses", value: courses.length, icon: <BookOpen size={18} />, color: "from-blue-500/10 to-blue-100 text-blue-700 border-blue-200" },
//     { label: "Total Blogs", value: blogs.length, icon: <FileText size={18} />, color: "from-indigo-500/10 to-indigo-100 text-indigo-700 border-indigo-200" },
//     { label: "Total Placements", value: placements.length, icon: <Trophy size={18} />, color: "from-emerald-500/10 to-emerald-100 text-emerald-700 border-emerald-200" },
//     { label: "Active Tiles", value: tiles.filter(t => t.courseName).length, icon: <Grid3x3 size={18} />, color: "from-purple-500/10 to-purple-100 text-purple-700 border-purple-200" },
//   ];

//   const seoFields: { key: SEOKey; label: string; placeholder: string }[] = [
//     { key: "title", label: "Page Title", placeholder: "SEO page title" },
//     { key: "description", label: "Meta Description", placeholder: "Meta description" },
//     { key: "keywords", label: "Meta Keywords", placeholder: "course, training, delhi" },
//     { key: "ogTitle", label: "Open Graph Title", placeholder: "Social share title" },
//     { key: "ogDescription", label: "Open Graph Description", placeholder: "Social share description" },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">
//       <div className="flex min-h-screen">
//         {/* Sidebar */}
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
//             <div className="space-y-2">
//               {sidebarLinks.map((item) => {
//                 const Icon = item.icon;
//                 const isActive = section === item.key;
//                 return (
//                   <button
//                     key={item.key}
//                     onClick={() => { if (item.key !== "settings") setSection(item.key as Section); }}
//                     className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "text-slate-600 hover:bg-slate-100"}`}
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

//         {/* Mobile Sidebar */}
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
//                 <div className="flex-1 space-y-2 px-4 py-6">
//                   {sidebarLinks.map((item) => {
//                     const Icon = item.icon;
//                     const isActive = section === item.key;
//                     return (
//                       <button key={item.key} onClick={() => { if (item.key !== "settings") { setSection(item.key as Section); setMobileSidebarOpen(false); } }} className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100"}`}>
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

//         {/* Main Content */}
//         <div className="flex-1">
//           <header className="sticky top-0 z-30 border-b border-white/20 bg-white/80 shadow-sm backdrop-blur-xl">
//             <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//               <div className="flex items-center gap-3">
//                 <button onClick={() => setMobileSidebarOpen(true)} className="rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm lg:hidden"><Menu size={20} /></button>
//                 <div>
//                   <h2 className="text-lg font-bold text-slate-900">
//                     {section === "dashboard" && "Dashboard Overview"}
//                     {section === "courses" && "Courses Management"}
//                     {section === "blogs" && "Blogs Management"}
//                     {section === "placements" && "Placements Management"}
//                     {section === "tiles" && "Tiles Management"}
//                   </h2>
//                   <p className="text-sm text-slate-500">Manage your courses, blogs, placements and tiles smoothly</p>
//                 </div>
//               </div>
//               <div className="hidden items-center gap-3 sm:flex">
//                 <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">● Backend Connected</span>
//               </div>
//             </div>
//           </header>

//           <main className="px-4 py-6 sm:px-6 lg:px-8">
//             {/* Hero Section */}
//             <div className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-6 text-white shadow-xl">
//               <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//                 <div>
//                   <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-blue-200">Admin Dashboard</p>
//                   <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Manage everything in one smart panel</h2>
//                   <p className="mt-2 max-w-2xl text-sm text-blue-100 md:text-base">Add courses, publish blogs, manage placements, configure tiles, upload images, and handle SEO fields from the same dashboard.</p>
//                 </div>
//                 <div className="flex flex-wrap gap-3">
//                   <button onClick={openAddCourse} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02]"><Plus size={18} /> Add Course</button>
//                   <button onClick={openAddBlog} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"><Plus size={18} /> Add Blog</button>
//                   <button onClick={openAddPlacement} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"><Plus size={18} /> Add Placement</button>
//                   <button onClick={openAddTile} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-purple-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"><Plus size={18} /> Add Tile</button>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Cards */}
//             <div className="mb-8 grid grid-cols-2 gap-4 xl:grid-cols-4">
//               {statCards.map((stat) => (
//                 <div key={stat.label} className={`rounded-3xl border bg-gradient-to-br ${stat.color} p-5 shadow-sm`}>
//                   <div className="mb-4 flex items-center justify-between">
//                     <div className="rounded-2xl bg-white/80 p-3 shadow-sm">{stat.icon}</div>
//                     <span className="text-3xl font-bold">{stat.value}</span>
//                   </div>
//                   <p className="text-sm font-medium opacity-90">{stat.label}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Search and Add Buttons */}
//             <div className="mb-6 flex flex-col gap-4 md:flex-row">
//               <div className="relative flex-1">
//                 <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
//                 <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={section === "courses" ? "Search courses..." : section === "blogs" ? "Search blogs..." : section === "placements" ? "Search placements..." : section === "tiles" ? "Search tiles..." : "Search..."} className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" />
//               </div>
//               {section === "courses" && <button onClick={openAddCourse} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Course</button>}
//               {section === "blogs" && <button onClick={openAddBlog} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Blog</button>}
//               {section === "placements" && <button onClick={openAddPlacement} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Placement</button>}
//               {section === "tiles" && <button onClick={openAddTile} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Tile</button>}
//             </div>

//             {/* Dashboard Section */}
//             {section === "dashboard" && (
//               <div className="grid gap-6 xl:grid-cols-4">
//                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
//                   <h3 className="mb-4 text-lg font-bold text-slate-900">Recent Courses</h3>
//                   <div className="space-y-4">
//                     {courses.slice(0, 5).map((course) => (
//                       <div key={course.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3">
//                         <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-blue-50">
//                           {course.image ? <img src={getImageUrl(course.image)} alt={course.name} className="h-full w-full object-cover" /> : <BookOpen size={18} className="text-blue-600" />}
//                         </div>
//                         <div className="min-w-0 flex-1"><p className="truncate font-semibold text-slate-900">{course.name}</p><p className="text-xs text-slate-500">{course.category}</p></div>
//                       </div>
//                     ))}
//                     {courses.length === 0 && <p className="text-sm text-slate-500">No courses available.</p>}
//                   </div>
//                 </div>
//                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
//                   <h3 className="mb-4 text-lg font-bold text-slate-900">Recent Blogs</h3>
//                   <div className="space-y-4">
//                     {blogs.slice(0, 5).map((blog) => (
//                       <div key={blog.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3">
//                         <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-indigo-50">
//                           {blog.image ? <img src={getImageUrl(blog.image)} alt={blog.title} className="h-full w-full object-cover" /> : <FileText size={18} className="text-indigo-600" />}
//                         </div>
//                         <div className="min-w-0 flex-1"><p className="truncate font-semibold text-slate-900">{blog.title}</p><p className="text-xs text-slate-500">{blog.category} • {blog.author || "Admin"}</p></div>
//                       </div>
//                     ))}
//                     {blogs.length === 0 && <p className="text-sm text-slate-500">No blogs available.</p>}
//                   </div>
//                 </div>
//                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
//                   <h3 className="mb-4 text-lg font-bold text-slate-900">Recent Placements</h3>
//                   <div className="space-y-4">
//                     {placements.slice(0, 5).map((placement) => (
//                       <div key={placement.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3">
//                         <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-emerald-50">
//                           {placement.studentImage ? <img src={getImageUrl(placement.studentImage)} alt={placement.studentName} className="h-full w-full object-cover" /> : <User size={18} className="text-emerald-600" />}
//                         </div>
//                         <div className="min-w-0 flex-1"><p className="truncate font-semibold text-slate-900">{placement.studentName}</p><p className="text-xs text-slate-500">{placement.companyName} • {placement.role}</p></div>
//                       </div>
//                     ))}
//                     {placements.length === 0 && <p className="text-sm text-slate-500">No placements available.</p>}
//                   </div>
//                 </div>
//                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
//                   <h3 className="mb-4 text-lg font-bold text-slate-900">Active Tiles</h3>
//                   <div className="space-y-4">
//                     {tiles.filter(t => t.courseName).slice(0, 5).map((tile) => (
//                       <div key={tile.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3">
//                         <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-purple-50">
//                           {tile.image ? <img src={getImageUrl(tile.image)} alt={tile.courseName} className="h-full w-full object-cover" /> : <Grid3x3 size={18} className="text-purple-600" />}
//                         </div>
//                         <div className="min-w-0 flex-1"><p className="truncate font-semibold text-slate-900">{tile.courseName}</p><p className="text-xs text-slate-500">{tile.link}</p></div>
//                       </div>
//                     ))}
//                     {tiles.length === 0 && <p className="text-sm text-slate-500">No tiles available.</p>}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Courses Section */}
//             {section === "courses" && (
//               <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
//                 <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4"><h3 className="text-lg font-bold text-slate-900">Courses List</h3><p className="text-sm text-slate-500">View and manage all available courses</p></div>
//                 {loadingCourses ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
//                   <div className="overflow-x-auto">
//                     <table className="w-full min-w-[900px]">
//                       <thead className="bg-slate-50/80"><tr>{["Course", "Category", "Price", "Duration", "Featured", "Actions"].map(h => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
//                       <tbody className="divide-y divide-slate-100">
//                         {filteredCourses.map((course) => (
//                           <tr key={course.id} className="transition hover:bg-blue-50/40">
//                             <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 shadow-sm">{course.image ? <img src={getImageUrl(course.image)} className="h-full w-full object-cover" alt={course.name} /> : <BookOpen size={18} className="text-blue-600" />}</div><div><p className="font-semibold text-slate-900">{course.name}</p></div></div></td>
//                             <td className="px-5 py-4"><span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{course.category}</span></td>
//                             <td className="px-5 py-4 text-sm font-semibold text-slate-700">{course.price || "—"}</td>
//                             <td className="px-5 py-4 text-sm text-slate-600">{course.duration || "—"}</td>
//                             <td className="px-5 py-4">{course.featured ? <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700"><Star size={14} className="fill-yellow-400 text-yellow-500" /> Featured</div> : <span className="text-sm text-slate-300">—</span>}</td>
//                             <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditCourse(course)} className="rounded-xl border border-blue-100 bg-blue-50 p-2.5 text-blue-600"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "course", id: course._id || course.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500"><Trash2 size={15} /></button></div></td>
//                           </tr>
//                         ))}
//                         {filteredCourses.length === 0 && <tr><td colSpan={6} className="px-6 py-16 text-center"><div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100"><BookOpen size={28} className="text-slate-400" /></div><p className="text-lg font-semibold text-slate-700">No courses found</p></td></tr>}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Blogs Section */}
//             {section === "blogs" && (
//               <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
//                 <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4"><h3 className="text-lg font-bold text-slate-900">Blogs List</h3><p className="text-sm text-slate-500">View and manage all blog posts</p></div>
//                 {loadingBlogs ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
//                   <div className="overflow-x-auto">
//                     <table className="w-full min-w-[1100px]">
//                       <thead className="bg-slate-50/80"><tr>{["Blog", "Category", "Author", "Published", "Featured", "Actions"].map(h => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
//                       <tbody className="divide-y divide-slate-100">
//                         {filteredBlogs.map((blog) => (
//                           <tr key={blog.id} className="transition hover:bg-indigo-50/40">
//                             <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-sm">{blog.image ? <img src={getImageUrl(blog.image)} className="h-full w-full object-cover" alt={blog.title} /> : <FileText size={18} className="text-indigo-600" />}</div><div><p className="font-semibold text-slate-900">{blog.title}</p></div></div></td>
//                             <td className="px-5 py-4"><span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">{blog.category}</span></td>
//                             <td className="px-5 py-4 text-sm text-slate-700">{blog.author || "Admin"}</td>
//                             <td className="px-5 py-4 text-sm text-slate-600">{blog.publishedAt || "—"}</td>
//                             <td className="px-5 py-4">{blog.featured ? <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700"><Star size={14} className="fill-yellow-400 text-yellow-500" /> Featured</div> : <span className="text-sm text-slate-300">—</span>}</td>
//                             <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditBlog(blog)} className="rounded-xl border border-indigo-100 bg-indigo-50 p-2.5 text-indigo-600"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "blog", id: blog._id || blog.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500"><Trash2 size={15} /></button></div></td>
//                           </tr>
//                         ))}
//                         {filteredBlogs.length === 0 && <tr><td colSpan={6} className="px-6 py-16 text-center"><div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100"><FileText size={28} className="text-slate-400" /></div><p className="text-lg font-semibold text-slate-700">No blogs found</p></td></tr>}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Placements Section */}
//             {section === "placements" && (
//               <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
//                 <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4"><h3 className="text-lg font-bold text-slate-900">Placements List</h3><p className="text-sm text-slate-500">View and manage all student placements</p></div>
//                 {loadingPlacements ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
//                   <div className="overflow-x-auto">
//                     <table className="w-full min-w-[1000px]">
//                       <thead className="bg-slate-50/80"><tr>{["Student", "Company", "Role", "Featured", "Order", "Actions"].map(h => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
//                       <tbody className="divide-y divide-slate-100">
//                         {filteredPlacements.map((placement) => (
//                           <tr key={placement.id} className="transition hover:bg-emerald-50/40">
//                             <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 shadow-sm">{placement.studentImage ? <img src={getImageUrl(placement.studentImage)} className="h-full w-full object-cover" alt={placement.studentName} /> : <User size={18} className="text-emerald-600" />}</div><div><p className="font-semibold text-slate-900">{placement.studentName}</p></div></div></td>
//                             <td className="px-5 py-4"><div className="flex items-center gap-2">{placement.companyLogo && <img src={getImageUrl(placement.companyLogo)} className="h-6 w-6 rounded object-contain" alt={placement.companyName} />}<span className="font-medium text-slate-700">{placement.companyName}</span></div></td>
//                             <td className="px-5 py-4 text-sm text-slate-600">{placement.role || "—"}</td>
//                             <td className="px-5 py-4">{placement.isFeatured ? <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700"><Star size={14} className="fill-yellow-400 text-yellow-500" /> Featured</div> : <span className="text-sm text-slate-300">—</span>}</td>
//                             <td className="px-5 py-4 text-sm text-slate-600">{placement.order || 0}</td>
//                             <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditPlacement(placement)} className="rounded-xl border border-emerald-100 bg-emerald-50 p-2.5 text-emerald-600"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "placement", id: placement._id || placement.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500"><Trash2 size={15} /></button></div></td>
//                           </tr>
//                         ))}
//                         {filteredPlacements.length === 0 && <tr><td colSpan={6} className="px-6 py-16 text-center"><div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100"><BriefcaseBusiness size={28} className="text-slate-400" /></div><p className="text-lg font-semibold text-slate-700">No placements found</p></td></tr>}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Tiles Section */}
//             {/* {section === "tiles" && (
//               <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
//                 <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4"><h3 className="text-lg font-bold text-slate-900">Tiles List</h3><p className="text-sm text-slate-500">View and manage all dashboard tiles</p></div>
//                 {loadingTiles ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
//                   <div className="overflow-x-auto">
//                     <table className="w-full min-w-[900px]">
//                       <thead className="bg-slate-50/80"><tr>{["Tile", "Description", "Link", "Order", "Status", "Actions"].map(h => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
//                       <tbody className="divide-y divide-slate-100">
//                         {filteredTiles.map((tile) => (
//                           <tr key={tile.id} className="transition hover:bg-purple-50/40">
//                             <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 shadow-sm">{tile.image ? <img src={getImageUrl(tile.image)} className="h-full w-full object-cover" alt={tile.title} /> : <Grid3x3 size={18} className="text-purple-600" />}</div><div><p className="font-semibold text-slate-900">{tile.title}</p><div className={`mt-1 h-1 w-12 rounded-full bg-gradient-to-r ${tile.color}`} /></div></div></td>
//                             <td className="px-5 py-4 text-sm text-slate-600 max-w-[300px]"><div className="truncate">{tile.description || "—"}</div></td>
//                             <td className="px-5 py-4 text-sm text-slate-600">{tile.link || "—"}</td>
//                             <td className="px-5 py-4 text-sm text-slate-600">{tile.order || 0}</td>
//                             <td className="px-5 py-4">{tile.isActive ? <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700"><div className="h-1.5 w-1.5 rounded-full bg-green-500" /> Active</span> : <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700"><div className="h-1.5 w-1.5 rounded-full bg-red-500" /> Inactive</span>}</td>
//                             <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditTile(tile)} className="rounded-xl border border-purple-100 bg-purple-50 p-2.5 text-purple-600"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "tile", id: tile._id || tile.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500"><Trash2 size={15} /></button></div></td>
//                           </tr>
//                         ))}
//                         {filteredTiles.length === 0 && <tr><td colSpan={6} className="px-6 py-16 text-center"><div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100"><Grid3x3 size={28} className="text-slate-400" /></div><p className="text-lg font-semibold text-slate-700">No tiles found</p></td></tr>}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>
//             )} */}
//             {section === "tiles" && (
//   <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
//     <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4 flex justify-between items-center">
//       <div>
//         <h3 className="text-lg font-bold text-slate-900">Course Tiles List</h3>
//         <p className="text-sm text-slate-500">View and manage all course tiles displayed on website</p>
//       </div>
//       <button
//         onClick={openAddTile}
//         className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
//       >
//         <Plus size={16} />
//         Add Course Tile
//       </button>
//     </div>

//     {loadingTiles ? (
//       <div className="space-y-4 p-8">
//         {[...Array(5)].map((_, index) => (
//           <div key={index} className="h-16 animate-pulse rounded-2xl bg-slate-100" />
//         ))}
//       </div>
//     ) : (
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[900px]">
//           <thead className="bg-slate-50/80">
//             <tr>
//               {["Course", "Description", "Price", "Image", "Actions"].map((heading) => (
//                 <th key={heading} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
//                   {heading}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-100">
//             {filteredTiles.map((tile) => (
//               <tr key={tile.id} className="transition hover:bg-orange-50/40">
//                 <td className="px-5 py-4">
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 shadow-sm">
//                       {tile.image ? (
//                         <img src={getImageUrl(tile.image)} className="h-full w-full object-cover" alt={tile.courseName} />
//                       ) : (
//                         <BookOpen size={18} className="text-orange-600" />
//                       )}
//                     </div>
//                     <div>
//                       <p className="font-semibold text-slate-900">{tile.courseName}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-5 py-4 text-sm text-slate-600 max-w-[300px]">
//                   <div className="truncate">{tile.description || "—"}</div>
//                 </td>
//                 <td className="px-5 py-4">
//                   <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
//                     {tile.price || "—"}
//                   </span>
//                 </td>
//                 <td className="px-5 py-4">
//                   {tile.image ? (
//                     <span className="text-xs text-green-600">✓ Uploaded</span>
//                   ) : (
//                     <span className="text-xs text-red-500">No image</span>
//                   )}
//                 </td>
//                 <td className="px-5 py-4">
//                   <div className="flex items-center gap-2">
//                     <button onClick={() => openEditTile(tile)} className="rounded-xl border border-orange-100 bg-orange-50 p-2.5 text-orange-600 transition hover:bg-orange-100">
//                       <Edit2 size={15} />
//                     </button>
//                     <button onClick={() => setDeleteState({ type: "tile", id: tile._id || tile.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500 transition hover:bg-red-100">
//                       <Trash2 size={15} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//             {filteredTiles.length === 0 && (
//               <tr>
//                 <td colSpan={5} className="px-6 py-16 text-center">
//                   <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
//                     <BookOpen size={28} className="text-slate-400" />
//                   </div>
//                   <p className="text-lg font-semibold text-slate-700">No course tiles found</p>
//                   <p className="text-sm text-slate-500 mt-1">Click "Add Course Tile" to create one</p>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     )}
//   </div>
// )}
//           </main>
//         </div>
//       </div>

//       {/* Modals - Course, Blog, Placement, Tile */}
//       {/* Course Modal */}
//       <AnimatePresence>
//         {courseModal.open && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
//             <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
//               <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{courseModal.editing ? "Edit Course" : "Add New Course"}</h2><p className="text-sm text-slate-500">Update course details and SEO settings</p></div><button onClick={closeCourseModal} className="rounded-xl p-2 text-slate-500"><X size={20} /></button></div>
//               <div className="flex gap-2 border-b border-slate-100 bg-white px-6 pt-4">
//                 {/* {(["basic", "seo"] as const).map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-t-2xl px-5 py-3 text-sm font-semibold capitalize transition ${activeTab === tab ? "bg-blue-600 text-white shadow-md" : "text-slate-500 hover:bg-slate-100"}`}>{tab === "seo" ? "SEO & Meta Tags" : "Basic Info"}</button>))} */}
//                 {(["basic", "seo", "faqs"] as const).map((tab) => (
//   <button key={tab} onClick={() => setActiveTab(tab)}
//     className={`rounded-t-2xl px-5 py-3 text-sm font-semibold capitalize transition ${
//       activeTab === tab ? "bg-blue-600 text-white shadow-md" : "text-slate-500 hover:bg-slate-100"
//     }`}>
//     {tab === "seo" ? "SEO & Meta Tags" : tab === "faqs" ? "FAQs" : "Basic Info"}
//   </button>
// ))}
//                 </div>
//               <div className="p-6">
//                 {activeTab === "basic" && (
//                   <div className="space-y-5">
//                     <div className="grid gap-4 sm:grid-cols-2">
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Course Name *</label><input value={courseForm.name} onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Category *</label><select value={courseForm.category} onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"><option>Analytics</option><option>AI/ML</option><option>Marketing</option><option>Cloud</option><option>Development</option><option>Design</option></select></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Price</label><input value={courseForm.price} onChange={(e) => setCourseForm({ ...courseForm, price: e.target.value })} placeholder="e.g. ₹35,000" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Duration</label><input value={courseForm.duration} onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })} placeholder="e.g. 60 Days" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
//                     </div>
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Description</label><textarea rows={4} value={courseForm.description} onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
//                     <div><label className="mb-2 block text-sm font-semibold text-slate-700">Course Image</label><div onClick={() => courseFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-blue-400 hover:bg-blue-50">{coursePreviewUrl ? <img src={coursePreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-blue-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload course image</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={courseFileRef} type="file" accept="image/*" onChange={handleCourseImageChange} className="hidden" /></div>
//                     <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><button type="button" onClick={() => setCourseForm({ ...courseForm, featured: !courseForm.featured })} className="flex items-center gap-3 text-sm font-semibold text-slate-700">{courseForm.featured ? <ToggleRight size={28} className="text-blue-600" /> : <ToggleLeft size={28} className="text-slate-400" />}<span>{courseForm.featured ? "Featured Course" : "Not Featured"}</span></button></div>
//                   </div>
//                 )}
//                 {activeTab === "seo" && (
//                   <div className="space-y-4">
//                     <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">SEO fields help your course pages rank better on Google.</div>
//                     {seoFields.map(({ key, label, placeholder }) => (<div key={key}><label className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>{key.toLowerCase().includes("description") ? <textarea rows={3} value={courseForm.seo[key]} onChange={(e) => setCourseForm({ ...courseForm, seo: { ...courseForm.seo, [key]: e.target.value } })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" placeholder={placeholder} /> : <input value={courseForm.seo[key]} onChange={(e) => setCourseForm({ ...courseForm, seo: { ...courseForm.seo, [key]: e.target.value } })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" placeholder={placeholder} />}</div>))}
//                   </div>
//                 )}
//                 {activeTab === "faqs" && (
//   <div className="space-y-4">
//     <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">
//       Add frequently asked questions that will appear on the course page.
//     </div>

//     {courseForm?.faqs?.map((faq, index) => (
//       <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
//         <div className="flex items-center justify-between">
//           <span className="text-sm font-semibold text-slate-600">FAQ #{index + 1}</span>
//           <button
//             type="button"
//             onClick={() => {
//               const updated = courseForm.faqs.filter((_, i) => i !== index);
//               setCourseForm({ ...courseForm, faqs: updated });
//             }}
//             className="rounded-xl bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 hover:bg-red-100 transition"
//           >
//             Delete
//           </button>
//         </div>
//         <div>
//           <label className="mb-1.5 block text-sm font-semibold text-slate-700">Question</label>
//           <input
//             value={faq.question}
//             onChange={(e) => {
//               const updated = [...courseForm.faqs];
//               updated[index] = { ...updated[index], question: e.target.value };
//               setCourseForm({ ...courseForm, faqs: updated });
//             }}
//             placeholder="e.g. Is this course beginner friendly?"
//             className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
//           />
//         </div>
//         <div>
//           <label className="mb-1.5 block text-sm font-semibold text-slate-700">Answer</label>
//           <textarea
//             rows={3}
//             value={faq.answer}
//             onChange={(e) => {
//               const updated = [...courseForm.faqs];
//               updated[index] = { ...updated[index], answer: e.target.value };
//               setCourseForm({ ...courseForm, faqs: updated });
//             }}
//             placeholder="Write a clear, helpful answer..."
//             className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
//           />
//         </div>
//       </div>
//     ))}

//     <button
//       type="button"
//       onClick={() => setCourseForm({ ...courseForm, faqs: [...courseForm.faqs, { question: "", answer: "" }] })}
//       className="w-full rounded-2xl border-2 border-dashed border-blue-300 bg-white py-4 text-sm font-semibold text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition"
//     >
//       + Add FAQ
//     </button>
//   </div>
// )}
//               </div>
//               <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closeCourseModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleSaveCourse} disabled={savingCourse || !courseForm.name.trim()} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg disabled:opacity-50"><Save size={16} />{savingCourse ? "Saving..." : courseModal.editing ? "Update Course" : "Add Course"}</button></div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Blog Modal */}
//       <AnimatePresence>
//         {blogModal.open && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
//             <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
//               <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-indigo-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{blogModal.editing ? "Edit Blog" : "Add New Blog"}</h2><p className="text-sm text-slate-500">Add blog content, image and SEO settings</p></div><button onClick={closeBlogModal} className="rounded-xl p-2 text-slate-500"><X size={20} /></button></div>
//               <div className="flex gap-2 border-b border-slate-100 bg-white px-6 pt-4">{(["basic", "seo"] as const).map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-t-2xl px-5 py-3 text-sm font-semibold capitalize transition ${activeTab === tab ? "bg-indigo-600 text-white shadow-md" : "text-slate-500 hover:bg-slate-100"}`}>{tab === "seo" ? "SEO & Meta Tags" : "Basic Info"}</button>))}</div>
//               <div className="p-6">
//                 {activeTab === "basic" && (
//                   <div className="space-y-5">
//                     <div className="grid gap-4 sm:grid-cols-2">
//                       <div className="sm:col-span-2"><label className="mb-1.5 block text-sm font-semibold text-slate-700">Blog Title *</label><input value={blogForm.title} onChange={(e) => { const newTitle = e.target.value; setBlogForm({ ...blogForm, title: newTitle, slug: blogModal.editing ? blogForm.slug : slugify(newTitle) }); }} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Slug *</label><input value={blogForm.slug} onChange={(e) => setBlogForm({ ...blogForm, slug: slugify(e.target.value) })} placeholder="example-blog-post" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Category</label><select value={blogForm.category} onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"><option>General</option><option>Data Science</option><option>Data Analytics</option><option>Business Analytics</option><option>Digital Marketing</option><option>Cloud Computing</option><option>Career Tips</option></select></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Author</label><div className="relative"><User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={blogForm.author} onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })} placeholder="Admin" className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div></div>
//                       <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Publish Date</label><div className="relative"><CalendarDays size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input type="date" value={blogForm.publishedAt} onChange={(e) => setBlogForm({ ...blogForm, publishedAt: e.target.value })} className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div></div>
//                     </div>
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Short Excerpt</label><textarea rows={3} value={blogForm.excerpt} onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })} placeholder="Small summary for blog card..." className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Blog Content *</label><textarea rows={10} value={blogForm.content} onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })} placeholder="Write full blog content here..." className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
//                     <div><label className="mb-2 block text-sm font-semibold text-slate-700">Blog Image</label><div onClick={() => blogFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-indigo-400 hover:bg-indigo-50">{blogPreviewUrl ? <img src={blogPreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-indigo-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload blog image</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={blogFileRef} type="file" accept="image/*" onChange={handleBlogImageChange} className="hidden" /></div>
//                     <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><button type="button" onClick={() => setBlogForm({ ...blogForm, featured: !blogForm.featured })} className="flex items-center gap-3 text-sm font-semibold text-slate-700">{blogForm.featured ? <ToggleRight size={28} className="text-indigo-600" /> : <ToggleLeft size={28} className="text-slate-400" />}<span>{blogForm.featured ? "Featured Blog" : "Not Featured"}</span></button></div>
//                   </div>
//                 )}
//                 {activeTab === "seo" && (
//                   <div className="space-y-4">
//                     <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-700">SEO fields help your blog pages rank better on Google and improve share preview.</div>
//                     {seoFields.map(({ key, label, placeholder }) => (<div key={key}><label className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>{key.toLowerCase().includes("description") ? <textarea rows={3} value={blogForm.seo[key]} onChange={(e) => setBlogForm({ ...blogForm, seo: { ...blogForm.seo, [key]: e.target.value } })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" placeholder={placeholder} /> : <input value={blogForm.seo[key]} onChange={(e) => setBlogForm({ ...blogForm, seo: { ...blogForm.seo, [key]: e.target.value } })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" placeholder={placeholder} />}</div>))}
//                   </div>
//                 )}
//               </div>
//               <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closeBlogModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleSaveBlog} disabled={savingBlog || !blogForm.title.trim() || !blogForm.content.trim()} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-semibold text-white shadow-lg disabled:opacity-50"><Save size={16} />{savingBlog ? "Saving..." : blogModal.editing ? "Update Blog" : "Add Blog"}</button></div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Placement Modal */}
//       <AnimatePresence>
//         {placementModal.open && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
//             <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
//               <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-emerald-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{placementModal.editing ? "Edit Placement" : "Add New Placement"}</h2><p className="text-sm text-slate-500">Add student placement details</p></div><button onClick={closePlacementModal} className="rounded-xl p-2 text-slate-500"><X size={20} /></button></div>
//               <div className="p-6">
//                 <div className="space-y-5">
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Student Name *</label><div className="relative"><User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={placementForm.studentName} onChange={(e) => setPlacementForm({ ...placementForm, studentName: e.target.value })} placeholder="e.g. John Doe" className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div></div>
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Company Name *</label><div className="relative"><Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={placementForm.companyName} onChange={(e) => setPlacementForm({ ...placementForm, companyName: e.target.value })} placeholder="e.g. Google, Amazon" className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div></div>
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Role / Position</label><input value={placementForm.role} onChange={(e) => setPlacementForm({ ...placementForm, role: e.target.value })} placeholder="e.g. Software Engineer" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div>
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Display Order</label><input type="number" value={placementForm.order} onChange={(e) => setPlacementForm({ ...placementForm, order: parseInt(e.target.value) || 0 })} placeholder="0" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /><p className="mt-1 text-xs text-slate-500">Lower numbers appear first</p></div>
//                   </div>
//                   <div><label className="mb-2 block text-sm font-semibold text-slate-700">Student Image *</label><div onClick={() => placementStudentFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-emerald-400 hover:bg-emerald-50">{placementStudentPreviewUrl ? <img src={placementStudentPreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Student Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-emerald-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload student image</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={placementStudentFileRef} type="file" accept="image/*" onChange={handlePlacementStudentImageChange} className="hidden" /></div>
//                   <div><label className="mb-2 block text-sm font-semibold text-slate-700">Company Logo (Optional)</label><div onClick={() => placementCompanyFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-emerald-400 hover:bg-emerald-50">{placementCompanyPreviewUrl ? <img src={placementCompanyPreviewUrl} className="h-24 w-24 rounded-2xl object-contain bg-white p-2 shadow-sm" alt="Company Logo Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Building2 size={28} className="text-slate-400 group-hover:text-emerald-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload company logo</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={placementCompanyFileRef} type="file" accept="image/*" onChange={handlePlacementCompanyLogoChange} className="hidden" /></div>
//                   <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><button type="button" onClick={() => setPlacementForm({ ...placementForm, isFeatured: !placementForm.isFeatured })} className="flex items-center gap-3 text-sm font-semibold text-slate-700">{placementForm.isFeatured ? <ToggleRight size={28} className="text-emerald-600" /> : <ToggleLeft size={28} className="text-slate-400" />}<span>{placementForm.isFeatured ? "Featured Placement" : "Not Featured"}</span></button></div>
//                 </div>
//               </div>
//               <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closePlacementModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleSavePlacement} disabled={savingPlacement || !placementForm.studentName.trim() || !placementForm.companyName.trim() || (!placementStudentImageFile && !placementModal.editing)} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 font-semibold text-white shadow-lg disabled:opacity-50"><Save size={16} />{savingPlacement ? "Saving..." : placementModal.editing ? "Update Placement" : "Add Placement"}</button></div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Tile Modal */}
//       <AnimatePresence>
//         {/* {tileModal.open && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
//             <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
//               <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-purple-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{tileModal.editing ? "Edit Tile" : "Add New Tile"}</h2><p className="text-sm text-slate-500">Configure dashboard tile settings</p></div><button onClick={closeTileModal} className="rounded-xl p-2 text-slate-500"><X size={20} /></button></div>
//               <div className="p-6">
//                 <div className="space-y-5">
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Title *</label><input value={tileForm.title} onChange={(e) => setTileForm({ ...tileForm, title: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100" /></div>
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Icon Color</label><select value={tileForm.color} onChange={(e) => setTileForm({ ...tileForm, color: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100"><option value="from-blue-500 to-blue-600">Blue</option><option value="from-purple-500 to-purple-600">Purple</option><option value="from-green-500 to-green-600">Green</option><option value="from-red-500 to-red-600">Red</option><option value="from-yellow-500 to-orange-600">Yellow</option><option value="from-pink-500 to-rose-600">Pink</option><option value="from-indigo-500 to-indigo-600">Indigo</option><option value="from-emerald-500 to-emerald-600">Emerald</option></select></div>
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Link URL</label><input value={tileForm.link} onChange={(e) => setTileForm({ ...tileForm, link: e.target.value })} placeholder="/courses or https://example.com" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100" /></div>
//                     <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Display Order</label><input type="number" value={tileForm.order} onChange={(e) => setTileForm({ ...tileForm, order: parseInt(e.target.value) || 0 })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100" /></div>
//                   </div>
//                   <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Description</label><textarea rows={3} value={tileForm.description} onChange={(e) => setTileForm({ ...tileForm, description: e.target.value })} placeholder="Brief description of this tile/feature..." className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100" /></div>
//                   <div><label className="mb-2 block text-sm font-semibold text-slate-700">Tile Image (Optional)</label><div onClick={() => tileFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-purple-400 hover:bg-purple-50">{tilePreviewUrl ? <img src={tilePreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-purple-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload tile image</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={tileFileRef} type="file" accept="image/*" onChange={handleTileImageChange} className="hidden" /></div>
//                   <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><button type="button" onClick={() => setTileForm({ ...tileForm, isActive: !tileForm.isActive })} className="flex items-center gap-3 text-sm font-semibold text-slate-700">{tileForm.isActive ? <ToggleRight size={28} className="text-purple-600" /> : <ToggleLeft size={28} className="text-slate-400" />}<span>{tileForm.isActive ? "Tile Active" : "Tile Inactive"}</span></button></div>
//                 </div>
//               </div>
//               <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closeTileModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleSaveTile} disabled={savingTile || !tileForm.title.trim()} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 py-3 font-semibold text-white shadow-lg disabled:opacity-50"><Save size={16} />{savingTile ? "Saving..." : tileModal.editing ? "Update Tile" : "Add Tile"}</button></div>
//             </motion.div>
//           </motion.div>
//         )} */}
//         {tileModal.open && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm"
//     >
//       <motion.div
//         initial={{ scale: 0.96, y: 30 }}
//         animate={{ scale: 1, y: 0 }}
//         exit={{ scale: 0.96, y: 20 }}
//         className="my-8 w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl"
//       >
//         <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-orange-50 px-6 py-5">
//           <div>
//             <h2 className="text-xl font-bold text-slate-900">
//               {tileModal.editing ? "Edit Course Tile" : "Add New Course Tile"}
//             </h2>
//             <p className="text-sm text-slate-500">
//               Add course tiles to display on the website
//             </p>
//           </div>
//           <button
//             onClick={closeTileModal}
//             className="rounded-xl p-2 text-slate-500 transition hover:bg-white hover:text-slate-800"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <div className="p-6">
//           <div className="space-y-5">
//             <div>
//               <label className="mb-1.5 block text-sm font-semibold text-slate-700">
//                 Course Name *
//               </label>
//               <input
//                 value={tileForm.courseName}
//                 onChange={(e) =>
//                   setTileForm({ ...tileForm, courseName: e.target.value })
//                 }
//                 placeholder="e.g. Data Science Course"
//                 className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
//               />
//             </div>

//             <div>
//               <label className="mb-1.5 block text-sm font-semibold text-slate-700">
//                 Price *
//               </label>
//               <input
//                 value={tileForm.price}
//                 onChange={(e) =>
//                   setTileForm({ ...tileForm, price: e.target.value })
//                 }
//                 placeholder="e.g. ₹35,000 or Free"
//                 className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
//               />
//             </div>

//             <div>
//               <label className="mb-1.5 block text-sm font-semibold text-slate-700">
//                 Description *
//               </label>
//               <textarea
//                 rows={4}
//                 value={tileForm.description}
//                 onChange={(e) =>
//                   setTileForm({ ...tileForm, description: e.target.value })
//                 }
//                 placeholder="Brief description of the course..."
//                 className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-semibold text-slate-700">
//                 Course Image *
//               </label>
//               <div
//                 onClick={() => tileFileRef.current?.click()}
//                 className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-orange-400 hover:bg-orange-50"
//               >
//                 {tilePreviewUrl ? (
//                   <img
//                     src={tilePreviewUrl}
//                     className="h-24 w-24 rounded-2xl object-cover shadow-sm"
//                     alt="Preview"
//                   />
//                 ) : (
//                   <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm">
//                     <Upload size={28} className="text-slate-400 group-hover:text-orange-500" />
//                   </div>
//                 )}

//                 <div>
//                   <p className="text-sm font-semibold text-slate-700">
//                     Click to upload course image
//                   </p>
//                   <p className="mt-1 text-xs text-slate-500">
//                     JPG, PNG, WebP up to 5MB
//                   </p>
//                 </div>
//               </div>
//               <input
//                 ref={tileFileRef}
//                 type="file"
//                 accept="image/*"
//                 onChange={handleTileImageChange}
//                 className="hidden"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5">
//           <button
//             onClick={closeTileModal}
//             className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSaveTile}
//             disabled={savingTile || !tileForm.courseName.trim() || !tileForm.price.trim() || (!tileImageFile && !tileModal.editing)}
//             className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
//           >
//             <Save size={16} />
//             {savingTile
//               ? "Saving..."
//               : tileModal.editing
//               ? "Update Course Tile"
//               : "Add Course Tile"}
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   )}
//       </AnimatePresence>

//       {/* Delete Confirmation Modal */}
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
  Grid3x3
} from "lucide-react";

const API = BASE_URL;

// ✅ Define FAQ interface
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
  price: string;
  duration: string;
  description: string;
  category: string;
  image: string | null;
  featured: boolean;
  faqs: FAQ[]; // ✅ Added FAQs
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

type Section = "dashboard" | "courses" | "blogs" | "placements" | "tiles";
type Tab = "basic" | "seo" | "faqs";
type SEOKey = keyof SEO;

const createEmptySEO = (): SEO => ({
  title: "",
  description: "",
  keywords: "",
  ogTitle: "",
  ogDescription: "",
});

// ✅ Updated with faqs
const createEmptyCourse = (): Omit<Course, "id"> => ({
  name: "",
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

export default function AdminDashboard({
  token,
  onLogout,
}: {
  token: string;
  onLogout: () => void;
}) {
  // States
  const [courses, setCourses] = useState<Course[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [placements, setPlacements] = useState<Placement[]>([]);
  const [tiles, setTiles] = useState<Tile[]>([]);
  
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [loadingPlacements, setLoadingPlacements] = useState(true);
  const [loadingTiles, setLoadingTiles] = useState(true);

  const [search, setSearch] = useState("");
  const [section, setSection] = useState<Section>("dashboard");
  const [activeTab, setActiveTab] = useState<Tab>("basic");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Modal states
  const [courseModal, setCourseModal] = useState<{ open: boolean; editing: Course | null }>({ open: false, editing: null });
  const [blogModal, setBlogModal] = useState<{ open: boolean; editing: Blog | null }>({ open: false, editing: null });
  const [placementModal, setPlacementModal] = useState<{ open: boolean; editing: Placement | null }>({ open: false, editing: null });
  const [tileModal, setTileModal] = useState<{ open: boolean; editing: Tile | null }>({ open: false, editing: null });

  // Form states - ✅ Fixed with proper typing including faqs
  const [courseForm, setCourseForm] = useState<Omit<Course, "id">>(createEmptyCourse());
  const [blogForm, setBlogForm] = useState<Omit<Blog, "id">>(createEmptyBlog());
  const [placementForm, setPlacementForm] = useState<Omit<Placement, "id">>(createEmptyPlacement());
  const [tileForm, setTileForm] = useState<Omit<Tile, "id">>(createEmptyTile());

  // File states
  const [courseImageFile, setCourseImageFile] = useState<File | null>(null);
  const [blogImageFile, setBlogImageFile] = useState<File | null>(null);
  const [placementStudentImageFile, setPlacementStudentImageFile] = useState<File | null>(null);
  const [placementCompanyLogoFile, setPlacementCompanyLogoFile] = useState<File | null>(null);
  const [tileImageFile, setTileImageFile] = useState<File | null>(null);

  // Preview URLs
  const [coursePreviewUrl, setCoursePreviewUrl] = useState<string | null>(null);
  const [blogPreviewUrl, setBlogPreviewUrl] = useState<string | null>(null);
  const [placementStudentPreviewUrl, setPlacementStudentPreviewUrl] = useState<string | null>(null);
  const [placementCompanyPreviewUrl, setPlacementCompanyPreviewUrl] = useState<string | null>(null);
  const [tilePreviewUrl, setTilePreviewUrl] = useState<string | null>(null);

  // Saving states
  const [savingCourse, setSavingCourse] = useState(false);
  const [savingBlog, setSavingBlog] = useState(false);
  const [savingPlacement, setSavingPlacement] = useState(false);
  const [savingTile, setSavingTile] = useState(false);

  const [deleteState, setDeleteState] = useState<{ type: "course" | "blog" | "placement" | "tile" | null; id: string | null }>({
    type: null,
    id: null,
  });

  // Refs
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

  // Load functions
  const loadCourses = async () => {
    setLoadingCourses(true);
    try {
      const res = await fetch(`${API}/api/courses`);
      const data = await res.json();
      const coursesData = Array.isArray(data) ? data : [];
      // Ensure each course has faqs array
      const coursesWithFaqs = coursesData.map((course: any) => ({
        ...course,
        faqs: course.faqs || []
      }));
      setCourses(coursesWithFaqs);
    } catch (error) {
      console.error("Load courses error:", error);
      setCourses([]);
    } finally {
      setLoadingCourses(false);
    }
  };

  const loadBlogs = async () => {
    setLoadingBlogs(true);
    try {
      const res = await fetch(`${API}/api/blogs`);
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Load blogs error:", error);
      setBlogs([]);
    } finally {
      setLoadingBlogs(false);
    }
  };

  const loadPlacements = async () => {
    setLoadingPlacements(true);
    try {
      const res = await fetch(`${API}/api/placements`);
      const responseData = await res.json();
      if (responseData.success && Array.isArray(responseData.data)) {
        setPlacements(responseData.data);
      } else if (Array.isArray(responseData)) {
        setPlacements(responseData);
      } else {
        setPlacements([]);
      }
    } catch (error) {
      console.error("Load placements error:", error);
      setPlacements([]);
    } finally {
      setLoadingPlacements(false);
    }
  };

  const loadTiles = async () => {
    setLoadingTiles(true);
    try {
      const res = await fetch(`${API}/api/tiles`);
      const responseData = await res.json();
      console.log("Tiles response:", responseData);
      
      if (responseData.success && Array.isArray(responseData.data)) {
        setTiles(responseData.data);
      } else if (Array.isArray(responseData)) {
        setTiles(responseData);
      } else {
        setTiles([]);
      }
    } catch (error) {
      console.error("Load tiles error:", error);
      setTiles([]);
    } finally {
      setLoadingTiles(false);
    }
  };

  useEffect(() => {
    loadCourses();
    loadBlogs();
    loadPlacements();
    loadTiles();
  }, []);

  // Course functions
  const openAddCourse = () => {
    setCourseForm(createEmptyCourse());
    setCourseImageFile(null);
    setCoursePreviewUrl(null);
    setActiveTab("basic");
    setCourseModal({ open: true, editing: null });
  };

  const openEditCourse = (course: Course) => {
    setCourseForm({
      name: course.name || "",
      price: course.price || "",
      duration: course.duration || "",
      description: course.description || "",
      category: course.category || "Analytics",
      image: course.image || null,
      featured: Boolean(course.featured),
      faqs: course.faqs || [], // ✅ Added
      seo: course.seo || createEmptySEO(),
    });
    setCourseImageFile(null);
    setCoursePreviewUrl(course.image ? getImageUrl(course.image) : null);
    setActiveTab("basic");
    setCourseModal({ open: true, editing: course });
  };

  const closeCourseModal = () => {
    setCourseModal({ open: false, editing: null });
    setCourseImageFile(null);
    setCoursePreviewUrl(null);
  };

  const handleCourseImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }
    setCourseImageFile(file);
    setCoursePreviewUrl(URL.createObjectURL(file));
  };

  // ✅ Updated to include faqs in the request
  const handleSaveCourse = async () => {
    if (!courseForm.name.trim()) {
      alert("Course name is required");
      return;
    }
    setSavingCourse(true);
    try {
      const fd = new FormData();
      fd.append("name", courseForm.name.trim());
      fd.append("price", courseForm.price || "");
      fd.append("duration", courseForm.duration || "");
      fd.append("description", courseForm.description || "");
      fd.append("category", courseForm.category || "Analytics");
      fd.append("featured", String(courseForm.featured));
      fd.append("faqs", JSON.stringify(courseForm.faqs || [])); // ✅ Send FAQs as JSON string
      fd.append("seo", JSON.stringify(courseForm.seo || createEmptySEO()));
      if (courseImageFile) fd.append("image", courseImageFile);
      
      const url = courseModal.editing 
        ? `${API}/api/courses/${courseModal.editing._id || courseModal.editing.id}` 
        : `${API}/api/courses`;
      const method = courseModal.editing ? "PUT" : "POST";
      
      const res = await fetch(url, { method, headers: authHeaders, body: fd });
      const data = await res.json().catch(() => null);
      
      if (!res.ok) {
        console.error("Course save error:", data);
        alert(data?.message || data?.error || "Error saving course");
        return;
      }
      
      closeCourseModal();
      await loadCourses();
    } catch (error) {
      console.error("Course save failed:", error);
      alert("Backend/API error.");
    } finally {
      setSavingCourse(false);
    }
  };

  // Blog functions
  const openAddBlog = () => {
    setBlogForm({ ...createEmptyBlog(), publishedAt: new Date().toISOString().slice(0, 10) });
    setBlogImageFile(null);
    setBlogPreviewUrl(null);
    setActiveTab("basic");
    setBlogModal({ open: true, editing: null });
  };

  const openEditBlog = (blog: Blog) => {
    setBlogForm({
      title: blog.title || "",
      slug: blog.slug || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      category: blog.category || "General",
      author: blog.author || "",
      image: blog.image || null,
      featured: Boolean(blog.featured),
      publishedAt: blog.publishedAt ? blog.publishedAt.slice(0, 10) : "",
      seo: blog.seo || createEmptySEO(),
    });
    setBlogImageFile(null);
    setBlogPreviewUrl(blog.image ? getImageUrl(blog.image) : null);
    setActiveTab("basic");
    setBlogModal({ open: true, editing: blog });
  };

  const closeBlogModal = () => {
    setBlogModal({ open: false, editing: null });
    setBlogImageFile(null);
    setBlogPreviewUrl(null);
  };

  const handleBlogImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }
    setBlogImageFile(file);
    setBlogPreviewUrl(URL.createObjectURL(file));
  };

  const handleSaveBlog = async () => {
    if (!blogForm.title.trim() || !blogForm.content.trim()) {
      alert("Blog title and content are required");
      return;
    }
    setSavingBlog(true);
    try {
      const fd = new FormData();
      fd.append("title", blogForm.title.trim());
      fd.append("slug", blogForm.slug || slugify(blogForm.title));
      fd.append("excerpt", blogForm.excerpt || "");
      fd.append("content", blogForm.content || "");
      fd.append("category", blogForm.category || "General");
      fd.append("author", blogForm.author || "Admin");
      fd.append("featured", String(blogForm.featured));
      fd.append("publishedAt", blogForm.publishedAt || "");
      fd.append("seo", JSON.stringify(blogForm.seo || createEmptySEO()));
      if (blogImageFile) fd.append("image", blogImageFile);
      
      const url = blogModal.editing 
        ? `${API}/api/blogs/${blogModal.editing._id || blogModal.editing.id}` 
        : `${API}/api/blogs`;
      const method = blogModal.editing ? "PUT" : "POST";
      
      const res = await fetch(url, { method, headers: authHeaders, body: fd });
      const data = await res.json().catch(() => null);
      
      if (!res.ok) {
        console.error("Blog save error:", data);
        alert(data?.message || data?.error || "Error saving blog");
        return;
      }
      
      closeBlogModal();
      await loadBlogs();
    } catch (error) {
      console.error("Blog save failed:", error);
      alert("Backend/API error.");
    } finally {
      setSavingBlog(false);
    }
  };

  // Placement functions
  const openAddPlacement = () => {
    setPlacementForm(createEmptyPlacement());
    setPlacementStudentImageFile(null);
    setPlacementCompanyLogoFile(null);
    setPlacementStudentPreviewUrl(null);
    setPlacementCompanyPreviewUrl(null);
    setPlacementModal({ open: true, editing: null });
  };

  const openEditPlacement = (placement: Placement) => {
    setPlacementForm({
      studentName: placement.studentName || "",
      studentImage: placement.studentImage || null,
      companyName: placement.companyName || "",
      companyLogo: placement.companyLogo || null,
      role: placement.role || "",
      isFeatured: Boolean(placement.isFeatured),
      order: placement.order || 0,
    });
    setPlacementStudentImageFile(null);
    setPlacementCompanyLogoFile(null);
    setPlacementStudentPreviewUrl(placement.studentImage ? getImageUrl(placement.studentImage) : null);
    setPlacementCompanyPreviewUrl(placement.companyLogo ? getImageUrl(placement.companyLogo) : null);
    setPlacementModal({ open: true, editing: placement });
  };

  const closePlacementModal = () => {
    setPlacementModal({ open: false, editing: null });
    setPlacementStudentImageFile(null);
    setPlacementCompanyLogoFile(null);
    setPlacementStudentPreviewUrl(null);
    setPlacementCompanyPreviewUrl(null);
  };

  const handlePlacementStudentImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }
    setPlacementStudentImageFile(file);
    setPlacementStudentPreviewUrl(URL.createObjectURL(file));
  };

  const handlePlacementCompanyLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }
    setPlacementCompanyLogoFile(file);
    setPlacementCompanyPreviewUrl(URL.createObjectURL(file));
  };

  const handleSavePlacement = async () => {
    if (!placementForm.studentName?.trim()) {
      alert("Student name is required");
      return;
    }
    if (!placementForm.companyName?.trim()) {
      alert("Company name is required");
      return;
    }
    if (!placementModal.editing && !placementStudentImageFile) {
      alert("Student image is required");
      return;
    }
    setSavingPlacement(true);
    try {
      const formData = new FormData();
      formData.append('studentName', placementForm.studentName.trim());
      formData.append('companyName', placementForm.companyName.trim());
      formData.append('role', placementForm.role?.trim() || '');
      formData.append('isFeatured', String(placementForm.isFeatured));
      formData.append('order', String(placementForm.order || 0));
      if (placementStudentImageFile) formData.append('studentImage', placementStudentImageFile);
      if (placementCompanyLogoFile) formData.append('companyLogo', placementCompanyLogoFile);
      
      const url = placementModal.editing 
        ? `${API}/api/placements/${placementModal.editing._id || placementModal.editing.id}` 
        : `${API}/api/placements`;
      const method = placementModal.editing ? "PUT" : "POST";
      
      const res = await fetch(url, { method, headers: authHeaders, body: formData });
      const responseData = await res.json();
      
      if (!res.ok) {
        console.error("Placement save error:", responseData);
        alert(responseData?.message || "Error saving placement");
        return;
      }
      
      alert(`Placement ${placementModal.editing ? "updated" : "added"} successfully!`);
      closePlacementModal();
      await loadPlacements();
    } catch (error) {
      console.error("Placement save failed:", error);
      alert("Error saving placement.");
    } finally {
      setSavingPlacement(false);
    }
  };

  // Tile functions
  const openAddTile = () => {
    setTileForm(createEmptyTile());
    setTileImageFile(null);
    setTilePreviewUrl(null);
    setTileModal({ open: true, editing: null });
  };

  const openEditTile = (tile: Tile) => {
    setTileForm({
      courseName: tile.courseName || "",
      description: tile.description || "",
      price: tile.price || "",
      image: tile.image || null,
    });
    setTileImageFile(null);
    setTilePreviewUrl(tile.image ? getImageUrl(tile.image) : null);
    setTileModal({ open: true, editing: tile });
  };

  const closeTileModal = () => {
    setTileModal({ open: false, editing: null });
    setTileImageFile(null);
    setTilePreviewUrl(null);
  };

  const handleTileImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }
    setTileImageFile(file);
    setTilePreviewUrl(URL.createObjectURL(file));
  };

  const handleSaveTile = async () => {
    if (!tileForm.courseName.trim()) {
      alert("Course name is required");
      return;
    }
    if (!tileForm.price.trim()) {
      alert("Price is required");
      return;
    }
    if (!tileForm.description.trim()) {
      alert("Description is required");
      return;
    }
    if (!tileModal.editing && !tileImageFile) {
      alert("Course image is required");
      return;
    }

    setSavingTile(true);

    try {
      const formData = new FormData();
      formData.append('courseName', tileForm.courseName.trim());
      formData.append('description', tileForm.description.trim());
      formData.append('price', tileForm.price.trim());
      
      if (tileImageFile) {
        formData.append('image', tileImageFile);
      }

      const url = tileModal.editing
        ? `${API}/api/tiles/${tileModal.editing._id || tileModal.editing.id}`
        : `${API}/api/tiles`;

      const method = tileModal.editing ? "PUT" : "POST";

      const res = await fetch(url, {
        method: method,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const responseData = await res.json();

      if (!res.ok) {
        console.error("Tile save error:", responseData);
        alert(responseData?.message || "Error saving course tile");
        return;
      }

      alert(`Course tile ${tileModal.editing ? "updated" : "added"} successfully!`);
      closeTileModal();
      await loadTiles();
      
    } catch (error) {
      console.error("Tile save failed:", error);
      alert("Error saving course tile");
    } finally {
      setSavingTile(false);
    }
  };
  
  const handleDelete = async () => {
    if (!deleteState.id || !deleteState.type) return;
    try {
      let endpoint = "";
      if (deleteState.type === "course") endpoint = `${API}/api/courses/${deleteState.id}`;
      else if (deleteState.type === "blog") endpoint = `${API}/api/blogs/${deleteState.id}`;
      else if (deleteState.type === "placement") endpoint = `${API}/api/placements/${deleteState.id}`;
      else endpoint = `${API}/api/tiles/${deleteState.id}`;
      
      const res = await fetch(endpoint, { method: "DELETE", headers: authHeaders });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        alert(data?.message || data?.error || "Delete failed");
        return;
      }
      
      if (deleteState.type === "course") await loadCourses();
      else if (deleteState.type === "blog") await loadBlogs();
      else if (deleteState.type === "placement") await loadPlacements();
      else await loadTiles();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Delete failed.");
    } finally {
      setDeleteState({ type: null, id: null });
    }
  };

  // Filter functions
  const filteredCourses = courses.filter((course) => course.name.toLowerCase().includes(search.toLowerCase()));
  const filteredBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()));
  const filteredPlacements = placements.filter((placement) => placement.studentName.toLowerCase().includes(search.toLowerCase()));
  const filteredTiles = tiles.filter((tile) => tile.courseName.toLowerCase().includes(search.toLowerCase()));

  const sidebarLinks = [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { key: "courses", label: "Courses", icon: GraduationCap },
    { key: "blogs", label: "Blogs", icon: FileText },
    { key: "placements", label: "Placements", icon: BriefcaseBusiness },
    { key: "tiles", label: "Tiles", icon: Grid3x3 },
    { key: "settings", label: "Settings", icon: Settings },
  ] as const;

  const statCards = [
    { label: "Total Courses", value: courses.length, icon: <BookOpen size={18} />, color: "from-blue-500/10 to-blue-100 text-blue-700 border-blue-200" },
    { label: "Total Blogs", value: blogs.length, icon: <FileText size={18} />, color: "from-indigo-500/10 to-indigo-100 text-indigo-700 border-indigo-200" },
    { label: "Total Placements", value: placements.length, icon: <Trophy size={18} />, color: "from-emerald-500/10 to-emerald-100 text-emerald-700 border-emerald-200" },
    { label: "Active Tiles", value: tiles.filter(t => t.courseName).length, icon: <Grid3x3 size={18} />, color: "from-purple-500/10 to-purple-100 text-purple-700 border-purple-200" },
  ];

  const seoFields: { key: SEOKey; label: string; placeholder: string }[] = [
    { key: "title", label: "Page Title", placeholder: "SEO page title" },
    { key: "description", label: "Meta Description", placeholder: "Meta description" },
    { key: "keywords", label: "Meta Keywords", placeholder: "course, training, delhi" },
    { key: "ogTitle", label: "Open Graph Title", placeholder: "Social share title" },
    { key: "ogDescription", label: "Open Graph Description", placeholder: "Social share description" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
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
            <div className="space-y-2">
              {sidebarLinks.map((item) => {
                const Icon = item.icon;
                const isActive = section === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => { if (item.key !== "settings") setSection(item.key as Section); }}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "text-slate-600 hover:bg-slate-100"}`}
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

        {/* Mobile Sidebar */}
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
                <div className="flex-1 space-y-2 px-4 py-6">
                  {sidebarLinks.map((item) => {
                    const Icon = item.icon;
                    const isActive = section === item.key;
                    return (
                      <button key={item.key} onClick={() => { if (item.key !== "settings") { setSection(item.key as Section); setMobileSidebarOpen(false); } }} className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100"}`}>
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

        {/* Main Content */}
        <div className="flex-1">
          <header className="sticky top-0 z-30 border-b border-white/20 bg-white/80 shadow-sm backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button onClick={() => setMobileSidebarOpen(true)} className="rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm lg:hidden"><Menu size={20} /></button>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {section === "dashboard" && "Dashboard Overview"}
                    {section === "courses" && "Courses Management"}
                    {section === "blogs" && "Blogs Management"}
                    {section === "placements" && "Placements Management"}
                    {section === "tiles" && "Tiles Management"}
                  </h2>
                  <p className="text-sm text-slate-500">Manage your courses, blogs, placements and tiles smoothly</p>
                </div>
              </div>
              <div className="hidden items-center gap-3 sm:flex">
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">● Backend Connected</span>
              </div>
            </div>
          </header>

          <main className="px-4 py-6 sm:px-6 lg:px-8">
            {/* Hero Section */}
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

            {/* Stats Cards */}
            <div className="mb-8 grid grid-cols-2 gap-4 xl:grid-cols-4">
              {statCards.map((stat) => (
                <div key={stat.label} className={`rounded-3xl border bg-gradient-to-br ${stat.color} p-5 shadow-sm`}>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-2xl bg-white/80 p-3 shadow-sm">{stat.icon}</div>
                    <span className="text-3xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm font-medium opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Search and Add Buttons */}
            <div className="mb-6 flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={section === "courses" ? "Search courses..." : section === "blogs" ? "Search blogs..." : section === "placements" ? "Search placements..." : section === "tiles" ? "Search tiles..." : "Search..."} className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" />
              </div>
              {section === "courses" && <button onClick={openAddCourse} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Course</button>}
              {section === "blogs" && <button onClick={openAddBlog} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Blog</button>}
              {section === "placements" && <button onClick={openAddPlacement} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Placement</button>}
              {section === "tiles" && <button onClick={openAddTile} className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 text-sm font-semibold text-white shadow-lg"><Plus size={18} /> Add Tile</button>}
            </div>

            {/* Dashboard Section */}
            {section === "dashboard" && (
              <div className="grid gap-6 xl:grid-cols-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                  <h3 className="mb-4 text-lg font-bold text-slate-900">Recent Courses</h3>
                  <div className="space-y-4">
                    {courses.slice(0, 5).map((course) => (
                      <div key={course.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-blue-50">
                          {course.image ? <img src={getImageUrl(course.image)} alt={course.name} className="h-full w-full object-cover" /> : <BookOpen size={18} className="text-blue-600" />}
                        </div>
                        <div className="min-w-0 flex-1"><p className="truncate font-semibold text-slate-900">{course.name}</p><p className="text-xs text-slate-500">{course.category}</p></div>
                      </div>
                    ))}
                    {courses.length === 0 && <p className="text-sm text-slate-500">No courses available.</p>}
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                  <h3 className="mb-4 text-lg font-bold text-slate-900">Recent Blogs</h3>
                  <div className="space-y-4">
                    {blogs.slice(0, 5).map((blog) => (
                      <div key={blog.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-indigo-50">
                          {blog.image ? <img src={getImageUrl(blog.image)} alt={blog.title} className="h-full w-full object-cover" /> : <FileText size={18} className="text-indigo-600" />}
                        </div>
                        <div className="min-w-0 flex-1"><p className="truncate font-semibold text-slate-900">{blog.title}</p><p className="text-xs text-slate-500">{blog.category} • {blog.author || "Admin"}</p></div>
                      </div>
                    ))}
                    {blogs.length === 0 && <p className="text-sm text-slate-500">No blogs available.</p>}
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                  <h3 className="mb-4 text-lg font-bold text-slate-900">Recent Placements</h3>
                  <div className="space-y-4">
                    {placements.slice(0, 5).map((placement) => (
                      <div key={placement.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-emerald-50">
                          {placement.studentImage ? <img src={getImageUrl(placement.studentImage)} alt={placement.studentName} className="h-full w-full object-cover" /> : <User size={18} className="text-emerald-600" />}
                        </div>
                        <div className="min-w-0 flex-1"><p className="truncate font-semibold text-slate-900">{placement.studentName}</p><p className="text-xs text-slate-500">{placement.companyName} • {placement.role}</p></div>
                      </div>
                    ))}
                    {placements.length === 0 && <p className="text-sm text-slate-500">No placements available.</p>}
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                  <h3 className="mb-4 text-lg font-bold text-slate-900">Active Tiles</h3>
                  <div className="space-y-4">
                    {tiles.filter(t => t.courseName).slice(0, 5).map((tile) => (
                      <div key={tile.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-purple-50">
                          {tile.image ? <img src={getImageUrl(tile.image)} alt={tile.courseName} className="h-full w-full object-cover" /> : <Grid3x3 size={18} className="text-purple-600" />}
                        </div>
                        <div className="min-w-0 flex-1"><p className="truncate font-semibold text-slate-900">{tile.courseName}</p><p className="text-xs text-slate-500">{tile.price}</p></div>
                      </div>
                    ))}
                    {tiles.length === 0 && <p className="text-sm text-slate-500">No tiles available.</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Courses Section */}
            {section === "courses" && (
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
                <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4"><h3 className="text-lg font-bold text-slate-900">Courses List</h3><p className="text-sm text-slate-500">View and manage all available courses</p></div>
                {loadingCourses ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px]">
                      <thead className="bg-slate-50/80">
                        <tr>
                          {["Course", "Category", "Price", "Duration", "Featured", "FAQs Count", "Actions"].map(h => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredCourses.map((course) => (
                          <tr key={course.id} className="transition hover:bg-blue-50/40">
                            <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 shadow-sm">{course.image ? <img src={getImageUrl(course.image)} className="h-full w-full object-cover" alt={course.name} /> : <BookOpen size={18} className="text-blue-600" />}</div><div><p className="font-semibold text-slate-900">{course.name}</p></div></div></td>
                            <td className="px-5 py-4"><span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{course.category}</span></td>
                            <td className="px-5 py-4 text-sm font-semibold text-slate-700">{course.price || "—"}</td>
                            <td className="px-5 py-4 text-sm text-slate-600">{course.duration || "—"}</td>
                            <td className="px-5 py-4">{course.featured ? <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700"><Star size={14} className="fill-yellow-400 text-yellow-500" /> Featured</div> : <span className="text-sm text-slate-300">—</span>}</td>
                            <td className="px-5 py-4"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{course.faqs?.length || 0} FAQs</span></td>
                            <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditCourse(course)} className="rounded-xl border border-blue-100 bg-blue-50 p-2.5 text-blue-600"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "course", id: course._id || course.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500"><Trash2 size={15} /></button></div></td>
                          </tr>
                        ))}
                        {filteredCourses.length === 0 && <tr><td colSpan={7} className="px-6 py-16 text-center"><div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100"><BookOpen size={28} className="text-slate-400" /></div><p className="text-lg font-semibold text-slate-700">No courses found</p></td></tr>}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Blogs Section */}
            {section === "blogs" && (
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
                <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4"><h3 className="text-lg font-bold text-slate-900">Blogs List</h3><p className="text-sm text-slate-500">View and manage all blog posts</p></div>
                {loadingBlogs ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[1100px]">
                      <thead className="bg-slate-50/80"><tr>{["Blog", "Category", "Author", "Published", "Featured", "Actions"].map(h => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredBlogs.map((blog) => (
                          <tr key={blog.id} className="transition hover:bg-indigo-50/40">
                            <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-sm">{blog.image ? <img src={getImageUrl(blog.image)} className="h-full w-full object-cover" alt={blog.title} /> : <FileText size={18} className="text-indigo-600" />}</div><div><p className="font-semibold text-slate-900">{blog.title}</p></div></div></td>
                            <td className="px-5 py-4"><span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">{blog.category}</span></td>
                            <td className="px-5 py-4 text-sm text-slate-700">{blog.author || "Admin"}</td>
                            <td className="px-5 py-4 text-sm text-slate-600">{blog.publishedAt || "—"}</td>
                            <td className="px-5 py-4">{blog.featured ? <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700"><Star size={14} className="fill-yellow-400 text-yellow-500" /> Featured</div> : <span className="text-sm text-slate-300">—</span>}</td>
                            <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditBlog(blog)} className="rounded-xl border border-indigo-100 bg-indigo-50 p-2.5 text-indigo-600"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "blog", id: blog._id || blog.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500"><Trash2 size={15} /></button></div></td>
                          </tr>
                        ))}
                        {filteredBlogs.length === 0 && <tr><td colSpan={6} className="px-6 py-16 text-center"><div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100"><FileText size={28} className="text-slate-400" /></div><p className="text-lg font-semibold text-slate-700">No blogs found</p></td></tr>}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Placements Section */}
            {section === "placements" && (
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
                <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4"><h3 className="text-lg font-bold text-slate-900">Placements List</h3><p className="text-sm text-slate-500">View and manage all student placements</p></div>
                {loadingPlacements ? <div className="space-y-4 p-8">{[...Array(5)].map((_, i) => <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100" />)}</div> : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[1000px]">
                      <thead className="bg-slate-50/80"><tr>{["Student", "Company", "Role", "Featured", "Order", "Actions"].map(h => <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{h}</th>)}</tr></thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredPlacements.map((placement) => (
                          <tr key={placement.id} className="transition hover:bg-emerald-50/40">
                            <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 shadow-sm">{placement.studentImage ? <img src={getImageUrl(placement.studentImage)} className="h-full w-full object-cover" alt={placement.studentName} /> : <User size={18} className="text-emerald-600" />}</div><div><p className="font-semibold text-slate-900">{placement.studentName}</p></div></div></td>
                            <td className="px-5 py-4"><div className="flex items-center gap-2">{placement.companyLogo && <img src={getImageUrl(placement.companyLogo)} className="h-6 w-6 rounded object-contain" alt={placement.companyName} />}<span className="font-medium text-slate-700">{placement.companyName}</span></div></td>
                            <td className="px-5 py-4 text-sm text-slate-600">{placement.role || "—"}</td>
                            <td className="px-5 py-4">{placement.isFeatured ? <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700"><Star size={14} className="fill-yellow-400 text-yellow-500" /> Featured</div> : <span className="text-sm text-slate-300">—</span>}</td>
                            <td className="px-5 py-4 text-sm text-slate-600">{placement.order || 0}</td>
                            <td className="px-5 py-4"><div className="flex items-center gap-2"><button onClick={() => openEditPlacement(placement)} className="rounded-xl border border-emerald-100 bg-emerald-50 p-2.5 text-emerald-600"><Edit2 size={15} /></button><button onClick={() => setDeleteState({ type: "placement", id: placement._id || placement.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500"><Trash2 size={15} /></button></div></td>
                          </tr>
                        ))}
                        {filteredPlacements.length === 0 && <tr><td colSpan={6} className="px-6 py-16 text-center"><div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100"><BriefcaseBusiness size={28} className="text-slate-400" /></div><p className="text-lg font-semibold text-slate-700">No placements found</p></td></tr>}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Tiles Section */}
            {section === "tiles" && (
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl">
                <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Course Tiles List</h3>
                    <p className="text-sm text-slate-500">View and manage all course tiles displayed on website</p>
                  </div>
                  <button
                    onClick={openAddTile}
                    className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
                  >
                    <Plus size={16} />
                    Add Course Tile
                  </button>
                </div>

                {loadingTiles ? (
                  <div className="space-y-4 p-8">
                    {[...Array(5)].map((_, index) => (
                      <div key={index} className="h-16 animate-pulse rounded-2xl bg-slate-100" />
                    ))}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px]">
                      <thead className="bg-slate-50/80">
                        <tr>
                          {["Course", "Description", "Price", "Image", "Actions"].map((heading) => (
                            <th key={heading} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredTiles.map((tile) => (
                          <tr key={tile.id} className="transition hover:bg-orange-50/40">
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 shadow-sm">
                                  {tile.image ? (
                                    <img src={getImageUrl(tile.image)} className="h-full w-full object-cover" alt={tile.courseName} />
                                  ) : (
                                    <BookOpen size={18} className="text-orange-600" />
                                  )}
                                </div>
                                <div>
                                  <p className="font-semibold text-slate-900">{tile.courseName}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-4 text-sm text-slate-600 max-w-[300px]">
                              <div className="truncate">{tile.description || "—"}</div>
                            </td>
                            <td className="px-5 py-4">
                              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                                {tile.price || "—"}
                              </span>
                            </td>
                            <td className="px-5 py-4">
                              {tile.image ? (
                                <span className="text-xs text-green-600">✓ Uploaded</span>
                              ) : (
                                <span className="text-xs text-red-500">No image</span>
                              )}
                            </td>
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-2">
                                <button onClick={() => openEditTile(tile)} className="rounded-xl border border-orange-100 bg-orange-50 p-2.5 text-orange-600 transition hover:bg-orange-100">
                                  <Edit2 size={15} />
                                </button>
                                <button onClick={() => setDeleteState({ type: "tile", id: tile._id || tile.id })} className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500 transition hover:bg-red-100">
                                  <Trash2 size={15} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {filteredTiles.length === 0 && (
                          <tr>
                            <td colSpan={5} className="px-6 py-16 text-center">
                              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                                <BookOpen size={28} className="text-slate-400" />
                              </div>
                              <p className="text-lg font-semibold text-slate-700">No course tiles found</p>
                              <p className="text-sm text-slate-500 mt-1">Click "Add Course Tile" to create one</p>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Course Modal */}
      <AnimatePresence>
        {courseModal.open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{courseModal.editing ? "Edit Course" : "Add New Course"}</h2><p className="text-sm text-slate-500">Update course details and SEO settings</p></div><button onClick={closeCourseModal} className="rounded-xl p-2 text-slate-500"><X size={20} /></button></div>
              <div className="flex gap-2 border-b border-slate-100 bg-white px-6 pt-4">
                {(["basic", "faqs", "seo"] as const).map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`rounded-t-2xl px-5 py-3 text-sm font-semibold capitalize transition ${
                      activeTab === tab ? "bg-blue-600 text-white shadow-md" : "text-slate-500 hover:bg-slate-100"
                    }`}>
                    {tab === "seo" ? "SEO & Meta Tags" : tab === "faqs" ? "FAQs" : "Basic Info"}
                  </button>
                ))}
              </div>
              <div className="p-6">
                {activeTab === "basic" && (
                  <div className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Course Name *</label><input value={courseForm.name} onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Category *</label><select value={courseForm.category} onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"><option>Analytics</option><option>AI/ML</option><option>Marketing</option><option>Cloud</option><option>Development</option><option>Design</option></select></div>
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
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">
                      Add frequently asked questions that will appear on the course page.
                    </div>

                    {courseForm?.faqs?.map((faq, index) => (
                      <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-600">FAQ #{index + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = courseForm.faqs.filter((_, i) => i !== index);
                              setCourseForm({ ...courseForm, faqs: updated });
                            }}
                            className="rounded-xl bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 hover:bg-red-100 transition"
                          >
                            Delete
                          </button>
                        </div>
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-slate-700">Question</label>
                          <input
                            value={faq.question}
                            onChange={(e) => {
                              const updated = [...courseForm.faqs];
                              updated[index] = { ...updated[index], question: e.target.value };
                              setCourseForm({ ...courseForm, faqs: updated });
                            }}
                            placeholder="e.g. Is this course beginner friendly?"
                            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-slate-700">Answer</label>
                          <textarea
                            rows={3}
                            value={faq.answer}
                            onChange={(e) => {
                              const updated = [...courseForm.faqs];
                              updated[index] = { ...updated[index], answer: e.target.value };
                              setCourseForm({ ...courseForm, faqs: updated });
                            }}
                            placeholder="Write a clear, helpful answer..."
                            className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                          />
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => setCourseForm({ ...courseForm, faqs: [...courseForm.faqs, { question: "", answer: "" }] })}
                      className="w-full rounded-2xl border-2 border-dashed border-blue-300 bg-white py-4 text-sm font-semibold text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition"
                    >
                      + Add FAQ
                    </button>
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

      {/* Blog Modal */}
      <AnimatePresence>
        {blogModal.open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-indigo-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{blogModal.editing ? "Edit Blog" : "Add New Blog"}</h2><p className="text-sm text-slate-500">Add blog content, image and SEO settings</p></div><button onClick={closeBlogModal} className="rounded-xl p-2 text-slate-500"><X size={20} /></button></div>
              <div className="flex gap-2 border-b border-slate-100 bg-white px-6 pt-4">{(["basic", "seo"] as const).map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-t-2xl px-5 py-3 text-sm font-semibold capitalize transition ${activeTab === tab ? "bg-indigo-600 text-white shadow-md" : "text-slate-500 hover:bg-slate-100"}`}>{tab === "seo" ? "SEO & Meta Tags" : "Basic Info"}</button>))}</div>
              <div className="p-6">
                {activeTab === "basic" && (
                  <div className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2"><label className="mb-1.5 block text-sm font-semibold text-slate-700">Blog Title *</label><input value={blogForm.title} onChange={(e) => { const newTitle = e.target.value; setBlogForm({ ...blogForm, title: newTitle, slug: blogModal.editing ? blogForm.slug : slugify(newTitle) }); }} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Slug *</label><input value={blogForm.slug} onChange={(e) => setBlogForm({ ...blogForm, slug: slugify(e.target.value) })} placeholder="example-blog-post" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Category</label><select value={blogForm.category} onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"><option>General</option><option>Data Science</option><option>Data Analytics</option><option>Business Analytics</option><option>Digital Marketing</option><option>Cloud Computing</option><option>Career Tips</option></select></div>
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Author</label><div className="relative"><User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={blogForm.author} onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })} placeholder="Admin" className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div></div>
                      <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Publish Date</label><div className="relative"><CalendarDays size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input type="date" value={blogForm.publishedAt} onChange={(e) => setBlogForm({ ...blogForm, publishedAt: e.target.value })} className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div></div>
                    </div>
                    <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Short Excerpt</label><textarea rows={3} value={blogForm.excerpt} onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })} placeholder="Small summary for blog card..." className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
                    <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Blog Content *</label><textarea rows={10} value={blogForm.content} onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })} placeholder="Write full blog content here..." className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></div>
                    <div><label className="mb-2 block text-sm font-semibold text-slate-700">Blog Image</label><div onClick={() => blogFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-indigo-400 hover:bg-indigo-50">{blogPreviewUrl ? <img src={blogPreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-indigo-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload blog image</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={blogFileRef} type="file" accept="image/*" onChange={handleBlogImageChange} className="hidden" /></div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><button type="button" onClick={() => setBlogForm({ ...blogForm, featured: !blogForm.featured })} className="flex items-center gap-3 text-sm font-semibold text-slate-700">{blogForm.featured ? <ToggleRight size={28} className="text-indigo-600" /> : <ToggleLeft size={28} className="text-slate-400" />}<span>{blogForm.featured ? "Featured Blog" : "Not Featured"}</span></button></div>
                  </div>
                )}
                {activeTab === "seo" && (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-700">SEO fields help your blog pages rank better on Google and improve share preview.</div>
                    {seoFields.map(({ key, label, placeholder }) => (<div key={key}><label className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>{key.toLowerCase().includes("description") ? <textarea rows={3} value={blogForm.seo[key]} onChange={(e) => setBlogForm({ ...blogForm, seo: { ...blogForm.seo, [key]: e.target.value } })} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" placeholder={placeholder} /> : <input value={blogForm.seo[key]} onChange={(e) => setBlogForm({ ...blogForm, seo: { ...blogForm.seo, [key]: e.target.value } })} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" placeholder={placeholder} />}</div>))}
                  </div>
                )}
              </div>
              <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closeBlogModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleSaveBlog} disabled={savingBlog || !blogForm.title.trim() || !blogForm.content.trim()} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-semibold text-white shadow-lg disabled:opacity-50"><Save size={16} />{savingBlog ? "Saving..." : blogModal.editing ? "Update Blog" : "Add Blog"}</button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Placement Modal */}
      <AnimatePresence>
        {placementModal.open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.96, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="my-8 w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-emerald-50 px-6 py-5"><div><h2 className="text-xl font-bold text-slate-900">{placementModal.editing ? "Edit Placement" : "Add New Placement"}</h2><p className="text-sm text-slate-500">Add student placement details</p></div><button onClick={closePlacementModal} className="rounded-xl p-2 text-slate-500"><X size={20} /></button></div>
              <div className="p-6">
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Student Name *</label><div className="relative"><User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={placementForm.studentName} onChange={(e) => setPlacementForm({ ...placementForm, studentName: e.target.value })} placeholder="e.g. John Doe" className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div></div>
                    <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Company Name *</label><div className="relative"><Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={placementForm.companyName} onChange={(e) => setPlacementForm({ ...placementForm, companyName: e.target.value })} placeholder="e.g. Google, Amazon" className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div></div>
                    <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Role / Position</label><input value={placementForm.role} onChange={(e) => setPlacementForm({ ...placementForm, role: e.target.value })} placeholder="e.g. Software Engineer" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></div>
                    <div><label className="mb-1.5 block text-sm font-semibold text-slate-700">Display Order</label><input type="number" value={placementForm.order} onChange={(e) => setPlacementForm({ ...placementForm, order: parseInt(e.target.value) || 0 })} placeholder="0" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /><p className="mt-1 text-xs text-slate-500">Lower numbers appear first</p></div>
                  </div>
                  <div><label className="mb-2 block text-sm font-semibold text-slate-700">Student Image *</label><div onClick={() => placementStudentFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-emerald-400 hover:bg-emerald-50">{placementStudentPreviewUrl ? <img src={placementStudentPreviewUrl} className="h-24 w-24 rounded-2xl object-cover shadow-sm" alt="Student Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Upload size={28} className="text-slate-400 group-hover:text-emerald-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload student image</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={placementStudentFileRef} type="file" accept="image/*" onChange={handlePlacementStudentImageChange} className="hidden" /></div>
                  <div><label className="mb-2 block text-sm font-semibold text-slate-700">Company Logo (Optional)</label><div onClick={() => placementCompanyFileRef.current?.click()} className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-emerald-400 hover:bg-emerald-50">{placementCompanyPreviewUrl ? <img src={placementCompanyPreviewUrl} className="h-24 w-24 rounded-2xl object-contain bg-white p-2 shadow-sm" alt="Company Logo Preview" /> : <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm"><Building2 size={28} className="text-slate-400 group-hover:text-emerald-500" /></div>}<div><p className="text-sm font-semibold text-slate-700">Click to upload company logo</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP up to 5MB</p></div></div><input ref={placementCompanyFileRef} type="file" accept="image/*" onChange={handlePlacementCompanyLogoChange} className="hidden" /></div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><button type="button" onClick={() => setPlacementForm({ ...placementForm, isFeatured: !placementForm.isFeatured })} className="flex items-center gap-3 text-sm font-semibold text-slate-700">{placementForm.isFeatured ? <ToggleRight size={28} className="text-emerald-600" /> : <ToggleLeft size={28} className="text-slate-400" />}<span>{placementForm.isFeatured ? "Featured Placement" : "Not Featured"}</span></button></div>
                </div>
              </div>
              <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5"><button onClick={closePlacementModal} className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700">Cancel</button><button onClick={handleSavePlacement} disabled={savingPlacement || !placementForm.studentName.trim() || !placementForm.companyName.trim() || (!placementStudentImageFile && !placementModal.editing)} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 font-semibold text-white shadow-lg disabled:opacity-50"><Save size={16} />{savingPlacement ? "Saving..." : placementModal.editing ? "Update Placement" : "Add Placement"}</button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tile Modal */}
      <AnimatePresence>
        {tileModal.open && (
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
              <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-orange-50 px-6 py-5">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {tileModal.editing ? "Edit Course Tile" : "Add New Course Tile"}
                  </h2>
                  <p className="text-sm text-slate-500">
                    Add course tiles to display on the website
                  </p>
                </div>
                <button
                  onClick={closeTileModal}
                  className="rounded-xl p-2 text-slate-500 transition hover:bg-white hover:text-slate-800"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6">
                <div className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Course Name *
                    </label>
                    <input
                      value={tileForm.courseName}
                      onChange={(e) =>
                        setTileForm({ ...tileForm, courseName: e.target.value })
                      }
                      placeholder="e.g. Data Science Course"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Price *
                    </label>
                    <input
                      value={tileForm.price}
                      onChange={(e) =>
                        setTileForm({ ...tileForm, price: e.target.value })
                      }
                      placeholder="e.g. ₹35,000 or Free"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Description *
                    </label>
                    <textarea
                      rows={4}
                      value={tileForm.description}
                      onChange={(e) =>
                        setTileForm({ ...tileForm, description: e.target.value })
                      }
                      placeholder="Brief description of the course..."
                      className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Course Image *
                    </label>
                    <div
                      onClick={() => tileFileRef.current?.click()}
                      className="group flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-orange-400 hover:bg-orange-50"
                    >
                      {tilePreviewUrl ? (
                        <img
                          src={tilePreviewUrl}
                          className="h-24 w-24 rounded-2xl object-cover shadow-sm"
                          alt="Preview"
                        />
                      ) : (
                        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm">
                          <Upload size={28} className="text-slate-400 group-hover:text-orange-500" />
                        </div>
                      )}

                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          Click to upload course image
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          JPG, PNG, WebP up to 5MB
                        </p>
                      </div>
                    </div>
                    <input
                      ref={tileFileRef}
                      type="file"
                      accept="image/*"
                      onChange={handleTileImageChange}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5">
                <button
                  onClick={closeTileModal}
                  className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveTile}
                  disabled={savingTile || !tileForm.courseName.trim() || !tileForm.price.trim() || (!tileImageFile && !tileModal.editing)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Save size={16} />
                  {savingTile
                    ? "Saving..."
                    : tileModal.editing
                    ? "Update Course Tile"
                    : "Add Course Tile"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
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