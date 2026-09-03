import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Hospital-Management-System/',
  server: { proxy: { '/api': 'http://localhost:8080' } }
})

