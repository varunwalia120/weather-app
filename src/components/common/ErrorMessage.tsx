import { motion } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto mt-6 flex w-full max-w-4xl flex-col items-center rounded-2xl border border-red-500/20 bg-red-500/10 px-8 py-8 text-center shadow-xl backdrop-blur-xl"
    >
      <motion.div
        animate={{
          rotate: [0, -5, 5, -5, 0],
        }}
        transition={{
          duration: 0.8,
        }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/15"
      >
        <FiAlertTriangle
          size={34}
          className="text-red-400"
        />
      </motion.div>

      <h2 className="mt-4 text-2xl font-bold text-white">
        Something went wrong
      </h2>

      <p className="mt-2 text-base font-medium text-red-300">
        {message}
      </p>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
        Check the spelling of the city name or try another location.
      </p>
    </motion.section>
  );
};

export default ErrorMessage;