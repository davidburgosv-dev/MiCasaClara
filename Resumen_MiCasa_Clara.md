# MiCasa Clara — Síntesis y matriz de cumplimiento

**Universidad:** Universidad Mayor  
**Asignatura:** Interacción Humano Computador  
**Evaluación:** Sumativa, Unidad 2  
**Integrantes:** David Burgos Vargas, Felipe Faria y Pablo Gonzales  
**Repositorio:** https://github.com/davidburgosv-dev/MiCasaClara

## Descripción del proyecto

MiCasa Clara es una propuesta de interfaz móvil que facilita el registro y la consulta de observaciones detectadas al recibir una vivienda nueva. El usuario selecciona una habitación, describe el problema en términos cotidianos, revisa la información y conserva un registro en el navegador. La solución prioriza accesibilidad, claridad, facilidad de aprendizaje y control de las acciones.

## Diseño de interacción

El trabajo considera dos alternativas iniciales: un formulario único y una ficha guiada en cuatro pasos. La segunda organiza las acciones en una secuencia breve y mantiene visibles las opciones y confirmaciones. El modelo conceptual relaciona habitaciones, observaciones y registros; la metáfora es la ficha de inspección. Se utilizan acciones de instruir, manipular y explorar, y respuestas a mensajes del sistema. La arquitectura contempla Inicio, Registrar observación, Mis registros y Ayuda.

## Instrumentos de análisis

Se presentan un guion de entrevista semiestructurada, un mapa de empatía con sus dimensiones dice, piensa, hace y siente, un perfil ilustrativo de usuario y un recorrido de experiencia (*journey map*). Los escenarios ilustrativos permiten examinar posibles dificultades; no constituyen testimonios obtenidos mediante entrevistas con participantes.

## Matriz de evaluación

| Criterio | Desarrollo presentado | Evidencia | Estado de revisión |
|---|---|---|---|
| 1. Descubrimiento de requisitos | Problema, usuarios, contexto de uso, tarea y requisitos funcionales y no funcionales | Informe, matriz de requisitos e instrumentos de indagación | Desarrollado como propuesta; requiere contrastación con usuarios |
| 2. Alternativas y modelo conceptual | Comparación de alternativas, modelo, metáfora y tipos de interacción | Informe, tabla comparativa y decisiones argumentadas | Desarrollado a nivel de diseño |
| 3. Arquitectura y diseño | Organización de contenidos, flujo, jerarquía, estados y prevención de errores | Informe, diagramas y prototipo | Representado en el prototipo; evaluación con usuarios no realizada |
| 4. Prototipo y documentación | Prototipo móvil, informe, resumen y documentación en GitHub | `MiCasaClara.html`, `Informe_MiCasa_Clara.docx`, `README.md` y repositorio | Prototipo construido; las aportaciones colaborativas se respaldan mediante el historial real |

## Características del prototipo

El archivo `MiCasaClara.html` funciona en un navegador moderno sin instalar dependencias. Permite recorrer un registro guiado, validar campos obligatorios, revisar la observación, guardarla localmente, consultar los registros y eliminarlos con confirmación. El archivo de imagen no se conserva: únicamente se registra su nombre. No se tramitan solicitudes a empresas constructoras ni se realiza sincronización en línea.

## Evaluación y limitaciones

Se dispone de comprobaciones técnicas automatizadas del recorrido con datos ficticios. No se han documentado entrevistas de campo ni pruebas de usabilidad con usuarios reales. La aplicación toma como referencia principios de accesibilidad, pero no cuenta con una auditoría completa de conformidad WCAG. Estas diferencias se consideran al interpretar los resultados y las posibilidades de mejora.

## Referencias

- Universidad Mayor. (2026). *Ficha de actividad: Interacción Humano Computador, Unidad 2* [material de asignatura].
- World Wide Web Consortium. (2023). *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/WCAG22/
- Nielsen, J. (1994). *10 usability heuristics for user interface design*. Nielsen Norman Group. https://www.nngroup.com/articles/ten-usability-heuristics/
