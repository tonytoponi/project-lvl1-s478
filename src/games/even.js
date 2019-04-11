import { cons } from 'hexlet-pairs';
import gameEngine from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const isEven = num => num % 2 === 0;

const getEvenGameData = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export default () => {
  const evenGameRules = 'Answer "yes" if number even otherwise answer "no".';
  gameEngine(getEvenGameData, evenGameRules);
};
