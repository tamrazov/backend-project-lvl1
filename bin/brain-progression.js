#!/usr/bin/env node
import startEngine from '../src/engine.js';
import startGameProgression from '../src/games/progression.js';

const DESC = 'What number is missing in the progression?';

startEngine(DESC, startGameProgression);
