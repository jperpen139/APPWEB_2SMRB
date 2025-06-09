const num_dia = parseInt(prompt("Digame un numero de dias: "))
const num_hora = parseInt(prompt("Digame un numero de horas:"))
const num_min= parseInt(prompt("Digame un numero de minutos: "))
const num_seg= parseInt(prompt("Digame un numero de segundos: "))

function conversion_seg(num_dia,num_hora,num_min,num_seg){
    dia_seg= num_dia*86400
    hor_seg=num_hora*3600
    min_seg=num_min*60
    total=dia_seg+hor_seg+min_seg+num_seg
    console.log(num_dia+" dias, "+num_hora+" horas, "+num_min+" minutos y "+num_seg+" segundos son "+total+" segundos")
}


conversion_seg(num_dia,num_hora,num_min,num_seg)