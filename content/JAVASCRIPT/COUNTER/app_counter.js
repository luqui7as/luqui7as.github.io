//seteamos contador en 0
let count = 0;

// seleccionar valor y botones
const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.btn');

botones.forEach(function(boton){
    boton.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }else{
            count=0;
        }if(count>0){
            valor.style.color = 'green';
        }if(count<0){
            valor.style.color = 'red';
        }
        if(count==0){
            valor.style.color = 'black';
        }
        valor.textContent = count;

    });
});