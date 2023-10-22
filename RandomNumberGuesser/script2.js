const prompt = require("prompt-sync")();
const target = Math.round(Math.random() * 100);
let guesses = 0;
alert("Let's Play!");
console.log("welcome to Random Guess Number Generator");
while (true) {
  guesses++;
  const guess = Number(prompt("Guess the Number(1-100)??"));
  if (guess > target) {
    console.log("your guess is too high!!");
  } else if (guess < target) {
    console.log("your guess is too low!");
  } else {
    console.log("you guessed it right!!");
    break;
  }
}
console.log("you guessed in " + guesses + " guesses!");
