const elementById = document.getElementById("myElement");
elementById.style.color = "blue";
elementById.style.backgroundColor = "darkblue";
elementById.style.fontSize = "32px";
elementById.style.fontStyle = "bold";
elementById.innerHTML = "The ID element was changed";

const elementByClass = document.querySelector(".myClass");
elementByClass.style.color = "red";
elementByClass.style.backgroundColor = "gray";
elementByClass.style.fontSize = "16px";
elementByClass.style.fontWeight = "italic";
elementByClass.innerHTML = "The class element was changed";

const elementByTag = document.querySelector("h2");
elementByTag.style.color = "pink";
elementByTag.style.backgroundColor = "green";
elementByTag.style.fontSize = "13px";
elementByTag.innerHTML = "The tag element was changed";