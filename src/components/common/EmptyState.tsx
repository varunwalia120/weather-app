import { motion } from "framer-motion";
import {
  FiSearch,
  FiCloud,
  FiMapPin,
  FiWind,
} from "react-icons/fi";

const features = [
  {
    icon: <FiCloud size={22} />,
    title: "Live Weather",
  },
  {
    icon: <FiWind size={22} />,
    title: "Wind & Humidity",
  },
  {
    icon: <FiMapPin size={22} />,
    title: "Current Location",
  },
];

const EmptyState = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mt-8 w-full max-w-7xl rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-12 shadow-2xl backdrop-blur-2xl"
    >
      <div className="flex flex-col items-center text-center">

        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-28 w-28 items-center justify-center rounded-full bg-sky-500/10 shadow-lg shadow-sky-500/20"
        >
          <FiSearch
            size={54}
            className="text-sky-400"
          />
        </motion.div>

        <h1 className="mt-8 text-5xl font-black text-white">
          Welcome to Weatherly
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Search for any city around the world and instantly
          access live weather conditions, temperature,
          humidity, wind speed, visibility and more.
        </p>

        <div className="mt-10 grid w-full max-w-4xl gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 flex justify-center text-sky-400">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-10 text-slate-400"
        >
          Start by searching for your favourite city above.
        </motion.p>

      </div>
    </motion.section>
  );
};

export default EmptyState;