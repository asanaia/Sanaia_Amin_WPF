
 /*
Amin Sanaia
SDI Section #1
Functions Assignment
4-29-2015
 */

 //alert("test");  Link Tested

 //Let's Make a calculator to see how long it will take to get to another city on a trip
 var name = prompt("Lets Figure out how long it will take to get to another city on a trip \nWhat is your name?");
 //validate the prompt is not blank
 while(name===""){
  //re prompt the user
  name = prompt("Please do not leave blank \n What is your name?");
 }
 console.log(name);
 //validated with loop

 //Prompt for distance to another city and validate with loop
 var distance = prompt("What is the distance to the destination city?");
 while(distance===""  ||  isNaN(distance)){
  //re prompt the user validate the prompt is not bland and is a number
  distance = prompt("Please do not leave blank and make sure it is a number\n What is the distance to the destination city?");
 }
 console.log("The total distance to your destination is "+distance+" miles");

 //Prompt for driving speed for the trip
 var speed = prompt("How fast will you be driving?");
 while(speed==="" || isNaN(speed)){
  //re prompt the user validate the prompt is not bland and is a number
  speed = prompt("Please do not leave blank and make sure it is a number\n How fast will you be driving?");
 }
 console.log("You will be driving at "+speed+" mph");

 //Calculate amount of time the trip will take in minutes
 //Using a Normal Function
 var totalTripTime = calcTripTime(distance, speed);
 function calcTripTime(distance, speed){
  var triptime = distance / speed * 60;
  return triptime;
 }
 console.log("It will take you "+totalTripTime+" minutes to get to your destination city!");

/*
In the prompt for user name I left it blank and I was asked not to leave it blank so I entered my name
"Amin"
In the prompt for distance I left it blank and was prompted not to leave it blank then I entered cat and again I was prompted to not leave it blank or use numbers so I entered 100 -
"The total distance to your destination is 100 miles"
In the prompt for speed I left it bland was prompted not to leave it blank then I entered mouse and again I was prompted to not leave it blank or use numbers so I entered 50 -
"You will be driving at 50 mph"
Console log -
"It will take you 120 minutes to get to your destination city!"
I used calculator to double check the numbers 100/50 *60 = 120

 */
