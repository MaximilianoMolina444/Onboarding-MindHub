// In the case that we told a person to stand up, then sit down, stand up, sit down, stand up and sit down. Then this person wants to explain in summary what we asked. How could she/he do it?

// respuesta: Necesito que te levantes y te sientes. Repite esa secuencia de acciones 3 veces.

// let accion = [
//   "levantarse",
//   "sentarse",
//   "levantarse",
//   "sentarse",
//   "levantarse",
//   "sentarse",
// ];

// for (let i = 0; i < accion.length; i++) {
//   console.log(accion[i]);
// }

// ------------------------------------------------------------------------------------------------//
// Suppose you have to prepare a large table for 15 people. In all cases you should place the plate in the center, the fork on the left, the knife on the right and the glass in front. How could you write the algorithm in summary?
// What if instead of 15 there were 50 people? What would you change?

//Iniciar
//Para i desde 1 persona a 15 personas:
// a. Colocar el plato en posición i
// b. Colocar el tenedor a la izquierda de i
// c. Colocar el cuchillo a la derecha de i
// d. Colocar el vaso al frente a i
//Fin

// What if instead of 15 there were 50 people? What would you change?

//Iniciar
//Para i desde 1 persona a 50 personas:
// a. Colocar el plato en posición i
// b. Colocar el tenedor a la izquierda de i
// c. Colocar el cuchillo a la derecha de i
// d. Colocar el vaso al frente a i
//Fin

//------------------------------------------------------------------------------------------------------//

// Do a "desktop test", showing how much "i" is worth in each case, and what is printed on the screen, for the following exercise:

// for (let i = 10; i <= 20; i++) {
//   console.log("Número actual: " + i);
// }


// link: https://docs.google.com/document/d/1obr_tAf3MucbaMnQRh9ZWv-emx_Tg_lRIb-EJ9SNC14/edit?usp=sharing

//------------------------------------------------------------------------------------------------------//
// Write an algorithm (line by line) that contains the steps to prepare an omelette. Keep in mind:
// - of performing the action of beating "until they are fluffy"
// - perform the action of "wait" when you are cooking them, "until they are cooked"

//1 iniciar
//2 recolectar los ingredientes necesarios para preparar la omelette
//3 recolectar los utensilios necesarios para preparar la omelette
//4 buscar un contenedor para cascar los huevos
//5 cascar los huevos en el contenedor y condimentar
//6 batir los huevos hasta que esten esponjosos
//7 poner a calentar una sarten en la cocina
//8 agregarle un poco de aceite o manteca
//9 verter la preparacion en la sarten
//10 mover ligeramente la sarten para que la preparacion se esparza
//11 esperar hasta que los huevos esten cocidos
//12 retirar suavemete en omelette de la sarten con una espatula

//------------------------------------------------------------------------------------------------------------//
// Considering this algorithm:

// Turn off the light switch

// If the light bulb is too high

//      Bring a ladder

//      Climb the stairs

// Take the light bulb with your hand

// Repeat action until the bulb is unscrewed

//       unscrew

// Get off the ladder

// Answer:  a) According to the algorithm, should the light switch be turned off in all cases? b) According to the algorithm, should a ladder be searched for in all cases?
// c) What is the condition that must be met to stop unscrewing? d) Could “Repeat until the light bulb is unscrewed” be replaced by “Repeat four times” (o un for que se repita 4 veces)? In your opinion, what is the difference between both options?
// e) Do you have any comments about the “Go down the ladder” step? Is it always done?
// Where and how would you complete the procedure with the steps to place the healthy bulb?

// Respuesta a: Se debe apagar el inturruptor en todos los casos
// Respuesta b: Solo se debe buscar una escalera si la bombilla esta demasiado alta
// Respuesta c: La accion que se debe cumplir es "deserroscar" o "sacar la bombilla"
// Respuesta d: No se puede porque no sabemos si solamente con 4 "deserrencar" seria suficiente para sacar la bombilla
//              La diferencia es que en una de las posibilidades deberiamos conocer cuantas veces debemos desenroscar la bombilla para poder pasar a la tarea siguiente mientras que en la otra simplemente vamos a desenrroscar hasta que la combilla salga (se cumpla la tarea) y recien ahi podriamos pasar a la tarea siguiente.
// Respuesta e: El paso "Bájese de la escalera" solo es necesario si se utilizó la escalera. Si la bombilla no estaba demasiado alta y no se necesitó una escalera, este paso sería innecesario.

