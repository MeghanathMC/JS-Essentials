const prompt = require("prompt-sync")();
console.log("welcome to Programming Languages Quiz!!");
let correctAnswers = 0;
const totalQuestions = 5;
const question1 = prompt("who developed Javascript Programming Language?");
const answer1 = "BRENDEN EICH";
if (question1.toUpperCase() === answer1) {
  console.log("Hurray, correct answer!");
  correctAnswers++;
} else {
  console.log("oops,wrong answer!");
}

const question2 = prompt("which was the first Programming Language?");
const answer2 = "FORTRAN";
if (question2.toUpperCase() === answer2) {
  console.log("Hurray, correct answer!");
  correctAnswers++;
} else {
  console.log("oops,wrong answer!");
}

const question3 = prompt("what does html stands for?");
const answer3 = "hyper text programming language";
if (question3.toLowerCase() === answer3) {
  console.log("Hurray, correct answer!");
  correctAnswers++;
} else {
  console.log("oops,wrong answer!");
}

const question4 = prompt("C programming language was developed by?");
const answer4 = "dennis ritchie";
if (question4.toLowerCase() === answer4) {
  console.log("Hurray, correct answer!");
  correctAnswers++;
} else {
  console.log("oops,wrong answer!");
}

const question5 = prompt("who developed Java Programming Language?");
const answer5 = "james gosling";
if (question5.toLowerCase() === answer5) {
  console.log("Hurray, correct answer!");
  correctAnswers++;
} else {
  console.log("oops,wrong answer!");
}
if (correctAnswers > 0) {
  console.log("you got" + correctAnswers + " correct answers!");
} else {
  console.log("oops!!,you got zero correct answers!");
}
let totalPercentage = (correctAnswers / totalQuestions) * 100;
console.log("you got", totalPercentage, "%");
