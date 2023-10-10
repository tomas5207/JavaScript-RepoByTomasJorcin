var btn = document.getElementById('numero');



function juego(){
    alert("Bienvenido al numero de la suerte!")
    alert("Este juego consiste en adivinar un número del 1 al 10 elegido al azar")
    alert("Si el numero que elegiste coincide con el que la maquina eligio GANAS!")
    alert("De lo contrario PIERDES!")
    alert("Tienes tres oportunidades para adivinar el numero")
    alert("listo?")
    alert("COMENCEMOS!")
    let errores = 0;
    let numeroA = Math.floor(Math.random() * (10 - 1) + 1);
    let numeroE;
    do{
        numeroE = Number(prompt("Elige un numero del 1 al 10"));
        if(numeroE!=numeroA){
            alert("NUMERO INCORRECTO!")
            errores++;
        }
    } while(numeroE != numeroA && errores !=3)

    if(errores==3){
        alert("Perdiste :(")
    } else if(errores<3){
        alert("NUMERO CORRECTO!")
        alert("GANASTE!")
    }
    
}




btn.addEventListener('click',juego,true)