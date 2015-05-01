
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
  //re prompt the user validate the prompt is not blank and is a number
  distance = prompt("Please do not leave blank and make sure it is a number\n What is the distance to the destination city?");
 }
 console.log("The total distance to your destination is "+distance+" miles");

 //Prompt for driving speed for the trip
 var speed = prompt("How fast will you be driving?");
 while(speed==="" || isNaN(speed)){
  //re prompt the user validate the prompt is not blank and is a number
  speed = prompt("Please do not leave blank and make sure it is a number\n How fast will you be driving?");
 }
 console.log("You will be driving at "+speed+" mph");

 //Calculate amount of time the trip will take in minutes
 //Using an Anonymous Function
 var totalTripTime = calcTripTime(distance, speed);
 function calcTripTime(distance, speed){
  var tripTime = distance / speed * 60;
  return tripTime;
 }
 console.log("It will take you "+totalTripTime+" minutes to get to your destination city!");

/*
In the prompt for user name I left it blank and I was asked not to leave it blank so I entered my name
"Amin"
In the prompt for distance I left it blank and was prompted not to leave it blank then I entered cat and again I was prompted to not leave it blank or use numbers so I entered 100 -
"The total distance to your destination is 100 miles"
In the prompt for speed I left it blank was prompted not to leave it blank then I entered mouse and again I was prompted to not leave it blank or use numbers so I entered 50 -
"You will be driving at 50 mph"
Console log -
"It will take you 120 minutes to get to your destination city!"
I used calculator to double check the numbers 100/50 *60 = 120
 */

 //Let's ask the user if there will be a stop on the way and calculate that in our calculator
 var tripStop = prompt("How long will that stop be in minutes?");
 while(tripStop==="" || isNaN(tripStop)){
  //re prompt the user to validate the prompt is not blank and is a number
  tripStop = prompt("Please do not leave blank and make sure it is a number\n How long will that stop be in minutes?");
 }
 console.log("You will be making a stop for "+tripStop+" minutes");

 //Calculate amount of time the trip will take with a stop in minutes
 //Using a Normal Function

var total = calcTotalTripTimeWstop(distance, speed, tripStop);
function calcTotalTripTimeWstop(distance, speed, tripStop){
 var totalTripTimeWstop;
 var totalTripTimeWstop = (distance / speed) * 60 + parseInt(tripStop);
 console.log("Your trip will take "+totalTripTimeWstop+" minutes");
}

 /*
  In the prompt for user name I left it blank and I was asked not to leave it blank so I entered my name
  "Amin"
  In the prompt for distance I left it blank and was prompted not to leave it blank then I entered pen and again I was prompted to not leave it blank or use numbers so I entered 100 -
  "The total distance to your destination is 100 miles"
  In the prompt for speed I left it blank was prompted not to leave it blank then I entered mouse and again I was prompted to not leave it blank or use numbers so I entered 50 -
  "You will be driving at 50 mph"
  Console log -
  "It will take you 120 minutes to get to your destination city!"
  In the prompt for how long the stop will be I left it blank and was prompted not to leave it blank then I entered 20 -
  "You will be making a stop for 20 minutes"
  The function console.log - "your trip will take 140 minutes"
  I used calculator to double check the numbers 100/50 *60 +20 = 140
  */