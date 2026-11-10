// .filter() = creares a new array by filtering out elements.

/* let numbers = [1, 2, 3, 4, 5, 6, 7]
const evenNums = numbers.filter(isEven)
const oddNums = numbers.filter(isOdd)

console.log(evenNums)
console.log(oddNums)

function isEven(element){
    return element % 2 === 0 
}

function isOdd(element){
    return element % 2 !== 0
} */
/* 
    const ages = [16, 17, 18, 18, 19, 20, 60]
    const adults = ages.filter(isAdult)
    const notAdult = ages.filter(isNotAdult)

    console.log(adults)
    console.log(notAdult)

    function isAdult(element){
        return element >= 18;
    }

    function isNotAdult(element){
        return element < 18;
    } */

        const words = ["apple", "banana", "orange", "kiwi", "pomegranate", "coconut"];
        const shortWords = words.filter(getShortWords)
        const longWords = words.filter(getLongWords)

        console.log(longWords)
        console.log(shortWords)
        

        function getShortWords(element){
            return element.length <= 6; 
        }

        function getLongWords(element){
            return element.length > 6;
        }
