/*
Amin Sanaia
SDI Section #
GoTo Training Week #2
4-15-2015
 */

//alert("Test");

//Create an age calculator
var name = prompt("Let's figure out how old you are!\nPlease type in your name");
//Use the variable and say hello
alert("Welcome "+name+"!");

//Ask the user what year they were born
var yearBorn = prompt("What year were you born?");

//console.log the answer to check it
console.log(yearBorn);

//Calculate their age

// We need to know the current year
//Harcoded - means type in a specific value
var currentYear = 2015;

//figure out age
var age = currentYear - yearBorn;

//alert the user with their age
alert(name+" you are "+age+" years old.");

//make it complicated!

//figure out a future age
var yearsMore = prompt("How many years in the future would you like to know?");

console.log(yearsMore);

//future age is current age + years in the future
//cast the variable as a number when using +
var futureAge = age + parseInt(yearsMore) ;

console.log(futureAge);

//console.log and alert the final values
console.log("In "+yearsMore+" years, you will be "+futureAge+" .");
alert("In "+yearsMore+" years, you will be "+futureAge+" .")