console.log(document);
console.log(document.title);
document.title="Learning DOM!!";
console.log(document.title);

const heading = document.getElementById("hi");
console.log(heading);

const head = document.querySelectorAll("p");
console.log(head);

const main = document.querySelector("#hi");
console.log(main);

const index = document.getElementsByTagName("p");
for(let i=0;i<heading.clientHeight;i++){
console.log(index);
}

const cls = document.getElementsByClassName("we");
console.log(cls);

let parentE1=document.getElementById("parent");
console.log(parentE1);

let pa=document.getElementById("parent")
console.log(pa.firstChild);

let pare=document.getElementById("parent")
console.log(pa.lastChild);

let paren=document.getElementById("parent")
console.log(paren.children);

let midpa=document.getElementById("parent")
console.log(midpa.nextElementSibling);

let mid=document.getElementById("parent")
console.log(mid.previousElementSiblings);

let mid1=document.getElementById("parent")
console.log(mid1.nextSibling);

let mid2=document.getElementById("parent")
console.log(mid2.previousSibling);