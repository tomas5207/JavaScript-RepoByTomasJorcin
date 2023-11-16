var btn = document.getElementById('palabra');
var containerA = document.getElementById('palabraJuego');

function Palabra(palabra, pista){
    this.palabra = palabra;
    this.pista = pista;
}


let palabra1 = new Palabra("Lana", "Producto obtenido tras esquilar una obeja");
let palabra2 = new Palabra("Oreo", "Galletas famosas de color negro y blanco");
let palabra3 = new Palabra("Oso", "Animal grande y peludo que duerme durante todo el invierno");
let palabra4 = new Palabra("Vino", "Bebida alcohólica que en el cristianismo es conocida como la sangre de Cristo");
let palabra5 = new Palabra("Hierro", "Elemento químico que ademas de ser un metal forma parte del ser humano");

let carta1 = [palabra1 , palabra2, palabra3, palabra4, palabra5];

const palabrasCarta1 = carta1.map((el)=>el.palabra);
const pistasCarta1 = carta1.map((el)=>el.pista);


let palabra6 = new Palabra("Goma", "Material inmune a la electricidad utilizado como objeto para borrar cosas escritas");
let palabra7 = new Palabra("Pescado", "Pez fuera del agua");
let palabra8 = new Palabra("Desierto", "Lugar lleno de arena donde hace mucho calor de dia y mucho frio de noche");
let palabra9 = new Palabra("Béisbol", "Segundo deporte que jugo profesionalmente Michael Jordan en su carrera deportiva");
let palabra10 = new Palabra("Azufre", "Elemento quimico que se ubica en los volcanes con olor a huevos podridos");

let carta2 = [palabra6 , palabra7, palabra8, palabra9, palabra10];

const palabrasCarta2 = carta2.map((el)=>el.palabra);
const pistasCarta2 = carta2.map((el)=>el.pista);

let palabra11 = new Palabra("Perro", "Animal cuadrupedo mejor conocido como el mejor amigo del hombre");
let palabra12 = new Palabra("Wisky", "Bebida alcohólica muy popular la cual tiene un meme del coco basile mencionando el blue label de johnnie walker");
let palabra13 = new Palabra("Rojo", "Color primario asociado a carteles de transito, cemaforos, partes vitales del cuerpo humano, etc");
let palabra14 = new Palabra("Vidrio", "Material que se obtiene al calentar arena de silice");
let palabra15 = new Palabra("Bateria", "Instrumento de percusión tipico e indispensable en cualquier banda");

let carta3 = [palabra11, palabra12, palabra13, palabra14, palabra15];

const palabrasCarta3 = carta3.map((el)=>el.palabra);
const pistasCarta3 = carta3.map((el)=> el.pista);

let palabra16 = new Palabra("Pepsi", "Bebida gaseosa rival de Coca-cola");
let palabra17 = new Palabra("Alquimia", "Antigua practica protocientifica que combina varias materias conocidas a dia de hoy");
let palabra18 = new Palabra("Futbol", "Deporte mundialmente conocido como el rey de los deportes");
let palabra19 = new Palabra("Pan", "Comida hecha de pura masa y harina que sabe mucho mejor recien salida del horno");
let palabra20 = new Palabra("Brujula", "Objeto muy utilizado por antiguos navegantes de barcos para orientarse");

let carta4 = [palabra16, palabra17, palabra18, palabra19, palabra20];

const palabrasCarta4 = carta4.map((el)=>el.palabra);
const pistasCarta4 = carta4.map((el)=>el.pista);

let palabrasAdivinadas = [];

var aciertos = 0;
var errores = 0;
var puntuacion = 0;


function juego(){
    containerA.innerHTML = "<span class='textoGenerado'>Bienvenido a adivina la palabra!</span><button onClick='parte2A()'>Siguiente</button>"
    console.log(aciertos);
}

function parte2A(){
    containerA.innerHTML = "<span class='textoGenerado'>Este juego consiste en tomar una carta con 5 pistas</span><button onClick='parte3A()'>Siguiente</button>"
}

function parte3A(){
    containerA.innerHTML = "<span class='textoGenerado'>Para adivinar 5 palabras</span><button onClick='parte4A()'>Siguiente</button>"
}

