#!/usr/bin/env node
import engine from '../src/engine.js';
import progression from '../src/games/progression.js';

const DESC = 'What number is missing in the progression?';

engine(DESC, progression);
