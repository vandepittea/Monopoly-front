"use strict";

function generateVisualAPIErrorInConsole(){
    console.error('%c%s','background-color: red;color: white','! An error occurred while calling the API');
}

function errorHandler(error){
    addErrorAndSuccessfulMessage(error.cause);
}

function addErrorAndSuccessfulMessage(message){
    const $error = document.querySelector("#error-and-successful");
    $error.insertAdjacentHTML("afterbegin", `<p>${message}</p>`);

    setTimeout(deleteLastError, _waitingTimeActions);
}

function deleteLastError() {
    const $error = document.querySelector("#error-and-successful");

    if($error.lastElementChild.id === "roll-dice"){
        $error.lastChild.previousSibling.remove();
    }
    else{
        $error.lastElementChild.remove();
    };
}

function addRollDiceMessages(message){
    const $error = document.querySelector("#error-and-successful");
    $error.innerHTML = `<p id="roll-dice">${message}</p>`;
}