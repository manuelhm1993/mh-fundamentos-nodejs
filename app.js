// Importar módulos
const express = require('express');
const path = require('path'); 

// Variables globales
const app = express();
const hostname = 'localhost';
const port = 3000;

// Funciones propias
const getRutaAbsoluta = (ruta) => path.join(__dirname, ruta);

// Middlewares
app.use(express.static(getRutaAbsoluta('public')));

// Rutas
app.get('/', (req, res) => {
    res.send('Mi primer servidor con express');
});

app.get('/servicios', (req, res) => {
    res.send('Estás en la página de servicios');
});

// Middleware para gestionar errores 404
app.use((req, res, next) => {
    res.status(404).sendFile(getRutaAbsoluta('public/404.html'));
});

// Oyentes
app.listen(port, hostname, () => {
    console.log(`Servidor ejecutándose en: http://${hostname}:${port}/`);
});
