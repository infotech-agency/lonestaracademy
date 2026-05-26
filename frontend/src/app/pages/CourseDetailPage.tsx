

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { motion } from "motion/react";
// import { Navigate } from "react-router-dom";
// import {
//   BookOpen,
//   Clock,
//   IndianRupee,
//   CheckCircle,
//   Star,
//   Users,
//   Award,
//   Briefcase,
//   Phone,
//   ArrowRight,
//   Sparkles,
//   GraduationCap,
//   ChevronDown,
//   Info,
//   X,
//   MessageCircle,
// } from "lucide-react";
// import { Navigation } from "../components/Navigation";
// import { Footer } from "../components/Footer";
// import axios from "axios"
// import { BASE_URL } from "../../../utils/baseUrl";
// import NotFound from "./NotFound";
// import { Helmet } from "react-helmet-async";

// const API = BASE_URL;

// interface Course {
//   _id: string;
//   id?: string;
//   slug?: string;
//   name: string;
//   price: string;
//   duration: string;
//   description: string;
//   category: string;
//   image: string | null;
//   syllabus?: string[];
//   highlights?: string[];
//   tools?: string[];
//   whoCanJoin?: string[];
//   careerOptions?: string[];
//   faqs?: { question: string; answer: string }[];
//   seo?: {
//     title?: string;
//     description?: string;
//     keywords?: string;
//   };
// }

// type CourseSection = {
//   title: string;
//   content: string;
//   points?: string[];
// };

// type CourseExtraContent = {
//   aboutTitle: string;
//   about: string;
//   sections: CourseSection[];
//   highlights: string[];
//   tools: string[];
//   whoCanJoin: string[];
//   careerOptions: string[];
// };

// const courseContent: Record<string, CourseExtraContent> = {
//   "Business Analytics": {
//     aboutTitle:
//       "Business Analytics Online Course & Business Analyst Course in Delhi",
//     about:
//       "In this era of big data, choosing the right business analytics online course or business analyst course in Delhi can be a game changer for your career. At Lone Star Academy, we provide a practical, industry-relevant learning path for beginners, working professionals, and fresh graduates who want to build a strong career in analytics and decision making.",
//     sections: [
//       {
//         title: "Why Choose Lone Star Academy for Business Analytics?",
//         content:
//           "At Lone Star Academy, we focus on making students job-ready through practical training, live projects, real industry case studies, and placement-oriented preparation.",
//         points: [
//           "Industry-relevant content designed by subject experts",
//           "Live projects and real industry case studies",
//           "Placement-oriented training with interview preparation",
//           "Flexible online and offline classroom learning",
//           "Mentorship from working professionals",
//         ],
//       },
//       {
//         title: "What You Will Learn",
//         content:
//           "This Business Analytics course gives you strong knowledge of basic and advanced analytics concepts with real business applications.",
//         points: [
//           "Introduction to Business Analytics",
//           "Data Visualization with Excel, Power BI and Tableau",
//           "SQL for Data Analysis",
//           "Python for Data Analytics",
//           "Statistical Analysis and Predictive Modeling",
//           "Business Intelligence and Reporting",
//         ],
//       },
//       {
//         title: "Practice-Based Learning Model",
//         content:
//           "Our course focuses on practical learning instead of only theory. You will work on real datasets, case studies, live assignments, and a capstone project to build your portfolio.",
//       },
//       {
//         title: "Job Support and Career Assistance",
//         content:
//           "Our Business Analyst training in Delhi includes resume building, mock interviews, soft skills training, job referrals, and placement assistance.",
//       },
//     ],
//     highlights: [
//       "Practical business analytics training",
//       "Live projects and case studies",
//       "Excel, Power BI, Tableau, SQL and Python",
//       "Online and offline flexible batches",
//       "Interview preparation",
//       "Placement assistance",
//     ],
//     tools: ["Advanced Excel", "Power BI", "Tableau", "SQL", "Python"],
//     whoCanJoin: [
//       "Fresh graduates",
//       "Working professionals",
//       "Business owners",
//       "IT professionals",
//       "Beginners with no coding background",
//     ],
//     careerOptions: [
//       "Business Analyst",
//       "Data Analyst",
//       "Reporting Analyst",
//       "BI Developer",
//       "Product Analyst",
//     ],
//   },

//   "Data Analytics": {
//     aboutTitle: "Data Analytics Courses Online & Data Analytics Courses in Delhi",
//     about:
//       "With the growing demand for data-driven decisions, Data Analytics is one of the best career choices for students, working professionals, and career switchers. Lone Star Academy provides practical training that helps beginners become confident data analysts.",
//     sections: [
//       {
//         title: "Why Enroll in Lone Star Academy Data Analytics Course?",
//         content:
//           "Lone Star Academy stands out because of its student-first approach, expert trainers, practical learning style, and placement support.",
//         points: [
//           "Industry-led and expert-designed curriculum",
//           "Hands-on projects and case studies",
//           "Flexible online and offline classes",
//           "Personalized mentorship",
//           "Placement support and career counselling",
//         ],
//       },
//       {
//         title: "Core Modules Covered",
//         content:
//           "Our Data Analytics course content is designed for beginners and intermediate learners with practical tools and real-world analytics training.",
//         points: [
//           "What is Data Analytics?",
//           "Excel for Data Analysis",
//           "Data Handling with SQL",
//           "Python for Data Analytics",
//           "Data Visualization with Power BI and Tableau",
//           "Statistics and Data Analysis",
//           "Real-world Case Studies",
//           "Capstone Projects",
//         ],
//       },
//       {
//         title: "Certification and Practical Exposure",
//         content:
//           "After completing the course, students receive Lone Star Academy certification. The course includes real company case studies, data cleaning, visualization exercises, and a portfolio-building capstone project.",
//       },
//       {
//         title: "Placement Assistance",
//         content:
//           "We provide resume building sessions, mock interviews, job referrals, and career counselling to help students become job-ready.",
//       },
//     ],
//     highlights: [
//       "Beginner-friendly data analytics training",
//       "Excel, SQL, Python, Power BI and Tableau",
//       "Hands-on projects",
//       "Capstone project",
//       "Certification support",
//       "Placement assistance",
//     ],
//     tools: ["Microsoft Excel", "SQL", "Python", "Power BI", "Tableau"],
//     whoCanJoin: [
//       "Recent graduates",
//       "Working professionals",
//       "Business owners",
//       "IT specialists",
//       "Data analyst aspirants",
//     ],
//     careerOptions: [
//       "Data Analyst",
//       "Business Analyst",
//       "Reporting Analyst",
//       "MIS Analyst",
//       "Entry-Level Data Scientist",
//     ],
//   },

//   "Data Science": {
//     aboutTitle: "Data Science Course in Delhi with Placement",
//     about:
//       "If you are looking for a Data Science course online with placement or a Data Science course in Delhi, Lone Star Academy offers a future-focused program with industry skills, hands-on learning, live projects, and career support.",
//     sections: [
//       {
//         title: "Why Take Data Science with Lone Star Academy?",
//         content:
//           "Our Data Science course focuses on practical learning, real projects, industry tools, and placement assistance instead of only theoretical concepts.",
//         points: [
//           "Industry-relevant curriculum on AI, machine learning and analytics",
//           "Experienced mentors from top tech companies",
//           "Live projects and case studies",
//           "Placement services and career support",
//           "Offline and online learning modes",
//         ],
//       },
//       {
//         title: "End-to-End Data Science Curriculum",
//         content:
//           "The curriculum is designed to help learners build strong foundations and move towards advanced machine learning and AI concepts.",
//         points: [
//           "Python programming",
//           "Statistics and probability",
//           "Data manipulation and visualization",
//           "Supervised and unsupervised learning",
//           "Model building and evaluation",
//           "Deep learning basics",
//           "Natural Language Processing",
//           "AI-enabled automation",
//         ],
//       },
//       {
//         title: "Flexible Learning Options",
//         content:
//           "Students can choose live online classes with recordings or classroom training in Delhi NCR with mentorship and networking opportunities.",
//       },
//       {
//         title: "Career Guidance",
//         content:
//           "The program includes resume building, mock interviews, portfolio development, and interview opportunity support.",
//       },
//     ],
//     highlights: [
//       "AI and machine learning curriculum",
//       "Live projects and real datasets",
//       "Online and offline learning",
//       "Portfolio building",
//       "Mock interviews",
//       "Placement assistance",
//     ],
//     tools: ["Python", "SQL", "Excel", "Power BI", "Tableau", "Machine Learning"],
//     whoCanJoin: [
//       "Students",
//       "Recent graduates",
//       "IT professionals",
//       "Non-tech career switchers",
//       "Business owners",
//     ],
//     careerOptions: [
//       "Data Analyst",
//       "Data Scientist",
//       "Machine Learning Engineer",
//       "Business Analyst",
//       "AI Specialist",
//     ],
//   },

