// N1

function smallEnough(a, limit){
  for(let i in a) {
    if( a[i] > limit){
      return false
    }
  }
  return true
  

}

// N2

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

// N3

var isSquare = function(n){
  if(((n ** 0.5) ** 2) == n){
    return true
  }
  else{
    return false
  }
}

// N4

