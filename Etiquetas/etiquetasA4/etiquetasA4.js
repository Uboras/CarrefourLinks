document.addEventListener("DOMContentLoaded", function () {
  let etiquetaCounter = 1;

  const form = `
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
            </div>`;

  const eti = `
            <div class="label-containera4" id="labelContainer${etiquetaCounter}" style="display: block;">
                <div class="Liquidaciona4">CONSUMO INMEDIATO</div>
                <div class="titlea4" contenteditable="true" id="labelTitle${etiquetaCounter}"></div>
                 <div class="discount-pricea4">
                        <div class="pricea4" id="labelPrice${etiquetaCounter}" contenteditable="true"></div>
                <div style="display: flex; justify-content: space-around;">
                        <div class="small-texta4" contenteditable="true" id="labelValidity${etiquetaCounter}"></div>
                        <div class="small-texta4" contenteditable="true" id="labelMaxUnits${etiquetaCounter}"></div>
                        </div>
                    </div>
                <div style="display: flex; margin:60px auto ; justify-content: space-around;">
                    <div id="container-descuento${etiquetaCounter}" class="discount-boxa4">
                        <div class="discounta4" id="labelDiscount${etiquetaCounter}" contenteditable="true"> </div>
                        <div class="labeldescuento">DESCUENTO</div>
                    </div>
                   
                    <div class="regular-pricea4">
                        <div>PRECIO NORMAL</div>
                        <div class="price-regulara4" id="labelRegularPrice${etiquetaCounter}" contenteditable="true"></div>
                        <div class="small-texta4" id="labelUnitPrice${etiquetaCounter}" contenteditable="true"></div>
                    </div>
                </div>
            </div>
            </div>
             `;

  let suma = "";
  suma += form;
  suma += eti;

  etiquetaCounter++;
  const form1 = `
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
         </div>`;

  const eti1 = `
         <div class="label-containera4" id="labelContainer${etiquetaCounter}" style="display: block;">
             <div class="Liquidaciona4">CONSUMO INMEDIATO</div>
             <div class="titlea4" contenteditable="true" id="labelTitle${etiquetaCounter}"></div>
              <div class="discount-pricea4">
                     <div class="pricea4" id="labelPrice${etiquetaCounter}" contenteditable="true"></div>
             <div style="display: flex; justify-content: space-around;">
                     <div class="small-texta4" contenteditable="true" id="labelValidity${etiquetaCounter}"></div>
                     <div class="small-texta4" contenteditable="true" id="labelMaxUnits${etiquetaCounter}"></div>
                     </div>
                 </div>
             <div style="display: flex; margin:60px auto ; justify-content: space-around;">
                 <div id="container-descuento${etiquetaCounter}" class="discount-boxa4">
                     <div class="discounta4" id="labelDiscount${etiquetaCounter}" contenteditable="true"> </div>
                     <div class="labeldescuento">DESCUENTO</div>
                 </div>
                
                 <div class="regular-pricea4">
                     <div>PRECIO NORMAL</div>
                     <div class="price-regulara4" id="labelRegularPrice${etiquetaCounter}" contenteditable="true"></div>
                     <div class="small-texta4" id="labelUnitPrice${etiquetaCounter}" contenteditable="true"></div>
                 </div>
             </div>
        </div>
            </div>`;
  suma += form1;
  suma += eti1;
   document
    .getElementById("etiquetasContainerA4")
    .insertAdjacentHTML("beforeend", suma);
});
