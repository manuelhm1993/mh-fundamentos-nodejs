// Crear un servidor con express
// 1. Importar express
const express = require('express');
const path = require('path'); // Módulo para trabajar con rutas de archivos y directorios

// 2. Crear un objeto express
const app = express();

// Función propia para devolver la ruta absoluta
const getRutaAbsoluta = (ruta) => path.join(__dirname, ruta);

// Middleware para servir archivos estáticos, básicamente la carpeta public a la que accede el usuario
// __dirname devuelve la ruta absoluta del directorio padre
// Si se combina con el objeto path y se une con la carpeta public, siempre se encontrarán los assets en local o en producción
// Los middleware siempre se ejecutan antes que las solicitudes
app.use(express.static(getRutaAbsoluta('public')));

// 3. Realizar las configuraciones de petición y respuesta (rutas)
app.get('/', (req, res) => {
    res.send('Mi primer servidor con express');
});

// Esto es similar a la configuración de las rutas en laravel
app.get('/servicios', (req, res) => {
    res.send('Estás en la página de servicios');
});

// Middleware para gestionar errores 404
app.use((req, res, next) => {
    res.status(404).sendFile(getRutaAbsoluta('public/404.html'));
});

// 4. Crear los parámetros de configuración el host y el puerto
const hostname = 'localhost';
const port = 3000;

// 5. Poner el servidor a la escucha (el método listen de express es igual al de node)
app.listen(port, hostname, () => {
    console.log(`Servidor ejecutándose en: http://${hostname}:${port}/`);
});
