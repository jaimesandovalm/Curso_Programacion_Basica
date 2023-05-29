//Declaracion de variables

let eleccionDelJugador = 0
eleccionDelJugador = prompt("Elije 1.-Piedra, 2.- Papel, 3.- Tijera")

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

//eleccion del pc

let eleccionDelPc = 3

//Eleccion del Pc
if (eleccionDelPc == 1) {
    alert("El pc a elegido Piedra")
} else if (eleccionDelPc == 2) {
    alert("El pc a elegido Papel")
    
} else if (eleccionDelPc == 3) {
    alert("El pc a elegido Tijera")
}

//decidiendo el ganador
if (eleccionDelJugador == eleccionDelPc) {
    alert("empate")
} else if (eleccionDelJugador == 1 && eleccionDelPc == 3) {
    alert("Has Ganado")
} else if (eleccionDelJugador == 2 && eleccionDelPc == 1) {
    alert("Has Ganado")
} else if (eleccionDelJugador == 3 && eleccionDelPc == 2) {
    alert("Has Ganado")
}else {
    alert("Ha Ganado Skynet")
}