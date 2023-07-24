#!/usr/bin/env node
import readlineSync from "readline-sync";

const playEvenGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  let correctAnswers = 0;

  for (let i = 0; i < 3; i + 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    const userAnswer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${number}`);
    const isEven = number % 2 === 0;
    const correctAnswer = isEven ? "yes" : "no";

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log("Correct!");
      correctAnswers + 1;
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playEvenGame();
