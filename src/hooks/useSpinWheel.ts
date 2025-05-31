import { useState, useCallback } from 'react';
import { WheelState, Prize } from '../types';
import { prizes } from '../data/prizes';

// Minimum and maximum number of full rotations
const MIN_ROTATIONS = 5;
const MAX_ROTATIONS = 10;
// Duration of spin in milliseconds
const SPIN_DURATION = 5000;

export const useSpinWheel = () => {
  const [state, setState] = useState<WheelState>({
    isSpinning: false,
    currentRotation: 0,
    prizeWon: null,
    showConfetti: false,
  });

  const selectPrizeByProbability = useCallback(() => {
    // Calculate total probability
    const totalProbability = prizes.reduce((sum, prize) => sum + prize.probability, 0);
    
    // Generate a random number between 0 and total probability
    const randomValue = Math.random() * totalProbability;
    
    // Select a prize based on the random value and probabilities
    let currentProbability = 0;
    for (const prize of prizes) {
      currentProbability += prize.probability;
      if (randomValue <= currentProbability) {
        return prize;
      }
    }
    
    // Fallback to the last prize (should rarely happen)
    return prizes[prizes.length - 1];
  }, []);
  
  const spinWheel = useCallback(() => {
    if (state.isSpinning) return;
    
    // Select a random prize
    const selectedPrize = selectPrizeByProbability();
    
    // Calculate the prize index
    const prizeIndex = prizes.findIndex(prize => prize.id === selectedPrize.id);
    
    // Calculate the angle for the selected prize
    const segmentAngle = 360 / prizes.length;
    const prizeAngle = 360 - (prizeIndex * segmentAngle + segmentAngle / 2);
    
    // Calculate number of full rotations plus the offset for the prize
    const rotations = MIN_ROTATIONS + Math.random() * (MAX_ROTATIONS - MIN_ROTATIONS);
    const finalRotation = rotations * 360 + prizeAngle;
    
    setState(prev => ({
      ...prev,
      isSpinning: true,
      currentRotation: finalRotation,
      prizeWon: null,
    }));
    
    // Set timeout to stop spinning and reveal prize
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        isSpinning: false,
        prizeWon: selectedPrize,
        showConfetti: true,
      }));
      
      // Hide confetti after 5 seconds
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          showConfetti: false,
        }));
      }, 5000);
    }, SPIN_DURATION);
  }, [state.isSpinning, selectPrizeByProbability]);
  
  const resetWheel = useCallback(() => {
    setState({
      isSpinning: false,
      currentRotation: 0,
      prizeWon: null,
      showConfetti: false,
    });
  }, []);
  
  return {
    state,
    spinWheel,
    resetWheel,
  };
};