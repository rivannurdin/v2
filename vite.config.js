import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base:'rivan-codes.github.io/',
=======
  base:'/',
>>>>>>> fd0a52f568d68f24ce60820e630da29b32055074
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
