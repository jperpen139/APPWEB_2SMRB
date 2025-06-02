const num_par=parseInt(prompt("Escriba un numero par: "))

if (num_par %2 ==0){
    const num_impar=parseInt(prompt("Escriba un numero impar: "))

    if(num_impar%2 !=0){
        alert("No ha escrito un numero impar")
        alert("Vuelva a ejecutar el programa")
    }else{
        alert("Gracias por su colaboracion")
    }
        
}else{
    alert("No ha escrito un nuemro par")
    alert("Vuelva a ejecutar el programa")
}
