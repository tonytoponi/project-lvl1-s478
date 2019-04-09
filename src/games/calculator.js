import { car, cdr } from 'hexlet-pairs';
import showSuccessMessage from '../showSuccessMessage';
import showFailMessage from '../showFailMessage';
import getRandomNumber from '../getRandomNumber';
import showQuestion from '../showQuestion';
import returnRandomOperator from '../returnRandomOperator';

export default (name) => {
  const value1 = getRandomNumber(0, 10);
  const value2 = getRandomNumber(0, 10);
  const operator = returnRandomOperator();
  const calculate = car(operator);
  const operatorSign = cdr(operator);
  const questonText = `${value1} ${operatorSign} ${value2}`;
  const answer = parseInt(showQuestion(questonText), 10);
  const correctAnswer = calculate(value1, value2);
  if (answer === correctAnswer) {
    showSuccessMessage();
    return true;
  }
  showFailMessage(answer, correctAnswer, name);
  return false;
};
