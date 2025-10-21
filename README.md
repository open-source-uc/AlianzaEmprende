# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun\!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
├── .npmrc
├── .vscode
│   └── extensions.json
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 📦 Package Management

This project is configured to use **`npm`** as the required package manager.

  * The `package.json` file defines the `"packageManager"` field to enforce a specific `npm` version (e.g., `npm@11.6.2`).
  * The `.npmrc` file is configured with `save-exact = true`. This ensures that any new packages added with `npm install <package>` are saved with an exact version number (no `^` caret).

This setup guarantees that every team member and the production (CI/CD) environment use the exact same dependency versions, preventing "it works on my machine" issues.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command | Action |
| :--- | :--- |
| `npm ci` | **(Initial Install)** Installs dependencies *exactly* from `package-lock.json`. **Use this when cloning the repo for the first time** or in CI/CD. |
| `npm install` | **(Update/Add)** Synchronizes `node_modules` if `package-lock.json` changed (e.g., after a `git pull`). Also used to **add new packages** (e.g., `npm install react`). |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
