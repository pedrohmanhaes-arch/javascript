/* let randomNum1 = Math.floor(Math.random() * 10) + 1; // de 1 a 10
let randomNum2 = Math.floor(Math.random() * 100) + 1; // de 1 a 100
let randomNum3 = Math.floor(Math.random() * 1000) + 1;// de 1 a 1000

console.log(`O número sorteado entre  1 a 10 foi: ${randomNum1}`)
console.log(`O número sorteado entre  1 a 100 foi: ${randomNum2}`)
console.log(`O número sorteado entre  1 a 1000 foi: ${randomNum3}`)

const min = 50;
const max = 100;

let randomNum4 = Math.floor(Math.random() * (max - min +1) + min; // de 50 a 100

console.log(`O número sorteado entre 50 a 100 foi: ${randomNum4}`) */

// RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton"); 
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}
