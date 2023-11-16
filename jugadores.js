var btn = document.getElementById('cargar');
var containerJ = document.getElementById('tablaJugadores');
var btn2 = document.getElementById('guardar');

function cargar() {
    let listaJugadoresHTML = "<ul>";


    var listaJugadores = JSON.parse(localStorage.getItem('listaJugadores')) || [];


    for (let i = 0; i < listaJugadores.length; i++) {
        listaJugadoresHTML += `<li class='playerList'>${listaJugadores[i]}</li>`;
    }

    listaJugadoresHTML += "</ul>";
    containerJ.innerHTML = listaJugadoresHTML;
}

function guardar() {
    var Jugador = document.getElementById('player').value;

    
    var listaJugadores = JSON.parse(localStorage.getItem('listaJugadores')) || [];

    if (listaJugadores.includes(Jugador)) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre duplicado',
            text: 'El nombre de dicho jugador ya existe. Ingrese otro!',
            confirmButtonColor: '#c1fa05',
            confirmButtonText: 'Entendido'
        });
    } else {

        listaJugadores.push(Jugador);

        localStorage.setItem('listaJugadores', JSON.stringify(listaJugadores));

        Swal.fire({
            icon: 'success',
            title: 'Jugador añadido a la tabla con éxito!',
            showConfirmButton: false,
            timer: 1500
        });

        document.getElementById('player').value = '';
    }
}


btn.addEventListener('click', cargar, true);
btn2.addEventListener('click', guardar, true);
