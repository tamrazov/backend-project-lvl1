#!/usr/bin/env node
import engine from '../src/engine.js';
import gcd from '../src/games/gcd.js';

const DESC = 'Find the greatest common divisor of given numbers.';

engine(DESC, gcd);
