function sync1(){
    console.log("Hello there!")
};

function sync2(){
    console.log("How do you do?")
};

setTimeout(function async1() {
    console.log("I'm fine, you?");
  }, 1000); 

  setTimeout(function async2() {
    console.log("Just fine");
  }, 2000); 


  sync1()
  sync2()
  
