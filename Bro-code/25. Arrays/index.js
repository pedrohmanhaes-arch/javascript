// array = a variable like structure that can hold more than 1 value.

 let fruits = ["apple", "orange", "banana"];
/*
fruits[3] = "coconut"

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits.push("tangerine") // adiciona um novo elemento no final da array

console.log(fruits)
console.log(fruits[4])

fruits.pop() //remove o ultimo elemento

console.log(fruits)

fruits.unshift("mango") //insere novo elemento no começo da array e passa o tamanho da lenght.

console.log(fruits)

fruits.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(fruits)

let numOfFruits = fruits.length; //Gets or sets the length of the array. This is a number one higher than the highest index in the array.

let index = fruits.indexOf("apple")
console.log(numOfFruits)

console.log(index) */

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

//versão resumida

for(let fruit of fruits){
    console.log(fruit)
}

fruits.sort(); //organiza a array em ordem alfabetica //se usar sort().reverse() a ordem ficar ao contrário.
console.log(fruits)
