import { getRandomInteger } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const num = getRandomInteger(1, 10);
  const curAnswer = isEven(num) ? 'yes' : 'no';
  const question = `Question: ${num}`;

  return [curAnswer, question];
};

export default brainEven;
