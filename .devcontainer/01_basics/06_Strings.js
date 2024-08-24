//For taking a look at the official documentation of javascript we can just write what we wanna search and mdn. For eg, trim mdn

const name = "Nandani";
const repoCount = 10;

console.log(name + repoCount + " Value"); // this way is not generally used

console.log(`Hello my name is ${name} and I have ${repoCount} repositories`); // this way is generally used

const gameName = new String('Stumble-Guys');

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-12 , 4);
console.log(anotherString);

const newStringOne = "    Nandani  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nandani.com/nadani%20sharma";
console.log(url);
console.log(url.replace('%20' , '-'));

console.log(url.includes('nandani'));

console.log(gameName.split('-'));