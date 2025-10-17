let add = (a,b) => {
    console.log("value of a and b : ",a+b);
}
let sum = add(10,20);
console.log(sum);




console.log("1st Excuted");
setTimeout(() => {
    console.log("2nd Excuted");
    console.log("3rd Excuted");
},3000)
console.log("4th Excuted");
console.log("5th Excuted");


console.log("1st Excuted");
// setInterval(() => {
//     console.log("2nd Excuted");
//     console.log("3rd Excuted");
// },5000)
console.log("4th Executed");
console.log("5th Executed");
