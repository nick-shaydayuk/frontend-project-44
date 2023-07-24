#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

let number1;
let number2;
let expression;
let greatestCommonDivisor;
let isAnswerCorrect = true;

const checkAnswer = (answer, userName) => {
  if (parseInt(answer) === greatestCommonDivisor) {
    console.log('Correct!');
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${greatestCommonDivisor}'`
    );
    console.log(`Let's try again, ${userName}!`);
    isAnswerCorrect = false;
  }
};

const findGreatestCommonDivisor = (num1, num2) => {
  let divisor = 1;
  const smallerNum = Math.min(num1, num2);

  for (let i = 1; i <= smallerNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

const defineExpression = () => {
  number1 = Math.floor(Math.random() * 100);
  number2 = Math.floor(Math.random() * 100);
  expression = `${number1} ${number2}`;
  greatestCommonDivisor = findGreatestCommonDivisor(number1, number2);
};

const userName = readlineSync.question('May I have your name? ');

console.log('Hello, ' + userName);

console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3; i += 1) {
  if (!isAnswerCorrect) break;
  defineExpression();
  const answer = readlineSync.question(`Question: ${expression} `);
  console.log(`Your answer: ${answer}`);
  checkAnswer(answer, userName);
}

if (isAnswerCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
