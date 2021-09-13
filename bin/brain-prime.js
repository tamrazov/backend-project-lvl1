#!/usr/bin/env node
import startEngine from '../src/engine.js';
import playingPrime from '../src/games/prime.js';

const DESC = 'Answer "yes" if given number is prime. Otherwise answer "no".';

startEngine(DESC, playingPrime);
