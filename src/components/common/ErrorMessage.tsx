import { motion } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="mx-auto mt-12 flex w-full max-w-3xl flex-col items-center rounded-3xl border border-red-500/20 bg-red-500/10 p-12 text-center shadow-2xl backdrop-blur-xl"
    >
      <div className="rounded-full bg-red-500/10 p-5">
        <FiAlertTriangle className="text-6xl text-red-400" />
      </div>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Oops!
      </h2>

      <p className="mt-3 text-lg text-red-300">
        {message}
      </p>

      <p className="mt-2 text-slate-400">
        Please check the city name and try again.
      </p>
    </motion.section>
  );
};

export default ErrorMessage;