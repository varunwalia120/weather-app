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
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="flex h-16 items-center justify-center gap-3 rounded-2xl border border-sky-400/20 bg-sky-500 px-8 text-lg font-semibold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:bg-sky-600"
    >
      <FiMapPin
        size={22}
        className="transition-transform duration-300 group-hover:rotate-12"
      />

      <span>Current Location</span>
    </motion.button>
  );
};

export default LocationButton;