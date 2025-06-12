// seleccion de botones 
const boton_amp= document.querySelector(".cabecero__navegador__boton__amp")
const boton_osc= document.querySelector(".cabecero__navegador__boton__osc")
//seleccion clases modo oscuro
const cabecero=document.querySelector(".cabecero")
const principal1=document.querySelector(".principal__seccion1")
const boton_principal=document.querySelector(".principal__seccion1__boton")
const principal2=document.querySelector(".principal__seccion2")
const pie=document.querySelector(".pie")
const pie_seccion=document.querySelector(".pie__seccion")
const pie__seccion_listas=document.querySelector("pie_seccion__listas__titulo")


//funciones, event listener
boton_osc.addEventListener("click",function(){
    cabecero.classList.toggle("cabecero__oscuro")
    boton_amp.classList.toggle("cabecero__navegador__boton__amp__oscurecer")
    boton_osc.classList.toggle("cabecero__navegador__boton__osc__oscurecer")
    principal1.classList.toggle("principal__seccion1__osc")
    boton_principal.classList.toggle("principal__seccion1__boton__osc")
    principal2.classList.toggle("principal__seccion2__osc")
    pie.classList.toggle("pie__osc")
    pie_seccion.classList.toggle("pie__seccion__osc")
})

boton_amp.addEventListener("click",function(){

})