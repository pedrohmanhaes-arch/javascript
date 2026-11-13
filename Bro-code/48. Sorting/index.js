// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical.
//          lexicographic = (alphabet + numbers + symbols) as strings

/* let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 10, 2, 4, 7 , 9 , 5, 6]

fruits.sort();
//numbers.sort((a, b) => b - a); //do maior para o menor
numbers.sort((a, b) => a - b); // do menor para o maior

console.log(fruits);

console.log(numbers) */

const people = [{name: "Spongebob", age: 30, gpa: 3.0}, 
                {name: "Patrick", age: 37, gpa: 1.5}, 
                {name: "Squidward", age: 51, gpa: 2.5}, 
                {name: "Sandy", age: 27, gpa: 4.0}]

//people.sort((a, b) => a.age - b.age) // organiza da menor idade para a maior
//people.sort((a, b) => b.age - a.age) // organiza da maior idade para a menor

//people.sort((a, b) => a.gpa - b.gpa) // organiza do menor gpa para a maior
//people.sort((a, b) => b.gpa - a.gpa) // organiza do maior gpa para a menor

//people.sort((a, b) => a.name.localeCompare(b.name)) // organiza em ordem alfabetica crescente
people.sort((a, b) => b.name.localeCompare(a.name)) // organiza em ordem alfabetica decrescente


console.log(people)


