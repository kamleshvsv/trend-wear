import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.div
      className="relative flex justify-center items-center mb-5"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Curved "SPIN TO WIN" text */}
      <div className="relative">
        <svg width="280" height="80" viewBox="0 0 280 80">
          <path
            id="curve"
            d="M10,60 Q140,0 270,60"
            fill="transparent"
          />
          <text className="text-3xl">
            <textPath href="#curve" startOffset="50%" textAnchor="middle" className="font-bold tracking-widest fill-white drop-shadow-lg">
              SPIN TO WIN
            </textPath>
          </text>
        </svg>
        
        {/* Decorative stars */}
        <motion.div 
          className="absolute left-0 bottom-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Star className="text-white h-5 w-5 fill-white" />
        </motion.div>
        
        <motion.div 
          className="absolute right-0 bottom-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Star className="text-white h-5 w-5 fill-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;