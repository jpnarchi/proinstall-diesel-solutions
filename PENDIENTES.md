# Pendientes de contenido — ProInstall

Todo lo que está aquí se publicó con un valor provisional y debe reemplazarse.

---

## 1. Datos de contacto (Francisco)

Los datos actuales son **marcadores de posición**. Aparecen en las 4 páginas
(barra superior, footer, botón flotante de WhatsApp y página de contacto).

| Dato | Valor provisional |
|---|---|
| Teléfono (texto) | `+52 55 0000 0000` |
| Teléfono (enlace `tel:`) | `+525500000000` |
| WhatsApp (`wa.me/…`) | `525500000000` |
| Correo | `contacto@proinstalldiesel.com` |
| Horario | `Lun – Sáb · 8:00 a 19:00` |
| Cobertura | `Servicio en taller y en campo · México` |
| Facebook / Instagram | enlaces genéricos |

Para reemplazarlos de golpe, desde la raíz del proyecto:

```bash
# WhatsApp y tel: (sólo dígitos, con lada de país)
grep -rl '525500000000' *.html | xargs sed -i '' 's/525500000000/52XXXXXXXXXX/g'
# Teléfono visible
grep -rl '+52 55 0000 0000' *.html | xargs sed -i '' 's/+52 55 0000 0000/+52 XX XXXX XXXX/g'
# Correo
grep -rl 'contacto@proinstalldiesel.com' *.html | xargs sed -i '' 's/contacto@proinstalldiesel.com/CORREO_REAL/g'
```

Horario, cobertura y redes sociales conviene editarlos a mano.

---

## 2. Precios por motor

`motores.html` lista **16 familias de motor en 8 marcas**. Falta el precio: hoy cada
renglón muestra `Consultar` y hay un aviso visible de que la lista está en definición.

Para publicar un precio, en el renglón correspondiente cambia:

```html
<span class="engine-price">Consultar</span>
```

por:

```html
<span class="engine-price set">$8,500</span>
```

La clase `set` muestra la cifra en grande; sin ella se ve como etiqueta azul.

Conviene definir, por familia de motor: diagnóstico, programación de computadora,
programación de emisiones, recuperación de módulo bloqueado y precio por unidad en flotilla.

---

## 3. Fotografías

**Francisco va a enviar las fotos que quiere usar.** Mientras tanto el sitio usa fotografías
de banco, verificadas una por una para que correspondan al giro. Se reemplazan editando
el `src` de cada `<img>`.

### Dónde van las fotos de motor que pidió el cliente

- **`index.html` → sección "Motores que atendemos"**: ocho tarjetas, una por marca
  (`.brand-card`). Cada una lleva una foto de fondo. **Son las que deben llevar la foto
  real del motor de cada marca.**
- **`motores.html`**: la misma foto se repite como encabezado de cada bloque de marca
  (`.engine-photo`). Al cambiar una, cambia las dos para que coincidan.

Las fotos de banco que están ahora son ilustrativas del tipo de equipo (motor, tractocamión,
excavadora, tractor); **no son motores de esa marca**. Conviene sustituirlas en cuanto
lleguen las propias.

### Tamaños y calidades

| Uso | Medida mínima | Proporción | Peso máx. | Formato |
|---|---|---|---|---|
| Hero de inicio (fondo a todo lo ancho) | **2400 × 1350 px** | 16:9 | 400 KB | WEBP (JPG de respaldo) |
| Tarjeta de marca de motor (inicio) | **1200 × 900 px** | 4:3 | 250 KB | WEBP / JPG |
| Encabezado de marca (motores.html) | **1400 × 540 px** | 21:8 | 250 KB | WEBP / JPG |
| Imagen de cada servicio | **1200 × 900 px** | 4:3 | 250 KB | WEBP / JPG |
| Foto de "Quiénes somos" | **1400 × 1100 px** | 4:3 | 300 KB | WEBP / JPG |
| Tarjetas de trabajos | **1200 × 750 px** | 16:10 | 200 KB | WEBP / JPG |
| Retrato de Francisco | **800 × 800 px** | 1:1 | 150 KB | WEBP / JPG |
| Favicon / icono de app | **512 × 512 px** | 1:1 | — | PNG transparente |

### Criterios de calidad

- **Resolución real**, no escalada: una foto de 800 px ampliada a 2400 se ve lavada.
- **Compresión**: calidad 80–85 en JPG/WEBP.
- **Color**: perfil **sRGB**.
- **Orientación**: horizontal en todos los casos menos el retrato.
- Evitar contraluz y flash directo sobre superficies metálicas.
- Dejar aire alrededor del sujeto: las tarjetas recortan arriba y abajo.
- **Sin marcas de agua, sin fecha impresa y sin logotipos de terceros.**
- Si se ven placas o datos del cliente, hace falta su autorización.
- **No mandarlas por WhatsApp como foto** (recomprime y baja mucho la calidad):
  enviarlas como **documento/archivo** o por correo.

### Cuántas por trabajo

De **3 a 5**, en este orden: unidad completa → tablero con el síntoma → etiqueta del
módulo legible → equipo de diagnóstico conectado → resultado.

---

## 4. Logotipo

- El **footer usa `assets/proinstall-logo-blanco.png`**, una versión en blanco generada a
  partir del PNG original (se conservó la silueta y se quitó la caja blanca de fondo, que
  es lo que se veía "encimado").
- Cuando llegue el **PNG oficial del logo en blanco**, basta con reemplazar ese archivo
  conservando el mismo nombre; no hay que tocar el HTML.
- El header sigue usando `assets/proinstall-logo.png` a color, porque va sobre fondo blanco.
- Un **SVG** del logo se vería más nítido en pantallas retina; si existe, conviene pedirlo.

---

## 5. Trabajos anteriores

Las tres tarjetas de la sección "Lo que resolvemos" en `index.html` son **ejemplos
representativos**, señalados con una nota visible. Al documentar casos reales, sustituir
texto y foto, y retirar la nota (`<div class="editorial-note">`).

---

## 6. Otros

- **Dirección física**, si se quiere publicar, para poder agregar un mapa en `contacto.html`.
- **Redes sociales reales** (Facebook, Instagram).
- **Dominio** para las etiquetas `og:url` y `canonical`.
