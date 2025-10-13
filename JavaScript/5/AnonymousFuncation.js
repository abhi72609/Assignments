// AnonymousFuncation

// function(a,b){
//     console.log(a*b);
//     return(a+b);
// }

// Function with Expression
let add = function(a,b)
{
    console.log(a*b);
    return a + b;
}
console.log(add);
console.log(typeof add);

let total = add;
console.log(total);

// Imedeatly Invoked Function Expression(IIFE)
(function(a,b){
    console.log(a * b);
})(30,50);
console.log("Kabab mai haddi");

function add(a,b){
    return a + b;
}

function mul(x,y){
    return x * y;
}

// Higher Order Function
function operate(funName, val1, val2)
{
    return funName(val1,val2)
    // return add(20,30);
    // return mul(10,10);
}

let tota = operate(add,20,30);
console.log(tota);

let product = operate(product,20,30);
console.log(total);