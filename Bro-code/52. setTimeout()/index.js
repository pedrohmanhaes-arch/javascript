// setTimeout() = function in JavaScript that allows you to schedule the execution of a function after an amount of time (milliseconds)

//  Times are approximate (varies based on the wokload of the JavaScript runtime env.)

// setTimeout(callback, delay);
// clearTimeout(timeoutID) = can cancel a timeout before it triggers

// 1 ------------------------------------------------

/* function sayHello(){
    window.alert("Hello")
}

setTimeout(sayHello, 3000) */

// 2 -------------------------------------

// setTimeout(function(){window.alert("Hello")}, 3000);

// 3 - Arrom Function ---------------------------------------------------

/* const timeOutId = setTimeout(() =>window.alert("Hello"), 3000)

clearTimeout(timeOutId); */


// 4 - button

let timeoutId;

function startTimer(){
    timeoutId =setTimeout(() => window.alert("Hello"), 3000)
    console.log("STARTED")
}

function clearTimer(){
    clearTimeout(timeoutId)
    console.log("CLEARED")
}