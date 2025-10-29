// Normal 
// add(20,10) // function hoisting
// function add(a,b){
//     console.log("Add of : ", a+b);
// }

// // Arrow
// add1(20,30)
// var add1 = (a,b) => {
//     console.log("Add of : ", a+b);
// }

// // Function
// add2(23,12)
// var add2 = function(a,b)
// {
//     console.log("Add of : ",a+b);
// }


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
        Price: 50000,
    }
];

for(let i=0; i<cart.length; i++){
    console.log(cart[i].name + " : " + cart[i].price);
    return cart[i].name;
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
