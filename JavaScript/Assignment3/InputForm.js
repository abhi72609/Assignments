let usersInfo = [];

function addInfo(e){
    e.preventDefault(); // use to prevent the default behviour of button i.e, to submit the record and refresh by it's own

    let Name = document.getElementById("Name").value;
    let Email = document.getElementById("Email").value;
    let Phone = document.getElementById("Phn").value;
    let DOB = document.getElementById("DOB").value;
    let Password = document.getElementById("pwd").value;
    let Profile_Pic = document.getElementById("Img").value;

    let user = {Name,Email,Phone,DOB,Password,Profile_Pic};
    usersInfo.push(user);
    console.log(usersInfo);
}