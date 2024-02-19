const map = new Map()
map.set('IN', "India");
map.set('SA', "Saudi Arab");
map.set('UK', "United Kingdom");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num+10 )

const newNums= myNumbers.map( (num) => num * 10 )
                        .map( (num) => num + 1 )
                        .filter((num)=> num>=40)
console.log(newNums);




