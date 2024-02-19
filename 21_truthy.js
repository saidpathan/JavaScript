const userEmail= [] 
if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email");
}


// Flasy values 

// false,0,-0,BigInt,0n,"",null,undefined,NaN

// Truthy values

// "0",'false'," ", [], {}, function(){}, 

if(userEmail.length === 0){
    console.log("array is empty");

}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("object is empty");
}



// Nullish coalescing operator (??) null undefined 
let val1;
// val1= 5 ?? 10;
val1= null ?? 10;

console.log(val1);

// ternary operator 

// condition ? true : false 
const teaPrice = 50; 
teaPrice < 80 ? console.log("more than 80") : console.log("less than 80");