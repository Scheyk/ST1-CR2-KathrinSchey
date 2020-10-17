// ############################################ variablen
let button = document.getElementById('button');
let multi = 10;
let history = [];

// ########################################### eventlistener
button.addEventListener("click", clear);
button.addEventListener("click", magic);


// ########################################### functions start

function magic() {
    let inputField = document.getElementById('input').value;
    //console.log(inputFiel === "");

    if (inputField === "" || isNaN(inputField) || (inputField % 1) !== 0 || inputField == 0 || inputField > 10 || inputField < 0) {
        try {

            if (inputField === "") throw "you must enter a number...";
            if (isNaN(inputField)) throw "only numbers...tztztz...";
            if ((inputField % 1) !== 0) throw "choose a full number. Not a decimal :D";
            if (inputField == 0) throw "Every number multiplied by 0 is 0. You don’t need a table for that.SHAME!";
            if (inputField > 10) throw "You should enter a number smaller than 10";
            if (inputField < 0) throw "a number between 1 and 10.NOT smaler ;)";

        } catch (error) {

            document.getElementById('error').innerHTML = error;

        } finally {
            return false;
        }
    } else {
        history.push(inputField);
        tableLoop(inputField);
    }

}

// ########################################## to create the table
function tableLoop(table) {

    for (i = 1; i <= multi; i++) {

        let newTr = document.createElement('tr');
        let newTd = document.createElement('td');

        newTd.innerHTML += `${table} x ${i} =` + (table * i);
        newTr.appendChild(newTd);

        document.getElementById('tBody').appendChild(newTr);
    }

    arrayOut();
}

// ########################################### for the last search
function arrayOut() {
    lastSearch = "";

    for (i = 0; i < history.length; i++) {

        lastSearch += `<button id='lastButton_${i}' class='btn btn-warning m-2' onclick='tableLoop(${history[i]})'>${history[i]}</button>`;
        //arrayButton = document.getElementById(`lastButton_${i}`);
        //arrayButton.addEventListener("click", clear);
    }

    document.getElementById('arrayOut').innerHTML = lastSearch;
    //arrayButton.addEventListener("click", tableLoop);

}

// ########################################### to clear the outputs
function clear() {
    document.getElementById('error').innerHTML = "";
    document.getElementById('tBody').innerHTML = "";

}