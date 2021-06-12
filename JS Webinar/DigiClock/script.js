
setInterval(showTime, 1000);
function showTime(){
    var date = new Date();
    var h= date.getHours(); //0-23
    var m = date.getMinutes(); // 0-59
    var s = date.getSeconds(); //0-59
    var session = "AM";

    if (h==0){
        h = 12
    }

    if (h > 12){
        h = h-12;
        session ="PM";
    }

    if (h < 10){
        h = '0'+ h;
    }
     if (m < 10){
        m = '0'+ m;
    }
     if (s < 10){
        s = '0'+ s;
    }

    var time = h + ":" + m + ":" + s + " " + session;

    
    
    document.getElementById("MyDigiClock").innerHTML = time;
   
    
    
}

showTime();