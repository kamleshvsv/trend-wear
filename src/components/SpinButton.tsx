import React from 'react';
import { motion } from 'framer-motion';

interface SpinButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const SpinButton: React.FC<SpinButtonProps> = ({ onClick, disabled }) => {
  return (
    <motion.button
      className="absolute z-20 flex items-center justify-center w-24 h-24 text-white font-bold text-2xl bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg cursor-pointer focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      initial={{ scale: 0.8 }}
      animate={{ 
        scale: [0.9, 1, 0.9],
        boxShadow: [
          '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
          '0 15px 20px -3px rgba(0, 0, 0, 0.3)',
          '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
        ]
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 2
      }}
    >
      GO
    </motion.button>
  );
};

export default SpinButton;