let scores = [68, 95, 54, 84, 77, 75, 63, 74, 69, 80, 71, 63];
let amountPassed = 0;

for(let each of scores){
    if(each >= 70){
        amountPassed += 1;
    }
}

console.log(amountPassed);

let car = {
  brand: "Toyota",
  model: "Camry",
  color: "Silver"
};

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

console.log(`This car is a ${car.brand}, specifically the ${car.model} model and it is in a beautiful ${car.color} color.`);
