import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto mt-6 w-full max-w-2xl"
    >
      <h3 className="mb-3 text-sm font-medium text-slate-400">
        Recent Searches
      </h3>

      <div className="flex flex-wrap gap-3">
        {history.map((city) => (
          <button
            key={city}
            onClick={() => onSelect(city)}
            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition-all duration-300 hover:border-sky-400 hover:bg-sky-500/20"
          >
            {city}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default SearchHistory;