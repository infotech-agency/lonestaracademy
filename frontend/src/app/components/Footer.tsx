  import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Phone,
    Mail,
    MapPin,
  } from "lucide-react";

  export function Footer() {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 gap-10 border-b border-gray-800 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-gray-800">
            
            {/* Contact */}
        <div className="lg:pr-10">
  
  {/* LOGO */}
  <img
    src="/logofooter.png"   // 👈 apna logo public folder me rakho
    alt="Lone Star Academy Logo"
    className="h-35 w-auto  object-contain"
  />

  {/* OPTIONAL: Name (remove if only logo chahiye) */}
  {/* <h2 className="mb-2 text-xl font-bold">Lone Star Academy</h2> */}

  <p className="mb-8 text-sm leading-8 tracking-wide text-gray-400">
Lone Star Academy is a leading training institute in India for Data Science, Digital Marketing, and Business Analytics. We empower students and working professionals with practical, job-oriented learning designed for real industry success.  </p>

</div>

            {/* Quick Links */}
            <div className="lg:px-10">
              <h3 className="mb-8 text-2xl font-semibold text-white">
                Quick Links
              </h3>

              <ul className="space-y-5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "All Courses", href: "/courses" },
                  { label: "Testimonials", href: "/testimonials" },
                  { label: "Our Placement", href: "/team" },
                  { label: "Contact Us", href: "/contact" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-base tracking-wide text-gray-400 transition hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div className="lg:px-10">
              <h3 className="mb-8 text-2xl font-semibold text-white">
                Our Courses
              </h3>

              <ul className="space-y-5">
                {[
                  { label: "Business Analytics", href: "/about2"},
                  { label: "Data Analytics", href: "/about3"},
                  { label: "Data Science", href: "/about4"},
                  { label: "Digital Marketing", href: "/about5"},
                  { label: "Cloud Computing", href: "/about6"},
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-base tracking-wide text-gray-400 transition hover:text-orange-400"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow */}
            
            <div className="lg:pl-10">
              <h3 className="mb-8 text-2xl font-semibold text-white">
Contact us              </h3>

              <div className="space-y-5">
                <a href="tel:+919711709644" className="flex items-center gap-4 group">
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

                <a href="mailto:info@lonestaracademy.in" className="flex items-center gap-4 group">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500 transition group-hover:scale-110">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>
                    <p className="text-sm text-gray-400 group-hover:text-blue-400">
                      info@lonestaracademy.in
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-500">
                    <MapPin size={18} />
                  </div>
                 <div>
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
              <div className="mb-10 my-10 flex gap-3">
                {[
                  {
                    href: "https://www.facebook.com/people/Lone-Star-Academy/100087175243517/",
                    Icon: Facebook,
                    color: "hover:bg-blue-600",
                  },
                  {
                    href: "https://www.instagram.com/lonestaracademy_india?igshid=MDE2OWE1N2Q%3D",
                    Icon: Instagram,
                    color: "hover:bg-pink-600",
                  },
                  {
                    href: "https://x.com/i/flow/login?redirect_after_login=%2Flone_academy",
                    Icon: Twitter,
                    color: "hover:bg-sky-500",
                  },
                  {
                    href: "https://www.linkedin.com/company/lonestaracademy-in/?viewAsMember=true",
                    Icon: Linkedin,
                    color: "hover:bg-blue-700",
                  },
                ].map(({ href, Icon, color }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition hover:scale-110 ${color}`}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Trending Courses */}
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
                "about2",
                "about3",
                "about4",
                "about5",
                "about6",
              ].map((course) => (
                <div
                  key={course}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-300 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white md:text-base"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div className="border-b border-gray-800 py-10">
            <h4 className="mb-4 text-center text-xl text-white">
              Are You Located in Any of these Areas
            </h4>

            <p className="px-4 text-center text-sm leading-8 text-gray-500 md:px-10 lg:px-20">
              Shankar Garden | Vikas Puri | Tilak Nagar | Hari Nagar | Shiv Nagar |
              Janakpuri Extension | Subhash Nagar | Rajouri Garden | Ramesh Nagar |
              Kirti Nagar | Dwarka Sector 1 | Dwarka Sector 2 | Dwarka Sector 3 |
              Dwarka Sector 4 | Dwarka Sector 5 | Dwarka Sector 6 | Dwarka Sector 7 |
              Dwarka Sector 8 | Dwarka Sector 9 | Dwarka Sector 10 | Dwarka Sector 11 |
              Dwarka Sector 12 | Dwarka Sector 13 | Dwarka Sector 14 | Dwarka Sector 15 |
              Dwarka Sector 16 | Dwarka Sector 17 | Dwarka Sector 18 | Dwarka Sector 19 |
              Dwarka Sector 20 | Dwarka Sector 21 | Dwarka Sector 22 | Dwarka Sector 23 |
              Uttam Nagar | Palam Colony | Sagarpur | Dabri | Mahavir Enclave |
              Bindapur | Nawada | Kakrola | Matiala | Vasant Kunj | Munirka |
              Malviya Nagar | Saket | Hauz Khas | Green Park | Greater Kailash |
              Kalkaji | Lajpat Nagar | Defence Colony | Punjabi Bagh | Karol Bagh |
              Patel Nagar | Paharganj | Model Town | Ashok Vihar | Rohini |
              Shalimar Bagh | Civil Lines | Connaught Place | Noida Sector 15–62 |
              Indirapuram | Kaushambi | Vaishali | Vasundhara | Gurgaon DLF City |
              Sushant Lok | South City | Palam Vihar | Sector 56 Gurgaon
            </p>
          </div>

          {/* Bottom */}
          <div className="py-6">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <p className="text-sm text-gray-500">
                © 2026 Lone Star Academy. All rights reserved.
              </p>

              <div className="flex gap-4 text-sm">
                <a href="#" className="text-gray-500 hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-white">
                  Terms of Service
                </a>
                <a href="/admin" className="text-gray-600 hover:text-gray-400">
                  Admin
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }