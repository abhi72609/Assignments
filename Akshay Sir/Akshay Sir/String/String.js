// let num = parseInt(prompt("Enter the Number"))
// for(let i=1;i<=10;i++)
// {
//     console.log(`${num} * ${i} = ${num*i}`);
    
// }

// let name= prompt("Enter the name")
// for(let i=0;i<name.length;i++)
// {
//     console.log(`${name.charAt(0).toUpperCase()}`+ `${name.slice(1).toLowerCase()}`);
    
// }

// function toCapitalize(name){
//     // let first = name.charAt(0);
//     // let last = name.slice(1);
//    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// }
// console.log(toCapitalize(prompt("Enter Name")));


let strr= "Fly by night sky bright";
let words = strr.split(' ').filter((el)=>el.split('').some((el)=> 'aeiou'.includes(el.toLowerCase())))
.map((el)=>el.length)

console.log(words);
