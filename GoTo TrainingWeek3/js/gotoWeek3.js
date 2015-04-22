
 /*
Amin Sanaia
SDI Section #1
GoTo Training Week #3
4-22-2015
 */

 //alert("Test");
 //Create an array of fruit names and then sort it
 //Array - variable that holds multiple variables
 //Index # of an array always starts with 0!!
 var bowlOfFruit = ["apple", "banana", "pear", "peach"];
 //See Whole Array
 console.log(bowlOfFruit)
 //console.log the banana
 console.log(bowlOfFruit[1]);
 //how many items are in an array?
 //length property - access this by using dot syntax (fancy term for use a period
 console.log(bowlOfFruit.length);

 //Count the number of pears in our fruit bowl
 //Create a variable that will keep track of how many pears there are
 var totalNumPears = 0;
 //test each item in the array and check if it is a pear
 //basic structure of a conditional
 //if (condition to test) {code that will run if true}

 //"7" == 7 - true
 //"7" === 7 - false
 //prompts always return strings!!
 if(bowlOfFruit[0] === "pear"){
//This code will run if true
  //Add 1 to the total numbers of pears
  console.log("This item is a pear!");
  totalNumPears++;  //totalNumPears = totalNumPears + 1;
 }else{
  console.log("This fruit is not a pear!");
 }
 if(bowlOfFruit[1] === "pear"){
//This code will run if true
  //Add 1 to the total numbers of pears
  console.log("This item is a pear!");
  totalNumPears++;  //totalNumPears = totalNumPears + 1;
 }else{
  console.log("This fruit is not a pear!");
 }
 if(bowlOfFruit[2] === "pear"){
//This code will run if true
  //Add 1 to the total numbers of pears
  console.log("This item is a pear!");
  totalNumPears++;  //totalNumPears = totalNumPears + 1;
 }else{
  console.log("This fruit is not a pear!");
 }
 if(bowlOfFruit[3] === "pear"){
//This code will run if true
  //Add 1 to the total numbers of pears
  console.log("This item is a pear!");
  totalNumPears++;  //totalNumPears = totalNumPears + 1;
 }else{
  console.log("This fruit is not a pear!");
 }

 console.log("There are "+totalNumPears+" pear(s) in the fruit bowl.")

 //Create another variable to track pears
 var pearNumber = 0;
 //Creat a loop for repetitive code
 // For Loop Structure