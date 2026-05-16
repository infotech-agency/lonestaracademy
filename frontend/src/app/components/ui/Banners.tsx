// // // // // import { useEffect, useState } from "react";
// // // // // import { ChevronLeft, ChevronRight, X } from "lucide-react";

// // // // // const banners = [
// // // // //   "/xgddsfsdf.png",
// // // // //   "/2 banner.png",
// // // // //   "/3 banner .png",
// // // // //   "/4 banner .png",
// // // // //   "/5 banner.png",
// // // // // ];

// // // // // type FormData = {
// // // // //   name: string;
// // // // //   phone: string;
// // // // //   email: string;
// // // // //   course: string;
// // // // // };

// // // // // export default function HeroBannerSlider() {
// // // // //   const [active, setActive] = useState(0);
// // // // //   const [showForm, setShowForm] = useState(false);

// // // // //   const [formData, setFormData] = useState<FormData>({
// // // // //     name: "",
// // // // //     phone: "",
// // // // //     email: "",
// // // // //     course: "",
// // // // //   });

// // // // //   const nextSlide = () => {
// // // // //     setActive((prev) => (prev + 1) % banners.length);
// // // // //   };

// // // // //   const prevSlide = () => {
// // // // //     setActive((prev) => (prev - 1 + banners.length) % banners.length);
// // // // //   };

// // // // //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// // // // //     e.preventDefault();

// // // // //     if (formData.phone.length !== 10) {
// // // // //       alert("Please enter a valid 10-digit phone number");
// // // // //       return;
// // // // //     }

// // // // //     console.log("Lead Form Data:", formData);
// // // // //     alert("Thank you! We will contact you soon.");

// // // // //     setShowForm(false);
// // // // //     setFormData({
// // // // //       name: "",
// // // // //       phone: "",
// // // // //       email: "",
// // // // //       course: "",
// // // // //     });
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     const timer = setInterval(nextSlide, 3500);
// // // // //     return () => clearInterval(timer);
// // // // //   }, []);

// // // // //   return (
// // // // //     <>
// // // // //       <section className="w-full overflow-hidden bg-white">
// // // // //         <div className="relative w-full overflow-hidden">
// // // // //           <div className="relative h-[170px] w-full overflow-hidden sm:h-[250px] md:h-[320px] lg:h-[420px] xl:h-[500px]">
// // // // //             {banners.map((img, index) => (
// // // // //               <div
// // // // //                 key={index}
// // // // //                 className={`absolute inset-0 transition-all duration-700 ease-in-out ${
// // // // //                   active === index ? "z-10 opacity-100" : "z-0 opacity-0"
// // // // //                 }`}
// // // // //               >
// // // // //                 <div
// // // // //                   className="absolute inset-0 scale-110 bg-cover bg-center blur-lg"
// // // // //                   style={{ backgroundImage: `url(${img})` }}
// // // // //                 />

// // // // //                 <div className="absolute inset-0 bg-white/20" />

// // // // //                 <img
// // // // //                   src={img}
// // // // //                   alt={`Banner ${index + 1}`}
// // // // //                   onClick={() => setShowForm(true)}
// // // // //                   className="relative z-10 h-full w-full cursor-pointer object-contain"
// // // // //                 />
// // // // //               </div>
// // // // //             ))}

// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={prevSlide}
// // // // //               aria-label="Previous slide"
// // // // //               className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-md transition hover:bg-black/60 sm:flex"
// // // // //             >
// // // // //               <ChevronLeft size={26} />
// // // // //             </button>

// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={nextSlide}
// // // // //               aria-label="Next slide"
// // // // //               className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-md transition hover:bg-black/60 sm:flex"
// // // // //             >
// // // // //               <ChevronRight size={26} />
// // // // //             </button>

