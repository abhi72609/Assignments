// For moving one box to another i have to give each box a number and use EventListnere for each time a button is click a
// count is keep on the basic of that count is increse or dercese and then showBox function is invoke to view output
// in ViewPanel

let rightClick = document.getElementById("RightClick");
let leftClick = document.getElementById("leftClick");


// Selecting all the Boxesss
let boxes = document.querySelectorAll("#ViewPanel > div");
console.log(boxes);

// For keeping COUNT
let index = 0;

// Function to ShowBox
function ShowBox(i){
    boxes.forEach(Box => Box.style.display = "none");
    boxes[i].style.display = "block";
}

ShowBox(index)
// to move right 
rightClick.addEventListener("click", () => {
    index++;
    if(index >= boxes.length){
        // index = boxes.length - 1;
        // for circle movement
        index = 0;
    }
    ShowBox(index);
});

leftClick.addEventListener("click", () => {
    index--;
    if(index <= 0){
        // index = 0;
         // for circle movement
        index = boxes.length - 1;
    }
    ShowBox(index);
})