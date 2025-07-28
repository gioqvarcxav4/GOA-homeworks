let country = 'Portugal';

function guessCapital(country){
    let capital = 'Lisbon';
    console.log(`Name; ${country}, Capital: ${capital}`);
}

guessCapital(country);


function greet (name){
    return `Hello ${name}`;
}

console.log(greet('Giorgi'));

function sum (num1, num2){
    return num1 + num2;
}

console.log(sum(5,6));

let avgOfThree = (num1, num2, num3) =>{
    console.log((num1 + num2 + num3) / 3);
}

let getRoot = squareNum =>{
    console.log(squareNum ** (1/2));
}

let square = num => num ** 2;

console.log(square(4));

let capitalize = word => word.toUpperCase();

console.log(capitalize('mari'));

