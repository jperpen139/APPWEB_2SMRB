const listas= parseInt(prompt("¿Cuantas listas quiere escribir? "))

for(let i=0;i<listas;i++){
    let alm_pal=[]
    let list_pal=parseInt(prompt("Digame cuantas palabras tiene la lista:"+ (i+1)))
    for(let j=0; j<list_pal;j++){
        let pal= prompt("Digame la palabra "+ (j+1))
        alm_pal.push(pal)
    }
    console.log("La lista "+i +"es"+ alm_pal)
}