function parte4A(){
    containerA.innerHTML = "<span class='textoGenerado'>Teniendo hasta 8 oportunidades como mucho para adivinar las 5 palabras</span><button onClick='parte5A()'>Siguiente</button>"
}

function parte5A(){
    containerA.innerHTML = "<span class='textoGenerado'>Si adivinas las 5 palabras de la carta seleccionada GANAS</span><button onClick='parte6A()'>Siguiente</button>"
}

function parte6A(){
    containerA.innerHTML = "<span class='textoGenerado'>Pero si gastas las 8 oportunidades para adivinar las palabras PIERDES</span><button onClick='parte7A()'>Siguiente</button>"
}

function parte7A(){
    containerA.innerHTML = "<span class='textoGenerado'>Al final de la partida aparecera un marcador</span><button onClick='parte8A()'>Siguiente</button>"
}

function parte8A(){
    containerA.innerHTML = "<span class='textoGenerado'>Independientemente del resultado, el cual mostrara tu puntaje final</span><button onClick='parte9A()'>Siguiente</button>"
}

function parte9A(){
    containerA.innerHTML = "<span class='textoGenerado'>Dicho puntaje depende del numero de aciertos y errores</span><button onClick='parte10A()'>Siguiente</button>"
}

function parte10A(){
    containerA.innerHTML = "<span class='textoGenerado'>Por cada acierto sumara 9 puntos</span><button onClick='parte11A()'>Siguiente</button>"
}

function parte11A(){
    containerA.innerHTML = "<span class='textoGenerado'>Mientras que cada error restara 3 puntos</span><button onClick='parte12A()'>Siguiente</button>"   
}

function parte12A(){
    containerA.innerHTML = "<span class='textoGenerado'>Consejo: si escribes una palabra ya descubierta</span><button onClick='parte13A()'>Siguiente</button>"
}

function parte13A(){
    containerA.innerHTML = "<span class='textoGenerado'>En minusculas o mal escrita la palabra sera considerada incorrecta</span><button onClick='parte14A()'>Siguiente</button>"
}

function parte14A(){
    containerA.innerHTML = "<span class='textoGenerado'>listo?</span><button onClick='parte15A()'>Siguiente</button>"
}

function parte15A(){
    containerA.innerHTML = "<span class='textoGenerado'>COMENCEMOS!</span><button onClick='parte16A()'>Siguiente</button>"
}

