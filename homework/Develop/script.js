


let updateTime = function () {
    let currentTime = moment().format('MMM: Do: dddd: h:mm:s')
    $("#currentDay").text(currentTime)
}


    updateTime();



    setInterval(updateTime, 1000);

