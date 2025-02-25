alert("Calculator");
confirm("Continue?")

var num1 = parseInt(prompt("Number 1"));
var num2 = parseInt(prompt("Number 2"));
document.write("Addition: " + (num1 + num2));
document.write("<br>");

//var num1=parseInt(prompt("Number 1"));
//var num2=parseInt(prompt("Number 2"));
document.write("Substration: " + (num1 - num2));
document.write("<br>");

//var num1=parseInt(prompt("Number 1"));
//var num2=parseInt(prompt("Number 2"));
document.write("Multiplication: " + (num1 * num2));
document.write("<br>");

//var num1=parseInt(prompt("Number 1"));
//var num2=parseInt(prompt("Number 2"));
document.write("Division: " + (num1 / num2));

let isAdult = true;
let hasTicket = false;
console.log(isAdult && hasTicket); // AND: true only if both are true
console.log(isAdult || hasTicket); // OR: true if either is true
console.log(!isAdult); // NOT: inverts the boolean value

let symbol = Symbol("description");
console.log(symbol);

let a = 5;
let b = 10;
console.log("value of a "+a+" and value of b "+b);
console.log("a==b "+(a == b)); // Equal to (value)
console.log("a===b "+(a === b)); // Strict equal to (value and type)
console.log("a!=b "+(a != b)); // Not equal to
console.log("a!==b "+(a !== b)); // Strict not equal to
console.log("a>b "+(a > b)); // Greater than
console.log("a<b "+(a < b)); // Less than
