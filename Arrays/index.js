// var arr= new Array;
// var arr= ["raj", "ankit","raman", "rahul", true, 52, false] /* multiple datatype store kr skte hain in JS pe hume aisa nhi krna chahiye uske liye objects bna lo wo better approach hoti hai*/
var arr1= ["raj", "ankit","raman", "rahul"] 
// console.log(arr1);
// console.log(arr1[2]);
// console.log(arr1.length)


// for(let elements in arr1){
//     console.log(elements);
//     console.log(arr1[elements]);
// }

// for (let elements of arr1) {
//     console.log(elements)    
// }


// arr1.forEach(function(ele , idx , array){
//     console.log(ele + "  Index : "+idx);
// })
//                 //  OR 
// arr1.forEach((ele, idx, arr)=>{
//     console.log(ele + " Index : " + idx);
// })




// searching in array

// var arr= ["raj", "ankit","raman", "rahul" , "ankit", "prince"] 

// console.log(arr.indexOf("ankit"));

// console.log(arr.lastIndexOf("ankit"))

// console.log(arr.includes("ral"));
// console.log(arr.includes("raj"));



// var arr=[1,2,3,4,5,6,7,8]


// // const ele = arr.find((currVal) =>  currVal > 4 );
// // console.log(ele);

// // const ans= arr.findIndex((curVal)=> curVal > 6);
// // console.log(ans);


// const newPriceTag = arr.filter((elem, index) => {
//   return elem > 6;
// })
// console.log(newPriceTag);


// var arr= ['Ankit' , 'Raj', 'Price' , 'Rat'];
// console.log(arr);
// var a = arr.push('raman'); /*we can add multiple data using this*/
// console.log(a)
// console.log(arr)

// var arr= ['Ankit' , 'Raj', 'Price' , 'Rat'];
// console.log(arr);
// var a = arr.pop();
// console.log(a)
// console.log(arr)


// var arr= ['Ankit' , 'Raj', 'Price' , 'Rat'];
// console.log(arr);
// var a = arr.unshift('raman' , 'Ashitesh'); /*we can add multiple data using this*/
// console.log(a)
// console.log(arr)


// var arr= ['Ankit' , 'Raj', 'Price' , 'Rat'];
// console.log(arr);
// var a = arr.shift();
// console.log(a)
// console.log(arr)



// var arr = ["Jan" , "Feb"  , "april" , "MAY"];
// if(arr.includes("Jan")){
//     console.log("Yes");
// }else{
//     console.log("No")
// }

// const n = arr.splice(2,0 ,"March");
// console.log(nm)
// console.log(arr);


// const m = arr.splice(3,1 ,"April");
// console.log(arr);


// const nm = arr.splice(4,1 ,"May");
// console.log(arr);


// const nm1 = arr.splice(2,2);
// console.log(arr);


var arr=[2,4,5,6,8,9];

let arr2= arr.map((curElem)=>{
    return curElem*2;
}).filter((curElem)=>{
    return curElem>10;
})
console.log(arr2);