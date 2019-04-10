import { cons } from 'hexlet-pairs';
import gameEngine from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const calculateValue = (start, dif, miltipler) => start + dif * miltipler;

const generateProgression = (start, dif, guessPosition) => {
  const progressionLength = 10;
  const iterator = (acc, currentPosition) => {
    if (currentPosition > progressionLength) {
      return acc;
    }
    if (currentPosition === guessPosition) {
      return iterator(`${acc} ..`, currentPosition + 1);
    }
    const value = calculateValue(start, dif, currentPosition);
    return iterator(`${acc} ${value}`, currentPosition + 1);
  };
  return iterator('', 1);
};

const startProgressionGame = () => {
  const start = getRandomNumber(0, 5);
  const dif = getRandomNumber(1, 5);
  const guessPosition = getRandomNumber(1, 10);
  const question = generateProgression(start, dif, guessPosition);
  const correctAnswer = calculateValue(start, dif, guessPosition).toString();
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export default () => {
  gameEngine(startProgressionGame, 'What number is missing in the progression?');
};
