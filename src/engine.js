import readlineSync from 'readline-sync';

const COUNT_QUESTIONS = 3;

const engine = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < COUNT_QUESTIONS; i += 1) {
    const [answer, curAnswer] = game();
    if (answer == curAnswer) {
      console.log('Correct!');
      continue;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${curAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`)
};

export default engine;
