function AscynFunction1 () {  //This thing's are done by api
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            console.log("Data1");
            resolve("success");
        }, 4000);
    });
}

function AscynFunction2 (){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data2");
            resolve("success");
        }, 4000);
    });
}

// IN THIS CASE IT WILL RETURN BOTH THE DATA AT A SAME TIME BUT WE WANT 1ST DATA THEN AFTER 4 SEC NEXT DATA


// console.log("fetching data1...");
// let p1 = AscynFunction1(); // When we call AscynFunction21 it will return Promise 
// p1.then((res) => {
//     console.log(res);
// })

// console.log("fetching data2...");
// let p2 = AscynFunction2(); // When we call AscynFunction2 it will return Promise 
// p1.then((res) => {
//     console.log(res);
// })

// THEREFORE
console.log("Fetching Data 1 ..."); //now after execution of 1st data then after 4 sec next data will come
// bcz of promise chaining after 4 sec then other function is invoked
let p1 = AscynFunction1()
p1.then((res) => {
    console.log(res);
    console.log("Fetching Data 2 ...");
    let p2 = AscynFunction2()
    p2.then((res) =>{
        console.log(res);
    });
});
