
 /*
Amin Sanaia
SDI Section #1
GoTo Training Week #4
4-29-2015
 */

 //alert("test");
 //Create a file that will give us a random number between two numbers
 //Ask the user for the min number
 var minNum = prompt("Let's find a number between two numbers!\n What is the min number?");
 //validate the prompt is not blank and it is a number
 while(minNum===""|| isNaN(minNum)){
  //re prompt the user
  minNum = prompt("Please do not leave blank and only use numbers\n What is the min number?");
 }
/*
Basic structure of a while loop
//Declare a variable
var num = prompt("type in a number");

while( x > 6 ) {  //condition to test
//some sort of change to the variable in our condition to test.
x++;
}
 */

 //Prompt the user for max number
 var maxNum = prompt("What is the max number:");
 //Validate directly after the prompt.
 while(maxNum==="" || isNaN(maxNum)){
  maxNum = prompt("Please do not leave blank and only use numbers\n What is the max value:");

 }

 //What if I wanted to validate words
 //Ask a yes or no question
 var happy = prompt("Are you happy today?");
 //convert to all lowercase
 happy = happy.toLowerCase();
 while(happy !="yes" && happy !="no"){
  happy = prompt("Please only use yes or no.\n Are you happy today?");

 }

 //function call - "go button" that runs the function
 //Arguments go inside of the function call
 var returnedValue = randomizer(minNum, maxNum);

 console.log("Your random number between "+minNum+" and"+maxNum+" is "+returnedValue);

 //create a fucntion to calculate the random number
 //parameters go inside ()
 //parameters are temporary variables that can only be accessed inside of the function.
 //they catch the arguments that are thrown into the function.  It makes code more flexible.
 //we DO NOT want to use main code variables inside of functions

 function randomizer(min, max){

  //generate our random number
  var randomNumber = Math.round(Math.random()*(max-min)+Number(min));
  console.log(randomNumber);
  //console.log(randomNumber)

  //return the value to our main code
  return randomNumber;
 }

