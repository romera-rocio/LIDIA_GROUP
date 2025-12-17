
# 🚀 Grupo Lidia - Landing Page

Landing page profesional para servicios de automatización comercial, desarrollada con React + Tailwind CSS.

## 📋 Características

✅ Diseño moderno y profesional

✅ Totalmente responsive (móvil, tablet, desktop)

✅ Animaciones suaves al scroll

✅ Integración con WhatsApp

✅ Formulario de contacto funcional

✅ Optimizado para conversión

✅ SEO friendly

✅ Listo para deploy en cloud

## 🎨 Paleta de Colores

* **Violeta** : `#6B46C1` - Color principal
* **Marrón** : `#8B5E3C` - Color secundario
* **Naranja** : `#F59E0B` - CTAs y acentos
* **Blanco** : `#FFFFFF` - Fondo

## 📦 Instalación

### 1. Clonar o crear el proyecto

```bash
# Si es nuevo proyecto
npm create vite@latest grupo-lidia-web -- --template react
cd grupo-lidia-web
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar antes de ejecutar

⚠️  **IMPORTANTE** : Edita `src/App.jsx` línea 179 y cambia el número de WhatsApp:

```javascript
const whatsappNumber = "5493512345678"; // 👈 TU NÚMERO AQUÍ
```

Formato: `código_país + código_área + número` (sin espacios ni guiones)

Ejemplo Argentina: `5493512345678`

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173/) en tu navegador.

## 🚀 Deploy en Cloud

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com/)
3. Click en "New Project"
4. Importa tu repositorio
5. Vercel detectará automáticamente Vite
6. Click en "Deploy" 🎉

### Netlify

1. Sube tu código a GitHub
2. Ve a [netlify.com](https://netlify.com/)
3. Click en "Add new site" → "Import an existing project"
4. Conecta con GitHub
5. Configuración:
   * Build command: `npm run build`
   * Publish directory: `dist`
6. Click en "Deploy" 🎉

### Cloudflare Pages

1. Sube tu código a GitHub
2. Ve a [pages.cloudflare.com](https://pages.cloudflare.com/)
3. Click en "Create a project"
4. Conecta con GitHub
5. Configuración:
   * Build command: `npm run build`
   * Build output directory: `dist`
6. Click en "Save and Deploy" 🎉

## 📝 Personalización

### Cambiar número de WhatsApp

Archivo: `src/App.jsx` línea 179

### Cambiar email de contacto

Archivo: `src/App.jsx` línea 548

### Modificar servicios

Archivo: `src/App.jsx` líneas 64-97

### Modificar paquetes/precios

Archivo: `src/App.jsx` líneas 99-146

### Cambiar enlaces de redes sociales

Archivo: `src/App.jsx` líneas 580-595

### Modificar colores

Archivo: `tailwind.config.js`

## 📂 Estructura del Proyecto

```
grupo-lidia-web/
├── public/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Tecnologías

* **React 18** - Framework principal
* **Vite** - Build tool y dev server
* **Tailwind CSS** - Estilos
* **Lucide React** - Iconos
* **WhatsApp API** - Integración de contacto

## 📱 Secciones

1. **Header** - Navegación sticky
2. **Hero** - Presentación principal con CTAs
3. **Servicios** - 6 servicios principales
4. **Paquetes** - 3 planes de precios
5. **Casos de éxito** - Testimonios y resultados
6. **Contacto** - Formulario + WhatsApp directo
7. **Footer** - Redes sociales y copyright

## 🎯 SEO

El proyecto incluye:

* Meta tags optimizados
* Descripción y keywords
* Estructura semántica HTML5
* URLs limpias
* Responsive design

## 📞 Soporte

Para consultas sobre el proyecto:

* Email: info@grupolidia.com
* WhatsApp: +54 9 351 234-5678

## 📄 Licencia

© 2024 Grupo Lidia. Todos los derechos reservados.
