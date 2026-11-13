
const fruits = [{name: "apple", color: "red", calories: 95 }, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}]


/* console.log(fruits[0].name)
console.log(fruits[0].color)
console.log(fruits[0].calories)

console.log("--------------------------------------")

console.log(fruits[1].name)
console.log(fruits[1].color)
console.log(fruits[1].calories)

console.log("--------------------------------------")

console.log(fruits[2].name)
console.log(fruits[2].color)
console.log(fruits[2].calories)

console.log(fruits[3].name)
console.log(fruits[3].color)
console.log(fruits[3].calories)

console.log("--------------------------------------")

console.log(fruits[4].name)
console.log(fruits[4].color)
console.log(fruits[4].calories)

console.log("--------------------------------------")

fruits.push({name: "grapes", color: "purple", calories: 62})

console.log(fruits[5].name)
console.log(fruits[5].color)
console.log(fruits[5].calories)

console.log("--------------------------------------") */

/* 
fruits.forEach(fruit => console.log(fruit))

console.log("--------------------------------------")

fruits.forEach(fruit => console.log(fruit.name))

console.log("--------------------------------------")

fruits.forEach(fruit => console.log(fruit.color))

console.log("--------------------------------------")

fruits.forEach(fruit => console.log(fruit.calories)) */

// MAP

/* const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames)
console.log(fruitColors)
console.log(fruitCalories) */

// Filter()

/* const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

console.log(yellowFruits)
console.log(lowCalFruits)
console.log(highCalFruits) */

// Reduce

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max)

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min)

console.log(maxFruit)
console.log(minFruit)