#!/usr/bin/env node
import startEngine from '../src/engine.js';
import startGameProgression, { DESC } from '../src/games/progression.js';

startEngine(DESC, startGameProgression);
