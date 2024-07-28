   // Array de enlaces
   const fondo = "blue"
   const dataMatrix = [
    { content: "https://docs.google.com/forms/d/e/1FAIpQLSfz_CdCLjbi_Sbjh5KVv2a1BqoLLNuQWpc5sKNTTTgshPofCg/viewform", title: "Formulario PFT", img: "fondo.jfif" },
    { content: "https://docs.google.com/forms/d/12Ua3a5JGHZMDenMAa8MCA6Pr7zZ10rRnAJBEue6wL-o/edit", title: "Próximo Vto. Todos los días", img: "fondo.jfif" },
    { content: "https://docs.google.com/forms/d/1tmRO9C1NIWhbb6rn6nXEwD9yamqHouxg5uetzrP1eNE/edit", title: "Bebidas Sábados a lunes", img: "fondo.jfif" },
    { content: "https://docs.google.com/forms/d/1YCbIKHxhz2ddark1U4fqWftVHtn75pZW5EtkTa1wIuw/edit", title: "Marca propia: sábados a lunes", img: "fondo.jfif" },
    { content: "https://docs.google.com/forms/d/e/1FAIpQLSfY41aHlsXRNVQs_hVqIfLQKzGsZ5B3ckJKRE-G--74ie0-_g/viewform", title: "Productos inactivos", img: "fondo.jfif" },
    { content: "https://docs.google.com/forms/d/e/1FAIpQLSfz_CdCLjbi_Sbjh5KVv2a1BqoLLNuQWpc5sKNTTTgshPofCg/viewform", title: "Panadería y fiambres", img: "fondo.jfif" },
    { content: "https://forms.gle/jSKSWfE83e1mjD3v9", title: "Vto 30-60-90", img: "fondo.jfif" },
    {content: "./Etiquetas/index.html", title: "Etiquetas Liquidación", img: "fondo.jfif"},
    ];


   // Función para recorrer los enlaces y mostrarlos en el HTML
   function mostrarEnlaces() {
       var container = document.getElementById("links-container");
       dataMatrix.forEach(function (enlace) {
        
           var linkDiv = document.createElement("div");
           linkDiv.classList.add("card"); // Agregar la clase de tarjeta al contenedor
            var contenedorBotonNombre = document.createElement("div")
            contenedorBotonNombre.classList.add("contenedor-blur");
            var nombreElement = document.createElement("p");
           nombreElement.textContent = enlace.title;
           var botonElement = document.createElement("button");
           botonElement.textContent = "Ir al enlace";
           botonElement.addEventListener("click", function () {
               window.location.href = enlace.content;
           });
           linkDiv.style.backgroundImage = `url(${enlace.img})`;
           linkDiv.style.backgroundSize = "cover"; 
           linkDiv.style.backgroundPosition = "center";
           linkDiv.style.backgroundRepeat = "no-repeat";
           //link.Div.appendChild(svgElement);
           contenedorBotonNombre.appendChild(nombreElement);
           contenedorBotonNombre.appendChild(botonElement);
           linkDiv.appendChild(contenedorBotonNombre);
           container.appendChild(linkDiv);
       });
   }

   // Ejecutar la función para mostrar los enlaces
   mostrarEnlaces();