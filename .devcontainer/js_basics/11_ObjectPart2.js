//const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Shubham"
tinderUser.isLogin = false

//console.log(tinderUser);

const regularUser = {
  email : "shubhamnile@gmail.com",
  fullname : {
    userFullName :{
        name :"shubham",
        lastname : "Nile"
      }
  }
}
//console.log(regularUser.fullname.userFullName);

const obj1 = {1 : "a", 2 :"b"}
const obj2 = {3 : "c", 4 :"d"}
const obj3 = {5 : "e", 6 :"f"}

//const obj4 = Object.assign({},obj1,obj2,obj3);
//console.log(obj4);

const obj4 = {...obj1,...obj2,...obj3} // ...spreadOpertor

console.log(obj4);

const users=[
  {
    name :"shubham",
    email : "s@gmail.com"
  }, 
  {
    name :"shubham",
    email : "s@gmail.com"
  },
  {
    name :"shubham",
    email : "s@gmail.com"
  }
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