// // // // //             <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-4">
// // // // //               {banners.map((_, index) => (
// // // // //                 <button
// // // // //                   key={index}
// // // // //                   type="button"
// // // // //                   onClick={() => setActive(index)}
// // // // //                   aria-label={`Go to slide ${index + 1}`}
// // // // //                   className={`h-2 rounded-full transition-all duration-300 ${
// // // // //                     active === index ? "w-8 bg-orange-500" : "w-2 bg-white/70"
// // // // //                   }`}
// // // // //                 />
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {showForm && (
// // // // //         <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4">
// // // // //           <div className="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={() => setShowForm(false)}
// // // // //               className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
// // // // //             >
// // // // //               <X size={20} />
// // // // //             </button>

// // // // //             <h2 className="mb-2 text-xl font-bold text-gray-900">
// // // // //               Get Course Details
// // // // //             </h2>

// // // // //             <p className="mb-5 text-sm text-gray-600">
// // // // //               Fill your details and our counselor will contact you soon.
// // // // //             </p>

// // // // //             <form onSubmit={handleSubmit} className="space-y-4">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 required
// // // // //                 placeholder="Full Name"
// // // // //                 value={formData.name}
// // // // //                 onChange={(e) =>
// // // // //                   setFormData({ ...formData, name: e.target.value })
// // // // //                 }
// // // // //                 className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
// // // // //               />

// // // // //               <input
// // // // //                 type="tel"
// // // // //                 required
// // // // //                 maxLength={10}
// // // // //                 placeholder="Phone Number"
// // // // //                 value={formData.phone}
// // // // //                 onChange={(e) =>
// // // // //                   setFormData({
// // // // //                     ...formData,
// // // // //                     phone: e.target.value.replace(/\D/g, ""),
// // // // //                   })
// // // // //                 }
// // // // //                 className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
// // // // //               />

// // // // //               <input
// // // // //                 type="email"
// // // // //                 required
// // // // //                 placeholder="Email Address"
// // // // //                 value={formData.email}
// // // // //                 onChange={(e) =>
// // // // //                   setFormData({ ...formData, email: e.target.value })
// // // // //                 }
// // // // //                 className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
// // // // //               />

// // // // //               <select
// // // // //                 required
// // // // //                 value={formData.course}
// // // // //                 onChange={(e) =>
// // // // //                   setFormData({ ...formData, course: e.target.value })
// // // // //                 }
// // // // //                 className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
// // // // //               >
// // // // //                 <option value="">Select Course</option>
// // // // //                 <option value="Data Analytics">Data Analytics</option>
// // // // //                 <option value="Data Science">Data Science</option>
// // // // //                 <option value="Business Analytics">Business Analytics</option>
// // // // //                 <option value="Digital Marketing">Digital Marketing</option>
// // // // //                 <option value="Cloud Computing">Cloud Computing</option>
// // // // //               </select>

// // // // //               <button
// // // // //                 type="submit"
// // // // //                 className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
// // // // //               >
// // // // //                 Submit Details
// // // // //               </button>
// // // // //             </form>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </>
// // // // //   );
// // // // // }

// // // // import { useEffect, useState } from "react";
// // // // import { ChevronLeft, ChevronRight, X } from "lucide-react";

// // // // // Desktop banners
// // // // const desktopBanners = [
// // // //   "/xgddsfsdf.png",
// // // //   "/2 banner.png",
// // // //   "/3 banner .png",
// // // //   "/4 banner .png",
// // // //   "/5 banner.png",
// // // // ];

// // // // // Mobile banners - using new images (1post.jpg to 5post.jpg)
// // // // const mobileBanners = [
// // // //   "/mob1.png",
// // // //   "/mob2.png",
// // // //   "/mob3.png",
// // // //   "/mob4.png",
// // // //   "/mob5.png",
// // // // ];

// // // // type FormData = {
// // // //   name: string;
// // // //   phone: string;
// // // //   email: string;
// // // //   course: string;
// // // // };

// // // // export default function HeroBannerSlider() {
// // // //   const [active, setActive] = useState(0);
// // // //   const [showForm, setShowForm] = useState(false);
// // // //   const [isMobile, setIsMobile] = useState(false);

// // // //   const [formData, setFormData] = useState<FormData>({
// // // //     name: "",
// // // //     phone: "",
// // // //     email: "",
// // // //     course: "",
// // // //   });

// // // //   // Check screen size for responsive banners
// // // //   useEffect(() => {
// // // //     const checkScreenSize = () => {
// // // //       setIsMobile(window.innerWidth < 768); // 768px is md breakpoint
// // // //     };
    
// // // //     checkScreenSize();
// // // //     window.addEventListener("resize", checkScreenSize);
    
// // // //     return () => window.removeEventListener("resize", checkScreenSize);
// // // //   }, []);

// // // //   // Get current banners based on screen size
// // // //   const banners = isMobile ? mobileBanners : desktopBanners;

// // // //   const nextSlide = () => {
// // // //     setActive((prev) => (prev + 1) % banners.length);
// // // //   };

// // // //   const prevSlide = () => {
// // // //     setActive((prev) => (prev - 1 + banners.length) % banners.length);
// // // //   };

// // // //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// // // //     e.preventDefault();

// // // //     if (formData.phone.length !== 10) {
// // // //       alert("Please enter a valid 10-digit phone number");
// // // //       return;
// // // //     }

// // // //     console.log("Lead Form Data:", formData);
// // // //     alert("Thank you! We will contact you soon.");

// // // //     setShowForm(false);
// // // //     setFormData({
// // // //       name: "",
// // // //       phone: "",
// // // //       email: "",
// // // //       course: "",
// // // //     });
// // // //   };

// // // //   // Reset active slide when banners change (on resize)
// // // //   useEffect(() => {
// // // //     setActive(0);
// // // //   }, [isMobile]);

// // // //   // Auto slide only if there are banners
// // // //   useEffect(() => {
// // // //     if (banners.length === 0) return;
// // // //     const timer = setInterval(nextSlide, 3500);
// // // //     return () => clearInterval(timer);
// // // //   }, [banners.length]);

// // // //   if (banners.length === 0) return null;

// // // //   return (
// // // //     <>
// // // //       <section className="w-full overflow-hidden bg-white">
// // // //         <div className="relative w-full overflow-hidden">
// // // //           <div className="relative h-[200px] w-full overflow-hidden sm:h-[250px] md:h-[320px] lg:h-[420px] xl:h-[500px]">
// // // //             {banners.map((img, index) => (
// // // //               <div
// // // //                 key={index}
// // // //                 className={`absolute inset-0 transition-all duration-700 ease-in-out ${
// // // //                   active === index ? "z-10 opacity-100" : "z-0 opacity-0"
// // // //                 }`}
// // // //               >
// // // //                 {/* Blur background for mobile */}
// // // //                 <div
// // // //                   className="absolute inset-0 scale-110 bg-cover bg-center blur-lg"
// // // //                   style={{ backgroundImage: `url(${img})` }}
// // // //                 />

// // // //                 {/* Overlay for better text visibility */}
// // // //                 <div className="absolute inset-0 bg-black/20" />

// // // //                 <img
// // // //                   src={img}
// // // //                   alt={`Banner ${index + 1}`}
// // // //                   onClick={() => setShowForm(true)}
// // // //                   className={`relative z-10 h-full w-full cursor-pointer ${
// // // //                     isMobile ? "object-cover" : "object-contain"
// // // //                   }`}
// // // //                 />
// // // //               </div>
// // // //             ))}

// // // //             {/* Navigation Buttons */}
// // // //             {banners.length > 1 && (
// // // //               <>
// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={prevSlide}
// // // //                   aria-label="Previous slide"
// // // //                   className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-md transition hover:bg-black/60 sm:left-4 sm:p-2"
// // // //                 >
// // // //                   <ChevronLeft size={isMobile ? 20 : 26} />
// // // //                 </button>

// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={nextSlide}
// // // //                   aria-label="Next slide"
// // // //                   className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-md transition hover:bg-black/60 sm:right-4 sm:p-2"
// // // //                 >
// // // //                   <ChevronRight size={isMobile ? 20 : 26} />
// // // //                 </button>
// // // //               </>
// // // //             )}

// // // //             {/* Dots Indicator */}
// // // //             {banners.length > 1 && (
// // // //               <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 sm:bottom-4 sm:gap-2">
// // // //                 {banners.map((_, index) => (
// // // //                   <button
// // // //                     key={index}
// // // //                     type="button"
// // // //                     onClick={() => setActive(index)}
// // // //                     aria-label={`Go to slide ${index + 1}`}
// // // //                     className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
// // // //                       active === index 
// // // //                         ? "w-6 bg-orange-500 sm:w-8" 
// // // //                         : "w-1.5 bg-white/70 sm:w-2"
// // // //                     }`}
// // // //                   />
// // // //                 ))}
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </section>

 
    
// // // //     </>
// // // //   );
// // // // }

// // // import { useEffect, useState } from "react";
// // // import { ChevronLeft, ChevronRight, X } from "lucide-react";

// // // const desktopBanners = [
// // //   "/xgddsfsdf.png",
// // //   "/2 banner.png",
// // //   "/3 banner .png",
// // //   "/4 banner .png",
// // //   "/5 banner.png",
// // // ];

// // // const mobileBanners = [
// // //   "/mob1.png",
// // //   "/mob2.png",
// // //   "/mob3.png",
// // //   "/mob4.png",
// // //   "/mob5.png",
// // // ];

// // // type FormData = {
// // //   name: string;
// // //   phone: string;
// // //   email: string;
// // //   course: string;
// // // };

// // // export default function HeroBannerSlider() {
// // //   const [active, setActive] = useState(0);
// // //   const [showForm, setShowForm] = useState(false);
// // //   const [isMobile, setIsMobile] = useState(false);

// // //   const [formData, setFormData] = useState<FormData>({
// // //     name: "",
// // //     phone: "",
// // //     email: "",
// // //     course: "",
// // //   });

// // //   useEffect(() => {
// // //     const checkScreenSize = () => {
// // //       setIsMobile(window.innerWidth < 768);
// // //     };
// // //     checkScreenSize();
// // //     window.addEventListener("resize", checkScreenSize);
// // //     return () => window.removeEventListener("resize", checkScreenSize);
// // //   }, []);

// // //   const banners = isMobile ? mobileBanners : desktopBanners;

// // //   const nextSlide = () => setActive((prev) => (prev + 1) % banners.length);
// // //   const prevSlide = () =>
// // //     setActive((prev) => (prev - 1 + banners.length) % banners.length);

// // //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// // //     e.preventDefault();
// // //     if (formData.phone.length !== 10) {
// // //       alert("Please enter a valid 10-digit phone number");
// // //       return;
// // //     }
// // //     console.log("Lead Form Data:", formData);
// // //     alert("Thank you! We will contact you soon.");
// // //     setShowForm(false);
// // //     setFormData({ name: "", phone: "", email: "", course: "" });
// // //   };

// // //   useEffect(() => {
// // //     setActive(0);
// // //   }, [isMobile]);

// // //   useEffect(() => {
// // //     if (banners.length === 0) return;
// // //     const timer = setInterval(nextSlide, 3500);
// // //     return () => clearInterval(timer);
// // //   }, [banners.length, isMobile]);

// // //   if (banners.length === 0) return null;

// // //   return (
// // //     <>
// // //       <section className="w-full overflow-hidden bg-white">
// // //         <div className="relative w-full overflow-hidden">
// // //           <div
// // //             className={`relative w-full overflow-hidden ${
// // //               isMobile
// // //                 ? "aspect-[9/16]"
// // //                 : "h-[320px] md:h-[420px] lg:h-[500px]"
// // //             }`}
// // //           >
// // //             {banners.map((img, index) => (
// // //               <div
// // //                 key={index}
// // //                 className={`absolute inset-0 transition-all duration-700 ease-in-out ${
// // //                   active === index ? "z-10 opacity-100" : "z-0 opacity-0"
// // //                 }`}
// // //               >
// // //                 {/* ✅ Blur background: sirf desktop pe, mobile pe nahi */}
// // //                 {!isMobile && (
// // //                   <div
// // //                     className="absolute inset-0 scale-110 bg-cover bg-center blur-lg"
// // //                     style={{ backgroundImage: `url(${img})` }}
// // //                   />
// // //                 )}

// // //                 <img
// // //                   src={img}
// // //                   alt={`Banner ${index + 1}`}
// // //                   onClick={() => setShowForm(true)}
// // //                   className={`relative z-10 h-full w-full cursor-pointer ${
// // //                     isMobile ? "object-contain" : "object-cover"
// // //                   }`}
// // //                 />
// // //               </div>
// // //             ))}

// // //             {/* Nav Arrows */}
// // //             {banners.length > 1 && (
// // //               <>
// // //                 <button
// // //                   type="button"
// // //                   onClick={prevSlide}
// // //                   aria-label="Previous slide"
// // //                   className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-md transition hover:bg-black/60"
// // //                 >
// // //                   <ChevronLeft size={isMobile ? 18 : 26} />
// // //                 </button>

// // //                 <button
// // //                   type="button"
// // //                   onClick={nextSlide}
// // //                   aria-label="Next slide"
// // //                   className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-md transition hover:bg-black/60"
// // //                 >
// // //                   <ChevronRight size={isMobile ? 18 : 26} />
// // //                 </button>
// // //               </>
// // //             )}

// // //             {/* Dots */}
// // //             {banners.length > 1 && (
// // //               <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
// // //                 {banners.map((_, index) => (
// // //                   <button
// // //                     key={index}
// // //                     type="button"
// // //                     onClick={() => setActive(index)}
// // //                     aria-label={`Go to slide ${index + 1}`}
// // //                     className={`h-1.5 rounded-full transition-all duration-300 ${
// // //                       active === index
// // //                         ? "w-6 bg-orange-500"
// // //                         : "w-1.5 bg-white/70"
// // //                     }`}
// // //                   />
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Lead Form Modal */}
// // //       {showForm && (
// // //         <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4">
// // //           <div className="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
// // //             <button
// // //               type="button"
// // //               onClick={() => setShowForm(false)}
// // //               className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
// // //             >
// // //               <X size={20} />
// // //             </button>

// // //             <h2 className="mb-2 text-xl font-bold text-gray-900">
// // //               Get Course Details
// // //             </h2>
// // //             <p className="mb-5 text-sm text-gray-600">
// // //               Fill your details and our counselor will contact you soon.
// // //             </p>

// // //             <form onSubmit={handleSubmit} className="space-y-4">
// // //               <input
// // //                 type="text"
// // //                 required
// // //                 placeholder="Full Name"
// // //                 value={formData.name}
// // //                 onChange={(e) =>
// // //                   setFormData({ ...formData, name: e.target.value })
// // //                 }
// // //                 className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
// // //               />
// // //               <input
// // //                 type="tel"
// // //                 required
// // //                 maxLength={10}
// // //                 placeholder="Phone Number"
// // //                 value={formData.phone}
// // //                 onChange={(e) =>
// // //                   setFormData({
// // //                     ...formData,
// // //                     phone: e.target.value.replace(/\D/g, ""),
// // //                   })
// // //                 }
// // //                 className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
// // //               />
// // //               <input
// // //                 type="email"
// // //                 required
// // //                 placeholder="Email Address"
// // //                 value={formData.email}
// // //                 onChange={(e) =>
// // //                   setFormData({ ...formData, email: e.target.value })
// // //                 }
// // //                 className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
// // //               />
// // //               <select
// // //                 required
// // //                 value={formData.course}
// // //                 onChange={(e) =>
// // //                   setFormData({ ...formData, course: e.target.value })
// // //                 }
// // //                 className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
// // //               >
// // //                 <option value="">Select Course</option>
// // //                 <option value="Data Analytics">Data Analytics</option>
// // //                 <option value="Data Science">Data Science</option>
// // //                 <option value="Business Analytics">Business Analytics</option>
// // //                 <option value="Digital Marketing">Digital Marketing</option>
// // //                 <option value="Cloud Computing">Cloud Computing</option>
// // //               </select>
// // //               <button
// // //                 type="submit"
// // //                 className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
// // //               >
// // //                 Submit Details
// // //               </button>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // }

// // import { useEffect, useState } from "react";
// // import { ChevronLeft, ChevronRight, X } from "lucide-react";

// // const desktopBanners = [
// //   "/xgddsfsdf.png",
// //   "/2 banner.png",
// //   "/3 banner .png",
// //   "/4 banner .png",
// //   "/5 banner.png",
// // ];

// // const mobileBanners = [
// //   "/ba1.png",
// //   "/da1.png",
// //   "/ds1.png",
// //   "/dm1.png",
// //   "/cc1.png",
// // ];

// // type FormData = {
// //   name: string;
// //   phone: string;
// //   email: string;
// //   course: string;
// // };

// // export default function HeroBannerSlider() {
// //   const [active, setActive] = useState(0);
// //   const [showForm, setShowForm] = useState(false);
// //   const [isMobile, setIsMobile] = useState(false);

// //   const [formData, setFormData] = useState<FormData>({
// //     name: "",
// //     phone: "",
// //     email: "",
// //     course: "",
// //   });

// //   useEffect(() => {
// //     const checkScreenSize = () => {
// //       setIsMobile(window.innerWidth < 768);
// //     };
// //     checkScreenSize();
// //     window.addEventListener("resize", checkScreenSize);
// //     return () => window.removeEventListener("resize", checkScreenSize);
// //   }, []);

// //   const banners = isMobile ? mobileBanners : desktopBanners;

// //   const nextSlide = () => setActive((prev) => (prev + 1) % banners.length);
// //   const prevSlide = () =>
// //     setActive((prev) => (prev - 1 + banners.length) % banners.length);

// //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     if (formData.phone.length !== 10) {
// //       alert("Please enter a valid 10-digit phone number");
// //       return;
// //     }
// //     console.log("Lead Form Data:", formData);
// //     alert("Thank you! We will contact you soon.");
// //     setShowForm(false);
// //     setFormData({ name: "", phone: "", email: "", course: "" });
// //   };

// //   useEffect(() => {
// //     setActive(0);
// //   }, [isMobile]);

// //   useEffect(() => {
// //     if (banners.length === 0) return;
// //     const timer = setInterval(nextSlide, 3500);
// //     return () => clearInterval(timer);
// //   }, [banners.length, isMobile]);

// //   if (banners.length === 0) return null;

// //   return (
// //     <>
// //       <section className="w-full overflow-hidden bg-white">
// //         <div className="relative w-full overflow-hidden">
// //           <div
// //             className={`relative w-full overflow-hidden ${
// //               isMobile
// //                 ? "aspect-[4/5]"
// //                 : "h-[320px] md:h-[420px] lg:h-[500px]"
// //             }`}
// //           >
// //             {banners.map((img, index) => (
// //               <div
// //                 key={index}
// //                 className={`absolute inset-0 transition-all duration-700 ease-in-out ${
// //                   active === index ? "z-10 opacity-100" : "z-0 opacity-0"
// //                 }`}
// //               >
// //                 {!isMobile && (
// //                   <div
// //                     className="absolute inset-0 scale-110 bg-cover bg-center blur-lg"
// //                     style={{ backgroundImage: `url(${img})` }}
// //                   />
// //                 )}

// //                 <img
// //                   src={img}
// //                   alt={`Banner ${index + 1}`}
// //                   onClick={() => setShowForm(true)}
// //                   className={`relative z-10 h-full w-full cursor-pointer ${
// //                     isMobile ? "object-contain mt-0" : "object-cover"
// //                   }`}
// //                 />
// //               </div>
// //             ))}

// //             {banners.length > 1 && (
// //               <>
// //                 <button
// //                   type="button"
// //                   onClick={prevSlide}
// //                   aria-label="Previous slide"
// //                   className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-md transition hover:bg-black/60"
// //                 >
// //                   <ChevronLeft size={isMobile ? 18 : 26} />
// //                 </button>

// //                 <button
// //                   type="button"
// //                   onClick={nextSlide}
// //                   aria-label="Next slide"
// //                   className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-md transition hover:bg-black/60"
// //                 >
// //                   <ChevronRight size={isMobile ? 18 : 26} />
// //                 </button>
// //               </>
// //             )}

// //             {banners.length > 1 && (
// //               <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
// //                 {banners.map((_, index) => (
// //                   <button
// //                     key={index}
// //                     type="button"
// //                     onClick={() => setActive(index)}
// //                     aria-label={`Go to slide ${index + 1}`}
// //                     className={`h-1.5 rounded-full transition-all duration-300 ${
// //                       active === index
// //                         ? "w-6 bg-orange-500"
// //                         : "w-1.5 bg-white/70"
// //                     }`}
// //                   />
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </section>

    
// //     </>
// //   );
// // }
// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";

// const desktopBanners = [
//   "/xgddsfsdf.png",
//   "/2 banner.png",
//   "/3 banner .png",
//   "/4 banner .png",
//   "/5 banner.png",
// ];

// const mobileBanners = [
//   "/ba1.png",
//   "/da1.png",
//   "/ds1.png",
//   "/dm1.png",
//   "/cc1.png",
// ];

// type FormData = {
//   name: string;
//   phone: string;
//   email: string;
//   course: string;
// };

// export default function HeroBannerSlider() {
//   const [active, setActive] = useState(0);
//   const [showForm, setShowForm] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     phone: "",
//     email: "",
//     course: "",
//   });

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   const banners = isMobile ? mobileBanners : desktopBanners;

//   const nextSlide = () => setActive((prev) => (prev + 1) % banners.length);
//   const prevSlide = () =>
//     setActive((prev) => (prev - 1 + banners.length) % banners.length);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (formData.phone.length !== 10) {
//       alert("Please enter a valid 10-digit phone number");
//       return;
//     }
//     console.log("Lead Form Data:", formData);
//     alert("Thank you! We will contact you soon.");
//     setShowForm(false);
//     setFormData({ name: "", phone: "", email: "", course: "" });
//   };

//   useEffect(() => {
//     setActive(0);
//   }, [isMobile]);

//   useEffect(() => {
//     if (banners.length === 0) return;
//     const timer = setInterval(nextSlide, 3500);
//     return () => clearInterval(timer);
//   }, [banners.length, isMobile]);

//   if (banners.length === 0) return null;

//   return (
//     <>
//       <section className="w-full overflow-hidden bg-white">
//         <div className="relative w-full overflow-hidden">
//           <div
//             className={`relative w-full overflow-hidden ${
              
//               isMobile ? "aspect-[4/5] -mt-7" : "h-[320px] md:h-[420px] lg:h-[500px]"
//             }`}
//           >
//             {banners.map((img, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//                   active === index ? "z-10 opacity-100" : "z-0 opacity-0"
//                 }`}
//               >
//                 {!isMobile && (
//                   <div
//                     className="absolute inset-0 scale-110 bg-cover bg-center blur-lg"
//                     style={{ backgroundImage: `url(${img})` }}
//                   />
//                 )}

//                 <img
//                   src={img}
//                   alt={`Banner ${index + 1}`}
//                   onClick={() => setShowForm(true)}
//                   className={`relative z-10 h-full w-full cursor-pointer ${
//                     isMobile ? "object-contain mt-0" : "object-cover"
//                   }`}
//                 />
//               </div>
//             ))}

//             {banners.length > 1 && (
//               <>
//                 <button
//                   type="button"
//                   onClick={prevSlide}
//                   aria-label="Previous slide"
//                   className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-md transition hover:bg-black/60"
//                 >
//                   <ChevronLeft size={isMobile ? 18 : 26} />
//                 </button>

//                 <button
//                   type="button"
//                   onClick={nextSlide}
//                   aria-label="Next slide"
//                   className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-md transition hover:bg-black/60"
//                 >
//                   <ChevronRight size={isMobile ? 18 : 26} />
//                 </button>
//               </>
//             )}

//             {banners.length > 1 && (
//               <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
//                 {banners.map((_, index) => (
//                   <button
//                     key={index}
//                     type="button"
//                     onClick={() => setActive(index)}
//                     aria-label={`Go to slide ${index + 1}`}
//                     className={`h-1.5 rounded-full transition-all duration-300 ${
//                       active === index
//                         ? "w-6 bg-orange-500"
//                         : "w-1.5 bg-white/70"
//                     }`}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const desktopBanners = [
  "/xgddsfsdf.png",
  "/2 banner.png",
  "/3 banner .png",
  "/4 banner .png",
  "/5 banner.png",
];

