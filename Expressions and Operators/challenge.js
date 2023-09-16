// swap 2 numbers

// var a = 5;
// var b = 10;

// output b=5; a=10

// var c = b; //c = 10
// b = a; // b = 5;
// a = c;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);


// sol 4: swap without using 3rd variable

var a = 5;
var b = 10;

// // output b=5; a=10

a = a + b; // a = 15
b = a - b; // b = 5; 
a = a - b; // a = 10;

console.log("the value of a is " + a);
console.log("the value of b is " + b);
