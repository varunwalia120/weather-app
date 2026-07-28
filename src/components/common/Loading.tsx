import { motion } from "framer-motion";
import { FaCloudSun } from "react-icons/fa";

const Loading = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center justify-center rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 px-10 py-16 shadow-2xl backdrop-blur-2xl"
    >
      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.08, 1],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-28 w-28 items-center justify-center rounded-full bg-sky-500/10 shadow-lg shadow-sky-500/20"
      >
        <FaCloudSun
          size={60}
          className="text-sky-400"
        />
      </motion.div>

      <h1 className="mt-8 text-4xl font-black text-white">
        Fetching Weather Data
      </h1>

      <p className="mt-3 max-w-xl text-center text-lg text-slate-300">
        We're retrieving the latest weather conditions for your selected
        location.
      </p>

      <div className="mt-10 w-full max-w-md">
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>

      <motion.p
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="mt-6 text-sm tracking-wide text-slate-400"
      >
        Please wait a moment...
      </motion.p>
    </motion.section>
  );
};

export default Loading;