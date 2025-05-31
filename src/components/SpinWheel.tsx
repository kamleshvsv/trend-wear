import React from "react";
import { motion } from "framer-motion";
import { Prize } from "../types";

interface SpinWheelProps {
  prizes: Prize[];
  rotation: number;
  isSpinning: boolean;
}

const SpinWheel: React.FC<SpinWheelProps> = ({
  prizes,
  rotation,
  isSpinning,
}) => {
  const numberOfPrizes = prizes.length;
  const segmentAngle = 360 / numberOfPrizes;

  // Calculate the size of the wheel (responsive)
  const wheelSize = "min(80vw, 400px)";

  return (
    <div className="relative" style={{ width: wheelSize, height: wheelSize }}>
      {/* Outer ring with dots */}
      <div
        className="absolute inset-0 rounded-full border-8 border-pink-400"
        style={{
          boxShadow:
            "0 0 0 8px rgba(236, 72, 153, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Dots around the wheel */}
        {Array.from({ length: 40 }).map((_, i) => {
          const angle = i * 9 * (Math.PI / 180);
          const dotSize = 8;
          const radius = parseInt(wheelSize) / 2 - dotSize / 2;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={i}
              className="absolute bg-yellow-200 rounded-full"
              style={{
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                left: `calc(50% + ${x}px - ${dotSize / 2}px)`,
                top: `calc(50% + ${y}px - ${dotSize / 2}px)`,
              }}
            />
          );
        })}
      </div>

      {/* Spinning wheel */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          transformOrigin: "center",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        }}
        animate={{
          rotate: rotation,
        }}
        transition={{
          duration: isSpinning ? 5 : 0,
          ease: isSpinning ? [0.2, 0.5, 0.8, 0.98] : "easeOut",
        }}
      >
        {/* Prize segments */}
        {prizes.map((prize, index) => {
          const startAngle = index * segmentAngle;
          const endAngle = (index + 1) * segmentAngle;

          return (
            <div
              key={prize.id}
              className="absolute top-0 left-0 right-0 bottom-0"
              style={{
                clipPath: `polygon(50% 50%, ${
                  50 + 50 * Math.cos((startAngle * Math.PI) / 180)
                }% ${50 + 50 * Math.sin((startAngle * Math.PI) / 180)}%, ${
                  50 +
                  50 *
                    Math.cos(((startAngle + segmentAngle / 2) * Math.PI) / 180)
                }% ${
                  50 +
                  50 *
                    Math.sin(((startAngle + segmentAngle / 2) * Math.PI) / 180)
                }%, ${50 + 50 * Math.cos((endAngle * Math.PI) / 180)}% ${
                  50 + 50 * Math.sin((endAngle * Math.PI) / 180)
                }%, 50% 50%)`,
                backgroundColor: prize.backgroundColor,
              }}
            >
              <div
                className="absolute whitespace-nowrap font-bold text-center"
                style={{
                  // top: "25%",
                  // left: "50%",
                  transform: `translateX(-50%) rotate(${
                    startAngle + segmentAngle / 2
                  }deg)`,
                  transformOrigin: "center bottom",
                  color: prize.textColor,
                  fontSize: prize.value === "FLAT ₹250 OFF" ? "14px" : "18px",
                  width: "100%",
                  maxWidth: "130px",
                }}
              >
                <div className="flex flex-col items-center justify-center">
                
                  <span className="text-2xl">{prize?.icon || "🎁"}</span>

               
                  <span className="text-sm whitespace-nowrap">
                    {prize.value.replace(prize.label, "")}
                  </span>
                </div>
                {/* <div className="flex flex-col items-center justify-center">
                  <span className="text-xl">{prize.label}</span>
                  <span className="text-sm whitespace-nowrap">{prize.value.replace(prize.label, '')}</span>
                </div> */}
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Pointer/needle */}
      <div
        className="absolute z-10 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[30px] border-l-transparent border-r-transparent border-b-red-500"
        style={{
          top: "-15px",
          left: "50%",
          transform: "translateX(-50%)",
          filter: "drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3))",
        }}
      />
    </div>
  );
};

export default SpinWheel;
