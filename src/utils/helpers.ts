import { distanceInput } from './constants';

export const finalVerdict = (distance: string | number) => {
  if (distance <= distanceInput) {
    return true;
  } else {
    return false;
  }
};

export const getRandomInt = (min = 1, max = 5) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
