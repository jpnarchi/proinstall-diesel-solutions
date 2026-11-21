# ProInstall And Diesel Solutions

Sitio web estático (HTML + CSS + JS, sin build) para **ProInstall And Diesel Solutions**,
empresa dedicada a la **programación electrónica de maquinaria pesada y tractocamiones**.

El sitio se mantiene deliberadamente corto: cuatro páginas, textos breves y lenguaje llano,
para que un cliente que no es técnico entienda en segundos qué se ofrece.

## Páginas

| Archivo | Sección |
|---|---|
| `index.html` | Inicio — hero, servicios, marcas de motor, quiénes somos, proceso, trabajos y FAQ |
| `servicios.html` | Los 4 servicios en detalle |
| `motores.html` | Motores que programamos, por marca, con foto y botón de cotización |
| `contacto.html` | Formulario y datos de contacto |

## Archivos

```
assets/styles.css                 Sistema de diseño
assets/main.js                    Menú móvil, reveal, acordeón FAQ y formulario
assets/proinstall-logo.png        Logotipo a color, original en alta resolución
assets/proinstall-logo-blanco.png Logotipo en blanco, original en alta resolución
assets/proinstall-logo-header.png Versión ligera del logo a color que carga el header
assets/proinstall-logo-footer.png Versión ligera del logo en blanco que carga el footer
assets/og-image.jpg               Imagen 1200 × 630 que se ve al compartir el sitio
assets/favicon-48.png / -192.png  Favicon; apple-touch-icon.png va en la raíz
robots.txt / sitemap.xml          Indicaciones para buscadores
404.html                          Página de "no encontrada" (Vercel la sirve sola)
```

Sin dependencias ni paso de compilación. Para verlo en local:

```bash
python3 -m http.server 8000
```

## Paleta de marca

| Token | Valor | Uso |
|---|---|---|
| `--pi-blue` | `#159bd5` | Acento principal (botones, títulos destacados) |
| `--pi-sky` | `#55c8f4` | Acento secundario (sobre fondo oscuro, banda de beneficios) |
| `--pi-ink` | `#101b32` | Azul marino de marca |
| `--pi-ink-3` | `#081226` | Footer |
| `--paper` | `#f4f7f9` | Fondo de secciones alternas |

Tipografías: **Barlow Condensed** (títulos), **Inter** (texto), **JetBrains Mono** (etiquetas).
Iconografía: Font Awesome 6 (CDN).

## SEO

Dominio oficial: **https://proinstalldiesel.com** (sin `www`; `www` redirige al dominio raíz).

Cada página lleva en su `<head>`: `<title>` y `description` propios, `canonical`,
Open Graph, Twitter Card y un bloque JSON-LD (`AutoRepair`, `WebSite`, la página,
migas de pan y, donde hay acordeón, `FAQPage`).

Al editar el sitio, mantener esto en sincronía:

- **Teléfono, correo u horario**: cambian en el HTML visible **y** en el JSON-LD de las 4 páginas.
- **Preguntas frecuentes**: el texto del acordeón y el de `FAQPage` deben ser el mismo.
- **Página nueva**: agregarla a `sitemap.xml` con su `canonical`, y actualizar `<lastmod>`.
- **Un solo `<h1>` por página**; debajo, `<h2>` y `<h3>` sin saltarse niveles.
- **Portada**: se enlaza como `./`, no como `index.html`.
- **Logo nuevo**: regenerar también las versiones `-header` (alto 156 px) y `-footer` (alto 162 px).

## Pendientes de contenido

Ver **[PENDIENTES.md](PENDIENTES.md)**: datos de contacto reales, precios por motor,
fotografías propias y testimonios.
