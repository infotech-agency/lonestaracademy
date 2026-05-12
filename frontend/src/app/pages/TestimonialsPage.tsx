import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Aman Gupta", course: "Data Science", company: "Amazon", rating: 5, text: "Lone Star Academy transformed my career. Within 3 months of completing the Data Science course, I landed a job at Amazon with a 3x salary hike.", avatar: "AG" },
  { name: "Sneha Patel", course: "Digital Marketing", company: "Flipkart", rating: 5, text: "The digital marketing course was comprehensive and practical. The trainers have real industry experience and the placement support was excellent.", avatar: "SP" },
  { name: "Rahul Mehra", course: "Business Analytics", company: "Deloitte", rating: 5, text: "Best analytics institute in Delhi. The Power BI and Tableau training was world-class. Got placed in Deloitte thanks to their interview prep sessions.", avatar: "RM" },
  { name: "Priya Sharma", course: "Cloud Computing", company: "TCS", rating: 5, text: "I had zero cloud knowledge before joining. After 80 days of training, I passed my AWS Solutions Architect exam and got a great job in TCS.", avatar: "PS" },
  { name: "Vikas Kumar", course: "Data Analytics", company: "Infosys", rating: 4, text: "Quality training with practical projects. The SQL and Python modules were exceptional. Highly recommend to anyone looking to enter data analytics.", avatar: "VK" },
  { name: "Ankita Singh", course: "Data Science", company: "Wipro", rating: 5, text: "The machine learning project experience helped me crack interviews at 3 top companies. I chose Wipro and I'm loving every day of my new career.", avatar: "AS" },
  { name: "Mohit Verma", course: "Digital Marketing", company: "Publicis", rating: 5, text: "From a fresher to a Digital Marketing Executive in 2 months. The Google certification training and agency internship were game changers.", avatar: "MV" },
  { name: "Ritika Jain", course: "Business Analytics", company: "EY", rating: 5, text: "Amazing trainers and curriculum. Lone Star Academy's placement team worked tirelessly to get me interviews. Now working at EY as a Business Analyst.", avatar: "RJ" },
];

export default function TestimonialsPage() {
  return (
    <>
      <title>Student Testimonials | Lone Star Academy Delhi</title>
      <meta name="description" content="Read success stories from our alumni. 1,00,000+ students trained with placement at Amazon, TCS, Wipro, Deloitte and more." />
      <Navigation />

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">
            Student <span className="text-orange-400">Success Stories</span>
          </motion.h1>
          <p className="text-blue-100 text-lg">Real experiences from our 1,00,000+ alumni</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{t.name}</h3>
                    <p className="text-sm text-blue-600">{t.course}</p>
                    <p className="text-sm text-gray-500">Now at <strong>{t.company}</strong></p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className={j < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} />)}
                </div>
                <Quote size={20} className="text-blue-200 mb-2" />
                <p className="text-gray-600 text-sm leading-relaxed italic">"{t.text}"</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-blue-100 mb-8 text-lg">Join 1,00,000+ students who transformed their careers with Lone Star Academy</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/courses" className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition">Explore Courses</a>
              <a href="/contact" className="px-8 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition">Talk to Counselor</a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
