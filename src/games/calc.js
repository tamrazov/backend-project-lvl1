import readlineSync from 'readline-sync';
import { randomInteger, randElemFromArr } from '../utils.js';

const getCurrentValue = (num1, num2, expression) => {
  switch (true) {
    case expression === '+':
      return num1 + num2;
    case expression === '-':
      return num1 - num2;
    case expression === '*':
      return num1 * num2;
    default:
      return null;
  }
};

const brainCalc = () => {
  const expressionsArr = ['+', '-', '*'];
  const expression = randElemFromArr(expressionsArr);
  const num1 = randomInteger(1, 10);
  const num2 = randomInteger(1, 10);
  const curAnswer = getCurrentValue(num1, num2, expression);

  console.log(`Question: ${num1} ${expression} ${num2}`);
  const answer = readlineSync.question('Your answer: ');

  return [answer, curAnswer];
};

export default brainCalc;
