# <img src="file:///C:/proyectos/LP_creator/Logo_Newry.png" title="" alt="Imagen" data-align="center">

# Documento Operacional: Herramienta de Creación y Gestión de Landing Pages (VAS)

## 1. Contexto Empresarial y Objetivo de la Iniciativa

La empresa ofrece servicios digitales (VAS) que son comercializados a través de operadoras móviles, cuyo cobro se realiza directamente mediante la factura mensual o descontando del saldo prepago del usuario. 

Actualmente, la creación de nuevas Landing Pages (LP) para la contratación de estos servicios se realiza bajo demanda por parte del equipo de TI (teniendo a día de hoy más de 150 LPs activas en países como Bangladesh, España, Polonia, EAU, entre otros). 

**Objetivo de la nueva herramienta:** Crear una plataforma interna autogestionable que permita a los equipos de Marketing y Operaciones crear, editar y gestionar Landing Pages de manera autónoma, rápida y sin depender directamente del equipo técnico para cambios de diseño o publicación, mejorando así los tiempos de respuesta y la eficiencia de la operación diaria.

## 2. Usuarios de la Herramienta (Público Objetivo)

* **Equipos de Marketing y Operaciones** (ej. perfiles no técnicos).
* **Usuarios Administradores** (Supervisión de cambios y gestión de plantillas base).

## 3. Modelo Operativo y de Plantillas (Templates)

El sistema debe estar fundamentado en un modelo de plantillas (Templates) parametrizables:

1. **Onboarding de Nueva Operadora:** Cuando se abre operación con una nueva operadora en un país determinado, se define de manera conjunta con la operadora un **Template Base**.
2. **Creación a partir del Template:** Todas las LPs correspondientes a esa operadora obligatoriamente se construirán heredando la estructura y reglas de su Template Base asignado.

## 4. Journey del Usuario dentro de la Herramienta

### 4.1. Acceso y Dashboard Principal

1. **Login:** El usuario ingresa a la plataforma con sus credenciales.
2. **Sistema de Filtrado Estricto (Contexto):** El dashboard inicial se presenta como un "estado vacío" (Blank State). Para visualizar los datos, el usuario debe obligatoriamente seleccionar primero un **País** y, en forma de cascada, una **Operadora**. Toda gestión o creación queda bloqueada hasta aplicar este filtro.
3. **Listado de LPs (Dashboard):** Tras la selección, se muestra un panel con el listado de LPs y detalles clave:
   * **ID de Sistema:** Identificador único de trazabilidad (Ej: `#10592`).
   * **Flujos de Contratación:** Indicadores visuales y funcionales sobre las tecnologías soportadas por la Landing (Ej. "1 Click / Red Datos" o "OTP / Red Wi-Fi").
   * **Estado:** Borrador, Activo (Publicado), o Deshabilitado (Inactivo).
4. **Acciones por Landing Page:**
   * **Botón "Editar":** Redirige al editor visual contextualizando la información según el País y de Operadora.
   * **Deshabilitar, Guardar o Publicar:** Toda acción que cambie el estado de la LP requiere pasar por un modal de confirmación donde el usuario debe introducir obligatoriamente un **comentario o justificación** que se documentará con fines de auditoría.
   * **Nueva Landing:** La creación está condicionada a seleccionar previamente un País y Operadora desde un modal secundario, asegurando la aplicación del *Template Base* correcto.

### 4.2. El Editor de Landing Pages (Creación / Edición)

Una vez en el editor (ya sea creando una LP nueva a partir del template o editando una existente), el usuario tendrá la interfaz de modificación con reglas estrictas:

#### A. Elementos Modificables (Diseño a medida)

* Color de fondo (Tema), con soporte para colores en formato Hexadecimal, pudiendo elegir entre fondos sólidos o gradientes lineales.
* Imágenes y assets gráficos a mostrar.
* Color del texto general del cuerpo de la página.
* Color de fondo y color de texto para los botones (CTA).
* Animaciones CSS de los Elementos: Posibilidad de asignar efectos en reposo (ej. Pulse, Float, Color Shift, Glow, Bounce) y respuestas interactivas al hacer clic (Click Feedback) en botones y títulos.
* Textos promocionales (sujetos a aprobación).

#### B. Elementos Fijos (No Modificables por Marketing)

Elementos estándar traídos directamente de la configuración del sistema (ej. desde Way) y exigidos por la operadora:

* Textos legales y Términos & Condiciones.
* Datos del servicio: Nombre, Tarifa, Periodicidad del cobro.
* Flujo técnico subyacente (3G, OTP, Enrichment, etc.).

#### C. Funcionalidades de Publicación y Versionado

* **Previsualización y Simulador de Flujos:** El editor tiene una vista móvil integrada donde se puede inyectar y visualizar el comportamiento gráfico de la LP alterando entre flujo de "Red Datos (1 Click)" o el "Flujo Wi-Fi (OTP, con pasos de introducir PIN)".
* **Gestión de Estados (Guardar / Publicar / Deshabilitar):** Al realizar cualquier acción crítica que afecte el ciclo de vida de la landing page, el sistema abrirá un **Modal de Confirmación**.
  * En él, el usuario deberá introducir obligatoriamente una justificación sobre los cambios realizados.
  * Todas las interacciones generan un rastro inmutable.
