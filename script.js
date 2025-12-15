let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let timeInSecsEl = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");

function convertToSecs() {
    let hours = parseInt(hoursInputEl.value);
    let mins = parseInt(minutesInputEl.value);

    if (hoursInputEl.value === "") {
        errorMsg.textContent = "please enter a valid number of hours";
    } else if (minutesInputEl.value === "") {
        errorMsg.textContent = "please enter a valid number of minutes";
        timeInSecsEl.textContent = "";

    } else {
        let secs = hours * 3600 + mins * 60;
        timeInSecsEl.textContent = secs + "s";
    }


}

convertBtnEl.addEventListener("click", convertToSecs);
