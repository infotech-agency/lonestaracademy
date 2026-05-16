import { motion } from "motion/react";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

type VideoItem = {
  title: string;
  description: string;
  src: string;
};

export function SuccessStories() {
  const videos: VideoItem[] = [
    {
      title: "Business Analytics Course Journey",
      description:
        "Watch how our student built strong business analysis, reporting, and decision-making skills through practical training and secured a great career opportunity after completing the course.",
      src: "/1.mp4",
    },
    {
      title: "Data Analytics Course Journey",
      description:
        "See how our student learned cloud fundamentals, AWS services, deployment concepts, and real-time project handling to start a promising career in cloud computing.",
      src: "/2.mp4",
    },
    {
      title: "Data Science Course Journey",
      description:
        "This success story shows how dedicated training, coding practice, and interview preparation helped our student restart a career journey and get placed as a Java Developer.",
      src: "/44.mp4",
    },
    {
      title: "Digital Marketing",
      description:
        "Discover how our student gained hands-on knowledge in Excel, SQL, Power BI, and analytics tools, and successfully moved into a Data Analyst role with confidence.",
      src: "/4.mp4",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        ><h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
  Our Students <span className="text-blue-600">Learning Journey</span>
</h1>

          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
          We provide practical, industry-ready training with expert guidance and live projects.  
Students build strong careers across Analytics, Data Science, Marketing, and Cloud Computing.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  video,
  delay,
}: {
  video: VideoItem;
  delay: number;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handleToggleVideo = async () => {
    if (!videoRef.current) return;

    try {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        await videoRef.current.play();
        setPlaying(true);
      }
    } catch (error) {
      console.error("Video play error:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={video.src}
          className="h-[240px] w-full object-cover sm:h-[260px] lg:h-[240px]"
          preload="metadata"
          playsInline
          controls
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {!playing && (
          <button
            type="button"
            onClick={handleToggleVideo}
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600/90 text-white shadow-lg backdrop-blur-sm transition duration-300 hover:scale-110 hover:bg-red-700"
            aria-label="Play video"
          >
            <Play className="ml-1 fill-white text-white" size={22} />
          </button>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-sm font-semibold leading-6 text-gray-900 sm:text-base">
          {video.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          {video.description}
        </p>
      </div>
    </motion.div>
  );
}