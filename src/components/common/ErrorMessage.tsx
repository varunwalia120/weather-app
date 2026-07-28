import { motion } from "framer-motion";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-8 w-full max-w-7xl rounded-[32px] border border-red-500/20 bg-gradient-to-br from-red-500/10 to-red-500/5 p-12 shadow-2xl backdrop-blur-2xl"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          animate={{
            rotate: [0, -8, 8, -8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-red-500/15 shadow-lg shadow-red-500/20"
        >
          <FiAlertTriangle
            size={48}
            className="text-red-400"
          />
        </motion.div>

        <h1 className="mt-8 text-4xl font-black text-white">
          Unable to Fetch Weather
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-red-300">
          {message}
        </p>

        <p className="mt-3 max-w-xl text-slate-400">
          Please check the spelling of the city name, verify your internet
          connection, or try another location.
        </p>

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="mt-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
        >
          <FiRefreshCw className="text-sky-400" />

          <span className="text-sm font-medium text-slate-300">
            Search again using the search bar above
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ErrorMessage;