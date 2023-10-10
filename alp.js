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

let aciertos = 0;
let errores = 0;


function juego(){
    console.log(palabrasCarta1);
    console.log(pistasCarta1);
    alert("Bienvenido a adivina la palabra!")
    alert("Este juego consiste en tomar una carta con 5 pistas para adivinar 5 palabras")
    alert("Si adivinas la palabra esta")
}







btn.addEventListener('click',juego,true)