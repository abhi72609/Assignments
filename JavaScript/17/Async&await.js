// async function returns promise
async function fetchData()
{
    var a = 10;
    return a;
}
let store = fetchData();
console.log(store);

// await is automatically wait/automatic delay for any operation and it's used only inside a async function
async function fetchData(){
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    let res = await data.json();
    console.log(res);
}
fetchData();


//we handle exception using try and catch
try{
    async function fetchData(){
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    let res = await data.json();
    console.log(res);
}
fetchData();
}
catch(e){
    console.log("Data Not Recieved",e);
    
}