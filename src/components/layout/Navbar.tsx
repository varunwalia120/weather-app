import { FaCloudSun, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

type NavbarProps = {
  sunrise?: number;
  sunset?: number;
};

const Navbar = ({ sunrise, sunset}: NavbarProps) => {
  const now = Math.floor(Date.now() / 1000);

  const isDay =
    sunrise && sunset
      ? now >= sunrise && now < sunset
      : true;

  const formatTime = (timestamp?: number) => {
    if (!timestamp) return "--:--";

    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="flex items-center justify-between pb-2"
    >
      {/* Logo */}

      <div className="flex items-center gap-5">
        <motion.div
          animate={{
            rotate: [0, 8, -8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/20 bg-gradient-to-br from-sky-500/20 to-cyan-500/10 shadow-lg shadow-sky-500/20 backdrop-blur-xl"
        >
          <FaCloudSun className="text-[34px] text-sky-400" />
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl font-black tracking-tight text-white"
          >
            Weatherly
          </motion.h1>

          <p className="mt-1 text-base text-slate-400">
            Beautiful live weather forecasts worldwide.
          </p>
        </div>
      </div>

      {/* Day / Night Widget */}

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
      >
        <motion.div
          animate={
            isDay
              ? { rotate: 360 }
              : { y: [0, -5, 0] }
          }
          transition={
            isDay
              ? {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }
              : {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        >
          {isDay ? (
            <FaSun className="text-4xl text-yellow-400 drop-shadow-lg" />
          ) : (
            <FaMoon className="text-4xl text-slate-200" />
          )}
        </motion.div>

        <div className="h-10 w-px bg-white/10" />

        <div className="space-y-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">
              Sunrise
            </p>

            <p className="font-semibold text-white">
              🌅 {formatTime(sunrise)}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">
              Sunset
            </p>

            <p className="font-semibold text-white">
              🌇 {formatTime(sunset)}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;