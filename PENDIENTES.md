# Pendientes de contenido — ProInstall

Todo lo que está en esta lista se publicó con un valor provisional y debe reemplazarse
antes de considerar el sitio terminado.

---

## 1. Datos de contacto (Francisco)

Los datos actuales son **marcadores de posición**. Aparecen en las 8 páginas
(topbar, footer, botón flotante de WhatsApp y página de contacto).

| Dato | Valor provisional en el sitio |
|---|---|
| Teléfono (texto) | `+52 55 0000 0000` |
| Teléfono (enlace `tel:`) | `+525500000000` |
| WhatsApp (`wa.me/…`) | `525500000000` |
| Correo | `contacto@proinstalldiesel.com` |
| Horario | `Lun – Sáb · 8:00 a 19:00` |
| Cobertura / dirección | `Servicio en taller y en campo · México` |
| Facebook / Instagram | enlaces genéricos a las plataformas |

Para reemplazarlos de golpe, desde la raíz del proyecto:

```bash
# 1) WhatsApp y tel: (sólo dígitos, con lada de país)
grep -rl '525500000000' *.html | xargs sed -i '' 's/525500000000/52XXXXXXXXXX/g'
# 2) Teléfono visible
grep -rl '+52 55 0000 0000' *.html | xargs sed -i '' 's/+52 55 0000 0000/+52 XX XXXX XXXX/g'
# 3) Correo
grep -rl 'contacto@proinstalldiesel.com' *.html | xargs sed -i '' 's/contacto@proinstalldiesel.com/CORREO_REAL/g'
```

Horario, cobertura y redes sociales conviene editarlos a mano (aparecen en el topbar,
en el footer y en `contacto.html`).

---

## 2. Lista de precios por motor

`motores.html` ya tiene el catálogo completo: **9 marcas y 32 familias de motor**, cada una con
su módulo, sus aplicaciones y los servicios que aplican. Falta únicamente **el precio**.

Hoy cada tarjeta muestra `Consultar precio` y un aviso visible de que la lista está en definición.

Para publicar un precio, edita la tarjeta correspondiente en `motores.html` y cambia:

```html
<span class="price-value pending">Consultar precio</span>
```

por:

```html
<span class="price-value">$8,500</span>
```

(La clase `pending` sólo cambia el estilo a texto mono azul; sin ella se ve como cifra grande.)

Conviene definir, por familia de motor:

- Precio de **diagnóstico electrónico** (y si se descuenta al autorizar el servicio).
- Precio de **programación de ECM**.
- Precio de **programación de sistemas de emisiones**.
- Precio de **recuperación de módulo bloqueado / sin programa**.
- Precio por unidad en **clonación para flotilla**.
- Cargo adicional por **servicio en sitio** según zona.

Si prefieres no publicar cifras, la página funciona tal cual: el botón **Cotizar** de cada
tarjeta abre WhatsApp con el motor ya escrito en el mensaje.

---

## 3. Fotografías propias

Hoy el sitio usa fotografías de banco (Unsplash) verificadas una por una para que correspondan
al giro: motores diésel, tractocamiones, maquinaria de obra, minería, agricultura, autobuses,
trabajo sobre módulos electrónicos y diagnóstico eléctrico. Se reemplazan editando el `src`
de cada `<img>`.

### Tamaños y calidades requeridos

| Uso | Medida mínima | Proporción | Peso máx. | Formato |
|---|---|---|---|---|
| Hero de inicio (fondo a todo lo ancho) | **2400 × 1350 px** | 16:9 | 400 KB | WEBP (JPG de respaldo) |
| Banners de sección (`photo-banner`, `brands-image`) | **1600 × 900 px** | 16:9 | 300 KB | WEBP / JPG |
| Foto de "Quiénes somos" | **1400 × 1100 px** | 4:3 | 300 KB | WEBP / JPG |
| Imagen de cada servicio (`servicios.html`) | **1200 × 900 px** | 4:3 | 250 KB | WEBP / JPG |
| Tarjetas de casos (`trabajos.html`, inicio) | **1200 × 750 px** | 16:10 | 200 KB | WEBP / JPG |
| Módulo ECM sobre fondo neutro | **1000 × 750 px** | 4:3 | 200 KB | WEBP / PNG |
| Retrato de Francisco | **800 × 800 px** | 1:1 | 150 KB | WEBP / JPG |
| Favicon / icono de app | **512 × 512 px** | 1:1 | — | PNG transparente |

### Criterios de calidad

- **Resolución real**, no escalada: una foto de 800 px ampliada a 2400 se ve lavada.
- **Compresión**: calidad 80–85 en JPG/WEBP. Por encima de 90 sólo se gana peso.
- **Color**: perfil **sRGB**. Otros perfiles se ven apagados en el navegador.
- **Orientación**: horizontal en todos los casos menos el retrato.
- **Iluminación**: evitar contraluz y flash directo sobre superficies metálicas.
- **Encuadre**: dejar aire alrededor del sujeto; los banners recortan arriba y abajo.
- **Sin marcas de agua, sin fecha impresa y sin logotipos de terceros** visibles.
- Si se ven placas, números económicos o datos del cliente, hace falta su autorización.

### Cuántas fotos por trabajo

De **3 a 5 por caso**, en este orden:

1. La unidad completa (contexto: patio, obra, carretera).
2. El tablero con los códigos o el síntoma visible.
3. La etiqueta del módulo (número de parte legible).
4. El trabajo en proceso (equipo de diagnóstico conectado).
5. El resultado: unidad operando o tablero limpio.

Se pueden mandar directo del celular siempre que la cámara esté en la máxima resolución
y las fotos no pasen por WhatsApp (WhatsApp recomprime y baja mucho la calidad;
conviene enviarlas como **documento/archivo** o por correo).

---

## 4. Testimonios de clientes

La sección "Voces de quienes ya nos conocen" en `index.html` tiene **tres tarjetas marcadas
como pendientes**. No se inventaron testimonios. Para publicarlos hace falta, por cada cliente:

- Nombre (o inicial + apellido), puesto y empresa o tipo de unidad.
- El texto del testimonio tal cual lo dijo.
- Su autorización expresa para publicarlo.

En el HTML: quitar la clase `placeholder` de `<article class="testimonial placeholder">`,
sustituir el párrafo y actualizar el bloque `.testimonial-author`.

---

## 5. Casos de éxito reales

Los seis casos de `trabajos.html` (y los tres del inicio) son **ejemplos representativos**,
señalados como tales con una nota visible en ambas páginas. Al documentar casos reales,
sustituir el texto, la foto y la métrica de cada tarjeta, y retirar la nota editorial
(`<div class="editorial-note">`).

---

## 6. Otros

- **Logotipo en SVG**: hoy se usa el PNG. Un SVG se vería nítido en pantallas retina y en el footer.
- **Dirección física**, si se quiere publicar, para poder agregar un mapa en `contacto.html`.
- **Redes sociales reales** (Facebook, Instagram) en topbar, footer y página de contacto.
- **Dominio y analítica**: falta definir el dominio para las etiquetas `og:url` y `canonical`.
