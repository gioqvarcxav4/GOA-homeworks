// N1

for(let i = 0; i < 100; i++){
    if(i === 50){
        break
    }
    else if(i % 4 != 0){
        continue
    }
    console.log(i);
};

//N2

for(let num = 1; num < 20; num++){
    if(num === 7){
        continue
    }
    else if(num === 17){
        continue
    }
    console.log(num);
};

//N3

for(let x = 1; x < 30; x++){
    if(x % 2 != 0){
        continue
    }
    else if(x % 8 == 0){
        break
    }
    console.log(x);
};

//N4

for(let y = 1; y < 30; y++){
    if(y % 5 == 0){
        continue
    }
    console.log(y);
};
