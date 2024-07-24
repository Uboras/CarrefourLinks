function generateLabel(num) {
    document.getElementById(`labelTitle${num}`).textContent = document.getElementById(`productName${num}`).value;
    document.getElementById(`labelDiscount${num}`).textContent = document.getElementById(`discount${num}`).value + "%";
    document.getElementById(`labelPrice${num}`).textContent = '$' + document.getElementById(`price${num}`).value;
    document.getElementById(`labelValidity${num}`).textContent = document.getElementById(`validity${num}`).value;
    document.getElementById(`labelMaxUnits${num}`).textContent = 'Máx ' + document.getElementById(`maxUnits${num}`).value + ' u.';
    document.getElementById(`labelRegularPrice${num}`).textContent = '$' + document.getElementById(`regularPrice${num}`).value;
    document.getElementById(`labelUnitPrice${num}`).textContent = 'PRECIO X 1 L:: ' + document.getElementById(`unitPrice${num}`).value;
    document.getElementById(`labelContainer${num}`).style.display = 'block';

    document.getElementById(`form-${num}`).style.display = "none";
    
}
function Eliminar(num){
    document.getElementById(`form-${num}`).style.display = "none";
    document.getElementById(`labelContainer${num}`).style.display = "none";
}
function generatePrint() {
    //document.getElementById(`boton-Impresion`).style.display = "none";
    window.print();

}