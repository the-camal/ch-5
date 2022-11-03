var saveBtn = $(".saveBtn")

$(document).ready(function () {
    var date = moment().format('dddd MMM Do')
    $("#currentDay").text(date)
   
    var current = moment().hours()
    var timeBlock = $(".time-block")
    timeBlock.each(function() {
        var hour = parseInt($(this).attr("id"))
        if(hour === current) {
            $(this).children(".col-sm-10").attr("class", "present col-sm-10 description")
        }
        if(hour < current) {
            $(this).children(".col-sm-10").attr("class", "past col-sm-10 description")
        } 
        if(hour > current) {
            $(this).children(".col-sm-10").attr("class", "future col-sm-10 description")
        }
    })

    saveBtn.on("click", function(event) {
        event.preventDefault();
        var parentElement = $(this).parent().attr("id")
        var userText = $(this).siblings(".col-sm-10").val().replace(parentElement)

        localStorage.setItem(parentElement, JSON.stringify(userText))
    })

    $("#9 textarea").val(JSON.parse(localStorage.getItem("9")))
    $("#10 textarea").val(JSON.parse(localStorage.getItem("10")))
    $("#11 textarea").val(JSON.parse(localStorage.getItem("11")))
    $("#12 textarea").val(JSON.parse(localStorage.getItem("12")))
    $("#13 textarea").val(JSON.parse(localStorage.getItem("13")))
    $("#14 textarea").val(JSON.parse(localStorage.getItem("14")))
    $("#15 textarea").val(JSON.parse(localStorage.getItem("15")))
    $("#16 textarea").val(JSON.parse(localStorage.getItem("16")))
    $("#17 textarea").val(JSON.parse(localStorage.getItem("17")))
});