//   "Digital Marketing": {
//     aboutTitle: "Best Online Digital Marketing Course & Digital Marketing Course in Delhi",
//     about:
//       "Digital marketing is one of the fastest-growing career fields. At Lone Star Academy, our Digital Marketing course combines real-world skills, industry tools, live projects, certifications, and placement assistance.",
//     sections: [
//       {
//         title: "Why Choose Lone Star Academy for Digital Marketing?",
//         content:
//           "We train, mentor, and prepare students for real digital marketing work through practical projects and industry-standard tools.",
//         points: [
//           "Industry-relevant curriculum based on current trends",
//           "Live project training",
//           "Expert mentors from top agencies",
//           "Certifications to enhance your credibility",
//           "Placement support",
//         ],
//       },
//       {
//         title: "Course Highlights",
//         content:
//           "Our Digital Marketing course covers both basic and advanced digital marketing skills.",
//         points: [
//           "SEO",
//           "Google Ads and PPC Campaigns",
//           "Social Media Marketing",
//           "Content Marketing",
//           "Email Marketing Automation",
//           "Affiliate Marketing",
//           "Web Analytics and Tracking",
//           "AI Tools in Digital Marketing",
//         ],
//       },
//       {
//         title: "Practical Campaign Training",
//         content:
//           "Students work on live business websites, ad campaign creation, SEO audits, social media strategy, and reporting concepts.",
//       },
//       {
//         title: "Placement Assistance",
//         content:
//           "Our placement assistance includes resume building, interview coaching, expert mock interviews, hiring partner access, and internship opportunities.",
//       },
//     ],
//     highlights: [
//       "SEO and Google Ads training",
//       "Social media marketing",
//       "Live campaign projects",
//       "AI tools in digital marketing",
//       "Internship support",
//       "Placement assistance",
//     ],
//     tools: [
//       "SEO",
//       "Google Ads",
//       "Meta Ads",
//       "Google Analytics",
//       "Email Marketing",
//       "AI Tools",
//     ],
//     whoCanJoin: [
//       "Students",
//       "Job seekers",
//       "Entrepreneurs",
//       "Freelancers",
//       "Working professionals",
//     ],
//     careerOptions: [
//       "SEO Specialist",
//       "Social Media Manager",
//       "PPC Expert",
//       "Content Strategist",
//       "Digital Marketing Manager",
//     ],
//   },

//   "Cloud Computing": {
//     aboutTitle: "Cloud Computing Courses in Delhi & Online",
//     about:
//       "If you are looking for practical Cloud Computing training, online cloud courses, real-life environment-based learning, and job-oriented cloud courses in Delhi, Lone Star Academy is the perfect choice for you.",
//     sections: [
//       {
//         title: "Why Select Lone Star Academy for Cloud Computing Training?",
//         content:
//           "A good cloud training institute can shape your career path. Lone Star Academy provides quality education, practical lab sessions, expert guidance, and placement support.",
//         points: [
//           "Industry-relevant AWS, Azure and Google Cloud based curriculum",
//           "Real-world experience through practical lab sessions",
//           "Trained professionals with industry exposure",
//           "In-house placement support and interview preparation",
//           "Flexible online and classroom learning options",
//         ],
//       },
//       {
//         title: "What You Will Learn",
//         content:
//           "Our Cloud Computing course covers everything from cloud basics to advanced deployment and security concepts.",
//         points: [
//           "Introduction to Cloud Computing and Architecture",
//           "Virtualization and basic networking",
//           "Cloud Service Models: IaaS, PaaS and SaaS",
//           "AWS, Microsoft Azure and Google Cloud Platforms",
//           "Security and Compliance in the Cloud",
//           "DevOps and Automation Tools",
//           "Deployment and Migration Techniques",
//         ],
//       },
//       {
//         title: "Cloud Computing Training with Placement",
//         content:
//           "Our placement assistance includes resume building, portfolio development, mock interviews, HR preparation, job referrals, hiring partner connections, and communication training.",
//       },
//       {
//         title: "Certification Preparation",
//         content:
//           "The course helps students prepare for AWS, Microsoft Azure, and Google Cloud certifications with practical guidance and career support.",
//       },
//     ],
//     highlights: [
//       "AWS, Azure and Google Cloud curriculum",
//       "Practical lab sessions",
//       "Cloud security and compliance",
//       "DevOps and automation tools",
//       "Certification preparation",
//       "Placement assistance",
//     ],
//     tools: [
//       "AWS",
//       "Microsoft Azure",
//       "Google Cloud",
//       "Docker",
//       "Kubernetes",
//       "DevOps Tools",
//     ],
//     whoCanJoin: [
//       "Fresh graduates",
//       "IT professionals",
//       "Career switchers",
//       "Business owners",
//       "Beginners in cloud technology",
//     ],
//     careerOptions: [
//       "Cloud Engineer",
//       "Solutions Architect",
//       "DevOps Engineer",
//       "Cloud Security Specialist",
//       "System Administrator",
//     ],
//   },
// };

// const curriculum: Record<string, string[]> = {
//   "Business Analytics": [
//     "Introduction to Business Analytics",
//     "Advanced Excel",
//     "Power BI Fundamentals",
//     "Tableau Dashboards",
//     "SQL for Analytics",
//     "Business Reporting",
//     "Real-world Case Studies",
//   ],
//   "Data Analytics": [
//     "Python Basics",
//     "NumPy & Pandas",
//     "SQL & Database Concepts",
//     "Data Cleaning",
//     "Visualization with Power BI",
//     "Statistics for Analytics",
//     "Capstone Project",
//   ],
//   "Data Science": [
//     "Python for Data Science",
//     "Machine Learning",
//     "Deep Learning Basics",
//     "NLP Fundamentals",
//     "Data Engineering Concepts",
//     "Model Deployment",
//     "Industry Projects",
//   ],
//   "Digital Marketing": [
//     "SEO Fundamentals",
//     "Google Ads",
//     "Social Media Marketing",
//     "Content Marketing",
//     "Email Marketing",
//     "Analytics & Reporting",
//     "Practical Campaign Projects",
//   ],
//   "Cloud Computing": [
//     "Cloud Fundamentals",
//     "AWS Services",
//     "Microsoft Azure Basics",
//     "Google Cloud Basics",
//     "Docker & Kubernetes",
//     "Cloud Security",
//     "Certification Preparation",
//   ],
// };

// const benefits = [
//   "100% Practical Training",
//   "Live Projects & Assignments",
//   "Interview Preparation",
//   "Resume Building Support",
//   "Placement Assistance",
//   "Recorded Backup Sessions",
//   "Expert Trainers",
//   "Flexible Learning Structure",
// ];

// const whyChoose = [
//   {
//     icon: Award,
//     title: "Industry-Oriented Learning",
//     desc: "Learn with real tools, real scenarios, and job-ready practical modules.",
//   },
//   {
//     icon: Briefcase,
//     title: "Placement Assistance",
//     desc: "We help students with resume support, mock interviews, and placement guidance.",
//   },
//   {
//     icon: Users,
//     title: "Expert Mentorship",
//     desc: "Get support from experienced trainers with practical domain knowledge.",
//   },
// ];

// const pageImages: Record<string, string> = {
//   "Business Analytics": "/businessanlytics.jpg",
//   "Data Analytics": "/dataanalytics.jpg",
//   "Data Science": "/datascience.jpg",
//   "Digital Marketing": "/Digitalmarketing.jpg",
//   "Cloud Computing": "/cloudcomputing.jpg",
// };

