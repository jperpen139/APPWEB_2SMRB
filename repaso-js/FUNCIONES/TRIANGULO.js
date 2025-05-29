const anchura= parseInt(prompt("Anchura del triangulo: "))
const txt= document.querySelector("p")
function rectangulo(anc){
    let lista_anc=""
    for(let i=0;i<anc;i++){
        lista_anc=lista_anc+"* "
    }
    return lista_anc
    
}

function crear_triangulo(anchura){
    let texto=""
    for(let i=1;i<= anchura;i++){
       texto= texto+"<br>"+rectangulo(i) 
    }for(let i=anchura-1;i >= anchura;i--){
       texto= texto+"<br>"+rectangulo(i) 
    }
    txt.innerHTML= texto
}

crear_triangulo(anchura)