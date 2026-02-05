





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


// practise
// let ar1 = new Array("Abhi",22);
// console.log(ar1);

// function Array(name,age)
// {
//     setName.call(this,name);
//     this.age = age;
// }

// function setName(name)
// {
//     this.name = name;
// }


// Question :- Create table Dynamically using dom and 3 row and 3 column
let table1 = document.createElement("table");

let tr1 = document.createElement("tr");
let tr2 = document.createElement("tr");
let tr3 = document.createElement("tr");

let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");

let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");

let td4 = document.createElement("td");
let td5 = document.createElement("td");
let td6 = document.createElement("td");

th1.textContent = "Name";
th2.textContent = "Age";
th3.textContent = "Gender";
tr1.append(th1,th2,th3);

td1.textContent = "Abhi"
td2.textContent = 25
td3.textContent = 'M'
tr2.append(td1,td2,td3);

td4.textContent = "Riya"
td5.textContent = 24
td6.textContent = 'F'
td6.style.setProperty("font-size","25px"); //setProperty allow one property at a time
td5.style.cssText = "font-size:25px;color:orange;background-Color:black"//cssText allow to set multiple property at a time
tr3.append(td4,td5,td6);

table1.append(tr1,tr2);
// table1.append(tr2);
table1.append(tr3);
document.body.append(table1);
console.log(table1);



// Question :- Add a Button that Change BackgroundColor on clicking it 

// BASIC APPROACH
let button = document.querySelector("#btn")
//     button.addEventListener("click",(evt)=>{
//         console.log("button got clicked"); 
//         // button.textContent = "White"
//         document.body.style.cssText = "background-color:black;color:white";
//         console.log("evt");
// })
// console.log(button);

let isDark = false;

button.addEventListener("click",()=>{
    if(!isDark){
        document.body.style.cssText = "background-color:black;color:white";
        button.textContent = "White Mode"
        isDark =  true;
    }else{
        document.body.style.cssText = "background-color:white;color:black";
        button.textContent = "Dark Mode"
        isDark = false;
    }
})


// Question 6 :- Create a Promise that resolve after 2 Seconds and logs - "Done"
let myPromise = new Promise((resolve,reject)=>{
    let success = true;
    setTimeout(() => {
        if(success)
        // console.log("done"); wrong way
        resolve("Done 1");
    }, 3000);
});
myPromise.then((msg)=>{
    // console.log(msg);
})

// Question 8 :- Rewrite a Promise using ascyn/await
function myPromise1(msg) {
        return new Promise((resolve,reject)=>{
        let success = true;
        setTimeout(() => {
            if(success)
            // console.log("done"); wrong way
            resolve("Done 2");
        }, 5000);
    });
}
(async function(){
    let msg = await  myPromise1();
    // console.log(msg);
})()


// let ar1 = new Array("Abhi",22);
// console.log(ar1);

// function Array(name,age)
// {
//     setName.call(this,name);
//     this.age = age;
// }

// function setName(name)
// {
//     this.name = name;
// }

// function array1(name,age,gender){   WHY WRONG
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }
// let arraysol = new array1();
// array1.apply(["abhi",22,"male"]);
// console.log(arraysol);


// APPLY Method
function intro(greeting,punctuation){
    //To show in the window or UI/UX
    document.body.append(`${greeting} ${punctuation} Myself ${this.name} i'm ${this.age} old and i live at ${this.address}`)
    console.log(`${greeting} ${punctuation} Myself ${this.name} i'm ${this.age} old and i live at ${this.address}`);
    console.log(typeof(intro));
    
}

const person = {
    name : "Abhi",
    age : 25,
    address : "Khusrupur"
}


intro.apply(person,["Hello","!"]);
// document.body.append(intro.) wrong way right way is in function intro itself



// BIND Method
let printFullName = function(hometown,state)
{
    console.log(`Myself ${this.firstName} ${this.middleName} ${this.lastName}, i leave in ${hometown} ${state}`);
}
let name2 = {
    firstName : "Abhishek",
    middleName : "Kumar",
    lastName : "Raj"
}

let printName =  printFullName.bind(name2,"Khusrupur","Bihar");
// console.log(printName); why not this to print
printName();
console.log(typeof printName);







let arrr = [12,3,10,67]
for(let i of arrr){
    // document.body.append(i + " ");
    console.log(i);
}

for(let i in arr){
    console.log(i);
}

//          ADVANCE METHOD OF ARRAY
let numb = [10,20,30,40,50];
console.log(numb);

// FIND()
let result1 = numb.find((el,i,numb)=>{
    return el >= 40;
})
console.log(`Using Method find result1 is ${result1}`);

// SOME()
let result2 = numb.some((el,i,numb)=>{
    return el > 50;
})
console.log(result2);
let br = document.createElement("br") // done for changin line
document.body.append(br)
document.body.append(result2)

// EVERY()
let result3 = numb.every((el,i,numb)=>{
    return el >= 10
})
console.log(result3);

//FILTER()
let result4 = numb.filter((el,i,numb)=>{
    return el >= 30
})
console.log(result4);

// MAP()
let result5 = numb.map((el,i,numb)=>{
    return el * 2;
})
console.log(result5);
console.log(numb);

let obj = {
    name : "abhi"
}
obj.age = 22;
console.log(obj);
// delete obj.age;
// console.log(obj);

obj.hasOwnProperty("name");
Object.keys(obj)




var s = "Hi Hi Hi"
var res = s.replace("Hi","Bye");
console.log(res);

var res = s.replaceAll("Hi","Bye");
console.log(res);