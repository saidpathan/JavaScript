const name="saidpathan";
const repoCount =55;

console.log(`hello my name is ${name} and my repocount is ${repoCount}`);



const gameName = new String ('saidGame');

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('d'));

const newGame = gameName.substring(0,5);
console.log(newGame);

const anotherString = gameName.slice(0,3);   // Also Allowed Negative values (-1,-2)
console.log(anotherString);


const newStringOne = "    Said     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:\\said.com/said%20pathan";
console.log(url.replace('%20','-'));

console.log(url.includes('said'));

console.log(gameName.split('-'));
























