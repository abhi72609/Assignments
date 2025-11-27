let a = true; // in js True means 1
let b = false;// in js False means 0

console.log(a*b);
console.log(a+b);


// NULL
var p = null;
var q = 7;
var x = "1"
console.log(" ");
console.log(typeof(p));

console.log(p+q);

console.log(p);

console.log(typeof(x));

console.log(x + p); // here any concatenation with string is String only

var d;
console.log(typeof(d));

console.log("10" - 2); // in case of - it will behave as number/integer
console.log("10" + 2); // in case of + it will concat
console.log(1+"2"+3); //"123"
console.log(false == 0); //true  - bcz in JS False means 0 only if use === then it will also compare it's datatype
console.log(false === 0); // false
console.log("5" * "2"); // 10 - bcz any operation except " + " will perfome normally only + will do concatenation
console.log(typeof(null));//Object bcz - 

console.log(typeof(NaN)); // Datatype - Number
var c = NaN;
console.log(c);
console.log(NaN == NaN); // it can be any number so it is false
console.log(NaN === NaN); // false it compare datatype as well as number so datatype is same but number can be anything
console.log(" ");
console.log(true+true); // 2 
console.log([] == []); // false since "[] - arr" is Object in js and has refernce variable which hold address it use refernce for comparing and both the arr will have different address store no output will be false
// console.log([] === []); // false
console.log([] == 0);
console.log([]);
console.log(true == "1"); // true
console.log(true === "1"); // false
console.log("5" + true); //5true
console.log(typeof(""));
console.log(typeof(" "));

console.log(" " == " "); // true - length base comparesion
console.log(" ");
console.log("" === " "); // false "" length 0 and " " length is 1 so value is not equal
console.log(" " === " "); // true

console.log("" == " "); //false





console.log(" ");
















console.log(" ");









// FUNCTION
console.log("Start");
function test()
{
    console.log("Hello");
}
console.log("end");
console.log(test());


function add1(a,b) {
    var c = a+b;
    console.log("Addition :- " + c);
    c = a - b;
    console.log("Substraction :- " + c);
}
console.log(add1(20,10)); // undefined bcz add function is not returing any thing 

function Addition(a,b){
    var d = a+b;
    return d;
}
var results = Addition(10,15);
console.log(results); 






// function add(a,b)
// {
//     return a+b;
// }
// function add(a,b)
// {
//     return a-b;
// }
// function total (m,n,sub,add)
// {
//     return add(m,n) + sub(m,n);
// }
// let result = total(10,20,sub,add);
// console.log(result);







let add2 = ((a,b) => {
    console.log(a+b);
    // return a+b;
})
add2(20,20);


//  if only one parameter then no parenthesis required
let add3 = (a => {
    a++;
    // console.log(a++);
    return a;
})
var res = add3(10);
console.log(res);


// No need of return Keyword and Expression when we have to execute single line of logic
let add4 = (a,b) => (a+b);
let sum2 = add4(23,27);
console.log(sum2);




var arr = [12,"hi",'B',true,25];
console.log(arr, typeof(arr));

// PUSH
arr.push(35,45);
console.log(arr);

// POP
arr.pop();
console.log(arr);

//UNSHIFT
arr.unshift("hehe")
console.log(arr);

// SHIFT    
arr.shift();
console.log(arr);

// SPLICE
arr.splice(1,2,"hi","baby",false);
console.log(arr);

// SLICE
let newArr = arr.slice(1,4);
console.log(newArr);

console.log(" ");

//          STRING
var str = "hehehehe";

console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Split is used to sp
var str = "hi i'm abhishek";
let newStr = str.split(" ")
console.log(newStr, typeof(newStr));
console.log(typeof(newStr));

// everthing in js except primitive datatype fall's under non-primitive  datatype that is "OBJECT"

// console.log(Array.isArray());

console.log(str.charAt(10));

//  before replace -  "hi i'm abhishek"
console.log(str.replace('i','s')); // it repleac first found char in string  O/P - hs i'm abhishek



console.log(str.replaceAll('i','s')); // it will replace all the i from string  O/P - hs s'm abhsshek


