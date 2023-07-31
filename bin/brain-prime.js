#!/usr/bin/env node

import { playGame, getRandomNumber } from './utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 0 || num === 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const trueAnswer = isPrime(question) === true ? 'yes' : 'no';
  return [question, trueAnswer];
};

const startBrainPrime = () => {
  playGame(rules, generateRound);
};

startBrainPrime();
