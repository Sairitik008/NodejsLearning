const name = "sai"
const repeatCount = 50


console.log(`Hello ${name} and count is ${repeatCount}`)


// string in object form 
const gameName = new String('Sairitik')
console.log(gameName)


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))


//from to start(0) to end(n-1)
console.log(gameName.substring(0, 4))


//reverse of string using slice

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)


// to remove space from start and end
const newStringOne = "  sai "
console.log(newStringOne);

console.log(newStringOne.trim())


//replace it replace old character with new one ok 

const data = " Learning python programming to become a web developer"
console.log(data.replace("web", "AI/ML"))


//includes (it tell that given character is available or not in string)
console.log(data.includes("python"))