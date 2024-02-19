const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc}, currval: ${currval}`);
//     return acc+currval;

// },0)

const myTotal = myNums.reduce((acc, currval) => (acc + currval) ,0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName:"js Course",
        price:5999
    },
    {
        itemName:"python Course",
        price:2999
    },
    {
        itemName:"ios Course",
        price:10999
    },
    
]


const priceToPay = shoppingCart.reduce( (acc,item) => acc+ item.price ,0 )


console.log(priceToPay);