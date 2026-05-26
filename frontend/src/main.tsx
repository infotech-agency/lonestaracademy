// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./styles/index.css";
// import "./styles/tailwind.css";
// import App from "./app/App";
// import CoursesPage from "./app/pages/CoursesPage";
// import CourseDetailPage from "./app/pages/CourseDetailPage";
// import AboutPage from "./app/pages/AboutPage";
// import ContactPage from "./app/pages/ContactPage";
// import TestimonialsPage from "./app/pages/TestimonialsPage";
// import TeamPage from "./app/pages/TeamPage";
// import AdminPanel from "./app/admin/AdminPanel";
// import AboutPage2 from "./app/pages/AboutPage2";
// import AboutPage3 from "./app/pages/AboutPage3";
// import AboutPage4 from "./app/pages/AboutPage4";
// import AboutPage5 from "./app/pages/AboutPage5";
// import AboutPage6 from "./app/pages/AboutPage6";
// import AboutPage7 from "./app/pages/AboutPage7";
// import BlogPage from "./app/pages/BlogPage";
// import NotFound from "./app/pages/NotFound";
// // import BlogDetailPage from "./app/pages/BlogDetailPage";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/courses" element={<CoursesPage />} />
//         <Route path="/courses/:slug" element={<CourseDetailPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/about2" element={<AboutPage2 />} />
//         <Route path="/about3" element={<AboutPage3 />} />
//         <Route path="/about4" element={<AboutPage4 />} />
//         <Route path="/about5" element={<AboutPage5 />} />
//         <Route path="/about6" element={<AboutPage6 />} />
//         <Route path="/about7" element={<AboutPage7 />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/blog" element={<BlogPage />} />
//         {/* <Route path="/blog/:slugOrId" element={<BlogDetailPage />} /> */}
//         <Route path="/testimonials" element={<TestimonialsPage />} />
//         <Route path="/team" element={<TeamPage />} />
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./styles/index.css";
// import "./styles/tailwind.css";
// import App from "./app/App";
// import CoursesPage from "./app/pages/CoursesPage";
// import CourseDetailPage from "./app/pages/CourseDetailPage";
// import AboutPage from "./app/pages/AboutPage";
// import ContactPage from "./app/pages/ContactPage";
// import TestimonialsPage from "./app/pages/TestimonialsPage";
// import TeamPage from "./app/pages/TeamPage";
// import AdminPanel from "./app/admin/AdminPanel";
// import AboutPage2 from "./app/pages/AboutPage2";
// import AboutPage3 from "./app/pages/AboutPage3";
// import AboutPage4 from "./app/pages/AboutPage4";
// import AboutPage5 from "./app/pages/AboutPage5";
// import AboutPage6 from "./app/pages/AboutPage6";
// import AboutPage7 from "./app/pages/AboutPage7";
// import BlogPage from "./app/pages/BlogPage";
// import NotFound from "./app/pages/NotFound";
// import PrivacyPolicy from "./app/pages/PrivacyPage";
// import TermsAndConditions from "./app/pages/TermsPage";
// import BlogDetailPage from "./app/pages/BlogDetailPage";
// import AdmissionPage from "./app/pages/AdmissionPageSingle";
// // import BlogDetailPage from "./app/pages/BlogDetailPage";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/courses" element={<CoursesPage />} />
//         {/* <Route path="/courses/:slug" element={<CourseDetailPage />} /> */}
//         <Route path="/about" element={<AboutPage />} />
//         {/* <Route path="/about2" element={<AboutPage2 />} />
//         <Route path="/about3" element={<AboutPage3 />} />
//         <Route path="/about4" element={<AboutPage4 />} />
//         <Route path="/about5" element={<AboutPage5 />} />
//         <Route path="/about6" element={<AboutPage6 />} />
//         <Route path="/about7" element={<AboutPage7 />} /> */}
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/blog" element={<BlogPage />} />
//         <Route path="/privacy" element={<PrivacyPolicy/>}/>
//         <Route path="/terms" element={<TermsAndConditions/>}/>
//         <Route path="/admission-form" element={<AdmissionPage/>}/>
//         {/* <Route path="/blog/:slugOrId" element={<BlogDetailPage />} /> */}
//         <Route path="/testimonials" element={<TestimonialsPage />} />
//         <Route path="/our-placement" element={<TeamPage />} />
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route path="/:slug" element={<CourseDetailPage />} />
//         <Route path="/blog/:slug" element={<BlogDetailPage />} />
//         <Route path="/404" element={<NotFound />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";

// import "./styles/index.css";
// import "./styles/tailwind.css";

// import App from "./app/App";
// import CoursesPage from "./app/pages/CoursesPage";
// import CourseDetailPage from "./app/pages/CourseDetailPage";
// import AboutPage from "./app/pages/AboutPage";
// import ContactPage from "./app/pages/ContactPage";
// import TestimonialsPage from "./app/pages/TestimonialsPage";
// import TeamPage from "./app/pages/TeamPage";
// import AdminPanel from "./app/admin/AdminPanel";
// import BlogPage from "./app/pages/BlogPage";
// import NotFound from "./app/pages/NotFound";
// import PrivacyPolicy from "./app/pages/PrivacyPage";
// import TermsAndConditions from "./app/pages/TermsPage";
// import BlogDetailPage from "./app/pages/BlogDetailPage";
// import AdmissionPage from "./app/pages/AdmissionPageSingle";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <HelmetProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/courses" element={<CoursesPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/blog" element={<BlogPage />} />
//           <Route path="/privacy" element={<PrivacyPolicy />} />
//           <Route path="/terms" element={<TermsAndConditions />} />
//           <Route path="/admission-form" element={<AdmissionPage />} />
//           <Route path="/testimonials" element={<TestimonialsPage />} />
//           <Route path="/our-placement" element={<TeamPage />} />
//           <Route path="/admin" element={<AdminPanel />} />
//           <Route path="/:slug" element={<CourseDetailPage />} />
//           <Route path="/blog/:slug" element={<BlogDetailPage />} />
//           <Route path="/404" element={<NotFound />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </HelmetProvider>
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./styles/index.css";
import "./styles/tailwind.css";

import App from "./app/App";
import CoursesPage from "./app/pages/CoursesPage";
import CourseDetailPage from "./app/pages/CourseDetailPage";
import AboutPage from "./app/pages/AboutPage";
import ContactPage from "./app/pages/ContactPage";
import TestimonialsPage from "./app/pages/TestimonialsPage";
import TeamPage from "./app/pages/TeamPage";
import AdminPanel from "./app/admin/AdminPanel";
import BlogPage from "./app/pages/BlogPage";
import NotFound from "./app/pages/NotFound";
import PrivacyPolicy from "./app/pages/PrivacyPage";
import TermsAndConditions from "./app/pages/TermsPage";
import BlogDetailPage from "./app/pages/BlogDetailPage";
import AdmissionPage from "./app/pages/AdmissionPageSingle";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* ✅ EXACT HOME ROUTE PEHLE */}
          <Route path="/" element={<App />} />
          
          {/* ✅ SPECIFIC STATIC ROUTES (These must come BEFORE dynamic routes) */}
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/admission-form" element={<AdmissionPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/our-placement" element={<TeamPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/404" element={<NotFound />} />
          
          {/* ✅ DYNAMIC ROUTES (These come AFTER specific routes) */}
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/:slug" element={<CourseDetailPage />} />
          
          {/* ✅ FALLBACK ROUTE (SABSE LAST - matches anything not caught above) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);