# Landing Page: Alianza Emprende

Este es el repositorio para la landing page de la Alianza Emprende.

Es un sitio estático construido con **Astro**, estilizado con **Tailwind CSS** y gestionado a través de **Content Collections** de Astro (Markdown).

## 📝 Gestión de Contenido

Todo el contenido del sitio (agrupaciones, noticias y eventos) se gestiona a través de archivos de texto simples. No necesitas saber programar para agregar o editar contenido.

**📖 [Guía completa: Cómo agregar y editar contenido](src/content/README.md)**

> **👨‍💻 ¿Eres desarrollador?** La información técnica sobre schemas y la implementación está al final del [README de content](src/content/README.md#-información-técnica-para-desarrolladores).

### ¿Qué puedes hacer?

- ✏️ **Agregar una nueva agrupación** a la alianza
- 📰 **Publicar noticias** o artículos
- 📅 **Anunciar eventos** próximos

Cada tipo de contenido tiene su propia carpeta dentro de `src/content/` y ejemplos que puedes copiar y modificar. La guía completa te explica paso a paso qué información necesitas incluir en cada caso.

Una vez que subas tus cambios, el sitio se actualizará automáticamente.

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

