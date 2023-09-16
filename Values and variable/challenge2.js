// console.log(10 + "20");
// console.log();
// console.log(40-"10");
// console.log();  /*ye ik bug ki trh treat kiya jata hai kyuki while using + sign 2 string add ho rhi hain aur while - sign both are acting as a number  */
// console.log("Java" + "Script");
// console.log();
// console.log("Webdevelopent" - "Script"); /*NaN*/
// console.log();
// console.log(" " + "0");
// console.log();
// console.log(" "+ 9);
// console.log();
// console.log(" " + "  ");
// console.log();
// console.log(true + true);   /* false =0 and true=1 */
// console.log();
// console.log(false + true);
// console.log();
// console.log(false + false);
// console.log();
// console.log(false - true);
// console.log();



// // Difference between null vs undefined? 

// var iAmUseless = null;  /* is variable ki kuch value hai jo null hai */
// console.log(iAmUseless);/* is variable ki kuch value hai jo null hai */
// console.log(typeof(iAmUseless)); /* is variable ka datatype null ana chahiye pr ye object aa rha hai jo ki bug ki trh treat kiya ja skta hai in javascript*/

// //2nd javascript bug

// var iAmStandBy; /*undefined mein kuch value hi nhi defined hoti hai jo ki jb jarurat hogi tb define krenge*/
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));


// What is NaN?

// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number 


var myPhoneNumber = 9876543210;
var myName = "thapa technical";

console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));

if(isNaN(myName)){
    console.log("plz enter valid phone no");
}







