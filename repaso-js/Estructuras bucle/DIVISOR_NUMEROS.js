const num_ent=parseInt(prompt("Escriba un número mayor que cero: "))

let list_div=[];
if(num_ent<=0){
    alert("¡Le he pedido un número entero mayor que cero!")
}else{
    for(let i= 1;i<=num_ent;i++){
        if(num_ent%i ===0){
            list_div=list_div + i;
        }
    }
}
console.log("Los divisores de "+ num_ent+" son "+ list_div)