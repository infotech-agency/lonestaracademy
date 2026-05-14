import { useState } from "react";
import { motion } from "motion/react";
import { 
  FileText, 
  Lock, 
  BookOpen, 
  Gift, 
  Globe, 
  Scale, 
  AlertTriangle,
  UserCheck,
  Key,
  Shield,
  Briefcase,
  Gavel,
  FileSignature,
  Mail,
  Phone,
  Users,
  ChevronRight,
  CheckCircle,
  XCircle
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState("acceptance");
  const [lastUpdated, setLastUpdated] = useState("January 15, 2026");

  // Banner image URL - replace with your actual image URL
  const bannerImageUrl = "terms.jpg";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of this Agreement",
      icon: <FileSignature className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-blue-800 text-sm">
              By clicking on the <strong>'SIGNUP'</strong> option, the participant ("You" or "Your") agrees to the 
              Terms and Conditions, obligations, representations, warranties, and agreements contained herein (the "Agreement").
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            In the event, You are not willing to accept the Agreement, You shall not be authorized or allowed to 
            proceed further to view or use in any manner any content, information, courseware, products and services 
            ("Services") published, available on the Website, which is owned, maintained and monitored by Lone Star Academy 
            ("Us", "We" or "Our").
          </p>
        </div>
      )
    },
    {
      id: "user-id",
      title: "User ID and Password",
      icon: <Key className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-yellow-800 text-sm flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <span>Use or sharing of Your Participant Account with another user is not permitted and is cause for immediate blocking of Your access.</span>
            </p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>Your user ID and password is for Your exclusive use only</div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>You are solely responsible for maintaining confidentiality</div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>Immediately notify our Grievance Officer of unauthorized use</div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "content",
      title: "Content and Courseware",
      icon: <BookOpen className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            As a part of our Services offered through our Website, We shall grant you access to our content, courseware, 
            practice tests, and other information, documents, and data which may be in audio, video, written, graphic, 
            recorded, photographic, or any machine-readable format in relation to the specific certification training 
            course You have registered for ("Content and Courseware").
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 text-sm">
              <strong>Note:</strong> We reserve the right to amend, revise or update the Content and Courseware offered to You. 
              In the event such an amendment, revision or updation occurs, We may require you pay an additional fee to access 
              such amended, revised, or updated Content and Courseware.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "free-access",
      title: "Free Access",
      icon: <Gift className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            The selected courses of free access (hereinafter the "Courses") are brought to you by Lone Star Academy. 
            Your access to the said Courses is limited to the extent of self-learning videos and course resources only.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Access limited to self-learning videos and resources",
              "Free access expires after notified number of days",
              "No license granted for reuse or reproduction",
              "All materials are copyright protected"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <Shield className="w-4 h-4 text-blue-500" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-800 text-sm">
              <strong>Note:</strong> Upon full value complete purchase of any Course, your balance of free access days 
              shall be added onto the number of days that may be generally applicable to the respective Courses.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "usage",
      title: "Usage of Website and Services",
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We grant you a personal, restricted, non-transferable, non-exclusive, and revocable license to use the Website, 
            the Services, and the Content and Courseware offered through the Website.
          </p>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-red-800 text-sm flex items-start gap-2">
              <XCircle className="w-5 h-5 flex-shrink-0" />
              <span>You are NOT permitted to reproduce, transmit, distribute, sub-license, broadcast, disseminate, or prepare derivative works of the Content and Courseware without Our prior written consent.</span>
            </p>
          </div>
        </div>
      )
    },
    {
      id: "ip-rights",
      title: "Intellectual Property Rights",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            While You are granted a limited and non-exclusive right to use the Website, the Services, and the Content and 
            Courseware for the Restricted Purpose, You acknowledge and agree that We are the sole and exclusive owner of 
            the Website, the Services and the Content and Courseware and as such are vested with all Intellectual Property 
            Rights and other proprietary rights.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 text-sm">
              This Agreement does not convey to You in any manner or form any right, title or interest of a proprietary, 
              or any other nature in the Website, the Services, and the Content and Courseware.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "personal-info",
      title: "Usage of Personal Information",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to feature Your picture in any photos, videos, or other promotional material used by Us. 
            Further, We may use Your personal information to inform You about other certification training courses offered by Us.
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-800 text-sm">
              We shall not distribute or share Your personal information with any third party marketing database or disclose 
              Your personal information to any third party except on a case-to-case basis after proper verification or if 
              required under any applicable law.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-red-800 text-sm">
              You expressly agree that use of the Website, the Services, and the Content and Courseware are at Your sole risk.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            In no event will We or any person or entity involved in creating, producing, or distributing the Website, 
            the Services, or the Content and Courseware be liable for any direct, indirect, incidental, special, or 
            consequential damages arising out of the use of or inability to use the Website, the Services, or the Content 
            and Courseware.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 text-sm">
              <strong>Maximum Liability:</strong> Our liability shall not exceed the fee you paid to Us for the particular 
              certification training course.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "governing-law",
      title: "Governing Law and Jurisdiction",
      icon: <Gavel className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4" />
                USA Residents
              </h4>
              <p className="text-sm text-gray-600">
                Governed by Laws of New York. Courts in New York have exclusive jurisdiction.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4" />
                Non-USA Residents
              </h4>
              <p className="text-sm text-gray-600">
                Governed by Laws of India. Courts in Bangalore, India have exclusive jurisdiction.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "contact",
      title: "Grievance Officer",
      icon: <Mail className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg space-y-3">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-blue-600" />
              Contact Details
            </h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-500" />
                <strong>Name:</strong> Neeraj Sharma
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <strong>Phone:</strong> 9711709644
                <span className="text-sm text-gray-500 block ml-6">(Timings: 10 AM to 7:30 PM IST - Monday to Friday, except holidays)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <strong>Email:</strong> 
                <a href="mailto:admin@lonestaracademy-in-251010.hostingersite.com" className="text-blue-600 hover:underline">
                  admin@lonestaracademy-in-251010.hostingersite.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
    
    <Navigation/>
    <div className="min-h-screen bg-gray-50 text-zinc-900">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[350px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bannerImageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-purple-900/85" />
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">
                <FileText className="w-16 h-16 text-white/90" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Terms & Conditions
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-4">
                Please read these terms carefully before using our services
              </p>
              <div className="flex justify-center gap-4 text-sm text-white/80">
                <span>Last Updated: {lastUpdated}</span>
                <span>•</span>
                <span>Effective Date: January 15, 2026</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-4 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <h3 className="text-white font-semibold">Table of Contents</h3>
                <p className="text-white/80 text-sm">Quick navigation</p>
              </div>
              <nav className="p-2 max-h-[600px] overflow-y-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all mb-1 ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {section.icon}
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {sections.map((section, idx) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        {section.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {section.title}
                      </h2>
                    </div>
                    {section.content}
                  </div>
                </motion.section>
              ))}

              {/* Additional Clauses */}
              <div className="p-6 md:p-8 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Additional Provisions</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Indemnity</h3>
                    <p className="text-gray-700">
                      You agree to indemnify and hold Us harmless from any and all claims, losses, damages, liabilities, 
                      and expenses including attorneys' fees, arising out of Your unauthorized use of the Website, the Services, 
                      or any violation of this Agreement.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Waiver</h3>
                    <p className="text-gray-700">
                      No failure or delay on the part of any party to exercise any right shall operate as a waiver thereof.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Severability</h3>
                    <p className="text-gray-700">
                      If any provision of this Agreement is held invalid or unenforceable under the applicable laws of India, 
                      the remaining provisions shall continue in full force and effect.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Amendment and Assignment</h3>
                    <p className="text-gray-700">
                      We reserve the right to unilaterally amend or modify this Agreement without giving any prior notification. 
                      You are not permitted to assign this Agreement to any third party.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Entire Agreement</h3>
                    <p className="text-gray-700">
                      This Agreement, along with the Privacy Policy, Refund Policy, Rescheduling Policy, Terms of Use, 
                      constitutes the entire agreement governing Your use of our Website.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Important Notice
              </h3>
              <p className="text-blue-700 text-sm">
                For any concerns or queries, please reach out to our Grievance Officer. Our Grievance Officer shall undertake 
                all reasonable efforts to address your grievances in the shortest possible time.
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Lone Star Academy. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="/contact" className="text-gray-400 hover:text-white text-sm transition">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
    <Footer/>
    </>
  );
};

export default TermsAndConditions;