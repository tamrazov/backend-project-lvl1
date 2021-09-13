import { getRandomInteger } from '../utils.js';

export const getProgression = (start, step, count) => {
  let number = start;
  const result = [];

  for (let i = 0; i < count; i += 1) {
    number += step;
    result.push(number);
  }

  return result;
};

const playingProgression = () => {
  const countProgression = getRandomInteger(5, 10);
  const startProgression = getRandomInteger(0, 100);
  const stepProgression = getRandomInteger(1, 10);
  const deletedItem = getRandomInteger(0, countProgression - 1);

  const progression = getProgression(startProgression, stepProgression, countProgression);
  const curAnswer = progression.splice(deletedItem, 1, '..');
  const question = `Question: ${progression.join(' ')}`;

  return [curAnswer.toString(), question];
};

export default playingProgression;
