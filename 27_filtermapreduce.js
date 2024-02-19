// const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter( (num) => num>3)
// console.log(newNums);
// const myNums=[1,2,3,4,5,6,7,8]

// const newNums =[]

// myNums.forEach( (num) => {
//     if (num>3) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);



const books = [ 
    {title:'richdadpoordad', genre:'english', publish:2010},
    {title:'atomichabit', genre:'hindi', publish:2012},
    {title:'monkmode', genre:'gujarati', publish:2016}
    
]

let userBooks =books.filter( (bk)=> bk.genre === 'hindi')
 userBooks =books.filter( (bk)=> {
    return bk.publish >= 2009 && bk.genre === "english"
})
console.log(userBooks);
