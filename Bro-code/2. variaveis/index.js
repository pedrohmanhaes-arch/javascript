// Variável = Um contêiner que armazena um valor.
// Comporta-se como se fosse o valor que ela contém.

//1. declaração = let x
//2. atribuição = x = 100

/* 
let x;
x = 100;
x= 123

console.log(x); */

//Numbers
/* let age = 25;
let price = 10.99;
let gpa = 2.1

console.log(age);
console.log(price);
console.log(gpa)
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`)
console.log(`Your gpa is ${gpa}`)

console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);

//Strings

let firstName = "Bro";
let favoriteFood = "Pizza"
let email = "bro123@gmail.com"
console.log(typeof firstName);
console.log(firstName)
console.log(`Your name is ${firstName}`)
console.log(`You like ${favoriteFood}`)
console.log(`Your email is ${email}`)

//Booleans

let online = false;
let forSale = true;
let isStudent = true;

console.log(typeof online);
console.log(`Bro is online: ${online}`)
console.log(`Is this car for sale: ${forSale}`)
console.log(`Enrolled: ${isStudent}`) */

let fullName = "Bro Code";
let age = 25;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;