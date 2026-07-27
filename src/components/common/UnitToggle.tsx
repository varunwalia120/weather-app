import { motion } from "framer-motion";

type UnitToggleProps = {
  unit: "metric" | "imperial";
  onToggle: () => void;
};

const UnitToggle = ({ unit, onToggle }: UnitToggleProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onToggle}
      className="flex h-14 items-center overflow-hidden rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl"
      aria-label="Toggle temperature unit"
    >
      <span
        className={`flex h-full w-14 items-center justify-center text-sm font-semibold transition-all duration-300 ${
          unit === "metric"
            ? "bg-sky-500 text-white"
            : "text-slate-400"
        }`}
      >
        °C
      </span>

      <span
        className={`flex h-full w-14 items-center justify-center text-sm font-semibold transition-all duration-300 ${
          unit === "imperial"
            ? "bg-sky-500 text-white"
            : "text-slate-400"
        }`}
      >
        °F
      </span>
    </motion.button>
  );
};

export default UnitToggle;