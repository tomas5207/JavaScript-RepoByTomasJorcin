var btn = document.getElementById('ruleta');

function juego(){
    alert("Bienvenido a la ruleta rusa!")
    alert("Este juego lo jugara con un amigo o compañero.")
    alert("Cada vez que den click en aceptar podra salir una de dos opciones")
    alert("Cargador vacio o BAM! que es el equivalente a disparo")
    alert("Si sale cargador vacio el juego continuara como de costumbre")
    alert("De lo contrario si sale disparo, al jugador del cual sea su turno....")
    alert("PIERDE!")
    alert("Dando como ganador el jugador que no recibio el disparo!")
    alert("COMENCEMOS!")
    let pistola = Math.floor(Math.random()*6)
    switch(pistola){
        case 0:
            alert("Cargador vacio....")
        case 1:
            alert("Cargador vacio....")
        case 2:
            alert("Cargador vacio....")
        case 3:
            alert("Cargador vacio....")
        case 4:
            alert("Cargador vacio....")
        case 5:
            alert("BAM!")
            break;
    }
}

btn.addEventListener('click',juego,true)