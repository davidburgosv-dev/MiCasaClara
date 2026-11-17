# Revisión del prototipo HTML

Esta revisión del issue #1 cubre el registro de una observación y su consulta desde «Mis registros». Los cambios se presentan en el PR #6.

| Actividad | Hallazgo y cambio | Comprobación |
| --- | --- | --- |
| Botones, formulario y navegación | El recorrido mantiene cuatro pasos. El foco pasa al encabezado al cambiar de pantalla. La habitación seleccionada se indica con texto, una marca y un estado accesible. | Inicio, selección, avance, retroceso, guardado, listado, detalle, Ayuda y regreso a Inicio en Chrome. |
| Textos, colores y contraste | Se oscurecieron los bordes de los controles y el foco. Los ejemplos de entrada tienen un color explícito. Se conservó la paleta y la estructura del prototipo. | axe-core examinó diez estados en tres anchos sin infracciones detectadas en las reglas ejecutadas. |
| Uso en pantallas móviles | Se ajustaron los botones de navegación para que repartan el ancho, incluido el espacio inferior del dispositivo. El menú pasa al flujo normal en ventanas bajas para dejar espacio al contenido. | A 320 y 390 px no hubo desplazamiento horizontal en los estados comprobados. Los botones visibles de esos estados midieron al menos 44 × 44 px. |
| Errores y confirmaciones | Los campos obligatorios se identifican antes de completar el paso. Los avisos indican el dato faltante y reciben el foco. Un fallo de guardado explica cómo reintentar y conserva lo ingresado. | Se comprobó la validación, el foco, la confirmación de guardado y la conservación de datos al cancelar la salida. El fallo de almacenamiento se probó con un doble de prueba. |
| Dificultades de interacción | Los ejemplos y límites se vinculan con sus campos. El paso de fotografía indica que solo se guarda el nombre del archivo y anuncia el cambio de selección. | Se seleccionó una fotografía, se volvió al paso anterior y se comprobó su nombre en el resumen y en el detalle. |
| Funcionalidades existentes | Se preservaron el almacenamiento local, la consulta, la exportación JSON y la eliminación con confirmación. | El registro persistió tras recargar. Se comprobó la descarga y las dos respuestas de confirmación al eliminar. |
| Pruebas funcionales | Se ampliaron las evidencias del formulario con pruebas en Chrome y capturas. | Diez comprobaciones de lógica y tres recorridos en Chrome, a 320, 390 y 1280 px. |

## Evidencias

- [Validación en móvil](capturas/validacion-390.png)
- [Revisión antes de guardar en móvil](capturas/revision-390.png)
- [Detalle guardado en móvil](capturas/detalle-390.png)
- [Detalle guardado en escritorio](capturas/detalle-1280.png)

## Reproducción

Desde la raíz del repositorio, ejecutar `node pruebas/formulario.cjs` para comprobar la lógica sin dependencias. Para repetir los recorridos y generar las capturas, usar Chrome instalado y ejecutar en PowerShell:

```powershell
$qaDir = Join-Path $env:TEMP 'micasaclara-qa'
npm install --prefix $qaDir playwright-core @axe-core/playwright
$env:NODE_PATH = Join-Path $qaDir 'node_modules'
node pruebas/navegador.cjs
```

La prueba usa el HTML local con datos ficticios y contextos de navegador independientes. Los anchos móviles se simularon en Chrome. Queda pendiente comprobar los anuncios con un lector de pantalla y el uso táctil en un teléfono físico.
