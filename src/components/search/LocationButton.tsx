import { FiMapPin } from "react-icons/fi";

type LocationButtonProps = {
  onLocationClick: () => void;
};

const LocationButton = ({ onLocationClick }: LocationButtonProps) => {
  return (
    <button
      onClick={onLocationClick}
      className="flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-sky-600 hover:scale-105"
    >
      <span className="flex items-center gap-2">
        <FiMapPin />
        Current Location
      </span>
    </button>
  );
};

export default LocationButton;