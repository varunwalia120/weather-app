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
      aria-label="Toggle temperature unit"
      className="group relative flex h-14 w-36 items-center rounded-2xl border border-white/10 bg-slate-900/70 p-1 shadow-lg backdrop-blur-xl"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 30,
        }}
        className={`absolute top-1 h-12 w-[calc(50%-4px)] rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 ${
          unit === "metric" ? "left-1" : "left-[calc(50%+2px)]"
        }`}
      />

      <span
        className={`relative z-10 flex w-1/2 items-center justify-center text-sm font-semibold transition-colors duration-300 ${
          unit === "metric"
            ? "text-white"
            : "text-slate-400"
        }`}
      >
        °C
      </span>

      <span
        className={`relative z-10 flex w-1/2 items-center justify-center text-sm font-semibold transition-colors duration-300 ${
          unit === "imperial"
            ? "text-white"
            : "text-slate-400"
        }`}
      >
        °F
      </span>
    </motion.button>
  );
};

export default UnitToggle;