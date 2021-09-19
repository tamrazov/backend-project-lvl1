import { getRandomInteger } from '../utils.js';

export const DESC = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const startGameEven = () => {
  const num = getRandomInteger(1, 10);
  const answer = isEven(num) ? 'yes' : 'no';

  return [answer, num];
};

export default startGameEven;
