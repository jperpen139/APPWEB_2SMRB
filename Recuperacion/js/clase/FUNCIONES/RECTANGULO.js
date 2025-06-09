

const anc=parseInt(prompt("Anchura del rectangulo: "))
const alt=parseInt(prompt("Altura del rectangulo: "))




function rectangulo(anc){
    let lista_anc=""
    for(let i=0;i<anc;i++){
        lista_anc=lista_anc+"* "
    }
    console.log(lista_anc)
    
}

for(let i=0;i<alt;i++){
    rectangulo(anc)
}


