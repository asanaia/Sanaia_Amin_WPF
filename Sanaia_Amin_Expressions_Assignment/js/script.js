
 /*
Amin Sanaia
SDI Section #1
Expressions Assignment
4-15-2015
 */

//alert("Test");

//Create Calculator for Monthly Tolls Expenses
 var intro = prompt("We can help you calculate your tolls expenses\nLet's get started!\nWhat is your name?");

 alert("Hello "+intro);

 //Ask the user how many tolls do you pass by daily and console log to check it
 var numberOfTolls = prompt("How many tolls do you pass daily?");
 console.log(numberOfTolls);

 //Ask the user the price per toll and console log to check it
 var costPerToll = prompt("What is the cost of each toll?");
 console.log(costPerToll+ " dollars");

 //Calculate the Total Cost Daily of Tolls
 var dailyCostTolls = numberOfTolls * costPerToll;
 console.log(dailyCostTolls+ " dollars");
 alert("Your Daily Tolls Expense is "+ dailyCostTolls+ " dollars");
