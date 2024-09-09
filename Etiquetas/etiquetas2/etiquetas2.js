document.addEventListener('DOMContentLoaded', function() {
    let etiquetaCounter = 1;
    const numberOfLabels = 2;

    for (let i = 1; i <= numberOfLabels; i++) {
        const newLabelHtml = `
        <div id="etiquetas">
            <div id="form-${etiquetaCounter}" class="form-container">
                <form id="priceLabelForm">
                    <div class="form-group">
                        <input placeholder="Nombre del producto" type="text" id="productName${etiquetaCounter}" name="productName" required>
                    </div>
                    <div class="form-group">
                        <input placeholder="Cupón de descuento" type="text" id="price${etiquetaCounter}" name="price">
                        <button id="btn-quitar-descuento${etiquetaCounter}" onclick="quitarDescuento(event,${etiquetaCounter})">Quitar descuento</button>
                        <button style="display: none;" id="btn-agregar-descuento${etiquetaCounter}" onclick="agregarDescuento(event,${etiquetaCounter})">Agregar descuento</button>
                    </div>
                    <div class="form-group">
                        <input placeholder="Validez" type="text" id="validity${etiquetaCounter}" name="validity" required>
                    </div>
                    <div class="form-group">
                        <input placeholder="Precio Normal" type="text" id="regularPrice${etiquetaCounter}" name="regularPrice" required>
                    </div>
                    <div class="form-group">
                        <button type="button" onclick="generateLabel(${etiquetaCounter})">Generar Etiqueta</button>
                        <button type="button" onclick="Eliminar(${etiquetaCounter})">Eliminar Etiqueta</button>
                    </div>
                </form>
            </div>

            <div class="label-container" id="labelContainer${etiquetaCounter}" style="display: block;">
                <div class="Liquidacion">CONSUMO INMEDIATO</div>
                <div class="title" contenteditable="true" id="labelTitle${etiquetaCounter}"></div>
                <div style="display: flex; justify-content: space-around;">
                    <div id="container-descuento${etiquetaCounter}" class="discount-box">
                        <div class="discount" id="labelDiscount${etiquetaCounter}" contenteditable="true"></div>
                        <div>DESCUENTO</div>
                    </div>
                    <div class="discount-price">
                        <div class="price" id="labelPrice${etiquetaCounter}" contenteditable="true"></div>
                        <div class="small-text" contenteditable="true" id="labelValidity${etiquetaCounter}"></div>
                        <div class="small-text"  contenteditable="true" id="labelMaxUnits${etiquetaCounter}"></div>
                    </div>
                    <div class="regular-price">
                        <div>PRECIO NORMAL</div>
                        <div class="price-regular" id="labelRegularPrice${etiquetaCounter}" contenteditable="true"></div>
                        <div class="small-text" id="labelUnitPrice${etiquetaCounter}" contenteditable="true"></div>
                    </div>

                </div>
            </div>
        </div>
        `;
        
        document.getElementById('etiquetasContainer2').insertAdjacentHTML('beforeend', newLabelHtml);
        etiquetaCounter++;
        
    }
   
});
