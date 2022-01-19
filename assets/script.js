// functions
// save task to local storage
function saveTask() {
    // set values for the task the user wants to record, and what hour they want to record it on
    const hour = $(this).parent().attr("id");
    const task = $(this).siblings("textarea").val();

    // sets user inputted data to local storage
    localStorage.setItem(hour, task);
}

// changes color of hour rows to show if each hour is past, present, or future
function timeColorChange() {
    // assigns current time
    const nowHour = moment().hours();

    // checks each row against current time, displays background color based on logic
    $(".js-row").each(function () {
        // assigns the row currently being checked, and what hour of the day it correlates to
        const row = $(this);
        const rowHour = row.data("hour");

        // adds classes that determine background color
        if (rowHour < nowHour) {
            $(this).addClass("past");
        } else if (rowHour === nowHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
}

// event listeners
// shows current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

// grabs tasks from local storage, sets text area values to fetched data
$("#hour9 .js-task").val(localStorage.getItem("hour9"));
$("#hour10 .js-task").val(localStorage.getItem("hour10"));
$("#hour11 .js-task").val(localStorage.getItem("hour11"));
$("#hour12 .js-task").val(localStorage.getItem("hour12"));
$("#hour13 .js-task").val(localStorage.getItem("hour13"));
$("#hour14 .js-task").val(localStorage.getItem("hour14"));
$("#hour15 .js-task").val(localStorage.getItem("hour15"));
$("#hour16 .js-task").val(localStorage.getItem("hour16"));
$("#hour17 .js-task").val(localStorage.getItem("hour17"));

// user clicks save button
$(".js-btn").on("click", saveTask);

// displays background colors depending on what time of day it currently is
timeColorChange();
