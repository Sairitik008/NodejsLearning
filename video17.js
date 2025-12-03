//two ways to define object
const snapchat = new Object()
const instagram = {}
console.log(snapchat)
console.log(instagram)


//id
snapchat.id = 12
snapchat.name = "sai"
snapchat.isLoggined = false

console.log(snapchat)


//nested object 
const regularUser = {
    email: "sairitik@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sai",
            lastname: "Naidu"
        }
    }
}


//accessing first name from nested object 
console.log(regularUser.fullname.userfullname.firstname)


//If response is coming from api it will handle response using   ? it is a safe technique so
//  if there is data  only then it will work so there will be no need to work if else conditions 
// in a code for this.

//It check code with more safety to  check null values

console.log(regularUser?.fullname?.userfullname?.lastname)

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}

//const obj3 = { obj1, obj2 }


//assign method to assign values
//const obj3 = Object.assign({}, obj1, obj2)//empty curly bracket is a optional bracket
//onsole.log(obj3)

//spred operator usage is more
const obj3 = { ...obj1, ...obj2 }
console.log(obj3)


//
const users = [
    {
        id: 1,
        email: "sairitiknaidu@gmail.com",
    },
    {
        id: 2,
        email: "sairitiknaidu7@gmail.com",
    },

    {
        id: 3,
        email: "sairitiknaidu8@gmail.com",
    }
]

console.log(users[1])//complete data of index
console.log(users[1].email)


console.log(snapchat)


//ALL keys
console.log(Object.keys(snapchat))

//Values
console.log(Object.values(snapchat))

//This both show data in array.

console.log(Object.entries(snapchat))



//kya apke pass ye value he using hasOwnProperty

console.log(snapchat.hasOwnProperty('isLoggined'))