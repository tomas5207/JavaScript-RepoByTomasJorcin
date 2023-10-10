var btn = document.getElementById('ppt');



function juego(){
    alert("Bienvenido a piedra, papel o tijeras!")
    alert("En este juego tendra que elegir una de las siguientes opciones")
    alert("Piedra el cual es equivalente a 0")
    alert("Papel el cual es equivalente a 1")
    alert("O tijeras que es equivalente a 2")
    alert("la maquina hara su jugada al azar y si elige la opción correcta ganara")
    alert("de lo contrario perdera o empatara")
    alert("listo?")
    alert("COMENCEMOS!")
    let eleccion = Number(prompt("Eliga piedra=0 , papel=1 o tijeras=2"))
    let num = Math.floor(Math.random() * 3)

    if(eleccion==0 && num==2){
        alert("Piedra vence tijeras!.")
        alert("GANASTE!.")
    }
    else if(eleccion==1 && num==0){
        alert("Papel vence piedra!.")
        alert("GANASTE!.")
    }
    else if(eleccion==2 && num==1){
        alert("Tijeras vencen papel!.")
        alert("GANASTE!.")
    }
    else if(eleccion==0 && num==1){
        alert("Piedra pierde ante papel!.")
        alert("perdiste :(")
    }
    else if(eleccion==1 && num==2){
        alert("Papel pierde ante tijeras!.")
        alert("perdiste :(")
    }
    else if(eleccion==2 && num==0){
        alert("Tijeras pierden ante piedra!.")
        alert("perdiste :(")
    }
    else if(eleccion==0 && num==0){
        alert("Piedra choca contra piedra!.")
        alert("empate :/")
    }
    else if(eleccion==1 && num==1){
        alert("Papel choca contra papel!.")
        alert("empate :/")
    }
    else if(eleccion==2 && num==2){
        alert("Tijeras chocan contra tijeras!.")
        alert("empate :/")
    }
}



btn.addEventListener('click',juego,true);