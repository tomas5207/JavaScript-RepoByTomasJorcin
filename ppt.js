var btn = document.getElementById('ppt');
var containerP = document.getElementById('pptJuego');


function juego(){
    containerP.innerHTML = "<span class='textoGenerado'>Bienvenido a piedra, papel o tijeras!</span><button onClick='parte2P()'>Siguiente</button>"
}

function parte2P(){
    containerP.innerHTML = "<span class='textoGenerado'>En este juego tendra que elegir una de las siguientes opciones</span><button onClick='parte3P()'>Siguiente</button>"
}

function parte3P(){
    containerP.innerHTML = "<span class='textoGenerado'>Piedra el cual es equivalente a 0</span><button onClick='parte4P()'>Siguiente</button>"
}

function parte4P(){
    containerP.innerHTML = "<span class='textoGenerado'>Papel el cual es equivalente a 1</span><button onClick='parte5P()'>Siguiente</button>"
}

function parte5P(){
    containerP.innerHTML = "<span class='textoGenerado'>O tijeras que es equivalente a 2</span><button onClick='parte6P()'>Siguiente</button>"
}

function parte6P(){
    containerP.innerHTML = "<span class='textoGenerado'>La maquina hara su jugada al azar y si elige la opción correcta ganara</span><button onClick='parte7P()'>Siguiente</button>"
}

function parte7P(){
    containerP.innerHTML = "<span class='textoGenerado'>De lo contrario perdera o empatara</span><button onClick='parte8P()'>Siguiente</button>"
}

function parte8P(){
    containerP.innerHTML = "<span class='textoGenerado'>listo?</span><button onClick='parte9P()'>Siguiente</button>"
}

function parte9P(){
    containerP.innerHTML = "<span class='textoGenerado'>COMENCEMOS!</span><button onClick='parte10P()'>Siguiente</button>"
}

function parte10P(){
    containerP.innerHTML = "<span class='textoGenerado'>Eliga piedra=0 , papel=1 o tijeras=2</span><input id='opcion' type='number'><button id='aceptar'>Aceptar</button>"

    var num = Math.floor(Math.random() * 3)

    document.getElementById('aceptar').onclick = function () {
        var eleccion = document.getElementById("opcion").value;
        if(eleccion==0 && num==2){
            containerP.innerHTML = "<span class='textoGenerado'>Piedra vence tijeras!. GANASTE!</span>"
        }
        else if(eleccion==1 && num==0){
            containerP.innerHTML = "<span class='textoGenerado'>Papel vence piedra!. GANASTE!</span>"
        }
        else if(eleccion==2 && num==1){
            containerP.innerHTML = "<span class='textoGenerado'>Tijeras vence papel!. GANASTE!</span>"
        }
        else if(eleccion==0 && num==1){
            containerP.innerHTML = "<span class='textoGenerado'>Piedra pierde ante papel!. Perdiste :(</span>"
        }
        else if(eleccion==1 && num==2){
            containerP.innerHTML = "<span class='textoGenerado'>Papel pierde ante tijeras!. Perdiste :(</span>"
        }
        else if(eleccion==2 && num==0){
            containerP.innerHTML = "<span class='textoGenerado'>Tijeras pierde ante piedra!. Perdiste :(</span>"
        }
        else if(eleccion==0 && num==0){
            containerP.innerHTML = "<span class='textoGenerado'>Piedra choca contra piedra!. Empate :/</span>"
        }
        else if(eleccion==1 && num==1){
            containerP.innerHTML = "<span class='textoGenerado'>Papel choca contra papel!. Empate :/</span>"
        }
        else if(eleccion==2 && num==2){
            containerP.innerHTML = "<span class='textoGenerado'>Tijeras chocan contra tijeras!. Empate :/</span>"
        }else{
            containerP.innerHTML = "<span class='textoGenerado'>Elección de movimiento invalida. Ingrese 0 , 1 o 2 la proxima vez para usar piedra, papel o tijeras</span>"
        }
    }
}










btn.addEventListener('click',juego,true);