// const faqs: Record<string, { question: string; answer: string }[]> = {
//   "Business Analytics": [
//     {
//       question: "Who can join the Business Analytics course?",
//       answer:
//         "Students, working professionals, freshers, and business professionals who want to build reporting, dashboard, and analytics skills can join this course.",
//     },
//     {
//       question: "What tools are covered in Business Analytics?",
//       answer:
//         "This course covers Excel, Power BI, Tableau, SQL, reporting concepts, and practical business case studies.",
//     },
//     {
//       question: "Do you provide placement assistance for Business Analytics?",
//       answer:
//         "Yes, we provide resume support, interview preparation, mock interviews, and placement guidance.",
//     },
//     {
//       question: "Is this course suitable for beginners?",
//       answer:
//         "Yes, the course starts from fundamentals and gradually moves to advanced practical concepts.",
//     },
//   ],
//   "Data Analytics": [
//     {
//       question: "What will I learn in the Data Analytics course?",
//       answer:
//         "You will learn Python, Pandas, NumPy, SQL, data cleaning, dashboards, statistics, and project-based analytics skills.",
//     },
//     {
//       question: "Is coding required for Data Analytics?",
//       answer:
//         "Basic coding helps, but beginners can also join because the training starts from fundamentals.",
//     },
//     {
//       question: "Will I work on practical projects?",
//       answer:
//         "Yes, the course includes hands-on assignments, case studies, and a capstone project.",
//     },
//     {
//       question: "Can freshers join the Data Analytics course?",
//       answer:
//         "Yes, freshers can join this course to build job-ready analytics skills.",
//     },
//   ],
//   "Data Science": [
//     {
//       question: "What topics are included in the Data Science course?",
//       answer:
//         "The course includes Python, machine learning, deep learning basics, NLP, data engineering concepts, and model deployment.",
//     },
//     {
//       question: "Is Data Science good for career growth?",
//       answer:
//         "Yes, Data Science is one of the most in-demand fields with strong career opportunities across industries.",
//     },
//     {
//       question: "Do I need prior programming experience?",
//       answer:
//         "No, beginners can start with this course, but regular practice is important.",
//     },
//     {
//       question: "Will I get project experience in Data Science?",
//       answer:
//         "Yes, students work on industry-oriented projects to improve practical understanding.",
//     },
//   ],
//   "Digital Marketing": [
//     {
//       question: "What modules are covered in the Digital Marketing course?",
//       answer:
//         "This course covers SEO, Google Ads, social media marketing, content marketing, email marketing, and performance analytics.",
//     },
//     {
//       question: "Is Digital Marketing a good option for beginners?",
//       answer:
//         "Yes, it is a beginner-friendly field and suitable for students, job seekers, and business owners.",
//     },
//     {
//       question: "Will I learn practical campaign execution?",
//       answer:
//         "Yes, the course includes practical campaign work, ad strategy, and reporting concepts.",
//     },
//     {
//       question: "Do you provide certification support?",
//       answer:
//         "Yes, we guide students for course completion and help them prepare for relevant certifications.",
//     },
//   ],
//   "Cloud Computing": [
//     {
//       question: "What will I learn in the Cloud Computing course?",
//       answer:
//         "You will learn cloud fundamentals, AWS, Azure, Google Cloud basics, Docker, Kubernetes, and cloud security concepts.",
//     },
//     {
//       question: "Is Cloud Computing suitable for beginners?",
//       answer:
//         "Yes, this course starts with core cloud fundamentals before moving to advanced tools.",
//     },
//     {
//       question: "Does the course include certification preparation?",
//       answer:
//         "Yes, the course includes support for cloud certification preparation.",
//     },
//     {
//       question: "Will I learn deployment and cloud services practically?",
//       answer:
//         "Yes, the training includes practical exposure to cloud platforms and deployment-related concepts.",
//     },
//   ],
// };

// export default function CourseDetailPage() {
//   const [course, setCourse] = useState<Course | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [openFaq, setOpenFaq] = useState<number | null>(0);
//   const [showMobileForm, setShowMobileForm] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     course: "",
//     message: "",
//   });

//   const { slug: routeSlug } = useParams<{ slug: string }>();

//   // Scroll to top when component mounts
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//   const fetchCourse = async () => {
//     try {
//       setLoading(true);

//       const response = await fetch(`${API}/api/courses/${routeSlug}`);

//       // If API returns 404 or any error status
//       if (!response.ok) {
//         setCourse(null);
//         return;
//       }

//       const data = await response.json();

//       // If API returns invalid or empty data
//       if (!data || !data._id || !data.name) {
//         setCourse(null);
//         return;
//       }

//       setCourse(data);

//       setFormData((prev) => ({
//         ...prev,
//         course: data.name || "",
//       }));
//     } catch (error) {
//       console.error("Error fetching course:", error);
//       setCourse(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (routeSlug) {
//     fetchCourse();
//   } else {
//     setCourse(null);
//     setLoading(false);
//   }
// }, [routeSlug]);

//   useEffect(() => {
//     if (!course?.seo) return;

//     if (course.seo.title) {
//       document.title = course.seo.title;
//     }

//     const setMeta = (name: string, content?: string) => {
//       if (!content) return;
//       let tag = document.querySelector(`meta[name="${name}"]`);
//       if (!tag) {
//         tag = document.createElement("meta");
//         tag.setAttribute("name", name);
//         document.head.appendChild(tag);
//       }
//       tag.setAttribute("content", content);
//     };

//     setMeta("description", course.seo.description);
//     setMeta("keywords", course.seo.keywords);
//   }, [course]);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Your enquiry has been submitted successfully.");
//     setFormData({
//       name: "",
//       phone: "",
//       email: "",
//       course: course?.name || "",
//       message: "",
//     });
//     setShowMobileForm(false); // Close mobile form after submission
//   };

//   if (loading) {
//     return (
//       <>
//       <Helmet>
//   <title>{course?.seo?.title || course?.name}</title>

//   <meta
//     name="description"
//     content={course?.seo?.description || course?.description}
//   />

//   <meta
//     name="keywords"
//     content={course?.seo?.keywords || course?.name}
//   />

//   <link
//     rel="canonical"
//     href={`https://www.lonestaracademy.in/${routeSlug}`}
//   />

//   {/* Open Graph */}
//   <meta property="og:type" content="website" />
//   <meta property="og:title" content={course?.seo?.title || course?.name} />
//   <meta
//     property="og:description"
//     content={course?.seo?.description || course?.description}
//   />
//   <meta
//     property="og:url"
//     content={`https://www.lonestaracademy.in/${routeSlug}`}
//   />
//   <meta property="og:image" content={course?.image || ""} />

//   {/* Twitter */}
//   <meta name="twitter:card" content="summary_large_image" />
// </Helmet>
//         <Navigation />
//         <div className="flex min-h-screen items-center justify-center bg-slate-50">
//           <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
//         </div>
//       </>
//     );
//   }

//   if (!course) {
//   return <NotFound />;
// }
//   const content = courseContent[course.name];

//   const heroImage =
//     course.image ? (course.image.startsWith('http') ? course.image : `${API}${course.image}`) : pageImages[course.name] || "/images/default-course.jpg";

//   const syllabus = (course.syllabus && course.syllabus.length > 0) 
//     ? course.syllabus 
//     : (curriculum[course.name] || [
//         "Module 1",
//         "Module 2",
//         "Module 3",
//         "Module 4",
//         "Final Project",
//       ]);

//   const courseFaqs = (course.faqs && course.faqs.length > 0)
//     ? course.faqs
//     : (faqs[course.name] || [
//         {
//           question: "Who can join this course?",
//           answer:
//             "Students, freshers, and working professionals interested in practical learning can join this course.",
//         },
//         {
//           question: "Do you provide placement assistance?",
//           answer:
//             "Yes, we provide resume guidance, interview preparation, and placement support.",
//         },
//         {
//           question: "Is this course beginner friendly?",
//           answer:
//             "Yes, the course is designed to support beginners as well as learners with some prior knowledge.",
//         },
//       ]);
      
//   const highlights = (course.highlights && course.highlights.length > 0)
//     ? course.highlights
//     : content?.highlights || [];
    
//   const tools = (course.tools && course.tools.length > 0)
//     ? course.tools
//     : content?.tools || [];
    
//   const careerOptions = (course.careerOptions && course.careerOptions.length > 0)
//     ? course.careerOptions
//     : content?.careerOptions || [];
    
//   const whoCanJoin = (course.whoCanJoin && course.whoCanJoin.length > 0)
//     ? course.whoCanJoin
//     : content?.whoCanJoin || [];

//   return (
//     <>
//       <Navigation />

//       <main className="bg-white">
//         <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 py-14 text-white md:py-20">
//           <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
//           <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

//           <div className="container mx-auto px-4">
//             <div className="grid items-center gap-10 lg:grid-cols-2">
//               <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="relative z-10"
//               >
//                 <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-100 backdrop-blur-md">
//                   <Sparkles size={14} />
//                   Lone Star Academy
//                 </span>

