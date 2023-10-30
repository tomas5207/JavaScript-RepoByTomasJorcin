var btn = document.getElementById('numero');
var containerN = document.getElementById('numeroJuego');


function juego(){
    containerN.innerHTML = "<span class='textoGenerado'>Bienvenido al numero de la suerte!</span><button onClick='parte2N()'>Siguiente</button>"
    /*

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
    */
}

function parte2N(){
    containerN.innerHTML = "<span class='textoGenerado'>Este juego consiste en adivinar un número del 1 al 10 elegido al azar</span><button onClick='parte3N()'>Siguiente</button>"
}

function parte3N(){
    containerN.innerHTML = "<span class='textoGenerado'>Si el numero que elegiste coincide con el que la maquina eligio GANAS!</span><button onClick='parte4N()'>Siguiente</button>"
}

function parte4N(){
    containerN.innerHTML = "<span class='textoGenerado'>De lo contrario PIERDES!</span><button onClick='parte5N()'>Siguiente</button>"
}

function parte5N(){
    containerN.innerHTML = "<span class='textoGenerado'>Tienes tres oportunidades para adivinar el numero</span><button onClick='parte6N()'>Siguiente</button>"
}

function parte6N(){
    containerN.innerHTML = "<span class='textoGenerado'>listo?</span><button onClick='parte7N()'>Siguiente</button>"
}

function parte7N(){
    containerN.innerHTML = "<span class='textoGenerado'>COMENCEMOS!</span><button onClick='parte8N()'>Siguiente</button>"
}

function parte8N(){
    containerN.innerHTML = "<span class='textoGenerado'>Elige un numero del 1 al 10</span><input id='eleccion' type='number'><button id='aceptar2'>Aceptar</button>"
    var errores = 0;
    var numeroA = Math.floor(Math.random() * (10 - 1) + 1)
    document.getElementById('aceptar2').onclick = function (){
        var numeroE = document.getElementById("eleccion").value;
            if(numeroE!=numeroA){
                alert("NUMERO INCORRECTO!")
                errores++;
            }

            if(numeroE == numeroA){
                containerN.innerHTML = "<span class='textoGenerado'>NUMERO CORRECTO!. GANASTE!</span>"
            }

        if(errores==3){
            containerN.innerHTML = "<span class='textoGenerado'>No lograste adivinar el numero. Perdiste :(</span>"
        } 
    }
}




btn.addEventListener('click',juego,true)