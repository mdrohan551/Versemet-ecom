import React from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white dark:bg-Dark_primary overflow-hidden">
      <div className="flex flex-col items-center gap-6">
        
        {/* Compact Smart Box Section */}
        <div className="flex items-center scale-90 sm:scale-100">
          {/* Left Side (Well) */}
          <motion.div
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-primary px-3 py-1 rounded-l-lg shadow-[0_8px_20px_-6px_rgba(209,0,116,0.3)]"
          >
            <span className="text-white font-jakarta-Extrabold text-xl sm:text-2xl tracking-tighter">
              verse
            </span>
          </motion.div>

          {/* Right Side (Come) */}
          <motion.div
            initial={{ x: 15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gray-900 dark:bg-white px-3 py-1 rounded-r-lg border-l border-white/10 dark:border-gray-100"
          >
            <span className="text-white dark:text-gray-900 font-jakarta-Extrabold text-xl sm:text-2xl tracking-tighter">
              mart
            </span>
          </motion.div>
        </div>

        {/* Minimal Brand Name Reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-jakarta-bold uppercase tracking-[0.5em] text-gray-400 dark:text-gray-500">
            Versemart
          </span>

          {/* Ultra-Slim Progress Loader */}
          <div className="w-24 h-[1.5px] bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="w-full h-full bg-primary shadow-[0_0_8px_rgba(209,0,116,0.6)]"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Loader;