const colors= ["green","red","rgba(133,122,200)","·f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //Numero aleatorio entre 0 y 3 
    const randomNumber= getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];//cambia el fondo de color
    color.textContent = colors[randomNumber];//cambia el texto de <span class="color">
})
 function getRandomNumber(){
     return Math.floor(Math.random()*colors.length);
 }
