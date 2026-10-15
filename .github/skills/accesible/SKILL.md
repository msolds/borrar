---
name: accesible
description: "Diseña, implementa o revisa accesibilidad web. Úsala para mejorar contraste, legibilidad, teclado, foco, textos alternativos, subtítulos, semántica, formularios, lectores de pantalla, diseño adaptable, zoom o movimiento reducido, y para hacer auditorías WCAG."
argument-hint: "[página, ruta o componente que quieres hacer más accesible]"
user-invocable: true
---

# Accesibilidad web

Ayuda a que la web pueda ser percibida, operada y comprendida por el mayor número posible de personas, incluidas las que usan tecnologías de asistencia. Aplica como referencia WCAG 2.2 nivel AA y conserva el diseño, el contenido y el comportamiento existentes salvo que el usuario pida cambiarlos.

## Cuándo usarla

- El usuario pide hacer una página, componente o flujo accesible.
- Solicita revisar o corregir accesibilidad, WCAG, lectores de pantalla, contraste, teclado o zoom.
- Necesita una lista de comprobación o auditoría de accesibilidad web.

## Procedimiento

1. **Delimita el alcance.** Identifica la página, ruta, componentes y estados relevantes. Revisa los patrones y estilos existentes, y determina si el usuario quiere una auditoría, una explicación o cambios en el código. No cambies contenido factual ni la identidad visual sin permiso.
2. **Inspecciona la experiencia completa.** Incluye contenido principal, navegación, diálogos, formularios, mensajes, estados de error y éxito, contenido multimedia y comportamiento adaptable. Identifica el HTML, CSS y JavaScript responsables antes de editar.
3. **Evalúa los cuatro principios WCAG.**
   - **Perceptible:** contrasta texto normal con su fondo al menos 4,5:1; texto grande al menos 3:1; controles, iconos informativos y otros elementos gráficos necesarios para entender o usar la interfaz al menos 3:1 frente a los colores adyacentes. No comuniques estado solo mediante color. Usa texto alternativo apropiado, subtítulos y transcripciones cuando el contenido los necesite.
   - **Operable:** permite completar las tareas con teclado, en un orden lógico y sin trampas. Mantén un foco visible. Incluye un enlace para saltar bloques repetidos cuando corresponda, controles cómodos para tocar y pausas, detención o alternativas para movimiento automático relevante.
   - **Comprensible:** usa lenguaje claro, navegación coherente e instrucciones descriptivas. Asocia etiquetas visibles con los campos; identifica errores, explica cómo corregirlos y vincula los mensajes de ayuda o error con su control.
   - **Robusto:** prioriza elementos HTML nativos y semánticos. Asegura nombres, roles y estados accesibles para controles; usa ARIA solo cuando HTML nativo no exprese el comportamiento requerido y mantenlo sincronizado con el estado real.
4. **Prioriza problemas.** Corrige primero bloqueos de tarea y fallos de teclado o tecnología de asistencia; después contraste, estructura, mensajes, zoom, adaptación y detalles visuales. Distingue fallos comprobados de riesgos que requieren verificación manual.
5. **Implementa de forma quirúrgica.** Reutiliza tokens y componentes del proyecto. Proporciona `alt=""` a imágenes decorativas y texto alternativo útil a imágenes informativas. Respeta `prefers-reduced-motion`. No ocultes funciones esenciales en móvil ni introduzcas desplazamiento horizontal para contenido que debería adaptarse.
6. **Verifica los cambios.** Ejecuta las pruebas y herramientas disponibles del proyecto. Comprueba el recorrido solo con teclado, foco, nombres accesibles, mensajes de estado, contraste calculado y ausencia de desbordamiento en tamaños representativos. Revisa el contenido con ampliación de hasta 200 % y, cuando sea posible, tecnologías de asistencia pertinentes. Prueba `prefers-reduced-motion` si hay movimiento.
7. **Comunica límites y resultados.** Informa qué se cambió, qué comprobaciones se ejecutaron y qué no pudo verificarse. Las herramientas automáticas encuentran solo parte de los problemas; no afirmes conformidad WCAG completa basándote únicamente en un escaneo automático.

## Lista de comprobación

- Contraste suficiente y significado que no dependa solo del color.
- Texto legible y ampliable sin pérdida de contenido o funcionalidad.
- Uso completo con teclado, orden lógico y foco visible.
- Enlaces, botones y controles con nombres accesibles y etiquetas claras.
- Texto alternativo según el propósito de cada imagen.
- Subtítulos y transcripciones para contenido audiovisual cuando corresponda.
- Jerarquía de encabezados y estructura semántica coherentes; idioma de página declarado.
- Formularios con etiquetas, instrucciones y errores que indican cómo recuperarse.
- Diseño adaptable y sin desplazamiento horizontal innecesario, incluso con zoom.
- Movimiento compatible con las preferencias del usuario.
- Pruebas automáticas y revisión manual documentadas por separado.

## Principios de implementación

- Conserva las funciones y el contenido existentes; no elimines controles para hacer que una auditoría parezca limpia.
- No sustituyas una auditoría manual por una puntuación automatizada.
- No afirmes que una página es accesible para todo el mundo ni que cumple WCAG al completo sin una evaluación suficiente de todos los criterios aplicables.
- Si hay varias soluciones válidas que cambian significativamente el comportamiento o la apariencia, pregunta al usuario antes de elegir.
