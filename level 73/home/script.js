//N1
function getCurrentDate(){
const current = new Date();
const year = current.getFullYear();
const month = current.getMonth() + 1;
const day = current.getDay();
const hour = current.getHours();
const minute = current.getMinutes();
const second = current.getSeconds();

return `${year}.${month}.${day} - ${hour}:${minute}:${second}`

}

console.log(getCurrentDate());

//N2

function calculateAge(birthYear, birthMonth, birthDay){
    const now = new Date();
    const currYear = now.getFullYear();
    const currMonth = now.getMonth();
    const currDay = now.getDay();
    return `${currYear - birthYear}.${(currMonth - birthMonth) + 1}.${currDay - birthDay}`
}

console.log(calculateAge(2009, 1, 19));

//N3

function getDay(year, month, day){
    const date = new Date(year, month, day);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

console.log (getDay(2018, 12, 6));

//N4

let count = 0;
function update(){
    count += 1;
    console.log(count);
}

//setInterval(update, 1000);

//N5

function updateCurrentTime(){
    const Now = new Date();
    const Hour = Now.getHours();
    const Minute = Now.getMinutes();
    const Second = Now.getSeconds();

    if(Hour < 10){
        return `0${Hour}`
    }
    else if(Minute < 10){
        return `0${Minute}`
    }
    else if(Second < 10){
        return `0${Second}`
    }
    console.log(`${Hour}:${Minute}:${Second}`);
}

//setInterval(updateCurrentTime, 1000);




