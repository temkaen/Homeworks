var time = 0;
var startBtn = document.getElementById("workPaused"),
    saveBtn = document.createElement("button"),
    resetBtn = document.createElement("button"),
    wrapper = document.getElementsByClassName("wrapper")[0];


var workPaused = function workPaused(event){
    var target = event.target;

    wrapper.appendChild(saveBtn).innerText = "Сохранить значение";
    wrapper.appendChild(resetBtn).innerText = "Сбросить секундомер";

    if (target.getAttribute('data-statusBtn') === 'works') {
        document.getElementById("workPaused").innerText = "Возобновить";
        target.setAttribute('data-statusBtn', 'paused');
    } else if (target.getAttribute('data-statusBtn') === "stopped"|| "paused") {
        target.setAttribute("data-statusBtn", "works");
        workSW();
        document.getElementById("workPaused").innerText = "Приостановить";
    }
};

startBtn.onclick = workPaused;

var min,
    sec,
    tenth;

var  workSW = function forWorkStopwatch(){

    if(startBtn.getAttribute("data-statusBtn") === "works"){
       var forTimeout = setTimeout(function(){
            time++;
            min = Math.floor(time/10/60);
            sec = Math.floor(time/10 % 60);
            tenth = time % 10;
            if(min < 10){
                min = "0" + min;
            }
            if(sec < 10){
                sec = "0" + sec;
            } else if (min === 60) {
                clearTimeout(forTimeout);
            }
            document.getElementsByClassName('timer')[0].innerHTML = min + ":" + sec + ":" + tenth + "0";
            workSW();
        },100)
    }
};

resetBtn.onclick =function reset(){

    time = 0;
    document.getElementById("workPaused").innerHTML = "Запустить";
    document.getElementsByClassName("timer")[0].innerHTML = "00:00:00";
    clearTimeout(workSW.forTimeout);

};
saveBtn.onclick = function () {
    var result = document.createElement('div');
    document.body.appendChild(result).innerHTML = min + ":" + sec + ":" + tenth + "0";
};

