// element selectors = Methods used to target and manipulate HTML elements. They allow you to select one or multiple HTML elements from the DOM (Document Object Model)

// 1. document.getElementById()             // ELEMENT OU NULL
// 2. document.getElementsByClassName()    // HTML COLLECTION
// 3. document.getElementsByTagName()     // HTML COLLECTION
// 4. document.querySelector()           // ELEMENT OR NULL
// 5. document.querySelectorAll()       //  NODELIST


const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

// console.log(myHeading);

 const fruits = document.getElementsByClassName("fruits");

// console.log(fruits)

 // fruits[0].style.backgroundColor = "blue" // selecionar individual o estilo

for(let fruit of fruits){ // Selecionar todos os elementos style
    fruit.style.backgroundColor = "lightsalmon"
}

    /* Array.from(fruits).forEach(fruit => { // Ou esse metodo para selecionar todos os elementos.
        fruit.style.backgroundColor = "blue"
    });
   */

    const h4Elements = document.getElementsByTagName("h4")
    const liElements = document.getElementsByTagName("li")

    

 
    /* h4Elements[0].style.backgroundColor = "green"
    h4Elements[1].style.backgroundColor = "red" */

   /*  for(let h4Element of h4Elements){
        h4Element.style.backgroundColor = "green"
    } */

    Array.from(h4Elements).forEach(h4Element => {
        h4Element.style.backgroundColor = "lightgreen"
    })
    

    //console.log(h4Elements)

    console.log(liElements)

    /* for(let liElement of liElements){
        liElement.style.backgroundColor = "purple"
    } */

    Array.from(liElements).forEach(liElement => {
        liElement.style.backgroundColor = "lightblue";
    })

    const element = document.querySelector(".fruits"); // query selector seleciona apenas o primeiro elemento. 

    element.style.backgroundColor = "yellow"

    const fruitss = document.querySelectorAll(".fruits");
    const foods = document.querySelectorAll("li")

    console.log(fruitss)
    console.log(foods)

    fruitss[1].style.backgroundColor = "lightgrey"
    foods[5].style.backgroundColor = "red"

    foods.forEach(food => {
        food.style.backgroundColor = "lightblue"
    })

