import { cons } from 'hexlet-pairs';
import gameEngine from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const progressionLength = 10;

const calculateProgressionElement = (start, diff, miltipler) => start + diff * miltipler;

const generateProgression = (start, diff, guessPosition) => {
  const iterator = (acc, currentPosition) => {
    if (currentPosition > progressionLength) {
      return acc;
    }
    if (currentPosition === guessPosition) {
      return iterator(`${acc} ..`, currentPosition + 1);
    }
    const value = calculateProgressionElement(start, diff, currentPosition);
    return iterator(`${acc} ${value}`, currentPosition + 1);
  };
  return iterator('', 1);
};

const getProgressionGameData = () => {
  const start = getRandomNumber(0, 5);
  const diff = getRandomNumber(1, 5);
  const guessPosition = getRandomNumber(1, 10);
  const question = generateProgression(start, diff, guessPosition);
  const correctAnswer = calculateProgressionElement(start, diff, guessPosition).toString();
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export default () => {
  const progressionGameRules = 'What number is missing in the progression?';
  gameEngine(getProgressionGameData, progressionGameRules);
};
