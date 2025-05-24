const val=parseInt(prompt("¿Cuantos valores va a introducir? "))

let list_num=[]

let suma=0


if (val < 0) {
    alert("¡Imposible!");
} else {
    for (let i = 0; i<val; i++) {
        const num1 = parseInt(prompt("Escriba el número " + (i + 1)))
        list_num.push(num1)
        suma=suma+num1
    }
}


const media=suma/val
const minimo=Math.min(...list_num)
const maximo=Math.max(...list_num)
alert("La meida de los numeros introducidos es "+ media )
alert("El numero mas pequeño de los introducidos es "+ minimo)
alert("El numero mas grande de los introducidos es "+ maximo)