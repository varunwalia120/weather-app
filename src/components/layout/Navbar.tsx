import { FaCloudSun } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto flex w-full max-w-6xl items-center justify-between py-4"
    >
      <div className="flex items-center gap-4">
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 ring-1 ring-sky-500/20 backdrop-blur-lg"
        >
          <FaCloudSun className="text-3xl text-sky-400" />
        </motion.div>

        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Weatherly
          </h1>

          <p className="mt-0.5 text-sm text-slate-400">
            Live weather forecasts around the world.
          </p>
        </div>
      </div>

      <motion.a
        href="https://github.com/varunwalia120/weather-app"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Repository"
        whileHover={{
          scale: 1.08,
          y: -2,
        }}
        whileTap={{ scale: 0.95 }}
        className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-lg transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-500/10"
      >
        <FiGithub
          size={22}
          className="text-white"
        />
      </motion.a>
    </motion.header>
  );
};

export default Navbar;