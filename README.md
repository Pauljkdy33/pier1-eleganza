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

Las fotos del sitio están en `assets/img/`. Las que dicen "placeholder" o `.svg` son marcadores: reemplázalas por fotos reales (`.jpg` optimizado, menos de 300 KB) y, si cambia la extensión, actualiza la ruta `src` en el HTML.

| Archivo actual | Usado en | Tamaño recomendado |
|---|---|---|
| `hero-fondo1.jpg` | Fondo del inicio (`index.html`) | 1600×900 (horizontal) |
| `feature-traje.jpg` | Banner "Trajes a medida" de `index.html` | 1600×900 (horizontal) |
| `promo-camisas.jpg` | Promoción del 20 % en `index.html` | 1200×1200 (cuadrada) |
| `about-placeholder.svg` | `nosotros.html` (foto del taller o del equipo) | 900×1125 (vertical, 4:5) |
| `categoria-trajes.svg` | Colecciones: trajes para caballeros | 1600×800 (horizontal) |
| `categoria-camisas.svg` | Colecciones: camisas para caballeros | 1600×800 (horizontal) |
| `categoria-trajes-damas.svg` | Colecciones: trajes para damas | 1600×800 (horizontal) |
| `categoria-camisas-damas.svg` | Colecciones: camisas para damas | 1600×800 (horizontal) |
| `og-image.jpg` | Miniatura al compartir el link en redes | 1200×630 |

## Cómo reemplazar textos

Todo el copy está directamente en cada archivo `.html`, buscá estos puntos:

- **Datos de contacto**: en el `<footer>` de cada página y en `contacto.html` (dirección, teléfonos, correo).
- **WhatsApp**: el número `593987252354` aparece en los 4 HTML (botón flotante, footer, contacto y promo) y en `assets/js/main.js` (formulario). Para cambiarlo, busca y reemplaza en esos archivos.
- **Promoción** (`index.html`): sección "Promoción". Cuando termine la oferta, elimina esa sección o cambia el texto.
- **Nuestro proceso** (`index.html`): los 6 pasos son un flujo genérico; ajústalos a tu proceso real.
- **Galería de categorías** (`colecciones.html`): agrega, quita o renombra categorías copiando o eliminando un `<article class="category-block">`.
- **Meta tags SEO**: en el `<head>` de cada página (`title`, `description`, `og:*`). Las direcciones `canonical` y `og:url` apuntan a `https://pauljkdy33.github.io/pier1-eleganza/`; si cambias de dominio, actualízalas.
- **Mapa**: en `contacto.html`, el `<iframe>` de Google Maps busca la dirección por texto. Para un pin exacto, usa en Google Maps *Compartir → Insertar un mapa* y pega el nuevo `src`.

## Formulario de contacto

El formulario de `contacto.html` no usa servidor: al enviarlo, arma el mensaje con el nombre, el texto y el correo (si lo escribieron) y abre WhatsApp con ese mensaje listo para enviar al número de la marca. La lógica está en `assets/js/main.js`.

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
