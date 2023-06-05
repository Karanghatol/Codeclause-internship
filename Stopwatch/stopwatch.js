let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

// button click functions 

startbtn.addEventListener('click' , function(){
    timer = true;
    stopwatch();
});

stopbtn.addEventListener('click' , function(){
    timer = false;
});

resetbtn.addEventListener('click' , function(){
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('count').innerHTML = '00';
});

function stopwatch(){
    if(timer){
        count++;

        if(count == 100){
            second++;
            count = 0;
        }

        if(second == 60){
            minute++;
            second = 0;
        }

        if(minute == 60){
            hour++;
            minute = 0;
            second = 0;
        }

        let hrstr =  hour;
        let minstr = minute;
        let secstr = second;
        let costr = count;

        if(hour < 10){
            hrsrt = "0" + hrstr;
        }

        if(minute < 10){
            minstr = "0" + minstr;
        }

        if(second < 10){
            secstr = "0" + secstr;
        }

        if(count < 10){
            costr = "0" + costr;
        }

        document.getElementById('hr').innerHTML = hrstr;
        document.getElementById('min').innerHTML = minstr;
        document.getElementById('sec').innerHTML = secstr;
        document.getElementById('count').innerHTML = costr;

        setTimeout(stopwatch, 10);
    }
}