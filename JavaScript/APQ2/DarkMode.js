let mode = document.querySelector("#button")
mode.style.height = "55px"
mode.style.width = "70px"
mode.style.fontSize = "20px"
let body = document.querySelector("body")

mode.addEventListener("click",() => {
    if(body.style.backgroundColor == "")
    {
        darkModeOn();
    }
    else{
        LightModeOn();
    }
});
function darkModeOn(){
    body.style.backgroundColor = "black"
    mode.style.color = "white"
    mode.innerText = "Light"
}

function LightModeOn(){
    body.style.backgroundColor = "White"
    mode.style.color = "black"
    mode.innerText = "Dark"
}