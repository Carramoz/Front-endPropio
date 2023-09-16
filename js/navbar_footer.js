let navbar = document.getElementById("navbar");
let footer = document.getElementById("footer");

navbar.insertAdjacentHTML("afterbegin", `<a href="./index.html"><img src="./src/Propiologo.png" alt=""></a>
<ul>
    <li><a href="./inmuebles.html">Inmuebles</a></li>
    <li><a href="./contacto.html">Contacto</a></li>
    <li><a href="">Inicia Sesion</a></li>
    <li><a href="./registro.html">Registrate</a></li>
</ul>`);

footer.insertAdjacentHTML("afterbegin", `<span><a href="./index.html"><img src="./src/Propiologo.png" alt=""></a><p>Todos los derechos reservados 2023 ©</p></span>
<ul>
    <li><a href="./inmuebles.html">Inmuebles</a></li>
    <li><a href="./contacto.html">Contacto</a></li>
    <li><a href="">Inicia Sesion</a></li>
    <li><a href="./registro.html">Registrate</a></li>
</ul>
<ul id="redes">
    <li><a href="https://www.facebook.com/"><i class="bi bi-facebook"></i></a></li>
    <li><a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a></li>
    <li><a href="https://twitter.com/?lang=es"><i class="bi bi-twitter"></i></a></li>
    <li><a href="https://www.youtube.com/"><i class="bi bi-youtube"></i></a></li>
    <li><a href="https://www.linkedin.com/"><i class="bi bi-linkedin"></i></a></li>
    <li><a href="https://www.tiktok.com/es/"><i class="bi bi-tiktok"></i></a></li>
</ul>`)