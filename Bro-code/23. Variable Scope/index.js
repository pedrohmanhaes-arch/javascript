// Variable scope (escopo da variável) = determina em quais partes do código uma variável pode ser reconhecida e acessada.
// Pode ser local (restrita a um bloco ou função) ou global (acessível em diferentes partes do código).

//variável declarada em escopo global pode ser acessada de qualquer escopo local. Porém, se uma variável com o mesmo nome for declarada dentro de um escopo local, a variável local terá prioridade e será utilizada naquele escopo.
let x = 3;


function2()

// Quando uma variável é declarada dentro de uma função, ela possui escopo local (local scope). Isso significa que ela só pode ser acessada dentro da função em que foi declarada. Assim, podemos utilizar variáveis com o mesmo nome em funções diferentes, cada uma com seu próprio valor, sem que uma interfira na outra.
function function1(){
    let x = 1;
    console.log(x)
}

function function2(){
    let x = 2;
    console.log(x)
}
