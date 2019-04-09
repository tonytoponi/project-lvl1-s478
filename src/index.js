import startGame from './startGame';
import calculator from './games/calculator';
import evenCheck from './games/evenCheck';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const brainGames = () => {
  startGame('');
};

export const brainEven = () => {
  greeting();
  startGame(evenCheck, 'Answer "yes" if number even otherwise answer "no".');
};

export const brainCalc = () => {
  greeting();
  startGame(calculator, 'What is the result of the expression?');
};
