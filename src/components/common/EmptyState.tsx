import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const EmptyState = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto mt-6 flex w-full max-w-4xl flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-8 py-10 text-center shadow-xl backdrop-blur-xl"
    >
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-500/10"
      >
        <FiSearch className="text-5xl text-sky-400" />
      </motion.div>

      <h2 className="mt-5 text-2xl font-bold text-white">
        Search for a City
      </h2>

      <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
        Enter any city name to instantly view its current temperature,
        weather conditions, humidity, wind speed, visibility, pressure,
        sunrise and sunset.
      </p>
    </motion.section>
  );
};

export default EmptyState;