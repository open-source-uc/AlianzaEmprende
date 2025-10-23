# Landing Page: Alianza Emprende

Este es el repositorio para la landing page de la Alianza Emprende.

Es un sitio estático construido con **Astro**, estilizado con **Tailwind CSS** y gestionado a través de **Content Collections** de Astro (Markdown).

## 📝 Gestión de Contenido (Content Collections)

Este proyecto no usa base de datos ni CMS. Todo el contenido dinámico (agrupaciones y noticias) se gestiona editando archivos Markdown en la carpeta `src/content/`.

La estructura (campos) que debe tener cada archivo `.md` está definida en `src/content/config.ts`. Si un archivo Markdown no cumple con esa estructura, el proyecto fallará al construir.

### Para añadir una nueva Agrupación:

1.  Crea un nuevo archivo `.md` dentro de `src/content/groups/`.
2.  Rellena el *frontmatter* (las variables al inicio del archivo) según el *schema* definido en `config.ts`.

### Para añadir una nueva Noticia:

1.  Crea un nuevo archivo `.md` dentro de `src/content/news/`.
2.  Rellena el *frontmatter* correspondiente.

### Para añadir un nuevo Evento:

1.  Crea un nuevo archivo `.md` dentro de `src/content/events/`.
2.  Relenna el *frontmatter* correspondiente.

El sitio se reconstruirá y desplegará automáticamente al hacer *push* a la rama principal.

## 📦 Gestión de Paquetes

Este proyecto está configurado para usar **`npm`** como el gestor de paquetes requerido.

  * El archivo `package.json` define el campo `"packageManager"` para forzar una versión específica de `npm` (ej. `npm@11.6.2`).
  * El archivo `.npmrc` está configurado con `save-exact = true`. Esto asegura que cualquier paquete nuevo añadido con `npm install <package>` se guarde con un número de versión exacto (sin el símbolo `^`).

Esta configuración garantiza que cada miembro del equipo y el entorno de producción (CI/CD) usen exactamente las mismas versiones de dependencias, previniendo problemas de "en mi máquina funciona".

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando | Acción |
| :--- | :--- |
| `npm ci` | **(Instalación Inicial)** Instala las dependencias *exactamente* desde `package-lock.json`. **Usa esto al clonar el repo por primera vez** o en CI/CD. |
| `npm install` | **(Actualizar/Añadir)** Sincroniza `node_modules` si `package-lock.json` cambió (ej. después de un `git pull`). También se usa para **añadir nuevos paquetes** (ej. `npm install react`). |
| `npm run dev` | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build` | Compila tu sitio de producción en `./dist/` |
| `npm run preview` | Previsualiza tu sitio compilado localmente, antes de desplegar |
| `npm run astro ...` | Ejecuta comandos CLI como `astro add`, `astro check` |

