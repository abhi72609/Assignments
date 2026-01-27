let p = document.querySelector("p")
//       getAttribute - get/fetch the value of attribute
console.log(p.getAttribute("class"));

//       setAttribute - new value but it not change the actually value of HTML file
console.log(p.setAttribute("class","New Class"));
console.log(p.getAttribute("class"));  
console.log(p);

//       removeAttribute - to remove the existing attribute of element
console.log(p.removeAttribute("class"));
console.log(p);
console.log(p.innerText);


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
console.log(newElement.innerText); // Hi, New Line added
console.log(newElement.innerHTML); // <i>Hi, New Line added</i>
console.log(newElement.outerHTML); // <h1> <i>Hi, New Line added</i> </h1>
console.log(newElement)
console.dir(newElement)

//      DELETE
// Remove
p.remove();