const mobileBanners = [
  "/ba1.png",
  "/da1.png",
  "/ds1.png",
  "/dm1.png",
  "/cc1.png",
];

// URLs for each banner index (same order as banners)
const bannerUrls = [
  "/business-analytics-course-delhi",
  "/data-analytics-courses-online-delhi",
  "/data-science-course-online-with-placement-delhi",
  "/best-online-digital-marketing-courses-delhi",
  "/cloud-computing-online-courses-delhi",
];

export default function HeroBannerSlider() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const banners = isMobile ? mobileBanners : desktopBanners;

  const nextSlide = () => setActive((prev) => (prev + 1) % banners.length);
  const prevSlide = () =>
    setActive((prev) => (prev - 1 + banners.length) % banners.length);

  // Handle banner click - redirect to specific URL based on active index
  const handleBannerClick = () => {
    const url = bannerUrls[active];
    if (url) {
      window.location.href = url;
    }
  };

  useEffect(() => {
    setActive(0);
  }, [isMobile]);

  useEffect(() => {
    if (banners.length === 0) return;
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [banners.length, isMobile]);

  if (banners.length === 0) return null;

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="relative w-full overflow-hidden">
        <div
          className={`relative w-full overflow-hidden ${
            isMobile ? "aspect-[4/5] -mt-7" : "h-[320px] md:h-[420px] lg:h-[500px]"
          }`}
        >
          {banners.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                active === index ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
            >
              {!isMobile && (
                <div
                  className="absolute inset-0 scale-110 bg-cover bg-center blur-lg"
                  style={{ backgroundImage: `url(${img})` }}
                />
              )}

              <img
                src={img}
                alt={`Banner ${index + 1}`}
                onClick={handleBannerClick}
                className={`relative z-10 h-full w-full cursor-pointer ${
                  isMobile ? "object-contain mt-0" : "object-cover"
                }`}
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          {banners.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-md transition hover:bg-black/60"
              >
                <ChevronLeft size={isMobile ? 18 : 26} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-md transition hover:bg-black/60"
              >
                <ChevronRight size={isMobile ? 18 : 26} />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {banners.length > 1 && (
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {banners.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === index
                      ? "w-6 bg-orange-500"
                      : "w-1.5 bg-white/70"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}