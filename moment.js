//making the correct date
$(document).ready(function () {
    
  var moment = moment().format("MMMM Do YYYY");
    var display = document.getElementById("currentDay");
    display.innerHTML = moment;
    var currentHour = moment().format("HH");
// actions on my buttons as well as clearing  out
    $("#clearFieldsBtn").click(function (event) {
       
      event.preventDefault;
        $("textarea").val("");
        localStorage.clear();
      });
//my if else statements and my connections with my id from my html page, removing and adding class
      $(".time-div").each(function () {
        var timeDiv = $(this).attr("id").split("-")[1];
        
        if (currentHour == timeDiv) {
          $(this).addClass("present");
          $(this).children(".description").addClass("white-text");
        } else if (currentHour < timeDiv) {
          $(this).removeClass("present");
          $(this).addClass("future");
        } else if (currentHour > timeDiv) {
          $(this).removeClass("future");
          $(this).addClass("past");
        }
      });


      $(".saveBtn").click(function (event) {
        event.preventDefault();
        var use = $(this).siblings(".time-cute").val();
        var timer = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(timer, use);
      });
// times of the day
 $("#hour-09 .time-cute").val(localStorage.getItem("09"));
  $("#hour-10 .time-cute").val(localStorage.getItem("10"));
  $("#hour-11 .time-cute").val(localStorage.getItem("11"));
  $("#hour-12 .time-cute").val(localStorage.getItem("12"));
  $("#hour-13 .time-cute").val(localStorage.getItem("13"));
  $("#hour-14 .time-cute").val(localStorage.getItem("14"));
  $("#hour-15 .time-cute").val(localStorage.getItem("15"));
  $("#hour-16 .time-cute").val(localStorage.getItem("16"));
  $("#hour-17 .time-cute").val(localStorage.getItem("17"));
});