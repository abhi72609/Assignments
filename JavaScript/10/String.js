let str = "     Hello Ev  Eryone      ";
console.log(str.length);
console.log(str[0]);
console.log(str);



let a = str.trim();
console.log(a); // trim space from both starting and ending


// let a = str.trimStart();// trim space from starting
// console.log(a);


// let a = str.trimEnd();// trim space from ending
// console.log(a);


let putH2 = document.querySelector("h2");

let str1 = "abhishek";
str1 = str1.toUpperCase()
console.log(str1);
putH2.innerHTML = str1;

str1 = str1.toLowerCase()
console.log(str1);

// let char = str.chartAt(0);
let char = str1.charAt(str1.length - 4);
console.log(char);

let index = str1.indexOf("e",2);
console.log(index);

let index1 = str1.lastIndexOf(e);
console.log(index1);


let substr = str1.slice(1,4);
console.log(substr);

