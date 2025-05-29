function area(x, y){
    return x * y
}


let width = Number(prompt(`Enter the width of the rectangle: `));
let length = Number(prompt(`Enter the length of the rectangle: `));
let area1 = area(width, length);
console.log(area1);