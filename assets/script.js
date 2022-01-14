// global vars

// functions
// save task to local storage
function saveTask() {
    console.log($(this).parent());
    const hour = $(this).parent().attr("id");
    const task = $(this).siblings("textarea").val();

    localStorage.setItem(hour, task);
}

// event listeners
// show current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

// grab tasks from local storage
const hour = localStorage.getItem("hour9");
// alert(hour);
$("#hour9 .js-task").val(localStorage.getItem("hour9"));
$("#hour10 .js-task").val(localStorage.getItem("hour10"));

// user clicks save button
$(".js-btn").on("click", saveTask);
