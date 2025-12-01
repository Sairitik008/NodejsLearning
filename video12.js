//Math & Number


const score = 440
console.log(score)
console.log('---------------------------')
const balance = new Number(100)
console.log(balance)


//convert in string and count length
console.log(balance.toString().length);


//to show precision value 2 only after decimal
console.log(balance.toFixed(2))


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3))


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

/**************************Math Module**************************** */

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))

console.log(Math.ceil(4.6))//top round up(upper)
console.log(Math.floor(4.2))//lowest value()

//Note: Mostly we use  round method

console.log(Math.min(3, 5, 7, 12, 90, 11))
console.log(Math.max(74, 15, 60, 11, 100, 451, 20))

//random number generation
console.log(Math.random())
console.log((Math.random() * 10) + 1)//if 0.04 so we increase value by 1

const min = 10
const max = 20


//to generate random number between min and max number
console.log(Math.floor(Math.random() * (max - min + 1)) + min)