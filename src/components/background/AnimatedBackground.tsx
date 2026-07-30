import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  weather?: string;
}

const backgrounds = {
  default:
    "from-slate-950 via-slate-900 to-sky-950",

  clear:
    "from-sky-500 via-cyan-400 to-blue-600",

  clouds:
    "from-slate-700 via-slate-600 to-slate-800",

  rain:
    "from-slate-900 via-blue-950 to-slate-950",

  drizzle:
    "from-slate-900 via-blue-900 to-slate-950",

  snow:
    "from-sky-100 via-slate-200 to-blue-100",

  thunderstorm:
    "from-slate-950 via-purple-950 to-slate-900",

  mist:
    "from-slate-500 via-slate-400 to-slate-600",

  fog:
    "from-slate-500 via-slate-400 to-slate-600",

  haze:
    "from-slate-600 via-slate-500 to-slate-700",
};

export default function AnimatedBackground({
  weather,
}: AnimatedBackgroundProps) {
  const condition = weather?.toLowerCase() ?? "default";

  const gradient =
    backgrounds[
      condition as keyof typeof backgrounds
    ] ?? backgrounds.default;

  return (
    <motion.div
      key={condition}
      initial={{ opacity: 0.85 }}
      animate={{
        opacity: 1,
        scale: [1, 1.05, 1],
      }}
      transition={{
        opacity: {
          duration: 0.8,
        },
        scale: {
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`fixed inset-0 -z-10 bg-gradient-to-br ${gradient}`}
    />
  );
}