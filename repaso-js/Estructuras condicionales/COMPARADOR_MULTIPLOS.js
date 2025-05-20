const num1= parseInt(prompt("Escriba un numero: "))
const num2= parseInt(prompt("Escriba otro numero: "))


if(num1 >= num2){
    if(num2 ==0 || num1==0){
        alert("Lo siento. este programa no admite valores nulos")
    }else if(num2 < 0 || num1 <0){
        alert("Lo siento, no se adminten valores negativos")
    }else{
        if(num1%num2 ==0){
            alert(num1+"es multiplo de"+num2)
        }else{
            alert(num1+"no es multiplo de"+ num2)
        }
    }
}else{
    if(num2 ==0 || num1==0){
        alert("Lo siento. este programa no admite valores nulos")
    }else if(num2 < 0 || num1 <0){
        alert("Lo siento, no se adminten valores negativos")
    }else{
        if(num1%num2 ==0){
            alert(num1+"es multiplo de"+num2)
        }else{
            alert(num1+"no es multiplo de"+ num2)
        }
    }

}