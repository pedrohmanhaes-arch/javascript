// function = A section of reusable code.
//            Declare once, use it whenever you want.
//            Call thr function to execute that code.

/* function happyBirthday(){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear you!");
    console.log("Happy birthday to you!");
}

happyBirthday(); */



/* function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old`);
}

happyBirthday("Pedro", 34); */

function add(x, y){
    //let result = x + y;
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

let answer = add(2,3)
console.log(answer)

console.log(subtract(25, 10))

console.log(multiply(3,8))

console.log(divide(25,5))

function isEven(number){
    /* if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    } */

        //modo simplificado(operador ternário)

    return number % 2 === 0 ? true : false;
}

console.log(isEven(11))

function isValidEmail(email){
    /* if(email.includes("@")){
        return true;
    }
    else{
        false;
    } */
    // modo simplificado (operador ternário)
        return email.includes("@") ? true: false;
}

console.log(isValidEmail("bro@fake.com"))