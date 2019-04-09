#!/usr/bin/env node

import greeting from '..';
import startGame from '../startGame';
import evenCheck from '../games/evenCheck';

greeting('Answer "yes" if number even otherwise answer "no".');
startGame(evenCheck);
