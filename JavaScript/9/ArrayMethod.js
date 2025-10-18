let arr = [10,20,"Hey",40,true]; //OG Array - Original Array
console.log(arr)
console.log(arr.length)

// Inbuilt Method

//PUSH - to add element
arr.push(20,30,40)          //  add element from the last index of OG array
console.log(arr);

arr.unshift("hello",345)    //  add element from the starting index of OG array
console.log(arr);

// POP - to remove element form last index
arr.pop()
arr.pop()
console.log(arr);

// Shift - to remove element form starting index
arr.shift()
console.log(arr);


// Splice - to delete and add element
arr.splice(2,2)         //  from position 2 it will remove 2 elements (include position 2)
console.log(arr);
arr.splice(2,1,"hi","why","bye") // after deleting one element from position 2 courser is present their and it add element's
console.log(arr);
arr.splice(5) // if only position is mention then it will remove all the element after that position
console.log(arr);


// Slice - to take out specific part of array
let newArr = arr.slice(1,3)  // from position 1 to 3 and excluding 3 position ... element present between 1 to 3 is cut as slice
console.log(newArr);


//Reverse - to reverse the array
arr.reverse()
console.log(arr);