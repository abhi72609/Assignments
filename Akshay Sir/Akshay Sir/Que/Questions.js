//1
let str= 'We are enjoying learning Javascript'
let arr1= str.split(' ').find(word => word.length >5);
console.log(arr1);

//2
let arr2= ['fast','zebra','lazy','zoom'];
let res= arr2.find(word => word.includes('z'));
console.log(res);

//3
let str1= "Javascript is Fun and Powerfull";
let arr3=str.split(' ').filter(word => word.charAt(0)==word.charAt(0).toUpperCase());
console.log(arr3);

//4
let arr4 = ['Javascript', 'React', 'Python', 'Node'];
let res2 = arr4.map(word => word.slice(0,3))
console.log(res2);

//5
let arr5=[10,20,30]
let res3=arr5.map(num => `$${(num)}`)
console.log(res3);

//6
let str2 = "Coding is super fun";
let res4 = str2.split(' ').map(word => word.length)
console.log(res4);

//7
let str3 = "js is awesome"
let res5 = str3.split(' ').map(word => word.toUpperCase() ).join(' ');
console.log(res5);

//8
const arr = ["apple", "banana", "grape"];
let op = arr.map((el)=>{
    // ['a' , 'p' , 'p' , 'l' , 'e']
   return el.split('').map((el)=>{
        return 'aeious'.includes(el)?'*':el
    }).join('')
})
console.log(op);

//9
let str4 = "I love to code in Javascript";
let res7 = str4.split(' ').filter((el)=> el.length>=4).map((el)=> el.toUpperCase());
console.log(res7);

//10
const str10 = "Fly by night sky bright";
let words = str10.split(' ')
let op2 = words.filter((el)=>{
    return el.split('').some((el)=>{
        return 'aeiou'.includes(el.toLowerCase())
    })
}).map((el)=>el.length)
console.log(op2);
 
//11
let arr7 = [1,2,3,2,3,4,5,3,2,18]
let res9 = arr7.filter((el,i)=> arr7.indexOf(el)==i);
console.log(res9);

//12
let names = ["Atul", "pranavii", "anurag", "vishala", "riteshi", "abhinav"];
let op3 = names.filter((el)=>{
    return 'aeiou'.includes(el.charAt(0).toLowerCase())
})
console.log(op3);

let strr= "Fly by night sky bright";
let wordss = strr.split(' ').filter((el)=>el.split('').some((el)=> 'aeiou'.includes(el.toLowerCase())))
.map((el)=>el.length)

console.log(wordss);
