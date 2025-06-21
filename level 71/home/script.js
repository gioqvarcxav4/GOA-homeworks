// N1
const numsArray = [1, 2, 3, 4, 5];
const strArray = ['a', 'b', 'c', 'd', 'e'];
const combinedArray = numsArray.concat(strArray);
combinedArray.copyWithin(4, 0, 3);
combinedArray.fill('filled', 2, 5);
combinedArray.pop();
combinedArray.shift();
combinedArray.unshift(100, 200);

function modifyArray(arr) {
  arr.copyWithin(4, 0, 3);
  arr.fill('filled', 2, 5);
  arr.pop();
  arr.shift();
  arr.unshift(100, 200);
  return arr;
}

// N2

const people = [{name: 'Alice'}, {name: 'Bob'}];
const places = [{city: 'Paris'}, {city: 'London'}, {city: 'Tokyo'}];
const mergedArray = people.concat(places);
mergedArray.copyWithin(2, 0, 2);
mergedArray.fill({city: 'New York'}, mergedArray.length - 2);
mergedArray.pop();
mergedArray.shift();
mergedArray.unshift({name: 'Charlie'}, {name: 'David'});

// N3

const mixedArray = [1, 'two', 3, 'four', 5];
const anotherArray = [true, false];
const extendedArray = mixedArray.concat(anotherArray);
extendedArray.copyWithin(0, 2, 4);
extendedArray.fill(0, 4, 7);
extendedArray.pop();
extendedArray.shift();
extendedArray.unshift('null', 'undefined');

// N4

const arr1 = [1, 2, 33, 12, 43, 55, 11, 4];
const arr2 = ['a', 'b', 'Giorgi', 'Apple'];
const arr3 = [true, false];
const mergedArray2 = arr1.concat(arr2);
mergedArray2.copyWithin(5, 0, 3);
mergedArray2.fill(0, 6);
mergedArray2.pop();
mergedArray2.shift();
mergedArray2.unshift(100, 200);
mergedArray2.splice(2, 2, ...arr3);
const slicedArray = mergedArray2.slice(-5);
return slicedArray.join(',');

function comprehensiveArrayTask(arr1, arr2, arr3) {
  const mergedArray = arr1.concat(arr2);
  mergedArray.copyWithin(5, 0, 3);
  mergedArray.fill(0, 6);
  mergedArray.pop();
  mergedArray.shift();
  mergedArray.unshift(100, 200);
  mergedArray.splice(2, 2, ...arr3);
  const slicedArray = mergedArray.slice(-5);
  return slicedArray.join(',');
}


