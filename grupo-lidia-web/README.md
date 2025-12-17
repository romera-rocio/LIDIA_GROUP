# Grupo Lidia Web

Una landing page moderna para Grupo Lidia, construida con React, Vite y Tailwind CSS. Esta aplicación presenta los servicios de la empresa, incluyendo soluciones de automatización, chatbots y análisis de datos.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida para proyectos web.
- **Tailwind CSS**: Framework de CSS utilitario para estilos rápidos y responsivos.
- **Lucide React**: Biblioteca de iconos para React.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd grupo-lidia-web
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

Para ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo en `http://localhost:5173`.

## Construcción

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos construidos se encontrarán en la carpeta `dist`.

## Vista Previa

Para previsualizar la aplicación construida:

```bash
npm run preview
```

## Estructura del Proyecto

```
src/
├── App.jsx          # Componente principal de la aplicación
├── main.jsx         # Punto de entrada de React
├── App.css          # Estilos globales
├── index.css        # Estilos base con Tailwind
└── assets/          # Recursos estáticos

public/              # Archivos públicos
vite.config.js       # Configuración de Vite
tailwind.config.js   # Configuración de Tailwind CSS
postcss.config.js    # Configuración de PostCSS
eslint.config.js     # Configuración de ESLint
```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Previsualiza la aplicación construida.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto es privado y propiedad de Grupo Lidia.