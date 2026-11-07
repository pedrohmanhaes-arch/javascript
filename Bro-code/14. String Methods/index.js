// String Methods = allow you to manipulate and work with text (strings)

/* let userName = "BroCode"; */

/*  
console.log(userName.charAt(1)); */ //Returns the character at the specified index.

 //Returns the position of the first occurrence of a substring, or -1 if it is not present.

//console.log(userName.indexOf("o"))  //Returns the POSITION of the first occurrence of a substring, or -1 if it is not present.

//console.log(userName.lastIndexOf("o")) //Returns the last occurrence of a substring in the string, or -1 if it is not present.

//console.log(userName.length); // Returns the length of a String object.

//let userName = "BroCode     " 

// userName = userName.trim() //Remove os espaços em branco e os caracteres de terminação de linha do início e do fim de uma string.

//userName = userName.toUpperCase(); //Converts all the alphabetic characters in a string to uppercase.

//userName = userName.toLowerCase() //Converts all the alphabetic characters in a string to lowercase.

// userName = userName.repeat(3) // número de cópias a acrescentar: Retorna um valor do tipo String formado por um determinado número de cópias concatenadas. Se o número for 0, é retornada uma string vazia.

// let userName = " BroCode"
/* let result =userName.startsWith(" ") // Verifica se a string começa com o texto informado (searchString),a partir da posição indicada (position). Retorna true se encontrar o texto exatamente nessa posição ou false caso contrário. O parâmetro position é opcional e, se não informado, a verificação começa no início da string (índice 0).

console.log(result)

if(result){
    console.log(`Your username can't begin whith empty space`)
}
else{
    console.log(userName)
} */

    /* let userName = "BroCode"
    let result = userName.endsWith(" ") //  Verifica se o texto termina com a sequência de caracteres informada (searchString). Retorna true se encontrar essa sequência exatamente no final da string ou false caso contrário. O parâmetro endPosition é opcional e define até qual posição do texto a verificação deve ser realizada.


if(result){
    console.log(`Your username can't end whith empty space`)
}
else{
    console.log(userName)
}
 */



/* let result = userName.includes(" ") // Verifica se a string de busca (searchString) está presente dentro da representação em texto do objeto, a partir da posição informada.  Retorna true se encontrar pelo menos uma ocorrência e false caso contrário.

if(result){
    console.log(`Your username can't include empty space`)
}
else{
    console.log(userName)
} */


    /* phoneNumber = phoneNumber.replaceAll("-", "") //Replace all instances of a substring in a string, using a regular expression or search string.

    console.log(phoneNumber)
 */

     let phoneNumber = "123-456-7890"

// phoneNumber = phoneNumber.padStart(15, 0) // Adiciona caracteres no início (à esquerda) da string até que ela atinja o comprimento desejado (targetLength). O caractere ou texto utilizado para preenchimento (padString) pode ser repetido quantas vezes forem necessárias. Se a string já tiver o comprimento desejado ou for maior, nenhum preenchimento será realizado.

    phoneNumber = phoneNumber.padEnd(15, 0) //adiciona caracteres no fim (à direita) da string até que ela atinja o comprimento desejado (targetLength). O caractere ou texto utilizado para preenchimento (padString) pode ser repetido quantas vezes forem necessárias. Se a string já tiver o comprimento desejado ou for maior, nenhum preenchimento será realizado.
    console.log(phoneNumber)
