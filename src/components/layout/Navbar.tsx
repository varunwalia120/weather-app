import { FaCloudSun } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto flex w-full max-w-6xl items-center justify-between py-8"
    >
      <div className="flex items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/20 backdrop-blur-xl">
          <FaCloudSun className="text-4xl text-sky-400" />
        </div>

        <div>
          <h1 className="text-5xl font-black tracking-tight text-white">
            Weatherly
          </h1>

          <p className="mt-1 text-base text-slate-400">
            Beautiful weather forecasts, anywhere in the world.
          </p>
        </div>
      </div>

      <a
        href="https://github.com/varunwalia120/weather-app"
        target="_blank"
        rel="noreferrer"
        aria-label="View project on GitHub"
        className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:scale-110 hover:bg-white/10"
      >
        <FiGithub size={24} className="text-white" />
      </a>
    </motion.header>
  );
};

export default Navbar;