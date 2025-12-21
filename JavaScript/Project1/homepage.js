let user = localStorage.getItem("loggedUser");

if(!user){
    window.location.href = "index.html"
}

document.getElementById("displayUser").innerText = user;