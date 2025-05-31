import React, { useState, useEffect, useRef } from "react";
import { prizes } from "./data/prizes";
import { useSpinWheel } from "./hooks/useSpinWheel";
import Background from "./components/Background";
import SpinWheel from "./components/SpinWheel";
import SpinButton from "./components/SpinButton";
import PrizeModal from "./components/PrizeModal";
import Header from "./components/Header";
import Confetti from "./components/Confetti";
import { motion } from "framer-motion";
import logo from "./assets/logo-trend_wear.jpeg";
import Footer from "./components/Footer";
import spinStartSound from "./assets/sound/spin.wav";
import spinEndSound from "./assets/sound/win.wav";

// function App() {
//   const { state, spinWheel, resetWheel } = useSpinWheel();
//   const [showModal, setShowModal] = useState(false);

//   // Show modal with slight delay after prize is won
//   useEffect(() => {
//     if (state.prizeWon && !state.isSpinning) {
//       const timer = setTimeout(() => {
//         setShowModal(true);
//       }, 1000);

//       return () => clearTimeout(timer);
//     }
//   }, [state.prizeWon, state.isSpinning]);

//   const handleCloseModal = () => {
//     setShowModal(false);
//     resetWheel();
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Background with decorative elements */}
//       <Background />

//       {/* Confetti effect when prize is won */}
//       <Confetti active={state.showConfetti} />

//       {/* Main content container */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-5 px-4">
//         {/* Header with curved text */}
//         <img
//           src={logo}
//           alt="trend wear"
//           className="w-24 sm:w-26 md:w-30 mb-4 rounded-[15%] relative -top-3 sm:top-0"
//         />
//         <Header />
//         {/* Wheel container with relative positioning */}
//         <motion.div
//           className="relative mt-4 mb-12"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* The spin wheel component */}
//           <SpinWheel
//             prizes={prizes}
//             rotation={state.currentRotation}
//             isSpinning={state.isSpinning}
//           />

//           {/* Center button */}
//           <div className="absolute top-[38%] left-[38%] transform -translate-x-1/2 -translate-y-1/2">
//             <SpinButton onClick={spinWheel} disabled={state.isSpinning} />
//           </div>
//         </motion.div>

//         {/* Footer text */}
//         <motion.p
//           className="text-white text-center mt-4 text-lg font-medium max-w-md"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           Spin the wheel for a chance to win amazing prizes!
//         </motion.p>
//         <Footer />
//       </div>

//       {/* Prize modal */}
//       <PrizeModal
//         prize={state.prizeWon}
//         isVisible={showModal}
//         onClose={handleCloseModal}
//       />
//       1
//     </div>
//   );
// }

// export default App;4

function App() {
  const { state, spinWheel, resetWheel } = useSpinWheel();
  const [showModal, setShowModal] = useState(false);

  // Refs for audio elements
  const spinStartAudioRef = useRef<HTMLAudioElement>(null);
  const spinEndAudioRef = useRef<HTMLAudioElement>(null);

  // Play spin start sound when spinning starts
  useEffect(() => {
    if (state.isSpinning) {
      spinStartAudioRef.current?.play();
    }
  }, [state.isSpinning]);

  // Show modal and play prize reveal sound when spinning stops and prize is won
  useEffect(() => {
    if (state.prizeWon && !state.isSpinning) {
      spinEndAudioRef.current?.play();

      const timer = setTimeout(() => {
        setShowModal(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [state.prizeWon, state.isSpinning]);

  const handleCloseModal = () => {
    setShowModal(false);
    resetWheel();
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Audio elements */}
      <audio ref={spinStartAudioRef} src={spinStartSound} preload="auto" />
      <audio ref={spinEndAudioRef} src={spinEndSound} preload="auto" />

      {/* Background, Confetti, Header, SpinWheel, etc... */}
      <Background />
      <Confetti active={state.showConfetti} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-5 px-4">
        <img
          src={logo}
          alt="trend wear"
          className="w-24 sm:w-26 md:w-30 mb-4 rounded-[15%] relative -top-3 sm:top-0"
        />
        <Header />

        <motion.div
          className="relative mt-4 mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SpinWheel
            prizes={prizes}
            rotation={state.currentRotation}
            isSpinning={state.isSpinning}
          />
          {/* <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <SpinButton onClick={spinWheel} disabled={state.isSpinning} />
</div> */}

          <div className="absolute top-[37%] left-[37%] mobile-left-top transform -translate-x-1/2 -translate-y-1/2">
            <SpinButton onClick={spinWheel} disabled={state.isSpinning} />
          </div>
        </motion.div>

        <motion.p
          className="text-white text-center mt-4 text-lg font-medium max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Spin the wheel for a chance to win amazing prizes!
        </motion.p>
        <Footer />
      </div>

      <PrizeModal
        prize={state.prizeWon}
        isVisible={showModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
