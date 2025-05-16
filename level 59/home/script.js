// N1

let age = Number(prompt("Enter your age: "));
let sex = prompt("Enter your sex: ");
let income = Number(prompt("Enter your income: "));

if(age >= 18){
    if(sex === "Female"){
        if(income > 5000){
            console.log('თქვენი ფინანსური მგომარეობა უზრუნველყოფილია.');
        }
        else if (income > 3000 && income < 5000){
            console.log('ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.');
        }
        else {
            console.log('გჭირდებათ ფინანსური გეგმის გაუმჯობესება.');
        }
    }

    if(sex === "Male"){
        if(income > 6000){
            console.log('თქვენ მზად ხართ ინვესტიციებისთვის!');
        }
        else if(income > 4000 && income < 6000){
            console.log('შემოსავალი სტაბილურია.');
        }
        else{
            console.log('გჭირდებათ ფინანსური გეგმის გაუმჯობესება');
        }
    }
}
else {
    console.log('მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტირება');
}

// N2

let num = Number(prompt("Enter a number: "));

if(num % 2 == 0){
    console.log(`${num} Even`)
}
else {
    console.log(`${num} Odd`);
}

// N3

let temp = Number(prompt("Enter the temperature in Gradus Celsius: "));

if(temp < 10){
    console.log('Cold');
}
else if(temp >= 10 && temp <= 25){
    console.log('Medium');
}
else {
    console.log('Hot');
}