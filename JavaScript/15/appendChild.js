let a = document.createElement("h1");
console.log(a);
a.innerText = "Welcome to html";


let image = document.createElement("img"); // Element refer to tags of HTML
console.log(image);
image.setAttribute("src","https://i.pinimg.com/736x/9e/a7/b5/9ea7b548bb35114bdd527eefbe40166e.jpg");
image.setAttribute("height","150");
image.setAttribute("width","122");


let root = document.getElementById("root");
console.log(root);
root.appendChild(a);
root.appendChild(image);
