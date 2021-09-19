#!/usr/bin/env node
import startEngine from '../src/engine.js';
import startGameCalculate, { DESC } from '../src/games/calc.js';

startEngine(DESC, startGameCalculate);