// 1-inicio
// 2-Apague el interruptor de la luz.
// 3-Si la bombilla está demasiado alta:
//     Traiga una escalera.
//     Suba las escaleras.
// 4-Tome la nueva bombilla con la mano.
// 5-Coloque la bombilla en el portafocos.
// 6-Gire la bombilla hasta que esté bien ajustada.
// 7-Bájese de la escalera (si la usó).
// 8-Encienda el interruptor de la luz para comprobar que la bombilla funciona correctamente
// 9-Apague el interruptor de la luz
// 10-fin

//--------------------------------------------------------------------------------------//

// let ingreseNumero = prompt("ingrese un numero entre 1 y 100");
// ingreseNumero = parseInt(ingreseNumero);
// console.log(typeof ingreseNumero);

// if (ingreseNumero >= 1 && ingreseNumero <= 100) {
//   for (let i = ingreseNumero; i >= 0; i--) {
//     console.log(i);
//   }
// } else {
//   console.log("el numero no se encuentra dentro del rango solicitado");
// }

//--------------------------------------------------------------------------------------//
// Using a "for" loop, create a program that allows the entry of a number between 1 and 100 through a prompt, Then it prints through the console all the numbers that are between the entered number and 0 (that is, in descending order ).

// let ingreseNumeroTabla = prompt("ingrese un numero entre 1 y 10 para averiguar su tabla")

// ingreseNumeroTabla = parseInt(ingreseNumeroTabla)

// if (ingreseNumeroTabla <= 10) {
//     for (let index = 0; index <=10; index++) {
//         console.log(` tabla del ${ingreseNumeroTabla} = ${ingreseNumeroTabla} x ${index}   = ${index*ingreseNumeroTabla}`);

//     }
// }

//--------------------------------------------------------------------------------------//
// Using a "while" loop, create a program that allows the entry of numbers through a prompt. The numbers must be added (acumulated) into a resulting variable. The entry of numbers will end when the user enters a 0. At the end, display the value of the sum variable through console.

// Suppose you entered 1 then 3 then 0. This would be the result: 4.
// Tip! Be careful, remember that the promt returns a string.

// let ingreseUnNumero = prompt("ingrese un numero para sumar // ingrese 0 para averiguar la suma total")
// ingreseUnNumero=parseInt(ingreseUnNumero)

// let resultado = 0;

// while (ingreseUnNumero !== 0) {
//     resultado += ingreseUnNumero
//     ingreseUnNumero = prompt("ingrese un numero")
//     ingreseUnNumero=parseInt(ingreseUnNumero)
// }

// console.log(`la suma total es: ${resultado}`);

//------------------------------------------------------------------------------------------------//
// Using now a "do while" loop and following the same instructions as the previous exercise, display in the console, the value of the variable that accumulates the sum of the numbers entered.

// Suppose you entered 1 then 3 then 0. This would be the result: 4

// Tip! use backticks for this.

// let ingreseUnNumero = prompt("ingrese un numero para sumar // ingrese 0 para averiguar la suma total")
// ingreseUnNumero=parseInt(ingreseUnNumero)
// console.log(`el numero ingresado es: ${ingreseUnNumero} + `);
// let resultado = 0;

// do {
//     ingreseUnNumero = prompt("ingrese un numero para sumar // ingrese 0 para averiguar la suma total")
//     ingreseUnNumero=parseInt(ingreseUnNumero)
//     console.log(`el numero ingresado es: ${ingreseUnNumero} + `);
//     if(ingreseUnNumero !==0){
//         resultado += ingreseUnNumero
//     }
// } while (ingreseUnNumero !== 0);

// console.log(`la suma total es: ${resultado}`);

//------------------------------------------------------------------------------------------------//
// Using a "for in" loop, create an object with at least 5 properties, make a program that cycles through said object and only shows all the keys of its properties in the console.

// In the console it should look like this:

// name

// lastName

// origin

// studies

