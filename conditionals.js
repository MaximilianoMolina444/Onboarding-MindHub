//Conditionals Exercises

//Difficulty Level: Low

//Starting from the following example, create a conditional block that evaluates whether the variable num1 is greater than num2, if so, print the value of num1 via the console, otherwise print num2
// let num1 = 4;
// let num2 = 5;

// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

//----------------------------------------------------------------//

//Think about the game "Rock, Paper, Scissors." What's more, get together with a teammate and play for a few seconds. After that, write in a document the rules of the game in relation to when the game is won and when the game is tied. Try to use this format for each situation: "If ____ then ____."
// Remember to include absolutely all possible situations.

// Si ambos jugadores eligen piedra, entonces empatan.
// Si ambos jugadores eligen papel, entonces empatan.
// Si ambos jugadores eligen tijera, entonces empatan.
// Si un jugador elige piedra y el otro elige papel, entonces el jugador que elige papel gana.
// Si un jugador elige piedra y el otro elige tijera, entonces el jugador que elige piedra gana.
// Si un jugador elige papel y el otro elige piedra, entonces el jugador que elige papel gana.
// Si un jugador elige papel y el otro elige tijera, entonces el jugador que elige tijera gana.
// Si un jugador elige tijera y el otro elige piedra, entonces el jugador que elige piedra gana.
// Si un jugador elige tijera y el otro elige papel, entonces el jugador que elige tijera gana.

//------------------------------------------------------------------------------//

// Considering that conditionals are expressions that, depending on a CONDITION, one or more ACTIONS are executed...
// Complete each of the sentences with an ACTION or a CONDITION as appropriate, and comment on which one you used.

// IF IT'S RAINING, I use umbrella ☔. (ACTION)
// IF IT'S COLD, I wear a jacket (ACTION) 
// IF it's nighttime, I LOOK AT THE STARS. (CONDITION)
// IF t's lunchtime, I EAT AN EMPANADA. (CONDITION)
// IF I'm feeling relaxed, I READ A BOOK. (CONDITION)
// IF THEY GIVE ME A GIFT,I thank them. (ACTION)

//Escogí ACTION porque la condición ya estaba dada y describe lo que haría gracias a esa condición.
//Escogí CONDITION porque la acción ya estaba dada y tenía que describir gracias a que se produjo esa acción.

//------------------------------------------------------------------------------//

// Given this code in JS, draw the corresponding flowchart (you can use Lucidchart). Remember that the rectangles mark the common sentences and the rhombuses mark the questions. That can have a "Yes" and also a "No". 

// let edad = 18;

// if (edad >= 18) {
//     console.log("You're of age.");
// } else {
//     console.log("You are minor.");
// }

//Diagrama: https://miro.com/app/board/uXjVK23ynog=/?share_link_id=285900400052

//--------------------------------------------------------------------------------------------------------------------//

// Starting from the following example, create a conditional block that evaluates whether the variable num1 is greater than num2, if so, print the value of num1 via the console, otherwise print num2. Draw the corresponding flowchart
// let num1 = 4
// let num2 = 5

//Diagrama: https://miro.com/app/board/uXjVK26Q6sY=/?share_link_id=663547850193

//--------------------------------------------------------------------------------//

//Based on exercise 4, now modify the block as follows:

// If num1 is greater than num2, print num1 through the console,

// if num2 is greater, print num2 and finally

// if they are equal, print a string that says “The numbers are equal ”

// let num1 = 4;
// let num2 = 5;

// if (num1 > num2) {
//   console.log(num1);
// } else if (num2 > num1) {
//   console.log(num2);
// } else {
//   console.log("The numbers are equal");
// }

//Diagrama: https://miro.com/app/board/uXjVK25o_NE=/?share_link_id=30093224993
//------------------------------------------------------------------------------------------------
//Based on exercise 4, create a conditional block that evaluates whether these variables are equal or not, if so, print a string through the console “The numbers are equal”, otherwise “The numbers are different”

