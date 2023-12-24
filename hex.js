const array = ["0","1","2","3","4","5","6","7","8","9","10","A","B","C","D","E","F"];
let button = document.querySelector("button");
let Heading = document.querySelector("h1");

button.addEventListener("click",() => {
    let colorName = "#"
    
  for(let i = 0;i<6;i++){
    let color = Math.floor(Math.random()*array.length);
    colorName+=array[color];
  }
  button.style.backgroundColor = colorName;
  Heading.textContent = `Background Color : ${colorName}`;
  document.body.style.backgroundColor = colorName;
});