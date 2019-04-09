import readlineSync from 'readline-sync';

export default (number) => {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
