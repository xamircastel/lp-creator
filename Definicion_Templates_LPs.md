# Guía de Definición de Templates: Estructura y Layouts de Landing Pages por País y Operadora

Este documento consolida la estructura visual y funcional de las Landing Pages (LPs) actuales capturadas, con el objetivo de servir como guía base para el equipo técnico. Detalla las secciones de las páginas, estableciendo un estándar de qué elementos corresponden a la operadora (fijos/regulados) y cuáles pertenecen al diseño de marketing (editables).

---

## 1. Estructura General del Layout (El "Esqueleto" Base)
Independientemente de la operadora, casi todas las LPs de servicios VAS (Funbox, e-Komics, FitLife) siguen un patrón de diseño vertical optimizado para dispositivos móviles (Responsive/Mobile-First) con la siguiente arquitectura de arriba hacia abajo:

1. **Header (Cabecera):** Logos del servicio y/o de la operadora.
2. **Visual / Hero Section:** Imagen principal, banner o animación del servicio (juegos, cómics, fitness).
3. **Copy Promocional:** Título atractivo y descripción breve de lo que el usuario va a obtener.
4. **Módulo de Precio y Condiciones (Pricing):** Texto explícito sobre cuánto cuesta el servicio y su periodicidad (ej. "Suscripción por 2,99€ / semana").
5. **Módulos de Consentimiento (Compliance):** Casillas de verificación (checkboxes) para aceptar Términos y Condiciones o Políticas de Privacidad.
6. **Call To Action (CTA):** El botón de suscripción, Confirmación u OTP.
7. **Footer Legal:** Textos legales extensos, información de contacto de soporte (Customer Care) y enlace para darse de baja.

---

## 2. Clasificación de Elementos: Editables vs. No Editables

Para que el nuevo *Creador de Landing Pages* cumpla con las normativas de las operadoras sin perder flexibilidad comercial, se debe aplicar la siguiente regla a los templates:

### ✅ Elementos Modificables (Capa de Marketing)
Estos campos estarán abiertos en el editor para que el equipo de Operaciones/Marketing los personalice al crear una nueva URL:
* **Imágenes y Banners:** La imagen principal (*Hero image*) o video de fondo.
* **Colores (Look & Feel):** Color primario (fondo de pantalla), color secundario y color principal del botón de CTA.
* **Textos Promocionales:** Título principal (ej. "¡Disfruta de los mejores juegos!") y viñetas descriptivas (*bullet points*).
* **Tipografías:** Estilo de fuente para los textos promocionales (si se decide abrir esta opción).

### 🔒 Elementos Fijos / Protegidos (Capa de Regulación/Operadora)
Estos elementos vienen pre-configurados del Template Base o inyectados directamente desde el backend (Way), no pueden ser alterados libremente:
* **Logos de la Operadora:** Su posición y tamaño son exigidos por el carrier.
* **Textos de Precio y Periodicidad:** La tarifa y la frecuencia del cobro deben ser exactos a los configurados en el sistema transaccional.
* **Textos Legales del Footer y T&C:** Aprobados por los departamentos legales de cada país.
* **Texto del Botón CTA (En algunos casos):** Algunas operadoras exigen que el botón diga exactamente "Suscribirse con obligación de pago" o "Confirmar".
* **Módulos de Flujos Técnicos (1-Click vs. OTP):** El layout debe poder adaptar dinámicamente sus bloques si el usuario navega en Red de Datos (1-Click directo) o en Red Wi-Fi (despliegue del módulo de entrada MSISDN celular y validación PIN de OTP). Esta variante técnica es inyectada por sistema y es agnóstica al diseño.

---

## 3. Especificaciones del Template por Región y Operadora

Basado en la URL y los servicios desplegados, estas son las particularidades que el sistema de *Templates* debe contemplar por región:

### 🇪🇸 ESPAÑA (Movistar, Orange, Yoigo, MasMovil, llamaYa)
*Niveles más altos de regulación (GDPR).*
* **Estructura Crítica:** Requiere **Banner de Cookies** bloqueante de entrada.
* **Consentimiento:** Checkboxes obligatorios antes de permitir el clic en el botón de suscripción.
* **Botón CTA:** A menudo el texto está regulado (ej. "Suscríbete" o "Pagar").
* **Módulo:** Los textos de tarifas deben estar visualmente contiguos al botón de pago.

### 🇵🇱 POLONIA (Orange, Plus, T-mobile, Play, Netia)
*Regulación Europea (GDPR).*
* **Estructura Crítica:** Al igual que en España, el banner de cookies es obligatorio.
* **Consentimiento:** Casillas de verificación (Checkboxes) para los términos y condiciones del proveedor (Zed/Newry) y de la operadora.
* **Flujo:** Predominan flujos de enriquecimiento (Enrichment) en red 3G/4G o flujos de doble confirmación vía PIN (OTP).

### 🇧🇩 BANGLADESH (GRAMEEPHONE, BANGLALINK, ROBI), 🇿🇦 SUDÁFRICA (Vodacom) & 🇵🇭 FILIPINAS (Smart Communications)
*Regulaciones del mercado asiático/africano.*
* **Estructura Crítica:** Banners promocionales más vistosos y directos.
* **Flujo OTP / Direct Carrier Billing:** Fuerte presencia de campos para que el usuario ingrese su número de teléfono si está en red Wi-Fi (MSISDN input field), seguido de una pantalla para ingresar un PIN (OTP).
* **Banners:** No suelen tener la capa intrusiva de configuración de cookies europea, permitiendo un journey más directo al botón CTA.

### 🇦🇪 EMIRATOS ÁRABES - UAE (Etisalat) & 🇰🇿 KAZAJISTÁN (Zain, STC, Mobily)
* **Texto y Alineación:** El template base debe contemplar que los textos fijos y de precios pueden requerir localización o soporte de caracteres específicos (en caso de usar árabe y alineación RTL - Right to Left, o ruso/kazajo).
* **Visibilidad de Cancelación:** Suelen requerir que la instrucción sobre cómo enviar el SMS de baja (ej. "Send STOP to 1234") esté altamente visible cerca del footer.

---

## 4. Conclusión para el Desarrollo del Template Base
El nuevo **Editor de LPs** no construirá páginas "desde cero". Al seleccionar *País* y *Operadora*, el sistema cargará un HTML con **zonas bloqueadas** (Pricing, T&Cs, Checkboxes legales, flujos OTP) y **zonas editable** (Imágenes, color de fondo, color de botón, copy promocional). 

Esto garantiza velocidad en la operación de Marketing, eliminando el riesgo a multas y quejas con las operadoras por incumplimiento de estructuras de visualización (Compliance).