import { cons } from 'hexlet-pairs';
import gameEngine from '../gameEngine';
import getRandom from '../getRandom';

const isEven = num => num % 2 === 0;

const getEvenGameData = () => {
  const question = getRandom(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  const evenGameDescription = 'Answer "yes" if number even otherwise answer "no".';
  gameEngine(getEvenGameData, evenGameDescription);
};
