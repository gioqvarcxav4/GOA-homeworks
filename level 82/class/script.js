const name = "MasterJaneza";
// არის პრიმიტიული მნიშვნელობა, რადგან გადაცემულია String.
const age = 29;
// პრიმიტიული მნიშვნელობა, რადგან გადაცემულია Integer - მთელი რიცხვი.
const skills = ["JavaScript", "React"];
// არის არაპრიმიტიული მნიშვნელობა, რადგან გადაცემულია მასივი და მასში შეტანილი მნიშვნელობები.
const greet = function() { return "Hello!"; };
// არაპრიმიტიული, რადგან გადაცემულია ფუნქცია.
const isCool = true;
// პრიმიტიული, რადგან გადაცემულია Boolean.
const details = { country: "Georgia" };
// არაპრიმიტიული, რადგან გადაცემულია ობიექტი.

function isFalsy(value){
    if(Boolean(value) === false){
        return true
    }
    else{
        return false
    }
};

console.log(isFalsy(0));

