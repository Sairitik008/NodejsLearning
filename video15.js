//Advance part of array
const marvel = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]


//marvel.push(dc_heros)//push element in a same array
console.log(marvel)
//console.log(marvel[3][1])

const newheros = marvel.concat(dc_heros)
console.log(newheros)//new array

const all_new_heros = [...marvel, ...dc_heros]
console.log(all_new_heros)

const anotherarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//to resolve arry inside a array
const real_another_array = anotherarray.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Sai"))

//convert data into array using
console.log(Array.from("Sai"))



//creating an array of single variables 
const dev1 = "Shrunkhal"
const dev2 = "Rishi"
const dev3 = "Sagar"
const dev4 = "Kastubh"
const dev5 = "Tanmay"

console.log(Array.of(dev1, dev2, dev3, dev4, dev5))