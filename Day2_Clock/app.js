let time, hr, min, sec;

const hrHand = document.querySelector(".hour");
const minHand = document.querySelector(".minute");
const secHand = document.querySelector(".second");

// initial set clock face
setHourHand();
setMinHand();
setSecHand();

function setHourHand(){
  getCurrentTime();
  const hrDeg = ((hr+(min/60))*365/12).toFixed(2);
  hrHand.style.transform = `rotate(${hrDeg}deg)`;
}

function setMinHand(){
  getCurrentTime();
  const minDeg = (min*365/60).toFixed(2);
  minHand.style.transform = `rotate(${minDeg}deg)`;
}

function setSecHand(){
  getCurrentTime();
  const secDeg = (sec*365/60).toFixed(2);
  secHand.style.transform = `rotate(${secDeg}deg)`;
}

function getCurrentTime(){
  time = new Date();
  hr = time.getHours()%12;
  min = time.getMinutes();
  sec = time.getSeconds();
}

// update sec hand every second
setInterval(setSecHand, 1000);

// update minute hand every 30 second
setInterval(setMinHand, 30000);

// update hour hand every minute
setInterval(setHourHand, 60000);



