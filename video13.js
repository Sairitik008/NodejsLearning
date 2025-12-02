//Dates

let myDate = new Date()
console.log(myDate);


//conversion of date into string
console.log(myDate.toISOString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)//object datatype


//month start from 0 to n-1(12-1)=11
//week start from 

//DD-MM-YYYY

let mycreatedDate = new Date(2023, 0, 23)
console.log(mycreatedDate.toDateString())


let newcreatedDate = new Date("2023-001-14")
console.log(newcreatedDate.toLocaleString())


//timestamp
let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(mycreatedDate.getTime())


//conversion of miilisecond in proper format
console.log(Date.now())
console.log(Math.floor(Date.now() / 1000));


//different items of Date
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

let defaultfunction = newDate.toLocaleString('default', {
    weekday: "long",

})

console.log(defaultfunction)