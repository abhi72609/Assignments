// let Con1 = document.getElementById("C1") // return single element
// // console.log(Con1.innerText);
// // Con1.innerText = "getElementById Is Performed"
// console.log(Con1);

// const { createElement } = require("react");


// let Con2 = document.getElementsByClassName("C2") // return in for Html Collection
// console.log(Con2);

// let Con3 = document.getElementsByTagName("h3") // select element using tagName  ->  return HTML collection
// console.log(Con3);

// let Con4 = document.getElementsByName("username")
// console.log(Con4);

// let Con5 = document.querySelector("h4");
// console.log(Con5);

// let Con6 = document.querySelectorAll("h4");
// console.log(Con6);

// let btn = document.querySelector("button")
// btn.onclick = (e) => {
//     console.log('Someone Pokked Me')
//     console.log(e);
// };

// let student = {
//     name : "Abhi",
//     "1stAge" : 15,
//     arr : [1,2]
// }

// console.log(student["name"]);
// console.log(student["arr"]);


let div = document.createElement("div");
div.textContent = "Hello this is JS";

document.body.append(div);

let box = document.getElementById("Box");
let p = document.createElement("p")

p.textContent = "para1"

let h5 = document.createElement("h5")

h5.textContent = "para2"
box.append(p);
box.append(h5);

// let box1 = document.createElement("p")
let span = document.createElement("span")
span.textContent = "Span"
box.appendChild(span);



p.getAttribute("id");


// let div = document.createElement("div");

div.setAttribute("id","Huhu");


document.querySelector("#GrandParent")
.addEventListener('click',() =>{
    console.log("Click GrandParent");
},true);

document.querySelector("#Parent")
.addEventListener('click',() =>{
    console.log("Click Parent");
},false);

document.querySelector("#Child")
.addEventListener('click',() =>{
    console.log("Click Child");
},true);


// String Interpolation
let v1 = 10;
let v2 = 15;
let name ="Bablu"
console.log(`${name} earn ${v1+v2}`);
console.log(name.length);

//literal
var arr = [10,20,30]

// element
for(let i of arr)
{
    console.log(i);
}


for(let i in arr)
{
    console.log(`Elemetn at Array index of ${i} is ${arr[i]}`);
}

//Sir Question
var arr = ['a','b','C','D','E'];
let Vowel = arr.filter((el,i)=>{
    if(el == 'A' || el == 'E' || el == 'I' || el == 'O' || el == 'U' || el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u')
        return true;
})
console.log(Vowel);

// Advance method
// Convert this array so that each number becomes its square
var arr = [2,3,5,6]
var newArr = arr.map((el,i,arr)=>{
    return el*el;
})
console.log(newArr);

// From this array, return only the even numbers
var evenNo = arr.filter((el,i,arr)=>{
    return el % 2 === 0;
})
console.log(evenNo);

// From this array, return the first number greater than 50
let arr2 = new Array(20,30,90,45,60);
let GreaterNo = arr2.find((el,i,arr2)=>{
    return el > 50;
})
console.log(GreaterNo);


// Check if all numbers are positive
let arr3 = new Array(0,2,3,5,-9);
let checkArr = arr3.every((el,i,arr3) => {
    return el > 0;
})
console.log(checkArr);

let Str = "abhi";
let upperCaseStr = Str.toUpperCase()
console.log(upperCaseStr);


// Convert all strings to uppercase
// i was using filter and it used to filter out the array not for modification on element but map used to performing operatio on element or tranform the array element
let arr4 = ["html", "css", "js"];
let UpperArr = arr4.map((el,i,arr4) => { 
    return el.toUpperCase();
})
console.log(UpperArr);

let hii = document.getElementById("hi");
console.log(hii);

let hi = document.getElementsByName("hi");
console.log(hi);



// function getData(data, getNextData) {
//     setTimeout(() => {
//         console.log("data : ", data);

//         if (getNextData) {
//             getNextData();
//         }
//     }, 3000);
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

// function getData1(dataId)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data is : ",dataId);
//             resolve("SuccessFull");
//         },2500);
//     });
// }

// getData1(1)
//     .then((res)=>{
//     return getData1(2);
// })
//     .then((res)=>{
//     return getData1(3);
// })
//     .then((res)=>{
//     return getData1(4);
// })

// function getData(data, getNextData)
// {
//     setTimeout(()=>{
//         console.log("data",data);
//         getData();
//     },3000);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// });

// console.log(getData());

function parentFunction()
{
    let variable = "I'm Parent";
    function childFunction()
    {
        console.log(variable);
    }
    return childFunction;
}

const child = parentFunction();
// console.log(child);
child();

let num = [10,20,30,40,50]
for(let i of num)
{
    console.log(i);
}

for(let i in num)
{
    console.log(i);
}


let obj1 = {name : "Riya"};
let obj2 = {age : 22};

let obj3 = Object.assign({},obj1,obj2);
console.log(obj3);


// let table = document.createElement("table");
// let th1 = document.createElement("th");
// let th2 = document.createElement("th");
// let tr1 = document.createElement("tr");
// let tr2 = document.createElement("tr");

// th1.textContent = "name"
// th2.textContent = "age"

// tr1.append(th1,th2);

// let td1 = document.createElement("td");
// let td2 = document.createElement("td");

// td1.textContent = "john";
// td2.textContent = "21";

// tr2.append(td1,td2)
// table.append(tr1,tr2);
// document.body.append(table);
// console.log(table);

// let body = document.body;
// let tab = `<table>
//         <tr>
//             <td>name</td>
//             <td>age</td>
//         </tr>
//         <tr>
//             <td>Ravi</td>
//             <td>22</td>
//         </tr>
//         <tr>
//             <td>Mohan</td>
//             <td>32</td>
//         </tr>
//     </table>`

// body.innerHTML = tab;
