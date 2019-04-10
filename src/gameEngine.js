import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const greetUser = (rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  return name;
};

const showSuccessMessage = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

const showFailMessage = () => console.log('Correct!');

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export default (game, rules) => {
  const name = greetUser(`${rules}`);
  const iteration = (correctAnswerCount) => {
    if (correctAnswerCount === 3) {
      console.log(`Congratulations, ${name}!`);
      return 0;
    }
    const gameData = game();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    const answer = askQuestion(question);
    if (answer === correctAnswer) {
      showSuccessMessage();
      return iteration(correctAnswerCount + 1);
    }
    showFailMessage(answer, correctAnswer, name);
    return 0;
  };
  return iteration(0);
};