//                 <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
//                   {course.name}
//                 </h1>

//                 <p className="mb-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
//                   {content?.about || course.description}
//                 </p>

//                 <div className="mb-8 flex flex-wrap gap-4">
//                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
//                     <div className="flex items-center gap-2">
//                       <Clock size={18} className="text-cyan-300" />
//                       <span className="text-sm">{course.duration}</span>
//                     </div>
//                   </div>

//                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
//                     <div className="flex items-center gap-2">
//                       <IndianRupee size={18} className="text-cyan-300" />
//                       <span className="text-sm">{course.price}</span>
//                     </div>
//                   </div>

//                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
//                     <div className="flex items-center gap-2">
//                       <Users size={18} className="text-cyan-300" />
//                       <span className="text-sm">500+ Students</span>
//                     </div>
//                   </div>

//                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
//                     <div className="flex items-center gap-2">
//                       <Star
//                         size={18}
//                         className="fill-yellow-400 text-yellow-400"
//                       />
//                       <span className="text-sm">4.9 Rating</span>
//                     </div>
//                   </div>
//                 </div>

//                 <a
//                   href="tel:9711709644"
//                   className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
//                 >
//                   <Phone size={18} />
//                   Call Now
//                 </a>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.94 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.1 }}
//                 className="relative z-10"
//               >
//                 <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
//                   <img
//                     src={heroImage}
//                     alt={course.name}
//                     className="h-[260px] w-full rounded-[22px] object-cover sm:h-[360px] lg:h-[460px]"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Mobile Fixed Bottom Action Bar */}
//         <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden">
//           <div className="flex items-center gap-3 p-3">
//             {/* Call Button */}
//             <a
//               href="tel:9711709644"
//               className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white transition active:scale-95 hover:bg-green-700"
//             >
//               <Phone size={18} />
//               Call Now
//             </a>

//             {/* Enquiry Button */}
//             <button
//               onClick={() => setShowMobileForm(true)}
//               className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 font-semibold text-white transition active:scale-95 hover:bg-orange-700"
//             >
//               <MessageCircle size={18} />
//               Enquiry
//             </button>
//           </div>
//         </div>

//         {/* Mobile Enquiry Form Modal */}
//         {showMobileForm && (
//           <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 md:hidden">
//             <motion.div
//               initial={{ opacity: 0, y: 100 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 100 }}
//               className="w-full max-w-md rounded-t-3xl bg-white shadow-2xl"
//             >
//               <div className="flex items-center justify-between border-b border-slate-200 p-5">
//                 <div>
//                   <h3 className="text-xl font-bold text-slate-900">Course Enquiry</h3>
//                   <p className="text-sm text-slate-500">Fill details to get more info</p>
//                 </div>
//                 <button
//                   onClick={() => setShowMobileForm(false)}
//                   className="rounded-full p-2 transition hover:bg-slate-100"
//                 >
//                   <X size={24} className="text-slate-500" />
//                 </button>
//               </div>

//               <form onSubmit={handleSubmit} className="p-5 space-y-4">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-slate-700">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter your full name"
//                     className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-slate-700">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Enter your phone number"
//                     className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
//                     required
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:bg-orange-700"
//                 >
//                   Submit Enquiry <ArrowRight size={18} />
//                 </button>

//                 <div className="flex items-center gap-3">
//                   <div className="h-px flex-1 bg-slate-200"></div>
//                   <span className="text-xs font-medium text-slate-400">OR</span>
//                   <div className="h-px flex-1 bg-slate-200"></div>
//                 </div>

//                 <div className="flex gap-3">
//                   <a
//                     href="tel:9711709644"
//                     className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
//                   >
//                     <Phone size={16} />
//                     Call Now
//                   </a>

//                   <a
//                     href="https://wa.me/919711709644"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
//                   >
//                     WhatsApp
//                   </a>
//                 </div>
//               </form>
//             </motion.div>
//           </div>
//         )}

//         <section className="py-12 md:py-16 pb-20 md:pb-16">
//           <div className="container mx-auto px-4">
//             <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
//               <div className="min-w-0 space-y-8">
//                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                   <div className="mb-5 flex items-center gap-3">
//                     <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
//                       <GraduationCap size={22} />
//                     </div>
//                     <h2 className="text-2xl font-bold text-slate-900">
//                       {content?.aboutTitle || "About This Course"}
//                     </h2>
//                   </div>

//                   <p className="leading-8 text-slate-600">
//                     {content?.about || course.description}
//                   </p>
//                 </div>

//                 {content?.sections?.map((section, index) => (
//                   <motion.div
//                     key={section.title}
//                     initial={{ opacity: 0, y: 18 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.05 }}
//                     className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
//                   >
//                     <h2 className="mb-4 text-2xl font-bold text-slate-900">
//                       {section.title}
//                     </h2>

//                     <p className="leading-8 text-slate-600">
//                       {section.content}
//                     </p>

//                     {section.points && (
//                       <div className="mt-6 grid gap-4 sm:grid-cols-2">
//                         {section.points.map((point) => (
//                           <div
//                             key={point}
//                             className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
//                           >
//                             <CheckCircle
//                               size={20}
//                               className="mt-0.5 shrink-0 text-green-500"
//                             />
//                             <span className="font-medium text-slate-700">
//                               {point}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </motion.div>
//                 ))}

//                 {content && (
//                   <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                     <h2 className="mb-6 text-2xl font-bold text-slate-900">
//                       Course Highlights
//                     </h2>

//                     <div className="grid gap-4 sm:grid-cols-2">
//                       {content.highlights.map((item, index) => (
//                         <motion.div
//                           key={item}
//                           initial={{ opacity: 0, y: 16 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: index * 0.05 }}
//                           className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-4"
//                         >
//                           <CheckCircle
//                             size={20}
//                             className="mt-0.5 shrink-0 text-blue-600"
//                           />
//                           <span className="font-medium text-slate-700">
//                             {item}
//                           </span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
//                     What You Will Get
//                   </h2>

//                   <div className="grid gap-4 sm:grid-cols-2">
//                     {benefits.map((item, index) => (
//                       <motion.div
//                         key={item}
//                         initial={{ opacity: 0, y: 16 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.05 }}
//                         className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
//                       >
//                         <CheckCircle
//                           size={20}
//                           className="mt-0.5 shrink-0 text-green-500"
//                         />
//                         <span className="font-medium text-slate-700">
//                           {item}
//                         </span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
//                     Course Curriculum
//                   </h2>

//                   <div className="space-y-4">
//                     {syllabus.map((module, index) => (
//                       <motion.div
//                         key={module}
//                         initial={{ opacity: 0, x: -16 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.05 }}
//                         className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
//                       >
//                         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
//                           {index + 1}
//                         </div>
//                         <div>
//                           <h3 className="font-semibold text-slate-800">
//                             {module}
//                           </h3>
//                           <p className="text-sm text-slate-500">
//                             Practical concepts and implementation-based learning.
//                           </p>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>

//                 {content && (
//                   <div className="grid gap-6 md:grid-cols-2">
//                     <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                       <h2 className="mb-5 text-2xl font-bold text-slate-900">
//                         Tools You Will Learn
//                       </h2>

//                       <div className="flex flex-wrap gap-3">
//                         {content.tools.map((tool) => (
//                           <span
//                             key={tool}
//                             className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
//                           >
//                             {tool}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                       <h2 className="mb-5 text-2xl font-bold text-slate-900">
//                         Career Options
//                       </h2>

//                       <div className="space-y-3">
//                         {content.careerOptions.map((item) => (
//                           <div
//                             key={item}
//                             className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3"
//                           >
//                             <Briefcase
//                               size={18}
//                               className="shrink-0 text-blue-600"
//                             />
//                             <span className="font-medium text-slate-700">
//                               {item}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {content && (
//                   <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                     <h2 className="mb-6 text-2xl font-bold text-slate-900">
//                       Who Can Join This Course?
//                     </h2>

//                     <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//                       {content.whoCanJoin.map((item, index) => (
//                         <motion.div
//                           key={item}
//                           initial={{ opacity: 0, y: 16 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: index * 0.05 }}
//                           className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5"
//                         >
//                           <Users className="mb-3 text-blue-600" size={22} />
//                           <h3 className="font-semibold text-slate-800">
//                             {item}
//                           </h3>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
//                     Why Choose Lone Star Academy
//                   </h2>

