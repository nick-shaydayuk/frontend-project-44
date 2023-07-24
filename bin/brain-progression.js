#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const generateProgression = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 100);
  const difference = Math.floor(Math.random() * 10) + 1;

  const progression = [];
  const hiddenIndex = Math.floor(Math.random() * length);

  for (let i = 0; i < length; i + 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(start + difference * i);
    }
  }

  return {
    progression,
    hiddenNumber: start + difference * hiddenIndex,
  };
};

const playProgressionGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i + 1) {
    const { progression, hiddenNumber } = generateProgression();
    const userAnswer = readlineSync.question(
      `Question: ${progression.join(' ')} `
    );

    if (Number(userAnswer) === hiddenNumber) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

playProgressionGame();
