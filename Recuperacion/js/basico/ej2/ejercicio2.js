const frase= prompt("Introduca frase: ")
let lista_letra=[]
// funcion
function capitalizar(caden){
    let cadena = caden[0].toUpperCase();
    for(let i=1;i<caden.length;i++){
        cadena += caden[i].toLowerCase();
    }lista_letra.push(cadena);
}console.log(lista_letra)
console.log(capitalizar(frase))