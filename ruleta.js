var btn = document.getElementById('ruleta');
var containerR = document.getElementById('ruletaJuego');

function juego(){
    containerR.innerHTML = "<span class='textoGenerado'>Bienvenido a la ruleta rusa!</span><button onClick='parte2()'>Siguiente</button>"
}

function parte2(){
    containerR.innerHTML = "<span class='textoGenerado'>Este juego lo jugara con un amigo o compañero</span><button onClick='parte3()'>Siguiente</button>"
}

function parte3(){
    containerR.innerHTML = "<span class='textoGenerado'>Cada vez que den click en aceptar podra salir una de dos opciones</span><button onClick='parte4()'>Siguiente</button>"
}

function parte4(){
    containerR.innerHTML = "<span class='textoGenerado'>Cargador vacio o BAM! que es el equivalente a disparo</span><button onClick='parte5()'>Siguiente</button>"
}

function parte5(){
    containerR.innerHTML = "<span class='textoGenerado'>Si sale cargador vacio el juego continuara como de costumbre</span><button onClick='parte6()'>Siguiente</button>"
}

function parte6(){
    containerR.innerHTML = "<span class='textoGenerado'>De lo contrario si sale disparo, al jugador del cual sea su turno....</span><button onClick='parte7()'>Siguiente</button>"
}

function parte7(){
    containerR.innerHTML = "<span class='textoGenerado'>PIERDE!</span><button onClick='parte8()'>Siguiente</button>"
}

function parte8(){
    containerR.innerHTML = "<span class='textoGenerado'>Dando como ganador el jugador que no recibio el disparo!</span><button onClick='parte9()'>Siguiente</button>"
}

function parte9(){
    containerR.innerHTML = "<span class='textoGenerado'>listo?</span><button onClick='parte10()'>Siguiente</button>"   
}

function parte10(){
    containerR.innerHTML = "<span class='textoGenerado'>COMENCEMOS!</span><button onClick='parte11()'>Siguiente</button>"
}

function parte11(){
    let pistola = Math.floor(Math.random()*6)
    switch(pistola){
        case 0:
            containerR.innerHTML = "<span class='textoGenerado'>Cargador vacio....</span><button onClick='parte11()'>Siguiente</button>"
            break;
        case 1:
            containerR.innerHTML = "<span class='textoGenerado'>Cargador vacio....</span><button onClick='parte11()'>Siguiente</button>"
            break;
        case 2:
            containerR.innerHTML = "<span class='textoGenerado'>Cargador vacio....</span><button onClick='parte11()'>Siguiente</button>"
            break;
        case 3:
            containerR.innerHTML = "<span class='textoGenerado'>Cargador vacio....</span><button onClick='parte11()'>Siguiente</button>"
            break;
        case 4:
            containerR.innerHTML = "<span class='textoGenerado'>Cargador vacio....</span><button onClick='parte11()'>Siguiente</button>"
            break;
        case 5:
            containerR.innerHTML = "<span class='infoText'>BAM!</span>"
            break;
    }
}

btn.addEventListener('click',juego,true)