export interface Prize {
  id: string;
  label: string;
  icon?: string;
  value: string;
  probability: number;
  backgroundColor: string;
  textColor: string;
}

export interface WheelState {
  isSpinning: boolean;
  currentRotation: number;
  prizeWon: Prize | null;
  showConfetti: boolean;
}