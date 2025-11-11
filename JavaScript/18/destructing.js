// let [a,b,c,d,e] = [1,2,33,4,5];
// let a = arr[0];

// Array Destructing
let arr = [1,2,33,4,56,7];
let [a,b,c,d,e] = arr; // non primitive datatype element are stored in primitive datatype variable work on basic of index
console.log(e);
console.log(a);

// Object Destructing
let student = {
    id: 123,
    name: "ram",
    marks: 34,
    age: 23
}
console.log(student);
let {age,id,name} = student;
console.log(age,id,student.marks);

// Spread Operator
let m = [1,2,3,4,5];
let n = [12,23,45];
let k = [m,n];
console.log(k);
k = [...m,...n];
console.log(k);

//rest operator
let arr1 = [1,2,3,4,5,6];
let [x,y,w,...z] = arr1;
console.log(x);
console.log(y);
console.log(w);
console.log(z);
console.log(z[0]);



// rest parameter
function add(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}
add(10,20,30,40,50,60)