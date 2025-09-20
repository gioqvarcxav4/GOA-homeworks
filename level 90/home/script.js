function collectArgs(...args){
    return [...args]
};

console.log(collectArgs('Giorgi', 16, 'History'));

function sumAll(...nums){
    let result = 0;
    for(let n of nums){
        result += n;
    }
    return result;
};
console.log(sumAll(1, 2, 32, 43, 5));

function excludeFirst(first, ...rest){
    return [...rest];
};

console.log(excludeFirst(22, 'Giorgi', 34, true));

function logExceptLast(...items){
    return [...items.slice(0, -1)];
};

console.log(logExceptLast(1, true, 'Rhodesia', false, 2.5));


const arr = [1, 2, 3, 4, 5];

const[firstNum, secondNum, ...rest] = arr;

console.log(firstNum);
console.log(secondNum);
console.log(...rest);

const user = { name: "Davit", age: 25, role: "admin", active: true };

const {name, age, ...whateverIsLeft} = user;
console.log(name);
console.log(age);
console.log(whateverIsLeft);



function filterOut(target, ...values){
    return values.filter(value => value !== target);
};

console.log(filterOut(1, 2, 3, 4, 11, 54, 1092312));
