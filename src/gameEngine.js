import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsToWin = 3;

export default (getGameData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);

  const iteration = (correctAnswerCount) => {
    if (correctAnswerCount === roundsToWin) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const gameData = getGameData();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      iteration(correctAnswerCount + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  iteration(0);
};
