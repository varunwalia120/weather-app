type UnitToggleProps = {
  unit: "metric" | "imperial";
  onToggle: () => void;
};

const UnitToggle = ({ unit, onToggle }: UnitToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-white transition-all duration-300 hover:bg-white/20"
    >
      {unit === "metric" ? "°C" : "°F"}
    </button>
  );
};

export default UnitToggle;