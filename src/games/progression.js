import { cons } from 'hexlet-pairs';
import gameEngine from '../gameEngine';
import getRandom from '../getRandom';

const progressionLength = 10;

const calculateProgressionElement = (start, diff, miltipler) => start + diff * miltipler;

const generateProgressionWithHiddenElement = (start, diff, hiddenElement) => {
  const iterator = (acc, currentPosition) => {
    if (currentPosition > progressionLength) {
      return acc;
    }
    if (currentPosition === hiddenElement) {
      return iterator(`${acc} ..`, currentPosition + 1);
    }
    const value = calculateProgressionElement(start, diff, currentPosition);
    return iterator(`${acc} ${value}`, currentPosition + 1);
  };
  return iterator('', 1);
};

const getProgressionGameData = () => {
  const start = getRandom(0, 5);
  const diff = getRandom(1, 5);
  const hiddenElement = getRandom(1, progressionLength);
  const question = generateProgressionWithHiddenElement(start, diff, hiddenElement);
  const correctAnswer = calculateProgressionElement(start, diff, hiddenElement).toString();
  return cons(question, correctAnswer);
};

export default () => {
  const progressionGameDescription = 'What number is missing in the progression?';
  gameEngine(getProgressionGameData, progressionGameDescription);
};
