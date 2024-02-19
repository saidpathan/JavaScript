const coding=['js','ts','py','rb'];

// coding.forEach(function(val){
// console.log(val);
// })

// coding.forEach ( (val) => {      //arrow function with callback
// console.log(val);
// })

// function printme(val) {
//     console.log(val);
// }
// coding.forEach(printme)

// coding.forEach( (val,index,arr)=> {
//     console.log(val,index,arr);

// })


const myCoding =[
{
    languageName:"javascript",
    languageFileName:"js"
},
{
    languageName:"python",
    languageFileName:"py"
},
{
    languageName:"typescript",
    languageFileName:"ts"
}

]

myCoding.forEach( (val)=> {
    console.log(val.languageName);
})