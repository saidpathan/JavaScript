// Singleton
// Object.create

// Object Literals

const mySymbol =Symbol("key1");
const jsUser ={
    name:"said",
    age:22,
    [mySymbol]:"key1",
    location:"Kadi",
    email:"said@123.com",
    isLoggedIn: false,
    lastLoginDays: ["mon","sat"]

}
// console.log(jsUser.age);
// console.log(jsUser["name"]);
// console.log(jsUser[mySymbol]);

jsUser.email = "said@google.com";
// console.log(jsUser);

// Object.freeze(jsUser);
jsUser.email = "said@googlee.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("welcome to said's pc");

}
jsUser.greetingTwo = function(){
    console.log(`welcome to  ${this.name} pc world`);

}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




