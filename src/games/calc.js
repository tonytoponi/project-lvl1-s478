import { cons, car, cdr } from 'hexlet-pairs';
import gameEngine from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const getRandomOperator = () => {
  const sign = getRandomNumber(1, 4);
  switch (sign) {
    case 1:
      return cons((a, b) => a + b, '+');
    case 2:
      return cons((a, b) => a - b, '-');
    case 3:
      return cons((a, b) => a * b, '*');
    case 4:
      return cons((a, b) => a / b, '/');
    default:
      return 0;
  }
};

const startCalcGame = () => {
  const value1 = getRandomNumber(0, 10);
  const value2 = getRandomNumber(0, 10);
  const operator = getRandomOperator();
  const calculate = car(operator);
  const operatorSign = cdr(operator);
  const question = `${value1} ${operatorSign} ${value2}`;
  const correctAnswer = calculate(value1, value2);
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export default () => {
  gameEngine(startCalcGame, 'Answer "yes" if number even otherwise answer "no".');
};
