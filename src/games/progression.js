import readlineSync from 'readline-sync';
import { randomInteger, getProgression } from '../utils.js';

const brainProgression = () => {
  const countProgression = randomInteger(5, 10);
  const startProgression = randomInteger(0, 100);
  const stepProgression = randomInteger(1, 10);
  const deletedItem = randomInteger(0, countProgression - 1);

  const progression = getProgression(startProgression, stepProgression, countProgression);
  const curAnswer = progression.splice(deletedItem, 1, '..');

  console.log(`Question: ${progression.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');

  return [+answer, +curAnswer];
};

export default brainProgression;
