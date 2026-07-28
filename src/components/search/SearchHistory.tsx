import { motion } from "framer-motion";
import { FiClock, FiArrowUpRight } from "react-icons/fi";

type SearchHistoryProps = {
  history: string[];
  onSelect: (city: string) => void;
};

const SearchHistory = ({
  history,
  onSelect,
}: SearchHistoryProps) => {
  if (history.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15">
          <FiClock className="text-lg text-sky-400" />
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">
            Recent Searches
          </h3>

          <p className="text-sm text-slate-400">
            Quickly access your previously searched cities
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {history.map((city, index) => (
          <motion.button
            key={city}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => onSelect(city)}
            className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/40 px-5 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-white"
          >
            <span>{city}</span>

            <FiArrowUpRight className="text-slate-500 transition-all duration-300 group-hover:text-sky-300" />
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
};

export default SearchHistory;