//                   <div className="grid gap-4 md:grid-cols-3">
//                     {whyChoose.map((item, index) => {
//                       const Icon = item.icon;
//                       return (
//                         <motion.div
//                           key={item.title}
//                           initial={{ opacity: 0, y: 16 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: index * 0.06 }}
//                           className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
//                         >
//                           <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-600">
//                             <Icon size={22} />
//                           </div>
//                           <h3 className="mb-2 text-lg font-semibold text-slate-900">
//                             {item.title}
//                           </h3>
//                           <p className="text-sm leading-7 text-slate-600">
//                             {item.desc}
//                           </p>
//                         </motion.div>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
//                     Frequently Asked Questions
//                   </h2>

//                   <div className="space-y-4">
//                     {courseFaqs.map((faq, index) => (
//                       <div
//                         key={index}
//                         className="overflow-hidden rounded-2xl border border-slate-200"
//                       >
//                         <button
//                           type="button"
//                           onClick={() =>
//                             setOpenFaq(openFaq === index ? null : index)
//                           }
//                           className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left transition hover:bg-slate-50"
//                         >
//                           <span className="font-semibold text-slate-800">
//                             {faq.question}
//                           </span>
//                           <ChevronDown
//                             size={20}
//                             className={`shrink-0 text-slate-500 transition-transform ${
//                               openFaq === index ? "rotate-180" : ""
//                             }`}
//                           />
//                         </button>

//                         {openFaq === index && (
//                           <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
//                             <p className="leading-7 text-slate-600">
//                               {faq.answer}
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 p-8 text-white shadow-xl">
//                   <h2 className="text-2xl font-bold md:text-3xl">
//                     Start Your Learning Journey Today
//                   </h2>
//                   <p className="mt-3 max-w-2xl text-slate-100">
//                     Join {course.name} at Lone Star Academy and learn with expert
//                     support, live classes, and practical projects.
//                   </p>

//                   <div className="mt-6 flex flex-col gap-4 sm:flex-row">
//                     <a
//                       href="tel:9711709644"
//                       className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
//                     >
//                       <Phone size={18} />
//                       Talk to Counselor
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Desktop Enquiry Form - Hidden on mobile */}
//               <aside className="hidden lg:block min-w-0">
//                 <div className="lg:sticky lg:top-24">
//                   <div
//                     id="enquiry-form"
//                     className="rounded-[28px] border border-orange-100 bg-gradient-to-r from-blue-900 to-blue-800 p-6 shadow-2xl md:p-7"
//                   >
//                     <div className="mb-6">
//                       <span className="inline-block rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
//                         Enquiry Form
//                       </span>

//                       <h3 className="mt-3 text-2xl font-bold text-white">
//                         Course Enquiry
//                       </h3>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       <div>
//                         <label className="mb-2 block text-sm font-medium text-white">
//                           Full Name
//                         </label>
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           placeholder="Enter your full name"
//                           className="w-full rounded-2xl border border-white bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                           required
//                         />
//                       </div>

//                       <div>
//                         <label className="mb-2 block text-sm font-medium text-white">
//                           Phone Number
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="Enter your phone number"
//                           className="w-full rounded-2xl border border-white bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
//                           required
//                         />
//                       </div>

//                       <button
//                         type="submit"
//                         className="flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:scale-[1.02]"
//                       >
//                         Submit Enquiry <ArrowRight size={18} />
//                       </button>

//                       <div className="flex items-center gap-3 py-2">
//                         <div className="h-px flex-1 bg-slate-200"></div>
//                         <span className="text-xs font-medium text-slate-400">
//                           OR
//                         </span>
//                         <div className="h-px flex-1 bg-slate-200"></div>
//                       </div>
                        
//                       <div className="flex gap-3">
//                         <a
//                           href="tel:9711709644"
//                           className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
//                         >
//                           <Phone size={16} />
//                           Call
//                         </a>
                        
//                         <a
//                           href="https://wa.me/919711709644"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-green-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
//                         >
//                           WhatsApp
//                         </a>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </aside>
//             </div>
//           </div>
//         </section>

