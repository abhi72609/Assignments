let p = document.querySelector("p")
console.log(p.getAttribute("class"));

//       setAttribute
console.log(p.setAttribute("class","New Class"));

let node = document.querySelector("#heading")
node.style.color = "black"

//  INSERT
let newBtn = document.createElement("button");
newBtn.innerText = 'ClickMe'
// console.log(newBtn);

// Append 
var hi = document.querySelector("h1")
hi.append(newBtn)

// Prepend
hi.prepend(newBtn)

// Before
hi.before(newBtn)

// After
hi.after(newBtn)


let newElement = document.createElement("h1"); // <h1> </h1>
newElement.innerHTML = "<i>Hi, New Line added</i>"; // <h1> <i>Hi, New Line added</i> </h1>

document.querySelector("body").prepend(newElement);


//      DELETE
// Remove
p.remove();

console.log(newElement.innerText); // Hi, New Line added
console.log(newElement.innerHTML); // <i>Hi, New Line added</i>
console.log(newElement.outerHTML); // <h1> <i>Hi, New Line added</i> </h1>
console.log(newElement)
console.dir(newElement)