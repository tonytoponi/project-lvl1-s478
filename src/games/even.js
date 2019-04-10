import { cons } from 'hexlet-pairs';
import gameEngine from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const startEvenGame = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question);
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export default () => {
  gameEngine(startEvenGame, 'Answer "yes" if number even otherwise answer "no".');
};
