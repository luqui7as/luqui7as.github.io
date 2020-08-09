let addcart = document.querySelectorAll(".add-cart");

let products=[
    {
        name:"1",
        tag:"uno",
        price:"80",
        inCart:"0",
    },
    {
        name:"2",
        tag:"dos",
        price:"60",
        inCart:"0",
    },
    {
        name:"3",
        tag:"tres",
        price:"90",
        inCart:"0",
    },
    {
        name:"4",
        tag:"cuatro",
        price:"90",
        inCart:"0",
    },
]

for(let i=0; i < addcart.length; i++){
    addcart[i].addEventListener('click',() =>{
        cartnum();
    } )
}

function onLoadCartNumbers(){ //va a revisar si exis
    let productNumbers=localStorage.getItem('cartnum');
    if(productNumbers){
        document.querySelector('.item').textContent = productNumbers;

    }
}

function cartnum(){
    let productNumbers=localStorage.getItem('cartnum'); //Esto es para que se guarde la variable y que no se borre al recargar
    console.log(productNumbers);
    productNumbers = parseInt(productNumbers); //con esto lo convierto a numero antes estaba como string
    
    if(productNumbers){
        localStorage.setItem('cartnum', productNumbers + 1);
        document.querySelector('.item').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartnum', 1);
        document.querySelector('.item').textContent = 1;
    }
    
}
onLoadCartNumbers();

