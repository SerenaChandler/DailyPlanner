


let updateTime = function () {
    let currentTime = moment().format('MMM: Do: dddd')
    $("#currentDay").text(currentTime)
}


    updateTime();



    setInterval(updateTime, 1000);

