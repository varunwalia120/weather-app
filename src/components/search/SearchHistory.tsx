import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mx-auto mt-4 w-full"
    >
      <div className="mb-2 flex items-center gap-2">
        <FiClock
          size={16}
          className="text-sky-400"
        />

        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Recent Searches
        </h3>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {history.map((city) => (
          <motion.button
            key={city}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => onSelect(city)}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-500/15 hover:text-white"
          >
            {city}
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
};

export default SearchHistory;