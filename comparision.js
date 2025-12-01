// console.log("2" > 1);
// console.log("02" > 1);


console.log(null > 0)//false
console.log(null == 0)//false
console.log(null >= 0)//true

/*
Note: The reason is that an equality check == and
comparisions > <>= <= work differently

comparisions convert null to a number , treating
it as 0.  That's why(3) null>=0 is true and (1)
null>0 is false

*/

//Note : If compare define with other operator to undefined it give false but for <0 it will be true
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)


//strict check is used to check value and datatype
let Password = "Admin123"
if (Password === "Admin123") {
    console.log("Correct password")
}
else {
    console.log("Incorrect Password")
}