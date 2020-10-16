// variablen
let button = document.getElementById('button');
let table = 10;


// eventlistener
button.addEventListener("click", clear);
button.addEventListener("click", tryAndCatch);
button.addEventListener("click", multi);


// functions
function tryAndCatch() {
    let message = document.getElementById('input').value;

    try {
        if (message == "") throw "you must enter a number...";
        if (message == 0) throw "Every number multiplied by 0 is 0. You don’t need a table for that";
        if (message > 10) throw "You should enter a number smaller than 10";
        if (isNaN(inputFiel)) throw "only numbers...";
    } catch (error) {
        document.getElementById('table').innerHTML = error;
    }


}

function multi() {
    let inputFiel = document.getElementById('input').value;

    for (i = 1; i < table; i++) {
        document.getElementById('table').innerHTML += `${inputFiel} x ${i} =` + (inputFiel * i) + '<br>';
    }
}

function clear() {
    document.getElementById('table').innerHTML = "";
}