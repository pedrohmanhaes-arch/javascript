// While Loop = repeat some code WHILE some condition is true

//let username = "";

/* while(username === "" || username === null){
    username = window.prompt(`Enter your name: `);
}

    console.log(`Hello  ${username}`) */

    //

//Dessa forma não é necessário declarar o valor da variável

   /*  let username;

    do{
    username = window.prompt(`Enter your name: `);
    }
    while(username === "" || username === null){
}

    console.log(`Hello  ${username}`)
 */

    //WHILE

/* let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!")
    }
    else{
        console.log("Invalid credentials! please try again");
    }
} */


    //DO WHILE

let loggedIn; //dessa forma logged in não precisa ser declarado e também pode ser declarado como true para o código funcionar.
let username;
let password;

do{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);


    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!")
    }
    else{
        console.log("Invalid credentials! please try again");
    }
}
while(!loggedIn)
