# Plantilla con React + TS , Vite y Appscript
Este proyecto es una plantilla React que utiliza Vite para el desarrollo y AppScript para el backend.

**Requisitos previos:**

* Node.js (versión 16 o superior)
* npm (viene instalado con Node.js)
* Clasp (Herramienta de Google Apps Script)

  
# Pasos de instalación:
**1. Clonación del repositorio:**

```bash
   git clone https://github.com/BreisonMendezServi/Templete-vite-react-ts-appscript.git
```

**2. Instalar dependencias::**

```bash
  npm install
```
**Configurar entorno de Appscript en clasp**
Ir al archivo .clasp.json en la carpeta backend y actualizar los valores a:

* scriptId: Id del proyecto de appscript
* rootDir: Ruta de la carpeta donde se encuentra el proyecto de manera local

**Ejecutar Clasp (solo la primera vez):**
* cd backend
* clasp login
* clasp clone <id del proyecto de Appscript>
* clasp push -w

**Ejecutar la aplicación y subir cambios a AppScript:**

Por cada cambio que hagamos en el frontend con React es necesario ejecutar el siguiente comando: 
```bash
npm run build
```
Esto creara o actualizara la carpeta public con el nuevo contenido del build configurado anteriormente
Puedes cambiar la ruta de construccion en el archivo vite.config.ts
Leer documentacion del plugin de vite: https://www.npmjs.com/package/vite-plugin-singlefile

**Recuerda**
Personaliza la plantilla con información específica de tu proyecto.
