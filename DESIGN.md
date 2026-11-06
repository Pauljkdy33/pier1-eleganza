# DESIGN.md — Pier 1 Eleganza

Guía de diseño del sitio. Léela antes de cambiar estilos, textos o imágenes. Los valores reales están en `assets/css/styles.css` (bloque `:root`).

## 1. Esencia

Sastrería y confección de camisas y trajes finos para **damas y caballeros**, en Quito, Ecuador. Lema: *"Elegancia que te define"* y *"Arte en cada detalle, estilo en cada costura"*.

Estilo: editorial, limpio y sobrio. Fondo blanco, texto casi negro, un acento verde tomado del logo y fotografía oscura como contraste. Mucho aire, pocas decoraciones.

## 2. Color

| Token | Valor | Uso |
|---|---|---|
| `--color-black` | `#121214` | Texto principal, botón principal, secciones oscuras (hero, banner, CTA, menú móvil) |
| `--color-black-soft` | `#1c1c1f` | Variante oscura de apoyo |
| `--color-charcoal` | `#26262a` | Variante oscura de apoyo |
| `--color-white` | `#ffffff` | Fondo de la página y del encabezado; texto sobre secciones oscuras |
| `--color-bg-alt` | `#f3f2ee` | Fondo de tarjetas, "Nuestro proceso" y cabeceras de páginas internas |
| `--color-text-muted` | `#6b6c6f` | Texto secundario |
| `--color-border` | `rgba(18,18,20,.12)` | Bordes y divisores |
| `--color-accent` | `#3f5c3a` | Verde profundo del logo: etiquetas, números, iconos, enlaces activos y WhatsApp sobre fondo claro |
| `--color-accent-strong` | `#8a9c3f` | Verde-lima del logo: **solo sobre fondo oscuro** (etiquetas del hero) o como fondo de hover |

Reglas:
- Un solo acento: el verde del logo. No agregar otros colores de marca.
- El verde-lima no se usa como texto sobre fondo claro (poco contraste).
- Error de formulario: `#9b2c2c`.

## 3. Tipografía

- **Títulos:** Playfair Display (serif), peso 600, interlineado 1.15, `text-wrap: balance`.
- **Texto:** Inter (sans-serif), peso 300, interlineado 1.6.
- **Etiquetas (`.eyebrow`):** 0.75rem, mayúsculas, espaciado 0.25em, color acento.
- **Botones y navegación:** mayúsculas con espaciado de 0.15em.

| Elemento | Tamaño |
|---|---|
| Título del inicio (h1) | `clamp(2.6rem, 7vw, 5.2rem)` |
| Título de páginas internas (h1) | `clamp(2.2rem, 5vw, 3.4rem)` |
| Título de sección (h2) | `clamp(2rem, 4vw, 2.75rem)` |
| Subtítulo del hero | `clamp(1rem, 1.6vw, 1.25rem)` |

## 4. Espaciado y estructura

- Escala: `0.5 / 1 / 2 / 4 / 7 rem` (`--space-xs` a `--space-xl`).
- Ancho máximo del contenido: 1200 px. Secciones con 7 rem de relleno vertical.
- Encabezado fijo y blanco, de unos 112 px (`--header-height`); el contenido empieza debajo.
- Páginas: Inicio, Colecciones, Sobre Nosotros, Contacto. Botón flotante de WhatsApp en todas.

## 5. Formas y profundidad

- Esquinas **rectas**. Solo son redondos los círculos (iconos de servicio y botón de WhatsApp).
- Sombras mínimas: encabezado al hacer scroll, tarjeta en hover y botón de WhatsApp. No agregar más.
- Bordes finos de 1 px en vez de sombras para separar.

## 6. Componentes

- **Botón principal:** fondo negro, texto blanco; en hover se vuelve transparente con texto negro. Sobre fondos oscuros: fondo blanco con texto negro.
- **Botón secundario:** transparente con borde fino.
- **Tarjeta de servicio:** fondo `--color-bg-alt`; en hover sube 6 px, fondo blanco, borde verde.
- **Proceso:** lista numerada (01–06) con número verde en serif.
- **Categorías:** foto grande 16:8 con título y descripción centrados debajo.
- **Promoción:** imagen cuadrada a la izquierda y texto con botón de WhatsApp a la derecha.
- **Formulario:** envía por WhatsApp; muestra errores visibles y mueve el foco al primer campo vacío.
- **Movimiento:** aparición suave al hacer scroll (`.reveal`), transiciones de 0.35 s, y se desactiva con "reducir movimiento".

## 7. Logo

- `logo-onlight.webp`: sobre fondo claro (encabezado y pie). El texto va en negro y el emblema conserva sus colores.
- `logo-original.png`: sobre fondo oscuro (texto blanco).
- `logo-icon-original.png`: solo el emblema, para el favicon.
- Alto en el encabezado: 62 px; en el pie: 58 px. No deformar ni recolorear el emblema.

## 8. Imágenes

- Fotos oscuras y elegantes, sin texto, sin logos ni marcas de otras empresas.
- Tamaños: inicio 1600×900; categorías 1600×800; promo 1200×1200; Sobre Nosotros 900×1125; compartir en redes 1200×630.
- Formato WebP para fotos y logo (JPG solo para la imagen de compartir en redes). Siempre `alt` descriptivo y `width`/`height`. Las que están bajo el pliegue llevan `loading="lazy"`.

## 9. Voz y contenido

- Español, tono cercano y elegante, en segunda persona ("tu medida", "te acompañamos").
- Directo y sin exceso de adjetivos.
- **No inventar** cifras, años, certificaciones, telas ni procesos. Usar solo datos confirmados por el negocio.
- Datos reales: WhatsApp `0987252354`, fijo `(593-2) 2435 075`, `pier.eleganza@gmail.com`, Últimas Noticias N37-179 y El Telégrafo, Quito.

## 10. Hacer y no hacer

**Hacer**
- Usar variables CSS en vez de colores sueltos.
- Mantener el foco visible y las etiquetas en los formularios.
- Probar en escritorio y en celular antes de subir cambios.

**No hacer**
- Copiar el sistema de diseño de otra marca (Apple, Vercel, etc.); solo tomar ideas.
- Agregar gradientes decorativos, esquinas redondeadas o más sombras.
- Poner texto o logos de otras marcas en las fotos.
- Activar GitHub Pages ni cambiar datos de contacto sin confirmación de la dueña o el dueño del negocio.

## 11. Pendientes conocidos

- Links de Instagram y Facebook para el pie de página.
- Fotos reales o generadas para inicio, Sobre Nosotros y las 4 categorías (hoy hay marcadores).
- Vigencia y alcance de la promo de camisas de lino.
- Confirmar el texto de "Sobre Nosotros", "Atención con cita previa" y los 6 pasos del proceso.
