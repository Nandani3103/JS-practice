//array

const myArr = [0 , 1 , 2 , 3 , 4 , 5];
console.log(myArr[0]);

const myHeroes = ['shaktiman' , 'naagraj'];

const myArr2 = new Array(1 , 2 , 3 , 4 );
console.log(myArr[1]);

//Array Methods

myArr.push(6);
myArr.push(7);
myArr.push(8);
console.log(myArr);

//Bekar h coz yeh function element ko array ke first position pe add karta h toh baaki jo elements h unko shift karna padta h toh time zyaada consume hota h
myArr.unshift(-1);
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

//slice , splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2);

//slice does not effect the original array but splice does effect the original array    