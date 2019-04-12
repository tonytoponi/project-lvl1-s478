import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const correctAnswersToWin = 3;

export default (getGameData, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  const iteration = (correctAnswerCount) => {
    if (correctAnswerCount === correctAnswersToWin) {
      return console.log(`Congratulations, ${name}!`);
    }
    const gameData = getGameData();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      return iteration(correctAnswerCount + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return console.log(`Let's try again, ${name}!`);
  };
  return iteration(0);
};
