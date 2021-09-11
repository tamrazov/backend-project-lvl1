#!/usr/bin/env node
import engine from '../src/engine.js';
import calc from '../src/games/calc.js';

const DESC = 'What is the result of the expression?';

engine(DESC, calc);
