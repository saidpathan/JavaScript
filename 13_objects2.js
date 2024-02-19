// singleton (constructor)
// const tinderUser = new Object() //Singleton object
const tinderUser = {}          // non-singleton object

tinderUser.id = "123abc";
tinderUser.name="pathan";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email:"saidpathan@gmail.com",
    fullname: {
        userfullname: {
                firstname: "said",
                lastname:"pathan",
        }
    }
}

// console.log(regularUser.fullname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({}, obj1,obj2);
// console.log(obj3);

const obj3={...obj1, ...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"s@google.com"
    },
    {
        id:2,
        email:"s@google.com"
    },
    {
        id:3,
        email:"s@google.com"
    },
        
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Unique style






