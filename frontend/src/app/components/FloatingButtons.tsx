import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function FloatingButtons() {
  return (
    <>
      {/* Floating Action Buttons - Desktop Only */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-50 flex-col gap-4">
        
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919711709644"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
          className="group relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all"
        >
          <MessageCircle className="text-white relative z-10" size={30} />

          {/* Tooltip */}
          <div className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
          </div>

          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40"></span>
        </motion.a>

        {/* Phone Button */}
        <motion.a
          href="tel:9711709644"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.6 }}
          className="group relative w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full shadow-2xl flex items-center justify-center transition-all"
        >
          <Phone className="text-white relative z-10" size={28} />

          {/* Tooltip */}
          <div className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call: 9711709644
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
          </div>

          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-40"></span>
        </motion.a>
      </div>

      {/* Mobile Bottom Bar ONLY */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-2xl z-40 border-t border-blue-700">
        <div className="flex items-center justify-between px-4 py-3">
          
          {/* Call Button */}
          <a
            href="tel:9711709644"
            className="flex items-center gap-2 hover:text-blue-200 transition-colors"
          >
            <Phone size={20} />
            <span className="font-semibold">9711709644</span>
          </a>

          {/* Callback Button */}
          <Link to="/contact">
          <button className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-semibold shadow-md">
            Request a Call Back
          </button>
          </Link>
        </div>
      </div>

      {/* Spacer for mobile bottom bar */}
      <div className="lg:hidden h-16"></div>
    </>
  );
}