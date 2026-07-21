import { FaCloudSun } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-sky-500/20 p-3 backdrop-blur-md">
            <FaCloudSun className="text-3xl text-sky-400" />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-wide text-white">
              Weatherly
            </h1>

            <p className="text-sm text-slate-400">
              Live Weather Forecast
            </p>
          </div>
        </div>

        {/* GitHub Button */}
        <button
          type="button"
          aria-label="GitHub Repository"
          className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-400"
        >
          <FiGithub size={22} />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;