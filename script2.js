// variablen
let button = document.getElementById('button');
let multi = 10;

//let table = document.getElementById('output');

//let fill = document.createTextNode("");



// eventlistener
button.addEventListener("click", clear);
button.addEventListener("click", multiply);


// functions
function multiply() {
    let inputFiel = document.getElementById('input').value;
    //console.log(inputFiel === "");

    if (inputFiel === "" || isNaN(inputFiel) || (inputFiel % 1) !== 0 || inputFiel == 0 || inputFiel > 10 || inputFiel < 0) {
        try {

            if (inputFiel === "") throw "you must enter a number...";
            if (isNaN(inputFiel)) throw "only numbers...tztztz...";
            if ((inputFiel % 1) !== 0) throw "choose a full number. Not a decimal :D";
            if (inputFiel == 0) throw "Every number multiplied by 0 is 0. You don’t need a table for that.SHAME!";
            if (inputFiel > 10) throw "You should enter a number smaller than 10";
            if (inputFiel < 0) throw "a number between 1 and 10.NOT smaler ;)";

        } catch (error) {

            document.getElementById('error').innerHTML = error;

        } finally {
            return false;
        }
    } else {

        for (i = 1; i <= multi; i++) {

            let newTr = document.createElement('tr');
            let newTd = document.createElement('td');

            newTd.innerHTML += `${inputFiel} x ${i} =` + (inputFiel * i);
            newTr.appendChild(newTd);

            document.getElementById('tBody').appendChild(newTr);
        }

    }

}

function clear() {
    document.getElementById('error').innerHTML = "";
    document.getElementById('tBody').innerHTML = "";
}