//if statement 
const isUserLoggedIn = true;
const temperature = 55
if (temperature === 50) {
    console.log("less than 50");
} else {
    console.log("greter than 50");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;


if (userLoggedIn && debitCard) {                // AND Logical operator
    console.log("allow to buy Course");
}
if (loggedInFromEmail || loggedInFromGoogle) {   // OR Logical operator
    console.log("user logged in successfully");
}

