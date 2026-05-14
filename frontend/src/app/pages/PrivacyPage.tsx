import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Shield, 
  Eye, 
  Database, 
  Lock, 
  Users, 
  FileText, 
  Mail,
  ChevronRight,
  Globe,
  Share2,
  Trash2,
  Edit,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [lastUpdated, setLastUpdated] = useState("January 15, 2026");

  // Banner image URL - replace with your actual image URL
  const bannerImageUrl = "/privacy.jpg";

  const sections = [
    {
      id: "overview",
      title: "Overview & Purpose",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Lone Star Academy ("Lone Star Academy," "we," or "us") is committed to protecting your privacy. 
            We take data protection and privacy very seriously. This Privacy Policy ("Policy") describes 
            how Lone Star Academy collects, uses, shares and secures the personal information you provide 
            when you visit the Websites and Mobile Apps owned and operated by Lone Star Academy, and when 
            you use our Service(s).
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> The use of information collected through our Service(s) shall be limited 
              to the purpose of providing the service for which you have engaged Lone Star Academy.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "personal-info",
      title: "Personal Identifiable Information",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We may collect the following personal information from you in the following situations:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Contact Information:</strong> Name, email address, mailing address, phone number, IP address
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Business Information:</strong> Company name, company size, business type
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Account Details:</strong> Billing information, account password 
                <span className="text-sm text-gray-500 block">Note: All payment transactions are processed through secure payment gateway providers. We do not store any card information (other than the last 4 digits of your card) in our servers.</span>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "non-personal",
      title: "Non-Personal Identifiable Data",
      icon: <Database className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">We capture non-identifiable data in our logs including:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["Device type", "Browser type", "Language preference", "Time zone", "Screen size", "Referring/exit pages"].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-2 rounded text-center text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">We use your personal information to:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Provide you with the Service(s)",
              "Assess the needs of your business",
              "Send you requested product or service information",
              "Respond to customer service requests",
              "Administer your account",
              "Perform statistical analyses"
            ].map((use, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-500" />
                <span>{use}</span>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-yellow-800 text-sm flex items-start gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>By agreeing to this Privacy Policy, you give us explicit permission to communicate with you via phone, email, or chat, even if you are registered under DND or DNC service.</span>
            </p>
          </div>
        </div>
      )
    },
    {
      id: "data-security",
      title: "Information Security",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "SSL encryption for sensitive data",
              "Regular malware scanning",
              "Limited access to personal information",
              "Secure payment gateway integration"
            ].map((security, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <Lock className="w-4 h-4 text-green-600" />
                <span className="text-sm">{security}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Although we will do our best to protect your personal data, we cannot guarantee the security 
            of your data transmitted to our Websites or via the Service(s) and any transmission is at your own risk.
          </p>
        </div>
      )
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <Eye className="w-5 h-5 text-blue-500" />
              <div>
                <strong>Right to Access</strong>
                <p className="text-gray-600 text-sm">You have the right to access your Personal Information at any time.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <Edit className="w-5 h-5 text-green-500" />
              <div>
                <strong>Right to Correction</strong>
                <p className="text-gray-600 text-sm">You can edit, correct, or update any inaccurate or incomplete information.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <Trash2 className="w-5 h-5 text-red-500" />
              <div>
                <strong>Right to Deletion</strong>
                <p className="text-gray-600 text-sm">You can request deletion of your Personal Information, subject to legal obligations.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: <Mail className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg space-y-3">
            <h4 className="font-semibold text-lg">Grievance Officer</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-500" />
                <strong>Name:</strong> Neeraj Sharma
              </p>
              <p className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gray-500" />
                <strong>Designation:</strong> Data Privacy Officer
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

  const TogafClause = () => (
    <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
      <h4 className="font-semibold text-red-800 flex items-center gap-2 mb-2">
        <Shield className="w-5 h-5" />
        For TOGAF 9.1 Course:
      </h4>
      <p className="text-red-700 text-sm">
        We agree to keep confidential any and all information that comes into its possession regarding the Program's examinations. 
        If Lone Star Academy is found to have disclosed the content of any of the Open Group's examination scenarios, questions, 
        or answers to any third party other than in the normal course of Lone Star Academy attendees sitting the examinations, 
        the Agreement and all Schedules attached to it will be immediately terminated and the Open Group shall remove all of 
        the Lone Star Academy's ATCs and Affiliates from the Accreditation Register.
      </p>
    </div>
  );

  return (
    <>
    <Navigation/>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner - Simple without curve */}
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
                <Shield className="w-16 h-16 text-white/90" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-4">
                Your privacy is our priority. We're committed to protecting your personal information.
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
              
              {/* Additional Sections */}
              <div className="p-6 md:p-8 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Third Party Links & Analytics</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Our Websites contain links to other websites that are not owned or controlled by Lone Star Academy. 
                    We are not responsible for the privacy practices of such other websites or third parties.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Analytics & Web-beacons</h3>
                    <p className="text-gray-600 text-sm">
                      Lone Star Academy uses third-party software for analytics to evaluate how users use our platform, 
                      compile statistical reports, and personalize your experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Social Media Features</h2>
                </div>
                <p className="text-gray-700">
                  Our Websites include social media features such as the Facebook "Like" button, "Share This" button, 
                  and interactive mini-programs. These features may collect your IP address and which page you are 
                  visiting on our Websites, and may set a cookie to enable the feature to function properly.
                </p>
              </div>

              <div className="p-6 md:p-8 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800">
                    Lone Star Academy does not knowingly collect any personal information from children under the age of 16. 
                    If you are under the age of 16, please do not submit any personal information through our Websites or Service(s).
                  </p>
                </div>
              </div>

              {/* TOGAF Clause */}
              <div className="p-6 md:p-8">
                <TogafClause />
              </div>
            </div>

            {/* Amendment Notice */}
            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Policy Updates</h3>
              <p className="text-blue-700 text-sm">
                Lone Star Academy has the discretion to update this privacy policy at any time. When we do, we will post a 
                notification on the main page of our Site, revise the updated date, and send you an email. Your continued 
                use of this Websites or the Service(s) following the posting of any amendment shall constitute your acceptance 
                of the amendments to this Policy.
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;