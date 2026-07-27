import { FaCloudSun } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="mx-auto flex w-full max-w-6xl items-center justify-between py-6"
    >
      <div className="flex items-center gap-4">
        <motion.div
          animate={{
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/15 backdrop-blur-xl"
        >
          <FaCloudSun className="text-4xl text-sky-400" />
        </motion.div>

        <div>
          <h1 className="text-4xl font-black tracking-tight text-white">
            Weatherly
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Beautiful weather forecasts, anywhere.
          </p>
        </div>
      </div>

      <motion.a
        href="https://github.com/varunwalia120/weather-app"
        target="_blank"
        rel="noreferrer"
        aria-label="View project on GitHub"
        whileHover={{
          scale: 1.12,
          rotate: 8,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors duration-300 hover:bg-white/10"
      >
        <FiGithub
          size={24}
          className="text-white"
        />
      </motion.a>
    </motion.header>
  );
};

export default Navbar;