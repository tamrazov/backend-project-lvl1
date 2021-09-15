import { getRandomInteger } from '../utils.js';

export const getProgression = (start, step, length) => {
  const result = [start];

  for (let i = 0; i < length; i += 1) {
    result.push(result[i] + step);
  }

  return result;
};

const startGameProgression = () => {
  const lengthProgression = getRandomInteger(5, 10);
  const startProgression = getRandomInteger(0, 100);
  const stepProgression = getRandomInteger(1, 10);
  const deletedItem = getRandomInteger(0, lengthProgression - 1);

  const progression = getProgression(startProgression, stepProgression, lengthProgression);
  const curAnswer = progression.splice(deletedItem, 1, '..');

  return [curAnswer.toString(), progression.join(' ')];
};

export default startGameProgression;
