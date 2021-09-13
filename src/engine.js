import readlineSync from 'readline-sync';

const COUNT_QUESTIONS = 3;

const startEngine = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < COUNT_QUESTIONS; i += 1) {
    const [curAnswer, question] = game();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === curAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${curAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startEngine;
