import { motion } from "motion/react";
import { Play, Sparkles } from "lucide-react";
import { useState } from "react";

type VideoItem = {
  title: string;
  subtitle: string;
  youtubeId: string;
  badge?: string;
};

export function IndustryExperts() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videos: VideoItem[] = [
    {
      title: "Company Culture & Team Activities",
      subtitle:
        "Take a look at our work environment, collaboration, and team spirit.",
      youtubeId: "DAPJvHwTOz8",
      badge: "Inside Our Company",
    },
    {
      title: "Training Sessions & Live Projects",
      subtitle:
        "See how we train, mentor, and execute real-world projects.",
      youtubeId: "Lul9QiXEN7Y",
      badge: "Live Learning",
    },
  ];

  const handlePlay = (index: number) => {
    setActiveVideo(index);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/40 py-16 md:py-24">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
        

          <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Explore Our Company{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-blue-600">
              On YouTube
            </span>
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
            Watch our latest company videos to discover team culture, training
            sessions, expert guidance, and real project execution directly from
            our YouTube channel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)]">
                <div className="relative">
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    {activeVideo === index ? (
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => handlePlay(index)}
                        className="relative block h-full w-full text-left"
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                          alt={video.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        {video.badge && (
                          <div className="absolute left-4 top-4 z-20 rounded-full bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow-lg md:text-sm">
                            {video.badge}
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                          <div className="flex h-full items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition duration-300 group-hover:scale-110 md:h-20 md:w-20">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 shadow-lg md:h-14 md:w-14">
                                <Play
                                  className="ml-1 fill-white text-white"
                                  size={22}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white md:p-6">
                          <h4 className="text-lg font-bold md:text-2xl">
                            {video.title}
                          </h4>
                          <p className="mt-1 text-sm text-gray-200 md:text-base">
                            {video.subtitle}
                          </p>
                        </div>
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between px-5 py-4 md:px-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 md:text-base">
                      {video.title}
                    </p>
                    <p className="text-xs text-gray-500 md:text-sm">
                      Click to play YouTube video
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handlePlay(index)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600 transition hover:bg-red-600 hover:text-white"
                  >
                    <Play size={18} className="ml-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}