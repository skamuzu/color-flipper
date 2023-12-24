const array = ["red","green","yellow","blue","brown","orange","purple","indigo","gray","aqua","black","violet"];
let button = document.querySelector("button");
let Heading = document.querySelector("h1")

button.addEventListener("click",() =>
{
 color=array[Math.floor(Math.random()*array.length)];
 document.body.style.backgroundColor = color;
 button.style.backgroundColor = color;
 Heading.textContent = `Background Color : ${color.charAt(0).toUpperCase() + color.slice(1)}`;
})

