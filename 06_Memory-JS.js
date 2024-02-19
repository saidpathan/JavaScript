// Two types memory in js
// 1- Stack (Primitive Datatype) , 2- Heap(Non-Primitive Datatype)

let myYoutubeName = "saidpathan";
let anotherName = myYoutubeName;

console.log(myYoutubeName);
console.log(anotherName);

let userOne =
{
    email: "user1@gmail.com",
    upi: "user1@paytm"
} 
 let userTwo = userOne;
 userTwo.email="said@google.com";

 console.log(userOne.email);
 console.log(userTwo.email);






