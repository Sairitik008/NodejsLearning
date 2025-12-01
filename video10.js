// Important part stack and heap memory management


//Two types of memory (stack and heap)

//primitive use stack memory (here we get a copy)
//non-primitive use heap memory(here we get reference of a memory)


let MyYoutube = "Sairitiknaidu"
let anothername = MyYoutube
anothername = "sairitik007"

console.log(anothername)
console.log(anothername)


let userOne = {
    "email": "sairitiknaidu@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sairitik@email.com"

console.log(userOne.email)
console.log(userTwo.email)