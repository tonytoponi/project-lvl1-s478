import { cons } from 'hexlet-pairs';
import gameEngine from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const startGcdGame = () => {
  const value1 = getRandomNumber(0, 100);
  const value2 = getRandomNumber(0, 100);
  const question = `${value1} ${value2}`;
  const correctAnswer = getGcd(value1, value2);
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export default () => {
  gameEngine(startGcdGame, 'Find the greatest common divisor of given numbers.');
};