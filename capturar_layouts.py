import csv
import os
from time import sleep
from playwright.sync_api import sync_playwright

def main():
    csv_file = 'lp actuales.csv'
    output_dir = 'layouts_capturados'
    
    # Crear directorio principal si no existe
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    with open(csv_file, mode='r', encoding='utf-8') as file:
        # El separador en tu archivo CSV es el punto y coma (;)
        reader = csv.DictReader(file, delimiter=';')
        
        print("Iniciando el motor de navegacion...")
        with sync_playwright() as p:
            # Emularemos un iPhone 13, ya que los servicios VAS están enfocados 100% en dispositivos móviles.
            # Esto nos dará una vista realista de cómo ve el usuario la Landing Page.
            dispositivo_movil = p.devices['iPhone 13']
            browser = p.chromium.launch(headless=True) # headless=True para que corra en segundo plano sin abrir ventanas
            context = browser.new_context(**dispositivo_movil)
            page = context.new_page()
            
            for index, row in enumerate(reader):
                pais = row.get('pais', 'desc').strip().lower()
                operadora = row.get('operadora', 'desc').strip().lower()
                url = row.get('Landing page', '').strip()
                
                if not url:
                    continue
                    
                print(f"[{index + 1}] Visitando: {pais.capitalize()} - {operadora.capitalize()} -> {url}")
                
                # Crear estructura de carpetas: layouts_capturados/pais/operadora/
                save_path = os.path.join(output_dir, pais, operadora)
                if not os.path.exists(save_path):
                    os.makedirs(save_path)
                
                # Nombre seguro para el archivo de imagen
                filename = f"layout_{index + 1}.png"
                filepath = os.path.join(save_path, filename)
                
                try:
                    # Entramos a la URL (timeout de 15 segundos para no quedarnos pegados si una LP está caída)
                    # wait_until='networkidle' asegura que la página cargue los assets y scripts principales
                    page.goto(url, timeout=15000, wait_until='networkidle')
                    
                    # Damos 2 segundos extra por si hay animaciones o modales de cookies (como en España) que tarden en renderizar
                    sleep(2)
                    
                    # Tomar captura de pantalla de toda la página (scrolling completo)
                    page.screenshot(path=filepath, full_page=True)
                    print(f"  -> Éxito. Captura guardada en: {filepath}")
                    
                except Exception as e:
                    print(f"  -> ERROR al capturar {url}: No se pudo cargar correctamente.")
                    
            browser.close()
            print("\nProceso finalizado. Todas las capturas validas se han guardado.")

if __name__ == '__main__':
    main()
