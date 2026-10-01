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
assets/proinstall-logo.png        Logotipo a color (header, sobre fondo blanco)
assets/proinstall-logo-blanco.png Logotipo en blanco (footer, sobre fondo azul)
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

## Pendientes de contenido

Ver **[PENDIENTES.md](PENDIENTES.md)**: datos de contacto reales, precios por motor,
fotografías propias y testimonios.
