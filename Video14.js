//array is a non -primitive datatype

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Ironman", "Wolverine", "Hulk", "Batman"]


const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1])


//Array methods
myArr.push(6)
console.log(myArr)

//pop (to remove element in last)
myArr.pop()
console.log(myArr)

//unshift
myArr.unshift(0)//-> to insert data in first(but not optimize)
console.log(myArr)

myArr.shift()//->delete elmeent from start
console.log(myArr);

//includes
console.log(myArr.includes(4))

//index
console.log(myArr.indexOf(4))

//join convert array into string
const newarr = myArr.join()
console.log(typeof newarr)

//slice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1)


//splice()

const cars = ["Audi", "BMW", "Thar", "Royal Royce", [
    "Maruti", "Nano", "Mclarn"
]]
console.log(cars.splice(1, 0))
