// seleccion de botones 
const boton_amp= document.querySelector(".cabecero__navegador__boton__amp")
const boton_osc= document.querySelector(".cabecero__navegador__boton__osc")
//seleccion clases modo oscuro
const cabecero=document.querySelector(".cabecero")
const principal1=document.querySelector(".principal__seccion1")
const principal2=document.querySelector(".principal__seccion2")
const pie=document.querySelector(".pie")

//funciones, event listener
boton_osc.addEventListener("click",function(){
    cabecero.classList.add("cabecero__oscuro")
    
    
})