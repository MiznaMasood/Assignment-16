
//  CHAP: USER INPUT & CONDITIONAL

// STATEMENT

// Q1

// var city = prompt("City Name");

// if(city === "Karachi"){alert("Welcome to city of lights")}
// else{alert("Not found")}


// // Q2
// var gender = prompt("gender");
// if (gender === "male"){alert("Good Morning Sir"
// )}
// if (gender === "female") {alert("Good Morning Ma'am.")}
// else{alert("Not found")}


// Q3

// var signalColor = prompt("Enter the color of traffic signal")

// if(signalColor === "red"){alert("Must stop")}


// if(signalColor === "yellow"){alert("Ready to move")}


// if(signalColor === "green"){alert("Move now")}

// // Q4

// var remainingFuel = +prompt("Enter the remainig fuel (in litres)")

// if (remainingFuel < 0.25){alert("Please refill the fuel in your car")}

// else {alert("You have sufficient fuel. Keep driving!")}


// Q5

// part a
var a = 4
if (++a === 5) {
    alert ("given condition for variable is true")
}

// part b
var b = 82;
if (b++ ===83){
    alert("give condition for variable is true..")
}
else{alert("False")}

// part c
var c = 12
if (c++ === 13){
    alert("condition 1 is true")
}

if (c === 13){
    alert("condition 2 is true")
}

if (++c < 14){
    alert("condition 3 is true")
}

if (c === 14){
    alert("condition 4 is true")
}

// part d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals")
}

// part e
if (true){
    alert("True")
}
if (false){
    alert("False")
}

// part f

if ("car" < "cat"){
    alert("car is smaller than cat")
}

// Q6

// var englishMarks = +prompt("Enter marks obtained in English")
 
// var urduMarks = +prompt("Enter marks obtained in Urdu") 

// var mathsMarks = +prompt("Enter marks obtained in Maths")

// var totalMarks = +prompt("Enter marks for each subject:")

// // Calculate percentage

// var totalObtainedMarks = englishMarks + urduMarks + mathsMarks;

// var percentage = (totalObtainedMarks)/400 *100

// // Determine grade based on percentage

// var grade;
// if(percentage >= 80 && perc < 100){
//    grade = "A+"
// }

// else if (percentage >= 70){
//     grade = "A" 
// }

// else if (percentage >= 60){
//     grade = "B" 
// }

// else if (percentage >= 50){
//     grade = "C"
// }
// else {
//     grade = "Fail" 
// }

// Display the result on the page
// document.write("<h2>Result:</h2>");
// document.write("<p>Total Marks: " + (totalMarks * 3) + "</p>");
// document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
// document.write("<p>Percentage: " + percentage + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");

// // Display remarks based on grade
// if (grade === "A+") {
//     document.write("<p>Remarks: Excellent! Keep up the good work.</p>");
// } else if (grade === "A") {
//     document.write("<p>Remarks: Very good. Well done!</p>");
// } else if (grade === "B") {
//     document.write("<p>Remarks: Good. Keep improving.</p>");
// } else if (grade === "C") {
//     document.write("<p>Remarks: Average. Work harder for better results.</p>");
// } else if (grade === "Fail") {
//     document.write("<p>Remarks: Sorry, you have failed. Please try again.</p>");
// } else {
//     document.write("<p>Remarks: No remarks available.</p>");
// }

// Q7
// GUESS GAME

// var secretNumber = 4;
// var userGuess = +prompt("Guess the secret number (between 1 and 10)")

// if (secretNumber === userGuess){
//     alert("Bingo! Correct answer.")
// }
// else if(secretNumber === userGuess + 1 || secretNumber === userGuess - 1){
//     alert("Close enough to the correct answer")
// }


// // Q8

// var userNumber = +prompt("Enter a number: ");
// if(userNumber % 3  === 0 ){
//     alert("The number " + userNumber + " is divisible by 3.")
// }

// else{
//     alert("The number " + userNumber + " is not divisible by 3.")
// }

// // Q9

