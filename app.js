var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var day = document.getElementById("day");

setInterval(function(){
    var currentDate = new Date();
    hours.innerText = currentDate.getHours();
    minutes.innerText = currentDate.getMinutes();
    seconds.innerText = currentDate.getSeconds();
    day.innerText = currentDate.toDateString();
    

}, 1000);