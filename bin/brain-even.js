#!/usr/bin/env node
import engine from '../src/engine.js';
import even from '../src/games/even.js';

const DESC = 'Answer "yes" if the number is even, otherwise answer "no".';

engine(DESC, even);
