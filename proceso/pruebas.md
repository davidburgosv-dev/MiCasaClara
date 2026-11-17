# Comprobaciones del formulario

Fecha: 2026-11-17. Alcance: foco entre pasos y prevención del descarte accidental.
Base: commit 062a310 de main. Rama: pablo/foco-proteccion-formulario.

## Antes y después

| Escenario | Antes (revisión del código) | Después (lógica comprobada) |
|---|---|---|
| Continuar o retroceder | Se reemplazaba el contenido sin enfocar el nuevo paso. | Se enfoca el encabezado principal, sin añadirlo al orden de tabulación. |
| Salir hacia Inicio, Mis registros o Ayuda | Se salía sin advertir sobre datos pendientes. | Se capturan los campos actuales y se pide confirmar el descarte. Cancelar conserva pantalla y datos. |
| Cancelar el primer paso con habitación elegida | Se salía directamente. | Se pide confirmación. Un formulario vacío sale sin aviso. |
| Pulsar Inicio durante el formulario | Se descartaba el recorrido. | Se confirma antes de salir. |
| Recargar o cerrar con datos | No existía protección. | Se solicita la advertencia nativa mediante beforeunload. |
| Guardar correctamente | Se mostraba la confirmación de guardado. | Se mantiene el guardado, sin aviso de descarte, y se enfoca el encabezado de confirmación. |
| Fallar el almacenamiento | Se conservaba el formulario y se mostraba el error. | Se conserva además la protección al intentar salir. |

## Evidencia técnica

Ejecutar desde la raíz: `node pruebas/formulario.cjs`.
Resultado observado: 10 comprobaciones aprobadas con el JavaScript real y DOM y almacenamiento simulados. Incluyen navegación, validación, captura de texto pendiente, confirmación aceptada/cancelada, recarga, guardado y fallo de almacenamiento.

Comparación con la base 062a310: CSS y HTML estático anteriores al script idénticos; no se cambiaron fuentes, colores ni estructura visual. `git diff --check` sin errores de espacios.

El detector de Impeccable se ejecutó con análisis degradado por falta de módulos: señaló bordes y sombras ya presentes. No se modificaron por estar fuera del alcance acordado. No constituye una auditoría de accesibilidad completa.

## Verificación manual pendiente

No se ha ejecutado un navegador real ni un lector de pantalla en esta revisión. Las pruebas simuladas no acreditan persistencia real ni accesibilidad completa.

1. Abrir MiCasaClara.html y recorrer los cuatro pasos con Tab, Enter y los botones Atrás/Continuar. Comprobar foco y anuncio del encabezado con lector de pantalla.
2. Escribir datos y pulsar cada opción del menú. Cancelar debe conservarlos; aceptar debe salir. Volver a Registrar problema debe iniciar un formulario vacío.
3. Elegir una habitación y usar Cancelar; comprobar ambas respuestas.
4. Recargar o cerrar después de escribir. El navegador decide si presenta el aviso nativo y su texto; algunos navegadores móviles pueden omitirlo. No se implementó recuperación del borrador tras un cierre forzado.
5. Guardar y comprobar que no aparece aviso de descarte; verificar el detalle en Mis registros.

## Estado de colaboración

Se creó la rama pablo/foco-proteccion-formulario tras habilitar escritura en .git. Se consultó origin mediante fetch, sin modificar main. Esta contribución registra correcciones y pruebas. La revisión de otro integrante queda pendiente; no se atribuyen acuerdos ni revisiones a terceros.

## Contexto de la habitación

Se agregó el rótulo "Sección: [habitación]" encima del título en los pasos 2, 3 y 4, usando la clase eyebrow existente. El encabezado referencia ese contexto mediante aria-describedby. Se conservan los títulos, fuentes y colores. Pendiente de comprobar visualmente y con lector de pantalla en navegador real.
