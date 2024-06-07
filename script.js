let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let day = document.querySelector('.day');
let cdate = document.querySelector('.cdate');
let cmonth = document.querySelector('.cmonth');
let cyear = document.querySelector('.cyear');

const dictionary = {
  '0': 'Sunday',
  '1': 'Monday',
  '2': 'Tuesday',
  '3': 'Wednesday',
  '4': 'Thursday',
  '5': 'Friday',
  '6': 'Saturday'
};

function padWithZero(number) {
  return number < 10 ? '0' + number : number;
}

setInterval(() => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let days = date.getDay();
  let ccdate = date.getDate();
  let ccmonth = date.getMonth() + 1; 
  let ccyear = date.getFullYear();

  hr = padWithZero(hr);
  min = padWithZero(min);
  sec = padWithZero(sec);
  ccdate = padWithZero(ccdate);
  ccmonth = padWithZero(ccmonth);

  hour.innerHTML = hr;
  minute.innerHTML = min;
  second.innerHTML = sec;
  day.innerHTML = dictionary[days];
  cdate.innerHTML = ccdate;
  cmonth.innerHTML = ccmonth;
  cyear.innerHTML = ccyear;

}, 1000);
