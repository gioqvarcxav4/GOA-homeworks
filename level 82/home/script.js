function isPrimitive(value) {
  if (
    value === null ||
    (typeof value !== "object" && typeof value !== "function")
  ) {
    return "Primitive";
  } else {
    return "Non-primitive";
  }
}

console.log(isPrimitive(12));

function allFalsy(arr){
    for (let i of arr) {
        if (Boolean(i)) {
            return false; 
        }
    }
    return true; 
}


const array = [0, 1];

console.log(allFalsy(array));

function removeFalsy(arr) {
  return arr.filter(item => Boolean(item)); 
};

const array1 = [0, -1, false, -0, 12, 2, "man", null];
console.log(removeFalsy(array1));

function countTruthiesAndFalsies(arr){
    let result = {Truthies: 0, Falsies: 0};

    for(let i of arr){
        if(Boolean(i)){
            result.Truthies++;
        } else {
            result.Falsies++;
        }
    }

    return result;
}

const array2 = [0, -0, 1, "chair", "banana", null, 12, 44];
console.log(countTruthiesAndFalsies(array2));

