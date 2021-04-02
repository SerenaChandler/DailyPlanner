var saveButton = $(".saveBtn");
var hour = $(".row")
var goal = $(".hour")

var currentHour = moment().format("H")
let updateTime = function () {
    let currentTime = moment().format('MMMM Do, dddd: h:mm:s')
    $("#currentDay").text(currentTime)
    }


    updateTime();



    setInterval(updateTime, 1000);


// if (hour < currentHour) {
//     hour.attr("background-color: gray")
// }if (hour == currentHour) {

// }if (hour > currentHour)

// var target = event.target.getAttribute("data-index");

// function saveSchedule() {
//     localStorage.setItem(JSON.stringify(".hour"))
// }



saveButton.on("click", function() {
    localStorage.setItem("routine", goal.val()) })


