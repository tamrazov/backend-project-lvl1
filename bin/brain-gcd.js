#!/usr/bin/env node
import startEngine from '../src/engine.js';
import startGameGcd, { DESC } from '../src/games/gcd.js';

startEngine(DESC, startGameGcd);
