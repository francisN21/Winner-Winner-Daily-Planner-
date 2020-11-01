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



} )