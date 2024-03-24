
//////  PROMISES ///// 
// let ans = new Promise(function(res,rej){
//     return res("Pahele gher jaoo ")
// })
// let p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("Gate kholo or lagao")
//     })
    
// })
// let p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("khana pakao or khao")
//     })
// })
// let p4 = p3.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("T.V Dekho")
//     })
// })
// let p5 = p4.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("So jao brothers")
//     })
// })
// p5.then(function(data){
//     console.log(data);
// })


////// ASYNC AWAIT ///////

async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans = raw.json();
    console.log(ans);

}