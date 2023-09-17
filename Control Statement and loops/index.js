// write a program that works out whether if a given year is a leap year or not?
// var year = 2020;
// debugger;
// if(year % 4 === 0){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       console.log("The year " + year + " is a leap year");
//     }else{
//       console.log("The year " + year + " is not a leap year");
//     }
//   }else{
//     console.log("The year " + year + " is a leap year");
//   }
// }else{
//   console.log("The year " + year + " is not a leap year");
// }


// total 5 falsy values in javascript 0,"",undefined,null,NaN,false** is false anyway
// var score=6
// if(score = 5){
//   console.log("OMG, we loss the game ");
// }else{
//   console.log("Yay, We won the game ");
// }

// Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands
// var age = 17;
// if(age >= 18){
//   console.log("you are eligible to vote");
// }else{
//   console.log("you are not eligible to vote");
// }

// var age = 18;
// console.log((age >= 18) ? "you can vote" : "you can't vote");




//  switch Statement 1st without break statment 
// Find the Area of circle, triangle and rectangle?

// var area = "square" ;
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//   console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//   console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//   console.log("the area of the rectangle is : " + (l*b));
// }else{
//   console.log("please enter valid data");
// }

// var area = "dsfsad" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//   case 'circle': 
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }   



// While Loop Statement

// var num=20;
// // block scope 
// while(num <= 10){
//   console.log(num); //infinte loop
//   num++;
// }

// Do-While Loop Statement
// var num = 20;
// do{
//   debugger;
//   console.log(num); //infinte loop
//   num++;
// }while(num <= 10);

// For Loop 

// for(var num = 0; num <= 10; num++){
//     debugger;
//     console.log(num);
// }


/****  Functions in JavaScript ****/

// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);


// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }
// // 

// Defining a function does not execute it. A JavaScript function is executed when "something" invokes it (calls it).


// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }

// sum();

//  Anonymous Function
// A function expression is similar to and has the same syntax as a function declaration One can define "named" function expressions (where the name of the expression might be used in the call stack for example) or "anonymous" function expressions.


// var funExp = function(a,b){
//   return total = a+b;
// }

// var sum = funExp(15,15);
// var sum1 = funExp(20,15);

// console.log(sum > sum1 );




// var => Function scope 
// let and const => Block Scope 

// function biodata() {
//   const myFirstName = "Vinod";
//   console.log(myFirstName);
//    if(true){
//     const myLastName = "thapa";
//    }
//   // console.log('innerOuter ' + myLastName);
// }
// console.log(myFirstName);
// biodata();




// // Default Parameters
// function mult(a,b=5){
//   return a*b;
// }
// console.log(mult(3));


 
// Fat Arrow Function 

// console.log(sum()); 

// function sum() {
//   let a = 5; b = 6;
//   let sum = a+b;
//  return `the sum of the two number is ${sum}`;
// }

// convert in into Fat Arrow Function 

// const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum()); 


// Spread Operator

const colors = ['red', 'green', 'blue', 'white', 'pink'];

const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];

const MyFavColors = [ ...colors, 'yellow', 'black'];

console.log(MyFavColors);