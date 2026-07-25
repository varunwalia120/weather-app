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
    <div className="mx-auto mt-8 w-full max-w-2xl">
      <motion.form
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        onSubmit={handleSubmit}
        className="flex items-center gap-3"
      >
        <div className="relative flex-1">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              if (error) setError("");
            }}
            placeholder="Search for a city..."
            className="w-full rounded-2xl border border-white/10 bg-white/10 py-4 pl-12 pr-12 text-white placeholder:text-slate-400 backdrop-blur-xl outline-none transition-all duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
          />

          {city && (
            <button
              type="button"
              onClick={clearInput}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
              aria-label="Clear search"
            >
              <FiX size={18} />
            </button>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="rounded-2xl bg-sky-500 px-6 py-4 font-semibold text-white transition hover:bg-sky-600"
        >
          Search
        </motion.button>
      </motion.form>

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-sm text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default SearchBar;