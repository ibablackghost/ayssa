import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['framer-motion'],
  },
  server: {
    host: true, // Permet l'accès depuis le réseau local
    port: 5173, // Port par défaut
    hmr: true,
  },
})

