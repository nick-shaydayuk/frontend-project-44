#!/usr/bin/env node

import { playGame, getRandomNumber } from './utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (num1, num2) => {
  if (num2 > num1) return calculateGCD(num2, num1);
  if (!num2) return num1;
  return calculateGCD(num2, num1 % num2);
};

const generateRound = () => {
  const generateNumber1 = getRandomNumber(1, 50);
  const generateNumber2 = getRandomNumber(1, 50);
  const question = `${generateNumber1} ${generateNumber2}`;
  const correctAnswer = calculateGCD(generateNumber1, generateNumber2).toString();
  return [question, correctAnswer];
};

const startBrainGCD = () => {
  playGame(rules, generateRound);
};

startBrainGCD();
