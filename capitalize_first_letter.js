// 1 Create a variable to store thir name entered in a prompt
var name = prompt("What is your name?");

// 2 Capitalize the first letter of the name
var FirstLetter = name.slice(0,1);
var EndName = name.slice(1,50);

// Use capitalized version of thier name to greet them
window.alert("Hello " + FirstLetter.toUpperCase() + EndName + "!");