function parte16A(){
    containerA.innerHTML = "<span class='textoGenerado'>Elige un numero del 1 al 4 para seleccionar una carta</span><input id='seleccion' type='number'><button id='aceptar3'>Aceptar</button>"
    document.getElementById('aceptar3').onclick = function(){
        var seleccion = document.getElementById("seleccion").value;
        if(seleccion==1){

        let opcion1 = "<ul>";
        
        for(let pistas of pistasCarta1){
            opcion1 += `<li id='pistas1'>${pistas}</li>`;
        }

        opcion1 += "</ul>";
        opcion1 += "<input type='text' id='palabras1'>";
        opcion1 += "<button id='AceptarPalabra1'>Aceptar</button>";

        containerA.innerHTML = opcion1;
        document.getElementById('AceptarPalabra1').onclick = function(){
            var word1 = document.getElementById("palabras1").value;
            var palabraEscrita = palabrasCarta1.indexOf(word1);
            if(palabraEscrita===-1 || palabrasAdivinadas.includes(word1)){
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR!',
                    text: 'Palabra no encontrada o ya descubierta. Sigue probando',
                    confirmButtonColor: '#c1fa05',
                    confirmButtonText: 'OK'
                });
                errores++;
                puntuacion-=3;
            }else{
                Swal.fire({
                    title: '¡Palabra encontrada!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#c1fa05'
                });
                aciertos++;
                puntuacion+=9;
                pistasCarta1[palabraEscrita] = `<s>${pistasCarta1[palabraEscrita]}</s>`;
                palabrasAdivinadas.push(word1);
                actualizarPistas(pistasCarta1, seleccion);
            }
        }

        }else if(seleccion==2){
            
        let opcion2 = "<ul>";
        
        for(let pistas of pistasCarta2){
            opcion2 += `<li id='pistas2'>${pistas}</li>`;
        }

        opcion2 += "</ul>";
        opcion2 += "<input type='text' id='palabras2'>";
        opcion2 += "<button id='AceptarPalabra2'>Aceptar</button>";

        containerA.innerHTML = opcion2;
        document.getElementById('AceptarPalabra2').onclick = function(){
            var word2 = document.getElementById("palabras2").value;
            var palabraEscrita = palabrasCarta2.indexOf(word2);
            if(palabraEscrita===-1 || palabrasAdivinadas.includes(word2)){
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR!',
                    text: 'Palabra no encontrada o ya descubierta. Sigue probando',
                    confirmButtonColor: '#c1fa05',
                    confirmButtonText: 'OK'
                });
                errores++;
                puntuacion-=3;
            }else{
                Swal.fire({
                    title: '¡Palabra encontrada!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#c1fa05'
                });
                aciertos++;
                puntuacion+=9;
                pistasCarta2[palabraEscrita] = `<s>${pistasCarta2[palabraEscrita]}</s>`;
                palabrasAdivinadas.push(word2);
                actualizarPistas(pistasCarta2, seleccion);
            }
        }

        }else if(seleccion==3){
            
        let opcion3 = "<ul>";
        
        for(let pistas of pistasCarta3){
            opcion3 += `<li id='pistas3'>${pistas}</li>`;
        }

        opcion3 += "</ul>";
        opcion3 += "<input type='text' id='palabras3'>";
        opcion3 += "<button id='AceptarPalabra3'>Aceptar</button>";

        containerA.innerHTML = opcion3;
        document.getElementById('AceptarPalabra3').onclick = function(){
            var word3 = document.getElementById("palabras3").value;
            var palabraEscrita = palabrasCarta3.indexOf(word3);
            if(palabraEscrita===-1 || palabrasAdivinadas.includes(word3)){
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR!',
                    text: 'Palabra no encontrada o ya descubierta. Sigue probando',
                    confirmButtonColor: '#c1fa05',
                    confirmButtonText: 'OK'
                });
                errores++;
                puntuacion-=3;
            }else{
                Swal.fire({
                    title: '¡Palabra encontrada!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#c1fa05'
                });
                aciertos++;
                puntuacion+=9;
                pistasCarta3[palabraEscrita] = `<s>${pistasCarta3[palabraEscrita]}</s>`;
                palabrasAdivinadas.push(word3);
                actualizarPistas(pistasCarta3, seleccion);
            }
        }

        }else if(seleccion==4){
        let opcion4 = "<ul>";
        
        for(let pistas of pistasCarta4){
            opcion4 += `<li id='pistas4'>${pistas}</li>`;
        }

        opcion4 += "</ul>";
        opcion4 += "<input type='text' id='palabras4'>";
        opcion4 += "<button id='AceptarPalabra4'>Aceptar</button>";

        containerA.innerHTML = opcion4;
        document.getElementById('AceptarPalabra4').onclick = function(){
            var word4 = document.getElementById("palabras4").value;
            var palabraEscrita = palabrasCarta4.indexOf(word4);
            if(palabraEscrita===-1 || palabrasAdivinadas.includes(word4)){
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR!',
                    text: 'Palabra no encontrada o ya descubierta. Sigue probando',
                    confirmButtonColor: '#c1fa05',
                    confirmButtonText: 'OK'
                });
                errores++;
                puntuacion-=3;
            }else{
                Swal.fire({
                    title: '¡Palabra encontrada!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#c1fa05'
                });
                aciertos++;
                puntuacion+=9;
                console.log(aciertos)
                pistasCarta4[palabraEscrita] = `<s>${pistasCarta4[palabraEscrita]}</s>`;
                palabrasAdivinadas.push(word4);
                actualizarPistas(pistasCarta4, seleccion);
            }
        }
        }else{
            containerA.innerHTML= "<span class='textoGenerado'>La carta que usted selecciono es inexistente</span><button onClick='parte19A()'>Volver</button>"
        }
    }
}


