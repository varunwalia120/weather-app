import { FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

type LocationButtonProps = {
  onLocationClick: () => void;
};

const LocationButton = ({ onLocationClick }: LocationButtonProps) => {
  return (
    <motion.button
      onClick={onLocationClick}
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="group flex h-14 items-center justify-center gap-3 rounded-2xl border border-sky-400/20 bg-gradient-to-r from-slate-900/80 to-slate-800/80 px-6 text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-sky-400/40 hover:shadow-sky-500/20"
    >
      <motion.div
        animate={{
          y: [0, -3, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15"
      >
        <FiMapPin
          size={18}
          className="text-sky-400"
        />
      </motion.div>

      <div className="flex flex-col items-start leading-none">
        <span className="text-xs uppercase tracking-widest text-slate-400">
          Detect
        </span>

        <span className="text-sm font-semibold text-white">
          Current Location
        </span>
      </div>
    </motion.button>
  );
};

export default LocationButton;