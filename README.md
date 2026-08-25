# 🕯️ Shaill Velas — Tienda Online

Tienda de e-commerce completa para Shaill Velas, marca de ceras de soya aromáticas. Diseño elegante en tonos rosa pastel, responsivo y 100% funcional.

## 📁 Estructura del Proyecto

```
shaill-velas/
├── index.html          # Página de inicio
├── tienda.html         # Catálogo de productos
├── carrito.html        # Carrito de compras
├── checkout.html       # Finalizar compra
├── nosotros.html       # Sobre nosotros
├── contacto.html       # Contacto y FAQ
├── css/
│   └── style.css       # Estilos principales (paleta rosa pastel)
├── js/
│   └── main.js         # Lógica del e-commerce
└── images/             # Fotos de productos y logo
```

## ✨ Funcionalidades

- ✅ Catálogo de productos con filtros (categoría, aroma, precio)
- ✅ Carrito persistente (localStorage)
- ✅ Checkout con 4 métodos de pago
- ✅ Cupones de descuento (`SHAILL10`, `BIENVENIDA`)
- ✅ Envío gratis en compras mayores a $500
- ✅ Diseño 100% responsivo
- ✅ Fotos reales de productos integradas

## 🚀 Cómo publicar en GitHub Pages (GRATIS)

### Paso 1: Crear cuenta en GitHub
1. Ve a https://github.com
2. Clic en **"Sign up"** y crea tu cuenta (gratis)

### Paso 2: Crear un nuevo repositorio
1. Clic en el botón verde **"New"** o **"+" → "New repository"**
2. Nombre del repositorio: `shaillvelas` (o el que prefieras)
3. Selecciona **"Public"**
4. ✅ Marca la casilla **"Add a README file"**
5. Clic en **"Create repository"**

### Paso 3: Subir los archivos
1. Dentro de tu repositorio, clic en **"Add file" → "Upload files"**
2. Arrastra TODOS los archivos de la carpeta (incluyendo subcarpetas css/, js/ e images/)
3. Escribe un mensaje de commit como: `Tienda Shaill Velas`
4. Clic en **"Commit changes"**

### Paso 4: Activar GitHub Pages
1. Ve a la pestaña **"Settings"** de tu repositorio
2. En el menú lateral izquierdo, busca y clic en **"Pages"**
3. En "Source", selecciona **"Deploy from a branch"**
4. En "Branch", selecciona **"main"** y carpeta **"/(root)"**
5. Clic en **"Save"**
6. Espera 1-2 minutos y recarga la página
7. Tu URL aparecerá en verde: `https://tunombre.github.io/shaillvelas/`

## 🎨 Personalización

### Cambiar precios o productos
Edita el array `products` en `js/main.js`.

### Cambiar colores
Edita las variables CSS al inicio de `css/style.css`:
```css
--color-primary: #D4849A;    /* Rosa principal */
--color-accent: #E8A8B8;     /* Rosa claro */
--color-bg: #FFF5F7;         /* Fondo */
```

### Agregar más fotos
Sube tus fotos a la carpeta `images/` y actualiza la ruta en `js/main.js`.

## 💳 Métodos de pago configurados

- Transferencia bancaria
- Mercado Pago
- PayPal
- Efectivo / Contra entrega

> ⚠️ **Nota:** Para recibir pagos reales necesitas conectar una pasarela de pago real.

## 📱 Redes sociales

Busca en los HTML los enlaces con `href="#"` y reemplázalos por tus URLs reales.

---

**¿Preguntas?** Escríbeme por WhatsApp o correo electrónico.
