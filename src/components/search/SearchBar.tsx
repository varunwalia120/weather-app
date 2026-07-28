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
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl shadow-xl"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 lg:flex-row"
      >
        <div className="relative flex-1">
          <FiSearch
            size={22}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              if (error) setError("");
            }}
            placeholder="Search any city in the world..."
            className="h-16 w-full rounded-2xl border border-white/10 bg-slate-900/40 pl-14 pr-14 text-lg text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/20"
          />

          {city && (
            <button
              type="button"
              onClick={clearInput}
              aria-label="Clear Search"
              className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
            >
              <FiX size={20} />
            </button>
          )}
        </div>

        <motion.button
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.96,
          }}
          type="submit"
          className="flex h-16 min-w-[170px] items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-8 text-lg font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:shadow-cyan-500/40"
        >
          <FiSearch className="mr-2" size={20} />
          Search
        </motion.button>
      </form>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-center text-sm font-medium text-red-400"
        >
          {error}
        </motion.p>
      )}
    </motion.section>
  );
};

export default SearchBar;