import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";

type SearchBarProps = {
  onSearch: (city: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedCity = city.trim();

    if (!trimmedCity) {
      setError("Please enter a city name.");
      return;
    }

    if (trimmedCity.length < 2) {
      setError("City name must contain at least 2 characters.");
      return;
    }

    if (trimmedCity.length > 50) {
      setError("City name cannot exceed 50 characters.");
      return;
    }

    setError("");
    onSearch(trimmedCity);
  };

  const clearInput = () => {
    setCity("");
    setError("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-5 w-full"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <div className="relative flex-1">
          <FiSearch
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              if (error) setError("");
            }}
            placeholder="Search any city..."
            className="h-14 w-full rounded-xl border border-white/10 bg-white/10 pl-12 pr-12 text-base text-white placeholder:text-slate-500 backdrop-blur-xl outline-none transition-all duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
          />

          {city && (
            <button
              type="button"
              onClick={clearInput}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
            >
              <FiX size={18} />
            </button>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          className="h-14 min-w-[140px] rounded-xl bg-sky-500 px-8 font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:bg-sky-600"
        >
          Search
        </motion.button>
      </form>

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-sm text-red-400"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SearchBar;