import { Prize } from '../types';

export const prizes: Prize[] = [
  {
    id: 'discount10',
    label: '10%',
    value: '10% OFF',
    probability: 20,
    backgroundColor: '#FEF3C7',
    textColor: '#F97381',
  },
  {
    id: 'discount15',
    label: '15%',
    value: '15% OFF',
    probability: 20,
    backgroundColor: '#FFFFFF',
    textColor: '#F97381',
  },
  {
    id: 'beltGoogal',
    label: 'BELT',
    value: 'BELT & GOOGAL',
    probability: 15,
    backgroundColor: '#FEF3C7',
    textColor: '#9A7BD2',
  },
  {
    id: 'purseHanky',
    label: 'PURSE',
    value: 'PURSE & HANKY',
    probability: 15,
    backgroundColor: '#FFFFFF',
    textColor: '#9A7BD2',
  },
  {
    id: 'bodySpray',
    label: 'DEO',
    value: 'BODY SPRAY | DEO',
    probability: 15,
    backgroundColor: '#FEF3C7',
    textColor: '#F97381',
  },
  {
    id: 'flat250',
    label: '₹250',
    value: 'FLAT ₹250 OFF',
    probability: 15,
    backgroundColor: '#FFFFFF',
    textColor: '#F97381',
  },
];
