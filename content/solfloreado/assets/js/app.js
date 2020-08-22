const addItem = document.getElementById("addCart");
var cartCount = document.querySelector(".item");
var button = document.querySelector("button");
let count = -1;
console.log(button);
console.log(addItem);
console.log(cartCount);

function openCart(){
    console.log("Hola");
    if(button.onclick){
        console.log("chau");
    }
};
openCart();



function closeCart(){}
// Agregar un producto al carrito. Solo contador de arriba. Funciona con un producto solo
function agregarCart(){
    if(cartCount.textContent = "0"){
        addItem.addEventListener("click", agregarCart);
        count++;
        cartCount.textContent = count;
    }
}
agregarCart();
//---------------------------------------------