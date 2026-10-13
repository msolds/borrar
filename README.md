# Aula DevOps: despliegue seguro

Unidad de autoaprendizaje abierta para alumnado de FP. Incluye un curso web estático en español y un laboratorio Flask/Docker preparado para GitHub Codespaces.

## Contenido

- `index.html`, `styles.css`, `script.js`: sitio formativo, adaptativo y sin dependencias de build.
- `laboratorio/`: aplicación Flask deliberadamente mejorable para la práctica guiada.
- `.devcontainer/`: entorno de Codespaces con el puerto 5000 privado.
- `.github/workflows/pages.yml`: publicación automática del sitio con GitHub Pages.

## Ver el sitio localmente

Abre `index.html` en un navegador. Para probar el laboratorio, usa Codespaces y sigue las instrucciones de seguridad de `laboratorio/README.md`.

## Publicar en GitHub Pages

1. Sube este repositorio a GitHub con la rama principal llamada `main`.
2. En **Settings → Pages → Build and deployment**, selecciona **GitHub Actions** como fuente.
3. Confirma que la acción `Publicar sitio en GitHub Pages` termina correctamente.
4. El contenido del curso quedará publicado en la URL de Pages que muestre el repositorio.

El curso es público y no solicita cuentas. Las casillas de progreso se guardan en `localStorage` del navegador del alumno y no se envían al servidor.

## Uso docente

El contenido se genera de forma fija en HTML. Puede adaptarse directamente editando `index.html`; los estilos y la interactividad están separados para facilitar cambios visuales o de comportamiento.
