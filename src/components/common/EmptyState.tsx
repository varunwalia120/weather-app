import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const EmptyState = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-12 flex w-full max-w-3xl flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/10 p-12 text-center shadow-2xl backdrop-blur-xl"
    >
      <div className="rounded-full bg-sky-500/10 p-6">
        <FiSearch className="text-6xl text-sky-400" />
      </div>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Search for a City
      </h2>

      <p className="mt-3 max-w-md text-slate-400">
        Enter the name of any city to view real-time weather information,
        including temperature, humidity, wind speed and atmospheric pressure.
      </p>
    </motion.section>
  );
};

export default EmptyState;