// ! Array 
// Array is an ordered collection of homogeneous and heterogeneous data elements 
// In js array has dynamic size , it will increase or decrease by itself if we will perform some operation
// ! Ways to create an array 
// 1. By using literal []
// let arr = [10 , 20 , true , 'abc' , undefined , null]
// console.log(arr);
// // 2. By using constructor 
// let arr2 = new Array()
// console.log(arr2); // []
// // !Ex2 ->if we pass a single numeric arg , it will take that as the length of the array 
// let arr3 = new Array(5)
// console.log(arr3); //(5) [empty × 5]
// // ! Ex3 -> if we pass any other values other than numeric value , it will take that as an element
// let arr4 = new Array('6')
// console.log(arr4); ///['6']
// // ! Ex4 -> if we pass more than one arg , that also will be taken as elements of the array
// let arr5 = new Array(5 , 10)
// console.log(arr5); //(2) [5, 10]

// ! CRUD over an array 
// let fruits = ['mango'];
// // ! Read 
// console.log(fruits[0]); //mango
// // ! Update 
// fruits[4] = 'guava'
// console.log(fruits); // ['mango', empty × 3, 'guava']
// fruits[0] = 'Orange';
// console.log(fruits);
// // ! delete 
// delete fruits[4];
// delete fruits[0];
// console.log(fruits);

// ! looping over the array 
// let nums = [10 , 20 , 30 , 40 , 50];
// for(let i = 0; i<nums.length; i++){
//     console.log(nums[i]);
// }
//! for in loop 
// for in loop is used to iterate over the index of the array 
// for(let i in nums){
//     console.log(i);
// }
//! for of loop 
// for of loop is used to iterate over the elements of the array 
// for(let i of nums){
//     console.log(i);
// }
// ! property
// ! length 
// length will return the number of elements present inside an array
// ! methods
// ! 1. push(el)
// it is used to add the elements at the last of the array 
// it will modify the original array 
// let arr = [10 , 20]
// arr.push(50);
// console.log(arr); //(3) [10, 20, 50]
// !2. pop()
// pop is used to remove the element from the last index of the array , it'll modify the original array 
// arr.pop()
// arr.pop()
// console.log(arr); //[10]

// !3. shift()
// shift is used to remove the element from the 0th index of the array , it'll modify the original array 
// let arr = [10 , 20 , 30]
// arr.shift()
// console.log(arr); // [20 , 30]
// !4. unshift()
// unshift is used to add the element at the 0th index of the array , it'll modify the original array 
// let arr = [10 , 20 , 30]
// arr.unshift(5)
// console.log(arr); // [5,10,20 , 30]
// ! 5. indexOf
// it will return the index of the first occurrence of the element 
// let arr = [10 , 20 , 10 , 30 , 40 , 30]
// console.log(arr.indexOf(10)); //0
// ! 6. lastIndexOf
// it will return the index of the last occurrence of the element 
// let arr = [10 , 20 , 10 , 30  , 30, 40 , 30]
// console.log(arr.lastIndexOf(10)); //2
// console.log(arr.lastIndexOf(30)); //6

// ! 7. join(arg)
// join is used to convert an array into string based on the arg
// let arr = ['twinkle' , 'twinkle' , 'little' , 'star' ]
// console.log(arr.join()); // if we do not pass any arg it will join with comma
// console.log(arr.join('')); // by using empty string it will return a word
// console.log(arr.join(' ')); //if we join based on space it will return a sentence 
// console.log(arr.join('-')); //twinkle-twinkle-little-star

// ! 8. reverse()
// reverse method is used to reverse the order of the elements in the array , it will modify the original array 
// let arr = [10 , 20 , 30 ,40];
// arr.reverse()
// console.log(arr);

