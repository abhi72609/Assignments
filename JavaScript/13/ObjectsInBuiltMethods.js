let emp1 = {
//  keys:values
    id : 1,
    name : "manoj",
    salary : 30000.00,
    desg : "Developer",
    dept : ["CS","IT","CLOUD"],
    greet : function(){
        console.log("Welcome");
    },
    isMarried : false
};

console.log(emp1.id);
console.log(emp1['id']);




let keyName = Object.keys(emp1);
console.log(keyName);

let values = Object.values(emp1);
console.log(values);

let arr = Object.entries(emp1);
console.log(arr);

// add
emp1.role = "software";
emp1.isPresent = true;
console.log(emp1);

// Update
emp1.id = 432;
console.log(emp1);

// view
console.log(emp1.role);
console.log(emp1["role"]);

// delete
delete emp1.dept;
delete emp1.greet;
// delete emp1.city
console.log(emp1);




