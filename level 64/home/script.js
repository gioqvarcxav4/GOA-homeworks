//N1

function math(x, y){
    console.log(x + y);
    console.log(x * y);
    console.log(x - y);
    console.log(x / y);
    console.log(x ** y);
    console.log((x + y) ** 2);
    console.log((x + y)*(x - y));
};

math(5, 11);
math(2, 121);

//N2

function sumOfSquares(a, b){
    console.log((a ** 2) + (b ** 2));
};

sumOfSquares(2, 3);
sumOfSquares(6, 30);

//N3

function isEven(n){
    if(n % 2 == 0){
        console.log(`${n} is even.`);
    }
    else{
        console.log(`${n} is odd.`);
    }
};

isEven(13);
isEven(12);
isEven(123901239);

//N4

function repeatString(str, times){
    console.log(str.repeat(times));
};

repeatString('Giorgi', 4);

//N5

function longerWord(word1, word2){
    if (word1.length > word2.length){
        console.log(`${word1} is a longer word.`);
    }
    else if(word2.length > word1.length){
        console.log(`${word2} is a longer word.`);
    }
    else{
        console.log(`${word1} and ${word2} are equal in length.`);
    }
};

longerWord(`giorgi`, `freundschaft` );
longerWord(`friend`, `comrade`);

//N6

function fahrenheit(c){
    console.log(`${c * (9 / 5) + 32} degrees Fahrenheit`);
};

fahrenheit(30);
fahrenheit(40);
fahrenheit(-1);

//N7

function isPositive(x){
    if(x > 0){
        console.log(`yes`)
    }
    else{
        console.log(`no`);
    }
};

isPositive(2);
isPositive(-124);

//N8

function double(n){
    console.log(n * 2);
};

double(2);
double(-34);
double(123);

//N9

function fullName(name, lastname){
    console.log(`${name} ${lastname}`)
};

fullName(`Giorgi`, `Qvartskhava`);
fullName(`Jotia`, `Tsaava`);

//N10

function isAdult(age){
    if(age >= 18){
        console.log(`Adult`);
    }
    else{
        console.log(`Minor`);
    }
};

isAdult(22);
isAdult(12);

//N11

function hasA(word){
    if(word.includes(`a`) || word.includes(`A`)){
        console.log(`Yes`);
    }
    else{
        console.log(`No`);
    }
};

hasA(`Father`);
hasA(`Alans`);
hasA(`Rome`);

//N12

function lastDigit(a, b){
    if((a % 10) === (b % 10)){
        console.log(`Same`);
    }
    else{
        console.log(`Different`);
    }
};

lastDigit(12, 122);
lastDigit(123, 144);

//N13

function evenOrOdd(num){
    return num % 2 == 0 ? `Even` : `Odd`;
};

console.log(evenOrOdd(12));
console.log(evenOrOdd(132131230989));

//N14

function isShort(word){
    return word.length < 5 ? `Short` : `Long`;
};

console.log(isShort(`cylinder`));
console.log(isShort(`Hey`));