// !Ques 1->Reverse the sequence of the words in a string 
// let str = 'this is js'
// let rev  = str.split(' ').reverse().join(' ')
// console.log(rev); //'js is this'
// !Ques 2->Reverse the sequence of the characters in a string 
// let str = 'this is js'
// let rev  = str.split('').reverse().join('')
// console.log(rev); //'sj si siht'
// ! Homework
// !Ques 1 -> find out the longest word in the string 
// let str = 'This is Javascript class at Twelve';
// let words = str.split(" ")
// console.log(words); //['This', 'is', 'Javascript', 'class', 'at', 'Twelve']
// let longest =""
// for(let word of words){
//     if(longest.length<word.length){
//         longest = word;
//     }
// }
// console.log(longest);

// ! Ques2 -> find out how many words are starting with a capital letter
// let str = 'This is Javascript Class At Twelve';
// let words  = str.split(' ')
// let count = 0;
// for(let word of words){
//     if(word.charAt(0) == word.charAt(0).toUpperCase()){
//         count++
//     }
// }
// console.log(count);


// ! Ques 3-> Find out the number of words starting with a vowel
// let str = 'This is Javascript Class At Twelve and we are learning array';
// let words = str.split(' ');
// let count = 0;
// for(let word of words){
//     if('aeiou'.includes(word.charAt(0).toLowerCase())){
//            count++;
//     }
// }
// console.log(count);

// ! 9. includes()
// it returns a boolean value , it is used to identify if an element is present inside the array or not
// let arr = [10 , 20 , 30]
// console.log(arr.includes(10)); // true
// console.log(arr.includes(50)); // false

// ! 10. slice(s.i , e.i)
// slice is used to return a subarray 
// it will accept starting index and ending index , it can accept negative index values also  
// ending index is excluded 
// let arr = [10 , 20 , 30 , 40 , 50 , 60]
// console.log(arr.slice(1 ,4 )); //(3) [20, 30, 40]

// ! 11. splice(s.i , deleteCount , newEl1 ,.... newEln)
// it is used to add or delete the element at a specific index 
// it will accept three arguments 
// first argument is the target index 
// second argument is deleteCount 
// third argument the elements we want to add , we can add n number of elements
// it will modify the original array 
// let arr = [10 , 20 , 30 , 40 , 50 , 60]
//  arr.splice(2 ,3 )
// arr.splice(3,0,80,90)
//  console.log(arr);

// !12 sort() --> mutable
// sort is used to sort the elements of the array in ascending or descending order 
// if we use sort without compare function , it will sort on the basis of the first digit of each element 
// so we use compare function to sort the numbers 
// compare function has two parameters , a and b , if we return a-b it will sort in ascending order , and b-a for descending order
// let arr = [900 , 200 , 300 , 3 , 9 , 600 , 70 , 7 , 100]
// arr.sort((a,b)=>{
// //    return a-b; // ascending
//    return b-a; // descending
// })
// console.log(arr);

// ! Questions ->
// Find out if two words are anagram or not 
// function isAnagram(s1 , s2){
//     s1 = s1.toLowerCase()
//     s2 = s2.toLowerCase()
//    if(s1.length == s2.length){
//     let op1 = s1.split('').sort().join('')
//    let op2 = s2.split('').sort().join('')
//    return op1 == op2
//    }else{
//     return false
//    }
// }
// console.log(isAnagram('EAT' , 'tea'));


// ! Advance Methods of The array 
// The advance methods of the array will accept a callback function
// callback function -> (el , i , arr)=>{}
// that callback function  has 3 parameters 
// 1st parameter is an iterating variable (iterates through the elements)
// 2nd parameter is an iterating variable over the index (it gives the index values 0 , 1 , 2 , 3 ...)
// 3rd parameter represents actual array 
//! forEach , some , every , find , filter , map , reduce , reduceRight

//! 13.forEach(callbackFn..)
// forEach is an advance method of the array 
// it accepts a callback function ()
// forEach does not return anything it just works like a loop , used to iterate over elements and index
// let arr = [10 , 20 , 30 , 40 , 50]
// arr.forEach((el , i , a)=>{
//    console.log(el , i);
// })

