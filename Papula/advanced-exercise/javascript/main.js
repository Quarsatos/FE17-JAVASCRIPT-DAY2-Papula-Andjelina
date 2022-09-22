// Exercise 1

function  timeConvert(){
    let input_minutes = document.getElementById("minutes").value;
    let hours  = input_minutes / 60;
    let rest_hours = Math.floor(hours);
    let minutes  =  (hours - rest_hours) * 60;
    let rest_minutes = Math.round(minutes);
    let msg1 = document.getElementById("text");
    msg1.textContent  = input_minutes + " minutes = " + rest_hours +  "  hour(s) and "+ rest_minutes + " minute(s)";
}