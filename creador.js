var btn = document.getElementById('creador');
var containerC = document.getElementById('creditosPagina');

function creditos(){
    let credito1 = "<img id='cv' src='foto-curriculum.jpg' alt='foto curriculum' >"
    let credito2 = "<h3>Nombre: Tomás Jorcin</h3>"
    let credito3 = "<h3>Nacionalidad: Uruguaya</h3>"
    let credito4 = "<h3>Profesion: Analista Programador/Developer</h3>"
    let credito5 = "<h3>Email: jorcintomas@gmail.com</h3>"
    let credito6 = "<h3>Github: tomas5207</h3>"
    let creditos = credito1 + credito2 + credito3 +credito4 + credito5 + credito6;
    containerC.innerHTML = creditos;
}




btn.addEventListener('click',creditos,true)