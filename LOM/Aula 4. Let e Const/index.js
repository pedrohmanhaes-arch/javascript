const nome = 'Luiz'
const sobrenome = 'Otávio Miranda'
const idade = 30
const peso = 84
const altura = 1.80
let imc = peso / (altura * altura) 
let anoNasc = 2026 - idade

console.log(`${nome} ${sobrenome}, nasceu no ano de ${anoNasc}, tem ${idade} anos, pesa ${84}kg, tem ${altura}m de altura e seu IMC é de ${imc}.`)

console.log(nome, sobrenome, 'nasceu no ano de', anoNasc, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura,'m de altura e seu IMC é de', imc )