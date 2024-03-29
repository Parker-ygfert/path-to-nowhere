import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

const env = {
  ...process.env,
  ...loadEnv('mock', process.cwd())
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    })
  ],
  server: {
    host: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
    },
    extensions: [
      '.vue'
    ]
  },
  base: env.VITE_PATH
})
