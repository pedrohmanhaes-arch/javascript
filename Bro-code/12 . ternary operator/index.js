// // Operador ternário: atalho para if/else que atribui um valor a uma variável com base em uma condição.
// condition(condição) ? codeIfTrue(valorSeVerdadeiro) : codeIfFalse(valorSeFalso);
/* 
let age = 21;

let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);
//a parte de cima é a forma resumida da parte de baixo;

if (age >= 18){
    message = "You're an adult";
}
else{
    message = "You're a minor";
} */

  /*   let time = 16;
    let greeting = time < 12 ? "Good morning!" : "Good afternoon!"
    console.log(greeting) */

    /* let isStudent = true;
    let message = isStudent ? "You're a student" : "You're not a student"
    console.log(message) */

    let purchaseAmount = 125;
    let discount = purchaseAmount >= 100 ? 10 : 0;
    console.log(discount)
    console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`)