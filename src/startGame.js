import readlineSync from 'readline-sync';

export default (gameType, rule) => {
  console.log(`${rule}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  if (gameType === '') {
    return 0;
  }
  const iter = (correctAnswerCount) => {
    if (correctAnswerCount === 3) {
      console.log(`Congratulations, ${name}!`);
      return 0;
    }
    if (gameType(name)) {
      return iter(correctAnswerCount + 1);
    }
    return 0;
  };
  return iter(0);
};
