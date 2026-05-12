import { motion } from "motion/react";
import { Star } from "lucide-react";

export function TrustSection() {
  const ratings = [
    {
      name: "Google",
      rating: "4.9",
      text: "Verified student reviews",
      bg: "bg-orange-600",
      brand: (
        <span className="text-4xl font-bold tracking-tight">
          <span className="text-blue-600">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-600">g</span>
          <span className="text-green-600">l</span>
          <span className="text-red-500">e</span>
        </span>
      ),
    },
    {
      name: "Justdial",
      rating: "4.9",
      text: "Trusted local reviews",
      bg: "bg-gradient-to-br from-blue-900 to-blue-700",
      brand: (
        <span className="text-4xl font-bold tracking-tight text-blue-700">
          Justdial
        </span>
      ),
    },
    {
      name: "Sulekha",
      rating: "4.5",
      text: "Public platform rating",
      bg: "bg-orange-600",
      brand: (
        <span className="text-4xl font-bold tracking-tight text-orange-500">
          Sulekha
        </span>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50 py-16">
      <div className="pointer-events-none absolute -top-20 left-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            Trusted Reviews from{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Our Students
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            See what learners say about our training and placement support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ratings.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className={`rounded-3xl border border-white/20 p-7 text-center shadow-2xl transition-all duration-300 ${item.bg}`}
            >
              <p className="mb-2 text-5xl font-extrabold text-white">
                {item.rating}
              </p>

              <p className="mb-5 text-lg font-medium text-white/80">
                Average rating on
              </p>

              <div className="mx-auto flex w-full max-w-xs flex-col items-center rounded-2xl border border-white/70 bg-white px-6 py-6 shadow-sm">
                {item.brand}

                <div className="mt-3 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={
                        i <= Math.round(Number(item.rating))
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                      size={18}
                    />
                  ))}
                </div>

                <p className="mt-2 text-sm font-medium text-slate-600">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}