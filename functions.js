
// //Difficulty Level: Low

//Declaring functions

// This first exercise is for learning how to declare a function. In this case you must declare a named function called "add" that within its body, must execute an instruction that displays the result of 100 x 20 in the console.

// function add() {
//   console.log(`${100 * 20}`);
// }

// Calling/executing functions.
// We already have the declaration, the next step is to call/execute the "add" function. Execute it and check that the result is displayed in the console.

// add();

//Adding parameters.
// Now it's time to add parameters to our function. Add two parameters and call them whatever you want. Remember to indicate within the body of the function where those parameters will go.

// function add(number1, number2) {
//   console.log(`${number1 * number2}`);
// }

// Using arguments.
// We have already added parameters to the declaration of our function, the next step is to "pass it arguments". To do this,  create two variables like the following in the example:
// let number1 = 100;
// let number2 = 20;
// let number1 = 100;
// let number2 = 20;
// function add(a, b) {
//     return console.log(`${a * b}`)
// }
// add(number1, number2)

// console.log(add(100, 20));

//Adding the <return>.
//With our named function set up correctly, it's time to change the console.log of the function body. Create a result variable inside the function body that will store the result of 100 x 20, and have the function returns that variable.

// function add(a, b) {
//    let result = a * b ;
//    return result;
// }

// console.log(add(100, 20))

// Convert the named function from the previous exercise into an anonymous function and call/execute it.

// const add = function(a, b) {
//     let result = a * b;
//     return result
// }

// console.log(add( 5, 87));

//------------------------------------------------------------------------------------------------//

// Difficulty Level: Medium
// Create a named function called "greet" that
// receives a string parameter representing a name, and
// displays a custom greeting using the provided name in the console.
// Call/run the function with your own name to verify that it works correctly.

// function greet(saludo){
//     return console.log(` Hi! ${saludo}  welcome developer`)
// }

// greet("Maximiliano");

// Create an anonymous function that:
// receives two numerical parameters an
// returns the result of the multiplication of both.
// Calls/executes the function with two different values and displays the result via console.

// const multiply = function(num1, num2){
//     return num1 * num2
// }
// console.log(multiply(5, 87))

// Create a named function called "area" that
// receives two numerical parameters, one representing the base and the other the height of a triangle.
// return its area.

// function area(base, height){
//     return base * height;
// }

// console.log(area(3, 6))

// Create another named function called "perimeter" that
// receives three numerical parameters that represent each of the sides of a triangle, and
// returns the perimeter of the triangle.
// Tip! Remember the formulas for area and perimeter of triangles.

// function perimeter(side1, side2, side3) {
//     return side1 + side2 + side3
// }
// console.log(perimeter(3, 3, 3));

// Create an function that
// takes two numerical parameters representing the price and quantity of a product,
// and returns the total price of the purchase.
// If the number of products is greater than or equal to 10, ==> a 10% discount applies to the total price.
// If the number of products is greater than or equal to 20, ==> a 20% discount applies to the total price.
// Call/run the function with different price and quantity values to verify it works correctly

// function buy(price, quantity) {
//   let total = price * quantity;

//   if (quantity >= 10) {
//     total *= 0.8;
//   } else if (quantity >= 20) {
//     total *= 0.9;
//   }
//   return total;
// }

// console.log(buy(3, 10));

// Create a named function called isAnAdult that
// receives a numeric parameter representing the age of a person, and
// returns a message indicating whether the person is an Adult or not.
// If Age is greater than or equal to 18 "You are an adult"
// If Age is less than 18 "You are not an adult"
// Call the function with different age values to verify that it works correctly.
// Call the function with different age values to verify that it works correctly.

// function isAnAdult(age){
//     if(age >= 18){
//         console.log('you are and adult')
//     }else if(age <= 18){
//         console.log('you are not and adult')
//     }
// }

// isAnAdult(12)
// isAnAdult(45)

//------------------------------------------------------------------------------------------------//

// Difficulty Level: High

// Create a function (declare it as you want) that
// takes a numerical parameter that represents a person's annual income, and
// returns the tax they must pay.
// If Income  to $10,000, ==> tax of 10% of income.
// If Income greater than $10,000 and less than or equal to $20,000, ==> tax of 15% of income.
// If Income greater than $20,000, ==> tax of 20% of income.
// Use nested conditionals to implement this function.
// Call/execute the function with different input values to verify that it works correctly.
// let discount;
// function annualTaxes(income){
//     if(income <= 10000){
//         discount = income *= 0.10;
//     }else if(income <= 20000){
//         discount = income *= 0.15;
//     }else{
//         discount = income *= 0.20;
//     }

