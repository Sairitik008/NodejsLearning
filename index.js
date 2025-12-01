const accountId = 144553
let accountEmail = "sairiitk@gmail.com"
var accountPassword = "12345"

accountCity = "Nagpur"

// accountId = 2


//const cannnot redefine or reassign
//var don't have block scope which is an issue in old javascript version
//let is new javascript part which have block scope
//if we don't define any value in variable it will assign undefined
console.log(accountId);

accountEmail = "Sai@gmail.com"
accountPassword = "12340"
accountCity = "Indore"
console.table([accountId, accountEmail, accountPassword, accountCity])