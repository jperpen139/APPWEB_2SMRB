const num= parseInt(prompt("Escriba un num: "))
const num_pos= parseInt(prompt("Escriba un num posterior a "+ num+" :"))

let cont=0
let años_bisiestos= 0

function años_bis(num){
    if(num%4 ==0 & num%100 ==0 & num%400 ==0){
    return true
}else if(num %4 == 0 & num %100 !=0){
    return true
}else if (num %4 == 0 &num % 100==0 & num %400 !=0){
    return false
}else{
    return false
}
}

while( num_pos<= num){
    alert(num_pos+" no es mator que "+ num)
    num_pos= parseInt(prompt("Intentelo de nuevo: "))
}



for(let i= num; i<=num_pos;i++){
    cont++;


    años_bisiestos= años_bisiestos + años_bis(i);


}


alert("De "+ num +" a "+ num_pos+ " hay "+ cont+", " + años_bisiestos+" de ellos bisiestos")

