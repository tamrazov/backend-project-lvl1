#!/usr/bin/env node
import startEngine from '../src/engine.js';
import playingCalculate from '../src/games/calc.js';

const DESC = 'What is the result of the expression?';

startEngine(DESC, playingCalculate);
