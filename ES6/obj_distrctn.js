const biodata ={
    myName: 'Himanshu',
    myLname: 'Maurya',
    age:14,
    Pin:221601
}

// console.log(biodata.age);
// console.log(biodata.Lname);

let{myName, myLname , age , Pin ,degree="B.tech"}=biodata;

console.log(myLname);
console.log(age);
console.log(degree);
