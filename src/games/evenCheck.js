import showSuccessMessage from '../showSuccessMessage';
import showFailMessage from '../showFailMessage';
import getRandomNumber from '../getRandomNumber';
import showQuestion from '../showQuestion';

export default (name) => {
  const questonNumber = getRandomNumber(0, 100);
  const correctAnswer = questonNumber % 2 === 0 ? 'yes' : 'no';
  const answer = showQuestion(questonNumber);
  if (answer === correctAnswer) {
    showSuccessMessage();
    return true;
  }
  showFailMessage(answer, correctAnswer, name);
  return false;
};
