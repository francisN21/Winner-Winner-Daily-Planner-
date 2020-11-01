// wraps all the logic on this function
$(document).ready(function () {

// displays current date and time //
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
// document.querySelector("#currentDay").textContent = currentTime;
$("#currentDay").text(currentTime);

// saveBTN user input eventlistener
$(".saveBtn").on("click", function(e){
    e.preventDefault();
    // get the values from the description class and id

    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    // saves time and text on to local storage
    localStorage.setItem(time, text);
    console.log(this)
})
// Load save value from the local storage for each available hours
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

} )