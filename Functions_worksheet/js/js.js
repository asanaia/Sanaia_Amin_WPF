
 /*
Amin Sanaia
SDI Section #1
Functions Worksheet
4-28-2015
 */

// alert("Test");

 //Calculate the circumference of a circle
var totalCircumference = calcCircumference(6, 3.14);
 function calcCircumference(radius, pi){
  var circumference = radius * pi * 2;
  return circumference;
}

console.log("The circumference of the circle is "+totalCircumference);

 //Calculate how many bee stings are needed to kill an animal
var totalBeeStingsToKill = calcBeeStingsToKill(50, 8.666666667);
 function calcBeeStingsToKill(weight, beeStings){
  var beeStingsToKill = weight * beeStings;
  return beeStingsToKill;
 }
 console.log("It takes "+totalBeeStingsToKill+" bee stings to kill this animal.");