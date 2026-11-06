// math = bult-in object that provides a collection of properties and methods


console.log(`A constante Pi vale ${Math.PI}`)
console.log(`A constante Euler é ${Math.E}`)

let x = 3.49;
let y = 2;
let z;

z = Math.round(x); //arredondar //se escolher arredondar para baixo utilize 'Math.floor' e arredondar para cima 'Math.ceil'. E para retirar qualquer parte decimal utilize "Math.trunc"

console.log(`x vale ${x}, y vale ${y} e z vale ${z}`)

x=3
z = Math.pow(x, y) // potencia de um numero pelo outro.

console.log(`x(3) elevado a y(2) é igual a: ${z}`)

x=9
z = Math.sqrt(x)//raiz quadrada

console.log(`A raiz quadrada de x(9) é iguak a: ${z}`)

x = 45//logaritmo
z = Math.log(x)

console.log(`O logaritmo de x(45) é igua a: ${z}`)
x = 45
z = Math.sin(x)//seno

console.log(`O seno de x(45) é igual a: ${z}`);


z= Math.cos(x) //cos

console.log(`O cosseno de x(45) é igual a: ${z}`)

z= Math.tan(x) //tangente
console.log(`A tangente de x(45) é igual a: ${z}`)

x = -3.21 //Número absoluto (número positivo)
z= Math.abs(x)
console.log(`O número absoluto de x é igual a: ${z}`)

z = Math.sign(x); //sinal positivo(1), negativo(-1) e zero(0)
console.log(`O sinal de x é: ${z}`)


x = 10
y = 20
z = 30
let max = Math.max(x, y, z); //Maior número

console.log(max)

let min = Math.min(x, y, z) /// menor número

console.log(min)