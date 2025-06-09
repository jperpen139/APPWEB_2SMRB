const frase= prompt("Digfame algo: ")

function palindorma(frase){
    pal=[]
    for(let i=0;i<frase;i++){
        i=i+""
        pal.remove(i)
    }
    console.log(pal)
}