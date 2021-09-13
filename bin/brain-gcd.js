#!/usr/bin/env node
import startEngine from '../src/engine.js';
import playingGcd from '../src/games/gcd.js';

const DESC = 'Find the greatest common divisor of given numbers.';

startEngine(DESC, playingGcd);
