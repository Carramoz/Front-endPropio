let btnVenta = document.getElementsByClassName("btn")[0];
let btnRenta = document.getElementsByClassName("btn")[1];
let habitacional = document.getElementsByClassName("product-categories")[0];
let industrial = document.getElementsByClassName("product-categories")[1];
let recreacion = document.getElementsByClassName("product-categories")[2];
let comercial = document.getElementsByClassName("product-categories")[3];

btnVenta.addEventListener("click", (event)=>{
    event.preventDefault()
    btnVenta.classList.add("selected-button")
    btnRenta.classList.remove("selected-button")
    console.log("Exito!")
})

btnRenta.addEventListener("click", (event)=>{
    event.preventDefault()
    btnRenta.classList.add("selected-button")
    btnVenta.classList.remove("selected-button")
    console.log("Exito!")
})

habitacional.addEventListener("click", event=>{
    event.preventDefault();
    habitacional.classList.add("selected-category");
    industrial.classList.remove("selected-category");
    recreacion.classList.remove("selected-category");
    comercial.classList.remove("selected-category");

})

industrial.addEventListener("click", event=>{
    event.preventDefault();
    industrial.classList.add("selected-category");
    habitacional.classList.remove("selected-category");
    recreacion.classList.remove("selected-category");
    comercial.classList.remove("selected-category");

})

recreacion.addEventListener("click", event=>{
    event.preventDefault();
    recreacion.classList.add("selected-category");
    habitacional.classList.remove("selected-category");
    industrial.classList.remove("selected-category");
    comercial.classList.remove("selected-category");
})

comercial.addEventListener("click", event=>{
    event.preventDefault();
    comercial.classList.add("selected-category");
    habitacional.classList.remove("selected-category");
    industrial.classList.remove("selected-category");
    recreacion.classList.remove("selected-category");
})