const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");

  var formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") {
    formatSwitchBtn.setAttribute("data-format", "24");
    document.querySelector(".clock-format-text").innerText = "12-hour format";
  } else {
    formatSwitchBtn.setAttribute("data-format", "12");
    document.querySelector(".clock-format-text").innerText = "24-hour format";
  }
});

function clock() {
  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  let period = "AM";

  if (hours >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }

  var formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") {
    hours = hours > 12 ? hours % 12 : hours;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".period").innerHTML = period;
  document.querySelector(".seconds").innerHTML = seconds;
}

var updateClock = setInterval(clock, 1000);

var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleDateString("default", { weekday: "long" });
const monthName = today.toLocaleDateString("default", { month: "short" });

document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;

const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotmenuBtn.addEventListener("click", () => {
  dotMenu.classList.toggle("active");
});

document.addEventListener("click", (f) => {
  if (f.target.id === "active-men") {
    dotMenu.classList.remove("active");
  }
});
