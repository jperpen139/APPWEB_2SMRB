const val=parseInt(prompt("¿Cuantos valores va a introducir? "))






let minimo,maximo;
let suma=0




if (val < 0) {
    alert("¡Imposible!");
} else {
    for (let i = 0; i<val; i++) {
        const num1 = parseInt(prompt("Escriba el número " + (i + 1)))
        if(i==0){
            minimo = num1
            maximo =num1
        }else{
            if(num1 >= maximo){
                maximo= num1;
            }
            if(num1 <= minimo){
                minimo = num1;
            }
        }
    }
    suma=suma+num1
}




const media=suma/val


alert("La meida de los numeros introducidos es "+ media )
alert("El numero mas pequeño de los introducidos es "+ minimo)
alert("El numero mas grande de los introducidos es "+ maximo)