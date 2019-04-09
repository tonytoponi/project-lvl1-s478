import showSuccessMessage from '../showSuccessMessage';
import showFailMessage from '../showFailMessage';
import getRandomNumber from '../getRandomNumber';
import showQuestion from '../showQuestion';

export default (name) => {
  const value1 = getRandomNumber(0, 10);
  const value2 = getRandomNumber(0, 10);
  const sign = getRandomNumber(1, 4);
  if (sign === 1) {
    const questonText = `${value1} + ${value2}`;
    const answer = parseInt(showQuestion(questonText), 10);
    const correctAnswer = value1 + value2;
    if (answer === correctAnswer) {
      showSuccessMessage();
      return true;
    }
    showFailMessage(answer, correctAnswer, name);
    return false;
  }
  if (sign === 2) {
    const questonText = `${value1} - ${value2}`;
    const answer = parseInt(showQuestion(questonText), 10);
    const correctAnswer = value1 - value2;
    if (answer === correctAnswer) {
      showSuccessMessage();
      return true;
    }
    showFailMessage(answer, correctAnswer, name);
    return false;
  }
  if (sign === 3) {
    const questonText = `${value1} * ${value2}`;
    const answer = parseInt(showQuestion(questonText), 10);
    const correctAnswer = value1 * value2;
    if (answer === correctAnswer) {
      showSuccessMessage();
      return true;
    }
    showFailMessage(answer, correctAnswer, name);
    return false;
  }
  if (sign === 4) {
    const questonText = `${value1} / ${value2}`;
    const answer = parseInt(showQuestion(questonText), 10);
    const correctAnswer = value1 / value2;
    if (answer === correctAnswer) {
      showSuccessMessage();
      return true;
    }
    showFailMessage(answer, correctAnswer, name);
    return false;
  }
  return 0;
};
