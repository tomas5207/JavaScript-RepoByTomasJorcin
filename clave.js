var contenido = document.getElementById('contenido');


document.getElementById('clave').addEventListener('click', function(){
    var insertarClave = document.getElementById('inserte').value;
    fetch('https://github.com/tomas5207/JavaScript-RepoByTomasJorcin/blob/master/clave.json')
    .then(response => response.json())
    .then(data => {
        if(data.clave == insertarClave){
            window.location.href= 'index.html';
        }else{
            alert("Clave incorrecta...")
        }
    }).catch(error => console.error('Error:' , error));
});





















