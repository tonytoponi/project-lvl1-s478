#!/usr/bin/env node

import greeting from '..';
import startGame from '../startGame';
import calculator from '../games/calculator';

greeting('What is the result of the expression?');
startGame(calculator);
