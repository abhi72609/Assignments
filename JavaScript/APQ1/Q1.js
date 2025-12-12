let newBtn = document.createElement("button")
newBtn.innerText = "Click Me"
newBtn.style.color = "white"
newBtn.style.backgroundColor = "Red"
newBtn.style.height = "40px"
newBtn.style.width = "60px"
newBtn.style.fontSize = "15px"

let insertBtn = document.querySelector("body")
insertBtn.prepend(newBtn)