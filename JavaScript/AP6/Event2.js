let btn2 = document.querySelector("#btn1")

btn2.onclick = (evt) => {
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    console.log(evt);  
};

//          Event Listener

btn2.addEventListener("click", () => {
    console.log("Button was clicked - Handler 1");
});

btn2.addEventListener("click", () => {
    console.log("Button was clicked - Handler 2");
});

btn2.addEventListener("click", () => {
    console.log("Button was clicked - Handler 3");
});

btn2.addEventListener("click", () => {
    console.log("Button was clicked - Handler 4");
});

btn2.removeEventListener("click", () => {
    console.log("Button was clicked - Handler 3");
});


