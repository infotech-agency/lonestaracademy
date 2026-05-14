import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  // Image path from public folder
  const imageUrl = "/404.jpg"; 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-black to-gray-900 px-6 relative overflow-hidden">
      
      {/* GLOWING BACKGROUND DECORATION */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-600 opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500 opacity-10 blur-[100px] rounded-full"></div>
      </div>

      <div className="text-center w-full max-w-4xl z-10">
        
        {/* MAIN BIG IMAGE */}
        <div className="flex justify-center mb-8">
          <img
            src={imageUrl}
            alt="Page Not Found"
            className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl object-contain drop-shadow-[0_20px_50px_rgba(120,119,198,0.3)] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* SUBTLE DESCRIPTION */}
        <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-md mx-auto">
          Oops! The page you're looking for has drifted into deep space.
        </p>

        {/* ACTION BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={() => navigate(-1)}
            className="group relative px-8 py-3 rounded-full bg-transparent border border-white/20 text-white font-medium overflow-hidden transition-all hover:border-white/80"
          >
            <span className="relative z-10 flex items-center gap-2">
               ← Go Back
            </span>
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-10 py-3 rounded-full bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 transition-all"
          >
            Home
          </button>
        </div>
      </div>

      {/* FOOTER-STYLE TEXT (Optional) */}
      <div className="absolute bottom-8 text-gray-600 text-xs uppercase tracking-[0.2em]">
        Error Code: NotFound
      </div>
    </div>
  );
}