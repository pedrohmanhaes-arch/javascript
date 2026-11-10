// ForEeach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element

// array.forEach(callback)
// element, index, array are provided

/* let numbers = [1, 2, 3, 4, 5];

umbers.forEach(double)
numbers.forEach(triple)
numbers.forEach(square)
numbers.forEach(cube)
numbers.forEach(display)


function double(element, index, array){
    array[index] = element *2;
    
}

function triple(element, index, array){
    array[index] = element *3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}



function display(element){
    console.log(element)
}

 */

let fruits =["apple", "orange", "banana", "coconut"]
let fruitsUpperCase = ["APPLE", "ORANGE", "BANANA", "COCONUT"]

//fruits.forEach(upperCase)
fruits.forEach(capitalize)
fruits.forEach(display)

fruitsUpperCase.forEach(lowerCase)
fruitsUpperCase.forEach(display)
function display(element){
    console.log((element))
}

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}
