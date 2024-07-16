import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: '../backend/public/' // Ruta de la carpeta de salida
  },
  plugins: [react() , viteSingleFile()],
})
