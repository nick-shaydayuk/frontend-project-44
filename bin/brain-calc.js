#!/usr/bin/env node

import readlineSync from "readline-sync";

const playCalcGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("What is the result of the expression?");

  let correctAnswers = 0;

  for (let i = 0; i < 3; i++) {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;
    const operator = Math.floor(Math.random() * 3);

    let expression;
    let correctAnswer;

    switch (operator) {
      case 0:
        expression = `${number1} + ${number2}`;
        correctAnswer = number1 + number2;
        break;
      case 1:
        expression = `${number1} - ${number2}`;
        correctAnswer = number1 - number2;
        break;
      case 2:
        expression = `${number1} * ${number2}`;
        correctAnswer = number1 * number2;
        break;
    }

    const userAnswer = readlineSync.question(`Question: ${expression} `);
    console.log(`Your answer: ${userAnswer}`);

    if (Number(userAnswer) === correctAnswer) {
      console.log("Correct!");
      correctAnswers++;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playCalcGame();
