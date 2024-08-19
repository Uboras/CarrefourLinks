// Array de enlaces
const fondo = "blue";
const dataMatrix = [
  {
    content:
      "https://docs.google.com/forms/d/e/1FAIpQLSfz_CdCLjbi_Sbjh5KVv2a1BqoLLNuQWpc5sKNTTTgshPofCg/viewform",
    title: "Formulario PFT",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content:
      "https://docs.google.com/forms/d/12Ua3a5JGHZMDenMAa8MCA6Pr7zZ10rRnAJBEue6wL-o/edit",
    title: "Próximo Vto. Todos los días",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content:
      "https://docs.google.com/forms/d/1tmRO9C1NIWhbb6rn6nXEwD9yamqHouxg5uetzrP1eNE/edit",
    title: "Bebidas Sábados a lunes",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content:
      "https://docs.google.com/forms/d/1YCbIKHxhz2ddark1U4fqWftVHtn75pZW5EtkTa1wIuw/edit",
    title: "Marca propia: sábados a lunes",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content:
      "https://docs.google.com/forms/d/e/1FAIpQLSfY41aHlsXRNVQs_hVqIfLQKzGsZ5B3ckJKRE-G--74ie0-_g/viewform",
    title: "Productos inactivos",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content:
      "https://docs.google.com/forms/d/e/1FAIpQLSfz_CdCLjbi_Sbjh5KVv2a1BqoLLNuQWpc5sKNTTTgshPofCg/viewform",
    title: "Panadería y fiambres",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content: "https://forms.gle/jSKSWfE83e1mjD3v9",
    title: "Vto 30-60-90",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content: "https://forms.gle/EUvSbrhKaSo7q7dg9",
    title: "Rescate - donación",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content: "https://drive.google.com/drive/u/0/folders/0AFqugPXOPe6AUk9PVA",
    title: "Contactos Frecuentes",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content: "https://www.ohgiftcard.com.ar/",
    title: "Consulta GiftCard",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content: "https://inccarrefourarg2021.my.salesforce.com/",
    title: "SALESFORCE",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content: "https://gtickets.carrefour.com.ar/frontend/",
    title: "Busqueda tickets caja",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content: "./Etiquetas/index.html",
    title: "Etiquetas Liquidación",
    img: "./assets/fondo.jfif",
    plataform: "Solo Pc",
  },
  {
    content: "http://10.22.176.13/cajas_oym/",
    title: "Portal de OyM",
    img: "./assets/fondo.jfif",
    plataform: "Solo  Pc",
  },
  {
    content: "http://10.22.176.13/promo_garantizada/tiendas/index.php",
    title: "Promo Garantizada",
    img: "./assets/fondo.jfif",
    plataform: "Solo en Pc",
  },
  {
    content: "http://10.94.164.15:21000/cupones/cupones.do",
    title: "Consulta de Cupones",
    img: "./assets/fondo.jfif",
    plataform: "Solo en Pc",
  },
  {
    content: "http://10.94.164.210:10000/stl/app/secure",
    title: "STL",
    img: "./assets/fondo.jfif",
    plataform: "Solo en Pc",
  }
];

// Función para recorrer los enlaces y mostrarlos en el HTML
function mostrarEnlaces() {
  var container = document.getElementById("links-container");
  dataMatrix.forEach(function (enlace) {
    var linkDiv = document.createElement("div");
    linkDiv.classList.add("card"); // Agregar la clase de tarjeta al contenedor
    var contenedorBotonNombre = document.createElement("div");
    contenedorBotonNombre.classList.add("contenedor-blur");
    var nombreElement = document.createElement("p");
    nombreElement.textContent = enlace.title;
    var plataform = document.createElement("p");
    plataform.innerHTML = enlace.plataform;
    plataform.classList.add("plataform");
    var svg = document.createElement("div");
    svg.innerHTML = `
        <svg width="125" height="75" viewBox="0 0 250 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Grupo general para aplicar animaciones -->
            <g clip-path="url(#clip0_236_2)" class="svg-group">
                <!-- Primer path rojo con clase para animación -->
                <path 
                d="M0 70.6759L62.5 -5.13516e-07C51.0417 31.7306 39.2354 39.2213 38.8885 70.6759C38.5417 102.131 62.5 150 62.5 150L0 70.6759Z" 
                fill="#ED1D21" 
                class="path-red" 
                />
                <!-- Segundo path azul con clase para animación -->
                <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M157.188 139.302C156.182 140.029 155.158 140.722 154.116 141.382C153.826 141.54 153.521 141.705 153.201 141.878C152.01 142.522 150.609 143.279 148.958 144.231C141.585 147.834 141.777 147.131 142.709 143.72C144.015 138.94 146.774 128.842 132.188 117.831C132.188 105.328 138.789 95.1924 146.931 95.1924C155.074 95.1924 162.877 105.54 161.675 117.831C161.317 121.496 161.079 124.477 160.884 126.926C160.364 133.442 160.145 136.195 158.746 138.065C158.652 138.19 158.553 138.311 158.449 138.429L157.188 139.302ZM158.449 138.429L250 75L157.188 10.6981C147.786 3.90644 136.773 0 125 0C90.4822 0 62.5 33.5786 62.5 75C62.5 116.421 90.4822 150 125 150C135.514 150 145.421 146.885 154.116 141.382C156.191 140.251 157.537 139.457 158.449 138.429ZM160.566 13.7663C162.736 16.7336 162.467 21.4855 162.467 35.9181C162.467 48.3953 154.886 58.2827 146.652 57.811C138.418 57.3394 132.148 46.7729 132.647 34.2101C147.816 24.0068 145.351 12.9826 144.132 7.52893C143.259 3.62457 143.024 2.57523 150.355 6.72605C155.914 10.309 158.932 11.5317 160.566 13.7663Z" 
                fill="#025BAA" 
                class="path-blue" 
                /> 
                </g>
                <P class="svg-text"></p>
            <defs>
                <clipPath id="clip0_236_2">
                    <rect width="250" height="170" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    `;
    svg.classList.add("svg-container");
    


    linkDiv.addEventListener("click", function () {
      window.location.href = enlace.content;
    });
    contenedorBotonNombre.appendChild(nombreElement);
    linkDiv.appendChild(svg);
    linkDiv.appendChild(plataform);
    linkDiv.appendChild(contenedorBotonNombre);
    container.appendChild(linkDiv);
  });
}

// Ejecutar la función para mostrar los enlaces
mostrarEnlaces();
