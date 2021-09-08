import readlineSync from 'readline-sync';

const COUNT_QUESTIONS = 3;

const engine = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  for (let i = 1; i < COUNT_QUESTIONS; i += 1) {
    console.log(`Question: ${num}`);
    const answer = readlineSync.question(`Your answer: `);

    if (answer === curAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${curAnswer}'.`);
      break;
    }
  }
}
