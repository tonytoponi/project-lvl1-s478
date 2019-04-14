import { cons } from 'hexlet-pairs';
import gameEngine from '../gameEngine';
import getRandom from '../getRandom';

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  if (num < 2) {
    return false;
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
  const question = getRandom(-5, 20);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  const primeGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameEngine(getPrimeGameData, primeGameDescription);
};