// let cartuchera = {
//     lapices: "de muchos colores",
//     tijeras : 1,
//     lapiceras: 3,
//     corrector: "bic",
//     goma: "Faber-Castell",
// }

// for (const key in cartuchera) {
//     console.log(key);
// }

//------------------------------------------------------------------------------------------------//

// Using a "for in" loop, create a program that runs through the object created in previous exercise and only displays the values of each of the keys in the console.

// let cartuchera = {
//     lapices: "de muchos colores",
//     tijeras : 1,
//     lapiceras: 3,
//     corrector: "bic",
//     goma: "Faber-Castell",
// }

// for (const key in cartuchera) {
//         console.log(cartuchera[key]);
// }

//------------------------------------------------------------------------------------------------//

// Difficulty Level: Medium

// Using the loop that you consider, we are going to use the variable that stored the sum of the numbers in exercise #3 as a "secret number". The new program will allow numbers to be entered through a prompt until the number entered is equal to the one saved in the variable of exercise #3.

// If the value entered is greater than the "secret" number, notify the user through the console ("the number entered is greater than the secret", the same if the value is less.

// So on until the user guesses the secret number. Finally, show a congratulatory message on the screen and tell you how many attempts you have made ("You got it right! The secret number was <number> and you made <x> attempts"

// let resultado = 0;
// let intentos = 1;
// let ingreseUnNumero;
// ingreseUnNumero=parseInt(ingreseUnNumero)
// resultado + ingreseUnNumero;
// do {
//     ingreseUnNumero = prompt("ingrese un numero para sumar // ingrese 0 para averiguar la suma total")
//     ingreseUnNumero=parseInt(ingreseUnNumero)
//     console.log(`el numero ingresado es: ${ingreseUnNumero} + `);
//     if(ingreseUnNumero !==0){
//         resultado += ingreseUnNumero
//         console.log(`la suma total es: ${resultado}`);
//     }
//     intentos++

// } while (ingreseUnNumero !== 0);

// console.log(`la suma total es: ${resultado}`);

// let numeroSecreto;
// let acierto= false;

// do {
//     numeroSecreto = parseInt(prompt("ingrese el numero secreto"));
//     if (numeroSecreto === resultado) {
//         console.log(`¡Acertaste! El número secreto era ${resultado} y realizaste ${intentos} intentos.`);
//         acierto = true;
//     } else if (numeroSecreto > resultado) {
//         console.log("El número ingresado es mayor que el secreto.");
//     } else {
//         console.log("El número ingresado es menor que el secreto.");
//     }

// } while (!acierto)

//--------------------------------------------------------------------------------------------------//
// Using the loop that you consider as correct, create a program that receives a number through a prompt and displays all its divisors (dividers) through the console.

// Tip: DIVISORS/DIVIDERS: are all natural numbers that exactly divide another natural number. Example: “The divisors of '15' are: 1, 3, 5 and 15. (The division of '15' between any of these numbers is exact)

// Suppose 50 was entered. This would be the result 50, 25, 10, 5, 2, 1
// Tip! remember or investigate the operator %

// let numero = prompt("ingrese un numero");
// numero = parseInt(numero);

// if (numero <= 0) {
//     console.log("Por favor, ingresa un número válido mayor que 0.");
// } else {
//     console.log(`Los divisores de ${numero} son:`);
//     for (let i = 1; i <= numero; i++) {
//         if (numero % i === 0) {
//             console.log(i);
//         }
//     }
// }

//------------------------------------------------------------------------------------------------------------------//
// Taking into account the ringing Bell function, create a loop (the one you consider) that displays a string through the console that in turn concatenates the string that the function returns as many times as the number that the user enters on the keyboard.

// For example, if the user enters the number 5, the result should be:
// Ding Dong, Ding Dong, Ding Dong, Ding Dong, Ding Dong

// let tocarTimbre = parseInt(
//   prompt("ingrese el numero de veces que quiere tcoar el timbre")
// );
// function RingBell() {
//   console.log("Ding Dong");

//   return "Ding Dong,";
// }
// let resultado = "";

// for (let i = 0; i < tocarTimbre; i++) {
//   resultado + RingBell();
// }

// console.log(resultado);

