// for loop
for (let i = 0; i<=10; i++) {
    const element = i;
    if (element==5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
    
}

// 1 to 10 Table print using for loop
for (let i = 1; i <=10; i++) {
    // console.log(`outer loop value ${i}`);
    for (let j =1; j <=10; j++) {
        // console.log(i + ' * ' + j + ' = ' + i*j);
     
        
    }
    
}

let myarray = ["flash","batman","superman"]
// console.log('lenght :-',myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
}

// break & continue

for (let index = 1; index <=20; index++) {
    if(index==5){
        // console.log("5 is detected");
        continue
    }
    // console.log(`value of i is = ${index}`);
    
}


// while loop 


let i  = 0;
while (i <= 10) {
    // console.log(`value of i is : ${i}`);
    i = i+1;
}


let myArr =["said","pathan","khan"]

let arr=0;
while (arr < myarray.length) {
    // console.log(`value is ${myArr[arr]}`);
    arr = arr+1;

}

// Do While loop 

let score = 21;
do {
    console.log(`score is ${score}`);
    score++;
    
} while (score <= 20);



