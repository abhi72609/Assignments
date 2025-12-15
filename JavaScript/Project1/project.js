let login = document.getElementById('LoginButton')
let LoginContainer = document.getElementById('LoginContainer');

let SignUp = document.getElementById('SignUpButton')
let SignUpContainer = document.getElementById('SignUpContainer');



login.addEventListener("click" , () => {
    LoginContainer.innerHTML = `
            <div id="Login">
                <form action="">
                    <input type="name" placeholder="User Name">
                    <input type="password" placeholder="password">
                </form>
                <button id="LoginContainerButton">Submit</button>
            </div>`;
    login.style.visibility = "hidden"
    SignUp.innerHTML = `Login is in Process...`
    SignUp.style.height = "125px"
    SignUp.style.width = "145px"
    // SignUp.style.textAlign = "center"
});



let SignUpObject = {};

SignUp.addEventListener("click", () => {
    SignUpContainer.innerHTML = `
        <div id="SignUp">
            <form id="SignUpForm">
                <input type="name" id="newUserName" placeholder="New UserName">
                <input type="password"  id="password" placeholder="password">
                <input type="number" id="PhoneNumber" placeholder="Phone-Number">
                <button type="submit">Submit</button>
            </form>
        </div>
    `;
    SignUp.style.visibility = "hidden"    
    login.innerHTML = `SignUp is in Process...`
    login.style.height = "125px"
    login.style.width = "145px"

    document.getElementById("SignUpForm").addEventListener("submit", function(e) {
    // e.preventDefault();
    SignUpObject.UserName = document.getElementById("newUserName").value;
    SignUpObject.Password = document.getElementById("password").value;
    SignUpObject.PhoneNumber = document.getElementById("PhoneNumber").value;
    console.log(SignUpObject);
    });
});