//         <Footer />
//       </main>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { Navigate } from "react-router-dom";
import {
  BookOpen,
  Clock,
  IndianRupee,
  CheckCircle,
  Star,
  Users,
  Award,
  Briefcase,
  Phone,
  ArrowRight,
  Sparkles,
  GraduationCap,
  ChevronDown,
  Info,
  X,
  MessageCircle,
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import axios from "axios"
import { BASE_URL } from "../../../utils/baseUrl";
import NotFound from "./NotFound";
import { Helmet } from "react-helmet-async";

const API = BASE_URL;

interface Course {
  _id: string;
  id?: string;
  slug?: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  category: string;
  image: string | null;
  syllabus?: string[];
  highlights?: string[];
  tools?: string[];
  whoCanJoin?: string[];
  careerOptions?: string[];
  faqs?: { question: string; answer: string }[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}

type CourseSection = {
  title: string;
  content: string;
  points?: string[];
};

type CourseExtraContent = {
  aboutTitle: string;
  about: string;
  sections: CourseSection[];
  highlights: string[];
  tools: string[];
  whoCanJoin: string[];
  careerOptions: string[];
};

const courseContent: Record<string, CourseExtraContent> = {
  "Business Analytics": {
    aboutTitle:
      "Business Analytics Online Course & Business Analyst Course in Delhi",
    about:
      "In this era of big data, choosing the right business analytics online course or business analyst course in Delhi can be a game changer for your career. At Lone Star Academy, we provide a practical, industry-relevant learning path for beginners, working professionals, and fresh graduates who want to build a strong career in analytics and decision making.",
    sections: [
      {
        title: "Why Choose Lone Star Academy for Business Analytics?",
        content:
          "At Lone Star Academy, we focus on making students job-ready through practical training, live projects, real industry case studies, and placement-oriented preparation.",
        points: [
          "Industry-relevant content designed by subject experts",
          "Live projects and real industry case studies",
          "Placement-oriented training with interview preparation",
          "Flexible online and offline classroom learning",
          "Mentorship from working professionals",
        ],
      },
      {
        title: "What You Will Learn",
        content:
          "This Business Analytics course gives you strong knowledge of basic and advanced analytics concepts with real business applications.",
        points: [
          "Introduction to Business Analytics",
          "Data Visualization with Excel, Power BI and Tableau",
          "SQL for Data Analysis",
          "Python for Data Analytics",
          "Statistical Analysis and Predictive Modeling",
          "Business Intelligence and Reporting",
        ],
      },
      {
        title: "Practice-Based Learning Model",
        content:
          "Our course focuses on practical learning instead of only theory. You will work on real datasets, case studies, live assignments, and a capstone project to build your portfolio.",
      },
      {
        title: "Job Support and Career Assistance",
        content:
          "Our Business Analyst training in Delhi includes resume building, mock interviews, soft skills training, job referrals, and placement assistance.",
      },
    ],
    highlights: [
      "Practical business analytics training",
      "Live projects and case studies",
      "Excel, Power BI, Tableau, SQL and Python",
      "Online and offline flexible batches",
      "Interview preparation",
      "Placement assistance",
    ],
    tools: ["Advanced Excel", "Power BI", "Tableau", "SQL", "Python"],
    whoCanJoin: [
      "Fresh graduates",
      "Working professionals",
      "Business owners",
      "IT professionals",
      "Beginners with no coding background",
    ],
    careerOptions: [
      "Business Analyst",
      "Data Analyst",
      "Reporting Analyst",
      "BI Developer",
      "Product Analyst",
    ],
  },

  "Data Analytics": {
    aboutTitle: "Data Analytics Courses Online & Data Analytics Courses in Delhi",
    about:
      "With the growing demand for data-driven decisions, Data Analytics is one of the best career choices for students, working professionals, and career switchers. Lone Star Academy provides practical training that helps beginners become confident data analysts.",
    sections: [
      {
        title: "Why Enroll in Lone Star Academy Data Analytics Course?",
        content:
          "Lone Star Academy stands out because of its student-first approach, expert trainers, practical learning style, and placement support.",
        points: [
          "Industry-led and expert-designed curriculum",
          "Hands-on projects and case studies",
          "Flexible online and offline classes",
          "Personalized mentorship",
          "Placement support and career counselling",
        ],
      },
      {
        title: "Core Modules Covered",
        content:
          "Our Data Analytics course content is designed for beginners and intermediate learners with practical tools and real-world analytics training.",
        points: [
          "What is Data Analytics?",
          "Excel for Data Analysis",
          "Data Handling with SQL",
          "Python for Data Analytics",
          "Data Visualization with Power BI and Tableau",
          "Statistics and Data Analysis",
          "Real-world Case Studies",
          "Capstone Projects",
        ],
      },
      {
        title: "Certification and Practical Exposure",
        content:
          "After completing the course, students receive Lone Star Academy certification. The course includes real company case studies, data cleaning, visualization exercises, and a portfolio-building capstone project.",
      },
      {
        title: "Placement Assistance",
        content:
          "We provide resume building sessions, mock interviews, job referrals, and career counselling to help students become job-ready.",
      },
    ],
    highlights: [
      "Beginner-friendly data analytics training",
      "Excel, SQL, Python, Power BI and Tableau",
      "Hands-on projects",
      "Capstone project",
      "Certification support",
      "Placement assistance",
    ],
    tools: ["Microsoft Excel", "SQL", "Python", "Power BI", "Tableau"],
    whoCanJoin: [
      "Recent graduates",
      "Working professionals",
      "Business owners",
      "IT specialists",
      "Data analyst aspirants",
    ],
    careerOptions: [
      "Data Analyst",
      "Business Analyst",
      "Reporting Analyst",
      "MIS Analyst",
      "Entry-Level Data Scientist",
    ],
  },

  "Data Science": {
    aboutTitle: "Data Science Course in Delhi with Placement",
    about:
      "If you are looking for a Data Science course online with placement or a Data Science course in Delhi, Lone Star Academy offers a future-focused program with industry skills, hands-on learning, live projects, and career support.",
    sections: [
      {
        title: "Why Take Data Science with Lone Star Academy?",
        content:
          "Our Data Science course focuses on practical learning, real projects, industry tools, and placement assistance instead of only theoretical concepts.",
        points: [
          "Industry-relevant curriculum on AI, machine learning and analytics",
          "Experienced mentors from top tech companies",
          "Live projects and case studies",
          "Placement services and career support",
          "Offline and online learning modes",
        ],
      },
      {
        title: "End-to-End Data Science Curriculum",
        content:
          "The curriculum is designed to help learners build strong foundations and move towards advanced machine learning and AI concepts.",
        points: [
          "Python programming",
          "Statistics and probability",
          "Data manipulation and visualization",
          "Supervised and unsupervised learning",
          "Model building and evaluation",
          "Deep learning basics",
          "Natural Language Processing",
          "AI-enabled automation",
        ],
      },
      {
        title: "Flexible Learning Options",
        content:
          "Students can choose live online classes with recordings or classroom training in Delhi NCR with mentorship and networking opportunities.",
      },
      {
        title: "Career Guidance",
        content:
          "The program includes resume building, mock interviews, portfolio development, and interview opportunity support.",
      },
    ],
    highlights: [
      "AI and machine learning curriculum",
      "Live projects and real datasets",
      "Online and offline learning",
      "Portfolio building",
      "Mock interviews",
      "Placement assistance",
    ],
    tools: ["Python", "SQL", "Excel", "Power BI", "Tableau", "Machine Learning"],
    whoCanJoin: [
      "Students",
      "Recent graduates",
      "IT professionals",
      "Non-tech career switchers",
      "Business owners",
    ],
    careerOptions: [
      "Data Analyst",
      "Data Scientist",
      "Machine Learning Engineer",
      "Business Analyst",
      "AI Specialist",
    ],
  },

  "Digital Marketing": {
    aboutTitle: "Best Online Digital Marketing Course & Digital Marketing Course in Delhi",
    about:
      "Digital marketing is one of the fastest-growing career fields. At Lone Star Academy, our Digital Marketing course combines real-world skills, industry tools, live projects, certifications, and placement assistance.",
    sections: [
      {
        title: "Why Choose Lone Star Academy for Digital Marketing?",
        content:
          "We train, mentor, and prepare students for real digital marketing work through practical projects and industry-standard tools.",
        points: [
          "Industry-relevant curriculum based on current trends",
          "Live project training",
          "Expert mentors from top agencies",
          "Certifications to enhance your credibility",
          "Placement support",
        ],
      },
      {
        title: "Course Highlights",
        content:
          "Our Digital Marketing course covers both basic and advanced digital marketing skills.",
        points: [
          "SEO",
          "Google Ads and PPC Campaigns",
          "Social Media Marketing",
          "Content Marketing",
          "Email Marketing Automation",
          "Affiliate Marketing",
          "Web Analytics and Tracking",
          "AI Tools in Digital Marketing",
        ],
      },
      {
        title: "Practical Campaign Training",
        content:
          "Students work on live business websites, ad campaign creation, SEO audits, social media strategy, and reporting concepts.",
      },
      {
        title: "Placement Assistance",
        content:
          "Our placement assistance includes resume building, interview coaching, expert mock interviews, hiring partner access, and internship opportunities.",
      },
    ],
    highlights: [
      "SEO and Google Ads training",
      "Social media marketing",
      "Live campaign projects",
      "AI tools in digital marketing",
      "Internship support",
      "Placement assistance",
    ],
    tools: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Google Analytics",
      "Email Marketing",
      "AI Tools",
    ],
    whoCanJoin: [
      "Students",
      "Job seekers",
      "Entrepreneurs",
      "Freelancers",
      "Working professionals",
    ],
    careerOptions: [
      "SEO Specialist",
      "Social Media Manager",
      "PPC Expert",
      "Content Strategist",
      "Digital Marketing Manager",
    ],
  },

  "Cloud Computing": {
    aboutTitle: "Cloud Computing Courses in Delhi & Online",
    about:
      "If you are looking for practical Cloud Computing training, online cloud courses, real-life environment-based learning, and job-oriented cloud courses in Delhi, Lone Star Academy is the perfect choice for you.",
    sections: [
      {
        title: "Why Select Lone Star Academy for Cloud Computing Training?",
        content:
          "A good cloud training institute can shape your career path. Lone Star Academy provides quality education, practical lab sessions, expert guidance, and placement support.",
        points: [
          "Industry-relevant AWS, Azure and Google Cloud based curriculum",
          "Real-world experience through practical lab sessions",
          "Trained professionals with industry exposure",
          "In-house placement support and interview preparation",
          "Flexible online and classroom learning options",
        ],
      },
      {
        title: "What You Will Learn",
        content:
          "Our Cloud Computing course covers everything from cloud basics to advanced deployment and security concepts.",
        points: [
          "Introduction to Cloud Computing and Architecture",
          "Virtualization and basic networking",
          "Cloud Service Models: IaaS, PaaS and SaaS",
          "AWS, Microsoft Azure and Google Cloud Platforms",
          "Security and Compliance in the Cloud",
          "DevOps and Automation Tools",
          "Deployment and Migration Techniques",
        ],
      },
      {
        title: "Cloud Computing Training with Placement",
        content:
          "Our placement assistance includes resume building, portfolio development, mock interviews, HR preparation, job referrals, hiring partner connections, and communication training.",
      },
      {
        title: "Certification Preparation",
        content:
          "The course helps students prepare for AWS, Microsoft Azure, and Google Cloud certifications with practical guidance and career support.",
      },
    ],
    highlights: [
      "AWS, Azure and Google Cloud curriculum",
      "Practical lab sessions",
      "Cloud security and compliance",
      "DevOps and automation tools",
      "Certification preparation",
      "Placement assistance",
    ],
    tools: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "DevOps Tools",
    ],
    whoCanJoin: [
      "Fresh graduates",
      "IT professionals",
      "Career switchers",
      "Business owners",
      "Beginners in cloud technology",
    ],
    careerOptions: [
      "Cloud Engineer",
      "Solutions Architect",
      "DevOps Engineer",
      "Cloud Security Specialist",
      "System Administrator",
    ],
  },
};

