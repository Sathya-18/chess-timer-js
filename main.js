let min1 = document.getElementById("min1");
let sec1 = document.getElementById("sec1");
let min2 = document.getElementById("min2");
let sec2 = document.getElementById("sec2");
let swap = document.getElementById("swap");
let select = document.getElementById("selectTime");
let start = document.getElementById("str");
let reset = document.getElementById("rst");
var st = null;

function disable(){
    swap.disabled=true;
    start.disabled=true;
    reset.disabled=true;
}

disable();

function changemin(){
    start.disabled=false;
    min1.minute = select.value;
    min2.minute = select.value;
    if(select.value == 0){
        disable();
    }
    min1.innerText = min1.minute;
    min2.innerText = min2.minute;
    sec1.second = 0;
    sec2.second = 0;
    min1.isrunning= true;
    min2.isrunning = false;
}



select.addEventListener("change", changemin);

function timer(){
    select.disabled=true;
    start.disabled=true;
    reset.disabled = false;
    swap.disabled = false;
    if(min1.isrunning== true){
    if(min1.minute==0 && sec1.second==0){
        min1.minute =0;
        sec1.second =0;
    }else if(sec1.second != 0){
        sec1.second--;
    }else if(min1.minute!=0 && sec1.second==0){
        sec1.second=59;
        min1.minute--;
    }
    min1.innerText=min1.minute;
    sec1.innerText=sec1.second;
    }
    if(min2.isrunning== true){
        if(min2.minute==0 && sec2.second==0){
            min2.minute =0;
            sec2.second =0;
        }else if(sec2.second != 0){
            sec2.second--;
        }else if(min2.minute!=0 && sec2.second==0){
            sec2.second=59;
            min2.minute--;
        }
        min2.innerText=min2.minute;
        sec2.innerText=sec2.second;
    }
}



start.addEventListener("click", function(){
    function startTimer(){
        st = setInterval(function(){
            timer();
        }, 1000)
    }
    startTimer();
});

function stopTimer(){
    
    select.disabled=false;
    disable();
    clearInterval(st);
    
}

function swaping(){
    if(min1.isrunning==true){
        min1.isrunning=false;
        min2.isrunning=true;
    }else if(min2.isrunning==true){
        min2.isrunning=false;
        min1.isrunning=true;
    }
}

swap.addEventListener("click", swaping);

reset.addEventListener("click", function(){
    min1.innerText = "00";
    min2.innerText = "00";
    sec1.innerText ="00";
    sec2.innerText="00";
    select.disable=false;
    start.disable=true;
    swap.disable=true;
    reset.disable=true;
    stopTimer();
});




