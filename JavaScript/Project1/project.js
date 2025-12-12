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
                <button>Submit</button>
            </div>`;
            SignUpCoantiner.innerHTML = "";
});

SignUp.addEventListener("click", () => {
    SignUpContainer.innerHTML = `
            <div id="SignUp">
                <form action="">
                    <input type="name" placeholder="New UserName">
                    <input type="password" placeholder="password">
                    <input type="number" placeholder="Phone-Number">
                </form>
                <button>Submit</button>
            </div>`;
});