
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