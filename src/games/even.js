import readlineSync from 'readline-sync';
import { randomInteger, isEven } from '../utils.js';

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i of NUMBER_OF_TIMES) {
    const num = randomInteger(1, 10);
    const curAnswer = isEven(num) ? 'yes' : 'no';

    console.log(`Question: ${num}`);
    const answer = readlineSync.question(`Your answer: `);

    if (answer === curAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${curAnswer}'.`);
      break;
    }
  }
};

brainEven();
