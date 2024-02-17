# Typescript utility library

This project is a template to create a typescript utility library based on [Vinodh Kumar](https://dev.to/vinomanick/create-a-typescript-utility-library-using-vite-916) tutorial.

This template is configured to use:

|          Feature          | Technology used |
| :-----------------------: | :-------------: |
|      Package manager      |      PNPM       |
|      Package bundler      |      Vite       |
|   Programming language    |   Typescript    |
|       Basic linting       |     ESLint      |
|      Code formatting      |    Prettier     |
| Linting only staged files |   lint-staged   |

## How to use ?

1. Install `node>=18.16.1` et `pnpm` globally.

1. Create a repo from this template and execute :

   ```
   cd repo/
   pnpm install
   ```

1. Change package name and version everywhere

   ```js
   // in package.json
   {
    "name": "xxxxx",
    "version": "x.x.x",
    ...
    "main": "./dist/xxxxx.umd.cjs",
    "module": "./dist/xxxxx.js",
    "exports": {
    	".": {
    		"import": "./dist/xxxxx.js",
    		"require": "./dist/xxxxx.umd.cjs"
    	}
    },
   }
   ```

   ```js
   // in vite.config.js
   export default defineConfig({
        ...

   	name: "xxxxx", // will be export under this name in umd
   	fileName: "xxxxx", // the name of the file to export

        ...
   });
   ```