// let num1 = 4;
// let num2 = 5;
// if (num1 === num2) {
//     console.log("The numbers are equal");
// } else {
//     console.log("The numbers are different");
// }

//------------------------------------------------------------------------------------------------//
//Starting from the following example, create a conditional block that evaluates whether one of these variables is greater than the other; if so, display “The date [variable 1] is greater than [variable 2]” by console, and, If they are the same, print “The dates are the same”
// Tip! Use backticks to print via console.

// let date1 = "2018-9-2"

// let date2 = "2023-7-5"

// The date 2023-7-5 is greater than the date 2018-9-2

// let date1 = "2018-9-2";

// let date2 = "2023-7-5";

// if (date1 > date2) {
//     console.log(`The date ${date1} is greater than ${date2}`);
// } else if (date2 > date1) {
//     console.log(`The date ${date2} is greater than ${date1}`);
// } else {
//     console.log("The dates are the same");
// }

//------------------------------------------------------------------------------------------------//
//  Now try changing the value of the variables. As in the previous exercises, a string must be printed through the console that says if date 1 is greater than date 2 or the opposite.

// let date1 = "2018-9-2";

// let date2 = "2023-7-5";

// if (date1 > date2) {
//     console.log(`The date ${date1} is greater than ${date2}`);
// } else if (date2 > date1) {
//     console.log(`The date ${date2} is greater than ${date1}`);
// } else {
//     console.log("The dates are the same");
// }

//------------------------------------------------------------------------------------------------//
// In this case, create a conditional block that evaluates which of the three numbers stored in the variables is the largest. Print a string through the console that says “The number [ ] is the largest”.

// let number1 = 5

// let number2 = 7

// let number 3 = 9

// let number1 = 5

// let number2 = 7

// let number3 = 9

// if (number1 > number2 && number1 > number3) {
//     console.log(`The number ${number1} is the largest`);
// } else if (number2 > number1 && number2 > number3) {
//     console.log(`The number ${number2} is the largest`);
// } else {
//     console.log(`The number ${number3} is the largest`);
// }

//------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------//
//Difficulty Level: Medium

// Review the four example Flowcharts Diagrams that we have left you above, at the beginning of the Conditional Exercises section. Write the algorithm (in "pseudo-code") or the JS code corresponding to each of the diagrams. For example, for Diagram 1, with JS:
// If <condition> {
//      task1;
//      task2;
// {
// task 4

// You can also do it in "pseudo-code". For example:
// Start
// Execute Task1
// If Condition is YES
//     Execute Task2
//     Execute Task3
// Execute Task4

// Diagram 1:

// Start
// Execute Task1
// If Condition is YES
//     Execute Task2
//     Execute Task3
// Execute Task4
// End

// Respuestas
// NO se usa else porque la tarea 4 siempre se va a ejecutar sin importar el valor de la condicion
// Las tareas 2 y 3 estas más separadas porque se ejecutan antes de la tarea 4 solo si la condicion es SI

// Diagram 2:

// Start
// Execute Task1
// If Condition is YES
//     Execute Task2
//     Execute Task3
//     End
// else  
// Execute Task4
// End

// Diagram 3:

// Start
// Execute Task1
// If Condition is YES
//     Execute Task2
//     End

// Diagram 4:

// Start
// Execute Task1
// If Condition is YES
//     If Condition is YES
//          execute Task2
//          End

//------------------------------------------------------------------------------------------------//

// Now replace the "Task1", ​​"Task2", etc. and the "Condition" for real life situations and write the corresponding algorithms (for the four).
// For example, for the first diagram:
// Open the window (Task 1)
// If it rains (Condition)
//     Take an umbrella (Task 2)
//     Take a pilot (Task 3)
// Go outside (Task 4)
//fin

// Diagram 2:

//prepararme para ir al trabajo
//Desayunar (task1)
//Estoy listo para el trabajo (condition)
//           Vestirme con ropa adecuada para mi trabajo
//           Ir al trabajo
//Preparar todo lo necesario para ir a trabar
//ir al trabajo
//fin

