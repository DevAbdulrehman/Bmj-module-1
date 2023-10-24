let hr="0";
let min="59";
let sec="58";
let msec="0";
document.getElementById("msec").innerText=msec;
document.getElementById("sec").innerText=sec;
document.getElementById("min").innerText=min
document.getElementById("hr").innerText=hr

function time(){
    msec++;
    document.getElementById("msec").innerText=msec;
    if (msec==1000){
        msec=0;
        sec++;
        document.getElementById("sec").innerText=sec;
        if(sec==59){
            sec=0;
            min++
            document.getElementById("min").innerText=min;
        }
        if(min==59){
            min=0;
            hr++;
            document.getElementById("hr").innerText=hr
        }
    }
    
// document.getElementById("hr").innerText=hr;
// document.getElementById("min").innerText=min;
// document.getElementById("sec").innerText=sec;
// document.getElementById("msec").innerText=msec;
}

let myTime=setInterval(time,0);