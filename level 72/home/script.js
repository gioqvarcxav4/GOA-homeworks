//N1

function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 'This is a leap year.';
    } else {
        return 'This is not a leap year.';
    }
}

//N2

function WhoPays(list){
    let rand = Math.round(Math.random() * 5);
    let person = list[rand];
    return `${person} pays for everything`;
}

let queue = ['Giorgi', 'Mari', 'Nika', 'Pharnavazi'];
console.log(WhoPays(queue));

//N3

function FizzBuzz (num){
    let list = [];
    if(num % 3 === 0 && num % 5 === 0){
        list.push('FizzBuzz')
    }
    else if(num % 3 === 0){
        list.push('Fizz');
    }
    else if(num % 5 === 0){
        list.push('Buzz')
    }
    return list;
}

console.log(FizzBuzz(15));

//N4

function randList(N){
    let list = [];
    let result = 0;
    for(let i = 0; i < N; i++){
        let rand = Math.random() * 100;
        list.push(rand);
        result += list[i];
    }
    let avg = result / list.length;
    return avg;
}

console.log(randList(10));