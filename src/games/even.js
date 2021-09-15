import { getRandomInteger } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const startGameEven = () => {
  const num = getRandomInteger(1, 10);
  const curAnswer = isEven(num) ? 'yes' : 'no';

  return [curAnswer, num];
};

export default startGameEven;
