var clock =10;

var countdown = 0;

start();

function start(){
    //start clock

    countdownId = setInterval("countdown()",100);
}

function countdown(){
    if (clock < 100) {
        clock = clock +1;

        document.getElementById("nums").innerHTML = clock;
    } else {
        //stop clock

        clearInterval(countdownId);
    }
}