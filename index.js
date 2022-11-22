const HoursEL=document.getElementById("Hours");
const MinutesEL=document.getElementById("Minutes");
const SecondsEL=document.getElementById("Seconds");
const AMPMEL=document.getElementById("AMPM");

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let AMPM = "AM"

    if (h > 12){
        h = h - 12
        AMPM = "PM"
    }

    h = h > 10 ? "0" + h : h;
    m = m > 10 ? "0" + m : m;
    s = s > 10 ? "0" + s : s;


    HoursEL.innerText = h;
    MinutesEL.innerText = m;
    SecondsEL.innerText = s;
    AMPMEL, (innertext = AMPM);
    setTimeout(()=>{

    }, 1000)
}

updateClock();