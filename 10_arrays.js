const myArr = [0,1,2,3,4,5];
const myHeros = ["ironman","superman"];
const myArr2 = [1,2,3,4,5];

// console.log(myArr[1]);

// Array Methods 

// myArr.push(6);
// myArr.push(7);
// myArr.pop();



// console.log(myArr.includes(8));
// console.log(myArr.indexOf(5));

const newArr= myArr.join()

console.log(newArr);
console.log(typeof newArr);

// Slice & Splice

console.log("A= " , myArr);
const myn1= myArr.slice(1, 3);
console.log(myn1);
console.log("B= " , myArr);

const myn2= myArr.splice(1, 3);
console.log(myn2);
console.log("C= " , myArr);


