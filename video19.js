//function should be use with a memory management in js
function sayMyNmae() {
    console.log("s")
    console.log("a")
    console.log("i")

}

//it is a reference for our funciton so it will execute
sayMyNmae()

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2)
}

addTwoNumbers(34, "56")//pass arguments

//Note: When we don't pass any value inside a function parenthesis it will return undefined by default

function CelsuistoFahrenheit(celsius) {
    return (celsius * (9 / 5) + 32)
}

console.log("Fahreheit: ", CelsuistoFahrenheit(25));


function loginUserMessage(username) {
    console.log(`${username} just Logged In `)
}

loginUserMessage("Jeevak")


function SendOtp(otp) {
    if (otp === undefined) {
        console.log('otp is required')
        return
    }
    return `${otp}`
}

console.log('Otp: ', SendOtp())


