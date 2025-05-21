const peso= parseInt(prompt("¿Cuanto pesa?: "))
const altura= parseFloat(prompt("¿Cuanto mide en metros?: "))

const imc= peso/altura^2

alert("Su imc es " + imc);

if(imc >=25)
    alert("Un imc muy alto indica obesidad. Los valores normales de imc estan entre 20 y 25, pero esos limites dependen de la edad, del sexo, de la constitucion fisica, etc.")