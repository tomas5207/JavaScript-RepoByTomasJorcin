import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());


document.getElementById('clave').addEventListener('click', function(){
    var insertarClave = document.getElementById('inserte').value;
    fetch('clave.json')
    .then((res) => res.json())
    .then((data) => {
        if (data && data.clave == insertarClave) {
            window.location.href = 'index.html';
        } else {
            alert("Clave incorrecta...");
        }
    }).catch(error => console.error('Error:', error));
});






















