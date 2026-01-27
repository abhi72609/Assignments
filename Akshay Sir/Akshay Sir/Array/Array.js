// let str= 'this is Javascript class at Twelve';
// let a= str.split(' ');
// let longestWord='';

// for(let word of a){
//     if(word.length > longestWord.length){
//         longestWord = word
//     }
// }
// console.log('Longest Word -',longestWord);

// let capital=0;
// for(let word of a){
//     if(word[0] >= 'A' && word[0] <= 'Z')
//     {
//         capital++;
//     }
// }
// console.log('Capital Count -',capital);

// let vowelCount = 0;
// let vowels = ['a','e','i','o','u','A','E','I','O','U'];

// for (let word of a) {
//   if (vowels.includes(word[0])) {
//     vowelCount++;
//   }
// }
// console.log('Vowel Count -',vowelCount);

// Sorting

// let arr = [100,300,4,6,30,500,200,500,465]
// arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(arr);

// let arr=[10,20,10,30,40,40]
// let op = arr.filter((el , i)=>{
//     return arr.indexOf(el) ==i;
// })
// console.log(op);

// let price= [100,49,50,34]
// let op = price.map((el)=>{
//     return `$${el}`;
// })
// console.log(op);

// Arrange the string in asc. based on length

// let str= 'Hello this is javascript batch in jspider btm'
// let op= str.split(' ');
// let sort= op.sort((a,b)=>{
//     return a.length - b.length;
// })
// console.log(sort.join(' '));

// convert each word in a string to captalize

// let str1 = 'We are using the methods of array';
// let output = str1.split(' ').map((el)=>{
//     return el.charAt(0).toUpperCase()+el.slice(1).toLowerCase()
// }).join(' ')

// console.log(output);

// Return the array of length of each words

// const str = "JavaScript is Fun and Powerful";
// const result = str.split(" ").filter(word => /^[A-Z]/.test(word));
// console.log(result);

// const arr = ["apple", "banana", "grape"];
// const result2 = arr.map(word => word.replace(/[aeiou]/, '*'));
// console.log(result2);

// const st = "Fly by night sky bright";
// const res = st
//   .split(" ")
//   .filter(word => /[aeiou]/.test(word))
//   .map(word => word.length);

// console.log(res);

const arr = [1, 2, 3, 2, 4, 1, 5];
const result = arr.filter((value, index) => arr.indexOf(value) == index);
console.log(result);


