// let Con1 = document.getElementById("C1") // return single element
// // console.log(Con1.innerText);
// // Con1.innerText = "getElementById Is Performed"
// console.log(Con1);


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
