
 /*
Amin Sanaia
SDI Section #1
Conditionals Assignment
4-22-2015
 */

// alert("Test");
//Create Calculator to figure out how if you have enough money for vacation after expenses paid
 var intro = prompt("Lets Figure out how if you have enough money for vacation after monthly expenses \nWhat is your name?");
 if(name === ""){
  //If the user leaves it blank it will prompt to enter a value
  name = prompt("Please do not leave blank.\n What is your name?");
 }

 //Print to console
 console.log(name);
//Array of Monthly Expenses
 var monthlyExpenses = ["Rent", "Utilities", "Car", "Loan Payments"];
 //Cosole log monthlyExpenses
 console.log(monthlyExpenses);

 //Ask Expenses amounts (I verified that values were showing on the console)
 var rent = prompt("What is the cost of your rent monthly?");
 console.log(rent+ " dollars");
 var utilities = prompt("What is the cost of your utilities monthly?");
 console.log(utilities+ " dollars");
 var car = prompt("What is the cost of your car monthly?");
 console.log(car+ " dollars");
 var loanPayments = prompt("What is the cost of your loan payments monthly?");
 console.log(loanPayments+ " dollars");

//I entered for rent-1000 / utilities-200 / car-500 / loan-300 and assigned them below:
 var rent = 1000;
 console.log(rent+ " dollars");
 var utilities = 200;
 console.log(utilities+ " dollars");
 var car = 500;
 console.log(car+ " dollars");
 var loanPayments = 300;
 console.log(loanPayments+ " dollars");

 //Calculate Total Monthly Expenses
 var totalMonthlyExpenses = rent + utilities + car + loanPayments;
 console.log(totalMonthlyExpenses+ " dollars");
 //Monthly expenses total to 2000

 var totalMonthlyIncome = 2500;
 //vacation costs 600
 if(totalMonthlyIncome - totalMonthlyExpenses >= 600){
  console.log("You can go on the vacation");
 }else{
  console.log("You will have to wait");
 }
 //Conditional statement to see if you can go on vacation
 