let heading1 = document.getElementById("root");
console.log(heading1);
heading1.innerText = "Welcome To DOM";
heading1.style.color = "Orange";
heading1.style.backgroundColor = "wheat";

let image1 = document.getElementById("image");
console.log(image1);
image1.src = "https://www.royalchallengers.com/PRRCB01/public/styles/1061x767_landscape/public/2024-11/dl.beatsnoop.com-3000-eLySPQ7UOJ.jpg?itok=ia-DH33f"
image1.height = "100";
image1.width = "100";


let h2 = document.getElementsByClassName("Dora");
console.log(h2);
h2[0].innerText = "I'm here";
h2[1].innerText = "I'm Going";
h2[2].src = "https://cdna.artstation.com/p/assets/images/images/026/941/654/large/kaustubh-chaudhary-doremon-pink-no-band1.jpg?1590151557"
h2[2].style.height = "70px"; // using css in javascript
h2[0].style.color = "red";


let para = document.getElementsByTagName("p");
console.log(para);
para[0].textContent = "I'm first para";
para[1].textContent = "I'm second para";
para[2].textContent = "I'm third para";

let rambo = document.getElementsByName("rambo");
console.log(rambo);
rambo[0].innerText = "Welcome to Html";
rambo[1].innerText = "Welcome to Css";



let root = document.querySelector("#root1");
console.log(root);
root.textContent = "I'm Jspider Student";


let root2 = document.querySelectorAll(".root2");
console.log(root2);
root2[0].textContent = "I'm first";
root2[1].textContent = "I'm second";
root2[2].textContent = "I'm third";