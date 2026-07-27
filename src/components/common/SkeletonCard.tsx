import { motion } from "framer-motion";

const SkeletonCard = () => {
  return (
    <div className="mx-auto mt-12 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col items-center">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
          }}
          className="h-40 w-40 rounded-full bg-slate-700"
        />

        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
          }}
          className="mt-8 h-16 w-44 rounded-xl bg-slate-700"
        />

        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
          }}
          className="mt-6 h-10 w-64 rounded-xl bg-slate-700"
        />

        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
          }}
          className="mt-3 h-6 w-28 rounded-xl bg-slate-700"
        />

        <div className="mt-12 grid w-full gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
              }}
              className="h-36 rounded-2xl bg-slate-700"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;