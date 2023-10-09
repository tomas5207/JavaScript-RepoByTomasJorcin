var btn = document.getElementById('palabra');

let palabra1 = new Object();
palabra1.palabra = "Lana";
palabra1.pista = "Producto obtenido tras esquilar una obeja";

let palabra2 = new Object();
palabra2.palabra = "Oreo";
palabra2.pista = "Galletas famosas de color negro y blanco";

let palabra3 = new Object();
palabra3.palabra = "Oso";
palabra3.pista = "Animal grande y peludo que duerme durante todo el invierno";

let palabra4 = new Object();
palabra4.palabra = "Vino";
palabra4.pista = "Bebida alcohólica que en el cristianismo es conocida como la sangre de Cristo";

let palabra5 = new Object();
palabra5.palabra = "Hierro";
palabra5.pista = "Elemento químico que ademas de ser un metal forma parte del ser humano";

function Jugador(nombre, aciertos, errores){
    this.nombre = nombre;
    this.aciertos = aciertos;
    this.errores = errores;
}



function juego(){
    alert("Bienvenido a adivina la palabra!")
    alert("En este juego tendras que adivinar la mayor cantidad de palabras posible")
    alert("Si consigues obtener un mayor numero de aciertos antes que de errores GANAS!")
    alert("De lo contrario, PIERDES!")
    alert("Antes de empezar, escribe tu nombre de para esta partida")
    let name = prompt("escribe tu nombre")
    let jugador = new Jugador(name, 0 , 0);
    alert("Con que:" + " " +jugador.nombre + " " +"encantado de conocerte!")
    alert("Muy bien" + " " + jugador.nombre)
    alert("COMENCEMOS!")
    let adivina1 = prompt("Primera palabra:" + " " + palabra1.pista)
    if(adivina1 == palabra1.palabra){
        alert("CORRECTO!")
        jugador.aciertos++;
    }else{
        alert("INCORRECTO!. La respuesta correcta era:" + " " + palabra1.palabra)
        jugador.errores++;
    }
    let adivina2 = prompt("Segunda palabra:" + " " + palabra2.pista)
    if(adivina2 == palabra2.palabra){
        alert("CORRECTO!")
        jugador.aciertos++;
    }
    else{
        alert("INCORRECTO!. La respuesta correcta era:" + " " + palabra2.palabra)
        jugador.errores++;
    }
    let adivina3 = prompt("Tercera palabra:" + " " + palabra3.pista)
    if(adivina3 == palabra3.palabra){
        alert("CORRECTO!")
        jugador.aciertos++;
    }
    else{
        alert("INCORRECTO!. La respuesta correcta era:" + " " + palabra3.palabra)
        jugador.errores++;
    }
    let adivina4 = prompt("Cuarta palabra:" + " " + palabra4.pista)
    if(adivina4 == palabra4.palabra){
        alert("CORRECTO!")
        jugador.aciertos++;
    }else{
        alert("INCORRECTO!. La respuesta correcta era:" + " " + palabra4.palabra)
        jugador.errores++;
    }
    let adivina5 = prompt("Quinta palabra:" + " " + palabra5.pista)
    if(adivina5 == palabra5.palabra){
        alert("CORRECTO!")
        jugador.aciertos++;
    }else{
        alert("INCORRECTO!. La respuesta correcta era:" + " " + palabra5.palabra)
        jugador.errores++;
    }
    alert("SE ACABARON LAS PALABRAS!")
    alert("Aqui estan los resultados:")
    if(jugador.aciertos>jugador.errores){
        alert("Cantidad de aciertos: " + jugador.aciertos)
        alert("Cantidad de errores: " + jugador.errores)
        alert("FELICIDADES: " + " " +jugador.nombre + " " + "GANASTE!")
    }
    else if(jugador.aciertos<jugador.errores){
        alert("Cantidad de aciertos: " + jugador.aciertos)
        alert("Cantidad de errores: " + jugador.errores)
        alert("Lo siento: " + " " +jugador.nombre + " " + "perdiste, mejor suerte la proxima :(")
    }else if(jugador.aciertos==jugador.errores){
        alert("Cantidad de aciertos: " + jugador.aciertos)
        alert("Cantidad de errores: " + jugador.errores)
        alert("WOW: " + " " +jugador.nombre + " " + "¿EMPATASTE?!. ¿Eso es bueno o malo? :/")
    }
}







btn.addEventListener('click',juego,true)