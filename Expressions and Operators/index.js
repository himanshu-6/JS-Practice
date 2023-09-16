// var a=5;
// var b=5;
// console.log(b==a);
// console.log("is a and b equal" + a==b) /* it will give false because of the + operator btwn string and a==b */
// //  I will tell you when we will see es6
// console.log(`Is both the a and b are equal : ${a == b}`);


// Arithmetic operators
// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);
// console.log("Remainder Operator " + 27%4);


// Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix ==> x++/x--

// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);

// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = --num + 5; 
// console.log(num);
// console.log(newNum);


// Prefix increment operator means the variable is incremented first and then the expression is evaluated using the new value of the variable.


// Comparison operators
// var a = 30;
// var b = 10;

// Equal (==)
// console.log(a == b);

// Not equal (!=)
// console.log(a != b);

// // Greater than (>)
// console.log(a > b);

// // Greater than or equal (>=)
// console.log(a >= b);

// // Less than (<)
// console.log(a < b);

// // Less than or equal (<=)
// console.log(a <= b);


// Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

var a = 30;
var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.

// console.log(a > b && b > -50 && b < 0);


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

// console.log((a < b) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

// console.log(!((a>0) || (b<0)));
// console.log(!true);


// String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together returning another string that is the union of the two operand strings.


// console.log("Hello World");
// console.log("hello " +  "world");