//--------------------------------------------------------------------------------------------------//
// Starting from the constants dateLimit and dates, make a loop (the one you consider) that shows in the console the dates in the array that are greater than or equal to the date stored in the constant dateLimite.

// const dateLimit = "1997-8-3"

// const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

// for (let i = 0; i < dates.length; i++) {
//     if (dates[i] >= dateLimit) {
//         console.log(dates[i]);
//     }
// }

//------------------------------------------------------------------------------------------------------------------//
// Using a "for of" loop, create an array of strings with colors and print each of the colors included in the array through the console.

// In the console it should look like this (for example):

// Red

// Green

// Blue

// Violet

// Brown

// Black

// White

// const colors = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"];
// for (color of colors) {
//     console.log(color);
// }
//------------------------------------------------------------------------------------------------------------------//
// Now take the loop from the previous exercise as a reference and place it inside a function so that it performs the same task but can be reused as many times as necessary without having to rewrite the loop code.

// const colors = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"];
// function imprimirEnConsola(array) {
//     for (color of array) {
//         console.log(color);
//     }
// }

// imprimirEnConsola(colors);

//------------------------------------------------------------------------------------------------------------------//
// Using a "for of" loop, create an array with 5 numbers and make a program that runs through that array and displays the double of each of the elements, in the console.

// In the console it should look like this:

// the number is 5 and its double is 10
// the number is 7 and its double is 14
// the number is 1 and its double is 2
// the number is 3 and its double is 6
// the number is 50 and its double is 100

// let numbers = [5, 7, 1, 3, 50];

// for (const i of numbers) {
//     console.log(`the number is ${i} and its double is ${i * 2}`);
// }

//------------------------------------------------------------------------------------------------------------------//

// Using the loop that you think is correct, create an array with at least 4 objects with 4 properties, each of those created objects must represent a member of a family group
// (they can be fictitious people).

// Then make a program (by saying program the intention is that it is not just the loop, but rather a function that contains the loop) that displays a presentation message for each element of the array through the console.

// In the console it should look like the example.

// Hello, I am María Lopez (mother) and I am 40 years old.
// Hello, I am Juan Perez (father) and I am 38 years old.
// Hello, I am Romina Perez (daughter) and I am 13 years old.
// Hello, I am Tomás Perez (son) and I am 10 years old.

// Object Model

// {name: 'Juan', last-name: 'Perez', age: 38, member: 'father'}

// Tip! use backticks for this.

// let family = [
//   { name: "Romina", last_name: "Perez", age: 13, member: "daughter" },
//   { name: "Tomás", last_name: "Perez", age: 10, member: "son" },
//   { name: "Juan", last_name: "Perez", age: 38, member: "father" },
//   { name: "Romina", last_name: "Lopez", age: 40, member: "mother" },
// ];

// function presentFamily(family){
//     for (const i of family) {
//         console.log(`Hello, I am ${i.name} ${i.last_name} and I am ${i.age} years old.`)
        
//     }
// }

// presentFamily(family)

//------------------------------------------------------------------------------------------------------------------//
 
 
// Using the loop that you consider, create a program that allows the entry of numbers on the screen through a prompt and

// calculates the sum of the even numbers on the one hand and

// the odd numbers on the other.

// The data entry ends when the user enters a 0. 

// In the console it should look like this (for example):

// Even number: 38

// Odd numbers 30


// let sumaPares = 0;
// let sumaImpares = 0;
// let numero;

// do {
//   numero = prompt("Ingrese un número (0 para terminar): ");
//   if (numero % 2 === 0) {
//     sumaPares += parseInt(numero);
//   } else {
//     sumaImpares += parseInt(numero);
//   }
// } while (parseInt(numero) !== 0);

//     console.log(`Suma de números pares: ${sumaPares}`);
//     console.log(`Suma de números impares: ${sumaImpares}`);


//  //--------------------------------------------------------------------------------------------------//

//  Using the loop that you think is correct, create an array of 10 numbers and make a program that prints the largest number in the array, on the screen.

// let numeros = [3, 15, 7, 21, 4, 9];
// let numeroMasGrande = numeros[0]; 

// for (let numero of numeros) {
//   if (numero > numeroMasGrande) {
//     numeroMasGrande = numero; 
//   }
// }

// console.log(`El número más grande es: ${numeroMasGrande}`);