function actualizarPistas(pistas, seleccion) {
    let listaPistasHTML = "<ul>";

    for(let pista of pistas){
        listaPistasHTML += `<li id='pistas'>${pista}</li>`;
    }

    listaPistasHTML += "</ul>";
    listaPistasHTML += "<input type='text' id='nuevaPalabra'>";
    listaPistasHTML += "<button id='aceptarPalabra'>Aceptar</button>";

    containerA.innerHTML = listaPistasHTML; 

    document.getElementById('aceptarPalabra').onclick = function(){
        var nuevaPalabra = document.getElementById('nuevaPalabra').value;
        
        if(seleccion == 1){
            var palabraEscrita = palabrasCarta1.indexOf(nuevaPalabra);
            if(palabraEscrita===-1 || palabrasAdivinadas.includes(nuevaPalabra)){
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR!',
                    text: 'Palabra no encontrada o ya descubierta. Sigue probando',
                    confirmButtonColor: '#c1fa05',
                    confirmButtonText: 'OK'
                });
                errores++;
                puntuacion-=3;
            }else{
                Swal.fire({
                    title: '¡Palabra encontrada!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#c1fa05'
                });
                aciertos++;
                puntuacion+=9;
                console.log(aciertos)
                pistasCarta1[palabraEscrita] = `<s>${pistasCarta1[palabraEscrita]}</s>`;
                palabrasAdivinadas.push(nuevaPalabra);
                actualizarPistas(pistasCarta1, 1);
            }
        }else if(seleccion == 2){
            var palabraEscrita = palabrasCarta2.indexOf(nuevaPalabra);
            if(palabraEscrita===-1 || palabrasAdivinadas.includes(nuevaPalabra)){
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR!',
                    text: 'Palabra no encontrada o ya descubierta. Sigue probando',
                    confirmButtonColor: '#c1fa05',
                    confirmButtonText: 'OK'
                });
                errores++;
                puntuacion-=3;
            }else{
                Swal.fire({
                    title: '¡Palabra encontrada!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#c1fa05'
                });
                aciertos++;
                puntuacion+=9;
                pistasCarta2[palabraEscrita] = `<s>${pistasCarta2[palabraEscrita]}</s>`;
                palabrasAdivinadas.push(nuevaPalabra);
                actualizarPistas(pistasCarta2, 2);
            }
        }else if(seleccion == 3){
            var palabraEscrita = palabrasCarta3.indexOf(nuevaPalabra);
            if(palabraEscrita===-1 || palabrasAdivinadas.includes(nuevaPalabra)){
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR!',
                    text: 'Palabra no encontrada o ya descubierta. Sigue probando',
                    confirmButtonColor: '#c1fa05',
                    confirmButtonText: 'OK'
                });
                errores++;
                puntuacion-=3;
            }else{
                Swal.fire({
                    title: '¡Palabra encontrada!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#c1fa05'
                });
                aciertos++;
                puntuacion+=9;
                pistasCarta3[palabraEscrita] = `<s>${pistasCarta3[palabraEscrita]}</s>`;
                palabrasAdivinadas.push(nuevaPalabra);
                actualizarPistas(pistasCarta3, 3);
            }
        }else if(seleccion == 4){
            var palabraEscrita = palabrasCarta4.indexOf(nuevaPalabra);
            if(palabraEscrita===-1 || palabrasAdivinadas.includes(nuevaPalabra)){
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR!',
                    text: 'Palabra no encontrada o ya descubierta. Sigue probando',
                    confirmButtonColor: '#c1fa05',
                    confirmButtonText: 'OK'
                });
                errores++;
                puntuacion-=3;
            }else{
                Swal.fire({
                    title: '¡Palabra encontrada!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#c1fa05'
                });
                aciertos++;
                puntuacion+=9;
                pistasCarta4[palabraEscrita] = `<s>${pistasCarta4[palabraEscrita]}</s>`;
                palabrasAdivinadas.push(nuevaPalabra);
                actualizarPistas(pistasCarta4, 4);
            }
        }


        if(aciertos == 5 && errores == 0 || aciertos == 5 && errores == 7 || aciertos == 5 && errores == 6 || aciertos == 5 && errores == 5 
            || aciertos == 5 && errores == 4 || aciertos == 5 && errores == 3 || aciertos == 5 && errores == 2 || aciertos == 5 && errores == 1){
            
            containerA.innerHTML = `<span class='textoGenerado'>ADIVINASTE TODAS LAS PALABRAS!. GANASTE!. Tu puntuacion final es de: ${puntuacion}</span>`
            
            desentacharPistas(pistasCarta1);
            desentacharPistas(pistasCarta2);
            desentacharPistas(pistasCarta3);
            desentacharPistas(pistasCarta4);
            
            palabrasAdivinadas.splice(0, palabrasAdivinadas.length);
            aciertos = 0;
            errores = 0;
            puntuacion = 0;
            
        }else if(aciertos == 4 && errores==8){

            containerA.innerHTML = `<span class='textoGenerado'>UUUUYYY POR POQUITO!. Perdiste :(. Tu puntuacion final es de: ${puntuacion}</span>`
            palabrasAdivinadas.splice(0, palabrasAdivinadas.length);
            desentacharPistas(pistasCarta1);
            desentacharPistas(pistasCarta2);
            desentacharPistas(pistasCarta3);
            desentacharPistas(pistasCarta4);
            aciertos = 0;
            errores = 0;
            puntuacion = 0;

        }else if(aciertos == 3 && errores==8){
            
            containerA.innerHTML = `<span class='textoGenerado'>No esta mal, mejor suerte la proxima. Perdiste :(. Tu puntuacion final es de: ${puntuacion}</span>`
            palabrasAdivinadas.splice(0, palabrasAdivinadas.length);
            desentacharPistas(pistasCarta1);
            desentacharPistas(pistasCarta2);
            desentacharPistas(pistasCarta3);
            desentacharPistas(pistasCarta4);
            aciertos = 0;
            errores = 0;
            puntuacion = 0;

        }else if(aciertos == 2 && errores==8){

            containerA.innerHTML = `<span class='textoGenerado'> 2 aciertos de 5?. Bue, podría ser peor. Perdiste :(. Tu puntuacion final es de: ${puntuacion}</span>`
            palabrasAdivinadas.splice(0, palabrasAdivinadas.length);
            desentacharPistas(pistasCarta1);
            desentacharPistas(pistasCarta2);
            desentacharPistas(pistasCarta3);
            desentacharPistas(pistasCarta4);
            aciertos = 0;
            errores = 0;
            puntuacion = 0;

        }else if(aciertos == 1 && errores==8){

            containerA.innerHTML = `<span class='textoGenerado'>Eh?. ¿Solo acertaste 1?. Más diccionario y menos reggaeton xd. Perdiste :(. Tu puntuacion final es de: ${puntuacion}</span>`
            palabrasAdivinadas.splice(0, palabrasAdivinadas.length);
            desentacharPistas(pistasCarta1);
            desentacharPistas(pistasCarta2);
            desentacharPistas(pistasCarta3);
            desentacharPistas(pistasCarta4);
            aciertos = 0;
            errores = 0;
            puntuacion = 0;

        }else if(aciertos == 0 && errores==8){

            containerA.innerHTML = `<span class='textoGenerado'>¿COMO CARAJOS NO VAS ACERTAR NI UNA?. DALE HERMANO!. PERDISTE BURRO >:(. Tu puntuacion final es de: ${puntuacion}</span>`
            palabrasAdivinadas.splice(0, palabrasAdivinadas.length);
            desentacharPistas(pistasCarta1);
            desentacharPistas(pistasCarta2);
            desentacharPistas(pistasCarta3);
            desentacharPistas(pistasCarta4);
            aciertos = 0;
            errores = 0;
            puntuacion = 0;

        }
    }
}

function desentacharPistas(pistas) {
    for (let i = 0; i < pistas.length; i++) {
        if (pistas[i].includes('<s>') && pistas[i].includes('</s>')) {
            pistas[i] = pistas[i].replace(/<s>/g, '').replace(/<\/s>/g, '');
        }
    }
}





btn.addEventListener('click',juego,true)