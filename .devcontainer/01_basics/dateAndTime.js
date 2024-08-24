//Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

let myCreatedDate1 = new Date(2024 , 7 , 23);
let myCreatedDate2 = new Date(2024 , 7 , 23 , 5 , 3);
console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2024-08-25");
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getDate());

newDate.toLocaleString('deafult',{
    weekday: 'long';

});


