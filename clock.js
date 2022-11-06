
function clock() {
    setInterval(function () {
        var date = new Date();
        var hr = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var session = "AM";
        var day = date.getDate();
        var mon = date.getMonth();
        var year = date.getFullYear();
        var dayy = date.getUTCDay();

        if (hr > 12) {
            session = "PM"
        }
        if (min < 10) {
            min = "0" + min
        } if (sec < 10) {
            sec = "0" + sec
        } if (hr > 12) {
            hr -= 12
        }
        if (hr < 10) {
            hr = "0" + hr
        }
        switch (dayy) {
            case 0: dayy = "Sunday"
                break
            case 1: dayy = "Monday"
                break
            case 2: dayy = "Tuesday"
                break
            case 3: dayy = "Wednesday"
                break
            case 4: dayy = "Thursday"
                break
            case 5: dayy = "Friday"
                break
            case 6: dayy = "Saturday"
                break
        }


        var timee = (hr + " : " + min + " : " + sec + " : " + session);
        var dayyy = (day + " - " + mon + " - " + year);
        document.getElementById('timer').innerText = timee
        document.getElementById('date').innerText = dayyy
        document.getElementById('day').innerText = dayy


    },
        1000)
}