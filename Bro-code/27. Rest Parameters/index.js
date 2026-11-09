// Rest Parameters = (...rest) permitem que uma função aceite um número variável de argumentos, agrupando-os em um array. 

// spread = expande um array ou iterável em elementos individuais.
// rest =  agrupa elementos separados em um array.


/* function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza"
const food2 = "hamburguer"
const food3 = "hotdog"
const food4 = "sushi"
const food5 = "ramen"

//openFridge(food1, food2, food3, food4, food5)

const foods = getFood(food1, food2, food3, food4, food5)
console.log(foods) */
/* 
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result
}

const total = sum(1, 2, 4, 8, 16)

console.log(` Your total is: ${total}`) */

/* function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result
}

function getAverage(...numbers){
    let result = 0
    for(let number of numbers){
        result += number
    }
    return result / numbers.length;
}

const average = getAverage(75, 100, 89, 90, 54)

console.log(average) */

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName)
