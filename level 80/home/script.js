// N1

function likes(names) {
  let len = names.length;
  
  if(len === 0){
    return "no one likes this"
  }
  else if(len === 1){
    return `${names[0]} likes this`
  }
  else if(len === 2){
    return `${names[0]} and ${names[1]} like this`
  }
  else if(len === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  else if(len === 4){
    return `${names[0]}, ${names[1]} and 2 others like this`
  }
  else{
    return `${names[0]}, ${names[1]} and ${len - 2} others like this`
  }
}

// N2

function check(a, x) {
  return a.includes(x);
}

//N3

function validateNumber(str){
  let cleaned = str.replace(/-/g, '');
  let len = cleaned.length;
  if((`${cleaned[0]}${cleaned[1]}` === '07' && (len - 2) === 9) || (`${cleaned[0]}${cleaned[1]}${cleaned[2]}${cleaned[3]}` === "+447" && (len - 4) === 9)){
    return "In with a chance";
  }
  else {
    return "Plenty more fish in the sea";
  }
};

