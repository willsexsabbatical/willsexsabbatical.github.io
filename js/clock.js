/*var countDownDate = new Date("Nov 13, 2021 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  //document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  document.getElementById("pa3 br3 bg-dark-blue dib days").innerHTML = days;
  document.getElementById("pa3 br3 bg-dark-blue dib hours").innerHTML = hours;
  document.getElementById("pa3 br3 bg-dark-blue dib minutes").innerHTML = minutes;
  document.getElementById("pa3 br3 bg-dark-blue dib seconds").innerHTML = seconds;


  //var clock = document.getElementById(id);
  //var daysSpan = clock.querySelector('.days');
  //var hoursSpan = clock.querySelector('.hours');
  //var minutesSpan = clock.querySelector('.minutes');
  //var secondsSpan = clock.querySelector('.seconds');
  //daysSpan.innerHTML = days;
  //hoursSpan.innerHTML = hours;//('0' + hours).slice(-2);
  //minutesSpan.innerHTML = minutes;//('0' + minutes).slice(-2);
  //secondsSpan.innerHTML = seconds;//('0' + seconds).slice(-2);
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    //document.getElementById("demo").innerHTML = "EXPIRED";
    alert("COUNTDOWN OVER");
  }
}, 1000);

/*
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(t / 1000 % 60);
  var minutes = Math.floor(t / 1000 / 60 % 60);
  var hours = Math.floor(t / (1000 * 60 * 60) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

// example 15 days out
//var deadline = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);
// people in different timezones will see different dates unless you use UTC
// Searcn your timezone in UTC
// then use this format:
var deadline = new Date(Date.parse('19 August 2017 19:15:00Z'));

if (new Date() > deadline) {
  alert('COUNTDOWN COMPLETE! \n Some Call to Action!!!');
}

initializeClock('clockdiv', deadline);*/
