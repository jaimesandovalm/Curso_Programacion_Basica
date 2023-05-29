//Declaracion de variables

//let eleccionDelJugador = 0
let eleccionDelJugador = prompt("Elije 1.-Piedra, 2.- Papel, 3.- Tijera")

//informando la eleccion del jugador
if (eleccionDelJugador == 1) {
    alert("Elegiste Piedra")
} else if(eleccionDelJugador == 2){
    alert("Elegiste Papel")
} else if (eleccionDelJugador == 3) {
    alert("Elegiste Tijera")
} else {
    alert ("La eleccion elegida no es la correcta")
}