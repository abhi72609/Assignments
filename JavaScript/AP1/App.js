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


sayHello();
let sayHello = function () {
    console.log("hi");
}