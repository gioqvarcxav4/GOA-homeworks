// N1

let mult = 1;

for(let x = 1; x <= 10000; x++){
    mult *= x
    if (mult > 10000){
        break
    }
}

console.log(mult);

// N2

for(let num = 0; num < 200; num++){
    if(num == 105){
        break
    }
    else if(num % 3 == 0){
        continue
    }
    console.log(num);
}


