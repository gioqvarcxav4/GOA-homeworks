const div1 = document.getElementById('myDiv');
div1.classList.add("highlight");
div1.classList.remove("highlight");

const button1 = document.getElementById("toggleButton");
const targetDiv = document.getElementById("targetDiv");
button1.addEventListener("click", function(){
    targetDiv.classList.toggle("active");
});

