// Event Handler in JS

let btn = document.querySelector("#btn")

btn.onclick = () => {
    console.log("handler1");
};

// Drawback: Assigning another handler to the same event property 
//           will override the previous one instead of adding a new handler.
btn.onclick = () => {
    console.log("handler2");
};






let div = document.querySelector("div")
div.style.margin = "10px"
div.style.padding = "10px"
div.style.height = "50px"
div.style.width = "50px"
div.style.border = "2px solid black"
div.style.color = "Darkblue"

div.onmouseover = () => {
    console.log(div.innerText = "you are inside box");
}