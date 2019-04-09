import startGame from './startGame';
import calculator from './games/calculator';
import evenCheck from './games/evenCheck';
import gcdCheck from './games/gcdCheck';

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

export const brainGcd = () => {
  greeting();
  startGame(gcdCheck, 'Find the greatest common divisor of given numbers.');
};
