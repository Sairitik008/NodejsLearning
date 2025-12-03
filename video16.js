//Declaration of object can be possible like a literal and constructor
//singleton(When we create a object through a contructor is called singleton)
//when we declare it will be not a singleton.


//object literals

//Object.create->this is called singleton method

//Note: Important to access or use symbol enclosed them in square bracket 
const mysym = Symbol("key1")
const user = {
    name: "sairitik",
    "full name": "Sairitik naidu",
    age: 24,
    [mysym]: "Mykey1",
    address: "Nara road",
    email: "sairitiknaidu8@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};
// console.log(`Name:  ${user.name} Age: ${user.age} Adddress:${user.address} `)

console.log(user.email)
console.log(user["email"])//calling using key
console.log(user["full name"])
console.log(typeof user[mysym])

user.email = "Sairam@fmail.com"
console.log(user.email)
// Object.freeze(user)
//to freeze to stop changes (means after freeing this object the changes cannot made to that object)

user.email = "sairitik00@gmail.com"
console.log(user.email)

console.log(user)

user.greeting = function () {
    console.log("Hello JS user");
}

user.greetingTwo = function () {
    console.log(`Hell js user, ${this.name}  and ${this.isLoggedIn}`)
}

console.log(user.greeting)
console.log(user.greeting())
console.log(user.greetingTwo())

/*When we want to access any string keys we use square 
  to access instead of dot operator for accessing content
*/