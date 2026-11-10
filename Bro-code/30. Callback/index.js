// callback = a function that is passed as an argument to another function. Used to handle asynchronous operations: 1. Reading a file. 2. Network requests. 3. Interacting with databases. 

/* //Uma callback é uma função passada como argumento para outra função, que será executada posteriormente, geralmente quando uma determinada tarefa for concluída.

É muito utilizada em operações assíncronas, como leitura de arquivos, requisições de rede e interações com bancos de dados. Ela permite executar uma função após a conclusão de outra operação. 

                "Hey, when you're done, call this next"
*/

/* hello(wait);

function hello(callback){
    console.log("Hello");
    callback();
}

function wait(){
    console.log("wait!")
}

function leave(){
    console.log("leave!")
}

function goodbye(){
    console.log("goodbye");
}
 */


sum(displayPage, 1, 2)

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result)
}

function displayPage(result){
    document.getElementById("myH1").textContent = result
}