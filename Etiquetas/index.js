function generateLabel(num) {
    
    let titulo = document.getElementById(`productName${num}`).value
    let cupon = document.getElementById(`price${num}`).value;
    let regular = document.getElementById(`regularPrice${num}`).value;
    let preciodescuento = regular - cupon;
    let numeroDescuento = Math.round((1-(preciodescuento/regular))*100);
    

    
    document.getElementById(`labelTitle${num}`).textContent = titulo;
    document.getElementById(`labelDiscount${num}`).textContent = (preciodescuento== regular)?'': `${numeroDescuento} %`;
    document.getElementById(`labelPrice${num}`).textContent = '$' + preciodescuento;
    document.getElementById(`labelValidity${num}`).textContent = "Hasta "+document.getElementById(`validity${num}`).value;
    document.getElementById(`labelMaxUnits${num}`).textContent = 'Máx ' + 10+ ' u.';
    document.getElementById(`labelRegularPrice${num}`).textContent = '$' + regular;
    document.getElementById(`labelUnitPrice${num}`).textContent = 'PRECIO X 1 :: ' + regular;
    document.getElementById(`labelContainer${num}`).style.display = 'block';
    
    (preciodescuento== regular)? document.getElementById(`price${num}`).style.display = "none" :"";
    document.getElementById(`form-${num}`).style.display = "none";
}
function Eliminar(num){
    document.getElementById(`form-${num}`).style.display = "none";
    document.getElementById(`labelContainer${num}`).style.display = "none";
}
function generatePrint() {
    document.getElementById(`boton-Impresion`).style.display = "none";
    document.getElementById(`Novedades`).style.display = "none";
    window.print();
   
}
function quitarDescuento(num){
    document.getElementById(`container-descuento${num}`).style.display = "none";
    document.getElementById(`price${num}`).style.display = "none";
    document.getElementById(`btn-quitar-descuento${num}`).style.display = "none";
    document.getElementById(`btn-agregar-descuento${num}`).style.display = "block";
}
function agregarDescuento(num){
    document.getElementById(`container-descuento${num}`).style.display = "block";
    document.getElementById(`price${num}`).style.display = "block";
    document.getElementById(`price${num}`).style.display = "block";
    document.getElementById(`btn-quitar-descuento${num}`).style.display = "block";
    document.getElementById(`btn-agregar-descuento${num}`).style.display = "none";
}
