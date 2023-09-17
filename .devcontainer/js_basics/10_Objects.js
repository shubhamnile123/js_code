//singleton => constructor banega to singleton object Banega

//object literals

const mySym = Symbol("key1")
 

const JsUser = {
    name : "shubham",
    "full name" : "Shubham Nile",
    [mySym] : "myKey1",
    age : 18,
    location: "pune",
     email : "shubham@gmail.com",
     isLoggedIn : false,
     lastLoginDays : ["Monday","Saturday"]
         
}

// console.log(JsUser.email);

// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "shubham1@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "shubham1000@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello Js user ${this.name}`);
}

console.log(JsUser.greeting());