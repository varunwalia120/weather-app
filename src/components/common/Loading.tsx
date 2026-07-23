import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto mt-12 flex w-full max-w-3xl flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/10 p-12 shadow-2xl backdrop-blur-xl"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="h-16 w-16 rounded-full border-4 border-sky-400 border-t-transparent"
      />

      <h2 className="mt-8 text-2xl font-semibold text-white">
        Searching Weather...
      </h2>

      <p className="mt-2 text-slate-400">
        Fetching the latest weather information.
      </p>
    </motion.section>
  );
};

export default Loading;