const curriculum: Record<string, string[]> = {
  "Business Analytics": [
    "Introduction to Business Analytics",
    "Advanced Excel",
    "Power BI Fundamentals",
    "Tableau Dashboards",
    "SQL for Analytics",
    "Business Reporting",
    "Real-world Case Studies",
  ],
  "Data Analytics": [
    "Python Basics",
    "NumPy & Pandas",
    "SQL & Database Concepts",
    "Data Cleaning",
    "Visualization with Power BI",
    "Statistics for Analytics",
    "Capstone Project",
  ],
  "Data Science": [
    "Python for Data Science",
    "Machine Learning",
    "Deep Learning Basics",
    "NLP Fundamentals",
    "Data Engineering Concepts",
    "Model Deployment",
    "Industry Projects",
  ],
  "Digital Marketing": [
    "SEO Fundamentals",
    "Google Ads",
    "Social Media Marketing",
    "Content Marketing",
    "Email Marketing",
    "Analytics & Reporting",
    "Practical Campaign Projects",
  ],
  "Cloud Computing": [
    "Cloud Fundamentals",
    "AWS Services",
    "Microsoft Azure Basics",
    "Google Cloud Basics",
    "Docker & Kubernetes",
    "Cloud Security",
    "Certification Preparation",
  ],
};

const benefits = [
  "100% Practical Training",
  "Live Projects & Assignments",
  "Interview Preparation",
  "Resume Building Support",
  "Placement Assistance",
  "Recorded Backup Sessions",
  "Expert Trainers",
  "Flexible Learning Structure",
];

const whyChoose = [
  {
    icon: Award,
    title: "Industry-Oriented Learning",
    desc: "Learn with real tools, real scenarios, and job-ready practical modules.",
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    desc: "We help students with resume support, mock interviews, and placement guidance.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    desc: "Get support from experienced trainers with practical domain knowledge.",
  },
];

const pageImages: Record<string, string> = {
  "Business Analytics": "/businessanlytics.jpg",
  "Data Analytics": "/dataanalytics.jpg",
  "Data Science": "/datascience.jpg",
  "Digital Marketing": "/Digitalmarketing.jpg",
  "Cloud Computing": "/cloudcomputing.jpg",
};

const faqs: Record<string, { question: string; answer: string }[]> = {
  "Business Analytics": [
    {
      question: "Who can join the Business Analytics course?",
      answer:
        "Students, working professionals, freshers, and business professionals who want to build reporting, dashboard, and analytics skills can join this course.",
    },
    {
      question: "What tools are covered in Business Analytics?",
      answer:
        "This course covers Excel, Power BI, Tableau, SQL, reporting concepts, and practical business case studies.",
    },
    {
      question: "Do you provide placement assistance for Business Analytics?",
      answer:
        "Yes, we provide resume support, interview preparation, mock interviews, and placement guidance.",
    },
    {
      question: "Is this course suitable for beginners?",
      answer:
        "Yes, the course starts from fundamentals and gradually moves to advanced practical concepts.",
    },
  ],
  "Data Analytics": [
    {
      question: "What will I learn in the Data Analytics course?",
      answer:
        "You will learn Python, Pandas, NumPy, SQL, data cleaning, dashboards, statistics, and project-based analytics skills.",
    },
    {
      question: "Is coding required for Data Analytics?",
      answer:
        "Basic coding helps, but beginners can also join because the training starts from fundamentals.",
    },
    {
      question: "Will I work on practical projects?",
      answer:
        "Yes, the course includes hands-on assignments, case studies, and a capstone project.",
    },
    {
      question: "Can freshers join the Data Analytics course?",
      answer:
        "Yes, freshers can join this course to build job-ready analytics skills.",
    },
  ],
  "Data Science": [
    {
      question: "What topics are included in the Data Science course?",
      answer:
        "The course includes Python, machine learning, deep learning basics, NLP, data engineering concepts, and model deployment.",
    },
    {
      question: "Is Data Science good for career growth?",
      answer:
        "Yes, Data Science is one of the most in-demand fields with strong career opportunities across industries.",
    },
    {
      question: "Do I need prior programming experience?",
      answer:
        "No, beginners can start with this course, but regular practice is important.",
    },
    {
      question: "Will I get project experience in Data Science?",
      answer:
        "Yes, students work on industry-oriented projects to improve practical understanding.",
    },
  ],
  "Digital Marketing": [
    {
      question: "What modules are covered in the Digital Marketing course?",
      answer:
        "This course covers SEO, Google Ads, social media marketing, content marketing, email marketing, and performance analytics.",
    },
    {
      question: "Is Digital Marketing a good option for beginners?",
      answer:
        "Yes, it is a beginner-friendly field and suitable for students, job seekers, and business owners.",
    },
    {
      question: "Will I learn practical campaign execution?",
      answer:
        "Yes, the course includes practical campaign work, ad strategy, and reporting concepts.",
    },
    {
      question: "Do you provide certification support?",
      answer:
        "Yes, we guide students for course completion and help them prepare for relevant certifications.",
    },
  ],
  "Cloud Computing": [
    {
      question: "What will I learn in the Cloud Computing course?",
      answer:
        "You will learn cloud fundamentals, AWS, Azure, Google Cloud basics, Docker, Kubernetes, and cloud security concepts.",
    },
    {
      question: "Is Cloud Computing suitable for beginners?",
      answer:
        "Yes, this course starts with core cloud fundamentals before moving to advanced tools.",
    },
    {
      question: "Does the course include certification preparation?",
      answer:
        "Yes, the course includes support for cloud certification preparation.",
    },
    {
      question: "Will I learn deployment and cloud services practically?",
      answer:
        "Yes, the training includes practical exposure to cloud platforms and deployment-related concepts.",
    },
  ],
};

