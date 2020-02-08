let monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let weeks = ["S", "M", "T", "W", "T", "F", "S"];

var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var today = d.getDate();
var index = 0;

document.querySelector('#year').setAttribute("value", year.toString());

monthes.forEach(element => {
    creatMonthArea(index);
    index++;
});


function creatMonthArea(month){
    createMonthHeader(month);
}

function createMonthHeader(month){
    var calendar = document.querySelector(".calendar");
    var monthDiv = document.createElement("div");
        monthDiv.setAttribute("class","month");
        calendar.appendChild(monthDiv);
        
    var h4 = document.createElement("h4");
        h4.innerHTML = monthes[month];
        monthDiv.appendChild(h4);  

    index = 0;
    weeks.forEach(function(weekText){
        var wd = createWeekHeader(index);
        index++;
        monthDiv.appendChild(wd);
    });
}

function createWeekHeader(week){
    var hday = document.createElement("div");
        hday.setAttribute("class","day OfWeek");
        hday.setAttribute("style","order:"+week);
        hday.innerHTML = weeks[week].toUpperCase();
        return hday;
}