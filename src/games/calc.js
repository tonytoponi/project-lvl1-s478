import { cons, car, cdr } from 'hexlet-pairs';
import gameEngine from '../gameEngine';
import getRandom from '../getRandom';

const operators = [
  cons((a, b) => a + b, '+'),
  cons((a, b) => a - b, '-'),
  cons((a, b) => a * b, '*'),
  cons((a, b) => a / b, '/')];

const getRandomOperator = () => {
  const maxIndex = 3;
  const signSelector = getRandom(0, maxIndex);
  return operators[signSelector];
};

const getCalcGameData = () => {
  const value1 = getRandom(0, 10);
  const value2 = getRandom(0, 10);
  const operatorData = getRandomOperator();
  const calculate = car(operatorData);
  const operator = cdr(operatorData);
  const question = `${value1} ${operator} ${value2}`;
  const correctAnswer = calculate(value1, value2).toString();
  return cons(question, correctAnswer);
};

export default () => {
  const calcGameDescription = 'What is the result of the expression?';
  gameEngine(getCalcGameData, calcGameDescription);
};
