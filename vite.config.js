import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/travel-vibe/',  // 設定部署的路徑
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), //設定 @ 為 src 路徑
    },
  },
})
