# 🕯️ Lumina Velas — Tienda Online

Tienda de e-commerce completa para una marca de velas artesanales. Diseño elegante, responsivo y 100% funcional.

## 📁 Estructura del Proyecto

```
velas-store/
├── index.html          # Página de inicio
├── tienda.html         # Catálogo de productos
├── carrito.html        # Carrito de compras
├── checkout.html       # Finalizar compra
├── nosotros.html       # Sobre nosotros
├── contacto.html       # Contacto y FAQ
├── css/
│   └── style.css       # Estilos principales
├── js/
│   └── main.js         # Lógica del e-commerce
└── images/             # Aquí subes tus fotos
```

## ✨ Funcionalidades

- ✅ Catálogo de productos con filtros (categoría, aroma, precio)
- ✅ Carrito de compras persistente (localStorage)
- ✅ Checkout con múltiples métodos de pago
- ✅ Cupones de descuento (`LUMINA10`, `BIENVENIDA`)
- ✅ Envío gratis en compras mayores a $500
- ✅ Diseño 100% responsivo (móvil, tablet, desktop)
- ✅ 12 productos de ejemplo incluidos

## 🚀 Cómo publicar en GitHub Pages (GRATIS)

### Paso 1: Crear cuenta en GitHub
1. Ve a https://github.com
2. Clic en **"Sign up"** y crea tu cuenta (gratis)

### Paso 2: Crear un nuevo repositorio
1. Clic en el botón verde **"New"** o **"+" → "New repository"**
2. Nombre del repositorio: `luminavelas` (o el que prefieras)
3. Selecciona **"Public"**
4. ✅ Marca la casilla **"Add a README file"**
5. Clic en **"Create repository"**

### Paso 3: Subir los archivos
1. Dentro de tu repositorio, clic en **"Add file" → "Upload files"**
2. Arrastra TODOS los archivos de la carpeta `velas-store/` (incluyendo subcarpetas css/ y js/)
3. Escribe un mensaje de commit como: `Primer commit - tienda de velas`
4. Clic en **"Commit changes"**

### Paso 4: Activar GitHub Pages
1. Ve a la pestaña **"Settings"** de tu repositorio
2. En el menú lateral izquierdo, busca y clic en **"Pages"**
3. En "Source", selecciona **"Deploy from a branch"**
4. En "Branch", selecciona **"main"** y carpeta **"/(root)"**
5. Clic en **"Save"**
6. Espera 1-2 minutos y recarga la página
7. Tu URL aparecerá en verde: `https://tunombre.github.io/luminavelas/`

### Paso 5: Personalizar
- Edita los productos en `js/main.js` (cambiar nombres, precios, etc.)
- Reemplaza las imágenes placeholder en la carpeta `images/`
- Cambia colores en `css/style.css` (variables al inicio)
- Actualiza datos de contacto en todos los HTML

## 🎨 Personalización rápida

### Cambiar nombre de la marca
Busca y reemplaza "Lumina" en todos los archivos HTML.

### Cambiar colores
Edita las variables CSS al inicio de `css/style.css`:
```css
--color-primary: #8B6914;    /* Color principal */
--color-accent: #D4A853;     /* Color de acento */
--color-bg: #FAF8F5;         /* Fondo */
```

### Agregar productos
Edita el array `products` en `js/main.js`. Cada producto necesita:
- `id` — número único
- `name` — nombre del producto
- `category` — aromaticas | decorativas | sets
- `aroma` — lavanda | vainilla | citrico | amaderado | floral | varios
- `price` — precio en número
- `featured` — true/false (aparece en inicio)

### Agregar fotos reales
1. Sube tus fotos a la carpeta `images/`
2. Reemplaza los divs placeholder por `<img src="images/tu-foto.jpg">`

## 💳 Métodos de pago configurados

- Transferencia bancaria
- Mercado Pago
- PayPal
- Efectivo / Contra entrega

> ⚠️ **Nota:** Para recibir pagos reales necesitas conectar una pasarela de pago real (Mercado Pago, Stripe, etc.). El checkout actual guarda los datos y muestra confirmación, pero no procesa pagos automáticamente.

## 📱 Redes sociales

Busca en los HTML los enlaces con `href="#"` y reemplázalos por tus URLs reales de Instagram, Facebook, TikTok y WhatsApp.

## 📝 Licencia

Este proyecto es de uso libre. Modifícalo como necesites para tu negocio.

---

**¿Preguntas?** Escríbeme por WhatsApp o correo electrónico.
