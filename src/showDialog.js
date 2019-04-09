import getRandomNumber from './getRandomNumber';
import evenCheck from './evenCheck';
import showQuestion from './showQuestion';

export default (name) => {
  const iter = (correctAnswerCount) => {
    if (correctAnswerCount === 3) {
      console.log(`Congratulations, ${name}!`);
      return 0;
    }
    const questonNumber = getRandomNumber(0, 100);
    const correctAnswer = evenCheck(questonNumber);
    const answer = showQuestion(questonNumber);
    if (answer === correctAnswer) {
      console.log('Correct!');
      return iter(correctAnswerCount + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return 0;
  };
  return iter(0);
};
