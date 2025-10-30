let body = document.querySelector("body")
// body.style.alignContent = "center";  WRONG WAY TO ASSIGN ALL ELEMENT TO CENTER OF PAGE
//RIGHT WAY
body.style.textAlign = "center";
body.style.border = "2px solid black"


let header = document.getElementById("header"); // don't give # tag for id 
console.log(header);
header.src = "https://i.pinimg.com/736x/9e/a7/b5/9ea7b548bb35114bdd527eefbe40166e.jpg";
header.heigth = "300";
header.width = "250";
// header.style.alignContent = "center";
header.style.border = "4px solid brown";
header.style.padding = "5px";
header.style.marginTop = "10px";    



let BodySection = document.querySelector(".bodysection1"); // why we have to use . (operator) here to assec class selector
BodySection.style.border = "2px dashed green";
BodySection.style.margin = "10px 625px"
let details = document.getElementsByClassName("details"); // why we don't have to use . (operator) here to assec class selector
console.log(details);
details[0].innerText = "Name : Abhishek Kumar Raj";
details[1].innerText = "Email : abhishekraj93088@gmail.com";
details[2].innerText = "Phone : 7260931389";
// details.style.border = "2px dashed green";

let footer = document.getElementById("footer");
console.log(footer);
footer.style.height = "45px";
footer.style.width = "165px";
footer.style.alignItems = "center";
footer.style.fontSize = "25px";
footer.style.margin = "10px";
footer.style.color = "white";
footer.style.backgroundColor = "orange";