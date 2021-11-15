import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build : {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Component',
      fileName: (format) => `component.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      },
    }
  },
  plugins: [vue()],
})
