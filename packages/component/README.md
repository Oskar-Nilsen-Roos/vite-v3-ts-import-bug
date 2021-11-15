# Vue 3 + Typescript + Vite
vite vue-ts scaffold with some changes:

1. build script is changed to output a single `index.d.ts` file.
2. `vite.config.js` & `package.json` is set up according to [vite documentation for library mode](https://vitejs.dev/guide/build.html#library-mode)

## Important note
`"vue-tsc": "0.3.0"` for some reason, scaffolding --template vue-ts gives you vue-tsc 0.3.0, which is not even a version yet? Therefore "vue-tsc": "0.29.5" is used instead.