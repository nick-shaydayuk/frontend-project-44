#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const playPrimeGame = () => {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");

  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * 100) + 1;
    const userAnswer = readlineSync.question(`Question: ${number} `);

    const correctAnswer = isPrime(number) ? "yes" : "no";

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

playPrimeGame();
