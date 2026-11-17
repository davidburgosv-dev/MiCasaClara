# MiCasa Clara

**Universidad Mayor — Interacción Humano Computador — Evaluación sumativa, Unidad 2**

**Integrantes:** David Burgos Vargas, Felipe Farías y Pablo González.

## Presentación del proyecto

MiCasa Clara es un prototipo móvil interactivo que propone facilitar el registro personal de observaciones detectadas al recibir una vivienda nueva. Su diseño busca que una persona sin conocimientos de construcción pueda identificar la habitación, describir un problema con palabras cotidianas y consultar sus anotaciones posteriormente.

El proyecto aplica las actividades de diseño de interacción solicitadas en la unidad: descubrimiento de requisitos, comparación de alternativas, modelo conceptual, metáfora de interfaz, tipos de interacción, arquitectura de información, flujo, diseño visual-emocional y prototipado.

## Objetivo

Diseñar una interfaz móvil de registro de observaciones que priorice accesibilidad, claridad, prevención de errores y sensación de control de la persona usuaria.

## Solución y recorrido principal

1. Abrir **Registrar problema** desde la pantalla de inicio.
2. Seleccionar la habitación de la vivienda.
3. Describir la observación e indicar opcionalmente su ubicación específica.
4. Seleccionar opcionalmente un archivo de imagen: el prototipo conserva únicamente su **nombre**, no la imagen.
5. Revisar los datos y guardar la observación localmente.
6. Consultar el registro desde **Mis registros**, ver el detalle, eliminarlo con confirmación o exportar los datos en JSON.

La metáfora de interfaz es una **ficha de inspección guiada por habitaciones**. Divide la tarea en decisiones pequeñas y utiliza etiquetas cercanas al lenguaje cotidiano.

## Arquitectura de información y flujo de usuario

La organización de contenidos, las etiquetas principales y el recorrido para registrar y consultar observaciones están documentados en detalle en [`docs/Arquitectura_Informacion_y_Flujo.md`](docs/Arquitectura_Informacion_y_Flujo.md), que incluye el mapa de contenidos, el inventario de etiquetas, los flujos de registro y consulta, y una revisión de la claridad de las pantallas, los botones y los pasos con sus oportunidades de mejora. La estructura es poco profunda, con tres secciones principales, Inicio, Mis registros y Ayuda, y un asistente de cuatro pasos que mantiene a la persona a uno o dos toques de su objetivo.

## Ejecución del prototipo

1. Abrir el archivo `MiCasaClara.html` en un navegador actual, preferentemente desde un equipo o teléfono.
2. Seleccionar **Registrar problema** y completar los pasos guiados.
3. Revisar el mensaje de confirmación y entrar a **Mis registros**.
4. Para explorar las funciones adicionales, consultar **Ayuda**, revisar un detalle y probar la exportación JSON.

No necesita servidor, instalación de paquetes ni conexión con servicios externos. La persistencia depende del almacenamiento local que permita el navegador.

## Funcionalidades implementadas

- Navegación entre **Inicio**, **Mis registros** y **Ayuda**.
- Formulario guiado en cuatro pasos, con avance, retroceso y revisión.
- Selección de habitación, descripción, ubicación opcional y nombre de archivo de imagen opcional.
- Validación de campos obligatorios y mensajes de error.
- Guardado de observaciones de texto en `localStorage`.
- Listado y visualización detallada de registros.
- Eliminación previa confirmación y exportación de datos en JSON.
- Diseño adaptable a pantallas móviles, botones visibles, etiquetas y foco de teclado.

## Alcance y consideraciones de privacidad

Este desarrollo es un **prototipo académico**, no un servicio de posventa de una constructora. Las anotaciones son locales: no se envían, tramitan ni sincronizan solicitudes de garantía o reparación; «Registrado localmente» no indica un avance de reparación.

El prototipo **no guarda fotografías**, sino únicamente sus nombres. Los datos pueden perderse al borrar el almacenamiento local o cambiar de navegador o dispositivo. Para una demostración se recomienda usar datos ficticios y no incorporar información personal sensible.

Las decisiones de accesibilidad se inspiran en WCAG 2.2 y principios de usabilidad; no constituyen una certificación de conformidad ni sustituyen la evaluación con usuarios.

## Metodología y evidencias

El informe presenta el problema y los requisitos como **hipótesis iniciales de diseño**, y compara dos alternativas conceptuales. Los tres escenarios de personas incluidos en el informe son **ejemplos simulados para ilustrar situaciones posibles**, no entrevistas ni testimonios.

Se efectuó una comprobación técnica automatizada del flujo en Chromium con datos ficticios y almacenamiento simulado. Esta comprobación no acredita pruebas con personas ni persistencia entre sesiones. La investigación de campo y las pruebas de usabilidad se describen en el informe como actividades propuestas, sin atribuir resultados no observados.

El repositorio conserva los documentos del proyecto y permite consultar las versiones del trabajo.

## Archivos del proyecto

| Archivo | Contenido |
|---|---|
| `Trabajo_1_ Imteracción-humano_computador.docx` | Informe académico, nueve apartados exigidos, comparación de alternativas, análisis y anexos. |
| `MiCasaClara.html` | Prototipo interactivo ejecutable para dispositivos móviles. |
| `README.md` | Descripción, ejecución, alcance y documentación técnica. |
| `Resumen_MiCasa_Clara.md` | Síntesis y matriz de trazabilidad de la rúbrica. |
| `docs/Arquitectura_Informacion_y_Flujo.md` | Mapa de contenidos, etiquetas, flujo de usuario y revisión de claridad (apartado 6). |

## Referencias

- Universidad Mayor. (2026). *Ficha de actividad: Interacción Humano Computador, Unidad 2* [material de asignatura].
- World Wide Web Consortium. (2023). *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/WCAG22/
- Nielsen, J. (1994). *10 usability heuristics for user interface design*. Nielsen Norman Group. https://www.nngroup.com/articles/ten-usability-heuristics/

