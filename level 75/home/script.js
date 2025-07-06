const mainTitle = document.getElementById('main-title');
mainTitle.innerText = "Welcome to the DOM Manipulation Demo!";
mainTitle.style.color = "blue";
mainTitle.style.border = "2px solid black";
mainTitle.style.padding = "10px";

const introParagraphs = document.getElementsByClassName('intro');
introParagraphs[0].innerHtml = '<b>Modified</b> ' + introParagraphs[0].innerHtml;
introParagraphs[0].style.backgroundColor = "red";
introParagraphs[0].style.padding = "5px";

introParagraphs[1].innerHtml = '<b>Updated</b> ' + introParagraphs[0].innerHtml;
introParagraphs[1].style.backgroundColor = "green";
introParagraphs[0].style.padding = "15px";




const divs = document.getElementsByTagName('div');

divs[0].innerText = 'Modified ' + divs[0].innerText;
divs[0].style.backgroundColor = 'blue';
divs[0].style.margin = '20px';



divs[1].innerText = 'Modified ' + divs[1].innerText;
divs[1].style.backgroundColor = 'gray';
divs[1].style.padding = '20px';



divs[2].innerText = 'Modified ' + divs[2].innerText;
divs[2].style.backgroundColor = 'pink';
divs[2].style.margin = '25px';
