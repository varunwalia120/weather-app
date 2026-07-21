import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <motion.form
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
      className="mx-auto mt-8 flex w-full max-w-2xl items-center gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="relative flex-1">
        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Search for a city..."
          className="w-full rounded-2xl border border-white/10 bg-white/10 py-4 pl-12 pr-4 text-white placeholder:text-slate-400 backdrop-blur-xl outline-none transition-all duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        type="submit"
        className="rounded-2xl bg-sky-500 px-6 py-4 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-sky-600"
      >
        Search
      </motion.button>
    </motion.form>
  );
};

export default SearchBar;