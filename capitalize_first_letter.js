// 1 Create a variable to store thir name entered in a prompt
var name = prompt("What is your name?");

// 2 Capitalize the first letter of the name
var FirstChar = name.slice(0,1);
var RestOfName = name.slice(1,name.length);

// Use capitalized version of thier name to greet them
window.alert("Hello " + FirstChar.toUpperCase() + RestOfName + "!");
