import { cons } from 'hexlet-pairs';
import gameEngine from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  const iterator = (acc) => {
    if (num % acc === 0) {
      return false;
    }
    if (acc > Math.sqrt(num)) {
      return true;
    }
    return iterator(acc + 1);
  };
  return iterator(2);
};

const getPrimeGameData = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export default () => {
  const evenGameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameEngine(getPrimeGameData, evenGameRules);
};
