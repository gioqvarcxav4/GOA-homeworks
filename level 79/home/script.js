let score = 0;

function IncreaseScore(){
    score += 10;
};

IncreaseScore();
IncreaseScore();
console.log(score);

let name = 'World';

function greet(){
    let name = 'Alice';
    return `Greetings, ${name};`
    console.log(name);
}

console.log(name);

greet();


let add = (num1, num2) => {
    return num1 + num2;
};

console.log(add(10, 12312312421));

let double = num => {
    return num * 2;
};

console.log(double(8));

let firstChar = string => {
    return string[0];
}

console.log(firstChar('Giorgi'));

let shout = string => {
    return `${string.toUpperCase()}!`;
}

console.log(shout('help me'));



