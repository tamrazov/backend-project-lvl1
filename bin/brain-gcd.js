#!/usr/bin/env node
import startEngine from '../src/engine.js';
import startGameGcd from '../src/games/gcd.js';

const DESC = 'Find the greatest common divisor of given numbers.';

startEngine(DESC, startGameGcd);
