import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const showFailMessage = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export default (getGameData, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  const iteration = (correctAnswerCount) => {
    if (correctAnswerCount === 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    const gameData = getGameData();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    const answer = askQuestion(question);
    if (answer === correctAnswer) {
      console.log('Correct!');
      return iteration(correctAnswerCount + 1);
    }
    return showFailMessage(answer, correctAnswer, name);
  };
  return iteration(0);
};
