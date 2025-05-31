import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prize } from "../types";
import { Gift } from "lucide-react";

interface PrizeModalProps {
  prize: Prize | null;
  isVisible: boolean;
  onClose: () => void;
}

const PrizeModal: React.FC<PrizeModalProps> = ({
  prize,
  isVisible,
  onClose,
}) => {
  if (!prize) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 bg-white rounded-xl shadow-2xl p-8 max-w-md w-11/12 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 300,
                damping: 25,
              },
            }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center"
              initial={{ rotate: -15 }}
              animate={{ rotate: 15 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.5,
              }}
            >
              <Gift size={40} className="text-pink-500" />
            </motion.div>

            <motion.h2
              className="text-3xl font-bold mb-4 text-gray-800"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Congratulations!
            </motion.h2>

            <motion.div
              className="text-2xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span>You Won:</span>
              <div
                className="mt-2 py-3 px-6 rounded-lg"
                style={{
                  backgroundColor: prize.backgroundColor,
                  color: prize.textColor,
                }}
              >
                {prize.value}
              </div>
            </motion.div>

            <motion.p
              className="text-gray-600 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-center text-sm mt-1">
                Show this code at the counter:
                <br />
                <span className="font-mono bg-gray-100 px-2 py-1 rounded inline-block mt-1">
                  {prize.id.toUpperCase()}
                </span>
              </p>
              {/* Use code <span className="font-mono bg-gray-100 p-1 rounded">{prize.id.toUpperCase()}</span> at checkout */}
            </motion.p>

            <motion.button
              className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue Shopping
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PrizeModal;
