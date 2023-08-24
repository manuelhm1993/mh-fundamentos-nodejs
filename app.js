// Crear un servidor con express
// 1. Importar express
const express = require('express');

// 2. Crear un objeto express
const app = express();

// 3. Realizar las configuraciones de petición y respuesta
app.get('/', (req, res) => {
    res.send('Mi primer servidor con express');
});

// Esto es similar a la configuración de las rutas en laravel
app.get('/servicios', (req, res) => {
    res.send('Estás en la página de servicios');
});

// 4. Crear los parámetros de configuración el host y el puerto
const hostname = 'localhost';
const port = 3000;

// 5. Poner el servidor a la escucha (el método listen de express es igual al de node)
app.listen(port, hostname, () => {
    console.log(`Servidor ejecutándose en: http://${hostname}:${port}/`);
});
