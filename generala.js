let btn = document.getElementById('generala')

function menu(){
    let elección = Number(prompt("Selecciona 1 para jugar. 2 para ver las reglas del juego"))
    switch(elección){
        case 1:
            juego();
            break;
        case 2:
            reglas();
    }
        
}

function juego(){

}

function reglas(){

}



btn.addEventListener('click',menu,true)