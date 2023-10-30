var btn = document.getElementById('cargar');
var containerJ = document.getElementById('tablaJugadores');
var btn2 = document.getElementById('guardar');


function cargar(){
    for(let i=0; i<localStorage.length; i++){
        let clave = localStorage.key(i);
        let tabla = `<ul><li class='playerList'>${localStorage.getItem(clave)}</li></ul>`
        containerJ.innerHTML = tabla;
    }
}

function guardar(){
    var Jugador = document.getElementById('player').value;
    for(let i=0; i<localStorage.length; i++){
    let clave = localStorage.key(i);
    if(localStorage.getItem(clave) == Jugador){
        containerJ.innerHTML = "<span class='infoText'>El nombre de dicho jugador ya existe. Ingrese otro!</span>"
    }else{
        localStorage.setItem("Jugador", Jugador);
        containerJ.innerHTML = "<span class='infoText'>Jugador ingresado con exito!</span>"
    }
}
}



btn.addEventListener('click',cargar,true)
btn2.addEventListener('click',guardar,true)