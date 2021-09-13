#!/usr/bin/env node
import startEngine from '../src/engine.js';
import playingProgression from '../src/games/progression.js';

const DESC = 'What number is missing in the progression?';

startEngine(DESC, playingProgression);
