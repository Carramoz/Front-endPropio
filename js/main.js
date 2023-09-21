let btnVenta = document.getElementsByClassName("btn")[0];
let btnRenta = document.getElementsByClassName("btn")[1];
let habitacional = document.getElementsByClassName("product-categories")[0];
let industrial = document.getElementsByClassName("product-categories")[1];
let recreacion = document.getElementsByClassName("product-categories")[2];
let comercial = document.getElementsByClassName("product-categories")[3];
let productsForSale = document.getElementById("productsForSale");
let productsForRent = document.getElementById("productsForRent");
let sale = true;
let rent = false;

function insertProductsSale() {
        productsForSale.insertAdjacentHTML("afterbegin", `<div class="card">
        <img src="https://images.adsttc.com/media/images/623c/4fa0/3e4b/3145/3000/001b/newsletter/_d_ambrosio_07._copy.jpg?1648119692" alt="">
        <h4>Casa habitación</h4>
        <h5>$2,000,000</h5>
        <h5>Toluca, Estado de México</h5>
        <p>Bonita casa ubicada en Toluca, México.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://arqzon.com.mx/wp-content/uploads/2021/02/9-scaled.jpg" alt="">
        <h4>Casa habitación</h4>
        <h5>$30,000/mes</h5>
        <h5>Monterrey, Nvo. León</h5>
        <p>Casa para vivir con comfort.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://arqzon.com.mx/wp-content/uploads/2021/02/9-scaled.jpg" alt="">
        <h4>Casa habitación</h4>
        <h5>$30,000/mes</h5>
        <h5>Monterrey, Nvo. León</h5>
        <p>Casa para vivir con comfort.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://images.adsttc.com/media/images/623c/4fa0/3e4b/3145/3000/001b/newsletter/_d_ambrosio_07._copy.jpg?1648119692" alt="">
        <h4>Casa habitación</h4>
        <h5>$2,000,000</h5>
        <h5>Toluca, Estado de México</h5>
        <p>Bonita casa ubicada en Toluca, México.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://arqzon.com.mx/wp-content/uploads/2021/02/9-scaled.jpg" alt="">
        <h4>Casa habitación</h4>
        <h5>$30,000/mes</h5>
        <h5>Monterrey, Nvo. León</h5>
        <p>Casa para vivir con comfort.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://arqzon.com.mx/wp-content/uploads/2021/02/9-scaled.jpg" alt="">
        <h4>Casa habitación</h4>
        <h5>$30,000/mes</h5>
        <h5>Monterrey, Nvo. León</h5>
        <p>Casa para vivir con comfort.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://arqzon.com.mx/wp-content/uploads/2021/02/9-scaled.jpg" alt="">
        <h4>Casa habitación</h4>
        <h5>$30,000/mes</h5>
        <h5>Monterrey, Nvo. León</h5>
        <p>Casa para vivir con comfort.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://images.adsttc.com/media/images/623c/4fa0/3e4b/3145/3000/001b/newsletter/_d_ambrosio_07._copy.jpg?1648119692" alt="">
        <h4>Casa habitación</h4>
        <h5>$2,000,000</h5>
        <h5>Toluca, Estado de México</h5>
        <p>Bonita casa ubicada en Toluca, México.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://arqzon.com.mx/wp-content/uploads/2021/02/9-scaled.jpg" alt="">
        <h4>Casa habitación</h4>
        <h5>$30,000/mes</h5>
        <h5>Monterrey, Nvo. León</h5>
        <p>Casa para vivir con comfort.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://arqzon.com.mx/wp-content/uploads/2021/02/9-scaled.jpg" alt="">
        <h4>Casa habitación</h4>
        <h5>$30,000/mes</h5>
        <h5>Monterrey, Nvo. León</h5>
        <p>Casa para vivir con comfort.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://arqzon.com.mx/wp-content/uploads/2021/02/9-scaled.jpg" alt="">
        <h4>Casa habitación</h4>
        <h5>$30,000/mes</h5>
        <h5>Monterrey, Nvo. León</h5>
        <p>Casa para vivir con comfort.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://images.adsttc.com/media/images/623c/4fa0/3e4b/3145/3000/001b/newsletter/_d_ambrosio_07._copy.jpg?1648119692" alt="">
        <h4>Casa habitación</h4>
        <h5>$2,000,000</h5>
        <h5>Toluca, Estado de México</h5>
        <p>Bonita casa ubicada en Toluca, México.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://arqzon.com.mx/wp-content/uploads/2021/02/9-scaled.jpg" alt="">
        <h4>Casa habitación</h4>
        <h5>$30,000/mes</h5>
        <h5>Monterrey, Nvo. León</h5>
        <p>Casa para vivir con comfort.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>`)
    }

    function insertProductsRent() {
        productsForRent.insertAdjacentHTML("afterbegin", `
    <div class="card">
        <img src="https://aceroscrea.com/wp-content/uploads/2023/01/vista-interior-de-una-nave-industrial-construida-con-perfiles-y-paneles.jpg" alt="">
        <h4>Nave industrial</h4>
        <h5>$10,000,000</h5>
        <h5>Queretaro, Queretaro</h5>
        <p>Espaciosa nave industrial multiusos.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://irp.cdn-website.com/f540bda2/MOBILE/jpg/035.jpg" alt="">
        <h4>Salón de fiestas</h4>
        <h5>$100,000/evento</h5>
        <h5>Valle de Bravo, México.</h5>
        <p>Salón para eventos multiusos.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://irp.cdn-website.com/f540bda2/MOBILE/jpg/035.jpg" alt="">
        <h4>Salón de fiestas</h4>
        <h5>$100,000/evento</h5>
        <h5>Valle de Bravo, México.</h5>
        <p>Salón para eventos multiusos.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://aceroscrea.com/wp-content/uploads/2023/01/vista-interior-de-una-nave-industrial-construida-con-perfiles-y-paneles.jpg" alt="">
        <h4>Nave industrial</h4>
        <h5>$10,000,000</h5>
        <h5>Queretaro, Queretaro</h5>
        <p>Espaciosa nave industrial multiusos.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://irp.cdn-website.com/f540bda2/MOBILE/jpg/035.jpg" alt="">
        <h4>Salón de fiestas</h4>
        <h5>$100,000/evento</h5>
        <h5>Valle de Bravo, México.</h5>
        <p>Salón para eventos multiusos.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://irp.cdn-website.com/f540bda2/MOBILE/jpg/035.jpg" alt="">
        <h4>Salón de fiestas</h4>
        <h5>$100,000/evento</h5>
        <h5>Valle de Bravo, México.</h5>
        <p>Salón para eventos multiusos.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://aceroscrea.com/wp-content/uploads/2023/01/vista-interior-de-una-nave-industrial-construida-con-perfiles-y-paneles.jpg" alt="">
        <h4>Nave industrial</h4>
        <h5>$10,000,000</h5>
        <h5>Queretaro, Queretaro</h5>
        <p>Espaciosa nave industrial multiusos.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://irp.cdn-website.com/f540bda2/MOBILE/jpg/035.jpg" alt="">
        <h4>Salón de fiestas</h4>
        <h5>$100,000/evento</h5>
        <h5>Valle de Bravo, México.</h5>
        <p>Salón para eventos multiusos.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>
    <div class="card">
        <img src="https://irp.cdn-website.com/f540bda2/MOBILE/jpg/035.jpg" alt="">
        <h4>Salón de fiestas</h4>
        <h5>$100,000/evento</h5>
        <h5>Valle de Bravo, México.</h5>
        <p>Salón para eventos multiusos.</p>
        <span><h6>R</h6><h6>B</h6><h6>M</h6><h6>A</h6></span>
        <button>Ver más</button>
    </div>`)
    }

console.log(sale);
insertProductsSale();
insertProductsRent();

btnVenta.addEventListener("click", (event)=>{
    event.preventDefault()
    btnVenta.classList.add("selected-button")
    btnRenta.classList.remove("selected-button")
    sale = true;
    rent = false;
    if(sale === true && rent === false){
        productsForRent.classList.add("display-none")
        productsForSale.classList.remove("display-none");
    };
    console.log("Exito!")
})

btnRenta.addEventListener("click", (event)=>{
    event.preventDefault()
    btnRenta.classList.add("selected-button")
    btnVenta.classList.remove("selected-button")
    sale = false;
    rent = true;
    if(sale === false && rent === true){
        productsForRent.classList.remove("display-none");
        productsForSale.classList.add("display-none");
    };
    console.log("Exito!")
})


habitacional.addEventListener("click", event=>{
    event.preventDefault();
    habitacional.classList.add("selected-category");
    industrial.classList.remove("selected-category");
    recreacion.classList.remove("selected-category");
    comercial.classList.remove("selected-category");
    if(sale === true){

    }

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