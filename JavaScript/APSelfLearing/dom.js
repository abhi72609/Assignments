// window.alert("Welcome to world of JS");

let heading1 = document.getElementById("heading1") // Id is meant to be unqine and represtation id is #
console.log(heading1);
let heading2 = document.getElementById("heading2") // as here id is different
console.dir(heading2.innerText);


let className = document.getElementsByClassName("className")
console.dir(className);
console.log(className);


let tagName = document.getElementsByTagName("h2")
console.dir(tagName);
console.log(tagName);

// querySelector will return only one element 
let firsttag = document.querySelector("p") // it can select tag/class/id 
console.dir(firsttag);
console.log(firsttag);
// if i only want to print inner text no tags then
console.log(firsttag.innerText);

// if i want all the element then use querySelectorAll
let Alltag = document.querySelectorAll("p")
console.log(Alltag);
console.dir(Alltag);
// Since it store data in form NodeList we have to access using index 
console.log(Alltag[0].innerText);
console.log(Alltag[1].innerText);
console.log(Alltag[0].textContent);


