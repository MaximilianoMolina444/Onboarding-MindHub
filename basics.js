//Difficulty Level: Low
// Create a variable called myName and store your first name in it:
// In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., "Rose". Then add a line of code to print the variable name to the console after the previous message.

// Save your JavaScript file in your editor. Reload the HTML page in your browser. You should see your name printed. If not, investigate and fix (do this step for the next exercises too)

// Create a variable called myLastName and store your last name in it.
// Create a variable called myAge and save your age in it.
// Tip! Do not use string quotes for numbers.
// Create a variable called myPet and save the name of your pet in it. If you don't have a pet, you can invent a name.
// Create a variable called petAge and save the pet's age in it.
// (As in the previous case, you can invent this number if you don't have a pet).
// Create a variable called fullName and store the concatenation of myFirstName and myLastName in it.
// Create a variable called presentationText and save in it a text comprised of all the variables created so far.
// let myFirstName = "Maximiliano";
// let myLastName = "Molina";
// let myAge = 26;
// let myPet = "Dog";
// let petAge = 5;
// let fullName = myFirstName + " " + myLastName;

// let presentationText =
//   "Hello! My Name is " +
//   myFirstName +
//   " " +
//   myLastName +
//   " i am " +
//   myAge +
//   " years old." +
//   "My pet is a " +
//   myPet +
//   " and he have " +
//   petAge +
//   " years old";
// console.log(presentationText);


//------------------------------------------------------------------------------------------------//
//Difficulty Level: Medium

//Create a variable sumAges, subtractAges, productAges, divisionAges and calculate their respective operations with the variables myAge and agePet.

// let sumAges = myAge + petAge;
// console.log(sumAges);
// let subtractAges = myAge - petAge;
// console.log(subtractAges);
// let productAges = myAge * petAge;
// console.log(productAges);
// let divisionAges = myAge / petAge;
// console.log(divisionAges);

// //Create an object called student with a minimum of 5 properties, display said object using console.table( ) and also display each of the object's properties separately through the console

// let student = {
//   name: "Maximiliano",
//   age: 26,
//   music: "rock",
//   pet: "dog",
//   city: "Mendoza",
// };
// console.table(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.music);
// console.log(student.pet);
// console.log(student.city);
// //Create an object called pet with a minimum of 5 properties, display said object using console.table( ) and also display each of the object's properties separately through the console.
// let pet = {
//   name: "luneys",
//   age: 6,
//   color: "white",
//   pet: "dog",
//   size: "medium",
// };
// console.table(pet);
// console.log(pet.name);
// console.log(pet.age);
// console.log(pet.color);
// console.log(pet.pet);
// console.log(pet.size);
// //Create an array called fruits with a minimum of 5 elements and display the entire array in the console and also display each of the elements separately in the console.
// let fruits = ["apple", "banana", "orange", "pineapple", "mango"];
// console.log(fruits);
// console.log(fruits);
// console.log(fruits);
// console.log(fruits);
// console.log(fruits);
// console.log(fruits);

//------------------------------------------------------------------------------------------------//


// Difficulty Level: High

//Use a prompt ( ) that allows the entry of an age on the screen and compare it with the number 18, once this is done, save the result in a variable called IamAdult and display a message in the console that says:
//"I am an adult" (and the value of the variable).

// let IamAdult = prompt("How old are you?");
// console.log(IamAdult);
// if (IamAdult >= 18) {
//   console.log("I am an adult");
// }

// let age = prompt("How old are you?");
// console.log("age is " + age);
// let imAnAdult = age >= 18;
// console.log(`im an adult because ${age} years old`);

// //Create an array called "numbers" with a minimum of 5 elements and display the entire array and each of the elements separately in the console.

// let numbers = [1, 2, 3, 4, 5];
// // console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);

// //Create an array called "family" with a minimum of 5 objects and display the entire array and each of the elements separately in the console.

// let family = ["mom", "dad", "brother", "sister", "me"];
// console.log(family);
// console.log(family[0]);
// console.log(family[1]);
// console.log(family[2]);
// console.log(family[3]);
// console.log(family[4]);

// //Create a variable called "randomText" forming a phrase with the second element of the fruits array, the fourth element at numbers array and the first property of the fifth object of the family array.

// let randomText = fruits[1] + " " + numbers[3] + " " + family[0];
// console.log(randomText);
