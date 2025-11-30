function getData(dataID){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve("200");
        },2000);
    });
}

// (async function(){
//     console.log("fetching data1...");
//     await getData(1);

//     console.log("fetching data2...");
//     await getData(2);

//     console.log("fetching data3...");
//     await getData(3);
// })()

async function getAllData(){
    console.log("fetching data1...");
    await getData(1);

    console.log("fetching data2...");
    await getData(2);

    console.log("fetching data3...");
    await getData(3);
}