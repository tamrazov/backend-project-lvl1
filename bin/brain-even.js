#!/usr/bin/env node
import startEngine from '../src/engine.js';
import startGameEven, { DESC } from '../src/games/even.js';

startEngine(DESC, startGameEven);
