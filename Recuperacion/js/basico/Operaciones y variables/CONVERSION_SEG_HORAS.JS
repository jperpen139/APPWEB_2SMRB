const segundo= parseInt(prompt("Escriba una cantidad de segundos: "))

const segundos= segundo%60
const minutos= segundo/60
const hora= minutos/60
const minuto_entero= Math.trunc(minutos)
const hora_entero= Math.trunc(hora)

alert(segundo+" segundos son "+hora_entero+" horas "+minuto_entero +" minutos y "+ segundos+" segundos")