import showSuccessMessage from '../showSuccessMessage';
import showFailMessage from '../showFailMessage';
import getRandomNumber from '../getRandomNumber';
import showQuestion from '../showQuestion';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export default (name) => {
  const value1 = getRandomNumber(0, 100);
  const value2 = getRandomNumber(0, 100);
  const questonText = `${value1} ${value2}`;
  const answer = parseInt(showQuestion(questonText), 10);
  const correctAnswer = gcd(value1, value2);
  if (answer === correctAnswer) {
    showSuccessMessage();
    return true;
  }
  showFailMessage(answer, correctAnswer, name);
  return false;
};
