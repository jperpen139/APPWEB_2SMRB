const año=parseInt(prompt("Escriba un año y le dire si es bisiesto: "))


if(año%4 ==0 & año%100 ==0 & año%400 ==0){
    alert("El año"+ año+"es un año bisiesto porque es multiplo de 400.")
}else if(año %4 == 0 & año %100 !=0){
    alert("Es bisiesto porque es multiplo de 4 sin ser multiplo de 100.")
}else if (año %4 == 0 &año % 100==0 & año %400 !=0){
    alert(año+"no es un año bisiesto porque es multiplo de 100 sin ser multiplo de 400.");
}else{
    alert("el año"+ año +"noe sun año bisiesto porque no es multiplo de 4.")
}