//Diagram3:

//Dia de estudio
//Preparo el espacio de estudio (task1)
//Me siento concentrado(condition)
//      Reviso el material de estudio y comienzo a estudiar
//fin

// Diagram 4:

//Decido salir a correr
//Me levanto de la cama (task1)
//El clima es bueno (condition)
//    Me siento con energia(condition)
//        Salgo a correr (task2)
//fin

//-----------------------------------------------------------------------------------------------------//

// In the case of the first Diagram/Algorith, are Task2 and Task3 always executed? And Task4? Specifically, what would you do if it didn't rain?

//Respuesta:
// Task 2 y task3 solo se ejecutan si la condicion se cumple
// task 4 siempre se cumple sin importar la condicion
//Si no llueve entonces paso directamente a task4


//-----------------------------------------------------------------------------------------------------//

// Using a "switch", create a program that allows you to enter these color names on the screen: red, blue or green. And print on the screen in each case:
// red: “The color of passion”
// blue: “The color of the sea.”
// green: “The color of nature”
// Tip! Don't forget the break statement

// let colors = prompt("Enter a color");
// switch(colors){
//     case "red":
//         alert("The color of passion");
//         break;
//     case "blue":
//         alert("The color of the sea.");
//         break;
//     case "green":
//         alert("The color of nature");
//         break;
// }


//------------------------------------------------------------------------------//
// Using a switch, create a program that allows you to enter on the screen: 
// two numerical values (number from 1 to 100)
// an operation (addition, subtraction, multiplication, division)
// and print on the screen in each case:

// sum: first value + the second
// subtraction: first value - the second
// multiplication: first value * second
// division: first value / second
// With the corresponding literal ("the sum of <num1> and <num2> is...", etc.)
// Tip! Don't forget the break statement

// let firstNumer = parseFloat(prompt("ingrese un primer valor entre '1' y '100'"));
// let secondNumer = parseFloat(prompt("ingrese un segundo valor entre '1' y '100'"));
// let operator = prompt("ingrese un operador `+`, `-`, `*`, `/` ")


// switch (operator) {
//     case "+":
//         console.log(`the sum of ${firstNumer} and ${secondNumer} is ${firstNumer + secondNumer}`)
//         break;
//     case "-":
//         console.log(`the subtraction of ${firstNumer} and ${secondNumer} is ${firstNumer-secondNumer}`)
//         break;
//     case "*":
//         console.log(`the multiplication of ${firstNumer} and ${secondNumer} is ${firstNumer*secondNumer}`)
//         break;
//     case "/":
//         console.log(`the division of ${firstNumer} and ${secondNumer} is ${firstNumer/secondNumer}`)
//         break;
    
//     default:
//         console.log("no ingreso un valor valido, recargue la pagina")
//         break;
// }


//------------------------------------------------------------------------------------------------//

// Starting from the following structure, create a conditional block that
// receives 2 objects representing people with the properties: name, age, height
// and print by console in the same console.log:
// Which of the two people is the taller?
// Which is the oldest?
// Tip! You can use nested if or logical operators.
// let person = {
//        name = Juan,
//        age = 39,
//        height = 1.69
// }
// Example Result: "Juan is taller and older than Rosa"

// let person1 = {
//            name : 'Juan',
//            age : 39,
//            height : 1.69,
// }
// let person = {
//     name : 'Leo',
//     age : 19,
//     height : 1.99,
// }

// if(person1.height>person.height){
//     console.log(`${person1.name} is more taller`)
// }else if(person1.height<person.height){
//     console.log(`${person.name} is more taller`)
//     if (person1.age>person.age) {
//         console.log(`${person1.name} is more oldest and ${person.name} is more taller` )
//     }else if(person.age>person1.age){
//         console.log(`${person.name} is more oldest and ${per1.name} is more taller`)
//     }
// }else{
//     console.log(`error`)
// }

//------------------------------------------------------------------------------------------------//