export default function CourseDetailPage() {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showMobileForm, setShowMobileForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const { slug: routeSlug } = useParams<{ slug: string }>();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setNotFound(false);

        const response = await fetch(`${API}/api/courses/${routeSlug}`);

        // If API returns 404 or any error status
        if (!response.ok) {
          setCourse(null);
          setNotFound(true);
          return;
        }

        const data = await response.json();

        // If API returns invalid or empty data
        if (!data || !data._id || !data.name) {
          setCourse(null);
          setNotFound(true);
          return;
        }

        setCourse(data);

        setFormData((prev) => ({
          ...prev,
          course: data.name || "",
        }));
      } catch (error) {
        console.error("Error fetching course:", error);
        setCourse(null);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (routeSlug) {
      fetchCourse();
    } else {
      setCourse(null);
      setNotFound(true);
      setLoading(false);
    }
  }, [routeSlug]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your enquiry has been submitted successfully.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      course: course?.name || "",
      message: "",
    });
    setShowMobileForm(false);
  };

  // ✅ LOADING STATE
  if (loading) {
    return (
      <>
        <Helmet>
          <title>Loading Course... | Lone Star Academy</title>
          <meta name="description" content="Loading course details..." />
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Navigation />
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
      </>
    );
  }

  // ✅ NOT FOUND STATE
  if (notFound || !course) {
    return (
      <>
        <Helmet>
          <title>Course Not Found | Lone Star Academy</title>
          <meta name="description" content="The course you are looking for does not exist." />
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <NotFound />
      </>
    );
  }

  const content = courseContent[course.name];

  const heroImage = course.image
    ? course.image.startsWith("http")
      ? course.image
      : `${API}${course.image}`
    : pageImages[course.name] || "/images/default-course.jpg";

  const syllabus =
    course.syllabus && course.syllabus.length > 0
      ? course.syllabus
      : curriculum[course.name] || [
          "Module 1",
          "Module 2",
          "Module 3",
          "Module 4",
          "Final Project",
        ];

  const courseFaqs =
    course.faqs && course.faqs.length > 0
      ? course.faqs
      : faqs[course.name] || [
          {
            question: "Who can join this course?",
            answer:
              "Students, freshers, and working professionals interested in practical learning can join this course.",
          },
          {
            question: "Do you provide placement assistance?",
            answer:
              "Yes, we provide resume guidance, interview preparation, and placement support.",
          },
          {
            question: "Is this course beginner friendly?",
            answer:
              "Yes, the course is designed to support beginners as well as learners with some prior knowledge.",
          },
        ];

  const highlights =
    course.highlights && course.highlights.length > 0
      ? course.highlights
      : content?.highlights || [];

  const tools =
    course.tools && course.tools.length > 0 ? course.tools : content?.tools || [];

  const careerOptions =
    course.careerOptions && course.careerOptions.length > 0
      ? course.careerOptions
      : content?.careerOptions || [];

  const whoCanJoin =
    course.whoCanJoin && course.whoCanJoin.length > 0
      ? course.whoCanJoin
      : content?.whoCanJoin || [];

  return (
    <>
      {/* ✅ MAIN PAGE HELMET - WITH ALL SEO TAGS */}
      <Helmet>
        <title>{course?.seo?.title || `${course.name} Course | Lone Star Academy`}</title>
        <meta
          name="description"
          content={
            course?.seo?.description ||
            `Learn ${course.name} from Lone Star Academy. Job-ready training with placement assistance.`
          }
        />
        <meta
          name="keywords"
          content={
            course?.seo?.keywords ||
            `${course.name}, ${course.name} course in Delhi, ${course.name} training`
          }
        />
        <link
          rel="canonical"
          href={`https://www.lonestaracademy.in/courses/${routeSlug}`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={course?.seo?.title || `${course.name} Course | Lone Star Academy`}
        />
        <meta
          property="og:description"
          content={
            course?.seo?.description ||
            `Learn ${course.name} from Lone Star Academy. Job-ready training with placement assistance.`
          }
        />
        <meta
          property="og:url"
          content={`https://www.lonestaracademy.in/courses/${routeSlug}`}
        />
        <meta property="og:image" content={heroImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={course?.seo?.title || `${course.name} Course`}
        />
        <meta
          name="twitter:description"
          content={
            course?.seo?.description ||
            `Learn ${course.name} from Lone Star Academy`
          }
        />
        <meta name="twitter:image" content={heroImage} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Lone Star Academy" />
      </Helmet>

      <Navigation />

      <main className="bg-white">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 py-14 text-white md:py-20">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="container mx-auto px-4">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10"
              >
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-100 backdrop-blur-md">
                  <Sparkles size={14} />
                  Lone Star Academy
                </span>

                <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
                  {course.name}
                </h1>

                <p className="mb-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                  {content?.about || course.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-cyan-300" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <IndianRupee size={18} className="text-cyan-300" />
                      <span className="text-sm">{course.price}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-cyan-300" />
                      <span className="text-sm">500+ Students</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Star
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span className="text-sm">4.9 Rating</span>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:9711709644"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="relative z-10"
              >
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                  <img
                    src={heroImage}
                    alt={course.name}
                    className="h-[260px] w-full rounded-[22px] object-cover sm:h-[360px] lg:h-[460px]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mobile Fixed Bottom Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden">
          <div className="flex items-center gap-3 p-3">
            {/* Call Button */}
            <a
              href="tel:9711709644"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white transition active:scale-95 hover:bg-green-700"
            >
              <Phone size={18} />
              Call Now
            </a>

            {/* Enquiry Button */}
            <button
              onClick={() => setShowMobileForm(true)}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 font-semibold text-white transition active:scale-95 hover:bg-orange-700"
            >
              <MessageCircle size={18} />
              Enquiry
            </button>
          </div>
        </div>

        {/* Mobile Enquiry Form Modal */}
        {showMobileForm && (
          <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="w-full max-w-md rounded-t-3xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-200 p-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Course Enquiry</h3>
                  <p className="text-sm text-slate-500">Fill details to get more info</p>
                </div>
                <button
                  onClick={() => setShowMobileForm(false)}
                  className="rounded-full p-2 transition hover:bg-slate-100"
                >
                  <X size={24} className="text-slate-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:bg-orange-700"
                >
                  Submit Enquiry <ArrowRight size={18} />
                </button>

                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-200"></div>
                  <span className="text-xs font-medium text-slate-400">OR</span>
                  <div className="h-px flex-1 bg-slate-200"></div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="tel:9711709644"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
                  >
                    <Phone size={16} />
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/919711709644"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    WhatsApp
                  </a>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* MAIN CONTENT SECTION */}
        <section className="py-12 md:py-16 pb-20 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
              <div className="min-w-0 space-y-8">
                {/* ABOUT SECTION */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                      <GraduationCap size={22} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {content?.aboutTitle || "About This Course"}
                    </h2>
                  </div>

                  <p className="leading-8 text-slate-600">
                    {content?.about || course.description}
                  </p>
                </div>

                {/* CONTENT SECTIONS */}
                {content?.sections?.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
                  >
                    <h2 className="mb-4 text-2xl font-bold text-slate-900">
                      {section.title}
                    </h2>

                    <p className="leading-8 text-slate-600">
                      {section.content}
                    </p>

                    {section.points && (
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {section.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                          >
                            <CheckCircle
                              size={20}
                              className="mt-0.5 shrink-0 text-green-500"
                            />
                            <span className="font-medium text-slate-700">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* HIGHLIGHTS */}
                {content && (
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                    <h2 className="mb-6 text-2xl font-bold text-slate-900">
                      Course Highlights
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {highlights.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-4"
                        >
                          <CheckCircle
                            size={20}
                            className="mt-0.5 shrink-0 text-blue-600"
                          />
                          <span className="font-medium text-slate-700">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* BENEFITS */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900">
                    What You Will Get
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {benefits.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <CheckCircle
                          size={20}
                          className="mt-0.5 shrink-0 text-green-500"
                        />
                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CURRICULUM */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900">
                    Course Curriculum
                  </h2>

                  <div className="space-y-4">
                    {syllabus.map((module, index) => (
                      <motion.div
                        key={module}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">
                            {module}
                          </h3>
                          <p className="text-sm text-slate-500">
                            Practical concepts and implementation-based learning.
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* TOOLS & CAREER */}
                {content && (
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                      <h2 className="mb-5 text-2xl font-bold text-slate-900">
                        Tools You Will Learn
                      </h2>

                      <div className="flex flex-wrap gap-3">
                        {tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                      <h2 className="mb-5 text-2xl font-bold text-slate-900">
                        Career Options
                      </h2>

                      <div className="space-y-3">
                        {careerOptions.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3"
                          >
                            <Briefcase
                              size={18}
                              className="shrink-0 text-blue-600"
                            />
                            <span className="font-medium text-slate-700">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* WHO CAN JOIN */}
                {content && (
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                    <h2 className="mb-6 text-2xl font-bold text-slate-900">
                      Who Can Join This Course?
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {whoCanJoin.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5"
                        >
                          <Users className="mb-3 text-blue-600" size={22} />
                          <h3 className="font-semibold text-slate-800">
                            {item}
                          </h3>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* WHY CHOOSE */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900">
                    Why Choose Lone Star Academy
                  </h2>

                  <div className="grid gap-4 md:grid-cols-3">
                    {whyChoose.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.06 }}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                        >
                          <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-600">
                            <Icon size={22} />
                          </div>
                          <h3 className="mb-2 text-lg font-semibold text-slate-900">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-7 text-slate-600">
                            {item.desc}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* FAQs */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    {courseFaqs.map((faq, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-2xl border border-slate-200"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaq(openFaq === index ? null : index)
                          }
                          className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left transition hover:bg-slate-50"
                        >
                          <span className="font-semibold text-slate-800">
                            {faq.question}
                          </span>
                          <ChevronDown
                            size={20}
                            className={`shrink-0 text-slate-500 transition-transform ${
                              openFaq === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {openFaq === index && (
                          <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
                            <p className="leading-7 text-slate-600">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 p-8 text-white shadow-xl">
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Start Your Learning Journey Today
                  </h2>
                  <p className="mt-3 max-w-2xl text-slate-100">
                    Join {course.name} at Lone Star Academy and learn with expert
                    support, live classes, and practical projects.
                  </p>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="tel:9711709644"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
                    >
                      <Phone size={18} />
                      Talk to Counselor
                    </a>
                  </div>
                </div>
              </div>

              {/* DESKTOP ENQUIRY FORM */}
              <aside className="hidden lg:block min-w-0">
                <div className="lg:sticky lg:top-24">
                  <div
                    id="enquiry-form"
                    className="rounded-[28px] border border-orange-100 bg-gradient-to-r from-blue-900 to-blue-800 p-6 shadow-2xl md:p-7"
                  >
                    <div className="mb-6">
                      <span className="inline-block rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                        Enquiry Form
                      </span>

                      <h3 className="mt-3 text-2xl font-bold text-white">
                        Course Enquiry
                      </h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full rounded-2xl border border-white bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          required
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-white">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="w-full rounded-2xl border border-white bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:scale-[1.02]"
                      >
                        Submit Enquiry <ArrowRight size={18} />
                      </button>

                      <div className="flex items-center gap-3 py-2">
                        <div className="h-px flex-1 bg-slate-200"></div>
                        <span className="text-xs font-medium text-slate-400">
                          OR
                        </span>
                        <div className="h-px flex-1 bg-slate-200"></div>
                      </div>

                      <div className="flex gap-3">
                        <a
                          href="tel:9711709644"
                          className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
                        >
                          <Phone size={16} />
                          Call
                        </a>

                        <a
                          href="https://wa.me/919711709644"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-green-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}