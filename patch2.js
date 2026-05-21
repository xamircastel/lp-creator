const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldCode =             const titletext = document.getElementById('input-title').value;
            let btnText = document.getElementById('input-btn-text').value;
            const showCookies = document.getElementById('input-cookies').checked;

            const previewBg = document.getElementById('preview-bg');
            previewBg.style.backgroundColor = bgColor;
            previewBg.style.color = textColor;

            const previewBtn = document.getElementById('preview-btn');
            previewBtn.style.backgroundColor = btnColor;
            previewBtn.style.color = btnTextColor;

            document.getElementById('preview-title').innerText = titletext || 'TÍTULO VACÍO';
            document.getElementById('preview-cookie').style.display = showCookies ? 'block' : 'none';;

const newCode =             const rawTitleText = document.getElementById('input-title').value;
            let rawBtnText = document.getElementById('input-btn-text').value;
            const showCookies = document.getElementById('input-cookies').checked;

            const previewBg = document.getElementById('preview-bg');
            previewBg.style.backgroundColor = bgColor;
            previewBg.style.color = textColor;

            const previewBtn = document.getElementById('preview-btn');
            previewBtn.style.backgroundColor = btnColor;
            previewBtn.style.color = btnTextColor;

            // Función interna para reemplazar placeholders
            const processPlaceholders = (text) => {
                if (!text) return '';
                const opName = document.getElementById('ctx-operadora').innerText;
                const paisName = document.getElementById('ctx-pais').innerText;
                // Obtenemos valores mockeados basados en contexto
                const isNew = document.getElementById('ctx-id').innerText.includes('NUEVO');
                const servName = isNew ? "e-comics" : "fitlife"; 
                const priceMatch = document.getElementById('locked-tarifa') ? document.getElementById('locked-tarifa').value : "2,99€ / Semana";

                return text.replace(/\\{\\{operadora\\}\\}/gi, opName)
                           .replace(/\\{\\{servicio\\}\\}/gi, servName)
                           .replace(/\\{\\{precio\\}\\}/gi, priceMatch);
            };

            document.getElementById('preview-title').innerText = processPlaceholders(rawTitleText) || 'TÍTULO VACÍO';
            document.getElementById('preview-cookie').style.display = showCookies ? 'block' : 'none';
            document.getElementById('preview-btn').innerText = processPlaceholders(rawBtnText) || 'Suscribirse';;

html = html.replace(oldCode, newCode);

html = html.replace("        function switchView(viewName) {", "        function insertPlaceholder(inputId, placeholder) {\\n            const el = document.getElementById(inputId);\\n            el.value = el.value + ' ' + placeholder;\\n            updatePreview();\\n        }\\n\\n        function switchView(viewName) {");

fs.writeFileSync('index.html', html, 'utf8');
