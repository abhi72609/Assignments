const student = {
    id : 1,
    name : "Abhishek",
    marks : 78.09,
    printMarks : function() {
        console.log("Marks = ",this.marks);
    },
}
console.log(student.printMarks);
console.log(student);


const Emp = {
    calcTax() {
        return this.salary * 0.1;
    }
};

console.log(Emp);

var KaranArjun = {
    salary : 50000
};

KaranArjun.__proto__ = Emp;
console.log("Calculate 10% Tax : ",KaranArjun.calcTax());
console.log(KaranArjun.hasOwnProperty());






// CLASSES
class car{
    star()
    {
        console.log("Start");
    }

    stop()
    {
        console.log("Stop");
    }

    SetBrand(Brand)
    {
        this.BrandName = Brand;
    }
}
console.log(car);


let Frotuner = new car();
Frotuner.SetBrand("Frotuner");
console.log(stop)
console.log(Frotuner);

console.log("hi" + "hello");

function app (a,b){
    console.log(a+b);
    
}
app(3,4);
console.log(app);


const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I'm a promise");
        resolve("SucessFully");
        // reject("Network Error");
    })
};

let promise = getPromise();
promise.then((res) => {
    console.log("Promise Fulfilled",res);
});

promise.catch((err) => {
    console.log("rejected",err);
    
})
// function GetNextIterator(data,getnextdata){
//     setTimeout(() => {
//         console.log("data",i);
//         getnextdata();
//     }, 3000);
// }

// for(var i = 0; i<=3; i++)
// {
//     GetNextIterator(i,()=>{
//         GetNextIterator(i,()=>{
//             GetNextIterator(i,()=>{})
//         })
//     })
// }



console.log("Fetching Data ...");
function GetNextIterator(data, getnextdata) {
    setTimeout(() => {
        console.log("data", i);
        getnextdata();
    }, 3000);
}

var i = 1;

function start() {
    if (i > 3) return;   
    GetNextIterator(i, () => {
        i++;
        start();         
    });
}
start();
















