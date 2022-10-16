
var userName = prompt("What is your name?")
var userSurName = prompt("What is your surname?")

var userFullName =
    userName + " " + userSurName;

alert("Hello, " + userFullName)
console.log(userFullName )


var number_1 = prompt("print a number")
var number_2 = prompt("print a number")


var congratsMessage;
if ( number_1 > number_2) {
    congratsMessage = "number_1 > number_2 "
}else if (number_1 < number_2){
    congratsMessage = "number_1 < number_2"
}else if (number_1 === number_2){
    congratsMessage = "number_1 = number_2"
}else {
    congratsMessage = "print a number!!!"
}

console.log(congratsMessage)