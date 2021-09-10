import readlineSync from 'readline-sync';
import { randomInteger, isPrime } from '../utils.js';

const brainPrime = () => {
  const num = randomInteger(1, 10);
  const curAnswer = isPrime(num) ? 'yes' : 'no';

  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  return [answer, curAnswer];
};

export default brainPrime;
