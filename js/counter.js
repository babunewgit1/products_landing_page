const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000); // Correct calculation
  return this;
};

if (localStorage.getItem("timeLeft") == null) {
  var countDown = new Date().addHours(48).getTime(); // Set 48 hours (2 days)
} else {
  var countDown = parseInt(localStorage.getItem("timeLeft"), 10);
}

x = setInterval(function () {
  var now = new Date().getTime(),
    distance = countDown - now;

  $(".countdown-days").text(Math.floor(distance / day));
  $(".countdown-hours").text(Math.floor((distance % day) / hour));
  $(".countdown-minutes").text(Math.floor((distance % hour) / minute));
  $(".countdown-seconds").text(Math.floor((distance % minute) / second));
  localStorage.setItem("timeLeft", countDown);

  // Do something later when date is reached
  if (distance < 0) {
    countDown = new Date().addHours(48).getTime(); // Reset to 48 hours (2 days)
    localStorage.setItem("timeLeft", countDown);
  }
}, second);
