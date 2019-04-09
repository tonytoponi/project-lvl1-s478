import { cons } from 'hexlet-pairs';
import getRandomNumber from './getRandomNumber';

export default () => {
  const sign = getRandomNumber(1, 4);
  switch (sign) {
    case 1:
      return () => cons((a, b) => a + b, '+');
    case 2:
      return () => cons((a, b) => a - b, '-');
    case 3:
      return () => cons((a, b) => a * b, '*');
    case 4:
      return () => cons((a, b) => a / b, '/');
    default:
      return 0;
  }
};
