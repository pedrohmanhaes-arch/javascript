// DOM Navigation = The process of navigation through the structure of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children 

// ------------------------.firstElementChild------------------

/* const elementFru = document.getElementById("fruits");
const firstChildFru = elementFru.firstElementChild;
firstChildFru.style.backgroundColor = "yellow"

const elementVeg = document.getElementById("vegetables");
const firstChildVeg = elementVeg.firstElementChild;
firstChildVeg.style.backgroundColor = "orange"

const elementDes = document.getElementById("deserts");
const firstChildDes = elementDes.firstElementChild;
firstChildDes.style.backgroundColor = "red" */

/* const ulElement = document.querySelectorAll("ul");

ulElement.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow"
}) */

// ------------------------.lastElementChild------------------

/* const elementFruit = document.getElementById("fruits");
const lastChildFruit = elementFruit.lastElementChild;
lastChildFruit.style.backgroundColor = "yellow"

const elementVeg = document.getElementById("vegetables");
const lastChildVeg = elementVeg.lastElementChild;
lastChildVeg.style.backgroundColor = "orange"

const elementDes = document.getElementById("deserts");
const lastChildDes = elementDes.lastElementChild;
lastChildDes.style.backgroundColor = "Red" */

/* const ulElement = document.querySelectorAll("ul");

ulElement.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow"
})
 */
// ------------------------.nextElementSibling------------------

/* const element = document.getElementById("apple");
const nextSibling =element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow"

const elementUl = document.getElementById("fruits");
const nextSiblingUl =elementUl.nextElementSibling;
nextSiblingUl.style.backgroundColor = "orange" */

// ------------------------.previouElementSibling------------------

/* const element = document.getElementById("orange");
const previousSibling =element.previousElementSibling;
previousSibling.style.backgroundColor = "yellow"

const elementUl = document.getElementById("deserts");
const previousSiblingUl =elementUl.previousElementSibling;
previousSiblingUl.style.backgroundColor = "orange" */

// ------------------------.parentElement------------------

/* const element = document.getElementById("apple")
const parent = element.parentElement;
parent.style.backgroundColor = "yellow" */

// ------------------------.Children------------------

/* const element = document.getElementById("fruits")
const children = element.children;

/* Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow"
}) 

    children[0].style.backgroundColor = "yellow" */