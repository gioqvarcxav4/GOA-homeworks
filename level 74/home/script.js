//N1

function past(h, m, s){
  return (h * 3600000) + (m * 60000) + (s * 1000);
}

//N2

function grow(x){
  result = 1;
  for(let i = 0; i < x.length; i++){
    result *= x[i];
  }
  return result;
}

//N3

function countPositivesSumNegatives(input) {
  
  if(!input || input.length === 0){
    return [];
  }
  
  let sumofNegs = 0;
  let countofPos = 0;

  for(let i = 0; i < input.length; i++){
    if(input[i] > 0){
      countofPos++;
    }
    else if(input[i] < 0){
      sumofNegs += input[i];
    }
    else if(input[i] === 0){
      sumofNegs += input[i];
    }
  }
  return [countofPos, sumofNegs];
}

//N4

function replace(s) {
  let result = '';
  const vowels = 'aeiouAEIOU';
  for(let i = 0; i < s.length; i++){
    if(vowels.includes(s[i])){
      result += '!'
    }
    else {
      result += s[i];
    }
  }
  return result
}

//N5

function sameCase(a, b){
  
   if(!/^[a-zA-Z]$/.test(a) || !/^[a-zA-Z]$/.test(b)){
    return -1;
  }
  else if(a === a.toUpperCase() && b === b.toUpperCase()){
    return 1;
  }
  else if(a === a.toLowerCase() && b === b.toLowerCase()){
    return 1;
  }
  else if(a === a.toUpperCase() && b !== b.toUpperCase()){
    return 0;
  }
  else if(a !== a.toUpperCase() && b === b.toUpperCase()){
    return 0;
  }
 
}


