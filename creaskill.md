# Pautas para crear una web accesible

Una web accesible es aquella que puede utilizar el mayor número posible de personas, incluidas aquellas con discapacidad visual, auditiva, motora, cognitiva o dificultades de comprensión. También mejora la experiencia de uso en móviles y para personas mayores.

Como referencia, utiliza las WCAG (Web Content Accessibility Guidelines), las pautas internacionales de accesibilidad web del W3C. Se organizan en cuatro principios: perceptible, operable, comprensible y robusto.

## 1. Diseño visual y legibilidad

Practical Guide to Color Contrast Ratios for Accessible Interface Design Peterdraw Studio - High quality design templates created by Peterdraw

Contraste suficiente

- Asegura un contraste mínimo de 4,5:1 para texto normal y 3:1 para texto grande.
- No uses únicamente el color para comunicar información.
- Comprueba los contrastes con herramientas automáticas.

Graphic Designer's Guide to ADA Compliance — Hanayla Creates

Texto fácil de leer

- Usa fuentes legibles y tamaños adecuados.
- Mantén una buena separación entre líneas y párrafos.
- Permite ampliar el texto hasta un 200 % sin perder contenido ni funcionalidad.
- Evita los bloques largos de texto en mayúsculas.

Digitale Barrierefreiheit Web & PDF - dacc

Diseño adaptable

- La web debe funcionar en móviles, tabletas y ordenadores.
- Evita el desplazamiento horizontal innecesario.
- No ocultes funciones esenciales en pantallas pequeñas.

## 2. Navegación y uso con teclado

- Acceso por teclado: todas las funciones deben poder utilizarse sin ratón.
- Foco visible: resalta el elemento que está seleccionado al navegar con Tab.
- Orden lógico: el recorrido del teclado debe seguir el orden visual y de lectura.
- Enlaces descriptivos: utiliza «Consultar tarifas» en vez de «Haz clic aquí».
- Saltar al contenido: incluye un enlace para evitar tener que recorrer todos los elementos del menú.
- Sin trampas de teclado: el usuario debe poder entrar y salir de menús, ventanas y componentes.

## 3. Imágenes, vídeos y audio

- Añade textos alternativos (`alt`) a las imágenes informativas.
- Utiliza `alt=""` en las imágenes puramente decorativas.
- Incluye subtítulos en los vídeos con diálogo o información sonora.
- Proporciona transcripciones para contenidos de audio.
- Evita vídeos o animaciones que se reproduzcan automáticamente sin control.
- No transmitas información importante únicamente mediante imágenes o sonidos.

Ejemplo de imagen accesible en HTML:

HTMLAjustar líneasCopiar códigoVista previa

```
<img src="equipo.jpg"
     alt="Equipo de trabajo reunido en una oficina">
```

## 4. Estructura y contenido

- Organiza los títulos jerárquicamente: `<h1>`, `<h2>`, `<h3>`.
- Utiliza HTML semántico: `<nav>`, `<main>`, `<header>` y `<footer>`.
- Define el idioma de la página, por ejemplo, `<html lang="es">`.
- Redacta frases claras y evita tecnicismos innecesarios.
- Identifica los errores de los formularios y explica cómo corregirlos.
- Asocia cada campo de formulario con una etiqueta visible (`<label>`).
- No uses tablas para maquetar la página; reserva las tablas para datos tabulares.

## 5. Compatibilidad con tecnologías de asistencia

- Asegúrate de que la web funciona con lectores de pantalla.
- Utiliza HTML nativo antes de recurrir a componentes personalizados con ARIA.
- Da a los botones, enlaces y controles nombres accesibles.
- Comunica mediante texto los mensajes de éxito, carga y error.
- Comprueba que los menús desplegables, ventanas emergentes y diálogos anuncian correctamente su estado.

## 6. Movimiento y tiempo

- Permite pausar, detener u ocultar animaciones y contenidos en movimiento cuando corresponda.
- Evita destellos que puedan provocar convulsiones.
- No impongas límites de tiempo innecesarios; cuando sea posible, permite ampliarlos.
- Diseña botones y controles táctiles con un tamaño cómodo y suficiente separación.
- Respeta las preferencias del sistema para reducir el movimiento.

## 7. Herramientas para comprobar la accesibilidad

WebAIM (@webaim) on X

WAVE

Detecta problemas de estructura, textos alternativos, contraste y otros errores frecuentes.

[wave.webaim.org](<https://wave.webaim.org/>)

Using Google Lighthouse for Web Pages

Lighthouse

Incluye una auditoría automática de accesibilidad dentro de las herramientas de desarrollo de Chrome.

[Documentación de Lighthouse](<https://developer.chrome.com/docs/lighthouse/accessibility/>)

ID24 - W3C Accessibility Initiative - What's in it for you?

WCAG 2.2 y W3C

Consulta los criterios oficiales y sus niveles de conformidad A, AA y AAA.

[Guía oficial WCAG 2.2](<https://www.w3.org/WAI/WCAG22/quickref/>)

W3C

+1

Importante: las herramientas automáticas no detectan todos los problemas. Complementa las auditorías con pruebas manuales usando solo el teclado, ampliando la pantalla y probando lectores de pantalla.

## 8. Lista de comprobación rápida

### Revisión de accesibilidad

#### 0/10

[ ]Contraste suficiente entre texto y fondo

[ ]Texto ampliable sin pérdida de contenido

[ ]Navegación completa con teclado

[ ]Foco visible en todos los controles

[ ]Textos alternativos adecuados

[ ]Subtítulos en vídeos con audio relevante

[ ]Títulos y estructura HTML semánticos

[ ]Formularios con etiquetas e instrucciones claras

[ ]Diseño adaptable a móvil y zoom

[ ]Pruebas automáticas y manuales
