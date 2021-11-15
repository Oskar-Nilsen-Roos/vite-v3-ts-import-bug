# Vite + Vue 3 + Typescript NPM module Error Reproduction
Reproduction repo for error recieved while importing a type module of a Vue component with Typescript.

This is a reproduction repo, and applications are split up into two separate folders to simulate an import from NPM, so `import { Component } from '../../component'` would instead look something like `import { Component } from '@company/component'` in regular cases, however the result is the same.

It pretty clearly seems to be a Typescript issue but I'm not sure what is causing it. Temporarily adding a `//@ts-ignore` solves it but I'd like to get to the bottom of what I'm doing wrong.

If you know anything please let me know!

## Reproduction Steps
1. `npm run build`

Expected Result:
```bash
src/App.vue:4:27 - error TS2306: File '/Users/user/Projects/vite-v3-ts-import-bug/packages/component/index.d.ts' is not a module.

4 import { Component } from '../../component'
                            ~~~~~~~~~~~~~~~~~
```