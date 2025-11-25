// Normal 
add(20,10) // function hoisting
function add(a,b){
    console.log("Add of : ", a+b);
}

//      ARROW
// This won't Work
// add1(20,30)
// var add1 = (a,b) => {
//     console.log("Add of : ", a+b);
// }
var add1 = (a,b) => {
    console.log("Add of : ", a+b);
}
add1(20,30)

//      FUNCTION
// add2(23,12)              this Won't work
// var add2 = function(a,b)
// {
//     console.log("Add of : ",a+b);
// }
// This will work
var add2 = function(a,b){
    console.log("Add of : ",a+b);
}
add2(23,12)


let cart = [
    {
        id: 1,
        name: "bike",
        price: 899990,
    },
    {
        id: 2,
        name: "Laptop",
        price: 40000,
    },
    {
        id: 3,
        name: "Phone",
        price: 50000,
    }
];

for(let i=0; i<cart.length; i++){
    console.log(cart[i].name + " : " + cart[i].price);
    // return cart[i].name;
}

let cart1 = cart.forEach((i) => {
    console.log(i.name + " : "+ i.price); // it will to concatenation
    console.log(i.name + " : ", i.price); // 
    
    return i;
})
console.log(cart1);

let cart2 = cart.map((i) => {
    return i.name;
    // console.log(i);
    // console.log(i.name + " : " ,i.price);
})
console.log(cart2);
