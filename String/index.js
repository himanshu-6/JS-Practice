// let str= "Im double Quote"
// let str1= 'Im single quote'

// console.log(str);
// console.log(str1);

// let nwstr= new String("Maurya");
// console.log(nwstr);

// let str= 'My Name is himanshu maurya'
// console.log(str);
// console.log(str.length);

// let stnce= "Himanshu maurya is a 'champion' "
// console.log(stnce);

// let stnce= 'Himanshu maurya is a "champion" '
// console.log(stnce);


// let stnce= 'Himanshu maurya is a \'champion\' '
// console.log(stnce); /*similarly for double quote*/

// let str ="Himanshu is a IT student"
// console.log(str.indexOf('man'))

// console.log(str.indexOf('a'));
// console.log(str.indexOf('a' , 4)); /*start checking after index 4 */

// Similarly we can use LASTINDEXOF (string_name.lastIndexOf(searchValue [, fromIndex])) to get last index of search value


// let str ="Himanshu is a IT student"
// console.log(str.search("IT")); /*ye humesha shuru se hi start hota hai  , hum yha koi start index for search nhi dal skte */




// var str="Himanshu , Maurya, Price , Suvah";

// let st = str.slice(0,8) /*yha slice() 8 ko exclude kr dega*/

// let st = str.slice(9,17)

// let st= str.slice(3) /* ye 3rd index se start krke last tk string print kr dega*/

// let st = str.slice(0,-5) /*agr hum -ve index denge toh wo unti length piche se calculate krta hain */
// console.log(st)





// // Similarly we have SUBSTRING (string_name.substring(strt_indx,last_indx) but the only diffrence is that k substring() method does not accept -ve number;
// var st= "Hello ji How Are You?"

// let str= st.substring(3,10);
// console.log(str);




// substr() is similar to slice().
// per yha second parameter length specify krta hai of substring
// var str = "Apple, Bananaa, Kiwi";
// let res = str.substr(3, 7);
// console.log(res);





// var str= "Himanshu Maurya is student of tmsl kolkata"
// console.log(str)

// let st= str.replace('tmsl', "Techno Main Salt Lake");
// console.log(st);
// Points to remember 
// 1: The replace() method does not change the string 
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only 
// the first match
// 3:By default, the replace() method is case sensitive. 





// let str= "Himanshu"
// console.log(str.charAt(4));
// console.log(str.charCodeAt(4));
// console.log(str[4]);





// concat() joins two or more strings

// let fName = "Himanshu"
// let lName = "Maurya"

// console.log(fName+lName);
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));




// let str= "Himanshu Maurya is a student who is has a champion MindSet."
// console.log(str.split(" "));