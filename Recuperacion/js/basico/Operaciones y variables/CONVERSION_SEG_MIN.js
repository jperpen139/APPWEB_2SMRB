const segundos= parseInt(prompt("Escriba una cantidad de segundos: "))

const minutos_segundos= segundos%60
const segundos_minutos= segundos/60
const minuto_entero= Math.trunc(segundos_minutos)


alert(segundos+" segundos son "+minuto_entero +" minutos y "+ minutos_segundos+" segundos")
