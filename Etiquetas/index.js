function generateLabel(num) {
    
    let cupon = ;
    let preciodescuento = document.getElementById(`regularPrice${num}`).value - cupon;
    let regular = document.getElementById(`regularPrice${num}`).value;
    let numeroDescuento = Math.round((1-(preciodescuento/regular))*100);
    console.log(numeroDescuento)
    document.getElementById(`labelTitle${num}`).textContent = document.getElementById(`productName${num}`).value;
    document.getElementById(`labelDiscount${num}`).textContent = numeroDescuento + "%";
    document.getElementById(`labelPrice${num}`).textContent = '$' + document.getElementById(`price${num}`).value;
    document.getElementById(`labelValidity${num}`).textContent = "Hasta "+document.getElementById(`validity${num}`).value;
    document.getElementById(`labelMaxUnits${num}`).textContent = 'Máx ' + document.getElementById(`maxUnits${num}`).value + ' u.';
    document.getElementById(`labelRegularPrice${num}`).textContent = '$' + document.getElementById(`regularPrice${num}`).value;
    document.getElementById(`labelUnitPrice${num}`).textContent = 'PRECIO X 1 :: ' + document.getElementById(`price${num}`).value;
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