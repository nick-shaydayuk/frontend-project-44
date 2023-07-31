#!/usr/bin/env node

import { playGame, getRandomNumber } from './utils.js';

const rules = 'What is the result of the expression?';

const getCorrectAnswer = (num1, sign, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      break;
  }
}

const generateRound = () => {
  const mathOperator = ['+', '-', '*'];
  const getMathOperator = mathOperator[getRandomNumber(0, mathOperator.length - 1)];
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const question = `${number1} ${getMathOperator} ${number2}`;
  const correctAnswer = getCorrectAnswer(number1, getMathOperator, number2).toString();
  return [question, correctAnswer];
};

const startBrainCalc = () => {
  playGame(rules, generateRound);
};

startBrainCalc();
