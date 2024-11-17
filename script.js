let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");
let ampmContainer = document.querySelector(".ampm");

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function updateClock() {
    const today = new Date();
    let date = today.getDate();
    let day = weekdays[today.getDay()];
    let month = monthNames[today.getMonth()];

    let hours = today.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    dateContainer.innerHTML = `<p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;   

    hoursContainer.textContent = formatTime(hours);
    minutesContainer.textContent = ":" + minutes;
    secondsContainer.textContent = ":" + seconds;
    ampmContainer.textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock(); // Call once immediately to avoid delay