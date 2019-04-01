var mm = document.getElementsByClassName('mm')[0],
    ss = document.getElementsByClassName('ss')[0],
    msms = document.getElementsByClassName('msms')[0],
    startBtn = document.getElementsByClassName('start')[0],
    saveBtn = document.createElement('button'),
    resetBtn = document.createElement('button');

var counterMs = 0,
    counterS = 0,
    counterM = 0;



startBtn.onclick = function(event) {
    var target = event.target;



    document.body.appendChild(saveBtn).innerText = 'Сохранить значение';
    document.body.appendChild(resetBtn).innerText = 'Сбросить секундомер';
    var int = setInterval(forMs, 10);



    if (target.getAttribute('data') === 'paused') {
        forMs();
        startBtn.setAttribute('data', 'works');
        startBtn.innerHTML = 'Приостановить';



    }

    if (target.getAttribute('data') === 'works') {
        clearInterval(int);
        startBtn.setAttribute('data', 'paused');
        startBtn.innerHTML = 'Возобновить';





    }
    if (target.getAttribute('data') === 'start') {
        forMs();
        startBtn.setAttribute('data', 'works');
        startBtn.innerHTML = 'Приостановить';





    }


};


function forMs() {

    counterMs++;
    msms.innerText = counterMs;
    if (counterMs === 100) {
        counterMs = 0;

        counterS++;
        ss.innerText = counterS;
        if (counterS === 59) {
            counterS = 0;
            counterM++;
            mm.innerText = counterM;
        }
    }

}

resetBtn.onclick = function () {
    counterMs = 0;
    counterS = 0;
    counterM = 0;
    mm.innerText = '0';
    ss.innerText = '0';
    msms.innerText = '0';
};

saveBtn.onclick = function () {
    var result = document.createElement('div');
    document.body.appendChild(result).innerHTML = 'значение :' + counterM + ':' + counterS + ' :' + counterMs;
};