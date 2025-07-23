import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { federation } from '@module-federation/vite';
import frappeui from 'frappe-ui/vite'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [ 
    frappeui(),
    vue(),
    federation({
      name: "base",
      filename: "remoteEntry.js",
      exposes: {
        "./Counter": "./src/components/Counter.vue",
        "./router": "./src/router.js",
        "./App": "./src/App.vue",
        "./AppPage": "./src/pages/AppPage.vue",
      },
      shared: {
        'vue-router': {
          singleton: true,
          requiredVersion: '^4.4.5',
        },
        'pinia': {
          singleton: true,
        }
      }
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: `../${path.basename(path.resolve('..'))}/public/frontend`,
    emptyOutDir: true,
    target: 'es2015',
  },
  optimizeDeps: {
    include: ['frappe-ui > feather-icons', 'showdown', 'engine.io-client', 'highlight.js/lib/core', 'interactjs', 'node_modules'],
  },
})
