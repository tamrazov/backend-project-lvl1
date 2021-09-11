#!/usr/bin/env node
import engine from '../src/engine.js';
import prime from '../src/games/prime.js';

const DESC = 'Answer "yes" if given number is prime. Otherwise answer "no".';

engine(DESC, prime);
