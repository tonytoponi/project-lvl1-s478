import { cons } from 'hexlet-pairs';
import gameEngine from '../gameEngine';
import getRandom from '../getRandom';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getGcdGameData = () => {
  const value1 = getRandom(0, 100);
  const value2 = getRandom(0, 100);
  const question = `${value1} ${value2}`;
  const correctAnswer = getGcd(value1, value2).toString();
  return cons(question, correctAnswer);
};

export default () => {
  const gcdGameDescription = 'Find the greatest common divisor of given numbers.';
  gameEngine(getGcdGameData, gcdGameDescription);
};
