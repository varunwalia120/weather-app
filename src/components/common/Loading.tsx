import { motion } from "framer-motion";
import { FaCloudSun } from "react-icons/fa";

const Loading = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto mt-6 flex w-full max-w-4xl flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-8 py-10 text-center shadow-xl backdrop-blur-xl"
    >
      <motion.div
        animate={{
          rotate: [0, 12, -12, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-500/10"
      >
        <FaCloudSun
          size={42}
          className="text-sky-400"
        />
      </motion.div>

      <h2 className="mt-5 text-2xl font-bold text-white">
        Fetching Weather
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Please wait while we retrieve the latest weather data...
      </p>

      <motion.div
        className="mt-6 h-1.5 w-56 overflow-hidden rounded-full bg-white/10"
      >
        <motion.div
          className="h-full rounded-full bg-sky-500"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Loading;