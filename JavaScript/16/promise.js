// EXAMPLE TO UNDERSTAND PROMISE

// let respone = true;
// let data = new Promise((resolve,reject)=>{
//     if(respone === true){
//         console.log("promise is Successful",resolve);;
//     }
//     else{
//         console.log("Promise was not successfull",reject);
        
//     }
// })

// data
// .then((res) => {
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        console.log(res);
        res.json()
            .then((info) => {
                console.log(info);
            })
            .catch((errMsg) => {
                console.log(errMsg);
            })
    })
    .catch((err) => {
        console.log(err);
    })