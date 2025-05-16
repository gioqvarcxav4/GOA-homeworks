// N1

let day = Number(prompt("Enter the numeration of the day: "));

switch(day){
    case 1:
        console.log('Monday');
        break
    case 2:
        console.log('Tuesday');
        break
    case 3:
        console.log('Wedensday');
        break
    case 4:
        console.log('Thursday');
        break
    case 5:
        console.log('Friday');
    case 6:
        console.log('Saturday');
        break
    case 7:
        console.log('Sunday');
        break
    default:
        console.log('Wrong numeration dude!');
}

// N2

let num = Number(prompt("Enter a number: "));

num % 2 == 0 ? console.log('Even') : console.log('Odd');

// N3

let wth = Number(prompt("Enter a number: "));

switch(wth){
    case 1:
        console.log('Sunny');
        break
    case 2:
        console.log('Rainy');
        break
    case 3:
        console.log('Cloudy');
        break
    case 4:
        console.log('Windy');
        break
    default:
        console.log('Undefined');
}

// N4

let month = Number(prompt("Enter a the number of a month: "));

switch(month){
    case 1:
        console.log('January');
        break
    case 2:
        console.log('February');
        break
    case 3:
        console.log('March');
        break
    case 4:
        console.log('April');
        break
    case 5:
        console.log('May');
        break
    case 6:
        console.log('June');
        break
    case 7:
        console.log('July');
        break
    case 8:
        console.log('August');
        break
    case 9:
        console.log('September');
        break
    case 10:
        console.log('October');
        break
    case 11:
        console.log('November');
        break
    case 12:
        console.log('December');
        break
    default:
        console.log('Not a month!');
}

month <= 6 ? console.log('First half of the year.') : console.log('Second half of the year.');
