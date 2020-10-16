// variablen
let button = document.getElementById('button');
let table = 10;


// eventlistener
button.addEventListener("click", clear);
button.addEventListener("click", multiply, false);


// functions
function multiply() {
    let inputFiel = document.getElementById('input').value;

    if (inputFiel === 0 || inputFiel > 10 || inputFiel === isNaN) {
        try {
            if (inputFiel === 0) throw "Every number multiplied by 0 is 0. You don’t need a table for that";
            if (inputFiel > 10) throw "You should enter a number smaller than 10";
            if (isNaN(inputFiel)) throw "only numbers...";
        } catch (error) {
            document.getElementById('table').innerHTML = error;
        }
    } else {
        for (i = 1; i < table; i++) {
            document.getElementById('table').innerHTML += `${inputFiel} x ${i} =` + (inputFiel * i) + '<br>';
        }
    }

}

function clear() {
    document.getElementById('table').innerHTML = "";
}