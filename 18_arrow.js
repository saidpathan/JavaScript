const user={
    username:"saidpathan",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to the website `);
        // console.log(this);
    }
 }

 // user.welcomeMessage();
// user.username="pathan";
// user.welcomeMessage();
// console.log(this);


// function chai() {
//         console.log(this);
// }
// chai();

const chai =  () => {
    // console.log(this);
}
chai();



// *************** Arrow Function **************** //

// const addtwo = (num1,num2) => {
//     return num1+num2;
// }

// const addtwo = (num1,num2) => (num1 + num2);

const addtwo = (num1,num2) => ({username:"said"});

console.log(addtwo(10,10));


