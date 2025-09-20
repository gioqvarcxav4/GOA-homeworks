const arrOfNums = [2, 4, 5, 7];

const isEven = arrOfNums.every(num => num % 2 === 0);
console.log(isEven);

const avgOfNums = arrOfNums.reduce((acc, num) => acc + num / 4, 0);
console.log(avgOfNums);