const clockDate = document.querySelector('.date'),
    clockTime = document.querySelector('.time'),
    hello = document.querySelector('.hello');

function isDay(num){
    let printDay;
    if(num === 0){
        printDay = 'Sun'
    } else if(num === 1){
        printDay = 'Mon'
    } else if(num === 2){
        printDay = 'Tue'
    } else if(num === 3){
        printDay = 'Wed'
    } else if(num === 4){
        printDay = 'Thu'
    } else if(num === 5){
        printDay = 'Fri'
    } else if(num === 6){
        printDay = 'Sat'
    }

    return printDay;
}

function isMonth(num){
    let printMonth;
    if(num === 0){
        printMonth = 'Jan'
    } else if(num === 1){
        printMonth = 'Feb'
    } else if(num === 2){
        printMonth = 'Mar'
    } else if(num === 3){
        printMonth = 'Apr'
    } else if(num === 4){
        printMonth = 'May'
    } else if(num === 5){
        printMonth = 'Jun'
    } else if(num === 6){
        printMonth = 'Jul'
    } else if(num === 7){
        printMonth = 'Aug'
    } else if(num === 8){
        printMonth = 'Sep'
    } else if(num === 9){
        printMonth = 'Oct'
    } else if(num === 10){
        printMonth = 'Nov'
    } else if(num === 11){
        printMonth = 'Dec'
    }

    return printMonth;
}

function getTime() {
    const date = new Date();
    const days = date.getDay();
    const month = date.getMonth();
    const dates = date.getDate();
    const year = date.getFullYear();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    clockDate.innerText = `${isDay(days)} ${isMonth(month)} ${dates} ${year}`;

    clockTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10? `0${minutes}` : minutes}`;

    hello.innerText = `${hours < 12 ? `Buenos días!` : `Buenas tardes!`}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init(); 