// ! 14.some(callback Fn.)
// some is an advance method of the array 
// it accepts a callback function (callback Fn...)
// it is used to check if any element of the array satisfies the condition returned from the callback functionn
// some will iterate over the elements of the array until the condition gets satisfied , 
// it returns a boolean value 
// let nums = [10 , 11 , 20 , 21 , 30 , 31 , 40];
// let op = nums.some((el , i , arr )=>{
//     console.log(i+1);
//     return el%9== 0;
// })
// console.log(op);

// ! 15.every(callback Fn.)
// every is an advance method of the array 
// it accepts a callback function (callback Fn...)
// it is used to check if all the element of the array satisfies the condition returned from the callback function
// every will iterate over the elements of the array until the condition gets false 
// it returns a boolean value 
// let nums = [10 , 11 , 20 , 21 , 30 , 31 , 40];
// let op = nums.every((el , i , arr )=>{
//     console.log(i+1);
//     return el>8;
// })
// console.log(op); // false

// ! find(callbackFn..)
// find is used to return the first matching element which satisfies the condition returned from callback function
// let nums = [10 , 20 , 30 , 31 , 40 , 51 , 67]
// let op = nums.find((el)=>{
//     return el%2 != 0;
// })
// console.log(op);

// ! filter(callback Function )
// filter is an advance method of the array 
// filter method is used to filter the elements of the array based on the condition returned from callback function , it returns a new array
// let nums = [10 , 20 , 30 , 31 , 40 , 51 , 67]
// let op = nums.filter((el)=>{
//     return el%2 != 0;
// })
// console.log(op); //(3) [31, 51, 67]
// let op = nums.filter((el)=>{
//     return el*el; // truthy or falsy
// })
// console.log(op); //(3) [10 , 20 , 30 , 31 , 40 , 51 , 67]
// let op = nums.filter((el)=>{
//      // by default undefined it will return that is falsy 
// })
// console.log(op); //(3) []
// ! Ques
// ! Remove all the duplicates from an array 
// let arr = [10 , 20 , 30 , 10 , 40 , 20]
// let res = arr.filter((el , i)=>{
//     return arr.indexOf(el) == i;
// })

// ! map(callback Fn...)
// map is used to modify the elements of the array based on the expression returned from callback function and it returns the new array , it does not modify the original array 
// let nums = [10 , 23 , 31 , 10 , 45 , 20]
// let op = nums.map((el)=>{
//     return el*el
// })
// console.log(op); //(6) [100, 529, 961, 100, 2025, 400]
// let op1 = nums.map((el)=>{
//     return el%2 == 0
// })
// console.log(op1); //(6) [true, false, false, true, false, true]
// let op2 = nums.map((el)=>{
// })
// console.log(op2); //(6) [undefined, undefined, undefined, undefined, undefined, undefined]


// ! Ques
// let price = [100 , 49 , 50 , 34 , 54]
// let output = price.map((el)=>{
//     return `$${el}`
// })
// console.log(output); //['$100', '$49', '$50', '$34', '$54']

//  -->  [$100 , $49 , $50 .....]
// !Ques Arrange the words in a string in ascending order based on the length of words
// let str = 'Hello this is javascript batch in jspiders btm';
// let output = str.split(' ').sort((a,b)=>a.length - b.length).join(' ')
// console.log(output);

// ! Ques -> convert each word in a string to capitalize
// let str1 = 'We are using the methods of array'
// // ! --> 'We Are Using The Methods Of Array'
// let res = str1.split(' ').map((el)=>{
//     return el.charAt(0).toUpperCase()+el.slice(1).toLowerCase()
// }).join(' ')
// console.log(res);
//! Return an array of length of each word
// ! Questions
// !Q1 Write methods of the array 
// map , find , filter
// !Q2 Write methods of the string
// split , includes , slice
// !Q3 Explain string interpolation
// !Q4 difference b/w slice and splice
// !Q5 closure with example
// !Q6 functions -> explain arrow function , higher order function 
// !Q7 reverse the string based on characters and also based on words 
// ->  'this is js' -> 'js is this'
// ->  'this is js' -> 'sj si siht'

