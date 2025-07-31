// Array de enlaces
const fondo = "blue";
const dataMatrix = [
   {
    content: "https://forms.gle/bMcAcBVgDLGcn9Dj9",
    title: "Link nuevo -PAS-",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content:
      "https://docs.google.com/forms/d/e/1FAIpQLSfY41aHlsXRNVQs_hVqIfLQKzGsZ5B3ckJKRE-G--74ie0-_g/viewform",
    title: "Productos activos y sin precio",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },

  {
    content:
      "https://forms.gle/x15t9oBErY1jfWvh8",
    title: "Unificado bebida-marcaCarrefour Bulnes",
    img: "./assets/fondo.jfif",
    plataform: "Solo Pc",
  },
  {
    content:
      "https://docs.google.com/forms/d/e/1FAIpQLSfz_CdCLjbi_Sbjh5KVv2a1BqoLLNuQWpc5sKNTTTgshPofCg/viewform",
    title: "Formulario PFT",
    img: "./assets/fondo.jfif",
    plataform: "Celulares y Pc",
  },
  {
    content:
      "https://www.google.com/url?q=http://10.94.164.15:16000/pch/app/login&source=gmail&ust=1736510854998000&usg=AOvVaw3MO3Tcx22ajYVNxkB3LAXI",
    title: "Próximo Vto. Todos los días",
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
    plataform: "Solo Pc",
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
    content: "http://10.94.164.15:21000/cupones/cupones.do",
    title: "Consulta de Cupones",
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

    var svg = document.createElement("img");
    svg.src = "./Assets/imagenes/Carrefour512.png";
    svg.height= "250" ;
    svg.style.borderRadius = "8px";


    linkDiv.addEventListener("click", function () {
      window.open(enlace.content, '_blank');
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
