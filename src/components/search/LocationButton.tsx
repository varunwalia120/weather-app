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
      className="flex h-14 items-center justify-center gap-2 rounded-xl border border-sky-400/20 bg-sky-500 px-6 font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:border-sky-300 hover:bg-sky-600"
    >
      <motion.div
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FiMapPin size={18} />
      </motion.div>

      <span className="text-sm sm:text-base">
        Current Location
      </span>
    </motion.button>
  );
};

export default LocationButton;