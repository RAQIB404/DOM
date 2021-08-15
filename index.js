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