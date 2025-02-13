const color=["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White", "Gray", "Cyan", "Magenta", "Lime", "Teal", "Indigo", "Violet", "Gold", "Silver", "Beige"]

    


const cambiar_color=document.getElementsByClassName("boton__clickme")

cambiar_color.addEventListener("click", function(){
    const Colorrandom = color[Math.floor(Math.random() * color.length)];
    document.body.style.backgroundColor = Colorrandom;
});
