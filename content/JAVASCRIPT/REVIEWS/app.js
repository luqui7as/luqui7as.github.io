const reviews = [
    {
        id: 1,
        titulo:"Invisible Man",
        fecha:"2020",
        img:
        "InvisbleMan.jpg",
        info:"Cuando el abusivo ex de Cecilia se quita la vida y le deja su fortuna, ella sospecha que su muerte fue un engaño. A medida que una serie de coincidencias se vuelven letales, Cecilia trabaja para demostrar que está siendo cazada por alguien que nadie puede ver.",
    },
    {
        id: 2,
        titulo:"Terror in a Texas Town",
        fecha:"1958",
        img:
        "TerrorinaTexasTown.jpg",
        info:"Armado con un arpón, un ballenero sueco busca venganza tras la muerte de su padre. Un petrolero codicioso que intenta comprar la tierra del sueco podría ser el culpable.",

    },
    {   id: 3,
        titulo:"The Fog",
        fecha:"1980",
        img:
        "TheFog.jpg",
        info:"Empiezan a ocurrir cosas extrañas cuando una pequeña ciudad costera de California se prepara para conmemorar su centenario. Los objetos inanimados cobran vida inquietantemente; El reverendo Malone se topa con un oscuro secreto sobre la fundación de la ciudad; el locutor de radio Stevie es testigo de un incendio místico; y la autoestopista Elizabeth descubre el cadáver mutilado de un pescador. Luego, una misteriosa niebla iridiscente desciende sobre el pueblo y más personas comienzan a morir.",


    },
];
// seleccionar los items
const img = document.getElementById("poster");
const author = document.getElementById("author");
const fecha = document.getElementById("fecha");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// setear el primer item

let currentItem = 0;

// cargar item inicial

window.addEventListener('DOMContentLoaded', function(){
    showMovie(currentItem);
});
// mostrar poster basado en el item

function showMovie(movie){
    const item = reviews[movie];
    img.src = item.img;
    titulo.textContent = item.titulo;
    fecha.textContent=item.fecha;
    info.textContent=item.info;
}

// mostrar siguiente pelicula

nextBtn.addEventListener('click', function(){
    currentItem ++;
    if(currentItem> reviews.length - 1){
        currentItem = 0;
    } //Si me paso de la cantidad, que vuelva a 0. lenght-1 porque la matriz incluye 0
    showMovie(currentItem);
})

// mostrar la pelicula anterior
prevBtn.addEventListener('click', function(){
    currentItem --;
    if(currentItem< 0){
        currentItem = reviews.length-1;
    } 
    showMovie(currentItem);
});

//mostrar pelicula random
randomBtn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    console.log(currentItem);
    showMovie();
});