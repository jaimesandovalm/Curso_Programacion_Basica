//Declaracion de variables
let eleccionDelJugador = 0
let eleccionDelPc = numeroAleatorio( 1 , 3)


//uso de las variables
eleccionDelJugador = prompt("Elije 1.- Piedra, 2.- Papel, 3.-Tijera")

//funciones
function alertaEleccion(tipoJugador, eleccion) {
    if (eleccion == 1) {
        alert(tipoJugador + " Ha escogido Piedra")
    } else if (eleccion == 2) {
        alert(tipoJugador + " Ha elegido Papel")
    } else if (eleccion == 3) {
        alert(tipoJugador + "Ha elegido Tijera")
    } else {
        alert(tipoJugador + " Opcion Incorrecta")
    }
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eligiendoGanador(jugador, pc) {
    if (jugador == pc) {
    alert("empate")
    } else if (jugador == 1 && pc == 3) {
    alert("Has Ganado")
    } else if (jugador == 2 && pc == 1) {
    alert("Has Ganado")
    } else if (jugador == 3 && pc == 2) {
    alert("Has Ganado")
    }else {
    alert("Ha Ganado Skynet")
    }
}

//Uso de funciones
alertaEleccion("jmaster", eleccionDelJugador)

alertaEleccion("Skynet", eleccionDelPc)

eligiendoGanador(eleccionDelJugador, eleccionDelPc)