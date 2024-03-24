let promise1 = new Promise(function(resolve,reject){
    return resolve("Promise 1 is Completed");

})
promise1.then(function(p1){
console.log(p1);
})