* **Generador de URLs:** Una vez finalizada la creación de una LP nueva y ejecutada su primera publicación, la herramienta debe generar y proporcionar automáticamente la URL asociada.
* **Módulo - Registro de Cambios (Logs de Auditoría):** Vista global donde se mapea cronológicamente: fecha y hora, Operador que realizó el cambio, ID de la Landing, Acción Ejecutada (Iconografía verde para publicar, amarilla para guardar, roja para deshabilitar) y el mensaje/comentario que dejó el usuario durante el modal de confirmación.

## 5. Requerimientos Funcionales Especiales

### 5.1. Integración de Scripts y Tracking de Eventos

El editor debe contar con una sección integrada ("Tags/Scripts/Eventos") que permita escalar las capacidades críticas de analítica:
1. **Gestor Avanzado de Scripts (GTM):** Permite al usuario pegar fragmentos de código, decidiendo la **Sección HTML** (head o body), la **Posición de Inyección** (comienzo, medio, final) y la **Página Objetivo** del flujo (todas, paso 1, paso 2, o página de éxito).
2. **Resumen de Eventos (Solo Lectura):** Para mantener un esquema simple, el framework no incluye un constructor de triggers personalizados por el diseñador. En su lugar, el sistema cuenta con un set estándar de eventos implementado vía SDK corporativo. En la parte inferior del simulador/editor de Landing, se muestra una placa informativa estática para tener visibilidad de qué hitos se están traqueando automáticamente (`page_view`, `click_cta`, `submit_msisdn`, `submit_pin`, `success_subscription`).

### 5.2. Módulo de Consentimiento y Privacidad (Compliance)

La plataforma debe proveer una funcionalidad (ej. un *toggle* o menú de configuración) para activar interfaces de avisos de cumplimiento normativo en las LPs, dependiendo de la región:

* Banners de aceptación/rechazo de Cookies.
* Avisos de consentimiento explícito sobre políticas de tratamiento de datos digitales.
* *Nota:* Crítico para despliegues en España y el EEE.

### 5.3. Placeholders y Contexto Dinámico

Los textos ingresados por los usuarios (títulos, descripciones, botones) soportan la inyección de **Placeholders/Variables** como `{{servicio}}`, `{{operadora}}`, `{{pais}}` y `{{precio}}`. El sistema renderiza transparentemente estas variables basándose en el contexto del país y operadora en el que se está creando/clonando la Landing, garantizando reutilización de textos.

### 5.4. Galería Multimedia y Validaciones Categóricas

Herramienta centralizada que actúa como repositorio base de imágenes. Al subir *assets*, el usuario debe clasificarlos (Logo, Hero Promocional, u Otros), lo cual desencadena **validaciones fuertes de formato y tamaño** automáticas (Ej. forzando peso menor a 500KB para Logos y resoluciones adecuadas). La inserción de recursos apoya su reutilización en futuros templates.

### 5.5. Panel de Previsualización y Control de Flujos

La vista móvil simulada dispone de una integración mejorada para la navegación de flujos:
* Mediante un panel de control con botones explícitos (**Volver / Siguiente**) ubicado debajo del visualizador, el operador puede avanzar libremente en las maquetas paso a paso.
* Todos los diferentes flujos (Datos a 1 Click o Wi-Fi con OTP) terminan obligatoriamente en una pantalla de simulación de **Confirmación/Suscripción Exitosa** visible en el editor.

### 5.6. Clonación Ágil e Inteligencia Artificial (IA)

1. **Clonar LP:** Opción directa desde el dashboard para heredar el diseño y variables completas de una LP a una nueva instancia.
2. **Asistencia de IA:** Integración conceptual en el editor que utiliza (mediante mock-ups visuales) modelos de IA fundacionales para la **Generación de Copywriting** y **Creación Mágica de Imágenes** adaptados al estilo de la campaña.

### 5.7. Módulo Independiente de Documentos Legales (T&C)

La plataforma contiene un módulo autónomo para la **Gestión Centralizada de Términos y Condiciones**:
* Permite cargar archivos físicos (PDF o HTML) y asociarlos estáticamente a una tripleta de País > Operadora > Servicio (Ej: España > Orange > Cómics HUB).
* Brinda dos alternativas para pintar el documento de cara al usuario en la página final: "Descarga Directa (.pdf)" o "Incrustado en Landing (Iframe)".
* Al tener un repositorio centralizado, la actualización de un solo documento legal se propaga e impacta masiva y retroactivamente en todas las LPs que apunten a ese servicio, evitando el riesgo de URLs rotas o desactualizadas por las áreas legales.

## 6. Consideraciones para el Equipo Técnico (Handoff)

1. **Tecnología y UX:** Se debe definir si esta solución se implementará como un módulo integrado dentro de los sistemas actuales ("Way") o como un portal/producto independiente. La decisión debe priorizar la posibilidad de construir una **interfaz intuitiva y moderna que permita previsualización ágil**, lo que podría ser una limitante en las herramientas *legacy*.
2. **Migración de Activos Actuales:** Tomar como fase 0 la migración e integración tecnológica de las más de 150+ LPs que existen actualmente mapeadas en "lp actuales", categorizadas por países (Polonia, Bangladesh, España, Kazajistán, EAU, Sudáfrica) y sus respectivas operadoras.
3. **Trazabilidad:** Asegurar que todos los flujos técnicos back-end (suscripción por billing del operador) sigan intactos cuando la página lance los llamados (hooks) hacia la pasarela de pagos, independientemente de la envoltura visual creada por esta nueva herramienta.