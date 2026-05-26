
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
   const [isSmallLaptop, setIsSmallLaptop] = useState(false);
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
  className={`relative z-10 h-full w-full cursor-pointer object-contain ${
    isMobile ? "object-contain" : "object-center"
  }`}
  style={{
    objectPosition: isSmallLaptop ? "center 30%" : "center",
  }}
  
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


// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

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

// // URLs for each banner index (same order as banners)
// const bannerUrls = [
//   "/business-analytics-course-delhi",
//   "/data-analytics-courses-online-delhi",
//   "/data-science-course-online-with-placement-delhi",
//   "/best-online-digital-marketing-courses-delhi",
//   "/cloud-computing-online-courses-delhi",
// ];

// export default function HeroBannerSlider() {
//   const [active, setActive] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isSmallLaptop, setIsSmallLaptop] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 768);
//       setIsSmallLaptop(width >= 768 && width < 1200);
//     };
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   const banners = isMobile ? mobileBanners : desktopBanners;

//   const nextSlide = () => setActive((prev) => (prev + 1) % banners.length);
//   const prevSlide = () =>
//     setActive((prev) => (prev - 1 + banners.length) % banners.length);

//   // Handle banner click - redirect to specific URL based on active index
//   const handleBannerClick = () => {
//     const url = bannerUrls[active];
//     if (url) {
//       window.location.href = url;
//     }
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

//   // Get dynamic height based on screen size
//   const getBannerHeight = () => {
//     if (isMobile) return "aspect-[4/5]";
//     if (isSmallLaptop) return "h-[280px] md:h-[360px]";
//     return "h-[320px] md:h-[420px] lg:h-[500px]";
//   };

//   return (
//     <section className="w-full overflow-hidden bg-white">
//       <div className="relative w-full overflow-hidden">
//         <div
//           className={`relative w-full overflow-hidden ${getBannerHeight()}`}
//         >
//           {banners.map((img, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//                 active === index ? "z-10 opacity-100" : "z-0 opacity-0"
//               }`}
//             >
//               {!isMobile && (
//                 <div
//                   className="absolute inset-0 scale-110 bg-cover bg-center blur-lg"
//                   style={{ backgroundImage: `url(${img})` }}
//                 />
//               )}

//               {/* <img
//                 src={img}
//                 alt={`Banner ${index + 1}`}
//                 onClick={handleBannerClick}
//                 className={`relative z-10 h-full w-full cursor-pointer ${
//                   isMobile 
//                     ? "object-contain mt-0" 
//                     : "object-contain md:object-cover"
//                 }`}
//               /> */}
//               <img
//   src={img}
//   alt={`Banner ${index + 1}`}
//   onClick={handleBannerClick}
//   className={`relative z-10 h-full w-full cursor-pointer object-cover ${
//     isMobile ? "object-contain" : "object-center"
//   }`}
//   style={{
//     objectPosition: isSmallLaptop ? "center 30%" : "center",
//   }}
// />
//             </div>
//           ))}

//           {/* Navigation Arrows */}
//           {banners.length > 1 && (
//             <>
//               <button
//                 type="button"
//                 onClick={prevSlide}
//                 aria-label="Previous slide"
//                 className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-md transition hover:bg-black/60"
//               >
//                 <ChevronLeft size={isMobile ? 18 : 26} />
//               </button>

//               <button
//                 type="button"
//                 onClick={nextSlide}
//                 aria-label="Next slide"
//                 className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-md transition hover:bg-black/60"
//               >
//                 <ChevronRight size={isMobile ? 18 : 26} />
//               </button>
//             </>
//           )}

//           {/* Dots Indicator */}
//           {banners.length > 1 && (
//             <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
//               {banners.map((_, index) => (
//                 <button
//                   key={index}
//                   type="button"
//                   onClick={() => setActive(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${
//                     active === index
//                       ? "w-6 bg-orange-500"
//                       : "w-1.5 bg-white/70"
//                   }`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }