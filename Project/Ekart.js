let userInfo=[
    {
        id:1234,
        email:"shashi@gmail.com",
        password:"virat"
    },
    {
        id:12345,
        email:"manu@gmail.com",
        password:"dhoni"
    },
    {
        id:1234,
        email:"anu@gmail.com",
        password:"virat"
    }
];

function addUserInfo(e)
{
    e.preventDefault();
    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    let date=document.getElementById("date").value;
    let password=document.getElementById("pwd").value;
    let image=document.getElementById("image").value;

    let user={name,phone,email,date,password,image};
    userInfo.push(user);
    console.log(userInfo);
}
console.log(userInfo);

function checkLogin(e){
    e.preventDefault();
    let email=document.getElementById("uname").value;
    let pwd=document.getElementById("upwd").value;

    let isPresent=userInfo.filter((user)=>{
        return email===user.email&&pwd===user.password;
    })
    if (isPresent.length>0) {
        alert("Login Successful")
        window.location.href="./homepage.html"
        // window.location.href=""
    }
    else{
        alert("Login Failed")
    }
}