// ! Homework
// ! 1. From a sentence, find the first word longer than 5 letters.
// const str = "We are enjoying Learning JavaScript ";
// let words = str.split(' ')
// let op = words.find((el)=>{
//     return el.length>5
// })
// console.log(op);
// !2. Find the first string that contains the letter “z”.
// const arr = [ 'faszzzt',  'zebra', 'lazy', 'zoom'];
// let op1 = arr.find((el)=>{
//     return el.includes('z')
// })
// console.log(op1);
// !3. Get all words from a string that start with capital letters.
// const str = "JavaScript is Fun and Powerful";
// let words1 = str.split(' ')
// let op2 = words1.filter((el ,i)=>{
//     return el.charAt(0).toUpperCase() == el.charAt(0)
// })
// console.log(op2);

// !4. Convert all words in an array to their first 3 letters.
// const arr = ["JavaScript", "React", "Python", "Node"];
// let updated = arr.map((el)=>{
//     return el.slice(0,3)
// })
// console.log(updated);
// Expected output: ['Jav', 'Rea', 'Pyt', 'Nod']

// !5. Convert all numbers into strings with a $ sign before them.
// const arr = [10, 20, 30];
// let op = arr.map((el)=>{
//     return `$${el}`
// })
// console.log(op);
// Expected output: ['$10', '$20', '$30']
// !6. Take a sentence and return an array of each word’s length.
// const str = "Coding is super fun";
// let words = str
//     return el.length
// })
// console.log(op);
//  Expected output: [6, 2, 5, 3]

// !7. Make every word in a string uppercase.
// const str = "js is awesome";
// let op1 = str.toUpperCase().split(' ')
// console.log(op1);
// let words = str.split(' ')
// let op2 = words.map((el)=>{
//     return el.toUpperCase()
// })
// console.log(op2);
// Expected output: ['JS', 'IS', 'AWESOME']
  
// !8. Replace all vowels in words with “*”.
// const arr = ["apple", "banana", "grape"];
// let op = arr.map((el)=>{
//     // ['a' , 'p' , 'p' , 'l' , 'e']
//    return el.split('').map((el)=>{
//         return 'aeious'.includes(el)?'*':el
//     }).join('')
// })
// console.log(op);
// Expected output: ['*ppl*', 'b*n*n*', 'gr*p*']
  
// !9. From a sentence, filter out words shorter than 4 letters, then make the remaining words uppercase.
// const str = "I love to code in JavaScript";
// let words = str.split(' ')
// let op = words.filter((el)=>el.length>=4).map((el)=>el.toUpperCase())
// console.log(op);
// Expected output: ['LOVE', 'CODE', 'JAVASCRIPT']
  
  
// !10. From a string, get all words that include vowels and return their lengths.
// const str = "Fly by night sky bright";
// let words = str.split(' ')
// let op = words.filter((el)=>{
//     return el.split('').some((el)=>{
//         return 'aeiou'.includes(el.toLowerCase())
//     })
// }).map((el)=>el.length)
// console.log(op);

// Expected output: [5, 6]
// ! 11. remove all the duplicates from an Array
// const arr = [1, 2, 3, 2, 4, 1, 5];
// let res = arr.filter((el , i)=>{
//     return arr.indexOf(el) == i
// })
// console.log(res);
// ! Ques 12-> filter the names starting with vowel
let names = ["Atul", "pranavii", "anurag", "vishala", "riteshi", "abhinav"];

let op = names.filter((el)=>{
    return 'aeiou'.includes(el.charAt(0).toLowerCase())
})
// console.log(op);




// ! reduce(callbackFn , initialVal)
// reduce is used to reduce the array elements into a single value 
// it will accept two arguments  , first is callback function , second is initial value of accumulator
// callback function has 4 parameters  (accumulator , element , index , original array)
// whatever we return from the callback function will become the new value of accumulator 
// !Syntax 
// let arr = [10 , 20 , 30 , 40]
// let sum = arr.reduce((acc , el , i , a)=>{
//     return acc+el
// })
// console.log(sum);


