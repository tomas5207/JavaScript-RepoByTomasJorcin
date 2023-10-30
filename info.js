var btn = document.getElementById('info');
var container = document.getElementById('infoSala');

function mensaje(){
    let texto1= "<span class='infoText'>Bienvenido a la sala de juegos.</span>";
    let texto2 = "<span class='infoText'> En este proyecto, se realizaran varios juegos interactivos.</span>"
    let texto3= "<span class='infoText'> Algunos seran juegos simples como piedra, papel o tijeras</span>"
    let texto4 = "<span class='infoText'> y otros juegos de mesa algo más complejos como adivina la palabra.</span>"
    let texto5 = "<span class='infoText'> Ademas de otros añadidos interesantes como la tabla de jugadores</span>"
    let texto6 = "<span class='infoText'> en la cual podras grabar tu nombre como si fuera una marca</span>"
    let texto7 = "<span class='infoText'> para que la proxima vez que tu u otro jugador entre a la sala</span>"
    let texto8 = "<span class='infoText'> pueda ver los nombres grabados en la tabla</span>"
    let texto9 = "<span class='infoText'> así que espero disfruten de esta sala de juegos y presencien como avanza este proyecto :)</span>"
    let textoCompleto = texto1 + texto2 + texto3 + texto4 + texto5 + texto6 + texto7 + texto8 + texto9;
    container.innerHTML = textoCompleto;
}




btn.addEventListener('click',mensaje,true)