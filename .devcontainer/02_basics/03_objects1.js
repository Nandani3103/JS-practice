// singleton 

// object literals

const mySym = Symbol("key 1")

const JsUser = {
    name : "Nandani",
    "full name" : "Nandani Sharma",
    [mySym] : "mykey1",
    age : 21,
    location : "Garia",
    email : "nandanisharma31official@gmail.com",
    isLoogedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "nandanisharma1126@gmail.com"
// Object.freeze(JsUser);
JsUser.email = "nandanisharmavis@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greeting2 = function(){
    console.log('Hello JS user,${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());


