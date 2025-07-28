const p = document.createElement("p");
p.textContent = "This is a paragraph.";
document.body.appendChild(p);

const h2 = document.createElement("h2");
h2.textContent = "Subheading.";
document.body.appendChild(h2);
h2.textContent = "Updated Subheading.";

const div = document.createElement("div");
div.textContent = "This is a div.";
document.body.appendChild(div);
document.body.removeChild(div);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "Item1";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "Item2";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "Item3";
ul.appendChild(li3);

document.body.appendChild(ul);

const heading3 = document.createElement("h3");
heading3.textContent = "Inserted Heading";
document.body.insertBefore(heading3, p);

const span = document.createElement('span');
span.textContent = "This is a span";
const container = document.getElementById("container");

container.appendChild(span);