//Spread Operator = ... allows an iterable such as an array or string to be expanded into separate elements (unpack elements). permite que um iterável (como um array ou string) seja expandido em elementos individuais (desempacotar elementos).

/* let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers)
let minimum = Math.min(...numbers)
console.log(numbers)

console.log(maximum)
console.log(minimum) */

/* let username = "Pedro Manhães"
let letters = [...username]

console.log(letters)

letters = [...username].join("-") //A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

console.log(letters) */

let fruits = ["apple", "orange", "banana"]
let vegetables = ['carrots', 'celery', 'potatoes']

let foods = [...fruits, ...vegetables, 'eggs', 'milk']
let copyFruits = [...fruits]

console.log(fruits)
console.log(copyFruits)
console.log(foods)
