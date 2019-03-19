var container = document.getElementById('container'),
    button = document.getElementsByTagName('button')[0];

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://google.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);


//Часть 1 - разминочная =)

function changeLink() {

    var links = firstPar.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++)
    links[i].classList.toggle('changeColorLink');

}

button.onclick = changeLink;


var links = secondPar.getElementsByTagName("a");
    for (var i = 0 ; i < links.length; i++) {
            var toAlert = links[i].getAttribute('href');
            links[i].addEventListener("click",function(event){
                alert(toAlert);
                event.preventDefault();
                event.stopPropagation();
        });
    }
//Часть 2 - доска

var button = document.getElementsByTagName('button')[0],
    row = document.getElementById( "row" ),
    col = document.getElementById( "col" ),
    board = document.getElementsByClassName("board")[0];

function createTable() {
    var table = document.createElement("table"),
        x = Number(row.value),
        y = Number(col.value);

    if (x>10||y>10) {
        alert('введите число не больше 10');
        return false;
    }

    for (var i = 1; i <= y; i++) {
        var tr = document.createElement('tr');
        for (var j = 1; j <= x; j++) {
            var td = document.createElement('td');
            (i%2 === j%2) ? td.className = "white" : td.className = "black";

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    board.appendChild(table);
}

function checkInput() {
    if(row.value.length !== 0 && col.value.length !== 0 ) {
        button.removeAttribute('disabled');
    }
}

function reverseTd() {

    var td = board.getElementsByTagName('td');

    for (var i =0; i < td.length; i++) {
        if (td[i].getAttribute('class') === 'white') {
            td[i].className = 'black';
        } else {
            td[i].className = 'white';
        }
    }
}

button.onclick = createTable;
row.onkeyup = checkInput;
col.onkeyup = checkInput;
board.onclick = reverseTd;


