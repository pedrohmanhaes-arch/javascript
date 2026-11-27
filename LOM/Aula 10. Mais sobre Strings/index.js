let umaString = 'Um "texto"'
let outraString = 'O rato roeu a roupa do rei de roma'

console.log(umaString.concat(' muito bonito'))
console.log(umaString + ' muito bonito')
console.log(`${umaString} muito bonito`)
console.log(umaString[4])
console.log(umaString.charAt(4))

console.log(umaString.match(/[a-z]/))

console.log(umaString.match(/[a-z]/g))

console.log(umaString.search(/[a-z]/))

console.log(umaString.replace('Um', 'que'));

console.log(outraString.replace(/r/g, 'p'))

console.log(umaString.length)
console.log(outraString.length)

console.log(outraString.slice(2, 6))
console.log(outraString.slice(-4))

console.log(outraString.substring(outraString.length, -5))

console.log(outraString.split('r'))

console.log(outraString.toUpperCase())