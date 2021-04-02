var saveButton = $(".saveBtn");
var hour = $(".row")
var goal = $(".hour")
var store9AM = $(".9")
var store10AM = $(".10")
var store11AM = $(".11")
var store12AM = $(".12")
var store1PM = $(".1")
var store2PM = $(".2")
var store3PM = $(".3")
var store4PM = $(".4")
var store5PM = $(".5")

var times = {
    "9AM": store9AM.val(),
    "10AM": store10AM.val(),
    "11AM": store11AM.val(),
    "12AM": store12AM.val(),
    "1PM": store1PM.val(),
    "2PM": store2PM.val(),
    "3PM": store3PM.val(),
    "4PM": store4PM.val(),
    "5PM": store5PM.val()
}


var currentHour = moment().format("H")
let updateTime = function () {
    let currentTime = moment().format('MMMM Do, dddd: h:mm:s')
    $("#currentDay").text(currentTime)
    }


    updateTime();



    setInterval(updateTime, 1000);





function retreiveRoutine() {
    var daily = (localStorage.getItem("routine9"))
    store9AM.append(daily)

    var daily = localStorage.getItem("routine10")
    store10AM.append(daily)

    var daily = localStorage.getItem("routine11")
    store11AM.append(daily)

    var daily = localStorage.getItem("routine12")
    store12AM.append(daily)


    var daily = localStorage.getItem("routine1")
    store1PM.append(daily)


    var daily = localStorage.getItem("routine2")
    store2PM.append(daily)


    var daily = localStorage.getItem("routine3")
    store3PM.append(daily)


    var daily = localStorage.getItem("routine4")
    store4PM.append(daily)


    var daily = localStorage.getItem("routine5")
    store5PM.append(daily)

    
}







retreiveRoutine()

saveButton.on("click", function() {
    localStorage.setItem("routine9", store9AM.val()) })

saveButton.on("click", function() {
    localStorage.setItem("routine10", store10AM.val()) })

saveButton.on("click", function() {
    localStorage.setItem("routine11", store11AM.val()) })

saveButton.on("click", function() {
    localStorage.setItem("routine12", store12AM.val()) })


saveButton.on("click", function() {
    localStorage.setItem("routine1", store1PM.val()) })


saveButton.on("click", function() {
    localStorage.setItem("routine2", store2PM.val()) })


saveButton.on("click", function() {
    localStorage.setItem("routine3", store3PM.val()) })


saveButton.on("click", function() {
    localStorage.setItem("routine4", store4PM.val()) })

    
saveButton.on("click", function() {
    localStorage.setItem("routine5", store5PM.val()) })



if (currentHour == 9) {
store9AM.addClass("present") }


if (currentHour < 9) {
store9AM.addClass("future") }


if (currentHour > 9) {
store9AM.addClass("past") }
    

if (currentHour == 10) {
store10AM.addClass("present") }
    
    
if (currentHour < 10) {
store10AM.addClass("future") }


if (currentHour > 10) {
store10AM.addClass("past") }


if (currentHour == 11) {
store11AM.addClass("present") }


if (currentHour < 11) {
store11AM.addClass("future") }


if (currentHour > 11) {
store11AM.addClass("past") }
    

if (currentHour == 12) {
store12AM.addClass("present") }
    
    
if (currentHour < 12) {
store12AM.addClass("future") }


if (currentHour > 12) {
store12AM.addClass("past") }


if (currentHour == 13) {
store1PM.addClass("present") }
    
    
if (currentHour < 13) {
store1PM.addClass("future") }


if (currentHour > 13) {
store1PM.addClass("past") }

if (currentHour == 14) {
store2PM.addClass("present") }
        
        
if (currentHour < 14) {
store2PM.addClass("future") }
    
    
if (currentHour > 14) {
store2PM.addClass("past") }


if (currentHour == 15) {
store3PM.addClass("present") }


if (currentHour < 15) {
store3PM.addClass("future") }


if (currentHour > 15) {
store3PM.addClass("past") }
    

if (currentHour == 16) {
store4PM.addClass("present") }
    
    
if (currentHour < 16) {
store4PM.addClass("future") }


if (currentHour > 16) {
store4PM.addClass("past") }

if (currentHour == 17) {
store5PM.addClass("present") }
        
    
if (currentHour < 17) {
store5PM.addClass("future") }


if (currentHour > 17) {
store5PM.addClass("past") }