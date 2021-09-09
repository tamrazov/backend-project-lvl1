import readlineSync from 'readline-sync';
import { randomInteger, isEven } from '../utils.js';

const brainEven = () => {
  const num = randomInteger(1, 10);
  const curAnswer = isEven(num) ? 'yes' : 'no';
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  return [answer, curAnswer];
};

export default brainEven;
