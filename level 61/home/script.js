// N1

let sum = 0;
for(let num = 0; num <= 10; num++){
    sum += num
}
console.log(`Sum: ${sum}`);

// N2

for(let y = 0; y <= 10; y++){
    console.log(y * y);
}

// N3

let text = "Hello";

for(let i = 0; i <= text.length; i++){
    console.log(text[i]);
}

// N4

let fzbz = Number(prompt("Enter a number: "));

if (fzbz % 3 == 0 && fzbz % 5 == 0) {
    console.log('FizzBuzz');
}
else if (fzbz % 3 == 0) {
    console.log('Fizz');
}
else if (fzbz % 5 == 0) {
    console.log('Buzz');
}
else {
    console.log('Nothing');
}
