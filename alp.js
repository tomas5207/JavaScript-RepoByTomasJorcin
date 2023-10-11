var btn = document.getElementById('palabra');

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




function juego(){
    alert("Bienvenido a adivina la palabra!")
    alert("Este juego consiste en tomar una carta con 5 pistas para adivinar 5 palabras")
    alert("Teniendo hasta 8 oportunidades como mucho para adivinar las 5 palabras")
    alert("Si adivinas las 5 palabras de la carta seleccionada GANAS")
    alert("Pero si gastas las 8 oportunidades para adivinar las palabras PIERDES")
    alert("Al final de la partida aparecera un marcador independientemente del resultado, el cual mostrara tu puntaje final")
    alert("Dicho puntaje depende del numero de aciertos y errores")
    alert("Por cada acierto sumara 9 puntos")
    alert("Mientras que cada error restara 3 puntos")
    alert("Consejo: si escribes una palabra ya descubierta, en minusculas o mal escrita la palabra sera considerada incorrecta")
    alert("Esta version de adivina la palabra es una versión de prueba")
    alert("Por lo que puede que en futuras entregas el desarrollo al rededor de este juego continue")
    alert("Desarrollo que no solo le brindara nuevo contenido como más cartas o un sistema de puntuacion mejorado, sino que ademas se corregira un bug que hay actualmente en el juego")
    alert("Dicho bug es uno en el cual es necesario salir de la pagina de la sala de juegos para jugar con la misma carta debido a ciertos detalles del como funciona el codigo del juego")
    alert("De todas maneras no es algo que afecte en gran medida al juego más alla de tener que salir y volver a entrar a la pagina")
    alert("Por lo que al tratarse de una versión de prueba, lo dejare por el momento tal cual, para que en una futura entrega que no se si sera la siguiente o la final desarrollar la version definitiva")
    alert("Dicho todo esto....")
    alert("listo?")
    alert("COMENCEMOS!")
    let aciertos = 0;
    let errores = 0;
    let puntuacion = 0;
    let seleccionCarta = Number(prompt("Elige un numero del 1 al 4 para seleccionar una carta"))
    if(seleccionCarta==1){
        do{
            var escribePalabra=palabrasCarta1.indexOf(prompt(pistasCarta1))
            if(escribePalabra===-1){
                alert("Palabra no encontrada o ya descubierta. Sigue probando")
                errores++;
                puntuacion-=3;
                console.log(errores)
            }else{
                alert("Palabra encontrada")
                aciertos++;
                puntuacion+=9;
                console.log(aciertos)
                if(escribePalabra==0){
                delete(palabrasCarta1[0])
                }else if(escribePalabra==1){
                delete(palabrasCarta1[1])
                }else if(escribePalabra==2){
                delete(palabrasCarta1[2])
                }else if(escribePalabra==3){
                delete(palabrasCarta1[3])
                }else if(escribePalabra==4){
                delete(palabrasCarta1[4])
                }
                if(escribePalabra==0){
                delete(pistasCarta1[0])
                }
                else if(escribePalabra==1){
                delete(pistasCarta1[1])
                }
                else if(escribePalabra==2){
                delete(pistasCarta1[2])
                }
                else if(escribePalabra==3){
                delete(pistasCarta1[3])
                }
                else if(escribePalabra==4){
                delete(pistasCarta1[4])
                }
            }
            
        }while(aciertos!=5 && errores!=8)
        
        if(aciertos==5){
            alert("ADIVINASTE TODAS LAS PALABRAS!")
            alert("GANASTE!")
            alert("Tu puntuación final es de:" + puntuacion)
        }else if(aciertos==4){
            alert("UYYYY POR POQUITO!")
            alert("Perdiste :(")
            alert("Tu puntuación final es de:" + puntuacion)
        }else if(aciertos==3){
            alert("No esta mal. Mejor suerte la proxima :)")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion)
        }else if(aciertos==2){
            alert("2 aciertos de 5?. Bueno. Podría ser peor")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion)
        }else if(aciertos==1){
            alert("Eh?. Solo acertaste 1?. Más diccionario y menos reggaeton para la proxima xd")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion + "?" + " " + "¿en serio eso es lo mejor que puedes hacer?.Bue....")
        }else if(aciertos==0){
            alert("LOCO. ¿COMO NO VAS A ACERTAR NI 1?. PONETE LAS PILAS DALE. REPASA EL DICCIONARIO COMPLETOOOOOOO!")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion + "?" + " " + "sin comentarios.....")
        }
    } else if(seleccionCarta==2){
        do{
            var escribePalabra=palabrasCarta2.indexOf(prompt(pistasCarta2))
            if(escribePalabra===-1){
                alert("Palabra no encontrada o ya descubierta. Sigue probando")
                errores++;
                puntuacion-=3;
                console.log(errores)
            }else{
                alert("Palabra encontrada")
                aciertos++;
                puntuacion+=9;
                console.log(aciertos)
                if(escribePalabra==0){
                delete(palabrasCarta2[0])
                }else if(escribePalabra==1){
                delete(palabrasCarta2[1])
                }else if(escribePalabra==2){
                delete(palabrasCarta2[2])
                }else if(escribePalabra==3){
                delete(palabrasCarta2[3])
                }else if(escribePalabra==4){
                delete(palabrasCarta2[4])
                }
                if(escribePalabra==0){
                delete(pistasCarta2[0])
                }
                else if(escribePalabra==1){
                delete(pistasCarta2[1])
                }
                else if(escribePalabra==2){
                delete(pistasCarta2[2])
                }
                else if(escribePalabra==3){
                delete(pistasCarta2[3])
                }
                else if(escribePalabra==4){
                delete(pistasCarta2[4])
                }
            }
            
        }while(aciertos!=5 && errores!=8)
        
        if(aciertos==5){
            alert("ADIVINASTE TODAS LAS PALABRAS!")
            alert("GANASTE!")
            alert("Tu puntuación final es de:" + puntuacion)
        }else if(aciertos==4){
            alert("UYYYY POR POQUITO!")
            alert("Perdiste :(")
            alert("Tu puntuación final es de:" + puntuacion)
        }else if(aciertos==3){
            alert("No esta mal. Mejor suerte la proxima :)")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion)
        }else if(aciertos==2){
            alert("2 aciertos de 5?. Bueno. Podría ser peor")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion)
        }else if(aciertos==1){
            alert("Eh?. Solo acertaste 1?. Más diccionario y menos reggaeton para la proxima xd")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion + "?" + " " + "¿en serio eso es lo mejor que puedes hacer?.Bue....")
        }else if(aciertos==0){
            alert("LOCO. ¿COMO NO VAS A ACERTAR NI 1?. PONETE LAS PILAS DALE. REPASA EL DICCIONARIO COMPLETOOOOOOO!")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion + "?" + " " + "sin comentarios.....")
        }
    }else if(seleccionCarta==3){
        do{
            var escribePalabra=palabrasCarta3.indexOf(prompt(pistasCarta3))
            if(escribePalabra===-1){
                alert("Palabra no encontrada o ya descubierta. Sigue probando")
                errores++;
                puntuacion-=3;
                console.log(errores)
            }else{
                alert("Palabra encontrada")
                aciertos++;
                puntuacion+=9;
                console.log(aciertos)
                if(escribePalabra==0){
                delete(palabrasCarta3[0])
                }else if(escribePalabra==1){
                delete(palabrasCarta3[1])
                }else if(escribePalabra==2){
                delete(palabrasCarta3[2])
                }else if(escribePalabra==3){
                delete(palabrasCarta3[3])
                }else if(escribePalabra==4){
                delete(palabrasCarta3[4])
                }
                if(escribePalabra==0){
                delete(pistasCarta3[0])
                }
                else if(escribePalabra==1){
                delete(pistasCarta3[1])
                }
                else if(escribePalabra==2){
                delete(pistasCarta3[2])
                }
                else if(escribePalabra==3){
                delete(pistasCarta3[3])
                }
                else if(escribePalabra==4){
                delete(pistasCarta3[4])
                }
            }
            
        }while(aciertos!=5 && errores!=8)
        
        if(aciertos==5){
            alert("ADIVINASTE TODAS LAS PALABRAS!")
            alert("GANASTE!")
            alert("Tu puntuación final es de:" + puntuacion)
        }else if(aciertos==4){
            alert("UYYYY POR POQUITO!")
            alert("Perdiste :(")
            alert("Tu puntuación final es de:" + puntuacion)
        }else if(aciertos==3){
            alert("No esta mal. Mejor suerte la proxima :)")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion)
        }else if(aciertos==2){
            alert("2 aciertos de 5?. Bueno. Podría ser peor")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion)
        }else if(aciertos==1){
            alert("Eh?. Solo acertaste 1?. Más diccionario y menos reggaeton para la proxima xd")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion + "?" + " " + "¿en serio eso es lo mejor que puedes hacer?.Bue....")
        }else if(aciertos==0){
            alert("LOCO. ¿COMO NO VAS A ACERTAR NI 1?. PONETE LAS PILAS DALE. REPASA EL DICCIONARIO COMPLETOOOOOOO!")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion + "?" + " " + "sin comentarios.....")
        }
    }else if(seleccionCarta==4){
        do{
            var escribePalabra=palabrasCarta4.indexOf(prompt(pistasCarta3))
            if(escribePalabra===-1){
                alert("Palabra no encontrada o ya descubierta. Sigue probando")
                errores++;
                puntuacion-=3;
                console.log(errores)
            }else{
                alert("Palabra encontrada")
                aciertos++;
                puntuacion+=9;
                console.log(aciertos)
                if(escribePalabra==0){
                delete(palabrasCarta1[0])
                }else if(escribePalabra==1){
                delete(palabrasCarta1[1])
                }else if(escribePalabra==2){
                delete(palabrasCarta1[2])
                }else if(escribePalabra==3){
                delete(palabrasCarta1[3])
                }else if(escribePalabra==4){
                delete(palabrasCarta1[4])
                }
                if(escribePalabra==0){
                delete(pistasCarta1[0])
                }
                else if(escribePalabra==1){
                delete(pistasCarta1[1])
                }
                else if(escribePalabra==2){
                delete(pistasCarta1[2])
                }
                else if(escribePalabra==3){
                delete(pistasCarta1[3])
                }
                else if(escribePalabra==4){
                delete(pistasCarta1[4])
                }
            }
            
        }while(aciertos!=5 && errores!=8)
        
        if(aciertos==5){
            alert("ADIVINASTE TODAS LAS PALABRAS!")
            alert("GANASTE!")
            alert("Tu puntuación final es de:" + puntuacion)
        }else if(aciertos==4){
            alert("UYYYY POR POQUITO!")
            alert("Perdiste :(")
            alert("Tu puntuación final es de:" + puntuacion)
        }else if(aciertos==3){
            alert("No esta mal. Mejor suerte la proxima :)")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion)
        }else if(aciertos==2){
            alert("2 aciertos de 5?. Bueno. Podría ser peor")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion)
        }else if(aciertos==1){
            alert("Eh?. Solo acertaste 1?. Más diccionario y menos reggaeton para la proxima xd")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion + "?" + " " + "¿en serio eso es lo mejor que puedes hacer?.Bue....")
        }else if(aciertos==0){
            alert("LOCO. ¿COMO NO VAS A ACERTAR NI 1?. PONETE LAS PILAS DALE. REPASA EL DICCIONARIO COMPLETOOOOOOO!")
            alert("Perdiste :(")
            alert("Tu puntuacion final es de:" + puntuacion + "?" + " " + "sin comentarios.....")
        }
    }else{
        alert("La carta que usted selecciono es inexistente")
    }
}







btn.addEventListener('click',juego,true)