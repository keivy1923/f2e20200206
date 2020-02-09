
    let monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let weeks = ["S", "M", "T", "W", "T", "F", "S"];
    let yearInput = document.querySelector('#year');

    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var today = d.getDate();
    var mIndex = 0;
    var wIndex = 0;
    
    yearInput.setAttribute("value", year.toString());
    monthes.forEach(element => {
        creatMonthArea(mIndex);
        mIndex++;
        
    });

function creatMonthArea(month){
    var monthDiv = createMonthHeader(month);
    var firstDay  = getMonthFirstDay(year,mIndex);
    var lastDay = getMonthLastDay(year,mIndex);
    var days = getDaysInMonth(year,mIndex);
    var dIndex = 6;
    var dText = 0;
    
    for(var i =0 ; i <firstDay; i++){
        dIndex++
        createDay(mIndex,"&nbsp;", dIndex ,monthDiv);
    }

    for(var i = firstDay ; i < firstDay+days; i++){
        dIndex++;
        dText++;
        createDay(mIndex,dText,dIndex,monthDiv);
    }

    for(var i = firstDay+days; i< 6*7 ; i++){
        dIndex++
        createDay(mIndex,"&nbsp;", dIndex ,monthDiv);
    }
}

function createMonthHeader(month){
    var calendar = document.querySelector(".calendar");
    var monthDiv = document.createElement("div");
        monthDiv.setAttribute("class","month");
        calendar.appendChild(monthDiv);
        
    var h4 = document.createElement("h4");
        h4.innerHTML = monthes[month];
        monthDiv.appendChild(h4);  

    wIndex = 0;
    weeks.forEach(function(weekText){
        var wd = createWeekHeader(wIndex);
        wIndex++;
        monthDiv.appendChild(wd);
    });
    return monthDiv;
}

function createWeekHeader(week){
    var hday = document.createElement("div");
        hday.setAttribute("class","day OfWeek");
        hday.setAttribute("style","order:"+week);
        hday.innerHTML = weeks[week].toUpperCase();
        return hday;
}

function createDay(m,text,counter,monthDiv){
    var  day = document.createElement("div");
    if(m === month && text === today ) day.setAttribute("class","day today");
    else day.setAttribute("class","day");
    day.setAttribute("style","order:"+counter);
    day.innerHTML = text;
    monthDiv.appendChild(day);
}

function getMonthFirstDay(y,m){
    return new Date(y,m,1).getDay();
}

function getMonthLastDay(y,m){
    return new Date(y,(m+1),0).getDay();
}

function getDaysInMonth(y,m){
    return new Date(y,(m+1),0).getDate();
}

function setYear(y){
    
    
    this.year = y;
}