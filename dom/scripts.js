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