// Create a program that allows you to enter on the screen:
// your name, age, height and vision.
// and print through the console a string “You are qualified to drive”,
// For this the person must:
// Be at least 18 years old.
// Measure more than 110 cm.
// Have a vision of at least 8 out of 10.
// Tip! Remember prompt( ) to enter data on the screen.

// let name = prompt("enter your name");
// let age = prompt("enter you age")
// let height = prompt("enter your height in cm")
// let vision = prompt("vision grade (1-10) only numbers")

// if(age>18 && height >= 110 && vision >= 8){
//     console.log(` ${name} You are qualified to drive`)
// }else{
//     console.log(` ${name} you are not qualified to drieve, sorry`)
// };

//------------------------------------------------------------------------------------------------//
// Create a program that allows you to enter your age on the screen and print it on the screen if you are:
// infant (0 to 12 years)
// adolescent (13 to 18 years old)
// older young (19 to 45 years)
// elderly (over 45 years)
// Is he really that old? (more than 100 show)
// Tip! Remember alert( ) to display data on the screen.

// let age = parseFloat(prompt("enter you age in numbers"));

// if(age <= 12){
//     alert("infant");
// }else if( age >= 13 && age <= 18){
//     alert("adolescent")
// }else if(age >= 19 && age <= 45){
//     alert(" older youg")
// }else if(age >= 45 && age < 100){
//     alert("elderly")
// }else if(age >= 100){
//     alert(" you are really that old?")
// }else{
//     console.log("invalid data")
// }

//------------------------------------------------------------------------------------------------//

// Create a program that allows you to enter only numbers from 1 to 3 on the screen and then any other numerical data. Print on screen:
// 1: “The number entered is [ ]”
// 2: “Twice the number entered is [ ]”
// 3: “Three times the number entered is [ ]”
// another: “That value is not allowed”
// Tip! Remember alert( ) to display data on the screen.

// let number = parseFloat(prompt("select a number from 1 to 3"))

// if(number === 1 || number === 2 || numbre === 3){
//     alert(`the number entered is ${number}`);
//     alert(`twice number entered is ${number * 2}`);
//     alert(`three times number entered is ${number*number*number}`);
// }else{
//     alert("that value is not allowed")
// }

// //------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------//
// Difficulty Level: High
// Create a program that allows the following data to be entered on the screen:
// Customer name, Pass (vip or normal), Entrance (yes or no).
// People who have your name ==> show a welcome message
// or VIP pass ==> show a welcome message
// If you have a ticket, ask if you want to use it
// If affirmative ==> show a welcome message
// If negative ==> show farewell message


// if(name === "name" || pass === "vip"){
//     alert("welcome")
// }else if(entrance === "yes"){
//     let haveTicket = confirm("use the ticket?");
//     if(haveTicket){
//         alert("welcome")
//     }else{
//         alert("farewell")
//     }
// }


// And finally in case of not having the same name or VIP pass or entry, ask "do you want to buy?". And in case:
// negative ==> show farewell message
// affirmative ==> ask for available money, in case:
// More than 1000 ==> show a successful sale and welcome message
// Less than 1000 ==> show sales rejection message

// let name = prompt("enter your name").toLowerCase();
// let pass = prompt("Pass: vip or normal").toLowerCase();
// let entrance = prompt("entrance: yes or no").toLowerCase()

// if(name === "name" || pass === "vip"){
//     alert("welcome")
// }else if(entrance === "yes"){
//     let haveTicket = confirm("use the ticket?");
//     if(haveTicket){
//         alert("welcome")
//     }else{
//         alert("farewell")
//     }
// }else{
//     let buyTicket = confirm("buy a ticket?");
//     if(buyTicket){
//         let moneyAvailable = prompt("how much money do you have?");
//         moneyAvailable = parseFloat(moneyAvailable);
//         if(moneyAvailable > 1000){
//             alert("succesfully sold")
//         }else{
//             alert("sales rejected")
//         }
//     }else{
//         alert("farewell")
//     }
// }




