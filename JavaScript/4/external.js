function print(a,b){
    console.log("Hello Weclome to New Topic");
    c = a + b;
    console.log(c);
    return c; // no need to specify return type 
}

let num = print(30,40);
console.log(num);
console.log(typeof num);

num = print(30,"40");
console.log(num);
console.log(typeof num);

print(20,"30");
print();
print();
print(20,);
print(20,null);
print(20,false);
print(20,false);

function add(a,b){
    console.log("First");
    console.log(a + b);
}

function add(a,b,c){
    console.log("First");
    console.log(a + b);
}

add(20,50);
