#!/usr/bin/env node
console.log("Welcome to the Brain Games!");
import readlineSync from "readline-sync";

function isEven(number) {
  return number % 2 === 0;
}

let number;
let isNumberEven;
let isAnswerCorrect = true;

const checkAnswer = (answer) => {
  if (isNumberEven && answer === "yes") {
    console.log("Correct!");
  } else if (isNumberEven && answer === "no") {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    isAnswerCorrect = false;
    return;
  } else if (!isNumberEven && answer === "yes") {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    isAnswerCorrect = false;
    return;
  } else if (!isNumberEven && answer === "no") {
    console.log("Correct!");
  } else {
    console.log("Enter a correct answer next time!");
    isAnswerCorrect = false;
  }
};

const defineNumber = () => {
  number = Math.floor(Math.random() * 100);
  isNumberEven = isEven(number);
};

let userName = readlineSync.question("May I have your name? ");

console.log("Hi " + userName + "!");

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i++) {
  if (!isAnswerCorrect) break;
  defineNumber();
  let answer = readlineSync.question(`Question: ${number} `);
  console.log(`Your answer: ${answer}`);
  checkAnswer(answer);
}

if (isAnswerCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
