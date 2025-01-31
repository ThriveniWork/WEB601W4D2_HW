//Create a time date function
function currentTime(){
    var d = new Date(); //Get the current date
    var hr = d.getHours();//Get the current hour
    var min = d.getMinutes(); //Get the current minute
    var sec = d.getSeconds(); //Get the current second
    var ampm; //AM or PM

    //Add 0 to a single digit seconds
    if (sec < 10){
        sec = "0" + sec;
    }
    //Add 0 to a single digit minutes
    if (min < 10){
        min = "0" + min;
    }
    //Determine AM or PM string
    if(hr == 12){
        ampm = "PM"; //set to PM
    }else if(hr > 12){
        hr -= 12; //Change the hour to 12 hour system
        ampm = "PM"; //set to PM
    }else{
        ampm = "AM"; //set to AM
    }

    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm;

    //Time zone calculation
    var timeZoneOffset = d.getTimezoneOffset() / 60; //Get the time zone offset in minutes
    var timeZone; //Time zone string

    //Calculate time difference between UTC and specific city
    if(timeZoneOffset === 7){
        timeZone = "PST"; //Pacific Standard Time
    }else if(timeZoneOffset === 6){
        timeZone = "MST"; //Mountain Standard Time
    }else if(timeZoneOffset === 5){
        timeZone = "EST"; //Eastern Standard Time
    }else if(timeZoneOffset === 4){
        timeZone = "CST"; //Central Standard Time
    }else{
        timeZone = "GMT"; //Greenwich Mean Time
    }
    //Display current local time and time zone on HTML elements
    document.getElementById("clock").textContent = time + " " + timeZone; //adding time zone
}   
setInterval(currentTime, 1000); //setting timer
//Run the time date function
currentTime();
