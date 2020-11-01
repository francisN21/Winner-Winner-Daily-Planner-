// wraps all the logic on this function
$(document).ready(function () {

// displays current date and time //
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
// document.querySelector("#currentDay").textContent = currentTime;
$("#currentDay").text(currentTime);




} )