#!/usr/bin/env node
import startEngine from '../src/engine.js';
import startGamePrime, { DESC } from '../src/games/prime.js';

startEngine(DESC, startGamePrime);
