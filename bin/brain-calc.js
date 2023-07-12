#!/usr/bin/env node
console.log("Welcome to the Brain Games!");
import readlineSync from "readline-sync";

function isEven(number) {
  return number % 2 === 0;
}

let number1;
let number2;
let operator;
let expression;
let expressionResult;
let isAnswerCorrect = true;

const checkAnswer = (answer) => {
  if (parseInt(answer) === expressionResult) {
    console.log("Correct!");
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${expressionResult}'`
    );
    isAnswerCorrect = false;
  }
};

const randomArithmeticOperator = () => {
  let operators = ["+", "-", "*", "/"];
  let randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const defineExpression = () => {
  number1 = Math.floor(Math.random() * 100);
  number2 = Math.floor(Math.random() * 100);
  operator = randomArithmeticOperator();
  expression = `${number1} ${operator} ${number2}`;
  switch (operator) {
    case "+":
      expressionResult = number1 + number2;
      break;
    case "-":
      expressionResult = number1 - number2;
      break;
    case "*":
      expressionResult = number1 * number2;
      break;
    case "/":
      expressionResult = number1 / number2;
      break;
  }
};

let userName = readlineSync.question("May I have your name? ");

console.log("Hi " + userName + "!");

console.log('What is the result of the expression?');

for (let i = 0; i < 3; i++) {
  if (!isAnswerCorrect) break;
  defineExpression();
  let answer = readlineSync.question(`Question: ${expression} `);
  console.log(`Your answer: ${answer}`);
  checkAnswer(answer);
}

if (isAnswerCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
