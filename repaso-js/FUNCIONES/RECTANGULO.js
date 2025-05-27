const anc=parseInt(prompt("Anchura del rectangulo: "))
const alt=parseInt(prompt("Altura del rectangulo: "))

let list_anc=[]
let list_alt=[]

function Anchura(anc){
    for(let i=0;i<anc;i++){
        list_anc=list_anc+"*"
    }
}
function altura(alt){
    for(let i=0;i<alt;i++){
        list_alt=list_alt+"*"
    }
}

console.log(Anchura(anc))