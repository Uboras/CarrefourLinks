function generateLabel(num) {
    let titulo = document.getElementById(`productName${num}`).value
    let cupon = document.getElementById(`price${num}`).value;
   console.log(cupon);
    let regular = document.getElementById(`regularPrice${num}`).value;
    let preciodescuento = regular - cupon;
    let numeroDescuento = Math.round((1-(preciodescuento/regular))*100);
    


    document.getElementById(`labelTitle${num}`).textContent = titulo;
    document.getElementById(`labelDiscount${num}`).textContent = numeroDescuento + "%";
    document.getElementById(`labelPrice${num}`).textContent = '$' + preciodescuento;
    document.getElementById(`labelValidity${num}`).textContent = "Hasta "+document.getElementById(`validity${num}`).value;
    document.getElementById(`labelMaxUnits${num}`).textContent = 'Máx ' + 10+ ' u.';
    document.getElementById(`labelRegularPrice${num}`).textContent = '$' + regular;
    document.getElementById(`labelUnitPrice${num}`).textContent = 'PRECIO X 1 :: ' + regular;
    document.getElementById(`labelContainer${num}`).style.display = 'block';

    document.getElementById(`form-${num}`).style.display = "none";
    
}
function Eliminar(num){
    document.getElementById(`form-${num}`).style.display = "none";
    document.getElementById(`labelContainer${num}`).style.display = "none";
}
function generatePrint() {
    
    window.print();

}