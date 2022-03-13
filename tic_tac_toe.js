count = 1;
let game = false;
console.log(game);

function start() {
    game = true;
    console.log(game);;
}

function run(ctrl) {

    if (game == true) {
        if (count <= 9) {
            if (count % 2 != 0) {
                document.getElementById(ctrl.id).innerHTML = 'X';
                document.getElementById(ctrl.id).style.color = 'red';
            }
            else {
                document.getElementById(ctrl.id).innerHTML = 'O';
                document.getElementById(ctrl.id).style.color = "blue";
            }
            count++;
            if (winx() == true) {
                alert('Player X Wins');
                reset();
            }
            else if (wino() == true) {
                alert('Player O Wins');
                reset();
            }

        }
        else {
            alert('Match is draw');
            reset();
        }
    }
}
function reset() {
    document.getElementById('td1').innerHTML = "";
    document.getElementById('td2').innerHTML = "";
    document.getElementById('td3').innerHTML = "";
    document.getElementById('td4').innerHTML = "";
    document.getElementById('td5').innerHTML = "";
    document.getElementById('td6').innerHTML = "";
    document.getElementById('td7').innerHTML = "";
    document.getElementById('td8').innerHTML = "";
    document.getElementById('td9').innerHTML = "";
    count = 1;

}
function stop() {
    game = false;
    console.log(game);
}

function winx() {
    if (check('td1', 'td2', 'td3') || check('td1', 'td4', 'td7') || check('td1', 'td5', 'td9') || check('td2', 'td5', 'td8') ||
        check('td4', 'td5', 'td6') || check('td3', 'td6', 'td9') || check('td7', 'td8', 'td9') || check('td3', 'td5', 'td7')) {
        return true;
    }

}
function wino() {
    if (checko('td1', 'td2', 'td3') || checko('td1', 'td4', 'td7') || checko('td1', 'td5', 'td9') || checko('td2', 'td5', 'td8') ||
        checko('td4', 'td5', 'td6') || checko('td3', 'td6', 'td9') || checko('td7', 'td8', 'td9') || checko('td3', 'td5', 'td7')) {
        return true;
    }

}


function check(td1, td2, td3) {
    if (getdata(td1) != '' && getdata(td2) != '' && getdata(td3) != '' && getdata(td1) == "X" &&
        getdata(td2) == "X" && getdata(td3) == "X") {
        return true;
    }

}
function checko(td1, td2, td3) {
    if (getdata(td1) != '' && getdata(td2) != '' && getdata(td3) != '' && getdata(td1) == "O" &&
        getdata(td2) == "O" && getdata(td3) == "O") {
        return true;
    }

}

function getdata(td) {
    return document.getElementById(td).innerHTML
}