
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
 //I first left it blank and was prompted to enter value then entered my name

 //Print to console
 console.log(name);
//Array of Monthly Expenses
 var monthlyExpenses = ["Rent", "Utilities", "Car", "Loan Payments"];
 //Cosole log monthlyExpenses
 console.log(monthlyExpenses);

 //Ask Expenses amounts (I verified that values were showing on the console by inputting different amounts and checking the console)
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
 console.log(rent+ " dollars for rent");
 var utilities = 200;
 console.log(utilities+ " dollars for utilities");
 var car = 500;
 console.log(car+ " dollars for car");
 var loanPayments = 300;
 console.log(loanPayments+ " dollars for loan payments");

 //Calculate Total Monthly Expenses
 var totalMonthlyExpenses = rent + utilities + car + loanPayments;
 console.log(totalMonthlyExpenses+ " dollars in total monthly expenses");
 //Monthly expenses total to 2000 printed to console log

 var totalMonthlyIncome = 2500;
 //vacation costs 600
 if(totalMonthlyIncome - totalMonthlyExpenses >= 600){
  console.log("You can go on the vacation");
 }else{
  console.log("You will have to wait");
 }
 //Conditional statement to see if you can go on vacation
 //console log printed You will have to wait

 var netRevenueMonthly = totalMonthlyIncome - totalMonthlyExpenses;
 console.log(netRevenueMonthly+ " dollars in net monthly revenue");
 //calculated net revenue monthly
 //console log printed - 500 dollars

 //If you wait two months can you go on this vacation
 if(totalMonthlyIncome - totalMonthlyExpenses >= 600){
  console.log("You can go on the vacation");
  //If we save netRevenueMonthly for two months
 }else if(netRevenueMonthly * 2 >= 600){
  console.log("Now you have enough money to go!!");
 }else{
  console.log("You will have to wait");
 }
 //console log printed - Now you have enough money to go!! since netRevenueMonthly*2 is >= 600

 //using logical operator || is easier to write
 if(totalMonthlyIncome - totalMonthlyExpenses >= 600 || netRevenueMonthly * 2 >= 600){
  console.log("You can go on the vacation");
 }else {
  console.log("You will have to wait");
 }
 //console log printed - You can go on the vacation since netRevenueMonthly*2 is >= 600

 //ternary operator to write earlier conditional statement
 var vacation;
 vacation = (totalMonthlyIncome - totalMonthlyExpenses >= 600) ? "You can go on the vacation" : "You will have to wait";
 console.log(vacation);
//console log printed - You will have to wait since 500 is not >= 600