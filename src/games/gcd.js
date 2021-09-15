import { getRandomInteger } from '../utils.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const startGameGcd = () => {
  const num1 = getRandomInteger(1, 10);
  const num2 = getRandomInteger(1, 10);
  const curAnswer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;

  return [curAnswer.toString(), question];
};

export default startGameGcd;
