let button = document.getElementById('button');
let table = 10;

button.addEventListener("click", clear);
button.addEventListener("click", multiply);

function multiply() {
    let inputFiel = document.getElementById('input').value;

    for (let i = 1; i <= table; i++) {
        document.getElementById('table').innerHTML += `${inputFiel} x ${i} = ` + (inputFiel * i) + '<br>';
    }

}

function clear() {
    document.getElementById('table').innerHTML = "";
}