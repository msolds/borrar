# Laboratorio Flask y Docker

Este laboratorio contiene una configuración **deliberadamente mejorable** para analizarla y corregirla durante la unidad. No contiene secretos ni datos reales.

## Seguridad y alcance

- Utiliza el proyecto únicamente en un Codespace privado creado para el curso.
- No publiques el puerto reenviado ni despliegues la configuración inicial en Internet.
- El servidor integrado de Flask se usa aquí solo para observar la configuración inicial; no es apropiado para producción.
- El `debug=True` de la aplicación inicial puede revelar información. El uso educativo está limitado a este entorno de laboratorio y una sesión efímera.
- Detén el contenedor y el Codespace al terminar.

## Arranque inicial

Desde la raíz del repositorio:

```sh
cd laboratorio
docker build -t flask-lab .
docker run --rm -p 127.0.0.1:5000:5000 flask-lab
```

Comprueba la respuesta desde otra terminal:

```sh
curl http://127.0.0.1:5000/healthz
```

El Codespace reenviará el puerto 5000 como privado. No cambies la visibilidad a pública. Detén el proceso con `Ctrl+C`.

## Reto

Inspecciona `Dockerfile`, `app.py` y `.dockerignore`. Registra los riesgos antes de cambiar nada. Después corrige la imagen y la forma de ejecutar la aplicación. Usa los criterios de éxito de la web del curso: base mantenida y concreta, proceso no root, modo debug desactivado, servidor WSGI, comprobación de salud y contexto de construcción mínimo. Reconstruye y verifica el servicio tras cada cambio.

No se proporciona una solución final: el objetivo es justificar tus decisiones y verificar el resultado. Para la comprobación HTTP puedes usar `curl` contra `127.0.0.1:5000/healthz` mientras el contenedor está ejecutándose.
