const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
    '<input type="text" id="input-title" value="¡Disfruta los Mejores Cómics!" oninput="updatePreview()">',
    '<input type="text" id="input-title" value="¡Disfruta {{servicio}} con {{operadora}}!" oninput="updatePreview()">\n                            <div style="margin-top: 8px; display: flex; gap: 5px; flex-wrap: wrap;">\n                                <span style="font-size: 10px; color: #64748b; margin-top: 4px;">Variables (Placeholders):</span>\n                                <button class="btn btn-outline" style="padding: 2px 6px; font-size: 10px; border-radius: 10px;" onclick="insertPlaceholder(\'input-title\', \'{{servicio}}\')" title="Inserta el nombre del servicio actual">+ {{servicio}}</button>\n                                <button class="btn btn-outline" style="padding: 2px 6px; font-size: 10px; border-radius: 10px;" onclick="insertPlaceholder(\'input-title\', \'{{operadora}}\')" title="Inserta el nombre de la operadora">+ {{operadora}}</button>\n                                <button class="btn btn-outline" style="padding: 2px 6px; font-size: 10px; border-radius: 10px;" onclick="insertPlaceholder(\'input-title\', \'{{precio}}\')" title="Inserta la tarifa actual">+ {{precio}}</button>\n                            </div>'
);

html = html.replace(
    '<input type="text" class="fixed-field" value="Suscribirse con obligación de pago" readonly id="input-btn-text" oninput="updatePreview()">',
    '<input type="text" value="Suscribirse a {{servicio}} por {{precio}}" id="input-btn-text" oninput="updatePreview()" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box;">\n                            <div style="margin-top: 5px; display: flex; gap: 5px; flex-wrap: wrap;">\n                                <span style="font-size: 10px; color: #64748b; margin-top: 4px;">Variables:</span>\n                                <button class="btn btn-outline" style="padding: 2px 6px; font-size: 10px; border-radius: 10px;" onclick="insertPlaceholder(\'input-btn-text\', \'{{servicio}}\')">+ {{servicio}}</button>\n                                <button class="btn btn-outline" style="padding: 2px 6px; font-size: 10px; border-radius: 10px;" onclick="insertPlaceholder(\'input-btn-text\', \'{{precio}}\')">+ {{precio}}</button>\n                            </div>'
);

fs.writeFileSync('index.html', html, 'utf8');
