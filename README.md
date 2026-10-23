# Pier 1 Eleganza — Sitio Web

Sitio estático (HTML, CSS y JS vanilla, sin frameworks ni backend) para la sastrería de lujo **Pier 1 Eleganza**. Listo para publicar en GitHub Pages.

## Estructura de carpetas

```
pier1-eleganza/
├── index.html          # Inicio
├── colecciones.html    # Colecciones / Servicios
├── nosotros.html        # Sobre Nosotros
├── contacto.html        # Contacto
├── assets/
│   ├── css/styles.css   # Estilos (variables de marca, layout, responsive)
│   ├── js/main.js       # Menú móvil, scroll reveal, formulario, header
│   └── img/             # Imágenes (placeholders SVG incluidos)
└── README.md
```

## Logo

El logo real de la marca vive en `assets/img/logo-original.png` (versión a color, tal como fue provista) y tiene dos derivados generados a partir de él:

| Archivo | Uso | Motivo |
|---|---|---|
| `assets/img/logo-onlight.png` | Header y footer de las 4 páginas | El wordmark original está pensado para fondo oscuro; esta versión recolorea el texto "Pier 1 Eleganza / Arte y Diseño" en tinta oscura para que se lea sobre el header blanco, conservando el emblema (rombo + caballo + "PE") en sus colores originales. |
| `assets/img/logo-icon-original.png` | Favicon (ícono de pestaña) en las 4 páginas | Recorte cuadrado solo del emblema, a color original. |

Si reemplazás `logo-original.png` por un archivo nuevo, necesitás regenerar `logo-onlight.png` y `logo-icon-original.png` a mano (con cualquier editor de imágenes) o pedir que se regeneren con el mismo criterio (recolorear el texto a un tono oscuro y recortar el emblema para el favicon).

## Cómo reemplazar imágenes

Las imágenes de fondo/producto son placeholders en SVG (funcionan sin depender de servicios externos). Reemplázalas por fotografías reales manteniendo los mismos nombres de archivo, o actualiza la ruta `src` en el HTML:

| Archivo actual | Usado en | Tamaño recomendado |
|---|---|---|
| `assets/img/hero-placeholder.svg` | Hero de `index.html` | 1920×1080 (horizontal) |
| `assets/img/feature-placeholder.svg` | Banner "Pieza destacada" de `index.html` | 1920×1080 (horizontal) |
| `assets/img/about-placeholder.svg` | `nosotros.html` (foto del taller/fundador) | 900×1125 (vertical, 4:5) |
| `assets/img/categoria-trajes.svg` | Galería de categorías en `colecciones.html` | 1600×800 (horizontal) |
| `assets/img/categoria-camisas.svg` | Galería de categorías en `colecciones.html` | 1600×800 (horizontal) |
| `assets/img/categoria-corbatas.svg` | Galería de categorías en `colecciones.html` | 1600×800 (horizontal) |
| `assets/img/categoria-accesorios.svg` | Galería de categorías en `colecciones.html` | 1600×800 (horizontal) |
| `assets/img/og-image.svg` | Meta tag Open Graph (miniatura al compartir el link) | 1200×630 |

Formatos recomendados para las fotos reales: `.jpg` o `.webp` optimizados (menos de 300 KB c/u) para no afectar el tiempo de carga.

## Cómo reemplazar textos

Todo el copy está directamente en cada archivo `.html`, buscá estos puntos:

- **Nombre y datos de contacto**: en el `<footer>` de cada página y en `contacto.html` (dirección, teléfono, email, horario).
- **WhatsApp**: buscá `wa.me/10000000000` en los 4 archivos HTML (aparece en el botón flotante, el footer y la sección de contacto) y reemplazá `10000000000` por el número real en formato internacional sin signos ni espacios (ej. `5491122334455`).
- **Historia de marca**: los párrafos marcados con `[Texto editable: ...]` en `nosotros.html`.
- **Pieza destacada** (`index.html`): el bloque "Línea Executive" — título, copy y botón — es un ejemplo de producto/colección destacada, reemplazalo por la pieza real que quieras promocionar.
- **Nuestro proceso** (`index.html`): los 6 pasos numerados son un flujo genérico de sastrería a medida; ajustá textos y cantidad de pasos según tu proceso real.
- **Galería de categorías** (`colecciones.html`): los bloques Trajes/Camisas/Corbatas/Accesorios — agregá, quitá o renombrá categorías copiando/eliminando un `<article class="category-block">`.
- **Meta tags SEO**: en el `<head>` de cada página, actualizá `title`, `description`, `og:title`, `og:description` y las URLs `canonical` / `og:url` (reemplazá `tu-usuario` por tu usuario real de GitHub).
- **Mapa**: en `contacto.html`, el `<iframe>` usa OpenStreetMap con coordenadas de ejemplo. Reemplazá el `src` por la ubicación real (podés generar el embed en [openstreetmap.org/export](https://www.openstreetmap.org/export) o usar Google Maps si preferís).

## Formulario de contacto

El formulario en `contacto.html` es **solo de demostración**: al enviarlo, JavaScript muestra un mensaje de confirmación en pantalla pero no envía datos a ningún servidor (el sitio no tiene backend). Para recibir mensajes reales sin programar un backend, conectá el `<form>` a un servicio gratuito como:

- [Formspree](https://formspree.io/)
- [Getform](https://getform.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/) (si además hospedás el sitio en Netlify)

Normalmente esto implica agregar el `action` y `method` del servicio al tag `<form id="contact-form">` en `assets/js/main.js`/`contacto.html` según las instrucciones del proveedor elegido.

## Cómo publicar en GitHub Pages

1. Creá un repositorio en GitHub (por ejemplo `pier1-eleganza`) y subí todo el contenido de esta carpeta a la raíz del repo:
   ```bash
   git init
   git add .
   git commit -m "Sitio inicial Pier 1 Eleganza"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/pier1-eleganza.git
   git push -u origin main
   ```
2. En GitHub, entrá a **Settings → Pages** del repositorio.
3. En **Source**, seleccioná la rama `main` y la carpeta `/ (root)`.
4. Guardá los cambios. GitHub Pages publicará el sitio en unos minutos en:
   ```
   https://TU-USUARIO.github.io/pier1-eleganza/
   ```
5. Actualizá las URLs `canonical` y `og:url` en el `<head>` de cada HTML con esa URL final (ya vienen con un placeholder `https://tu-usuario.github.io/pier1-eleganza/`).

El archivo `.nojekyll` incluido evita que GitHub Pages procese el sitio con Jekyll (no es necesario para este proyecto, pero previene conflictos con carpetas que empiezan con `_` o `.`).

## Notas técnicas

- No requiere instalación ni build: es HTML/CSS/JS puro, se puede abrir `index.html` directamente en el navegador para previsualizar localmente.
- Tipografías: Playfair Display (títulos) e Inter (texto), cargadas desde Google Fonts.
- Colores y espaciados centralizados como variables CSS en `assets/css/styles.css` (bloque `:root`) — cambiá ahí la paleta si querés ajustar tonos.
- El botón flotante de WhatsApp y el header/menú son compartidos en las 4 páginas (se repiten en cada HTML porque el sitio es 100% estático, sin includes de servidor).
