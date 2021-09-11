import readlineSync from 'readline-sync';
import { randomInteger, gcd } from '../utils.js';

const brainGcd = () => {
  const num1 = randomInteger(1, 10);
  const num2 = randomInteger(1, 10);
  const curAnswer = gcd(num1, num2);

  console.log(`Question: ${num1} ${num2}`);
  const answer = readlineSync.question('Your answer: ');

  return [+answer, curAnswer];
};

export default brainGcd;
