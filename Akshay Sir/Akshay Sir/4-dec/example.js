// debugger
// let a=30;
// console.log(a);
// a1=50;
// console.log(a1);
// var a1;
// console.log(a1);

// Primitive

// let a=20;
// a=43.5;
// console.log(typeof a);
// a= 'b';
// console.log(typeof a);
// a= false
// console.log(typeof a);
// a= undefined
// console.log(typeof a);
// a= 10n;
// console.log(typeof a);
// a=null
// console.log(typeof a);
// a= Symbol('b')
// console.log(typeof a);

// Non Primitive 

// let obj={}
// let arr=[]

// console.log(typeof obj);
// console.log(typeof arr);

// parseInt - it ignores the string value

// let num1 = parseInt(prompt('Enter the number '));
// let num2 = parseInt(prompt('Enter the number '));
// console.log(num1+num2);

// let name = prompt('Enter the name')
// let age = parseInt(prompt('Enter the age '));

// let msg = age ? 'Tell the age ' : 'Dont tell the age';
// console.log(`Name and age`, msg);

let name = prompt('Enter the name')
let msg= name && name.length>0;
let age = msg&&prompt("Enter age");

msg && console.log(name,age);




