let loginBtn = document.getElementById("LoginButton");
let signupBtn = document.getElementById("SignUpButton");
let loginContainer = document.getElementById("LoginContainer");
let signupContainer = document.getElementById("SignUpContainer");


loginBtn.addEventListener("click", () => {
    loginBtn.style.display = "none";
    loginContainer.innerHTML = `
        <input type="text" id="loginUsername" placeholder="Username">
        <input type="password" id="loginPassword" placeholder="Password">
        <button id="loginSubmit">Login</button>

    `;
});

// SIGNUP FORM
signupBtn.addEventListener("click", () => {
    signupBtn.style.display = "none";
    signupContainer.innerHTML = `
        <input type="text" id="signupUsername" placeholder="Username">
        <input type="password" id="signupPassword" placeholder="6 Digit Password">
        <input type="number" id="signupPhone" placeholder="10 Digit-PhoneNo">
        <button id="signupSubmit">Signup</button>
    `;
});


// SIGNUP LOGIC
document.addEventListener("click", (e) => {
    if (e.target.id === "signupSubmit") {
        
        let username = document.getElementById("signupUsername").value.trim;
        let password = document.getElementById("signupPassword").value.trim;
        let phone = document.getElementById("signupPhone").value.trim;
        
        //Empty check
        if (!username || !password || !phone) {
            alert("All fields Correctly");
            return;
        }
        //6 digit password check
        if(!/^\d{6}$/.test(password)){
            alert("Atleat 6 digit Password");
            return;
        }
        //10 digit phone
        if(!/^\d{10}$/.test(phone)){
            alert("Should be 10-Digit PhoneNo.");
            return;
        }
        let user = {username, password, phone};
        localStorage.setItem("userData", JSON.stringify(user));
        alert("Signup successful! Now Login.");
    }
});

// LOGIN LOGIC
document.addEventListener("click", (e) => {
    if (e.target.id === "loginSubmit") {
        let enteredUser = document.getElementById("loginUsername").value;
        let enteredPass = document.getElementById("loginPassword").value;

        let savedUser = JSON.parse(localStorage.getItem("userData"));

        if (!savedUser) {
            alert("No user found. Please Signup first.");
            return;
        }

        if (enteredUser === savedUser.username && enteredPass === savedUser.password) {
            localStorage.setItem("loggedUser", savedUser.username);
            window.location.href = "homepage.html";
        } else {
            alert("Invalid credentials");
        }
    }
});