//     return console.log(` Must Pay: $${discount}`);
// }

// annualTaxes(8000);
// annualTaxes(23000);

// Create a function (declare it as you want) to check for a day that
// receives a numerical parameter and
// returns a message indicating whether it is a business day or not.
// If the number is 1, 2, 3, 4, 5, message: "It is a business day."
// If the number is 6 or 7, message: "It's the weekend."
// Use the nested switch control structure to implement this function.
// Call the function with different day values to verify that it works correctly.

// function whatDaysIs(dayNumber){
//     if(dayNumber <= 5){
//         console.log("it is a business day")
//     }else{
//         console.log("it is weekend")
//     }
// }

// whatDaysIs(6)

// function whatDays(day){

// switch (day) {
//     case 1 :
//         console.log("it is a business day")
//         break;

//     case 2 :
//         console.log("it is a business day")
//         break;

//     case 3 :
//         console.log("it is a business day")
//         break;

//     case 4 :
//         console.log("it is a business day")
//         break;

//     case 5 :
//         console.log("it is a business day")
//         break;
//     case 6 :
//         console.log("it is weekend")
//         break;
//     case 7 :
//         console.log("it is weekend")
//         break;
//     default:
//         console.log("invalid number")
//         break;
// }
// };

// whatDays(6)

// Create a program using a function (declare it as you want) that takes a parameter that represents Personal Information (enter by keyboard).
// First the Name must be entered, and
// if it comes empty ==> the program must stop and display a console.error with a message “The name cannot be empty”
// Then the user must be asked to enter the Last Name and it must be validated as the Name in previous step.
// Finally, the user must be asked to enter the age and it must be validated too.
// Once all the data were verified, the function must save all that data in an object with 3 properties: first name, last name and age and display it through the console.
// To finish, the function must be called/executed and tested with different values.

// function personalInfo(info) {
//     if(info != ""){
//         let surname = prompt("Enter your surname")
//         if(surname != ""){
//             let age = prompt("Enter your age")
//             if(age != ""){
//                 console.log("genial")
//             }else{
//                 console.log("they cannot be empty")
//             }
//         }else{
//             console.log("they cannot be empty")
//         }
//     } else {
//         console.log("they cannot be empty")
//     }
// }

// personalInfo(prompt("Insert your name"));

// function personalInfo() {
//     let name = prompt("Enter your name");
//     if(!name){
//         console.log("they cannot be empty")
//     }
//     let surName = prompt("Enter your sur name");
//     if(!surName){
//         console.log("they cannot be empty")
//     }
//     let age = prompt("Enter your age");
//     if(!age){
//         console.log("they cannot be empty")
//     }

//     const person ={
//         name : name,
//         surname : surName,
//         age : parseInt(age),
//     }

//     console.log("Personal Information")
//     console.log(`name: ${person.name}`)
//     console.log(`surname: ${person.surname}`)
//     console.log(`age: ${person.age}`)
// }

// personalInfo()

// Create a program that is made up of 3 functions (declare them as you want):
// 1st greet function: that takes a parameter that represents a name and returns a string “Hello, my name is [ parameter ]”
// 2nd function: calculateAge: which takes two parameters that represent the year of birth and the current year. This function will return the result of the current year minus the year of birth.
// 3rd function: present: call/execute the other two functions and execute an alert with the user's presentation
// The user's data must be entered on the screen and the final result also displayed on the screen

// function myApp() {
//   function greet(userName) {
//     return `hello my name is ${name}`;
//   }

//   function calculateAge(yearBirth, currentYear) {
//     return currentYear - yearBirth;
//   }

//   function present() {
//     let userName = prompt("Enter your name");

//     let yearBirth = prompt("Enter you birth year");

//     let currentYear = prompt("Enter current year");

//     yearBirth = parseInt(yearBirth);

//     currentYear = parseInt(currentYear);

//     let saludo = greet(userName);

//     let edad = calculateAge(yearBirth, currentYear);

//     alert(`hello im ${userName} and i have ${edad} years`);
//   }
//   present();
// }

// myApp();

