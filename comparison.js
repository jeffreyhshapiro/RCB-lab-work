var firstNumber = prompt("Enter a number between 1 and 100. If your input is smaller than the randomly generated number, then you win.")
var secondNumber = Math.random() * 100

alert("The second number is " + secondNumber);


if (isNaN(firstNumber)) {
  var firstNumber = prompt("Your input was not a number. Please enter a number.");
} else if (firstNumber > 100) {
  var firstNumber = prompt("Your input was greater than 100.  Please enter a number between 1 and 100 inclusive.")
} else if (firstNumber < 1) {
  var firstNumber = prompt("Bro can you even math?")
} else if (firstNumber < secondNumber) {
  alert("Congratulations you won! " + firstNumber + "is smaller than" + secondNumber);
} else {
  alert("You didn't win, better luck next time.");
}