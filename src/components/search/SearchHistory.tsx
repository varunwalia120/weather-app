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
      className="mx-auto mt-6 w-full max-w-2xl"
    >
      <div className="mb-3 flex items-center gap-2">
        <FiClock className="text-sky-400" />
        <h3 className="text-sm font-medium text-slate-400">
          Recent Searches
        </h3>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {history.map((city) => (
          <motion.button
            key={city}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(city)}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-sky-400 hover:bg-sky-500/20 hover:text-sky-300"
          >
            {city}
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
};

export default SearchHistory;