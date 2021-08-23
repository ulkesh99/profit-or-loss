const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-btn");
const outputMsg = document.querySelector("#output");

submitButton.addEventListener("click", ()=> {
    if (initialPrice.value > currentPrice.value) {
        var loss = (initialPrice.value - currentPrice.value) * quantity.value;
        var lossPercentage = (loss / initialPrice.value) * 100;
        displayOutput(`The loss is ${loss} and loss percentage is ${lossPercentage}% 😥`)
    } else if (currentPrice.value > initialPrice.value) {
        var profit = (currentPrice.value - initialPrice.value) * quantity.value;
        var profitPercentage = (profit / initialPrice.value) * 100;
        displayOutput(`The profit is ${profit} and profit percentage is ${profitPercentage}% 😃 `)
    } else {
        displayOutput(`NA`)
    }
})

function displayOutput(msg) {
    outputMsg.innerHTML = msg;
}

function changeBackground() {
    if (initialPrice.value > currentPrice.value) {
        outputMsg.style.backgroundColor = 'red';
    } else if (currentPrice.value > initialPrice.value) {
        outputMsg.style.backgroundColor = "green";
    }
}