
let a = 300;
if(true){
    let a= 10;
    const b=20;
    var c=30;
    // console.log("Inner:",c);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username= "said";

    function two(){
        const website="youtube";
        console.log(username);

    }
    // console.log(website);
    // two();
}

// one();  


if(true){
    const username="SaidPathan";
    if(username === "SaidPathan"){
        const website = " | YouTube";  

        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ****************** INTERESTING ****************** //

function addOne(num) {
    return num+1;
    
}
console.log(addOne(5));

const addTwo = function(num) {
    return num+2;
}
console.log(addTwo(5));