// var userNum = +prompt("Enter a number");
// if (userNum % 2 === 0){
//     alert("The number " + userNum + " is an even number.")
// }
// else{
//     alert("The number " + userNum + " is an odd number.")
// }

// // Q10

// var temprature = +prompt("Enter today's temperature")

// if(temprature > 40){
//     alert("It is too hot outside")
// }

// if(temprature > 30){
//     alert("The Weather today is Normal.")
// }

// if(temprature > 20){
//     alert("Today’s Weather is cool.")
// }

// if(temprature > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }

// // Q11

// var firstNumber = +prompt("Enter the First number: ")

// var secondNumber = +prompt("Enter the Second number: ")

// var operation = +prompt("Enter the Operation (+, -, *, /, %): ")

// var result;

// if(operation === "+"){
//     result = firstNumber + secondNumber;
// }

// else if(operation === "-"){
//     result = firstNumber - secondNumber;
// } 

// else if(operation === "*"){
//     result = firstNumber * secondNumber;
// } 
// else if(operation === "/"){
//     result = firstNumber / secondNumber;
// } 








// // ______________________________

// // Chap 12-13

// Q2

var num1 = +prompt("Enter first integer")
var num2 = +prompt("Enter second integer")

if(num1 > num2){
    console.log("num1 is larger than num2")
}
 else if(num2 > num1){
    console.log("num2 is larger than num1")
}

else{
    console.log("The two integers are equal")
}

// Q3

var userInput = +prompt("Enter a number")
if(userInput > 0){
    alert("The entered number is positive")
}
else if(userInput < 0){
    alert("The entered number is negative")
}

else{
    alert("The entered number is zero")
}

// Q4

var input = prompt("Enter a character in lowerCase")
var vowel =" a,e,i,o,u"
if(input = vowel){
    alert("True")
}
else {
    alert("False")
}




// // Q5

// var password = 1648
// var userPassword  = +prompt("Enter your password")

// if(password === userPassword){
//     alert("Correct! The password you enterd matches the original password.")
// }
//  else if(password !== userPassword){
//     alert("Incorrect password")
// }

// Q6


var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Q7

var input = +prompt("Enter a time for 24-hours clock format")

if(input >= 0 && input < 1200){
    alert("Good morning")}
 
else if(input >= 1200 && input < 1700){
    alert("Good afternoon")}
 

 else if(input >= 1700 && input < 2100){
    alert("Good evening")
 }   

 else if(input >= 2100 && input <= 2400){
    alert("Good night")
 }
else{
    alert("Invalid input")
}


// ___________________________________

// Chap 10 - 14

// Chap 10

// Q1

var city = prompt("Enter city name")
if(city === "Karachi"){
    console.log("The City of lights")
}
else{
    console.log("Ok")
}

// Q2

var x = 5
var y = 5

if(x===y){
    var z = prompt("value of z?")
    console.log("The value of z is: " + z)
}

// Q3

var zipCode = +prompt("Enter your ZipCode")
if(zipCode === 10010){
    alert("Karachi")
}
else{
    alert("please write correct city")
}



// Chap 11

// Q1
var variable1 = 10;
var variable2 = 20;

if(variable1 !== variable2){
      console.log("variable1 is not equal to variable2")
}

else{
    console.log("variable1 is equal to variable2")
}

// Q2

var variable1 = 50
var variable2 = 60
if(variable1 >= variable2){
    console.log("variable1 is greater than or equal to variable2.");
} else {
    console.log("variable1 is less than variable2.");
}


// Chap 12

// Q1

var variable1 = 70
var variable2 = 80
if(variable1 >= variable2){
    alert("variable1 is greater than or equal to variable2.");
} else {
    alert("variable1 is less than variable2.");
}

// Q3
var a = 7
if(a===10){
    alert("a is 10")
}

else if(a !== 10){
    alert("The correct value of a is " + a)
}


// Chap 13

// Q5

var firstName = "Jhon";
var lastName = "Doe";

var name1 = prompt("Enter first name");
var name2 = prompt("Enter last name");

if(name1 === firstName && name2 === lastName ){
    alert("Names match")
}
else{
    alert("Not match")
}