import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
  },
  define: {
    // Allows VITE_PLATFORM_API to be set at build time for each deployment target
  },
})
