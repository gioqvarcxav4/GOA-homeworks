// N1

function countElements(array) {
    return array.length;
};

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(countElements(myArray));

// N2

function concatArray(arr1, arr2) {
    return [...arr1, ...arr2]
}

const myArray1 = [1, 2, 3, 4];
const myArray2 = [5, 6, 7, 8];

console.log(console.log(concatArray(myArray1, myArray2)));

// N3

function addValue(arr, value) {
    return arr.push(value);
};

const array = [2, 4, 1, 6, 3, 8, 13];

console.log(addValue(array, 5));

// N4

function removeLast(arr) {
    return arr.pop();
};

const myArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 12, 45];

const removed = removeLast(myArray4);
console.log(removed);
console.log(myArray4);

// N5

function complicated(arr1, arr2, value) {
    const combined = [...arr1, ...arr2];
    combined.push(value);
    return combined;
};

const arr1 = [1, 2, 3, 4, 5, 34, 23, 56];
const arr2 = ['Giorgi', 32];
console.log(complicated(arr1, arr2, 66));

// N6

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


