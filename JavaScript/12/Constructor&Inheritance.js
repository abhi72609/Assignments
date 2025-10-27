class Student{
    constructor(id,name,marks,subject,branch,course,phone,fees,dob,email){
        this.id = id;
        this.name = name;
        this.marks = marks;
        this.subject = subject;
        this.branch = branch;
        this.course = course;
        this.phone = phone;
        this.fees = fees;
        this.dob = dob;
        this.email = email;
    }
}
let s1 = new Student(434,"Jeevan",[123,456,789],["JAVA","SQL","WEB TECH"],"IT",
         "FullStackCourse",35000,12345678910,"18-07-2003","Ab@gmai.com");

console.log(s1);
         

class Teacher extends Student{
    constructor(T_id,T_name,id,name,marks,subject,branch,course,phone,fees,dob,email){
        super(id,name,marks,subject,branch,course,phone,fees,dob,email);
        this.T_id = T_id;
        this.T_name = T_name;
    }
}
let T1 = new Teacher("abc","PAVAN SIR",4321,"Akashy",[243,245,247],["JAVA","WEB TECH","SQL"],
                    "CSE","Full Stack",89098,9143256701,"18-07-2004","ab@gmail123.com");
console.log(T1);
        

function Employee(id,name,salary,dept){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.dept = dept;
}
let e1 = new Employee(123,"ABHI",35000,"Full Stack")
console.log(e1);
