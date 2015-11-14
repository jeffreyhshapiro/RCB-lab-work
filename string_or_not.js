var stringInQuestion = prompt("Input anything you want!")

stringInQuestion = parseInt(stringInQuestion);
if (isNaN(stringInQuestion)) {
  alert("You have entered a string.");
} else {
  alert("You have entered not a string.");
}
