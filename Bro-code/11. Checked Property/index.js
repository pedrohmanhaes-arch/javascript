// .checked = propriedade que determina o estado de seleção de um elemento HTML do tipo checkbox ou radio button.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

    document.getElementById("mySubmitBtn").onclick = function(){
    if (myCheckBox.checked){
        //console.log("You are subscribed!");
        subResult.textContent = "You are subscribed!"
    }
    else{
        //console.log("You are NOT subscribed!")
        subResult.textContent = "You are NOT subscribed!"
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying whith a Visa"
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = "You are paying whith a MasterCard"
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "You are paying whith PayPal"
    }
    else{
        paymentResult.textContent = "You must select a payment type"
    }
}

