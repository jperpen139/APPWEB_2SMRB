const pies= parseInt(prompt("Escriba una cantidad de pies: "))
const pulgadas= parseInt(prompt("Escriba una cantidad de pulgadas: "))

const pulgada= 2.54
const pie= pies*12
const conversion_pie= pie*pulgada

const conversion_pulgadas= pulgadas*pulgada

const suma_de_conversiones= conversion_pie+ conversion_pulgadas

alert(pies + " pies"+ " y "+ pulgadas+ " pulgadas son "+ suma_de_conversiones)
