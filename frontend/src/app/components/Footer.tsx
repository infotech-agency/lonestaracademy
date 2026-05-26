

import {
    Facebook,
    Instagram,
    Linkedin,
    Phone,
    Mail,
    MapPin,
    X,
  } from "lucide-react";
import { Link } from "react-router-dom";

  export function Footer() {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 gap-10 border-b border-gray-800 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-gray-800">
            
            {/* Contact - Centered on mobile */}
            <div className="text-center md:text-left lg:pr-10">
              {/* LOGO */}
              <div className="flex justify-center md:justify-start">
                <img
                  src="/logofooter.png"
                  alt="Lone Star Academy Logo"
                  className="h-35 w-auto object-contain"
                />
              </div>

              <p className="mb-8 text-sm leading-8 tracking-wide text-gray-400 px-4 md:px-0">
                Lone Star Academy is a leading training institute in India for Data Science, Digital Marketing, and Business Analytics. We empower students and working professionals with practical, job-oriented learning designed for real industry success.
              </p>
            </div>

            {/* Quick Links - Centered on mobile */}
            <div className="text-center md:text-left lg:px-10">
              <h3 className="mb-8 text-2xl font-semibold text-white">
                Quick Links
              </h3>

              <ul className="space-y-5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "All Courses", href: "/courses" },
                  { label: "Testimonials", href: "/testimonials" },
                  { label: "Our Placement", href: "/our-placement" },
                  { label: "Contact Us", href: "/contact" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-base tracking-wide text-gray-400 transition hover:text-white inline-block"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses - Centered on mobile */}
            <div className="text-center md:text-left lg:px-10">
              <h3 className="mb-8 text-2xl font-semibold text-white">
                Our Courses
              </h3>

              <ul className="space-y-5">
                {[
                  { label: "Business Analytics", href: "/business-analytics-course-delhi" },
                  { label: "Data Analytics", href: "/data-analytics-courses-online-delhi" },
                  { label: "Data Science", href: "/data-science-course-online-with-placement-delhi" },
                  { label: "Digital Marketing", href: "/best-online-digital-marketing-courses-delhi" },
                  { label: "Cloud Computing", href: "/cloud-computing-online-courses-delhi" },
                  { label: "Financial Modeling", href: "/financial-modelling-course-delhi" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-base tracking-wide text-gray-400 transition hover:text-orange-400 inline-block"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - Centered on mobile */}
<div className="lg:pl-10">
  {/* Centered Contact Us title */}
  <h3 className="mb-8 text-center text-2xl font-semibold text-white">
    Contact us
  </h3>

  <div className="space-y-5">
    <a href="tel:+919711709644" className="flex items-center justify-start gap-4 group">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 transition group-hover:scale-110">
        <Phone size={18} />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">Call</p>
        <p className="text-sm text-gray-400 group-hover:text-orange-400">
          +91 9711709644
        </p>
      </div>
    </a>

    <a href="mailto:info@lonestaracademy.in" className="flex items-center justify-start gap-4 group">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500 transition group-hover:scale-110">
        <Mail size={18} />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">Email</p>
        <a 
          href="mailto:info@lonestaracademy.in"
          className="text-sm text-gray-400 transition hover:text-blue-400"
        >
          info@lonestaracademy.in
        </a>
      </div>
    </a>

    <div className="flex items-start justify-start gap-4">
      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-500">
        <MapPin size={18} />
      </div>
      <div className="text-left">
        <p className="text-sm font-semibold text-white">Location</p>
        <a
          href="https://www.google.com/maps/dir//Lone+Star+Academy+%7C+Data+Science+%7C+Data+Analytics+%7C+Business+Analytics+%7C+Cloud+Computing+%7C+Digital+Marketing+Institute,+2nd+floor,+B1%2F1,+Block+B1,+Janakpuri,+New+Delhi,+Delhi,+110058/@28.5222064,77.2225411,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d05eeb79b3ec1:0x931c2ffc5cbebd62!2m2!1d77.0896536!2d28.6340372?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm leading-6 text-gray-400 hover:text-white transition cursor-pointer"
        >
          B-1/1, 2nd Floor, Janakpuri, New Delhi - 110058
        </a>
      </div>
    </div>
  </div>
  
  {/* Social Icons - Centered with actual brand colors */}
  <div className="mb-10 my-10 flex justify-center gap-3">
    {[
      {
        href: "https://www.facebook.com/people/Lone-Star-Academy/100087175243517/",
        Icon: Facebook,
        bgColor: "bg-[#1877F2]", // Facebook blue
      },
      {
        href: "https://www.instagram.com/lonestaracademy_india?igshid=MDE2OWE1N2Q%3D",
        Icon: Instagram,
        bgColor: "bg-[#E4405F]", // Instagram pink/red
      },
      {
        href: "https://x.com/i/flow/login?redirect_after_login=%2Flone_academy",
        Icon: X,
        bgColor: "bg-black", // X black
      },
      {
        href: "https://www.linkedin.com/company/lonestaracademy-in/?viewAsMember=true",
        Icon: Linkedin,
        bgColor: "bg-[#0A66C2]", // LinkedIn blue
      },
    ].map(({ href, Icon, bgColor }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex h-10 w-10 items-center justify-center rounded-full ${bgColor} text-white transition hover:scale-110`}
      >
        <Icon size={17} />
      </a>
    ))}
  </div>
</div>
          </div>

          {/* Trending Courses - Centered */}
          <div className="border-b border-gray-800 py-10">
            <div className="mx-auto max-w-5xl text-center">
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Trending Courses at{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Lone Star Academy
                </span>
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
                Explore our most in-demand professional programs designed to build
                strong practical skills and career-ready expertise.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                {
                  name: "Business Analytics",
                  slug: "/business-analytics-course-delhi",
                },
                {
                  name: "Data Analytics",
                  slug: "/data-analytics-courses-online-delhi",
                },
                {
                  name: "Data Science",
                  slug: "/data-science-course-online-with-placement-delhi",
                },
                {
                  name: "Cloud Computing",
                  slug: "/cloud-computing-online-courses-delhi",
                },
                {
                  name: "Digital Marketing",
                  slug: "/best-online-digital-marketing-courses-delhi",
                },
                {
                  name: "Financial Modeling",
                  slug: "/financial-modelling-course-delhi",
                },
              ].map((course) => (
                <Link key={course.name} to={course.slug}>
                  <div className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-300 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white md:text-base">
                    {course.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Areas - Centered text */}
          <div className="border-b border-gray-800 py-10">
            <h4 className="mb-4 text-center text-xl text-white">
             See If We Serve Your Area
            </h4>

            <p className="px-4 text-center text-sm leading-8 text-gray-500 md:px-10 lg:px-20">
              Shankar Garden | Vikas Puri | Tilak Nagar | Hari Nagar | Shiv Nagar |
              Janakpuri Extension | Subhash Nagar | Rajouri Garden | Ramesh Nagar |
              Kirti Nagar | Dwarka Sector 1-23 | Uttam Nagar | Palam Colony | 
              Sagarpur | Dabri | Mahavir Enclave | Bindapur | Nawada | Kakrola | 
              Matiala | Vasant Kunj | Munirka | Malviya Nagar | Saket | Hauz Khas | 
              Green Park | Greater Kailash | Kalkaji | Lajpat Nagar | Defence Colony | 
              Punjabi Bagh | Karol Bagh | Patel Nagar | Paharganj | Model Town | 
              Ashok Vihar | Rohini | Shalimar Bagh | Civil Lines | Connaught Place | 
              Noida Sector 15–62 | Indirapuram | Kaushambi | Vaishali | Vasundhara | 
              Gurgaon DLF City | Sushant Lok | South City | Palam Vihar | Sector 56 Gurgaon
            </p>
          </div>

          {/* Bottom - Centered on mobile */}
        {/* Bottom Section */}
<div className="py-6">
  <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
    {/* Copyright */}
    <p className="text-center text-sm text-gray-500 sm:text-left">
      © 2026 Lone Star Academy. All rights reserved.
    </p>

    {/* Footer Links */}
    <div className="flex flex-wrap justify-center gap-4 text-sm">
      <a
        href="/privacy"
        className="text-gray-500 transition-colors duration-300 hover:text-white"
      >
        Privacy Policy
      </a>
      <a
        href="/terms"
        className="text-gray-500 transition-colors duration-300 hover:text-white"
      >
        Terms of Service
      </a>
    </div>
  </div>

  {/* Designed By */}
  <div className="mt-4 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
    Designed & Developed with ❤️ by{" "}
    <a
      href="https://www.infotechagency.com"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-orange-400 transition-colors duration-300 hover:text-orange-300"
    >
      Infotech Agency
    </a>
  </div>
</div>
        </div>
      </footer>
    );
  }