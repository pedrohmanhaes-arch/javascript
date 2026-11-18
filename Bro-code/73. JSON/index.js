// JSON = (JavaScript Object Notation) data-interchange format
// Used for exchanging data between a server and a web application 
// JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = convert a JS object to a JSON string.
// JSON.parse( = convert a JSON string to a JS object)




/* const names = ["Spongebob", "Patrick", "SquidWard", "Sandy"]

const jsonStringNames = JSON.stringify(names);

console.log(names)
console.log(jsonStringNames)

const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfifhing", "karate", "cooking"]
}

const jsonStringPerson = JSON.stringify(person)

console.log(person)
console.log(jsonStringPerson)

const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},

{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},

{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},

{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}]

const jsonStringPeople = JSON.stringify(people)

console.log(people)
console.log(jsonStringPeople) */
/* 
const jsonNames = `["Spongebob", "Patrick", "SquidWard", "Sandy"]`;

const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfifhing", "karate", "cooking"]}`;

const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
                    {"name": "Patrick", "age": 34, "isEmployed": false},
                    {"name": "Squidward", "age": 50, "isEmployed": true},
                    {"name": "Sandy", "age": 27, "isEmployed": false}]`;
                    
const parsedDataNames = JSON.parse(jsonNames);
const parsedDataPerson = JSON.parse(jsonPerson)
const parsedDataPeople = JSON.parse(jsonPeople)

console.log(jsonNames)
console.log(parsedDataNames)

console.log(jsonPerson)
console.log(parsedDataPerson)

console.log(jsonPeople)
console.log(parsedDataPeople)

 */

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value))

fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value))

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.error(error))
