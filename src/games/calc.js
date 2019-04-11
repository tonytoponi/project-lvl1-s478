import { cons, car, cdr } from 'hexlet-pairs';
import gameEngine from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const getRandomOperator = () => {
  const signSelector = getRandomNumber(0, 3);
  const operators = [cons((a, b) => a + b, '+'), cons((a, b) => a - b, '-'), cons((a, b) => a * b, '*'), cons((a, b) => a / b, '/')];
  return operators[signSelector];
};

const getCalcGameData = () => {
  const value1 = getRandomNumber(0, 10);
  const value2 = getRandomNumber(0, 10);
  const operator = getRandomOperator();
  const calculate = car(operator);
  const operatorSign = cdr(operator);
  const question = `${value1} ${operatorSign} ${value2}`;
  const correctAnswer = calculate(value1, value2).toString();
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export default () => {
  const calcGameRules = 'What is the result of the expression?';
  gameEngine(getCalcGameData, calcGameRules);
};
