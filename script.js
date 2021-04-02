
var timeBlocks = $("timeBlocks");
var saveButton = $("<button>");
var dailyGoals = $("<input>");
var timeOfDay = $("<h1>");
var container = $("container");
var time = ["9", "10", "11", "12", "1", "2", "3", "4", "5",]
var currentHour = moment().format("H")
let updateTime = function () {
    let currentTime = moment().format('MMMM Do, dddd: h:mm:s')
    $("#currentDay").text(currentTime)
    }


    updateTime();



    setInterval(updateTime, 1000);


timeOfDay.text(time[0] + "AM")
saveButton.text("SAVE");
dailyGoals.append(saveButton);
timeBlocks.append(timeOfDay);
container.append(timeBlocks);

console.log(currentHour)


// var target = event.target.getAttribute("data-index");
