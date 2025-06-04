# Portafolio Personal

Este es un proyecto de portafolio personal desarrollado con [Next.js](https://nextjs.org/) y [Tailwind CSS](https://tailwindcss.com/), diseñado para mostrar mis proyectos, experiencia y habilidades como desarrollador backend.

## Características

- **Next.js 15**: Framework React moderno para aplicaciones web rápidas y escalables.
- **Tailwind CSS 4**: Utilidad para estilos rápidos y personalizables.
- **TypeScript**: Tipado estático para mayor robustez y mantenibilidad.
- **Componentes reutilizables**: Diseño basado en componentes para fácil extensión y mantenimiento.
- **Diseño responsive**: Adaptado para dispositivos móviles, tablets y escritorio.
- **Animaciones sutiles**: Mejoran la experiencia de usuario.
- **Optimización de rendimiento**: Carga eficiente de recursos y buenas prácticas.
- **Secciones principales**:
  - **Header**: Navegación principal.
  - **Hero**: Presentación y llamada a la acción.
  - **Sobre mí**: Descripción personal y enlaces sociales.
  - **Habilidades**: Tecnologías y herramientas dominadas.
  - **Proyectos**: Lista de proyectos destacados con enlaces a código y demo.
  - **Experiencia**: Trayectoria profesional y logros.
  - **Contacto**: Botones para contacto directo y redes.
  - **Footer**: Información de derechos y branding.
- **Soporte para iconos**: Uso de [lucide-react](https://lucide.dev/) para iconografía moderna.
- **Configuración ESLint y Prettier**: Código limpio y consistente.
- **Soporte para fuentes personalizadas**: Integración con [Geist](https://vercel.com/font).

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/portfolio-frontend.git
   cd portfolio-frontend
   ```
2. Instala las dependencias:
   ```sh
   npm install
   # o
   yarn install
   # o
   pnpm install
   # o
   bun install
   ```
3. Ejecuta el servidor de desarrollo:
   ```sh
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev
   ```
4. Abre tu navegador y visita [http://localhost:3000](http://localhost:3000) para ver el resultado.

## Scripts disponibles

- `dev`: Inicia el servidor de desarrollo.
- `build`: Genera la build de producción.
- `start`: Inicia la aplicación en modo producción.
- `lint`: Ejecuta ESLint para analizar el código.

## Estructura de carpetas

- `/app`: Entradas principales, layout y estilos globales.
- `/components`: Componentes reutilizables y secciones de la página.
- `/data`: Datos estáticos de proyectos, experiencia, habilidades, etc.
- `/lib` y `/utils`: Utilidades y tipos TypeScript.
- `/public`: Recursos estáticos (imágenes, SVGs).
- `/styles`: Archivos de estilos globales (si aplica).

## Personalización

- Modifica los archivos en `/data` para actualizar tus proyectos, experiencia y habilidades.
- Cambia los estilos en `/app/globals.css` o personaliza los componentes en `/components`.

## Despliegue

Puedes desplegar fácilmente en [Vercel](https://vercel.com/) u otras plataformas compatibles con Next.js.

---

Desarrollado con ❤️ usando Next.js y Tailwind CSS.
```
