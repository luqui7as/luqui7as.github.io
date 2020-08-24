let cart = document.querySelector(".cartNav");
let c = 1;
function openNav(event){
    c = 2;
}
cart.onclick = openNav;
console.log(c);