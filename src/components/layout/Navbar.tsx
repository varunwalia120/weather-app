import { FaCloudSun } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="flex items-center justify-between py-2"
    >
      <div className="flex items-center gap-5">
        <motion.div
          animate={{
            rotate: [0, 8, -8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/20 bg-gradient-to-br from-sky-500/20 to-cyan-500/10 shadow-lg shadow-sky-500/20 backdrop-blur-xl"
        >
          <FaCloudSun className="text-[34px] text-sky-400 drop-shadow-lg" />
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl font-black tracking-tight text-white"
          >
            Weatherly
          </motion.h1>

          <p className="mt-1 text-base text-slate-400">
            Beautiful live weather forecasts worldwide.
          </p>
        </div>
      </div>

      <motion.a
        href="https://github.com/varunwalia120/weather-app"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Repository"
        whileHover={{
          scale: 1.1,
          rotate: 8,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20"
      >
        <FiGithub
          size={24}
          className="text-slate-200 transition-colors duration-300 group-hover:text-sky-300"
        />
      </motion.a>
    </motion.header>
  );
};

export default Navbar;