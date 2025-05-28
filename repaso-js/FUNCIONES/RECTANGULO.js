

const anc=parseInt(prompt("Anchura del rectangulo: "))
const alt=parseInt(prompt("Altura del rectangulo: "))

let lista_anc=""


function rectangulo(anc){
    
    for(let i=0;i<anc;i++){
        lista_anc=lista_anc+"* "
        
    }
    console.log(lista_anc)
    
}

for(let i=0;i<alt;i++){
    rectangulo(anc)
}


