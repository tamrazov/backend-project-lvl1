#!/usr/bin/env node
import startEngine from '../src/engine.js';
import startGameEven from '../src/games/even.js';

const DESC = 'Answer "yes" if the number is even, otherwise answer "no".';

startEngine(DESC, startGameEven);
