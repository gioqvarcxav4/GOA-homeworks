let number1 = document.getElementById("number1");
let counter1 = 0;
setInterval(() => {
    if(counter1 == 80){
        clearInterval();
    }
    else{
        counter1 += 1;
    number1.innerHTML = counter1 + "%";
    }
}, 23);

let number = document.getElementById("number2");
let counter = 0;
setInterval(() => {
    if(counter == 93){
        clearInterval();
    }
    else{
        counter += 1;
    number.innerHTML = counter + "%";
    }
}, 18);

let number2 = document.getElementById("number3");
let counter2 = 0;
setInterval(() => {
    if(counter2 == 55){
        clearInterval();
    }
    else{
        counter2 += 1;
    number2.innerHTML = counter2 + "%";
    }
}, 30);

