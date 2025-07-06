let div = document.querySelector('.div1');

function makeBigger(){
    div.classList.add('divStyle1');
    div.classList.remove('divStyle2');
}
function makeSmaller(){
    div.classList.add('divStyle2');
    div.classList.remove('divStyle1');
}

let img = document.querySelector('img');

function changePic(){
    img.src = 'thing2.jpg'
}