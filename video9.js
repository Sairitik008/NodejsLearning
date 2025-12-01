//primitive(call by value not call by reference)
// 7 types : string , Number , Boolean, null ,undefined, Symbol ,BigInt




//Reference (Non-primitive):Array , Objects , Functions etc


const score = 100;
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id === anotherId);


const bigNumber = 23456789236276676787n
console.log(typeof bigNumber)





//Arrays , Objects , Functions
const heros = ["Ironman", "Wolverine", "Superman", "Hulk", "Spiderman", "Batman"]

const myobj = {
    name: "Sairitik",
    age: 21,


}
console.log(typeof myobj)

function mydetail() {
    console.log("Details print")
}

console.log(typeof mydetail)

const k = () => { console.log('K is defined by arrow function') };
console.log(typeof k)