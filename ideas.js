var btn = document.getElementById('cargar2');
var containerI = document.getElementById('listaIdeas');
var btn2 = document.getElementById('guardar2');

function cargar() {
    let listaIdeasHTML = "<ol>";


    var listaIdeas = JSON.parse(localStorage.getItem('tablaIdeas')) || [];


    for (let i = 0; i < listaIdeas.length; i++) {
        listaIdeasHTML += `<li class='IdeasList'>${listaIdeas[i]}</li>`;
    }

    listaIdeasHTML += "</ol>";
    containerI.innerHTML = listaIdeasHTML;
}

function guardar() {
    var Idea = document.getElementById('idea').value;

    
    var listaIdeas = JSON.parse(localStorage.getItem('tablaIdeas')) || [];


    listaIdeas.push(Idea);

    localStorage.setItem('tablaIdeas', JSON.stringify(listaIdeas));

    Swal.fire({
        icon: 'success',
        title: 'Idea añadida a la tabla con éxito!',
        showConfirmButton: false,
        timer: 1500
        });

        document.getElementById('idea').value = '';
}


btn.addEventListener('click', cargar, true);
btn2.addEventListener('click', guardar, true);