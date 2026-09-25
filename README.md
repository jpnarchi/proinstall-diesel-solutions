# ProInstall And Diesel Solutions

Sitio web estático (HTML + CSS + JS, sin build) para **ProInstall And Diesel Solutions**,
empresa dedicada a la **programación electrónica de maquinaria pesada y tractocamiones**.

La estructura del sitio replica la arquitectura de `imdagroup.com.mx` (topbar, header pegajoso,
hero con estadísticas, ticker de marcas, banda de beneficios, quiénes somos + misión/visión/valores,
grid de servicios, cobertura de marcas, sectores, proceso de 6 pasos, casos, banda CTA, testimonios,
FAQ y footer de 4 columnas), adaptada al giro de ProInstall y a su paleta de marca.

## Páginas

| Archivo | Sección |
|---|---|
| `index.html` | Inicio |
| `servicios.html` | 9 servicios en detalle (anclas `#ecm`, `#emisiones`, `#diagnostico`, `#recuperacion`, `#clonacion`, `#calibracion`, `#offroad`, `#campo`, `#asesoria`) |
| `motores.html` | Motores y precios — catálogo filtrable por tipo de operación |
| `modulos-ecm.html` | Módulos ECM por marca y familia |
| `emisiones.html` | DPF / EGR / SCR / DEF |
| `trabajos.html` | Historias de trabajos anteriores |
| `nosotros.html` | Quiénes somos, equipamiento y proceso |
| `contacto.html` | Formulario y datos de contacto |

## Archivos

```
assets/styles.css          Sistema de diseño completo (paleta ProInstall)
assets/main.js             Menú móvil, reveal, acordeón FAQ, filtros y formulario
assets/proinstall-logo.png Logotipo
```

No hay dependencias ni paso de compilación. Para verlo en local:

```bash
python3 -m http.server 8000
```

## Paleta de marca

| Token | Valor | Uso |
|---|---|---|
| `--pi-blue` | `#159bd5` | Acento principal (botones, títulos destacados) |
| `--pi-sky` | `#55c8f4` | Acento secundario (sobre fondo oscuro, banda de beneficios) |
| `--pi-ink` | `#101b32` | Azul marino de marca (header oscuro, secciones dark) |
| `--pi-ink-3` | `#081226` | Footer y degradados profundos |
| `--paper` | `#f4f7f9` | Fondo de secciones alternas |

Tipografías: **Barlow Condensed** (display), **Inter** (texto), **JetBrains Mono** (etiquetas técnicas).
Iconografía: Font Awesome 6 (CDN).

## Pendientes de contenido

Ver **[PENDIENTES.md](PENDIENTES.md)**: datos de contacto reales, lista de precios por motor,
fotografías propias (con especificaciones de tamaño y calidad) y testimonios de clientes.
