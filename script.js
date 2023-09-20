setInterval(() => {
    const clocktime = document.getElementById('time');
    const clockdate = document.getElementById('date');
    const period = document.getElementById('period');
    const date = new Date();
    let min = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    let sec = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
    let ampm = (date.getHours() > 12) ? "pm" : "am";
    let temp  = date.getHours();
    
    let hour;
    if((temp == 0 )||(temp == 12)){
        hour = 12; 
    }
    else if(temp>=1&&temp<=9){
        hour = "0" + temp;
    }
    else if(temp>=10 && temp<=12){
        hour = temp;
    }
    else if(temp>=13 && temp<=21){
        hour =  "0" + temp -12;
    }
    else {
        hour = temp - 12;
    }
    let cuurenttime = hour + ":" + min + ":" + sec;
    clocktime.innerHTML = cuurenttime;
    period.innerHTML = ampm;
    //    for date ..........................

    let dow = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thr",
        "Fri",
        "Sat"
    ];
    let month=[
        "Jan",
        "feb",
        "mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];


    let daynum = (date.getDate()<10 ) ?"0"+date.getDate(): date.getDate();

let currenDate = dow[date.getDay()] +" "+ month[date.getMonth()]+"    " +daynum+" "+date.getFullYear();

clockdate.innerHTML= currenDate;

}, 1000)



